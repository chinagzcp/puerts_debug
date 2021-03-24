"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBConnection = void 0;
const CS = require("csharp");
const dbCommand_1 = require("./dbCommand");
const dbMapping_1 = require("./dbMapping");
const dbQuery_1 = require("./dbQuery");
const orm_1 = require("./orm");
class DBConnection {
    constructor(path, password) {
        this._opened = false;
        this._trace = false;
        this._transactionDepth = 0;
        if (!CS.System.IO.File.Exists(path))
            throw new Error("FileNotFoundException: " + path);
        this._opened = false;
        this._datapath = path;
        this._password = password;
    }
    get handle() { return this._handle; }
    get datapath() { return this._datapath; }
    get password() { return this._password; }
    get opened() { return this._opened; }
    get trace() { return this._trace; }
    set trace(val) { this._trace = val; }
    open() {
        if (!this._opened || !this._handle) {
            if (!CS.System.IO.File.Exists(this._datapath))
                throw new Error("FileNotFoundException: " + this._datapath);
            this._handle = new CS.Mono.Data.Sqlite.SqliteConnection("DATA SOURCE=" + this._datapath);
            if (this._password && this._password.length > 0)
                this._handle.SetPassword(this._password);
            this._handle.Open();
            this._opened = true;
        }
    }
    close() {
        if (this._opened && this._handle) {
            try {
                this._handle.Close();
                this._handle.Dispose();
            }
            finally {
                this._opened = false;
                this._handle = null;
            }
        }
    }
    dispose() {
        let set = this._mappingSet;
        if (set) {
            set.forEach(mapping => mapping.dispose());
        }
        this.close();
        this._mappings = null;
        this._mappingSet = null;
    }
    changePassword(password) {
        if (!this._opened)
            throw new Error("Cannot create commands from unopened database");
        this._handle.ChangePassword(password);
        this._password = password;
    }
    createTable(type) {
        let mapping = this.getMapping(type);
        let query = `CREATE TABLE IF NOT EXISTS "${mapping.tableName}"(\n)`;
        for (let i = 0; i < mapping.columns.length; i++) {
            if (i >= 0)
                query += ",\n";
            query += orm_1.Orm.sqlDecl(mapping.columns[i]);
        }
        query += ")";
        return this.executeUpdate(query);
    }
    dropTable(type) {
        let mapping = this.getMapping(type);
        let query = `DROP TABLE IF EXISTS "${mapping.tableName}"`;
        return this.executeUpdate(query);
    }
    clearTable(type) {
        let mapping = this.getMapping(type);
        let query = `DELETE FROM "${mapping.tableName}"`;
        return this.executeUpdate(query);
    }
    runInTransaction(action) {
        try {
            let point = this.savePoint();
            action();
            this.release(point);
        }
        catch (e) {
            this.rollback();
            throw e;
        }
    }
    beginTransaction() {
        if (this._transactionDepth == 0) {
            this._transactionDepth = 1;
            this.executeUpdate("BEGIN TRANSACTION");
        }
        throw new Error("InvalidOperationException: Cannot begin a transaction while already in a transaction.");
    }
    commit() {
        if (this._transactionDepth > 0) {
            this._transactionDepth = 0;
            this.executeUpdate("COMMIT");
        }
    }
    rollback(savepoint) {
        if (savepoint)
            this.doPoint(savepoint, "ROLLBACK TO");
        else
            this.executeUpdate("ROLLBACK");
    }
    release(savepoint) {
        this.doPoint(savepoint, "RELEASE");
    }
    savePoint() {
        let depth = this._transactionDepth++;
        let point = "S" + parseInt((Math.random() * 100000).toString()) + "D" + depth;
        this.executeUpdate("SAVEPOINT " + point);
        return point;
    }
    doPoint(savepoint, cmd) {
        let first_len = savepoint.indexOf("D");
        if (first_len >= 2 && savepoint.length > first_len + 1) {
            let depth = parseInt(savepoint.substring(first_len + 1));
            if (depth >= 0 && depth < this._transactionDepth) {
                this._transactionDepth = depth;
                this.executeUpdate(cmd.trim() + " " + savepoint);
                return;
            }
        }
        throw new Error("ArgumentException: savePoint is not valid, and should be the result of a call to SaveTransactionPoint.");
    }
    binding(type) {
        return new DBConnectionBind(this, type);
    }
    table(type) {
        return new dbQuery_1.DBQuery(this, this.getMapping(type));
    }
    get(type, pk) {
        let mapping = this.getMapping(type);
        let result = this.executeQuery(type, mapping.getByPrimaryKeySql, pk);
        return result.length > 0 ? result[0] : null;
    }
    lastInsertRowid(type) {
        var cmd = this.createCommand("");
        return cmd.lastInserRowid(this.getMapping(type));
    }
    insert(obj) {
        let proto = Object.getPrototypeOf(obj);
        return this._insert(obj, "", this.getMapping(proto.constructor));
    }
    insertOrReplace(obj) {
        let proto = Object.getPrototypeOf(obj);
        return this._insert(obj, "OR REPLACE", this.getMapping(proto.constructor));
    }
    insertAll(objs) {
        if (!objs || objs.length == 0)
            return 0;
        let proto = Object.getPrototypeOf(objs[0]);
        return this._insertAll(objs, "", this.getMapping(proto.constructor));
    }
    _insertAll(objs, extra, mapping) {
        if (!objs || !mapping)
            return 0;
        let count = 0;
        try {
            this.runInTransaction(() => {
                objs.forEach(obj => {
                    count += this._insert(obj, extra, mapping);
                });
            });
        }
        finally {
            mapping.dispose();
        }
        return count;
    }
    _insert(obj, extra, mapping) {
        if (!obj || !mapping)
            return 0;
        let replacing = extra === "OR REPLACE";
        let cols = replacing ? mapping.insertOrReplaceColumns : mapping.insertColumns;
        let vals = new Array();
        for (let col of cols) {
            vals.push(col.encode(obj[col.prop]));
        }
        let cmd = mapping.getInsertCommand(this, extra ?? "");
        let count = cmd.executeUpdate(vals);
        if (mapping.pk && mapping.pk.autoInc) {
            obj[mapping.pk.prop] = this.lastInsertRowid(mapping.Type);
        }
        return count;
    }
    executeUpdate(query, ...args) {
        let command = this.createCommand(query, ...args);
        return command.executeUpdate();
    }
    executeQuery(type, query, ...args) {
        let command = this.createCommand(query, ...args);
        return command.executeQuery(this.getMapping(type));
    }
    newCommand() {
        if (!this._opened)
            throw new Error("Cannot create commands from unopened database");
        return new dbCommand_1.DBCommand(this);
    }
    createCommand(query, ...args) {
        var command = this.newCommand();
        command.commandText = query;
        args.forEach(val => command.bind(val));
        return command;
    }
    getMapping(type) {
        if (typeof (type) !== "function")
            throw new Error("ctor is not constructor:" + type);
        if (!this._mappings) {
            this._mappings = new WeakMap();
            this._mappingSet = new Set();
        }
        let mapping = this._mappings.get(type);
        if (!mapping) {
            mapping = new dbMapping_1.DBMapping(type);
            if (this.proofTable(mapping)) {
                this._mappings.set(type, mapping);
                this._mappingSet.add(mapping);
            }
        }
        return mapping;
    }
    proofTable(mapping) {
        let createSql = "CREATE TABLE IF NOT EXISTS \"" + mapping.tableName + "\"(\n";
        for (let i = 0; i < mapping.columns.length; i++) {
            if (i > 0)
                createSql += ",\n";
            createSql += orm_1.Orm.sqlDecl(mapping.columns[i]);
        }
        createSql += ")";
        this.executeUpdate(createSql);
        let command = this.createCommand("SELECT sql FROM sqlite_master WHERE type = \"table\" AND name = ? ;", mapping.tableName);
        let existsSql = command.executeScalar("string");
        let createCols = this.proofColumns(createSql);
        let existsCols = this.proofColumns(existsSql);
        let addCols = new Array();
        let rebuild = createCols.length < existsCols.length;
        for (let i = 0; i < createCols.length && !rebuild; i++) {
            let col1 = createCols[i];
            if (i < existsCols.length) {
                let col2 = existsCols[i];
                if (col1.name !== col2.name || col1.content !== col2.content)
                    rebuild = true;
            }
            else
                addCols.push(col1.content);
        }
        if (rebuild) {
            let samecols = "";
            for (let i = 0; i < createCols.length; i++) {
                for (let j = 0; j < existsCols.length; j++) {
                    if (createCols[i].name === existsCols[j].name) {
                        if (samecols.length > 0)
                            samecols += ",";
                        samecols += "\"" + createCols[i].name + "\"";
                        break;
                    }
                }
            }
            this.runInTransaction(() => {
                let table_name = mapping.tableName;
                let table_temp = mapping.tableName + "_temp";
                this.executeUpdate(`PRAGMA foreign_keys = off;`);
                this.executeUpdate(`DROP TABLE IF EXISTS \"${table_temp}\" ;`);
                this.executeUpdate(`CREATE TABLE \"${table_temp}\" AS SELECT * FROM \"${table_name}\" ;`);
                this.executeUpdate(`DROP TABLE \"${table_name}\" ;`);
                this.executeUpdate(createSql);
                if (samecols.length > 0)
                    this.executeUpdate(`INSERT INTO \"${table_name}\" ( ${samecols} ) SELECT ${samecols} FROM \"${table_temp}\";`);
                this.executeUpdate(`DROP TABLE \"${table_temp}\" ;`);
                this.executeUpdate(`PRAGMA foreign_keys = on;`);
                console.warn(`column exception, rebuild sql: ${table_name}\n${createSql}`);
            });
        }
        else if (addCols && addCols.length > 0) {
            this.runInTransaction(() => {
                let table_name = mapping.tableName;
                for (var col of addCols) {
                    this.executeUpdate(`ALTER TABLE \"${table_name}\" ADD COLUMN ${col} ;`);
                    console.warn(`Alter table add column ${table_name}:${col}`);
                }
            });
        }
        return true;
    }
    proofColumns(sql) {
        if (!sql)
            throw new Error("Can't create a TableMapping instance, sql: " + sql);
        sql = sql.replace(/\n/g, "")
            .replace(/\r/g, "")
            .substring(sql.indexOf("(") + 1, sql.indexOf(")"));
        let fields = new Array();
        for (let col of sql.split(",")) {
            col = col.trim();
            if (col.startsWith("\"")) {
                let index = col.indexOf("\" ");
                col = col.substring(1, index) + col.substring(index + 1);
            }
            fields.push({
                name: col.substring(0, col.indexOf(" ")),
                content: col
            });
        }
        return fields;
    }
    static createFile(path, del_exists) {
        let exists = CS.System.IO.File.Exists(path);
        if (!exists || del_exists) {
            if (exists)
                CS.System.IO.File.Delete(path);
            CS.Mono.Data.Sqlite.SqliteConnection.CreateFile(path);
            return true;
        }
        return false;
    }
}
exports.DBConnection = DBConnection;
class DBConnectionBind {
    constructor(conn, type) {
        this._conn = conn;
        this._type = type;
    }
    get handle() { return this._conn.handle; }
    get datapath() { return this._conn.datapath; }
    get password() { return this._conn.password; }
    get opened() { return this._conn.opened; }
    get trace() { return this._conn.trace; }
    set trace(val) { this._conn.trace = val; }
    get connection() { return this._conn; }
    open() {
        this._conn.open();
    }
    close() {
        this._conn.close();
    }
    dispose() {
        this._conn.dispose();
    }
    changePassword(password) {
        this._conn.changePassword(password);
    }
    createTable() {
        return this._conn.createTable(this._type);
    }
    dropTable() {
        return this._conn.dropTable(this._type);
    }
    clearTable() {
        return this._conn.clearTable(this._type);
    }
    runInTransaction(action) {
        this._conn.runInTransaction(action);
    }
    beginTransaction() {
        this._conn.beginTransaction();
    }
    commit() {
        this._conn.commit();
    }
    rollback(savepoint) {
        this._conn.rollback(savepoint);
    }
    release(savepoint) {
        this._conn.release(savepoint);
    }
    table() {
        return this._conn.table(this._type);
    }
    get(pk) {
        return this._conn.get(this._type, pk);
    }
    lastInsertRowid() {
        return this._conn.lastInsertRowid(this._type);
    }
    insert(obj) {
        return this._conn.insert(obj);
    }
    insertOrReplace(obj) {
        return this._conn.insertOrReplace(obj);
    }
    insertAll(obj) {
        return this._conn.insertAll(obj);
    }
    executeUpdate(query, ...args) {
        return this._conn.executeUpdate(query, ...args);
    }
    executeQuery(query, ...args) {
        return this._conn.executeQuery(this._type, query, ...args);
    }
    newCommand() {
        return this._conn.newCommand();
    }
    createCommand(query, ...args) {
        return this._conn.createCommand(query, ...args);
    }
    static createFile(path, del_exists) {
        return DBConnection.createFile(path, del_exists);
    }
}
//# sourceMappingURL=dbConnection.js.map