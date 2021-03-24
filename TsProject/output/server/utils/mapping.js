"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestBinary = exports.requestString = exports.Mapping = void 0;
class Mapping {
    static add(info, id, type) {
        let actor = type === "String" ? this.actorString :
            type === "Uint8Array" ? this.actorBinary : this.actorDefault;
        let packs = actor.get(id);
        if (!packs) {
            packs = [];
            actor.set(id, packs);
        }
        let target = info.target;
        if (target && typeof (target) !== 'function' && typeof (target.constructor) === "function") {
            info.target = this.getTarget(target.constructor);
        }
        packs.push(info);
    }
    static getDefalut(id) {
        return this.actorDefault.get(id) ?? this.default;
    }
    static getString(id) {
        return this.actorString.get(id) ?? this.default;
    }
    static getBinary(id) {
        return this.actorBinary.get(id) ?? this.default;
    }
    static getTarget(clazz) {
        let target = this.insClazz.get(clazz);
        if (!target) {
            target = new clazz();
            this.insClazz.set(clazz, target);
        }
        return target;
    }
}
exports.Mapping = Mapping;
Mapping.actorString = new Map();
Mapping.actorBinary = new Map();
Mapping.actorDefault = new Map();
Mapping.default = new Array();
Mapping.insClazz = new Map();
function requestBinary(id) {
    return (target, name) => {
        let func = target[name];
        if (!func || typeof (func) !== "function") {
            console.warn(`invalid interface ${target?.constructor?.name ?? target?.['name']} ${name}`);
            return;
        }
        Mapping.add({ target: target, method: func }, id, "Uint8Array");
    };
}
exports.requestBinary = requestBinary;
function requestString(id) {
    return (target, name) => {
        let func = target[name];
        if (!func || typeof (func) !== "function") {
            console.warn(`invalid interface ${target?.constructor?.name ?? target?.['name']} ${name}`);
            return;
        }
        Mapping.add({ target: target, method: func }, id, "String");
    };
}
exports.requestString = requestString;
//# sourceMappingURL=mapping.js.map