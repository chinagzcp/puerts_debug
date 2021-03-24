"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const exportDB_1 = require("../../datas/exportDB");
const export_1 = require("../datas/export");
const equipEntityDB_1 = require("../datas/__innerDB/equipEntityDB");
const itemEntityDB_1 = require("../datas/__innerDB/itemEntityDB");
const _dbServer_1 = require("../datas/__innerDB/_dbServer");
function init(uuid) {
    let equips = new Array();
    let items = new Array();
    $.getInstance(exportDB_1.EquipDataDB).getAll().forEach(data => {
        let e = new export_1.EquipEntity();
        e.uuid = uuid;
        e.data_id = data.id;
        e.num = 10;
        equips.push(e);
    });
    $.getInstance(exportDB_1.ItemDataDB).getAll().forEach(data => {
        let e = new export_1.ItemEntity();
        e.uuid = uuid;
        e.data_id = data.id;
        e.num = 20;
        items.push(e);
    });
    let t1 = _dbServer_1.DBServer.user(equipEntityDB_1.EquipEntityDB, uuid);
    t1.removeAll();
    t1.saveAll(equips);
    let t2 = _dbServer_1.DBServer.user(itemEntityDB_1.ItemEntityDB, uuid);
    t2.removeAll();
    t2.saveAll(items);
}
exports.init = init;
//# sourceMappingURL=_player.js.map