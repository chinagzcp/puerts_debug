"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MEventPanel = void 0;
const csharp_UnityEngine_1 = require("csharp.UnityEngine");
const assetMgr_1 = require("../../common/assetMgr");
const jsPanel_1 = require("../../jsPanel");
const layerMgr_1 = require("../../common/layerMgr");
const mPlayerBar_1 = require("./mPlayerBar");
class MEventPanel extends jsPanel_1.JsPanel {
    static __staticConstructor() {
        let prefab = $.getInstance(assetMgr_1.AssetMgr).Auto.loadPrefab("Prefabs/Scene/MWorld/MEventPanel");
        let trf = csharp_UnityEngine_1.GameObject.Instantiate(prefab).transform;
        $.getInstance(layerMgr_1.LayerMgr).Scene.addChild(trf);
        return new MEventPanel(trf);
    }
    open() {
        super.open();
        $.getInstance(mPlayerBar_1.MPlayerBar).setTopActive(true);
        $.getInstance(mPlayerBar_1.MPlayerBar).setBottomActive(true);
    }
}
exports.MEventPanel = MEventPanel;
//# sourceMappingURL=mEventPanel.js.map