"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsComponent = void 0;
const CS = require("csharp");
const puerts_1 = require("puerts");
const { GameObject } = CS.UnityEngine;
function bind(thisArg, funcname, ...srcArgs) {
    const func = typeof (funcname) === "string" ? thisArg[funcname] : funcname;
    if (func !== undefined && typeof (func) === "function")
        return (...args) => func.call(thisArg, ...srcArgs, ...args);
    return undefined;
}
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
class JsComponent {
    constructor(trf, refs, component) {
        if (trf instanceof GameObject)
            trf = trf.transform;
        this._transform = trf;
        this._gameObject = trf.gameObject;
        this._component = component;
        if (refs === undefined || refs === true) {
            this.bindProps(trf.GetComponents(puerts_1.$typeof(CS.PropertyRefs)));
        }
        else if (refs) {
            this.bindProps(refs);
        }
        try {
            let awake = this["Awake"];
            if (awake !== undefined && typeof (awake) === "function")
                awake.call(this);
        }
        catch (e) {
            console.error(e);
        }
        this.bindCallers();
        this.bindUpdateCallers();
    }
    getComponent(type) {
        if (typeof (type) === "string")
            return this._gameObject.GetComponent(type);
        return this._gameObject.GetComponent(puerts_1.$typeof(type));
    }
    getComponentInPath(path, type) {
        let child = this._transform.Find(path);
        if (child && !child.IsNull()) {
            if (typeof (type) === "string")
                return child.GetComponent(type);
            return child.GetComponent(puerts_1.$typeof(type));
        }
        return undefined;
    }
    StartCoroutine(routine, ...args) {
        var iterator = cs_generator(routine, ...args);
        return this.component.StartCoroutine(iterator);
    }
    StopCoroutine(routine) {
        this.component.StopCoroutine(routine);
    }
    StopAllCoroutines() {
        this.component.StopAllCoroutines();
    }
    disponse() {
        this._gameObject = undefined;
        this._transform = undefined;
        this._component = undefined;
    }
    bindCallers() {
        let onEnable = bind(this, "OnEnable");
        if (onEnable && this._gameObject.activeSelf) {
            onEnable();
        }
        ["OnApplicationQuit", "OnDestroy", "OnDisable", "OnEnable", "OnGUI", "Start"]
            .forEach(name => {
            let func = bind(this, name);
            if (func) {
                this.component.Call(name, func);
            }
        });
        ["OnApplicationFocus", "OnApplicationPause"]
            .forEach(name => {
            let func = bind(this, name);
            if (func) {
                this.component.CallBool(name, func);
            }
        });
        const triggerCfg = [
            ["CallCollision", "OnCollisionEnter", "OnCollisionStay", "OnCollisionExit"],
            ["CallCollision2D", "OnCollisionEnter2D", "OnCollisionStay2D", "OnCollisionExit2D"],
            ["CallTrigger", "OnTriggerEnter", "OnTriggerStay", "OnTriggerExit"],
            ["CallTrigger2D", "OnTriggerEnter2D", "OnTriggerStay2D", "OnTriggerExit2D"],
        ];
        triggerCfg.forEach(cfg => {
            let [funcname, funcEnter, funcStay, funcExit] = cfg;
            let enter = bind(this, funcEnter), stay = bind(this, funcStay), exit = bind(this, funcExit);
            if (enter || stay || exit)
                this.component[funcname](enter, stay, exit);
        });
    }
    bindUpdateCallers() {
        const updateCfg = [];
        var func;
        if (func = bind(this, "Update"))
            updateCfg.push([func, BatchCaller.Update]);
        if (func = bind(this, "FixedUpdate"))
            updateCfg.push([func, BatchCaller.FixedUpdate]);
        if (func = bind(this, "LateUpdate"))
            updateCfg.push([func, BatchCaller.LateUpdate]);
        if (updateCfg.length > 0) {
            let enable = function () {
                updateCfg.forEach(([func, batch]) => batch.addListener(func));
            };
            let disable = function () {
                updateCfg.forEach(([func, batch]) => batch.removeListener(func));
            };
            let caller = this.component.GetCaller("OnEnable");
            if (!caller || caller.IsNull())
                this.component.Call("OnEnable", enable);
            else {
                caller.callback = CS.System.Delegate.Combine(caller.callback, new CS.System.Action(enable));
                if (this._gameObject.activeSelf)
                    enable();
            }
            caller = this.component.GetCaller("OnDisable");
            if (!caller || caller.IsNull())
                this.component.Call("OnDisable", disable);
            else
                caller.callback = CS.System.Delegate.Combine(caller.callback, new CS.System.Action(disable));
        }
        ;
    }
    bindProps(refs) {
        if (refs) {
            let _refs = new Array();
            if (refs instanceof CS.PropertyRefs) {
                if (refs && !refs.IsNull())
                    _refs.push(refs);
            }
            else {
                for (let i = 0; i < refs.Length; i++) {
                    let ref = refs.get_Item(i);
                    if (ref && !ref.IsNull())
                        _refs.push(ref);
                }
            }
            _refs.forEach(ref => {
                const runInEditor = CS.UnityEngine.Application.platform === CS.UnityEngine.RuntimePlatform.WindowsEditor
                    || CS.UnityEngine.Application.platform === CS.UnityEngine.RuntimePlatform.LinuxEditor;
                let props = ref.Pairs;
                for (let i = 0; i < props.Length; i++) {
                    let prop = props.get_Item(i);
                    if (runInEditor && this[prop.key] !== undefined) {
                        console.warn(`Object ${this}(${this.name}) already exists prop '${prop.key}' ---> ${this[prop.key]}`);
                    }
                    this[prop.key] = prop.value;
                }
            });
        }
    }
    get transform() { return this._transform; }
    get gameObject() { return this._gameObject; }
    get enabled() { return this.component.enabled; }
    set enabled(value) { this.component.enabled = value; }
    get isActiveAndEnabled() { return this.component.isActiveAndEnabled; }
    get tag() { return this._gameObject.tag; }
    set tag(value) { this._gameObject.tag = value; }
    get name() { return this._gameObject.name; }
    set name(value) { this._gameObject.name = value; }
    get component() {
        if (!this._component || this._component.IsNull()) {
            let component = this._gameObject.GetComponent(puerts_1.$typeof(CS.JsComponent));
            if (!component || component.IsNull())
                component = this._gameObject.AddComponent(puerts_1.$typeof(CS.JsComponent));
            this._component = component;
        }
        return this._component;
    }
    ;
}
exports.JsComponent = JsComponent;
class BatchCaller {
    constructor(caller) {
        this.methods = new Array();
        this.caller = caller;
        this.caller.callback = (...args) => {
            for (let method of this.methods) {
                method.apply(undefined, args);
            }
        };
    }
    static get Update() {
        return this.getter("__Update", CS.CallUpdate);
    }
    ;
    static get FixedUpdate() {
        return this.getter("__FixedUpdate", CS.CallFixedUpdate);
    }
    ;
    static get LateUpdate() {
        return this.getter("__LateUpdate", CS.CallLateUpdate);
    }
    ;
    static getter(key, type) {
        let batch = this[key];
        if (!batch) {
            let obj = this["_gameObject"];
            if (!obj || obj.IsNull()) {
                obj = new CS.UnityEngine.GameObject("UnifiedMgr");
                CS.UnityEngine.Object.DontDestroyOnLoad(obj);
                this["_gameObject"] = obj;
            }
            batch = new BatchCaller(obj.AddComponent(puerts_1.$typeof(type)));
            this[key] = batch;
        }
        return batch;
    }
    addListener(method) {
        this.methods.push(method);
    }
    removeListener(method) {
        let index = this.methods.indexOf(method);
        if (index >= 0) {
            for (let i = index; i < this.methods.length - 1; i++) {
                this.methods[i] = this.methods[i + 1];
            }
            this.methods.pop();
        }
    }
}
//# sourceMappingURL=jsComponent.js.map