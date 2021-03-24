"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBQuery = void 0;
const lambda_1 = require("./utils/lambda");
class DBQuery {
    constructor(conn, mapping) {
        this._conn = conn;
        this._mapping = mapping;
    }
    get mapping() { return this._mapping; }
    clone() {
        let ins = new DBQuery(this._conn, this._mapping);
        if (this._where)
            ins._where = new Array(...this._where);
        if (this._orderBys)
            ins._orderBys = new Array(...this._orderBys);
        ins._betweenBy = this._betweenBy;
        ins._limit = this._limit;
        ins._offset = this._offset;
        return ins;
    }
    where(expr, values) {
        let lambda = new lambda_1.Lambda(expr, values);
        let q = this.clone();
        q.addWhere(lambda);
        return q;
    }
    orderBy(expr) {
        return this.addOrder(expr, true);
    }
    orderByDescending(expr) {
        return this.addOrder(expr, false);
    }
    between(expr, start, end) {
        if (expr !== undefined && expr !== null && expr !== void 0) {
            let bin = new lambda_1.Lambda(expr).expression;
            if (!(bin instanceof lambda_1.FieldCallExpression))
                throw new Error("NotSupportedException: Order By does not support: " + expr);
            let q = this.clone();
            q._betweenBy = {
                columnName: bin.fieldName,
                start,
                end
            };
            return q;
        }
        throw new Error("NotSupportedException: Must be a predicate");
    }
    take(n) {
        let q = this.clone();
        q._limit = n;
        return q;
    }
    skip(n) {
        let q = this.clone();
        q._offset = n;
        return q;
    }
    addWhere(where) {
        if (!this._where)
            this._where = new Array();
        this._where.push(where);
    }
    addOrder(expr, asc) {
        if (expr !== undefined && expr !== null && expr !== void 0) {
            let bin = new lambda_1.Lambda(expr).expression;
            if (!(bin instanceof lambda_1.FieldCallExpression))
                throw new Error("NotSupportedException: Order By does not support: " + expr);
            let q = this.clone();
            if (!q._orderBys)
                q._orderBys = new Array();
            q._orderBys.push({
                columnName: bin.fieldName,
                ascending: asc
            });
            return q;
        }
        throw new Error("NotSupportedException: Must be a predicate");
    }
    query() {
        return this.generateQuery("*").executeQuery(this._mapping);
    }
    delete() {
        return this.generateDelete().executeUpdate();
    }
    update(obj) {
        if (!obj || !this._where)
            return 0;
        return this.generateUpdate(obj).executeUpdate();
    }
    updateOrInsert(obj) {
        if (!obj || !this._where)
            return 0;
        var ret = this.generateUpdate(obj).executeUpdate();
        if (ret > 0)
            return ret;
        return this._conn.insert(obj);
    }
    first() {
        let result = this.take(1).query();
        if (result && result.length > 0)
            return result[0];
        return undefined;
    }
    elemnetAt(index) {
        let result = this.skip(index).take(1).query();
        if (result && result.length > 0)
            return result[0];
        return undefined;
    }
    count(expr) {
        if (expr)
            return this.where(expr).count();
        return this.generateQuery("count(*)").executeScalar("number");
    }
    generateQuery(cols) {
        let args = new Array();
        let query = "SELECT " + cols + " FROM \"" + this._mapping.tableName + "\" ";
        if (this._where) {
            query += " WHERE " + this.compileExprs(this._where, args);
        }
        if (this._betweenBy) {
            query += " WHERE \"" + this._betweenBy.columnName + "\" BETWEEN ? AND ?";
            args.push(this._betweenBy.start);
            args.push(this._betweenBy.end);
        }
        if (this._orderBys) {
            query += " ORDER BY ";
            for (let i = 0; i < this._orderBys.length; i++) {
                if (i > 0)
                    query += ",";
                query += "\"" + this._orderBys[i].columnName + "\"" + (this._orderBys[i].ascending ? "" : " DESC");
            }
        }
        if (this._limit)
            query += " LIMIT " + this._limit;
        if (this._offset) {
            if (!this._limit)
                query += " LIMIT -1";
            query += " OFFSET " + this._offset;
        }
        return this._conn.createCommand(query, ...args);
    }
    generateUpdate(obj) {
        let args = new Array();
        let query = "UPDATE \"" + this._mapping.tableName + "\" SET ";
        let cols = this._mapping.columns;
        for (let i = 0; i < cols.length; i++) {
            let col = cols[i];
            if (col != this._mapping.pk) {
                if (args.length > 0)
                    query += ",";
                query += "\"" + col.name + "\" = ? ";
                args.push(col.encode(obj[col.prop]));
            }
        }
        if (this._where) {
            query += " WHERE " + this.compileExprs(this._where, args);
        }
        return this._conn.createCommand(query, ...args);
    }
    generateDelete() {
        let args = new Array();
        let query = "DELETE FROM \"" + this._mapping.tableName + "\"";
        if (this._where) {
            query += " WHERE " + this.compileExprs(this._where, args);
        }
        return this._conn.createCommand(query, ...args);
    }
    compileExprs(wheres, out_args) {
        let text = "";
        for (let i = 0; i < wheres.length; i++) {
            if (i > 0)
                text += " AND ";
            let where = this.compileExpr(wheres[i].expression, out_args);
            text += where.commandText;
        }
        return text;
    }
    compileExpr(expr, out_args) {
        if (expr.isMultiple || expr.isBinary) {
            let bin = expr;
            let lefer = this.compileExpr(bin.left, out_args);
            let rightr = this.compileExpr(bin.right, out_args);
            let text;
            if (lefer.commandText === "?" && lefer.value === undefined)
                text = this.compileNullBinaryExpression(bin, rightr);
            else if (rightr.commandText === "?" && rightr.value === undefined)
                text = this.compileNullBinaryExpression(bin, lefer);
            else
                text = "(" + lefer.commandText + " " + this.getSqlName(bin) + " " + rightr.commandText + ")";
            return { commandText: text };
        }
        else if (expr.isConstant) {
            let bin = expr;
            out_args.push(bin.value);
            return {
                commandText: "?",
                value: bin.value
            };
        }
        else if (expr.isFieldCall) {
            let bin = expr;
            return {
                commandText: "\"" + bin.fieldName + "\"",
            };
        }
        else if (expr.isMethodCall) {
            let bin = expr;
            let args = new Array();
            for (var arg_expr of bin.methodParameters)
                args.push(this.compileExpr(arg_expr, out_args));
            let text;
            if (bin.methodName === "contains" && args.length == 1) {
                text = "(" + args[0].commandText + " IN " + bin.fieldName + ")";
            }
            else if (bin.methodName === "startsWith" && args.length == 1) {
                text = "(" + bin.fieldName + " LIKE (" + args[0].commandText + " || '%' )";
            }
            else if (bin.methodName === "endsWith" && args.length == 1) {
                text = "(" + bin.fieldName + " LIKE ( '%' || " + args[0].commandText + ")";
            }
            else if (bin.methodName === "link" && args.length == 1) {
                text = "(" + bin.fieldName + " LIKE " + args[1].commandText + ")";
            }
            else if (bin.methodName === "toUpperCase" && args.length == 1) {
                text = "(UPPER(" + bin.fieldName + "))";
            }
            else if (bin.methodName === "toLowerCase" && args.length == 1) {
                text = "(LOWER(" + bin.fieldName + "))";
            }
            else {
                let s = undefined;
                for (let arg of args) {
                    if (s)
                        s += ",";
                    s += arg.commandText;
                }
                text = bin.methodName.toLowerCase() + "(" + s + ")";
            }
            return { commandText: text };
        }
        throw new Error("NotSupportedException: Cannot compile: " + expr);
    }
    compileNullBinaryExpression(expr, param) {
        switch (expr.nodeType) {
            case lambda_1.NodeType.Equal:
                return "(" + param.commandText + " IS ?)";
            case lambda_1.NodeType.NotEqual:
                return "(" + param.commandText + " IS NOT ?)";
            default:
                throw new Error("Cannot compile Null-BinaryExpression with type " + expr.nodeType);
        }
    }
    getSqlName(expr) {
        switch (expr.nodeType) {
            case lambda_1.NodeType.GreaterThan:
                return ">";
            case lambda_1.NodeType.GreaterThanOrEqual:
                return ">=";
            case lambda_1.NodeType.LessThan:
                return "<";
            case lambda_1.NodeType.LessThanOrEqual:
                return "<=";
            case lambda_1.NodeType.And:
                return "&";
            case lambda_1.NodeType.AndAlso:
                return "AND";
            case lambda_1.NodeType.Or:
                return "|";
            case lambda_1.NodeType.OrElse:
                return "OR";
            case lambda_1.NodeType.Equal:
                return "=";
            case lambda_1.NodeType.NotEqual:
                return "!=";
            default:
                throw new Error("Cannot get SQL for: " + expr.nodeType);
        }
    }
}
exports.DBQuery = DBQuery;
//# sourceMappingURL=dbQuery.js.map