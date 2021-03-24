"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemEntityDB = void 0;
const itemEntity_1 = require("../__inner/itemEntity");
const _db_1 = require("./_db");
class ItemEntityDB extends _db_1.DB {
    get Type() {
        return itemEntity_1.ItemEntity;
    }
}
exports.ItemEntityDB = ItemEntityDB;
//# sourceMappingURL=itemEntityDB.js.map