"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const INSTANCE = "__instance";
const STATIC_CONSTRUCTOR = "__staticConstructor";
const IS_DESTROY = "__isDestroy";
const INIT = "__init";
const RELEASE = "__release";
function instance(type) {
    let instance = type[INSTANCE];
    if (instance !== undefined && instance instanceof type && !isDestroy(instance)) {
        return instance;
    }
    releaseInstance(type);
    return undefined;
}
function getInstance(type) {
    let instance = type[INSTANCE];
    if (instance === undefined || !(instance instanceof type) || isDestroy(instance)) {
        releaseInstance(type);
        let ctor = type[STATIC_CONSTRUCTOR];
        if (typeof (ctor) === "function") {
            instance = ctor.call(type);
            if (!(instance instanceof type))
                console.warn(`${type.name}.${String(STATIC_CONSTRUCTOR)} is not returning itself.`);
        }
        else
            instance = new type();
        let init = instance[INIT];
        if (typeof (init) === "function")
            init.call(instance);
        type[INSTANCE] = instance;
    }
    return instance;
}
function releaseInstance(type) {
    let instance = type[INSTANCE];
    if (instance !== undefined && instance instanceof type) {
        let release = instance[RELEASE];
        if (typeof (release) === "function")
            release.call(instance);
    }
    type[INSTANCE] = undefined;
}
function isDestroy(instance) {
    if (instance !== null) {
        let isDestroy = instance[IS_DESTROY];
        return typeof (isDestroy) === "function" && isDestroy.call(instance);
    }
    return false;
}
(function () {
    let _this = this ?? globalThis;
    let $ = _this["$"] ?? Object.create(null);
    _this["$"] = $;
    $.instance = instance;
    $.getInstance = getInstance;
    $.releaseInstance = releaseInstance;
})();
//# sourceMappingURL=instance.js.map