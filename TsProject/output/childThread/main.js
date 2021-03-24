"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CS = require("csharp");
let global = (function () { return this ?? globalThis; })();
let globalWorker = global["globalWorker"];
if (globalWorker) {
    console.log("运行在子线程:");
    setInterval(() => {
        let buffer = CS.BufferUtil.Create(4096);
    }, 20);
}
else {
    console.log("运行在主线程:");
}
//# sourceMappingURL=main.js.map