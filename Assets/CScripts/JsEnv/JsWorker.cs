using System;
using System.Collections.Generic;
using System.Threading;
using Puerts;
using UnityEngine;

public class JsWorker : MonoBehaviour, IDisposable
{
    public static JsWorker New(ILoader loader)
    {
        return New(loader, null);
    }
    public static JsWorker New(ILoader loader, string filepath)
    {
        var obj = new GameObject("JsWorker");
        DontDestroyOnLoad(obj);
        var ins = obj.AddComponent<JsWorker>();
        ins.loader = new SyncLoader(ins, loader);
        if (!string.IsNullOrEmpty(filepath))
            ins.Working(filepath);

        return ins;
    }

    /// <summary> jsWorker.ts脚本 </summary>
    private const string JS_WORKER = "require('./common/jsWorker')";
    /// <summary> 每次处理的事件数量 </summary>
    private const int PROCESS_COUNT = 5;
    /// <summary> Unity主线程ID </summary>
    private static readonly int MAIN_THREAD_ID = Thread.CurrentThread.ManagedThreadId;

    public JsEnv JsEnv { get; private set; }
    //消息接口
    public Func<string, Package, Package> mainOnMessage { get; set; }
    public Func<string, Package, Package> childOnMessage { get; set; }
    //线程初始完成, 且运行中
    public bool IsAlive
    {
        get
        {
            return this != null && this.running &&
                 this.thread != null && this.thread.IsAlive;
        }
    }
    //同步对象
    private SyncLoader loader;
    //同步状态
    private bool syncing;
    private SyncProcess sync;
    public SyncProcess Sync
    {
        get
        {
            if (!this.thread.IsAlive)
                throw new Exception("Thread is not woring!");
            return this.sync;
        }
    }
    //线程
    private Thread thread;
    private bool running = false;
    //线程安全锁定
    private const int lockTimeout = 1000;
    private ReaderWriterLock locker;
    //消息集合
    private Queue<Event> mainMessages;
    private Queue<Event> childMessages;
    private Queue<(string, string)> evalMessages;

