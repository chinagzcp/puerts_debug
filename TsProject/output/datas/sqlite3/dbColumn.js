"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBTable = exports.DBColumn = void 0;
class DBColumn {
    constructor(p) {
        if (p) {
            this.prop = p.prop;
            this.propType = p.propType;
            this.name = p.name;
            this.pk = p.pk;
            this.autoInc = p.autoInc;
            this.unique = p.unique;
            this.notNull = p.notNull;
            this.defaultValue = p.defaultValue;
            this.maxLength = p.maxLength;
        }
    }
    encode(obj) {
        if (this.propType === "object" && obj !== undefined) {
        }
        return obj;
    }
    decode(obj) {
        if (this.propType === "object" && obj !== undefined) {
        }
        return obj;
    }
}
exports.DBColumn = DBColumn;
class DBTable {
    constructor(data) {
        if (data) {
            this.tableName = data.tableName;
            this.columns = data.columns;
        }
        if (!this.columns)
            this.columns = [];
    }
}
exports.DBTable = DBTable;
//# sourceMappingURL=dbColumn.js.map