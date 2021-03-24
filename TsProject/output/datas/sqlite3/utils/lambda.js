"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodCallExpression = exports.FieldCallExpression = exports.ConstantExpression = exports.BinaryExpression = exports.MultipleExpression = exports.Expression = exports.NodeType = exports.Lambda = void 0;
const binaryChars = [">=", "<=", "==", "===", "!=", "!==", ">", "<"];
const multipleChars = ["&&", "||"];
class Util {
    static isMultiple(str) {
        if (str) {
            str = this.filterString(str);
            for (var v of multipleChars) {
                if (str.indexOf(v) >= 0)
                    return true;
            }
        }
        return false;
    }
    static isBinary(str) {
        if (str) {
            str = this.filterString(str);
            for (var v of binaryChars) {
                if (str.indexOf(v) >= 0)
                    return true;
            }
        }
        return false;
    }
    static isConstant(str) {
        if (str) {
            str = this.filterString(str);
            return str.indexOf(".") < 0;
        }
        return false;
    }
    static isFieldCall(str, parameters) {
        if (str) {
            str = this.filterString(str);
            if (str.indexOf(".") >= 0 && str.indexOf("(") < 0) {
                for (var param of parameters) {
                    if (str.indexOf(param + ".") >= 0)
                        return true;
                }
            }
        }
        return false;
    }
    static isMethodCall(str, parameters) {
        if (str) {
            str = this.filterString(str);
            if (str.indexOf(".") >= 0 && str.indexOf("(") > 0) {
                for (var param of parameters) {
                    if (str.indexOf(param + ".") >= 0)
                        return true;
                }
            }
        }
        return false;
    }
    static filterString(str) {
        return str;
    }
    static findBrackets(str) {
        let start = undefined, end = undefined;
        if (str) {
            let count = undefined;
            for (let i = 0; i < str.length; i++) {
                switch (str[i]) {
                    case "(":
                        start = start ?? i;
                        count = (count ?? 0) + 1;
                        break;
                    case ")":
                        count--;
                        break;
                }
                if (count !== undefined && count == 0) {
                    end = i;
                    break;
                }
            }
        }
        return { start: start ?? -1, end: end ?? -1 };
    }
    static removeInvaildBrackets(str) {
        if (str) {
            let rep_expr = str.trim();
            while (true) {
                if (rep_expr[0] !== "(")
                    break;
                let count = 1, out = false;
                for (let i = 1; i < rep_expr.length; i++) {
                    let char = rep_expr[i];
                    if (char === "(")
                        count++;
                    else if (char === ")")
                        count--;
                    if (count === 0 && i != rep_expr.length - 1) {
                        out = true;
                        break;
                    }
                }
                if (out)
                    break;
                rep_expr = rep_expr.substring(1, rep_expr.length - 1).trim();
            }
            return rep_expr;
        }
        return str;
    }
    static stringToNodeType(str) {
        switch (str) {
            case ">":
                return NodeType.GreaterThan;
            case ">=":
                return NodeType.GreaterThanOrEqual;
            case "<":
                return NodeType.LessThan;
            case "<=":
                return NodeType.LessThanOrEqual;
            case "==":
            case "===":
                return NodeType.Equal;
            case "!=":
            case "!==":
                return NodeType.NotEqual;
            case "&&":
                return NodeType.And;
            case "||":
                return NodeType.Or;
            case "And":
                return NodeType.AndAlso;
            case "Or":
                return NodeType.OrElse;
        }
        return NodeType.Unknown;
    }
    static nodeTypeToString(type) {
        switch (type) {
            case NodeType.GreaterThan:
                return ">";
            case NodeType.GreaterThanOrEqual:
                return ">=";
            case NodeType.LessThan:
                return "<";
            case NodeType.LessThanOrEqual:
                return "<=";
            case NodeType.Equal:
                return "==";
            case NodeType.NotEqual:
                return "!=";
            case NodeType.And:
                return "&&";
            case NodeType.Or:
                return "||";
            case NodeType.AndAlso:
                return "And";
            case NodeType.OrElse:
                return "Or";
        }
        for (var v in NodeType) {
            if (v === type.toString())
                return NodeType[v] + "(" + v + ")";
        }
        return type.toString();
    }
    static toExpression(expr, parameters, values) {
        if (expr) {
            if (this.isMultiple(expr))
                return new MultipleExpression(expr, parameters, values);
            else if (this.isBinary(expr))
                return new BinaryExpression(expr, parameters, values);
            else if (this.isConstant(expr))
                return new ConstantExpression(expr, parameters, values);
            else if (this.isFieldCall(expr, parameters))
                return new FieldCallExpression(expr, parameters, values);
            else if (this.isMethodCall(expr, parameters))
                return new MethodCallExpression(expr, parameters, values);
            else {
                console.error("Not Supported Expression: " + expr);
                return new Expression(expr, parameters, values);
            }
        }
        return null;
    }
    static changeValue(str, values) {
        if (values) {
            let v = values[str];
            if (v !== undefined)
                return v;
        }
        let first = str[0];
        if (first === "'" || first === '"' || first === "`")
            return str.substring(1, str.length - 1);
        if (str === "true" || str === "false")
            return str === "true";
        return str;
    }
}
var NodeType;
(function (NodeType) {
    NodeType[NodeType["Unknown"] = 0] = "Unknown";
    NodeType[NodeType["Multiple"] = 1] = "Multiple";
    NodeType[NodeType["Binary"] = 2] = "Binary";
    NodeType[NodeType["Constant"] = 3] = "Constant";
    NodeType[NodeType["Field"] = 4] = "Field";
    NodeType[NodeType["MethodCall"] = 5] = "MethodCall";
    NodeType[NodeType["GreaterThan"] = 6] = "GreaterThan";
    NodeType[NodeType["GreaterThanOrEqual"] = 7] = "GreaterThanOrEqual";
    NodeType[NodeType["LessThan"] = 8] = "LessThan";
    NodeType[NodeType["LessThanOrEqual"] = 9] = "LessThanOrEqual";
    NodeType[NodeType["Equal"] = 10] = "Equal";
    NodeType[NodeType["NotEqual"] = 11] = "NotEqual";
    NodeType[NodeType["And"] = 12] = "And";
    NodeType[NodeType["Or"] = 13] = "Or";
    NodeType[NodeType["AndAlso"] = 14] = "AndAlso";
    NodeType[NodeType["OrElse"] = 15] = "OrElse";
})(NodeType || (NodeType = {}));
exports.NodeType = NodeType;
class Lambda {
    constructor(func, values) {
        let expr = func.toString();
        this._func = func;
        this._expr = expr;
        this._values = values;
        let index = expr.indexOf("=>");
        if (index < 0)
            throw new Error("Not Supported Expression: " + expr);
        this._expr = expr.substring(index + 2).trim();
        this._parameters = new Array();
        expr.substring(0, index)
            .replace("(", "")
            .replace(")", "")
            .split(",")
            .forEach(p_name => {
            p_name = p_name.trim();
            if (p_name && p_name.length > 0)
                this._parameters.push(p_name);
        });
        if (func.length != this._parameters.length)
            console.warn(`Function params length=${func.length},  but actually got ${this._parameters.length} \n${func.name}: ${func.toString()}`);
    }
    get func() { return this._func; }
    ;
    get expr() { return this._expr; }
    ;
    get parameters() { return this._parameters; }
    ;
    get values() { return this._values; }
    ;
    get expression() {
        return Util.toExpression(this._expr, this._parameters, this._values);
    }
}
exports.Lambda = Lambda;
class Expression {
    constructor(expr, parameters, values) {
        this._expr = expr;
        this._parameters = parameters;
        this._values = values;
        this._nodeType = NodeType.Unknown;
    }
    get nodeType() { return this._nodeType; }
    toString() {
        return this._expr + "\nTYPE:" + Util.nodeTypeToString(this._nodeType);
    }
    get isMultiple() {
        return this instanceof MultipleExpression;
    }
    get isBinary() {
        return this instanceof BinaryExpression;
    }
    get isConstant() {
        return this instanceof ConstantExpression;
    }
    get isFieldCall() {
        return this instanceof FieldCallExpression;
    }
    get isMethodCall() {
        return this instanceof MethodCallExpression;
    }
}
exports.Expression = Expression;
class MultipleExpression extends Expression {
    constructor(expr, parameters, values) {
        super(expr, parameters, values);
        this.working();
    }
    get left() { return Util.toExpression(this._left, this._parameters, this._values); }
    ;
    get right() { return Util.toExpression(this._right, this._parameters, this._values); ; }
    ;
    working() {
        this._nodeType = NodeType.Multiple;
        let maps = {}, count = 0;
        let rep_expr = Util.removeInvaildBrackets(this._expr);
        while (true) {
            let { start, end } = Util.findBrackets(rep_expr);
            if (start >= 0 && end >= 0) {
                let rep_name = "[rep_name" + (count++) + "]";
                let rep_content = rep_expr.substring(start, end + 1);
                maps[rep_name] = rep_content;
                rep_expr = rep_expr.replace(rep_content, rep_name);
            }
            else
                break;
        }
        for (let v of multipleChars) {
            let index = rep_expr.indexOf(v);
            if (index >= 0) {
                this._left = rep_expr.substring(0, index);
                this._right = rep_expr.substring(index + v.length);
                this._nodeType = Util.stringToNodeType(v);
                break;
            }
        }
        Object.keys(maps).forEach(rep_name => {
            let rep_content = maps[rep_name];
            this._left = this._left.replace(rep_name, rep_content);
            this._right = this._right.replace(rep_name, rep_content);
        });
    }
    toString() {
        return this._expr + "\nTYPE:\t" + Util.nodeTypeToString(this._nodeType) + "\nLEFT:\t" + this._left + "\nRIGHT:\t" + this._right;
    }
}
exports.MultipleExpression = MultipleExpression;
class BinaryExpression extends Expression {
    constructor(expr, parameters, values) {
        super(expr, parameters, values);
        this.working();
    }
    get left() { return Util.toExpression(this._left, this._parameters, this._values); }
    ;
    get right() { return Util.toExpression(this._right, this._parameters, this._values); }
    ;
    working() {
        this._nodeType = NodeType.Binary;
        let rep_expr = Util.removeInvaildBrackets(this._expr);
        for (let v of binaryChars) {
            let index = rep_expr.indexOf(v);
            if (index >= 0) {
                this._left = rep_expr.substring(0, index).trim();
                this._right = rep_expr.substring(index + v.length).trim();
                this._nodeType = Util.stringToNodeType(v);
                break;
            }
        }
    }
    toString() {
        return this._expr + "\nTYPE:\t" + Util.nodeTypeToString(this._nodeType) + "\nLEFT:\t" + this._left + "\nRIGHT:\t" + this._right;
    }
}
exports.BinaryExpression = BinaryExpression;
class ConstantExpression extends Expression {
    constructor(expr, parameters, values) {
        super(expr, parameters, values);
        this.working();
    }
    get value() { return this._value; }
    ;
    working() {
        this._nodeType = NodeType.Constant;
        this._value = Util.changeValue(this._expr, this._values);
    }
    toString() {
        return this._expr + "\nTYPE:\t" + Util.nodeTypeToString(this._nodeType) + "\nVALUE:\t" + this._value;
    }
}
exports.ConstantExpression = ConstantExpression;
class FieldCallExpression extends Expression {
    constructor(expr, parameters, values) {
        super(expr, parameters, values);
        this.working();
    }
    get fieldName() { return this._fieldName; }
    ;
    working() {
        this._nodeType = NodeType.Field;
        for (var param of this._parameters) {
            let index = this._expr.indexOf(param + ".");
            if (index >= 0) {
                this._fieldName = this._expr.substring(index + param.length + 1).trim();
                break;
            }
        }
    }
    toString() {
        return this._expr + "\nTYPE:\t" + Util.nodeTypeToString(this._nodeType) + "\nFIELD_NAME:\t" + this._fieldName;
    }
}
exports.FieldCallExpression = FieldCallExpression;
class MethodCallExpression extends Expression {
    constructor(expr, parameters, values) {
        super(expr, parameters, values);
        this.working();
    }
    get fieldName() { return this._fieldName; }
    ;
    get methodName() { return this._methodName; }
    ;
    get methodParameters() { return this._methodParameters; }
    ;
    working() {
        this._nodeType = NodeType.MethodCall;
        this._methodParameters = new Array();
        for (var param of this._parameters) {
            let index = this._expr.indexOf(param + ".");
            if (index >= 0) {
                let method = this._expr.substring(index + param.length + 1).trim();
                index = method.indexOf(".");
                if (index >= 0) {
                    this._fieldName = method.substring(0, index);
                    this._methodName = method.substring(index + 1, method.indexOf("("));
                }
                else {
                    this._methodName = method.substring(0, method.indexOf("("));
                }
                let parameters = method.substring(method.indexOf("(") + 1, method.indexOf(")"));
                for (var param of parameters.split(",")) {
                    let value = Util.changeValue(param, this._values);
                    let expr = Util.toExpression(value, this._parameters, this._values);
                    this._methodParameters.push(expr);
                }
                break;
            }
        }
    }
    toString() {
        return this._expr + "\nTYPE:\t" + Util.nodeTypeToString(this._nodeType)
            + "\nFIELD_NAME:\t" + this._fieldName
            + "\nMETHOD_NAME:\t" + this._methodName
            + "\nMETHOD_PARAMS:\t" + this._methodParameters;
    }
}
exports.MethodCallExpression = MethodCallExpression;
//# sourceMappingURL=lambda.js.map