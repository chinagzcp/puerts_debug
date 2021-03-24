"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.B2EnergyPanel = void 0;
const csharp_UnityEngine_1 = require("csharp.UnityEngine");
const assetMgr_1 = require("../../common/assetMgr");
const jsPanel_1 = require("../../jsPanel");
const layerMgr_1 = require("../../common/layerMgr");
class B2EnergyPanel extends jsPanel_1.JsPanel {
    static __staticConstructor() {
        let prefab = $.getInstance(assetMgr_1.AssetMgr).Auto.loadPrefab("Prefabs/Game/Scene/B2World/B2EnergyPanel");
        let trf = csharp_UnityEngine_1.GameObject.Instantiate(prefab).transform;
        $.getInstance(layerMgr_1.LayerMgr).Scene.addChild(trf);
        return new B2EnergyPanel(trf);
    }
}
exports.B2EnergyPanel = B2EnergyPanel;
//# sourceMappingURL=b2EnergyPanel.js.map