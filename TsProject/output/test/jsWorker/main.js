"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CS = require("csharp");
const id = CS.System.Threading.Thread.CurrentThread.ManagedThreadId;
const threadName = `Main(${id})\t`;
let worker = new JsWorker(CS.JsManager.GetInstance().Loader);
worker.on("main_on", () => "this is main thread");
worker.on("data", data => {
    if (typeof data == "function") {
        console.log(threadName, data.toString());
    }
    else if (typeof data == "object") {
        console.log(threadName, JSON.stringify(data));
    }
    else
        console.log(threadName, data);
});
worker.start("./test/jsWorker/child");
worker.post("data", { msg: "this main thread message" });
console.log(threadName, worker.postSync("child_on"));
//# sourceMappingURL=main.js.map