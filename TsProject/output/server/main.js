"use strict";
(function () {
    let global = this ?? globalThis;
    if (global.globalWorker) {
        console.log("->状态: 服务器运行(子线程)");
        require("./lib/es/index");
        require("./lib/csharp/modules");
        require("./common/instance");
        require("./common/globalListener");
        const log = console.log, info = console.info, warn = console.warn, error = console.error;
        function getTrack() {
            let trackInfos = new Error().stack?.replace(/\r\n/g, "\n").split("\n").slice(3);
            if (trackInfos && trackInfos.length > 0) {
                return trackInfos.join("\n");
            }
            return "";
        }
        ;
        console.log = function (...args) {
            args.push("\n" + getTrack());
            log(...args);
        };
        console.info = function (...args) {
            args.push("\n" + getTrack());
            info(...args);
        };
        console.warn = function (...args) {
            args.push("\n" + getTrack());
            warn(...args);
        };
        console.error = function (...args) {
            args.push("\n" + getTrack());
            error(...args);
        };
        var csharp = require("csharp");
        var puerts = require("puerts");
        puerts.registerBuildinModule("path", {
            dirname(path) {
                return csharp.System.IO.Path.GetDirectoryName(path);
            },
            resolve(dir, url) {
                url = url.replace(/\\/g, "/");
                while (url.startsWith("../")) {
                    dir = csharp.System.IO.Path.GetDirectoryName(dir);
                    url = url.substr(3);
                }
                return csharp.System.IO.Path.Combine(dir, url);
            },
        });
        puerts.registerBuildinModule("fs", {
            existsSync(path) {
                return csharp.System.IO.File.Exists(path);
            },
            readFileSync(path) {
                return csharp.System.IO.File.ReadAllText(path);
            },
        });
        (function () {
            let global = this ?? globalThis;
            global["Buffer"] = global["Buffer"] ?? {};
        })();
        require('source-map-support').install();
    }
    else {
        console.log("->状态: 服务器运行(主线程)");
    }
})();
require("./router").start(10086);
//# sourceMappingURL=main.js.map