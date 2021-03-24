"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = void 0;
class DB {
    get conn() {
        throw new Error("method not implemented: " + Object.getPrototypeOf(this).constructor);
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
    save(data) {
        let id = data.id;
        return this.conn.table(this.Type)
            .where(o => o.id == id && o.id != 0, { id })
            .updateOrInsert(data);
    }
    remove(id) {
        return this.conn.table(this.Type)
            .where(o => o.id == id, { id })
            .delete();
    }
    get(id) {
        return this.conn.table(this.Type)
            .where(o => o.id == id, { id })
            .first();
    }
    getAll() {
        return this.conn.table(this.Type)
            .query();
    }
    limit(expr, start, count) {
        let table = this.conn.table(this.Type);
        if (expr)
            table = table.where(expr);
        if (start)
            table = table.skip(start);
        return table.take(count).query();
    }
    between(expr, start, end) {
        return this.conn.table(this.Type)
            .between(expr, start, end)
            .query();
    }
    where(expr) {
        return this.conn.table(this.Type)
            .where(expr)
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
//# sourceMappingURL=__db.js.map