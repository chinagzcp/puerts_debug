using System;
using System.Collections.Generic;
using System.IO;
using Puerts;
using UnityEngine;
using System.Linq;

#if UNITY_EDITOR
using UnityEditor;
#endif

public class JsManager : MonoBehaviour
{
    private static JsManager _instance;
    public static JsManager GetInstance()
    {
        if (_instance == null)
        {
            var obj = new GameObject("JsManager");
            DontDestroyOnLoad(obj);
            _instance = obj.AddComponent<JsManager>();
        }
        return _instance;
    }
    public static void ReleaseInstance()
    {
        if (_instance != null)
            Destroy(_instance.gameObject);
        _instance = null;
    }

    public static ILoader DefaultLoader = null;
    //虚拟机对象
    public JsEnv JsEnv { get; private set; } = null;
    public PackageLoader Loader { get; private set; }

    //Debug prot
    private const int debugPort = 9090;
    #region  EDITOR MODE
#if UNITY_EDITOR
    public static bool debugEnable
    {
        get { return EditorPrefs.GetBool("Editor.DebugEnable"); }
        private set { EditorPrefs.SetBool("Editor.DebugEnable", value); }
    }
    [MenuItem("Puerts/Enable Debug")]
    static void EnableService() { debugEnable = true; }
    [MenuItem("Puerts/Enable Debug", true)]
    static bool EnableServiceCheck() { return !debugEnable; }
    [MenuItem("Puerts/Disable Debug")]
    static void DisableService() { debugEnable = false; }
    [MenuItem("Puerts/Disable Debug", true)]
    static bool DisableServiceCheck() { return debugEnable; }
#endif
    #endregion

    void Awake()
    {
        Loader = new PackageLoader();
        Loader.AddLoader(new DefaultLoader(), int.MaxValue);
#if UNITY_EDITOR
        Loader.AddLoader(new FileLoader());
#endif
        JsEnv = new JsEnv(Loader, debugPort);
#if UNITY_EDITOR
        if (debugEnable && debugPort > 0)
            JsEnv.WaitDebugger();
#endif
        AutoUsing(JsEnv);
    }
    void Update()
    {
        JsEnv.Tick();
    }
    void OnDestroy()
    {
        Dispose();
    }
    void Dispose()
    {
        if (JsEnv != null)
        {
            //Dispose
            JsEnv.Dispose();
            JsEnv = null;
            //GC
            System.GC.Collect();
            System.GC.WaitForPendingFinalizers();
        }
        if (Loader != null)
        {
            Loader.Dispose();
            Loader = null;
        }
        //GC
        System.GC.Collect();
        System.GC.WaitForPendingFinalizers();
    }

    void AutoUsing(JsEnv env)
    {
        const string typeName = "PuertsStaticWrap.AutoStaticCodeUsing";
        var type = (from _assembly in AppDomain.CurrentDomain.GetAssemblies()
                    let _type = _assembly.GetType(typeName, false)
                    where _type != null
                    select _type).FirstOrDefault();
        if (type != null)
        {
            type.GetMethod("AutoUsing").Invoke(null, new object[] { this.JsEnv });
        }
    }

    public class PackageLoader : ILoader, IDisposable
    {
        private List<Package> packages;
        public PackageLoader()
        {
            this.packages = new List<Package>();
        }
        public void Dispose()
        {
            foreach (var package in packages)
            {
                package.Dispose();
            }
            packages.Clear();
        }
        public bool FileExists(string filepath)
        {
            foreach (var package in packages)
            {
                if (package.loader.FileExists(filepath))
                    return true;
            }
            return false;
        }
        public string ReadFile(string filepath, out string debugpath)
        {
            foreach (var package in packages)
            {
                string script =
                    package.loader.ReadFile(filepath, out debugpath);
                if (!string.IsNullOrEmpty(script))
                    return script; ;
            }
            debugpath = filepath;
            return null;
        }

        public void AddLoader(ILoader loader, int index = 0)
        {
            packages.Add(new Package()
            {
                loader = loader,
                index = index
            });
            packages.Sort((v1, v2) =>
            {
                return v1.index > v2.index ? 1 : v1.index < v2.index ? -1 : 0;
            });
        }
        public bool RemoveLoader(ILoader loader)
        {
            for (int i = packages.Count - 1; i >= 0; i--)
            {
                if (packages[i].loader == loader)
                {
                    packages.RemoveAt(i);
                    return true;
                }
            }
            return false;
        }
        internal class Package
        {
            public ILoader loader;
            public int index;
            public void Dispose()
            {
                if (typeof(IDisposable).IsAssignableFrom(loader.GetType()))
                    ((IDisposable)loader).Dispose();
            }
        }
    }
    public class FileLoader : ILoader, IDisposable
    {
        private readonly string dataDir = Path.GetDirectoryName(Application.dataPath);

        public bool FileExists(string filepath)
        {
            var path = Combine(filepath);
            //Debug.Log(filepath + "\n" + path);

            return File.Exists(path);
        }

        public string ReadFile(string filepath, out string debugpath)
        {
            var path = Combine(filepath);
            if (File.Exists(path))
            {
                debugpath = path;
                return File.ReadAllText(path);
            }
            debugpath = filepath;
            return null;
        }
        public void Dispose()
        {
        }
        string Combine(string filepath)
        {
#if UNITY_EDITOR
            var path = filepath;
            if (!path.EndsWith(".js") && !path.EndsWith(".cjs") && !path.EndsWith(".json"))
                UnityEngine.Debug.LogWarning("Unknown file suffix: " + filepath);

            if (path.StartsWith("node_modules/"))
                path = dataDir + "/TsProject/" + path;
            else
                path = dataDir + "/TsProject/output/" + path;
            path = path.Replace("\\", "/");
            if (File.Exists(path))
                return path;
#endif
            return filepath;
        }
    }
}