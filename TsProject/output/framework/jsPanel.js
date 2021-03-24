"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsPanel = void 0;
const CS = require("csharp");
const jsComponent_1 = require("./common/jsComponent");
const { GameObject } = CS.UnityEngine;
class JsPanel extends jsComponent_1.JsComponent {
    static __staticConstructor() {
        throw new Error("method not implemented: " + this.name);
    }
    __isDestroy() {
        return this.isDestroy();
    }
    __init() { }
    __release() {
        this.destroy();
    }
    open(asLast) {
        this.gameObject.SetActive(true);
        if (asLast === undefined || asLast)
            this.transform.SetAsLastSibling();
    }
    close() {
        this.gameObject.SetActive(false);
    }
    destroy() {
        if (this.gameObject && !this.gameObject.IsNull())
            GameObject.Destroy(this.gameObject);
        super.disponse();
    }
    isDestroy() {
        return !this.gameObject || this.gameObject.IsNull();
    }
    isActive() {
        return this.gameObject && !this.gameObject.IsNull() && this.gameObject.activeSelf;
    }
}
exports.JsPanel = JsPanel;
//# sourceMappingURL=jsPanel.js.map