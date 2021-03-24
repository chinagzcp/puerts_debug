"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.T2DUtil = void 0;
const CS = require("csharp");
const assetMgr_1 = require("../common/assetMgr");
const { Texture2D, Sprite } = CS.UnityEngine;
class T2DUtil {
    getNpcHead(icon, type) {
        let mgr = $.getInstance(assetMgr_1.AssetMgr);
        let path = "Textures/Icons/NpcHead/" + icon;
        for (let suffix of [".png", ".jpg"]) {
            if (mgr.Auto.exist(path + suffix))
                return mgr.Auto.load(path + suffix, type);
        }
        return undefined;
    }
}
exports.T2DUtil = T2DUtil;
//# sourceMappingURL=t2dUtil.js.map