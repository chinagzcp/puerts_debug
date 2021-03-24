"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.B2MiJingPanel = void 0;
const csharp_UnityEngine_1 = require("csharp.UnityEngine");
const assetMgr_1 = require("../../common/assetMgr");
const jsPanel_1 = require("../../jsPanel");
const layerMgr_1 = require("../../common/layerMgr");
class B2MiJingPanel extends jsPanel_1.JsPanel {
    static __staticConstructor() {
        let prefab = $.getInstance(assetMgr_1.AssetMgr).Auto.loadPrefab("Prefabs/Game/Scene/B2World/B2MiJingPanel");
        let trf = csharp_UnityEngine_1.GameObject.Instantiate(prefab).transform;
        $.getInstance(layerMgr_1.LayerMgr).Scene.addChild(trf);
        return new B2MiJingPanel(trf);
    }
}
exports.B2MiJingPanel = B2MiJingPanel;
//# sourceMappingURL=b2MiJingPanel.js.map