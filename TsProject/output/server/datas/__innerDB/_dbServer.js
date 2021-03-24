"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBServer = void 0;
const CS = require("csharp");
const dbConnectMgr_1 = require("../../../datas/dbConnectMgr");
const { Application, RuntimePlatform } = CS.UnityEngine;
let databaseDir = Application.persistentDataPath + `/database`;
if (Application.platform === RuntimePlatform.WindowsEditor || Application.platform === RuntimePlatform.OSXEditor) {
    databaseDir = Application.persistentDataPath + "_database";
}
class DBServer {
    static user(Type, uuid) {
        return new Type($.getInstance(dbConnectMgr_1.DBConnectMgr).get(this.getUser(uuid)));
    }
    static public(Type) {
        return new Type($.getInstance(dbConnectMgr_1.DBConnectMgr).get(this.getPublic()));
    }
    static existUser(uuid) {
        return CS.System.IO.File.Exists(this.getUser(uuid));
    }
    static getUser(uuid) {
        return databaseDir + `/user_${uuid}.db`;
    }
    static getPublic() {
        return databaseDir + `/.public.db`;
    }
}
exports.DBServer = DBServer;
//# sourceMappingURL=_dbServer.js.map