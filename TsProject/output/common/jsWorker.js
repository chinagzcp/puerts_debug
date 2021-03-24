"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CS = require("csharp");
const puerts_1 = require("puerts");
let List = puerts_1.$generic(CS.System.Collections.Generic.List$1, CS.System.Object);
const CLOSE_EVENT = "__e_close";
const REMOTE_EVENT = "__e_remote";
class JsWorker {
    constructor(loader) {
        let worker = undefined;
        if (loader instanceof CS.JsWorker) {
            worker = loader;
            this.isMain = false;
        }
        else {
            worker = CS.JsWorker.New(loader);
            this.isMain = true;
        }
        this.worker = worker;
        this.worker.VerifySafety(this.isMain);
        this.callbacks = new Map();
        this.working();
    }
    get isAlive() { return this.worker.IsAlive; }
    working() {
        let getValue = (data) => {
            if (data !== undefined && data !== null && data !== void 0) {
                return this.unpackage(data);
            }
            return undefined;
        };
        let onmessage = (name, data) => {
            let result = undefined;
            let arr = this.callbacks.get(name);
            if (arr) {
                let o = getValue(data);
                for (let cb of arr) {
                    result = cb(o);
                }
            }
            if (result !== undefined && result !== null && result !== void 0)
                return this.package(result);
            return undefined;
        };
        if (this.isMain) {
            this.worker.mainOnMessage = (name, data) => {
                switch (name) {
                    case CLOSE_EVENT:
                        {
                            let v = getValue(data);
                            let closing = true;
                            let arr = this.callbacks.get(CLOSE_EVENT);
                            if (arr)
                                arr.forEach(cb => {
                                    if (cb(v) === false)
                                        closing = false;
                                });
                            if (closing)
                                this.dispose();
                            return this.package(closing);
                        }
                    case REMOTE_EVENT:
                        {
                            let value = CS;
                            getValue(data).split(".").forEach(name => {
                                if (value && name) {
                                    value = value[name];
                                }
                            });
                            let t = typeof (value);
                            if (t !== "undefined" && t !== "object" && t !== "function") {
                                return this.package(value);
                            }
                            return undefined;
                        }
                        break;
                    default:
                        return onmessage(name, data);
                }
            };
        }
        else {
            this.worker.childOnMessage = onmessage;
            let _this = this;
            function createProxy(namespace) {
                return new Proxy(Object.create(null), {
                    get: function (cache, name) {
                        if (!(name in cache) && typeof (name) === "string") {
                            let fullName = namespace ? (namespace + '.' + name) : name;
                            if (fullName.startsWith("UnityEngine") && fullName !== "UnityEngine.Debug") {
                                let cls = _this.postSync(REMOTE_EVENT, fullName);
                                if (cls) {
                                    cache[name] = cls;
                                }
                                else {
                                    cache[name] = createProxy(fullName);
                                }
                            }
                            else {
                                let value = CS;
                                fullName.split(".").forEach(name => {
                                    if (value && name) {
                                        value = value[name];
                                    }
                                });
                                cache[name] = value;
                            }
                        }
                        return cache[name];
                    }
                });
            }
            let puerts = require("puerts");
        }
    }
    package(data, refs, refId) {
        refId = refId ?? 1;
        refs = refs ?? new WeakMap();
        let result = new CS.JsWorker.Package();
        let type = typeof (data);
        if ((type === "object" || type === "function") && refs.has(data)) {
            result.type = CS.JsWorker.Type.RefObject;
            result.value = refs.get(data);
        }
        else {
            switch (type) {
                case "object":
                    {
                        let id = refId++;
                        result.id = id;
                        refs.set(data, id);
                        if (data instanceof CS.System.Object) {
                            result.type = CS.JsWorker.Type.Value;
                            result.value = data;
                        }
                        else if (data instanceof ArrayBuffer) {
                            result.type = CS.JsWorker.Type.ArrayBuffer;
                            result.value = CS.JsWorker.Package.ToBytes(data);
                        }
                        else if (Array.isArray(data)) {
                            let list = new List();
                            for (let i = 0; i < data.length; i++) {
                                let item = this.package(data[i], refs, refId);
                                item.info = i;
                                list.Add(item);
                            }
                            result.type = CS.JsWorker.Type.Array;
                            result.value = list;
                        }
                        else {
                            let list = new List();
                            Object.keys(data).forEach(key => {
                                let item = this.package(data[key], refs, refId);
                                item.info = key;
                                list.Add(item);
                            });
                            result.type = CS.JsWorker.Type.Object;
                            result.value = list;
                        }
                    }
                    break;
                case "function":
                    {
                        let id = refId++;
                        result.id = id;
                        refs.set(data, id);
                        result.type = CS.JsWorker.Type.Function;
                        result.value = data.toString();
                    }
                    break;
                case "string":
                case "number":
                case "bigint":
                case "boolean":
                    result.type = CS.JsWorker.Type.Value;
                    result.value = data;
                    break;
                default:
                    result.type = CS.JsWorker.Type.Unknown;
                    break;
            }
        }
        return result;
    }
    unpackage(data, refs) {
        refs = refs ?? new Map();
        let result = undefined, id = data.id, value = data.value;
        switch (data.type) {
            case CS.JsWorker.Type.Object:
                {
                    result = {};
                    if (id > 0)
                        refs.set(id, result);
                    let arr = value;
                    for (let i = 0; i < arr.Count; i++) {
                        let item = arr.get_Item(i);
                        result[item.info] = this.unpackage(item, refs);
                    }
                }
                break;
            case CS.JsWorker.Type.Array:
                {
                    result = [];
                    if (id > 0)
                        refs.set(id, result);
                    let arr = value;
                    for (let i = 0; i < arr.Count; i++) {
                        let item = arr.get_Item(i);
                        result[item.info] = this.unpackage(item, refs);
                    }
                }
                break;
            case CS.JsWorker.Type.ArrayBuffer:
                result = CS.JsWorker.Package.ToArrayBuffer(value);
                if (id > 0)
                    refs.set(id, result);
                break;
            case CS.JsWorker.Type.Function:
                result = eval(value);
                if (id > 0)
                    refs.set(id, result);
                break;
            case CS.JsWorker.Type.RefObject:
                if (refs.has(value))
                    result = refs.get(value);
                else
                    result = "Error: ref id " + value + " not found";
                break;
            case CS.JsWorker.Type.Unknown:
            default:
                result = value;
                if (id > 0)
                    refs.set(id, result);
                break;
        }
        return result;
    }
    start(filepath) {
        if (globalWorker && globalWorker["worker"] == this.worker)
            throw new Error("Thread cannot called start");
        this.worker.Startup(filepath);
    }
    dispose() {
        let globalWorker = (function () { return this ?? globalThis; })()["globalWorker"];
        if (globalWorker && globalWorker["worker"] == this.worker)
            this.post(CLOSE_EVENT);
        else {
            this.callbacks.clear();
            this.worker.Dispose();
        }
    }
    post(eventName, data) {
        let o;
        if (data !== undefined && data !== null && data !== void 0) {
            o = this.package(data);
        }
        if (this.isMain)
            this.worker.CallChild(eventName, o);
        else
            this.worker.CallMain(eventName, o);
    }
    postSync(eventName, data) {
        let o, result = undefined;
        if (data !== undefined && data !== null && data !== void 0) {
            o = this.package(data);
        }
        if (this.isMain)
            result = this.worker.Sync.CallChild(eventName, o);
        else
            result = this.worker.Sync.CallMain(eventName, o);
        if (result !== undefined && result !== null && result !== void 0) {
            result = this.unpackage(result);
        }
        return result;
    }
    eval(chunk, chunkName) {
        if (globalWorker && globalWorker["worker"] == this.worker)
            throw new Error("Thread cannot called eval");
        this.worker.Eval(chunk, chunkName);
    }
    on(eventName, cb) {
        if (eventName && cb) {
            let arr = this.callbacks.get(eventName);
            if (!arr) {
                arr = [];
                this.callbacks.set(eventName, arr);
            }
            arr.push(cb);
        }
    }
    remove(eventName, cb) {
        let arr = this.callbacks.get(eventName);
        if (arr) {
            let index = arr.indexOf(cb);
            if (index >= 0)
                this.callbacks.set(eventName, [...arr.slice(0, index), ...arr.slice(index + 1)]);
        }
    }
    removeAll(eventName) {
        if (eventName)
            this.callbacks.delete(eventName);
        else
            this.callbacks.clear();
    }
}
(function () {
    let global = (this ?? globalThis);
    global["JsWorker"] = JsWorker;
    global["globalWorker"] = undefined;
})();
(function () {
    const id = CS.System.Threading.Thread.CurrentThread.ManagedThreadId;
    globalThis["thread_id"] = id;
    setInterval(() => {
        let nowId = CS.System.Threading.Thread.CurrentThread.ManagedThreadId;
        console.log(`trhead=${id},\t state=running`);
        if (nowId !== id || nowId !== globalThis["thread_id"]) {
            console.error(`thread=${id}, nowId=${nowId}, thread error`);
        }
    }, 100);
})();
//# sourceMappingURL=jsWorker.js.map