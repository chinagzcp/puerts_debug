"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBConnectMgr = void 0;
const CS = require("csharp");
const dbConnection_1 = require("./sqlite3/dbConnection");
class DBConnectMgr {
    constructor() {
        this._trace = false;
        this._pool = new Map();
        globalListener.quit.add(() => {
            this.dispose();
            console.log("->释放: 数据库连接");
        });
    }
    set trace(val) {
        this._trace = val;
        for (let conn of this._pool.values()) {
            conn.trace = val;
        }
    }
    dispose() {
        for (let conn of this._pool.values()) {
            conn.dispose();
        }
        this._pool.clear();
    }
    get(path, open) {
        if (this._pool) {
            if (!CS.System.IO.File.Exists(path)) {
                CS.System.IO.Directory.CreateDirectory(CS.System.IO.Path.GetDirectoryName(path));
                dbConnection_1.DBConnection.createFile(path);
            }
            if (!this._pool.has(path)) {
                let conn = new dbConnection_1.DBConnection(path);
                conn.trace = this._trace;
                this._pool.set(path, conn);
                console.log("conn db: " + path);
            }
            let conn = this._pool.get(path);
            if (open)
                conn.open();
            return conn;
        }
        return undefined;
    }
    open(path) {
        return this.get(path, true);
    }
}
exports.DBConnectMgr = DBConnectMgr;
(function () {
    let _this = this ?? globalThis;
    _this["DBConnectMgr"] = DBConnectMgr;
})();
//# sourceMappingURL=dbConnectMgr.js.map