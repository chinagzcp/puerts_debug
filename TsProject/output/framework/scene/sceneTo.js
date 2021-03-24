"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneTo = void 0;
const login = require("./login/main");
const mworld = require("./mworld/main");
const b2world = require("./b2world/main");
function disposeAll() {
    login.dispose();
    mworld.dispose();
    b2world.dispose();
}
class SceneTo {
    static login(...args) {
        disposeAll();
        login.start(...args);
    }
    static mWorld(...args) {
        disposeAll();
        mworld.start(...args);
    }
    static b2World(...args) {
        disposeAll();
        b2world.start(...args);
    }
}
exports.SceneTo = SceneTo;
exports.default = SceneTo;
//# sourceMappingURL=sceneTo.js.map