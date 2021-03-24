import * as CS from "csharp";

let global = (function () { return this ?? globalThis; })();
let globalWorker = global["globalWorker"];

if (globalWorker) {
    console.log("运行在子线程:");

    //模拟子线程逻辑处理
    setInterval(() => {
        //....................
        //....................

        //遍历/ 处理数据信息
        let buffer = CS.BufferUtil.Create(4096);
        //....................
        //....................
        //....................
        //....................
    }, 20);

} else {
    console.log("运行在主线程:");
}

export { }