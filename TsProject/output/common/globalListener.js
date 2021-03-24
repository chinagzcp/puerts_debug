"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Listener {
    constructor() {
        this.list = new Array();
    }
    add(func) {
        this.list.push(func);
    }
    remove(func) {
        let index = this.list.indexOf(func);
        if (index >= 0) {
            for (let i = index; i < this.list.length - 1; i++) {
                this.list[i] = this.list[i + 1];
            }
            this.list.pop();
        }
    }
    removeAll() {
        this.list = new Array();
    }
    invoke(...args) {
        for (let func of this.list) {
            func(...args);
        }
    }
}
(function () {
    let global = this ?? globalThis;
    if (!global["globalListener"]) {
        global["globalListener"] = {
            quit: new Listener()
        };
    }
})();
//# sourceMappingURL=globalListener.js.map