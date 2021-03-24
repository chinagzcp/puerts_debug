"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CS = require("csharp");
const puerts_1 = require("puerts");
const srcGeneric = puerts_1.$generic;
let list = new Array();
function cache(type) {
    if (!type)
        return false;
    for (let i = 0; i < list.length; i++) {
        if (type.Equals(list[i]))
            return false;
    }
    list.push(type);
    return true;
}
function generic(genericType, ...genericArguments) {
    let Class = srcGeneric(genericType, ...genericArguments);
    let type = puerts_1.$typeof(Class);
    if (genericArguments.length == 2 && cache(type)) {
        try {
            let dictType = puerts_1.$typeof(srcGeneric(CS.System.Collections.Generic.Dictionary$2, ...genericArguments));
            if (dictType && dictType.IsAssignableFrom(type)) {
                Class.prototype['forEach'] = function (callbackfn) {
                    let iterator = this.Keys.GetEnumerator();
                    while (iterator.MoveNext()) {
                        let key = iterator.Current;
                        if (callbackfn(this.get_Item(key), key) === false)
                            break;
                    }
                };
                Class.prototype['getKeys'] = function () {
                    let result = new Array();
                    let iterator = this.Keys.GetEnumerator();
                    while (iterator.MoveNext()) {
                        result.push(iterator.Current);
                    }
                    return result;
                };
                Class.prototype['getValues'] = function () {
                    let result = new Array();
                    let iterator = this.Values.GetEnumerator();
                    while (iterator.MoveNext()) {
                        result.push(iterator.Current);
                    }
                    return result;
                };
                Class.prototype[Symbol.iterator] = function () {
                    let values = new Array();
                    let iterator = this.Keys.GetEnumerator();
                    while (iterator.MoveNext()) {
                        let key = iterator.Current;
                        values.push({ key: key, value: this.get_Item(key) });
                    }
                    return {
                        index: 0,
                        values: values,
                        next() {
                            let index = this.index++;
                            return {
                                value: this.values[index],
                                done: index >= this.values.length
                            };
                        }
                    };
                };
            }
        }
        catch (e) {
            console.warn(e);
        }
    }
    return Class;
}
(function () {
    let puerts = (this ?? globalThis)["puerts"];
    if (puerts && puerts["$generic"].toString() !== generic.toString()) {
        puerts["$generic"] = generic;
        puerts["$srcGeneric"] = srcGeneric;
    }
    else {
        throw new Error("puerts is undefined or redefinition '$generic'");
    }
})();
//# sourceMappingURL=index.js.map