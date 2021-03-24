import * as CS from "csharp";

/** 
 * 将js协程Generator转为CS迭代器IEnumerator对象
 * @param func :    Js协程方法
 * @param args :    绑定的参数
 */
function cs_generator(func: ((...args: any[]) => Generator) | Generator, ...args: any[]): CS.System.Collections.IEnumerator {
    let generator: Generator = undefined;
    if (typeof (func) === "function") {
        generator = func(...args);
        if (generator === null || generator === undefined || generator === void 0)
            throw new Error("Function '" + func?.name + "' no return Generator");
    }
    else
        generator = func;
    /*
    let done = false;
    return CS.IEnumeratorUtil.Generator(function () {
        try {
            let next = generator.next();
            if (next.done) {
                done = true;
            }
            return next.value;
        } catch (e) {
            done = true;
            console.error(e);
        }
    }, () => done);
    //*/
    return CS.IEnumeratorUtil.Generator(function () {
        let tick: CS.IEnumeratorUtil.Tick;
        try {
            let next = generator.next();
            tick = new CS.IEnumeratorUtil.Tick(next.value, next.done);
        } catch (e) {
            tick = new CS.IEnumeratorUtil.Tick(null, true);
            console.error(e);
        }
        return tick;
    });
}

export {
    cs_generator
}