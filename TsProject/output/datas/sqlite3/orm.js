"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orm = void 0;
class Orm {
    static sqlDecl(col) {
        let decl = "\"" + col.name + "\" " + Orm.sqlType(col) + " ";
        if (col.pk)
            decl += "PRIMARY KEY ";
        if (col.autoInc)
            decl += "AUTOINCREMENT ";
        if (col.unique)
            decl += "UNIQUE ";
        if (col.notNull)
            decl += "NOT NULL ";
        let v_type = typeof (col.defaultValue);
        if (v_type !== "undefined" && v_type !== "object" && v_type !== "function")
            decl += "DEFAULT \"" + col.defaultValue + "\" ";
        return decl.trim();
    }
    static sqlType(col) {
        switch (col.propType) {
            case "string":
            case "number[]":
            case "string[]":
                if (col.maxLength !== undefined)
                    return "VARCHAR(" + col.maxLength + ")";
                return "VARCHAR";
            case "number":
                if (col.pk)
                    return "INTEGER";
                return "REAL";
            case "bigint":
                return "BIGINT";
            case "boolean":
                return "INTEGER";
            case "object":
                return "VARCHAR";
            default:
                throw new Error("NotSupportedException: " + col.propType);
        }
    }
}
exports.Orm = Orm;
//# sourceMappingURL=orm.js.map