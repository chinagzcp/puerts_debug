"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldMetadata = exports.ClassMetadata = exports.Metadata = void 0;
class Metadata {
    constructor(decorator, info) {
        this._info = info;
        this._decorator = decorator;
    }
    get info() { return this._info; }
    ;
    get decorator() { return this._decorator; }
    ;
}
exports.Metadata = Metadata;
class ClassMetadata {
    static add(target, metadata) {
        let metadatas = this.actor.get(target);
        if (!metadatas) {
            metadatas = new Array();
            this.actor.set(target, metadatas);
        }
        metadatas.push(metadata);
    }
    static get(target, decorator, inherit) {
        let metadatas = this.actor.get(target);
        if (metadatas && metadatas.length > 0) {
            if (decorator) {
                let _metadatas = new Array();
                metadatas.forEach(metadata => {
                    if (metadata.decorator === decorator)
                        _metadatas.push(metadata);
                });
                metadatas = _metadatas.length > 0 ? _metadatas : undefined;
            }
            return metadatas;
        }
        if (inherit) {
            let _super = Object.getPrototypeOf(target);
            if (typeof (_super) === "function" && _super !== Function && _super !== Object && _super.name.length > 0) {
                return this.get(_super, decorator, inherit);
            }
        }
        return undefined;
    }
    static getFirst(target, decorator, inherit) {
        let metadatas = this.get(target, decorator, inherit);
        if (metadatas && metadatas.length > 0)
            return metadatas[0];
        return undefined;
    }
}
exports.ClassMetadata = ClassMetadata;
ClassMetadata.actor = new WeakMap();
class FieldMetadata {
    static add(target, key, metadata) {
        let fields = this.actor.get(target);
        if (!fields) {
            fields = new Map();
            this.actor.set(target, fields);
        }
        let metadatas = fields.get(key);
        if (!metadatas) {
            metadatas = new Array();
            fields.set(key, metadatas);
        }
        metadatas.push(metadata);
    }
    static get(target, key, decorator, inherit) {
        let fields = this.actor.get(target);
        if (fields) {
            let metadatas = fields.get(key);
            if (metadatas && metadatas.length > 0) {
                if (decorator) {
                    let _metadatas = new Array();
                    metadatas.forEach(metadata => {
                        if (metadata.decorator === decorator)
                            _metadatas.push(metadata);
                    });
                    metadatas = _metadatas.length > 0 ? _metadatas : undefined;
                }
                return metadatas;
            }
        }
        if (inherit) {
            let _super = Object.getPrototypeOf(target);
            if (typeof (_super) === "function" && _super !== Function && _super !== Object && _super.name.length > 0) {
                return this.get(_super, key, decorator, inherit);
            }
        }
        return undefined;
    }
    static getFirst(target, key, decorator, inherit) {
        let metadatas = this.get(target, key, decorator, inherit);
        if (metadatas && metadatas.length > 0)
            return metadatas[0];
        return undefined;
    }
    static getFields(target, inherit) {
        let keys = new Array();
        let fields = this.actor.get(target);
        if (fields) {
            keys.push(...fields.keys());
        }
        if (inherit) {
            let _super = Object.getPrototypeOf(target);
            if (typeof (_super) === "function" && _super !== Function && _super !== Object && _super.name.length > 0) {
                for (let _k1 of this.getFields(_super, inherit).reverse()) {
                    let add = true;
                    for (let _k2 of keys) {
                        if (_k1 === _k2) {
                            add = false;
                            break;
                        }
                    }
                    if (add)
                        keys.unshift(_k1);
                }
            }
        }
        return keys;
    }
}
exports.FieldMetadata = FieldMetadata;
FieldMetadata.actor = new WeakMap();
//# sourceMappingURL=decorator.js.map