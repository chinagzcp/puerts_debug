"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBMapping = void 0;
const decorator_1 = require("./utils/decorator");
const dbCommandInsert_1 = require("./dbCommandInsert");
const dbColumn_1 = require("./dbColumn");
const attribute_1 = require("./utils/attribute");
class DBMapping {
    constructor(type) {
        this.Type = type;
        let name = decorator_1.ClassMetadata.getFirst(type, attribute_1.Table)?.info ?? type.name;
        this.tableName = name;
        this.columns = new Array();
        for (let key of decorator_1.FieldMetadata.getFields(type, true)) {
            let conf = decorator_1.FieldMetadata.getFirst(type, key, attribute_1.Column, true)?.info;
            if (!conf)
                continue;
            let pk = !!decorator_1.FieldMetadata.getFirst(type, key, attribute_1.PrimaryKey, true);
            let autoInc = pk && !!decorator_1.FieldMetadata.getFirst(type, key, attribute_1.AutoInc, true);
            let unique = !!decorator_1.FieldMetadata.getFirst(type, key, attribute_1.Unique, true);
            let notNull = !!decorator_1.FieldMetadata.getFirst(type, key, attribute_1.NotNull, true);
            let value = decorator_1.FieldMetadata.getFirst(type, key, attribute_1.DefaultValue, true)?.info;
            let len = decorator_1.FieldMetadata.getFirst(type, key, attribute_1.MaxLength, true)?.info;
            let col = new dbColumn_1.DBColumn({
                prop: key,
                propType: conf.type,
                name: conf.alias ?? key,
                pk: pk,
                autoInc: autoInc,
                unique: unique,
                notNull: notNull,
                defaultValue: value,
                maxLength: len,
            });
            this.columns.push(col);
            if (col.pk)
                this.pk = col;
        }
        if (this.columns.length <= 0)
            throw new Error(`数据表${type.name}(${this.tableName}), 没有有效字段`);
        let info = "";
        this.columns.forEach(col => info += "\n" + JSON.stringify(col));
        if (this.pk)
            this.getByPrimaryKeySql = `SELECT * FROM "${this.tableName}" WHERE "${this.pk.name}" = ?`;
        else
            this.getByPrimaryKeySql = `SELECT * FROM "${this.tableName}" LIMIT 1`;
    }
    get insertColumns() {
        if (!this._insertColumns) {
            this._insertColumns = new Array();
            this.columns.forEach(col => {
                if (!col.autoInc)
                    this._insertColumns.push(col);
            });
        }
        return this._insertColumns;
    }
    get insertOrReplaceColumns() {
        if (!this._insertOrReplaceColumns) {
            this._insertOrReplaceColumns = new Array();
            this.columns.forEach(col => this._insertOrReplaceColumns.push(col));
        }
        return this._insertOrReplaceColumns;
    }
    findColumn(name) {
        for (let i = 0; i < this.columns.length; i++) {
            if (this.columns[i].name == name)
                return this.columns[i];
        }
        return null;
    }
    findColumnByPorpertyName(name) {
        for (let i = 0; i < this.columns.length; i++) {
            if (this.columns[i].prop == name)
                return this.columns[i];
        }
        return null;
    }
    dispose() {
        if (this._insertCommand)
            this._insertCommand.dispose();
    }
    getInsertCommand(conn, extra) {
        if (!this._insertCommand) {
            this._insertCommand = this.createInsertCommand(conn, extra);
            this._insertCommandExtra = extra;
        }
        else if (!this._insertCommand.isConnect(conn) || this._insertCommandExtra != extra) {
            this._insertCommand.dispose();
            this._insertCommand = this.createInsertCommand(conn, extra);
            this._insertCommandExtra = extra;
        }
        return this._insertCommand;
    }
    createInsertCommand(conn, extra) {
        let insertSql = "";
        let cols = this.insertColumns;
        if (cols.length == 1 && cols[0].autoInc) {
            insertSql = `INSERT ${this.tableName} INTO "${extra}" DEFAULT VALUES`;
        }
        else {
            if (extra === "OR REPLACE")
                cols = this.insertOrReplaceColumns;
            let names = new Array(), vals = new Array();
            for (let col of cols) {
                names.push("\"" + col.name + "\"");
                vals.push("?");
            }
            insertSql = `INSERT ${extra} INTO "${this.tableName}"(${names.join(",")}) VALUES (${vals.join(",")})`;
        }
        let cmd = new dbCommandInsert_1.DBCommandInsert(conn);
        cmd.commandText = insertSql;
        return cmd;
    }
    createInstance() {
        return new (this.Type)();
    }
}
exports.DBMapping = DBMapping;
//# sourceMappingURL=dbMapping.js.map