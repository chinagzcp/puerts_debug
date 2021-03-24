"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetMgr = void 0;
const CS = require("csharp");
const puerts_1 = require("puerts");
const csharp_UnityEngine_1 = require("csharp.UnityEngine");
const config_1 = require("../../common/config");
const { File } = CS.System.IO;
const { DateTime } = CS.System;
const { PlayerPrefs, AssetBundle, GameObject, ScriptableObject } = CS.UnityEngine;
const { UnityWebRequest, DownloadHandlerAssetBundle } = CS.UnityEngine.Networking;
const DEFAULT_PATH = "Assets/Editor/";
function unloadAssetBundle(asset) {
    if (asset.assetBundle && !asset.assetBundle.IsNull())
        asset.assetBundle.Unload(true);
    asset.assetBundle = undefined;
}
function editorLoadAsset(path, type) {
    let label = CS["UnityEditor"]["AssetImporter"]["GetAtPath"](path)?.assetBundleName;
    if (!label || label.length == 0)
        console.warn(`资源未设置AssetBundle name: ` + path);
    let obj = CS["UnityEditor"]["AssetDatabase"]["LoadAssetAtPath"](path, puerts_1.$typeof(type));
    if (obj && !obj.IsNull())
        return obj;
    throw new Error("not found asset: " + path);
}
function exist(path) {
    return File.Exists(csharp_UnityEngine_1.Application.dataPath + "/" + path);
}
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
class Auto {
    constructor(platform) {
        this._mappingFile = new Map();
        for (let asset of platform.assets) {
            if (!asset.assets || asset.assets.length === 0)
                continue;
            for (let assetPath of asset.assets) {
                this._mappingFile.set(assetPath, asset.name);
            }
        }
    }
    getFileName(path, notThrow) {
        path = path.toLowerCase();
        if (this._mappingFile.has(path)) {
            return this._mappingFile.get(path);
        }
        if (!notThrow)
            throw new Error("Not found asset: " + path);
        return undefined;
    }
    _load(path, type) {
        if (config_1.Config.isEditorMode) {
            let obj = editorLoadAsset(path, type);
            let file = this.getFileName(path, true);
            if (file)
                $.getInstance(AssetMgr).loadPackSync(file);
            else
                console.warn("资源未打包AssetsBundle: " + path);
            return obj;
        }
        let pack = $.getInstance(AssetMgr).loadPackSync(this.getFileName(path));
        return pack.loadCustom(path, type);
    }
    _exist(path) {
        if (config_1.Config.isEditorMode)
            return exist(path);
        return !!this.getFileName(path, true);
    }
    loadPrefab(path) {
        path = DEFAULT_PATH + path + ".prefab";
        return this._load(path, GameObject);
    }
    loadAsset(path, type) {
        path = DEFAULT_PATH + path + ".asset";
        return this._load(path, type);
    }
    load(path, type) {
        path = DEFAULT_PATH + path;
        return this._load(path, type);
    }
    loadCustom(path, type) {
        return this._load(path, type);
    }
    exist(path) {
        return this._exist(DEFAULT_PATH + path);
    }
}
class Pack {
    constructor() {
        this.assets = new Map();
        this.paths = new Map();
    }
    _load(path, type) {
        path = path.toLowerCase();
        if (this.paths.has(path)) {
            let obj = this.paths.get(path).LoadAsset(path, puerts_1.$typeof(type));
            if (obj && !obj.IsNull())
                return obj;
        }
        throw new Error("Not found asset: " + path + ", by files: " + [...this.assets.keys()]);
    }
    loadPrefab(path) {
        path = DEFAULT_PATH + path + ".prefab";
        if (config_1.Config.isEditorMode)
            return editorLoadAsset(path, GameObject);
        return this._load(path, GameObject);
    }
    loadAsset(path, type) {
        path = DEFAULT_PATH + path + ".asset";
        if (config_1.Config.isEditorMode)
            return editorLoadAsset(path, type);
        return this._load(path, type);
    }
    load(path, type) {
        path = DEFAULT_PATH + path;
        if (config_1.Config.isEditorMode)
            return editorLoadAsset(path, type);
        return this._load(path, type);
    }
    loadCustom(path, type) {
        if (config_1.Config.isEditorMode)
            return editorLoadAsset(path, type);
        return this._load(path, type);
    }
    exist(path) {
        path = DEFAULT_PATH + path.toLowerCase();
        return this.paths.has(path);
    }
    add(fileName, asset) {
        this.assets.set(fileName, asset);
        if (asset.assetBundle && !asset.assetBundle.IsNull()) {
            let names = asset.assetBundle.GetAllAssetNames();
            if (!names)
                return;
            for (let i = 0; i < names.Length; i++) {
                this.paths.set(names.get_Item(i).toLowerCase(), asset.assetBundle);
            }
        }
    }
    getAssetBundle(fileName) {
        if (this.assets.has(fileName)) {
            let bundle = this.assets.get(fileName).assetBundle;
            if (bundle && !bundle.IsNull())
                return bundle;
        }
        throw new Error("Not found file: " + fileName + ", by files: " + [...this.assets.keys()]);
    }
    dispose() {
        for (let asset of this.assets.values())
            unloadAssetBundle(asset);
        this.assets = new Map();
        this.paths = new Map();
    }
}
class AssetMgr {
    static startAsync(fileName, callback) {
        let loading = this._async.has(fileName);
        if (!loading)
            this._async.set(fileName, new Array());
        if (callback !== undefined)
            this._async.get(fileName).push(callback);
        return loading;
    }
    static stopAsync(fileName, bundle) {
        if (this._async.has(fileName)) {
            let callbacks = this._async.get(fileName);
            for (let callback of callbacks) {
                callback(bundle);
            }
            this._async.delete(fileName);
        }
    }
    get Auto() {
        if (!this._auto)
            this._auto = new Auto(this.getPlatformAssets());
        return this._auto;
    }
    getPlatformAssets() {
        if (!this._platformAssets) {
            let str = PlayerPrefs.GetString("LOCAL_VERSION", null);
            if (str && str.length > 0) {
                let version = JSON.parse(str);
                this._platformAssets = version[config_1.Config.platformString];
            }
        }
        if (!this._platformAssets)
            throw new Error("platform error: not found assets for " + config_1.Config.platformString);
        return this._platformAssets;
    }
    getFilePath(asset) {
        return CS.UnityEngine.Application.persistentDataPath + "/cache/" + asset.path;
    }
    isInterdependence(map, order, depend) {
        let dependents = depend.asset.dependents;
        if (dependents && dependents.length > 0) {
            for (let name of dependents) {
                let _depend = map.get(name);
                if (_depend === order || this.isInterdependence(map, order, _depend))
                    return true;
            }
        }
        return false;
    }
    getAsset(platform, name) {
        for (let asset of platform.assets) {
            if (asset.name === name)
                return asset;
        }
        throw new Error("Not found assetFile: " + name + ", platform=" + config_1.Config.platformString);
    }
    getAssets(...fileNames) {
        let platform = this.getPlatformAssets();
        let assetsMap = new Map();
        for (let name of fileNames) {
            assetsMap.set(name, { index: 1, asset: this.getAsset(platform, name) });
        }
        let keep = true;
        while (keep) {
            keep = false;
            for (let order of assetsMap.values()) {
                let dependents = order.asset.dependents;
                if (dependents && dependents.length > 0) {
                    for (let name of dependents) {
                        if (!assetsMap.has(name)) {
                            assetsMap.set(name, { index: 1, asset: this.getAsset(platform, name) });
                            keep = true;
                        }
                    }
                }
            }
        }
        keep = true;
        while (keep) {
            keep = false;
            for (let order of assetsMap.values()) {
                if (order.ok)
                    continue;
                let dependents = order.asset.dependents;
                if (!dependents || dependents.length == 0) {
                    order.ok = true;
                    continue;
                }
                let index = 0;
                for (let name of dependents) {
                    let depend = assetsMap.get(name);
                    if (this.isInterdependence(assetsMap, order, depend))
                        throw new Error(`${order.asset.path} and ${depend.asset.path} Interdependence`);
                    if (!depend.ok) {
                        index = undefined;
                        keep = true;
                        break;
                    }
                    index += depend.index;
                }
                if (index !== undefined) {
                    order.index = index;
                    order.ok = true;
                }
            }
        }
        let assetOrder = [...assetsMap.values()];
        let len = assetOrder.length;
        for (let i = 0; i < len - 1; i++) {
            for (let j = 0; j < len - 1 - i; j++) {
                if (assetOrder[j].index > assetOrder[j + 1].index) {
                    let temp = assetOrder[j];
                    assetOrder[j] = assetOrder[j + 1];
                    assetOrder[j + 1] = temp;
                }
            }
        }
        let assets = new Array();
        for (let order of assetOrder)
            assets.push(order.asset);
        return assets;
    }
    loadSync(...fileNames) {
        let assetsMap = new Map();
        let assets = this.getAssets(...fileNames);
        let len = assets.length;
        for (let i = 0; i < len; i++) {
            if (!assets[i].assetBundle) {
                let start = DateTime.Now.valueOf();
                let path = this.getFilePath(assets[i]);
                let datas = File.ReadAllBytes(path);
                let assetBundle = AssetBundle.LoadFromMemory(datas, assets[i].crc);
                assets[i].assetBundle = assetBundle;
                let offset = DateTime.Now.valueOf() - start;
            }
            assetsMap.set(assets[i].name, assets[i].assetBundle);
        }
        return assetsMap;
    }
    load(...fileNames) {
        let _this = this;
        let state = {
            generator: undefined,
            _complete: undefined,
            _progress: undefined,
            complete(cb) {
                this._complete = cb;
            },
            progress(cb) {
                this._progress = cb;
            }
        };
        function* doing() {
            let assetsMap = new Map();
            let assets = _this.getAssets(...fileNames);
            let len = assets.length;
            for (let i = 0; i < len; i++) {
                if (!assets[i].assetBundle) {
                    let loaded = false;
                    let loading = AssetMgr.startAsync(assets[i].name, bundle => {
                        loaded = true;
                        assets[i].assetBundle = bundle;
                    });
                    if (loading) {
                        while (!loaded)
                            yield null;
                    }
                    else {
                        let path = _this.getFilePath(assets[i]);
                        let request = UnityWebRequest.Get("file://" + path);
                        let download = new DownloadHandlerAssetBundle(path, assets[i].crc);
                        request.downloadHandler = download;
                        if (!state._progress)
                            yield request.SendWebRequest();
                        else {
                            request.SendWebRequest();
                            while (!request.isDone) {
                                state._progress(request.downloadProgress, i + 1, len);
                                yield null;
                            }
                        }
                        let ok = !request.isHttpError && !request.isNetworkError && (!request.error || request.error.length == 0);
                        if (!ok)
                            throw new Error("Can't load assetBundle : " + request.error + "\npath:" + path);
                        AssetMgr.stopAsync(assets[i].name, download.assetBundle);
                    }
                }
                if (state._progress)
                    state._progress(1, i + 1, len);
                assetsMap.set(assets[i].name, assets[i].assetBundle);
            }
            if (state._complete)
                state._complete(assetsMap);
        }
        state.generator = doing();
        return state;
    }
    loadPackSync(...fileNames) {
        let pack = new Pack();
        for (let asset of this.getAssets(...fileNames)) {
            if (!asset.assetBundle) {
                let start = DateTime.Now.valueOf();
                let path = this.getFilePath(asset);
                let datas = File.ReadAllBytes(path);
                let assetBundle = AssetBundle.LoadFromMemory(datas, asset.crc);
                asset.assetBundle = assetBundle;
                let offset = DateTime.Now.valueOf() - start;
            }
            pack.add(asset.name, asset);
        }
        return pack;
    }
    loadPack(...fileNames) {
        let _this = this;
        let state = {
            generator: undefined,
            _complete: undefined,
            _progress: undefined,
            complete(cb) {
                this._complete = cb;
            },
            progress(cb) {
                this._progress = cb;
            }
        };
        function* doing() {
            let pack = new Pack();
            let assets = _this.getAssets(...fileNames);
            let len = assets.length;
            for (let i = 0; i < len; i++) {
                if (!assets[i].assetBundle) {
                    let loaded = false;
                    let loading = AssetMgr.startAsync(assets[i].name, bundle => {
                        loaded = true;
                        assets[i].assetBundle = bundle;
                    });
                    if (loading) {
                        while (!loaded)
                            yield null;
                    }
                    else {
                        let path = _this.getFilePath(assets[i]);
                        let request = UnityWebRequest.Get("file://" + path);
                        let download = new DownloadHandlerAssetBundle(path, assets[i].crc);
                        request.downloadHandler = download;
                        if (!state._progress)
                            yield request.SendWebRequest();
                        else {
                            request.SendWebRequest();
                            while (!request.isDone) {
                                state._progress(request.downloadProgress, i + 1, len);
                                yield null;
                            }
                        }
                        let ok = !request.isHttpError && !request.isNetworkError && (!request.error || request.error.length == 0);
                        if (!ok)
                            throw new Error("Can't load assetBundle : " + request.error + "\npath:" + path);
                        AssetMgr.stopAsync(assets[i].name, download.assetBundle);
                    }
                }
                if (state._progress)
                    state._progress(1, i + 1, len);
                pack.add(assets[i].name, assets[i]);
            }
            if (state._complete)
                state._complete(pack);
        }
        state.generator = doing();
        return state;
    }
    unload(...fileNames) {
        if (fileNames && fileNames.length > 0) {
            let platform = this.getPlatformAssets();
            for (let name of fileNames) {
                unloadAssetBundle(this.getAsset(platform, name));
            }
        }
    }
    unloadAll() {
        let platform = this.getPlatformAssets();
        for (let asset of platform.assets) {
            unloadAssetBundle(asset);
        }
    }
    dispose() {
        this.unloadAll();
    }
}
exports.AssetMgr = AssetMgr;
AssetMgr._async = new Map();
//# sourceMappingURL=assetMgr.js.map