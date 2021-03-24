"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroEntity = void 0;
const export_1 = require("../../../datas/export");
class HeroEntity extends export_1.HeroData {
    constructor(p) {
        super();
        if (p) {
            Object.assign(this, p);
        }
    }
}
exports.HeroEntity = HeroEntity;
//# sourceMappingURL=heroEntity.js.map