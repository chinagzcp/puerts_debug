"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CS = require("csharp");
const puerts_1 = require("puerts");
const { GUI, GUILayout, Rect, Screen, Input, Time, Application, TouchPhase } = CS.UnityEngine;
const { Profiler } = CS.UnityEngine.Profiling;
const Config = globalThis["__Config"];
const Util = {
    format(src, ...args) {
        return src.replace(/\{(\d+)\}/g, function (m, i) {
            return args[i];
        });
    }
};
const Console = (function () {
    function getTrack() {
        let trackInfos = new Error().stack?.replace(/\r\n/g, "\n").split("\n").slice(3);
        if (trackInfos && trackInfos.length > 0) {
            return trackInfos.join("\n");
        }
        return "";
    }
    ;
    const log = console.log, info = console.info, warn = console.warn, error = console.error;
    const $log = function (...args) {
        args.push("\n" + getTrack());
        log(...args);
    };
    const $info = function (...args) {
        args.push("\n" + getTrack());
        info(...args);
    };
    const $warn = function (...args) {
        args.push("\n" + getTrack());
        warn(...args);
    };
    const $error = function (...args) {
        args.push("\n" + getTrack());
        error(...args);
    };
    return {
        outputStack(print) {
            console.log = print ? $log : log;
            console.info = print ? $info : info;
            console.warn = print ? $warn : warn;
            console.error = print ? $error : error;
        }
    };
})();
const SCALE = Screen.height / 1920.0;
class GUIUtil {
    static get btnOpt() {
        if (!this._btnOpt)
            this._btnOpt = [GUILayout.Width(150 * SCALE), GUILayout.Height(50 * SCALE)];
        return this._btnOpt;
    }
    ;
    static get togOpt() {
        if (!this._togOpt)
            this._togOpt = [GUILayout.Width(150 * SCALE), GUILayout.Height(50 * SCALE)];
        return this._togOpt;
    }
    ;
    static get btnStyle() {
        if (!this._btnStyle) {
            this._btnStyle = GUI.skin.button;
            this._btnStyle.fontSize = 30 * SCALE;
        }
        return this._btnStyle;
    }
    static get togStyle() {
        if (!this._togStyle) {
            this._togStyle = GUI.skin.toggle;
            this._togStyle.fontSize = 30 * SCALE;
        }
        return this._togStyle;
    }
    static get fontStyle() {
        if (!this._fontStyle) {
            this._fontStyle = GUI.skin.label;
            this._fontStyle.fontSize = 30 * SCALE;
        }
        return this._fontStyle;
    }
    static get showGUI() { return this.getter("__showGUI", false); }
    ;
    static set showGUI(val) { this.setter("__showGUI", val); }
    ;
    static get showLog() { return this.getter("__showLog", false); }
    ;
    static set showLog(val) { this.setter("__showLog", val); }
    ;
    static get showTrace() { return this.getter("__showTrace", false); }
    ;
    static set showTrace(val) { this.setter("__showTrace", val); }
    ;
    static get writeLog() { return this.getter("__writeLog", false); }
    ;
    static set writeLog(val) { this.setter("__writeLog", val); }
    ;
    static get outputTrace() { return this.getter("__outputTrace", true); }
    ;
    static set outputTrace(val) { this.setter("__outputTrace", val); }
    ;
    static get ouputSql() { return this.getter("__ouputSql", false); }
    ;
    static set ouputSql(val) {
        this.setter("__ouputSql", val);
        let $ = (function () { return (this ?? globalThis)["$"]; })();
        let mgr = globalThis["DBConnectMgr"];
        if ($ && mgr && $.getInstance) {
            $.getInstance(mgr)["trace"] = val;
        }
    }
    ;
    static get canSetResolution() { return this.getter("__canSetResolution", false); }
    ;
    static set canSetResolution(val) { this.setter("__canSetResolution", val); }
    ;
    static get heapSize() {
        if (Profiler.supported)
            return (Profiler.usedHeapSizeLong >> 20n) + "MB";
        return "NotSupported";
    }
    static get maxMemorySize() {
        if (Profiler.supported)
            return (Profiler.maxUsedMemory >> 20) + "MB";
        return "NotSupported";
    }
    static readLogData() {
        let p1 = Application.persistentDataPath + "/log/log.txt";
        let p2 = Application.persistentDataPath + "/log/logTrace.txt";
        if (CS.System.IO.File.Exists(p1))
            this.logMessage = CS.System.IO.File.ReadAllText(p1);
        if (CS.System.IO.File.Exists(p2))
            this.logMessageTrace = CS.System.IO.File.ReadAllText(p2);
    }
    static saveLogData() {
        let p1 = Application.persistentDataPath + "/log/log.txt";
        let p2 = Application.persistentDataPath + "/log/logTrace.txt";
        CS.System.IO.Directory.CreateDirectory(Application.persistentDataPath + "/log");
        CS.System.IO.File.WriteAllText(p1, this.logMessage);
        CS.System.IO.File.WriteAllText(p2, this.logMessageTrace);
    }
    static getter(name, default_value) {
        let cache = this[name];
        if (cache === undefined) {
            let val = CS.UnityEngine.PlayerPrefs.GetInt("GUI.Options." + name, -1);
            this[name] = cache = val < 0 ? default_value : val > 0 ? true : false;
        }
        return cache;
    }
    static setter(name, val) {
        let cache = this[name];
        if (cache !== val) {
            CS.UnityEngine.PlayerPrefs.SetInt("GUI.Options." + name, !!val ? 1 : 0);
            this[name] = val;
        }
    }
}
GUIUtil.fpsTime = 0;
GUIUtil.fpsCount = 0;
GUIUtil.fpsMessage = "Unknow";
GUIUtil.logMessage = "";
GUIUtil.logMessageTrace = "";
GUIUtil.scrollScale = CS.UnityEngine.Vector2.zero;
GUIUtil.showScreen = 0;
class GUIView {
    constructor() {
        let obj = new CS.UnityEngine.GameObject("GUI");
        obj.transform.SetParent(CS.JsManager.GetInstance().transform);
        obj.AddComponent(puerts_1.$typeof(CS.CallOnGUI)).callback = () => this.OnGUI();
        obj.AddComponent(puerts_1.$typeof(CS.CallUpdate)).callback = () => this.Update();
        this.init();
    }
    Update() {
        if (Input.GetMouseButtonDown(1)) {
            GUIUtil.showGUI = !GUIUtil.showGUI;
        }
        if (Input.touchCount > 3) {
            for (let i = 0; i < Input.touchCount; i++) {
                if (Input.GetTouch(i).phase = TouchPhase.Began) {
                    GUIUtil.showGUI = !GUIUtil.showGUI;
                    break;
                }
            }
        }
        GUIUtil.fpsTime += Time.deltaTime;
        GUIUtil.fpsCount++;
        if (GUIUtil.fpsTime >= 1) {
            GUIUtil.fpsMessage = GUIUtil.fpsCount.toString();
            GUIUtil.fpsTime -= 1;
            GUIUtil.fpsCount = 0;
        }
        if (GUIUtil.showScreen > 0)
            GUIUtil.showScreen -= Time.deltaTime;
    }
    OnGUI() {
        if (!GUIUtil.showGUI)
            return;
        GUI.Box(new Rect(0, 0, Screen.width, Screen.height), "");
        GUILayout.BeginVertical();
        this.displayInfo();
        this.displayMenu();
        this.displayLog();
        GUILayout.EndVertical();
        this.displayScreenRange();
    }
    displayInfo() {
        GUILayout.BeginHorizontal();
        GUILayout.Label("FPS: " + GUIUtil.fpsMessage, GUIUtil.fontStyle, GUILayout.Width(200 * SCALE));
        GUILayout.Label("Screen: " + Screen.width + "*" + Screen.height, GUIUtil.fontStyle, GUILayout.Width(300 * SCALE));
        GUILayout.Label("Memory: " + GUIUtil.heapSize + " / Max:" + GUIUtil.maxMemorySize, GUIUtil.fontStyle, GUILayout.Width(700 * SCALE));
        GUILayout.EndHorizontal();
    }
    displayMenu() {
        GUILayout.BeginHorizontal();
        if (GUILayout.Button("restart", GUIUtil.btnStyle, ...GUIUtil.btnOpt)) {
            CS.Update.Restart();
        }
        if (GUILayout.Button("clear", GUIUtil.btnStyle, ...GUIUtil.btnOpt)) {
            CS.UnityEngine.PlayerPrefs.DeleteAll();
            try {
                CS.System.IO.Directory.Delete(CS.UnityEngine.Application.persistentDataPath, true);
            }
            catch (e) {
                console.warn(e);
            }
            ;
        }
        if (GUILayout.Button("screen", GUIUtil.btnStyle, ...GUIUtil.btnOpt)) {
            GUIUtil.showScreen = 2;
        }
        GUIUtil.canSetResolution = GUILayout.Toggle(GUIUtil.canSetResolution, "Resolution", GUIUtil.togStyle, ...GUIUtil.togOpt);
        GUILayout.EndHorizontal();
        GUILayout.BeginHorizontal();
        if (GUILayout.Button("copy log", GUIUtil.btnStyle, ...GUIUtil.btnOpt)) {
            let editor = new CS.UnityEngine.TextEditor();
            editor.text = GUIUtil.showTrace ? GUIUtil.logMessageTrace : GUIUtil.logMessage;
            editor.OnFocus();
            editor.SelectAll();
            editor.Copy();
        }
        if (GUILayout.Button("clear log", GUIUtil.btnStyle, ...GUIUtil.btnOpt)) {
            GUIUtil.logMessage = '';
            GUIUtil.logMessageTrace = '';
            GUIUtil.saveLogData();
        }
        GUILayout.EndHorizontal();
        GUILayout.BeginHorizontal();
        GUIUtil.showLog = GUILayout.Toggle(GUIUtil.showLog, "Log", GUIUtil.togStyle, ...GUIUtil.togOpt);
        GUIUtil.showTrace = GUILayout.Toggle(GUIUtil.showTrace, "Trace", GUIUtil.togStyle, ...GUIUtil.togOpt);
        let output = GUILayout.Toggle(GUIUtil.outputTrace, "JsTrace", GUIUtil.togStyle, ...GUIUtil.togOpt);
        if (GUIUtil.outputTrace !== output) {
            GUIUtil.outputTrace = output;
            Console.outputStack(output);
        }
        GUIUtil.ouputSql = GUILayout.Toggle(GUIUtil.ouputSql, "Sql", GUIUtil.togStyle, ...GUIUtil.togOpt);
        GUIUtil.writeLog = GUILayout.Toggle(GUIUtil.writeLog, "Write", GUIUtil.togStyle, ...GUIUtil.togOpt);
        GUILayout.EndHorizontal();
        if (Config.platformString == "windows" && GUIUtil.canSetResolution) {
            GUILayout.BeginHorizontal();
            if (GUILayout.Button("828:1792", GUIUtil.btnStyle, ...GUIUtil.btnOpt)) {
                Screen.SetResolution(Screen.height * 828 / 1792, Screen.height, Screen.fullScreen);
            }
            if (GUILayout.Button("1080:1920", GUIUtil.btnStyle, ...GUIUtil.btnOpt)) {
                Screen.SetResolution(Screen.height * 9 / 16, Screen.height, Screen.fullScreen);
            }
            if (GUILayout.Button("1080:2400", GUIUtil.btnStyle, ...GUIUtil.btnOpt)) {
                Screen.SetResolution(Screen.height * 9 / 20, Screen.height, Screen.fullScreen);
            }
            GUILayout.EndHorizontal();
        }
    }
    displayLog() {
        if (!GUIUtil.showLog)
            return;
        GUIUtil.scrollScale = GUILayout.BeginScrollView(GUIUtil.scrollScale, false, false, GUILayout.Width(Screen.width));
        GUILayout.Label(GUIUtil.showTrace ? GUIUtil.logMessageTrace : GUIUtil.logMessage, GUIUtil.fontStyle);
        GUILayout.EndScrollView();
    }
    displayScreenRange() {
        if (GUIUtil.showScreen <= 0)
            return;
        let style = new CS.UnityEngine.GUIStyle();
        style.normal.background = new CS.UnityEngine.Texture2D(Screen.width, Screen.height);
        GUI.Box(new Rect(0, 0, Screen.width, Screen.height), "", style);
    }
    init() {
        Console.outputStack(GUIUtil.outputTrace);
        if (GUIUtil.writeLog) {
            console.log("log write to: " + Application.persistentDataPath + "/log/");
            GUIUtil.readLogData();
        }
        let delegate = (condition, stackTrace, type) => {
            let time = Util.format("[{0}:{1}:{2}]", CS.System.DateTime.Now.getHours(), CS.System.DateTime.Now.getMinutes(), CS.System.DateTime.Now.getSeconds());
            let log = time + condition + "\n";
            let trace = time + condition + "\n" + stackTrace + "\n";
            if (type === CS.UnityEngine.LogType.Error
                || type === CS.UnityEngine.LogType.Exception
                || type === CS.UnityEngine.LogType.Assert) {
                log = "<color=red>" + log + "</color>";
                trace = "<color=red>" + trace + "</color>";
            }
            GUIUtil.logMessage = log + GUIUtil.logMessage;
            GUIUtil.logMessageTrace = trace + GUIUtil.logMessageTrace;
            if (GUIUtil.writeLog)
                GUIUtil.saveLogData();
        };
        CS.LogManager.GetInstance().add_logMessageReceived(delegate);
    }
}
new GUIView();
//# sourceMappingURL=gui.js.map