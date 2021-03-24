"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemEntity = void 0;
const export_1 = require("../../../datas/export");
class ItemEntity extends export_1.ItemData {
    constructor(p) {
        super();
        this.npc_id = 0;
        if (p) {
            Object.assign(this, p);
        }
    }
}
exports.ItemEntity = ItemEntity;
//# sourceMappingURL=itemEntity.js.map