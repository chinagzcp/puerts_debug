"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const CS = require("csharp");
const RuntimePlatform = CS.UnityEngine.RuntimePlatform;
const Config = (function () {
    let c = globalThis["__Config"];
    if (!c) {
        let platform = CS.UnityEngine.Application.platform;
        c = {
            platform,
            platformString: platform === RuntimePlatform.IPhonePlayer ? "ios"
                : platform === RuntimePlatform.Android ? "android"
                    : (platform === RuntimePlatform.WindowsEditor || platform === RuntimePlatform.WindowsPlayer) ? "windows" : "unknow",
            isEditorMode: platform === RuntimePlatform.WindowsEditor || platform === RuntimePlatform.OSXEditor || platform === RuntimePlatform.LinuxEditor
        };
    }
    return c;
})();
exports.Config = Config;
//# sourceMappingURL=config.js.map