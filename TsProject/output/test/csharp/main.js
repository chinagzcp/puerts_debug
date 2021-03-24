"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CS = require("csharp");
class ClassA {
    constructor(obj) {
    }
}
let obj = new CS.UnityEngine.GameObject("Test");
let a = obj.addComponent(ClassA);
let b = obj.getComponent(ClassA);
let c = CS.UnityEngine.GameObject.Find("Test").getComponent(ClassA);
console.log(a === b, a, b);
console.log(a === c, a, c);
CS.UnityEngine.Object.destroy(a);
let d = obj.getComponent(ClassA);
console.log(a === d, a, d);
//# sourceMappingURL=main.js.map