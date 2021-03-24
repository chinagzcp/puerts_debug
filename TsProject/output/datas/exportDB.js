"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpcDataDB = exports.HeroDataDB = exports.ItemDataDB = exports.EquipDataDB = void 0;
const export_1 = require("./export");
const dataDB_1 = require("./__innerDB/dataDB");
class EquipDataDB extends dataDB_1.DataDB {
    get Type() { return export_1.EquipData; }
}
exports.EquipDataDB = EquipDataDB;
class ItemDataDB extends dataDB_1.DataDB {
    get Type() { return export_1.ItemData; }
}
exports.ItemDataDB = ItemDataDB;
class HeroDataDB extends dataDB_1.DataDB {
    get Type() { return export_1.HeroData; }
}
exports.HeroDataDB = HeroDataDB;
class NpcDataDB extends dataDB_1.DataDB {
    get Type() { return export_1.NpcData; }
}
exports.NpcDataDB = NpcDataDB;
//# sourceMappingURL=exportDB.js.map