"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerMgr = void 0;
const puerts_1 = require("puerts");
const csharp_UnityEngine_1 = require("csharp.UnityEngine");
const csharp_UnityEngine_UI_1 = require("csharp.UnityEngine.UI");
const assetMgr_1 = require("./assetMgr");
class Layer {
    constructor(trf, order) {
        this._transform = trf;
        this._gameObject = trf.gameObject;
        this._canvas = trf.GetComponent(puerts_1.$typeof(csharp_UnityEngine_1.Canvas));
        this._canvasScaler = trf.GetComponent(puerts_1.$typeof(csharp_UnityEngine_UI_1.CanvasScaler));
        this._canvas.sortingOrder = order;
    }
    get transform() { return this._transform; }
    get gameObject() { return this._gameObject; }
    get canvas() { return this._canvas; }
    get canvasScaler() { return this._canvasScaler; }
    isActive() {
        return this._gameObject && !this._gameObject.IsNull() && this._gameObject.activeSelf;
    }
    addChild(child) {
        child.SetParent(this._transform);
        child.localScale = csharp_UnityEngine_1.Vector3.one;
        child.localPosition = csharp_UnityEngine_1.Vector3.zero;
        if (child instanceof csharp_UnityEngine_1.RectTransform) {
            if (csharp_UnityEngine_1.Vector2.op_Equality(child.anchorMin, csharp_UnityEngine_1.Vector2.zero) && csharp_UnityEngine_1.Vector2.op_Equality(child.anchorMax, csharp_UnityEngine_1.Vector2.one))
                child.sizeDelta = csharp_UnityEngine_1.Vector2.zero;
        }
    }
    clear() {
        for (let i = 0; i < this._transform.childCount; i++)
            csharp_UnityEngine_1.GameObject.Destroy(this._transform.GetChild(i));
    }
}
class LayerMgr {
    get Scene() { return this.getter("Scene", 0); }
    get Background() { return this.getter("Background", 100); }
    get Normal() { return this.getter("Normal", 200); }
    get Info() { return this.getter("Info", 300); }
    get Tip() { return this.getter("Tip", 400); }
    get Top() { return this.getter("Top", 500); }
    clearAll() {
        if (this._uiRoot && !this._uiRoot.IsNull()) {
            csharp_UnityEngine_1.GameObject.Destroy(this._uiRoot);
        }
        this._uiRoot = undefined;
    }
    getter(name, order) {
        let key = "__" + name;
        let layer = this[key];
        if (!layer || !layer.isActive()) {
            if (!this._uiRoot || this._uiRoot.IsNull()) {
                let prefab = $.getInstance(assetMgr_1.AssetMgr).Auto.loadPrefab("Prefabs/UI/UIRoot");
                let obj = csharp_UnityEngine_1.GameObject.Instantiate(prefab);
                obj.transform.SetParent(undefined);
                obj.transform.localPosition = csharp_UnityEngine_1.Vector3.zero;
                obj.transform.localScale = csharp_UnityEngine_1.Vector3.one;
                obj.name = "UIRoot";
                this._uiRoot = obj.transform;
            }
            this[key] = layer = new Layer(this._uiRoot.Find(name), order);
        }
        return layer;
    }
}
exports.LayerMgr = LayerMgr;
//# sourceMappingURL=layerMgr.js.map