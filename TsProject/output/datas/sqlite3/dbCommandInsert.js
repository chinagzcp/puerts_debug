"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBCommandInsert = void 0;
const CS = require("csharp");
const dbCommand_1 = require("./dbCommand");
const ConnectionState = CS.System.Data.ConnectionState;
class DBCommandInsert {
    constructor(conn) {
        this._conn = conn;
        this.commandText = "";
    }
    isConnect(conn) {
        return this._conn === conn;
    }
    isValid() {
        return this._conn && this._conn.opened && this._conn.handle.State !== ConnectionState.Closed;
    }
    executeUpdate(objs) {
        if (this._conn.trace) {
            console.log(this.commandText + "\nBindings:" + objs);
        }
        if (!this._command)
            this._command = this.prepare();
        this._command.Parameters.Clear();
        if (objs)
            objs.forEach(val => dbCommand_1.bindParameter(this._command, val));
        return this._command.ExecuteNonQuery();
    }
    dispose() {
        let command = this._command;
        this._command = null;
        if (command) {
            command.Cancel();
            command.Dispose();
        }
    }
    prepare() {
        var command = new CS.Mono.Data.Sqlite.SqliteCommand(this.commandText, this._conn.handle);
        command.Prepare();
        return command;
    }
}
exports.DBCommandInsert = DBCommandInsert;
//# sourceMappingURL=dbCommandInsert.js.map