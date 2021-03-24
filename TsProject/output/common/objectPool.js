"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectPool = void 0;
function removeAt(arr, index) {
    if (index >= 0 && index < arr.length) {
        for (let i = index; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr.pop();
        return true;
    }
    return false;
}
function remove(arr, item) {
    return removeAt(arr, arr.indexOf(item));
}
class ObjectPool {
    constructor(create, active, release) {
        this._activeList = new Array();
        this._releaseList = new Array();
        this._createEvent = create;
        this._activeEvent = active;
        this._releaseEvent = release;
    }
    set createEvent(func) { this._createEvent = func; }
    set activeEvent(func) { this._activeEvent = func; }
    set releaseEvent(func) { this._releaseEvent = func; }
    set isValid(func) { this._isValid = func; }
    active() {
        let val = undefined;
        while (!val && this._releaseList.length > 0) {
            val = this._releaseList.shift();
            if (this._isValid && !this._isValid(val))
                val = undefined;
        }
        if (!val)
            val = this._createEvent();
        if (this._activeEvent)
            this._activeEvent(val);
        remove(this._activeList, val);
        remove(this._releaseList, val);
        this._activeList.push(val);
        return val;
    }
    release(val) {
        if (this._isValid && !this._isValid(val))
            return;
        if (this._releaseEvent)
            this._releaseEvent(val);
        remove(this._activeList, val);
        remove(this._releaseList, val);
        this._releaseList.push(val);
    }
    releaseAll() {
        for (let val of this._activeList) {
            if (this._isValid && !this._isValid(val))
                continue;
            if (this._releaseEvent)
                this._releaseEvent(val);
            remove(this._releaseList, val);
            this._releaseList.push(val);
        }
        this._activeList = new Array();
    }
    getActive() {
        return new Array(...this._activeList);
    }
    getActiveSource() {
        return this._activeList;
    }
    getAll() {
        return new Array(...this._activeList, ...this._releaseList);
    }
    clear() {
        this._activeList = new Array();
        this._releaseList = new Array();
    }
    dispose() {
        this.clear();
        this._createEvent = undefined;
        this._activeEvent = undefined;
        this._releaseEvent = undefined;
        this._isValid = undefined;
    }
}
exports.ObjectPool = ObjectPool;
//# sourceMappingURL=objectPool.js.map