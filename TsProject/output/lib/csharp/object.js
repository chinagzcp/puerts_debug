"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CS = require("csharp");
const IS_ACTIVE = Symbol("__IS_ACTIVE");
const GAMEOBJECT = Symbol("__GAMEOBJECT");
const COMPONENTS = Symbol("__COMPONENTS");
const SRC_TOSTRING = Symbol("__src_toString");
function check(gameObject) {
    if (!gameObject || !(gameObject instanceof CS.UnityEngine.Object))
        throw new Error(`NullReferenceException: The object is 'null' but you are still trying to access it.`);
    if (gameObject.Equals(undefined))
        throw new Error(`MissingReferenceException: The object of type '${gameObject?.name}' has been destroyed but you are still trying to access it.`);
}
function start(obj, gameObject) {
    obj[IS_ACTIVE] = true;
    obj[GAMEOBJECT] = gameObject;
    obj[SRC_TOSTRING] = obj['toString'];
    obj['toString'] = function () {
        if (this[IS_ACTIVE])
            return obj[SRC_TOSTRING]();
        return "null";
    };
}
function close(obj) {
    obj[IS_ACTIVE] = false;
    obj[GAMEOBJECT] = undefined;
}
function getComponent(type) {
    let components = getComponents.call(this, type);
    if (components && components.length > 0)
        return components[0];
    return null;
}
function getComponents(type) {
    check(this);
    let gameObject = this;
    if (gameObject instanceof CS.UnityEngine.Component)
        gameObject = gameObject.gameObject;
    let types = gameObject[COMPONENTS];
    if (types) {
        let components = types.get(type);
        if (components) {
            let arr = new Array();
            components.forEach(o => {
                if (o[IS_ACTIVE])
                    arr.push(o);
            });
            types.set(type, arr);
            return arr;
        }
    }
    return null;
}
function addComponent(type, ...args) {
    check(this);
    let gameObject = this;
    if (gameObject instanceof CS.UnityEngine.Component)
        gameObject = gameObject.gameObject;
    let types = gameObject[COMPONENTS];
    if (!types) {
        types = new WeakMap();
        gameObject[COMPONENTS] = types;
    }
    let components = types.get(type);
    if (!components) {
        components = [];
        types.set(type, components);
    }
    let component = new type(gameObject, ...args);
    components.push(component);
    start(component, gameObject);
    return component;
}
function destroy(component) {
    if (!component)
        return;
    let gameObject = component[GAMEOBJECT];
    if (!gameObject || !(gameObject instanceof CS.UnityEngine.Object) || gameObject.Equals(undefined))
        return;
    if (gameObject instanceof CS.UnityEngine.Component)
        gameObject = gameObject.gameObject;
    close(component);
    let type = Object.getPrototypeOf(component);
    let types = gameObject[COMPONENTS];
    if (types) {
        let components = types.get(type);
        let index = !!components ? components.indexOf(component) : -1;
        if (index >= 0) {
            if (components.length > 1) {
                let arr = [...components.slice(0, index), ...components.slice(index + 1, components.length)];
                types.set(type, arr);
            }
            else {
                types.delete(type);
            }
        }
    }
}
CS.UnityEngine.GameObject.prototype["getComponents"] = getComponents;
CS.UnityEngine.GameObject.prototype["getComponent"] = getComponent;
CS.UnityEngine.GameObject.prototype["addComponent"] = addComponent;
CS.UnityEngine.Component.prototype["getComponents"] = getComponents;
CS.UnityEngine.Component.prototype["getComponent"] = getComponent;
CS.UnityEngine.Component.prototype["addComponent"] = addComponent;
CS.UnityEngine.Object["destroy"] = destroy;
//# sourceMappingURL=object.js.map