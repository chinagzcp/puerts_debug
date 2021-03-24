"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBCommand = exports.readValue = exports.bindParameter = void 0;
const CS = require("csharp");
const SqliteParameter = CS.Mono.Data.Sqlite.SqliteParameter;
const BindingFlags = CS.System.Reflection.BindingFlags;
const DbType = CS.System.Data.DbType;
;
function createParameter(type, value) {
    return CS.SqliteUtil.ObjectParameter(type, value);
}
function readValue(reader, index, type) {
    if (typeof index === "string") {
        index = reader.GetOrdinal(index);
        return readValue(reader, index, type);
    }
    if (reader.IsDBNull(index))
        return undefined;
    switch (type) {
        case "string":
            return reader.GetString(index);
        case "number":
            return reader.GetDouble(index);
        case "bigint":
            return reader.GetInt64(index);
        case "boolean":
            return reader.GetInt32(index) != 0;
        case "number[]":
            {
                let content = reader.GetString(index) ?? "";
                return select(content.split("|"), o => parseFloat(o));
            }
        case "string[]":
            {
                let content = reader.GetString(index) ?? "";
                return select(content.split("|"), o => o.replace(/&brvbar;/g, "|"));
            }
        case "object":
            {
                let content = reader.GetString(index);
                return content ? JSON.parse(content) : undefined;
            }
    }
    throw new Error("NotSupportedException: Cannot store type " + type);
}
exports.readValue = readValue;
function bindParameter(command, value) {
    if (value === undefined || value === null || value === void 0)
        return command.Parameters.Add(createParameter(DbType.String, ""));
    switch (typeof (value)) {
        case "string":
            return command.Parameters.Add(createParameter(DbType.String, value));
        case "number":
            return command.Parameters.Add(createParameter(DbType.Double, value));
        case "bigint":
            return command.Parameters.Add(createParameter(DbType.Int64, value));
        case "boolean":
            return command.Parameters.Add(createParameter(DbType.Int32, value));
        case "object":
            let content = "";
            if (Array.isArray(value)) {
                if (value.length > 0) {
                    if (typeof (value[0]) === "string")
                        content = select(value, o => o.replace(/|/g, "&brvbar;")).join("|");
                    else
                        content = value.join("|");
                }
            }
            else {
                content = JSON.stringify(value);
            }
            return command.Parameters.Add(createParameter(DbType.String, content));
    }
    throw new Error("NotSupportedException: Cannot store type " + typeof (value));
}
exports.bindParameter = bindParameter;
function getDefaultValue(val) {
    switch (typeof (val)) {
        case "object":
            let ret = Array.isArray(val) ? [] : Object.create(Object.getPrototypeOf(val));
            Object.assign(ret, val);
            Object.setPrototypeOf(ret, Object.getPrototypeOf(val));
            return ret;
        case "function":
            return val();
        default:
            return val;
    }
}
function select(arr, predicate) {
    let result = new Array();
    for (let i = 0; i < arr.length; i++) {
        result.push(predicate(arr[i], i, arr));
    }
    return result;
}
class DBCommand {
    constructor(conn) {
        this._conn = conn;
        this.commandText = "";
        this._bindings = new Array();
    }
    executeUpdate() {
        if (this._conn.trace)
            console.log(this);
        let command = this.prepare();
        try {
            return command.ExecuteNonQuery();
        }
        finally {
            this.finally(command);
        }
    }
    executeQuery(map) {
        if (this._conn.trace)
            console.log(this);
        let command = this.prepare();
        let reader;
        try {
            let columns = map.columns;
            let result = new Array();
            reader = command.ExecuteReader();
            while (reader.Read()) {
                let obj = map.createInstance();
                for (let i = 0; i < columns.length; i++) {
                    let col = columns[i];
                    let val = readValue(reader, col.name, col.propType) ?? getDefaultValue(col.defaultValue);
                    if (val !== undefined && val !== null && val !== void 0)
                        obj[col.prop] = val;
                }
                result.push(obj);
            }
            return result;
        }
        finally {
            this.finally(command, reader);
        }
    }
    executeQueryFileds(...columns) {
        if (this._conn.trace)
            console.log(this);
        let command = this.prepare();
        let reader;
        try {
            let result = new Array();
            reader = command.ExecuteReader();
            while (reader.Read()) {
                let obj = Object.create(null);
                for (let i = 0; i < columns.length; i++) {
                    obj[columns[i]] = readValue(reader, columns[i], "string");
                }
                result.push(obj);
            }
            return result;
        }
        finally {
            this.finally(command, reader);
        }
    }
    executeScalar(type) {
        if (this._conn.trace)
            console.log(this);
        let command = this.prepare();
        let reader;
        try {
            reader = command.ExecuteReader();
            while (reader.Read()) {
                return readValue(reader, 0, type ?? "string");
            }
        }
        finally {
            this.finally(command, reader);
        }
        return null;
    }
    lastInserRowid(map) {
        let query = "SELECT last_insert_rowid() FROM \"" + map.tableName + "\";";
        if (this._conn.trace)
            console.log(query);
        let command = new CS.Mono.Data.Sqlite.SqliteCommand(this._conn.handle);
        command.CommandText = query;
        command.Prepare();
        let reader;
        try {
            reader = command.ExecuteReader();
            while (reader.Read()) {
                return readValue(reader, 0, map.pk.propType);
            }
        }
        finally {
            this.finally(command, reader);
        }
        return -1;
    }
    bind(val) {
        this._bindings.push(val);
    }
    bindAll(command) {
        for (let val of this._bindings) {
            bindParameter(command, val);
        }
    }
    prepare() {
        let command = new CS.Mono.Data.Sqlite.SqliteCommand(this.commandText, this._conn.handle);
        command.Prepare();
        this.bindAll(command);
        return command;
    }
    finally(command, reader) {
        command.Cancel();
        command.Dispose();
        reader?.Close();
        reader?.Dispose();
    }
    toString() {
        return this.commandText + "\nBindings:" + this._bindings;
    }
}
exports.DBCommand = DBCommand;
//# sourceMappingURL=dbCommand.js.map