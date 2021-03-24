"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dispose = exports.start = void 0;
const assetMgr_1 = require("../../common/assetMgr");
const sceneMgr_1 = require("../../common/sceneMgr");
const b2PlayerBar_1 = require("./b2PlayerBar");
const assets = ["b2world", "b2world_map", "b2world_windows"];
function start(...args) {
    $.getInstance(sceneMgr_1.SceneMgr).load("Activity", assets, () => {
        $.getInstance(b2PlayerBar_1.B2PlayerBar).openMap();
    });
}
exports.start = start;
function dispose(...args) {
    $.getInstance(assetMgr_1.AssetMgr).unload(...assets);
}
exports.dispose = dispose;
//# sourceMappingURL=main.js.map