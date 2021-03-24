"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.B2BagPanel = void 0;
const csharp_UnityEngine_1 = require("csharp.UnityEngine");
const assetMgr_1 = require("../../../common/assetMgr");
const layerMgr_1 = require("../../../common/layerMgr");
const bagPanel_1 = require("../../_common/bagPanel");
class B2BagPanel extends bagPanel_1.BagPanel {
    static __staticConstructor() {
        let prefab = $.getInstance(assetMgr_1.AssetMgr).Auto.loadPrefab("Prefabs/Scene/B2World/Window/B2BagPanel");
        let trf = csharp_UnityEngine_1.GameObject.Instantiate(prefab).transform;
        $.getInstance(layerMgr_1.LayerMgr).Normal.addChild(trf);
        return new B2BagPanel(trf);
    }
}
exports.B2BagPanel = B2BagPanel;
//# sourceMappingURL=b2BagPanel.js.map