"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MHomePanel = void 0;
const csharp_UnityEngine_1 = require("csharp.UnityEngine");
const assetMgr_1 = require("../../common/assetMgr");
const jsPanel_1 = require("../../jsPanel");
const layerMgr_1 = require("../../common/layerMgr");
const sceneTo_1 = require("../sceneTo");
const mPlayerBar_1 = require("./mPlayerBar");
class MHomePanel extends jsPanel_1.JsPanel {
    static __staticConstructor() {
        let prefab = $.getInstance(assetMgr_1.AssetMgr).Auto.loadPrefab("Prefabs/Scene/MWorld/MHomePanel");
        let trf = csharp_UnityEngine_1.GameObject.Instantiate(prefab).transform;
        $.getInstance(layerMgr_1.LayerMgr).Scene.addChild(trf);
        return new MHomePanel(trf);
    }
    open() {
        super.open();
        $.getInstance(mPlayerBar_1.MPlayerBar).setTopActive(true);
        $.getInstance(mPlayerBar_1.MPlayerBar).setBottomActive(true);
    }
    Awake() {
        this.initListeners();
    }
    initListeners() {
        this._linkBtn.onClick.AddListener(() => {
            sceneTo_1.default.b2World();
        });
    }
}
exports.MHomePanel = MHomePanel;
//# sourceMappingURL=mHomePanel.js.map