"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipEntity = void 0;
const export_1 = require("../../../datas/export");
class EquipEntity extends export_1.EquipData {
    constructor(p) {
        super();
        this.enhance_level = 0;
        this.using_id = 0;
        this.exp = 0;
        if (p) {
            Object.assign(this, p);
        }
    }
}
exports.EquipEntity = EquipEntity;
//# sourceMappingURL=equipEntity.js.map