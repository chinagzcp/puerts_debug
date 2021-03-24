"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
require("rxjs/add/observable/fromEvent");
require("rxjs/add/observable/interval");
require("rxjs/add/operator/map");
require("rxjs/add/operator/scan");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/throttleTime");
const csharp_UnityEngine_1 = require("csharp.UnityEngine");
const csharp_UnityEngine_UI_1 = require("csharp.UnityEngine.UI");
const puerts_1 = require("puerts");
setTimeout(() => {
    let obj = new csharp_UnityEngine_1.GameObject("Button");
    obj.transform.SetParent(csharp_UnityEngine_1.GameObject.Find("UIRoot/Background").transform);
    obj.transform.localPosition = csharp_UnityEngine_1.Vector3.zero;
    obj.AddComponent(puerts_1.$typeof(csharp_UnityEngine_UI_1.Image));
    let button = obj.AddComponent(puerts_1.$typeof(csharp_UnityEngine_UI_1.Button));
    let observable = Observable_1.Observable.fromEvent(button, "onClick")
        .scan(count => count + 1, 0)
        .subscribe({
        next: count => console.log(`Count: ${count}`)
    });
    setTimeout(() => observable.unsubscribe(), 5000);
}, 1000);
//# sourceMappingURL=main.js.map