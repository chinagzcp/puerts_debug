"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CS = require("csharp");
const puerts_1 = require("puerts");
(function () {
    require("./common/jsWorker");
})();
let count = 0;
const { GUILayout } = CS.UnityEngine;
function onGUI() {
    GUILayout.BeginHorizontal();
    GUILayout.Label("frame: " + count++);
    GUILayout.EndHorizontal();
}
let obj = new CS.UnityEngine.GameObject("OnGUI");
let call = obj.AddComponent(puerts_1.$typeof(CS.CallOnGUI));
call.callback = onGUI;
let worker = new JsWorker(CS.JsManager.GetInstance().Loader);
worker.start("./childThread/main");
//# sourceMappingURL=main.js.map