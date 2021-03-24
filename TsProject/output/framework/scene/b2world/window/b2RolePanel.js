"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.B2RolePanel = void 0;
const csharp_UnityEngine_1 = require("csharp.UnityEngine");
const assetMgr_1 = require("../../../common/assetMgr");
const layerMgr_1 = require("../../../common/layerMgr");
const rolePanel_1 = require("../../_common/rolePanel");
class B2RolePanel extends rolePanel_1.RolePanel {
    static __staticConstructor() {
        let prefab = $.getInstance(assetMgr_1.AssetMgr).Auto.loadPrefab("Prefabs/Scene/B2World/Window/B2RolePanel");
        let trf = csharp_UnityEngine_1.GameObject.Instantiate(prefab).transform;
        $.getInstance(layerMgr_1.LayerMgr).Normal.addChild(trf);
        return new B2RolePanel(trf);
    }
}
exports.B2RolePanel = B2RolePanel;
//# sourceMappingURL=b2RolePanel.js.map