"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const csharp = require("csharp");
let namespaces = new Map();
namespaces.set("csharp.DG.Tweening", csharp.DG.Tweening);
namespaces.set("csharp.System", csharp.System);
namespaces.set("csharp.UnityEngine", csharp.UnityEngine);
namespaces.set("csharp.UnityEngine.UI", csharp.UnityEngine.UI);
namespaces.set("csharp.UnityEngine.EventSystems", csharp.UnityEngine.EventSystems);
namespaces.set("csharp.UnityEngine.SceneManagement", csharp.UnityEngine.SceneManagement);
(function () {
    let puerts = (this ?? globalThis)["puerts"];
    namespaces.forEach((module, name) => {
        puerts.registerBuildinModule(name, module);
    });
})();
//# sourceMappingURL=modules.js.map