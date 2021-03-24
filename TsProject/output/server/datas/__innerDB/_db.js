"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = void 0;
class DB {
    constructor(conn) {
        this._conn = conn;
    }
    get conn() {
        if (this._conn)
            this._conn.open();
        return this._conn;
    }
    get Type() {
        throw new Error("method not implemented: " + Object.getPrototypeOf(this).constructor);
    }
    removeAll() {
        return this.conn.clearTable(this.Type);
    }
    saveAll(datas) {
        return this.conn.insertAll(datas);
    }
    getAll() {
        return this.conn.table(this.Type)
            .query();
    }
    where(expr, values) {
        return this.conn.table(this.Type)
            .where(expr, values)
            .query();
    }
    count(expr) {
        let table = this.conn.table(this.Type);
        if (expr)
            table = table.where(expr);
        return table.count();
    }
}
exports.DB = DB;
//# sourceMappingURL=_db.js.map