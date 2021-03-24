"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cs_generator = void 0;
const CS = require("csharp");
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
exports.cs_generator = cs_generator;
//# sourceMappingURL=generator.js.map