    private JsWorker()
    {
        sync = new SyncProcess(this);
        locker = new ReaderWriterLock();
        mainMessages = new Queue<Event>();
        childMessages = new Queue<Event>();
        evalMessages = new Queue<(string, string)>();
    }
    void Start()
    {
        if (loader == null)
        {
            this.enabled = false;
            throw new Exception("instance cannot working, loader is null");
        }
    }
    void Update()
    {
        ProcessMain();
        sync.ProcessMain();
        loader.ProcessMain();
    }
    void OnDestroy()
    {
        Dispose();
    }
    void Working(string filepath)
    {
        if (this.JsEnv != null || this.thread != null || this.running)
            throw new Exception("Thread is running, cannot start repeatedly!");
        if (this.loader == null)
            throw new Exception("Thread cannot start working, loader is null!");
        if (!this.enabled)
            throw new Exception("Thread cannot start working, main thread is disable");

        syncing = false;
        running = true;
        thread = new Thread(new ThreadStart(() =>
        {
            JsEnv jsEnv = null;
            try
            {
                // JsEnv脚本放在Resource目录下,故ILoader仅允许在主线程调用
                // 子线程SyncLoader接口会阻塞线程, 直到主线程调用ILoader后才会继续执行
                // JsEnv初始化时将调用SyncLoader接口
                jsEnv = JsEnv = new JsEnv(loader);
                jsEnv.UsingAction<string, string>();
                jsEnv.UsingAction<string, Package>();
                jsEnv.UsingFunc<string, Package, object>();
                jsEnv.UsingFunc<string, Package, Package>();
                jsEnv.Eval(JS_WORKER);
                jsEnv.Eval<Action<JsWorker>>(@"(function (_w){ (this ?? globalThis)['globalWorker'] = new JsWorker(_w); })")(this);
                jsEnv.Eval(string.Format("require(\"{0}\")", filepath));
                while (running && jsEnv == JsEnv && this != null)
                {
                    jsEnv.Tick();

                    ProcessChild();
                    sync.ProcessChild();
                    ProcessChildEval(jsEnv);

                    Thread.Sleep(20);
                }
            }
            catch (ThreadInterruptedException /** e */)
            {
                //线程在休眠期间, 调用thread.Interrupt()抛出此异常, 此处不做处理, 不影响运行
                //UnityEngine.Debug.Log(e.ToString());
            }
            catch (Exception e)
            {
                UnityEngine.Debug.LogError(e.ToString());
            }
            finally
            {
                JsEnv = null;
                if (jsEnv != null)
                {
                    jsEnv.Tick();
                    jsEnv.Dispose();
                }
            }
        }));
        thread.IsBackground = true;
        thread.Start();
    }
    public void VerifySafety(bool isMainThread)
    {
        var id = Thread.CurrentThread.ManagedThreadId;
        if (isMainThread && id != MAIN_THREAD_ID || !isMainThread && id == MAIN_THREAD_ID)
            throw new Exception("Incorrect in thread");
    }
    public void Startup(string filepath)
    {
        Working(filepath);
    }
    public void Dispose()
    {
        mainOnMessage = null;
        childOnMessage = null;
        running = false;
        JsEnv = null;
        if (thread != null)
        {
            //此处仅通知线程中断, 由线程自行结束(使用Abort将导致crash<puerts>)
            thread.Interrupt();
            //等待线程结束
            while (thread.IsAlive) { }
            //GC
            //System.GC.Collect();
            //System.GC.WaitForPendingFinalizers();
        }
        thread = null;
    }
    public void CallMain(string name, Package data)
    {
        lock (mainMessages)
        {
            mainMessages.Enqueue(new Event()
            {
                name = name,
                data = data
            });
        }
    }
    public void CallChild(string name, Package data)
    {
        lock (childMessages)
        {
            childMessages.Enqueue(new Event()
            {
                name = name,
                data = data
            });
        }
    }
    public void Eval(string chunk, string chunkName = "chunk")
    {
        if (chunk == null)
            return;
        lock (evalMessages)
        {
            evalMessages.Enqueue((chunk, chunkName));
        }
    }
    private void ProcessMain()
    {
        if (mainMessages.Count > 0)
        {
            List<Event> events = new List<Event>();
            lock (mainMessages)
            {
                int count = PROCESS_COUNT;
                while (count-- > 0 && mainMessages.Count > 0)
                    events.Add(mainMessages.Dequeue());
            }
            Func<string, Package, Package> func = this.mainOnMessage;
            if (func != null)
            {
                for (int i = 0; i < events.Count; i++)
                {
                    try
                    {
                        func(events[i].name, events[i].data);
                    }
                    catch (Exception e)
                    {
                        UnityEngine.Debug.LogError(e.Message);
                    }
                }
            }
        }
    }
    private void ProcessChild()
    {
        if (childMessages.Count > 0)
        {
            List<Event> events = new List<Event>();
            lock (childMessages)
            {
                int count = PROCESS_COUNT;
                while (count-- > 0 && childMessages.Count > 0)
                    events.Add(childMessages.Dequeue());
            }
            Func<string, Package, Package> func = this.childOnMessage;
            if (func != null)
            {
                for (int i = 0; i < events.Count; i++)
                {
                    try
                    {
                        func(events[i].name, events[i].data);
                    }
                    catch (Exception e)
                    {
                        UnityEngine.Debug.LogError(e.Message);
                    }
                }
            }
        }
    }
    private void ProcessChildEval(JsEnv jsEnv)
    {
        if (evalMessages.Count > 0)
        {
            List<(string, string)> chunks = new List<(string, string)>();
            lock (evalMessages)
            {
                int count = PROCESS_COUNT;
                while (count-- > 0 && evalMessages.Count > 0)
                    chunks.Add(evalMessages.Dequeue());
            }
            for (int i = 0; i < chunks.Count; i++)
            {
                try
                {
                    var chunk = chunks[i];
                    jsEnv.Eval(chunk.Item1, chunk.Item2);
                }
                catch (Exception e)
                {
                    UnityEngine.Debug.LogError(e.Message);
                }
            }
        }
    }
    private void ProcessAsyncing()
    {
        if (Thread.CurrentThread.ManagedThreadId == MAIN_THREAD_ID)
        {
            sync.ProcessMain();
            loader.ProcessMain();
        }
        else
            sync.ProcessChild();
    }
    /// <summary>
    /// 获取同步锁定, 返回是否成功
    /// (注:如果两条线程都锁定则会死锁(它们都在等待对方同步), 因此只能有一条线程锁定同步状态)
    /// </summary>
    internal bool AcquireSyncing()
    {
        if (!this.IsAlive)
            return false;

        var timeout = DateTime.Now + TimeSpan.FromMilliseconds(lockTimeout);
        //如果未处于同步中直接返回, 否则同步后等待状态更新
        while (DateTime.Now <= timeout)
        {
            //请求锁
            locker.AcquireWriterLock(lockTimeout);
            if (!this.syncing)
            {
                this.syncing = true;
                locker.ReleaseWriterLock();
                return true;
            }
            ProcessAsyncing();
            //释放锁
            locker.ReleaseWriterLock();
            Thread.Sleep(20);
        }
        return false;
    }
    /// <summary> 释放同步锁定 </summary>
    internal void ReleaseSyncing()
    {
        if (!this.IsAlive)
            return;

        locker.AcquireWriterLock(lockTimeout);
        this.syncing = false;
        locker.ReleaseWriterLock();
    }
    private class Event
    {
        public string name;
        public Package data;
    }
    private class SyncLoader : ILoader
    {
        private JsWorker worker = null;
        //脚本缓存
        private Dictionary<string, string> scripts;
        private Dictionary<string, string> debugPaths;
        private Dictionary<string, bool> state;
        //这个ILoader只能在主线程调用, 而本实例化对象在子线程中使用需要通过主线程同步
        private ILoader loader;
        //线程安全
        private ReaderWriterLock locker = new ReaderWriterLock();
        private const int lockTimeout = 1000;
        //加载内容
        private string filePath = null;
        private bool fileExists = false;
        private string readPath = null;
        private string readContent = null;
        private string debugpath = null;

