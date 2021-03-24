"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dispose = exports.start = void 0;
const loginPanel_1 = require("./loginPanel");
const sceneMgr_1 = require("../../common/sceneMgr");
function start(...args) {
    $.getInstance(sceneMgr_1.SceneMgr).loadScene("Activity", () => {
        $.getInstance(loginPanel_1.LoginPanel).open();
    });
}
exports.start = start;
function dispose(...args) {
}
exports.dispose = dispose;
//# sourceMappingURL=main.js.map