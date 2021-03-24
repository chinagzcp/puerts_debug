"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBConfig = void 0;
const CS = require("csharp");
class DBConfig {
}
exports.DBConfig = DBConfig;
DBConfig.userPath = CS.UnityEngine.Application.persistentDataPath + "/cache/user.db";
DBConfig.dataPath = CS.UnityEngine.Application.persistentDataPath + "/cache/data.db";
if (CS.UnityEngine.Application.platform === CS.UnityEngine.RuntimePlatform.WindowsEditor ||
    CS.UnityEngine.Application.platform === CS.UnityEngine.RuntimePlatform.OSXEditor) {
    let config = DBConfig;
    config["dataPath"] = CS.UnityEngine.Application.dataPath + "/Editor/Database/data.db";
}
//# sourceMappingURL=dbConfig.js.map