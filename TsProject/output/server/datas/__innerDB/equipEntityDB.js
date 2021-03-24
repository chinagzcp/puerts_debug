"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipEntityDB = void 0;
const equipEntity_1 = require("../__inner/equipEntity");
const _db_1 = require("./_db");
class EquipEntityDB extends _db_1.DB {
    get Type() {
        return equipEntity_1.EquipEntity;
    }
}
exports.EquipEntityDB = EquipEntityDB;
//# sourceMappingURL=equipEntityDB.js.map