        public SyncLoader(JsWorker worker, ILoader loader)
        {
            this.worker = worker;
            this.loader = loader;
            this.scripts = new Dictionary<string, string>();
            this.debugPaths = new Dictionary<string, string>();
            this.state = new Dictionary<string, bool>();
        }

        public bool FileExists(string filepath)
        {
            bool result = false;
            if (this.state.TryGetValue(filepath, out result))
                return result;
            //获取同步状态
            if (!worker.AcquireSyncing())
                throw new Exception("Other thread is syncing!");
            //写入主线程
            locker.AcquireWriterLock(lockTimeout);
            this.filePath = filepath;
            this.fileExists = false;
            locker.ReleaseWriterLock();
            //等待主线程同步
            try
            {
                while (worker.IsAlive)
                {
                    locker.AcquireReaderLock(lockTimeout);
                    if (this.filePath == null)
                        break;
                    locker.ReleaseReaderLock();
                }
                this.state.Add(filepath, this.fileExists);
                return this.fileExists;
            }
            finally
            {
                if (locker.IsReaderLockHeld) locker.ReleaseReaderLock();
                worker.ReleaseSyncing();
            }
        }
        public string ReadFile(string filepath, out string debugpath)
        {
            string script = null;
            if (this.scripts.TryGetValue(filepath, out script))
            {
                debugpath = this.debugPaths[filepath];
                return script;
            }
            //获取同步状态
            if (!worker.AcquireSyncing())
                throw new Exception("Other thread is syncing!");
            //写入主线程
            locker.AcquireWriterLock(lockTimeout);
            this.readPath = filepath;
            this.readContent = null;
            this.debugpath = null;
            locker.ReleaseWriterLock();
            //等待主线程同步
            try
            {
                while (worker.IsAlive)
                {
                    locker.AcquireReaderLock(lockTimeout);
                    if (this.readPath == null)
                        break;
                    locker.ReleaseReaderLock();
                }
                this.scripts.Add(filepath, this.readContent);
                this.debugPaths.Add(filepath, this.debugpath);

                debugpath = this.debugpath;
                return this.readContent;
            }
            finally
            {
                if (locker.IsReaderLockHeld) locker.ReleaseReaderLock();
                worker.ReleaseSyncing();
            }
        }

        public void ProcessMain()
        {
            if (this.filePath != null || this.readPath != null)
            {
                try
                {
                    locker.AcquireWriterLock(lockTimeout);
                    if (this.filePath != null)
                    {
                        this.fileExists = loader.FileExists(this.filePath);
                        this.filePath = null;
                    }
                    if (this.readPath != null)
                    {
                        this.readContent = loader.ReadFile(this.readPath, out this.debugpath);
                        this.readPath = null;
                    }
                }
                catch (Exception e)
                {
                    this.filePath = null;
                    this.fileExists = false;
                    this.readPath = null;
                    this.readContent = null;
                    this.debugpath = null;
                    throw e;
                }
                finally
                {
                    locker.ReleaseWriterLock();
                }
            }
        }
    }
    public class SyncProcess
    {
        private JsWorker worker = null;
        //线程安全
        private ReaderWriterLock locker = new ReaderWriterLock();
        private const int lockTimeout = 1000;
        //同步消息
        private string m_eventName = null;
        private Package m_eventData = null;
        private string c_eventName = null;
        private Package c_eventData = null;

