import * as CS from "csharp";
import { $typeof } from "puerts";

//加载工具集
(function () {
    require("./common/jsWorker");
})();

//OnGUI方法
let count = 0;
const { GUILayout } = CS.UnityEngine;
function onGUI() {
    GUILayout.BeginHorizontal();
    GUILayout.Label("frame: " + count++);
    GUILayout.EndHorizontal();
}
//创建OnGUI回调
let obj = new CS.UnityEngine.GameObject("OnGUI");
let call = (obj.AddComponent($typeof(CS.CallOnGUI)) as CS.CallOnGUI);
call.callback = onGUI;

//创建JsWorker实例
let worker = new JsWorker((CS.JsManager.GetInstance() as CS.JsManager).Loader);
worker.start("./childThread/main"); //调用到C# JsWorker.Startup(...)方法