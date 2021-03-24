"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dispose = exports.start = void 0;
const mPlayerBar_1 = require("./mPlayerBar");
const sceneMgr_1 = require("../../common/sceneMgr");
const assetMgr_1 = require("../../common/assetMgr");
const assets = ["mworld", "mworld_map", "mworld_windows"];
function start(...args) {
    $.getInstance(sceneMgr_1.SceneMgr).load("Activity", assets, () => {
        $.getInstance(mPlayerBar_1.MPlayerBar).openFirst();
    });
}
exports.start = start;
function dispose(...args) {
    $.getInstance(assetMgr_1.AssetMgr).unload(...assets);
}
exports.dispose = dispose;
//# sourceMappingURL=main.js.map