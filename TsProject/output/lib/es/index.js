"use strict";
(function () {
    String.prototype["format"] = function (...args) {
        return this.replace(/\{(\d+)\}/g, function (m, i) {
            return args[i];
        });
    };
    String.prototype["padLeft"] = function (length, paddingChar) {
        if (!paddingChar || paddingChar.length == 0)
            paddingChar = " ";
        let str = this;
        while (str.length < length) {
            str = paddingChar + str;
        }
        return str;
    };
    String.prototype["padRight"] = function (length, paddingChar) {
        if (!paddingChar || paddingChar.length == 0)
            paddingChar = " ";
        let str = this;
        while (str.length < length) {
            str += paddingChar;
        }
        return str;
    };
    String.prototype["trimStart"] = function (...args) {
        if (args.length == 0)
            args = [" "];
        for (let i = args.length - 1; i >= 0; i--) {
            if (!args[i] || args[i].length === 0)
                args.removeAt(i);
        }
        let str = this;
        let doing = true;
        while (doing) {
            doing = false;
            for (let i = 0; i < args.length; i++) {
                if (str.endsWith(args[i])) {
                    doing = true;
                    str = str.substring(0, str.length - args[i].length);
                    break;
                }
            }
        }
        return str;
    };
    String.prototype["trimEnd"] = function (...args) {
        if (args.length == 0)
            args = [" "];
        for (let i = args.length - 1; i >= 0; i--) {
            if (!args[i] || args[i].length === 0)
                args.removeAt(i);
        }
        let str = this;
        let doing = true;
        while (doing) {
            doing = false;
            for (let i = 0; i < args.length; i++) {
                if (str.startsWith(args[i])) {
                    doing = true;
                    str = str.substring(args[i].length);
                    break;
                }
            }
        }
        return str;
    };
    String.prototype["trim"] = function (...args) {
        return this
            .trimStart(...args)
            .trimEnd(...args);
    };
    String.prototype["replaceAll"] = function (oldChar, newChar) {
        return this.replace(new RegExp("/" + oldChar + "/g"), function (m, i) {
            return newChar;
        });
    };
})();
(function () {
    Array.prototype["removeAt"] = function (index) {
        let arr = this;
        if (index >= 0 && index < arr.length) {
            for (let i = index; i < arr.length; i++) {
                arr[i] = arr[i + 1];
            }
            arr.shift();
            return true;
        }
        return false;
    };
    Array.prototype["remove"] = function (item) {
        let arr = this;
        return arr.removeAt(arr.indexOf(item));
    };
    Array.prototype['toArray'] = function (callbackfn) {
        let result = new Array();
        let arr = this;
        arr.forEach((value, index) => result.push(callbackfn(value, index)));
        return result;
    };
})();
(function () {
    Map.prototype['toArray'] = function (callbackfn) {
        let result = new Array();
        let map = this;
        map.forEach((value, key) => result.push(callbackfn(value, key)));
        return result;
    };
})();
//# sourceMappingURL=index.js.map