        public SyncProcess(JsWorker worker)
        {
            this.worker = worker;
        }

        public object CallMain(string name, Package data, bool throwOnError = true)
        {
            if (name == null) return null;
            //获取同步状态
            if (!worker.AcquireSyncing())
            {
                if (!throwOnError) return null;
                throw new Exception("Other thread is syncing!");
            }
            //写入主线程
            locker.AcquireWriterLock(lockTimeout);
            this.m_eventName = name;
            this.m_eventData = data;
            locker.ReleaseWriterLock();
            //等待主线程同步
            try
            {
                while (worker.IsAlive)
                {
                    locker.AcquireReaderLock(lockTimeout);
                    if (this.m_eventName == null)
                        break;
                    locker.ReleaseReaderLock();
                }
                return this.m_eventData;
            }
            finally
            {
                if (locker.IsReaderLockHeld) locker.ReleaseReaderLock();
                worker.ReleaseSyncing();
            }
        }
        public object CallChild(string name, Package data, bool throwOnError = true)
        {
            if (name == null) return null;
            //获取同步状态
            if (!worker.AcquireSyncing())
            {
                if (!throwOnError) return null;
                throw new Exception("Other thread is syncing!");
            }
            //写入子线程
            locker.AcquireWriterLock(lockTimeout);
            this.c_eventName = name;
            this.c_eventData = data;
            locker.ReleaseWriterLock();
            //等待子线程同步
            try
            {
                while (worker.IsAlive)
                {
                    locker.AcquireReaderLock(lockTimeout);
                    if (this.c_eventName == null)
                        break;
                    locker.ReleaseReaderLock();
                }
                return this.c_eventData;
            }
            finally
            {
                if (locker.IsReaderLockHeld) locker.ReleaseReaderLock();
                worker.ReleaseSyncing();
            }
        }
        public void ProcessMain()
        {
            if (this.m_eventName != null)
            {
                Func<string, Package, Package> func = this.worker.mainOnMessage;
                try
                {
                    locker.AcquireWriterLock(lockTimeout);
                    Package data = null;
                    if (this.m_eventName != null && func != null)
                        data = func(this.m_eventName, this.m_eventData);
                    this.m_eventData = data;
                }
                catch (Exception e)
                {
                    this.m_eventData = null;
                    throw e;
                }
                finally
                {
                    this.m_eventName = null;
                    locker.ReleaseWriterLock();
                }
            }
        }
        public void ProcessChild()
        {
            if (this.c_eventName != null)
            {
                Func<string, Package, Package> func = this.worker.childOnMessage;
                try
                {
                    locker.AcquireWriterLock(lockTimeout);
                    Package data = null;
                    if (this.c_eventName != null && func != null)
                        data = func(this.c_eventName, this.c_eventData);
                    this.c_eventData = data;
                }
                catch (Exception e)
                {
                    this.c_eventData = null;
                    throw e;
                }
                finally
                {
                    this.c_eventName = null;
                    locker.ReleaseWriterLock();
                }
            }
        }
    }
    public class Package
    {
        /**data type */
        public Type type;
        /**data value */
        public object value;
        /**info */
        public object info;
        /**object id */
        public int id = -1;

        public static byte[] ToBytes(Puerts.ArrayBuffer value)
        {
            if (value != null)
            {
                var source = value.Bytes;
                var result = new byte[source.Length];
                Array.Copy(source, 0, result, 0, source.Length);
                return result;
            }
            return null;
        }
        public static Puerts.ArrayBuffer ToArrayBuffer(byte[] value)
        {
            if (value != null)
                return new Puerts.ArrayBuffer(value);
            return null;
        }
    }
    public enum Type
    {
        Unknown,
        Value,
        Object,
        Array,
        Function,
        /**ArrayBuffer类型为指针传递, 直接传递将因共享内存而crash */
        ArrayBuffer,
        RefObject
    }
}
