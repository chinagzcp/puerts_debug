"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CS = require("csharp");
const puerts_1 = require("puerts");
const RuntimePlatform = CS.UnityEngine.RuntimePlatform;
const UTF8 = CS.System.Text.Encoding.UTF8;
Object.setPrototypeOf(UTF8, CS.System.Text.Encoding.prototype);
(function () {
    if (CS.UnityEngine.Application.platform === CS.UnityEngine.RuntimePlatform.WindowsEditor) {
        try {
            var csharp = require("csharp");
            var puerts = require("puerts");
            puerts.registerBuildinModule("path", {
                dirname(path) {
                    return csharp.System.IO.Path.GetDirectoryName(path);
                },
                resolve(dir, url) {
                    url = url.replace(/\\/g, "/");
                    while (url.startsWith("../")) {
                        dir = csharp.System.IO.Path.GetDirectoryName(dir);
                        url = url.substr(3);
                    }
                    return csharp.System.IO.Path.Combine(dir, url);
                },
            });
            puerts.registerBuildinModule("fs", {
                existsSync(path) {
                    return csharp.System.IO.File.Exists(path);
                },
                readFileSync(path) {
                    return csharp.System.IO.File.ReadAllText(path);
                },
            });
            (function () {
                let global = this ?? globalThis;
                global["Buffer"] = global["Buffer"] ?? {};
            })();
            require('source-map-support').install();
        }
        catch (e) {
            console.warn("source-map-support module exception: " + e);
        }
    }
    puerts_1.$extension(CS.UnityEngine.Object, CS.ObjectExtend);
})();
const { platform, platformString, isEditorMode } = (function () {
    let platform = CS.UnityEngine.Application.platform;
    let platformString = platform === RuntimePlatform.IPhonePlayer ? "ios" : platform === RuntimePlatform.Android ? "android" :
        (platform === RuntimePlatform.WindowsEditor || platform === RuntimePlatform.WindowsPlayer) ? "windows" : "unknow";
    let isEditorMode = platform === RuntimePlatform.WindowsEditor || platform === RuntimePlatform.OSXEditor || platform === RuntimePlatform.LinuxEditor;
    return { platform, platformString, isEditorMode };
})();
const Util = (function () {
    function cs_generator(func, ...args) {
        let generator = undefined;
        if (typeof (func) === "function") {
            generator = func(...args);
            if (generator === null || generator === undefined || generator === void 0)
                throw new Error("Function '" + func?.name + "' no return Generator");
        }
        else
            generator = func;
        return CS.IEnumeratorUtil.Generator(function () {
            let tick;
            try {
                let next = generator.next();
                tick = new CS.IEnumeratorUtil.Tick(next.value, next.done);
            }
            catch (e) {
                tick = new CS.IEnumeratorUtil.Tick(null, true);
                console.error(e);
            }
            return tick;
        });
    }
    function* httpGet(uri, done, progress) {
        let url = typeof (uri) === "string" ? uri : uri.url;
        console.log("Request: " + url);
        let request = CS.UnityEngine.Networking.UnityWebRequest.Get(url);
        if (typeof (uri) !== "string" && uri.timeout)
            request.timeout = uri.timeout;
        if (!progress)
            yield request.SendWebRequest();
        else {
            request.SendWebRequest();
            while (!request.isDone) {
                progress(request.downloadProgress);
                yield null;
            }
        }
        let ok = !request.isHttpError && !request.isNetworkError && (!request.error || request.error.length == 0);
        done(!ok ? request.error : undefined, request);
        request.Dispose();
    }
    function remove(arr, item) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                for (let j = i; j < arr.length; j++) {
                    if (j < arr.length - 1)
                        arr[j] = arr[j + 1];
                    else
                        arr.pop();
                }
                return true;
            }
        }
        return false;
    }
    function format(src, ...args) {
        return src.replace(/\{(\d+)\}/g, function (m, i) {
            return args[i];
        });
    }
    return { cs_generator, httpGet, remove, format };
})();
const Config = (function () {
    let c = {
        serverIp: "http://address/server/ip",
        updateApp: "http://address/server/updateApp",
        updateInfo: "http://address/server/updateInfo",
        update: "http://address/server/update",
        version: "http://address/server/version",
        asset: "http://address/server/asset?path={0}&version={1}&md5={2}",
        platform: platform,
        platformString: platformString,
        isEditorMode: isEditorMode,
    };
    globalThis["__Config"] = c;
    return c;
})();
class Asset {
}
class Platform {
    constructor() {
        this.assets = new Array();
    }
}
class Version {
    constructor() {
        this.ios = new Platform();
        this.android = new Platform();
        this.windows = new Platform();
    }
}
class UI {
    constructor(path) {
        let prefab = CS.UnityEngine.Resources.Load(path);
        let obj = CS.UnityEngine.Object.Instantiate(prefab);
        obj.transform.SetParent(UI.canvasRoot);
        obj.transform.localScale = CS.UnityEngine.Vector3.one;
        obj.transform.localPosition = CS.UnityEngine.Vector3.zero;
        obj.transform.sizeDelta = CS.UnityEngine.Vector2.zero;
        obj.SetActive(false);
        this._gameObject = obj;
        this._transform = obj.transform;
    }
    static get canvasRoot() {
        if (!this._canvasRoot || this._canvasRoot.IsNull()) {
            this._canvasRoot = CS.UnityEngine.GameObject.Find(this._canvasName).transform;
        }
        return this._canvasRoot;
    }
}
UI._canvasName = "Canvas";
class UIWindow extends UI {
    constructor(path) {
        super(path);
        this.init();
    }
    setText(text, title) {
        this._gameObject.SetActive(true);
        this._titleTxt.text = title;
        this._contentTxt.text = text;
        return this;
    }
    setButtons(...btns) {
        this._gameObject.SetActive(true);
        this._buttons.forEach(config => {
            config.button.onClick.RemoveAllListeners();
            config.button.gameObject.SetActive(false);
        });
        for (let i = 0; i < btns.length; i++) {
            let config = this._buttons[i];
            config.button.gameObject.SetActive(true);
            config.button.onClick.AddListener(btns[i].callback);
            config.text.text = btns[i].text;
        }
        return this;
    }
    setActive(active) {
        this._gameObject.SetActive(active);
        return this;
    }
    init() {
        this._titleTxt = this._transform.Find("Content/Title").GetComponent("Text");
        this._contentTxt = this._transform.Find("Content/Content").GetComponent("Text");
        this._buttons = new Array();
        let parent = this._transform.Find("Content/Buttons");
        for (let i = 0; i < parent.childCount; i++) {
            let trf = parent.GetChild(i);
            this._buttons.push({
                button: trf.GetComponent("Button"),
                image: trf.GetComponent("Image"),
                text: trf.Find("Text").GetComponent("Text"),
            });
        }
    }
}
class UISlider extends UI {
    constructor(path) {
        super(path);
        this.init();
    }
    setText(text) {
        this._gameObject.SetActive(true);
        this._contentTxt.text = text;
        return this;
    }
    setValue(val) {
        this._gameObject.SetActive(true);
        this._progressImg.transform.localScale = new CS.UnityEngine.Vector3(val, 1, 1);
        return this;
    }
    setActive(active) {
        this._gameObject.SetActive(active);
        return this;
    }
    init() {
        this._progressImg = this._transform.Find("Content/Slider/Image").GetComponent("Image");
        this._contentTxt = this._transform.Find("Content/Content").GetComponent("Text");
    }
}
class FileMgr {
    static getVersion() {
        let str = CS.UnityEngine.PlayerPrefs.GetString("LOCAL_VERSION", null);
        if (str && str.length > 0) {
            let obj = JSON.parse(str);
            Object.setPrototypeOf(obj, Version.prototype);
            return obj;
        }
        return null;
    }
    static saveVersion(version) {
        CS.UnityEngine.PlayerPrefs.SetString("LOCAL_VERSION", JSON.stringify(version));
    }
    static getFilePath(asset) {
        return CS.UnityEngine.Application.persistentDataPath + "/cache/" + asset.path;
    }
    static getFileMd5(asset) {
        return CS.HashMd5.MD5File(this.getFilePath(asset));
    }
    static saveFile(asset, datas) {
        let path = this.getFilePath(asset);
        CS.System.IO.Directory.CreateDirectory(CS.System.IO.Path.GetDirectoryName(path));
        CS.System.IO.File.WriteAllBytes(path, datas);
    }
    static getStreamVersionPath() {
        return CS.UnityEngine.Application.streamingAssetsPath + "/version";
    }
    static getStreamPath(asset) {
        return CS.UnityEngine.Application.streamingAssetsPath + "/" + asset.path;
    }
}
class Update {
    constructor() {
        let obj = new CS.UnityEngine.GameObject("Update - app update script");
        this.runner = obj.AddComponent(puerts_1.$typeof(CS.UnityEngine.UI.Image));
        this.window = new UIWindow("Prefabs/UI/UIWindow");
        this.slider = new UISlider("Prefabs/UI/UISlider");
        this.reqServerIp();
    }
    compareVersionIndex(v1, v2) {
        if (v1 && v2) {
            if (typeof (v1) === "object")
                v1 = v1.appMinVersion;
            if (typeof (v2) === "object")
                v2 = v2.appMinVersion;
            let index1 = parseFloat(v1.replace(/\./g, "").replace(/\ /g, ""));
            let index2 = parseFloat(v2.replace(/\./g, "").replace(/\ /g, ""));
            return index1 > index2 ? -1 : index1 < index2 ? 1 : 0;
        }
        throw new Error(`invalid version information: "${v1}" and "${v2}"`);
    }
    platformAssets(v) {
        let platform = v[Config.platformString];
        if (platform)
            return platform;
        throw new Error("platform error: [" + Object.keys(v) + "]---" + Config.platformString);
    }
    platformPackage(v) {
        let platform = v[Config.platformString];
        if (platform) {
            let result = new Array();
            for (let asset of platform.assets) {
                if (asset.name === "packageScripts" || asset.name === "packageModules")
                    result.push(asset);
            }
            return result;
        }
        throw new Error("platform error: [" + Object.keys(v) + "]---" + Config.platformString);
    }
    reqServerIp() {
        this.window.setActive(false);
        this.slider.setText("检查服务器状态").setValue(0);
        let count = CS.URLConfig.ips.Length;
        let result = (err, request) => {
            if (count === undefined)
                return;
            if (err) {
                count--;
                if (count <= 0) {
                    this.slider.setActive(false);
                    this.window.setText("无法获取服务状态:" + err, "提示").setButtons({ text: "重试", callback: () => this.reqServerIp() });
                }
                return;
            }
            count = undefined;
            let server_ip = request.downloadHandler.text;
            if (!server_ip || server_ip.length <= 0) {
                this.slider.setActive(false);
                this.window.setText("服务器异常", "提示").setButtons({ text: "退出", callback: () => CS.UnityEngine.Application.Quit() });
                return;
            }
            Config.updateApp = Config.updateApp.replace("address", server_ip);
            Config.updateInfo = Config.updateInfo.replace("address", server_ip);
            Config.update = Config.update.replace("address", server_ip);
            Config.version = Config.version.replace("address", server_ip);
            Config.asset = Config.asset.replace("address", server_ip);
            this.reqUpdateInfo();
        };
        this.runner.StopAllCoroutines();
        for (let i = 0; i < CS.URLConfig.ips.Length; i++) {
            let url = Config.serverIp.replace("address", CS.URLConfig.ips.get_Item(i));
            this.runner.StartCoroutine(Util.cs_generator(Util.httpGet(url, result)));
        }
    }
    reqUpdateInfo() {
        this.window.setActive(false);
        this.slider.setText("检查更新").setValue(0);
        let result = (err, request) => {
            this.slider.setActive(false);
            if (err) {
                this.window.setText(err, "提示").setButtons({ text: "重试", callback: () => this.reqUpdateInfo() });
                return;
            }
            let global = JSON.parse(request.downloadHandler.text);
            if (!global) {
                console.log("Script异常:" + request.downloadHandler.text);
                this.window.setText("无法解析内容: 数据错误", "提示").setButtons({ text: "退出", callback: () => CS.UnityEngine.Application.Quit() });
                return;
            }
            if (global.md5 !== CS.HashMd5.Hash_MD5_32(CS.Update.updateScript) && !isEditorMode)
                this.reqUpdate(global.md5);
            else
                this.reqVersion();
        };
        this.runner.StopAllCoroutines();
        this.runner.StartCoroutine(Util.cs_generator(Util.httpGet(Config.updateInfo, result)));
    }
    reqUpdate(srcMd5) {
        this.window.setActive(false);
        this.slider.setText("下载更新").setValue(0);
        let result = (err, request) => {
            this.slider.setActive(false);
            if (err) {
                this.window.setText(err, "提示").setButtons({ text: "重试", callback: () => this.reqUpdateInfo() });
                return;
            }
            let global = JSON.parse(request.downloadHandler.text);
            if (global && global.content) {
                let bytes = CS.System.Convert.FromBase64String(global.content);
                global.content = UTF8.GetString(bytes);
            }
            if (!global || global.md5 !== srcMd5 || CS.HashMd5.Hash_MD5_32(global.content) != srcMd5) {
                console.log("Script异常:", srcMd5, global.md5, CS.HashMd5.Hash_MD5_32(global.content));
                this.window.setText("无法解析内容: 数据校验错误", "提示").setButtons({ text: "退出", callback: () => CS.UnityEngine.Application.Quit() });
                return;
            }
            let len = CS.KeyConfig.RSAKeyLength, key = CS.KeyConfig.RSAPublicKey;
            if (key && key.length > 0 && len > 0) {
                let rsa = new CS.RSAEncrypt(len);
                rsa.publicKey = key;
                if (!rsa.VerifySign(global.content, global.sign)) {
                    console.log("签名校验异常:", global.sign);
                    this.window.setText("签名校验异常, 无法更新", "提示")
                        .setButtons({
                        text: "退出",
                        callback: () => CS.UnityEngine.Application.Quit()
                    });
                    return;
                }
            }
            CS.Update.updateScript = global.content;
            CS.Update.Restart();
        };
        let progress = (val) => this.slider.setValue(val);
        this.runner.StopAllCoroutines();
        this.runner.StartCoroutine(Util.cs_generator(Util.httpGet(Config.update, result, progress)));
    }
    reqVersion() {
        this.window.setActive(false);
        this.slider.setText("检查资源状态").setValue(0);
        let result = (err, request) => {
            this.slider.setActive(false);
            if (err) {
                this.window.setText(err, "提示").setButtons({ text: "重试", callback: () => this.reqVersion() });
                return;
            }
            let server = JSON.parse(request.downloadHandler.text);
            if (!server) {
                console.log("Version信息:" + request.downloadHandler.text);
                this.window.setText("无法解析版本信息: 数据错误", "提示").setButtons({ text: "重试", callback: () => this.reqVersion() });
                return;
            }
            let assets = server[Config.platformString];
            if (!assets) {
                this.window.setText("无法获取版本信息\n当前平台:" + Config.platformString, "提示")
                    .setButtons({ text: "退出", callback: () => CS.UnityEngine.Application.Quit() });
                return;
            }
            if (this.compareVersionIndex(CS.UnityEngine.Application.version, assets.appMinVersion) > 0) {
                this.window.setText("您需要更新APP", "提示").setButtons({ text: "退出", callback: () => CS.UnityEngine.Application.Quit() });
                return;
            }
            this.compareVersion(server);
        };
        let progress = (val) => this.slider.setValue(val);
        this.runner.StopAllCoroutines();
        this.runner.StartCoroutine(Util.cs_generator(Util.httpGet(Config.version, result, progress)));
    }
    compareVersion(server_version) {
        let _this = this;
        this.window.setActive(false);
        this.slider.setText("校验版本信息").setValue(0);
        function* doing() {
            let local_version = FileMgr.getVersion();
            if (local_version) {
                let platform = _this.platformAssets(local_version);
                for (let asset of [...platform.assets]) {
                    if (FileMgr.getFileMd5(asset) !== asset.md5) {
                        Util.remove(platform.assets, asset);
                        platform.assetsVersion = "-1";
                    }
                }
            }
            let streaming_version = undefined;
            let request = CS.UnityEngine.Networking.UnityWebRequest.Get(FileMgr.getStreamVersionPath());
            yield request.SendWebRequest();
            if (request.downloadHandler.text && request.downloadHandler.text.length > 0)
                streaming_version = JSON.parse(request.downloadHandler.text ?? "");
            let streaming_update = new Map();
            if (streaming_version && (!local_version || _this.compareVersionIndex(_this.platformAssets(local_version).assetsVersion, _this.platformAssets(streaming_version).assetsVersion) > 0)) {
                for (let asset of _this.platformAssets(streaming_version).assets)
                    streaming_update.set(asset.name, asset);
                if (local_version) {
                    let local_platform = _this.platformAssets(local_version);
                    for (let asset of [...local_platform.assets]) {
                        let _a = streaming_update.get(asset.name);
                        if (_a && (_this.compareVersionIndex(asset.version, _a.version) <= 0 || _a.md5 === asset.md5))
                            streaming_update.delete(asset.name);
                        else
                            Util.remove(local_platform.assets, asset);
                    }
                }
            }
            let server_update = new Map();
            if (!local_version || _this.compareVersionIndex(_this.platformAssets(local_version).assetsVersion, _this.platformAssets(server_version).assetsVersion) > 0) {
                for (let asset of _this.platformAssets(server_version).assets)
                    server_update.set(asset.name, asset);
                if (local_version) {
                    let local_platform = _this.platformAssets(local_version);
                    for (let asset of [...local_platform.assets]) {
                        let _a = server_update.get(asset.name);
                        if (_a && _a.md5 === asset.md5)
                            server_update.delete(asset.name);
                        else
                            Util.remove(local_platform.assets, asset);
                    }
                }
                for (let asset of new Array(...server_update.values())) {
                    let _a = streaming_update.get(asset.name);
                    if (_a) {
                        if (_a.md5 === asset.md5)
                            server_update.delete(asset.name);
                        else
                            streaming_update.delete(asset.name);
                    }
                }
            }
            if (!local_version) {
                local_version = new Version();
                let local = _this.platformAssets(local_version);
                local.assetsVersion = "0";
                local.appVersion = "0";
                local.appMinVersion = "0";
            }
            local_version = local_version ?? new Version();
            if (streaming_update.size > 0) {
                let assets = streaming_update.values();
                let iterator = _this.reqDownloadFromStreaming(local_version, new Array(...assets));
                yield _this.runner.StartCoroutine(iterator);
            }
            if (server_update.size > 0) {
                let assets = server_update.values();
                let iterator = _this.reqDownloadFromServer(local_version, new Array(...assets));
                yield _this.runner.StartCoroutine(iterator);
            }
            _this.platformAssets(local_version).assetsVersion = _this.platformAssets(server_version).assetsVersion;
            FileMgr.saveVersion(local_version);
            _this.runtime();
        }
        this.runner.StopAllCoroutines();
        this.runner.StartCoroutine(Util.cs_generator(doing()));
    }
    reqDownloadFromStreaming(version, assets) {
        let _this = this;
        this.window.setActive(false);
        this.slider.setText("解压本地资源").setValue(0);
        function* doing() {
            let index = 0, total = assets.length;
            for (let asset of assets) {
                _this.slider.setValue(++index / total);
                let request = CS.UnityEngine.Networking.UnityWebRequest.Get(FileMgr.getStreamPath(asset));
                yield request.SendWebRequest();
                let ok = !request.isHttpError && !request.isNetworkError && (!request.error || request.error.length == 0);
                if (!ok) {
                    _this.runner.StopAllCoroutines();
                    _this.slider.setActive(false);
                    _this.window.setText(request.error, "提示").setButtons({ text: "退出", callback: () => CS.UnityEngine.Application.Quit() });
                    return;
                }
                _this.platformAssets(version).assets.push(asset);
                FileMgr.saveFile(asset, request.downloadHandler.data);
                FileMgr.saveVersion(version);
            }
        }
        ;
        return Util.cs_generator(doing());
    }
    reqDownloadFromServer(version, assets) {
        let _this = this;
        this.window.setActive(false);
        this.slider.setText("下载资源").setValue(0);
        function* doing() {
            let index = 0, total = assets.length;
            for (let asset of assets) {
                let text = "(" + (++index) + "/" + total + ")";
                _this.slider.setText("资源更新0%" + text);
                let result = (err, request) => {
                    if (err) {
                        _this.runner.StopAllCoroutines();
                        _this.slider.setActive(false);
                        _this.window.setText(err, "提示").setButtons({ text: "重试", callback: () => _this.reqVersion() });
                        return;
                    }
                    _this.platformAssets(version).assets.push(asset);
                    FileMgr.saveFile(asset, request.downloadHandler.data);
                    FileMgr.saveVersion(version);
                };
                let url = Util.format(Config.asset, asset.path, asset.version, asset.md5);
                let progress = (val) => {
                    _this.slider.setText("资源更新" + parseInt((val * 100).toString()) + "%" + text);
                    _this.slider.setValue(val);
                };
                yield _this.runner.StartCoroutine(Util.cs_generator(Util.httpGet(url, result, progress)));
            }
        }
        ;
        return Util.cs_generator(doing());
    }
    runtime() {
        console.log("->资源更新完毕");
        this.window.setActive(false);
        this.slider.setText("初始化中").setValue(0);
        let _this = this;
        function* doing() {
            console.log("->加载: 脚本Loader");
            let loader = new CS.JsManager.BufferLaoder();
            CS.JsManager.GetInstance().Loader.AddLoader(loader);
            let total = 0, count = 0;
            let packages = new Array();
            _this.platformPackage(FileMgr.getVersion()).forEach(asset => {
                let reader;
                try {
                    reader = new CS.FileReader(FileMgr.getFilePath(asset));
                    let num = reader.ReadInt32();
                    total += num;
                    packages.push({ asset, num, reader });
                }
                catch (e) {
                    reader?.Dispose();
                    console.error(e);
                }
            });
            for (let { asset, num, reader } of packages) {
                try {
                    console.log(`->加载: ${asset.name}, \t数量:${num}`);
                    for (let i = 0; i < num; i++) {
                        let name = reader.ReadString();
                        let buffer = reader.ReadBold();
                        if (!isEditorMode)
                            loader.AddScript(name, buffer);
                        count++;
                        if (i % 100 == 0) {
                            _this.slider.setValue(count / total);
                            yield undefined;
                        }
                    }
                }
                catch (e) {
                    console.error(e);
                }
                finally {
                    reader?.Dispose();
                }
            }
            console.log("->执行游戏逻辑");
            require("./main");
        }
        this.runner.StopAllCoroutines();
        this.runner.StartCoroutine(Util.cs_generator(doing()));
    }
}
new Update();
//# sourceMappingURL=update.js.map