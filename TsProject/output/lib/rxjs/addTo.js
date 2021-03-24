"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CS = require("csharp");
const rxjs = require("rxjs");
const puerts_1 = require("puerts");
function cs_generator(func, ...args) {
    let generator = undefined;
    if (typeof (func) === "function") {
        generator = func(...args);
        if (generator === null || generator === undefined || generator === void 0)
            throw new Error("Function '" + func?.name + "' no return Generator");
    }
    else
        generator = func;
    return CS.IEnumeratorUtil.Generator(function () {
        let tick;
        try {
            let next = generator.next();
            tick = new CS.IEnumeratorUtil.Tick(next.value, next.done);
        }
        catch (e) {
            tick = new CS.IEnumeratorUtil.Tick(null, true);
            console.error(e);
        }
        return tick;
    });
}
function* waitEndOfFrame(trigger) {
    while (true) {
        yield null;
        if (trigger.isActivated)
            return;
        if (trigger.isDestroy) {
            trigger.dispose();
            return;
        }
    }
}
class RxjsDestroyTrigger {
    constructor(gameObject) {
        let trigger = gameObject.GetComponent(puerts_1.$typeof(CS.RxjsDestroyTrigger));
        if (!trigger) {
            trigger = gameObject.AddComponent(puerts_1.$typeof(CS.RxjsDestroyTrigger));
        }
        trigger.caller = () => this.dispose();
        this._trigger = trigger;
        this._gameObject = gameObject;
        this._subscribes = [];
    }
    get isActivated() { return this._trigger.IsActivated; }
    get isDestroy() { return !this._gameObject || this._gameObject.IsNull(); }
    addSubscribe(subscribe) {
        if (subscribe.closed) {
            return;
        }
        this._subscribes.push(subscribe);
    }
    dispose() {
        for (let subscribe of this._subscribes) {
            subscribe.unsubscribe();
        }
        this._trigger.caller = undefined;
    }
    static startTriggerCoroutine(trigger) {
        if (!this.coroutine || this.coroutine.IsNull()) {
            var obj = new CS.UnityEngine.GameObject("WaitEndOfFrame - rxjs coroutine");
            CS.UnityEngine.Object.DontDestroyOnLoad(obj);
            this.coroutine = obj.AddComponent(puerts_1.$typeof(CS.UnityEngine.UI.Image));
            obj.transform.sizeDelta = CS.UnityEngine.Vector2.zero;
        }
        this.coroutine.StartCoroutine(cs_generator(waitEndOfFrame(trigger)));
    }
}
(function () {
    rxjs.Subscription.prototype["addTo"] = function (target) {
        let subscribe = this;
        if (!target || target.IsNull()) {
            subscribe.unsubscribe();
            return null;
        }
        if (target instanceof CS.UnityEngine.Component)
            target = target.gameObject;
        let trigger = target.getComponent(RxjsDestroyTrigger);
        if (!trigger) {
            trigger = target.addComponent(RxjsDestroyTrigger);
        }
        if (!trigger.isActivated && !target.activeSelf) {
            RxjsDestroyTrigger.startTriggerCoroutine(trigger);
        }
        trigger.addSubscribe(subscribe);
        return trigger;
    };
})();
//# sourceMappingURL=addTo.js.map