"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CS = require("csharp");
const { Button, Toggle, InputField, Slider, Dropdown, Scrollbar, ScrollRect } = CS.UnityEngine.UI;
(function () {
    function addEventListener(eventName, handler) {
        let events = this[eventName];
        if (events && events instanceof CS.UnityEngine.Events.UnityEventBase) {
            events.AddListener(handler);
        }
        else
            throw new Error(`Unknown eventname ${eventName}`);
    }
    function removeEventListener(eventName, handler) {
        let events = this[eventName];
        if (events && events instanceof CS.UnityEngine.Events.UnityEventBase) {
            events.RemoveListener(handler);
        }
        else
            throw new Error(`Unknown eventname ${eventName}`);
    }
    Button.prototype["addEventListener"] = addEventListener;
    Button.prototype["removeEventListener"] = removeEventListener;
    Slider.prototype["addEventListener"] = addEventListener;
    Slider.prototype["removeEventListener"] = removeEventListener;
    Toggle.prototype["addEventListener"] = addEventListener;
    Toggle.prototype["removeEventListener"] = removeEventListener;
    Dropdown.prototype["addEventListener"] = addEventListener;
    Dropdown.prototype["removeEventListener"] = removeEventListener;
    Scrollbar.prototype["addEventListener"] = addEventListener;
    Scrollbar.prototype["removeEventListener"] = removeEventListener;
    ScrollRect.prototype["addEventListener"] = addEventListener;
    ScrollRect.prototype["removeEventListener"] = removeEventListener;
    InputField.prototype["addEventListener"] = addEventListener;
    InputField.prototype["removeEventListener"] = removeEventListener;
})();
//# sourceMappingURL=index.js.map