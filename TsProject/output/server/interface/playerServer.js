"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("../../client/api");
const CS = require("csharp");
const mapping_1 = require("../utils/mapping");
const net_1 = require("../../datas/protobuf/net");
const exportDB_1 = require("../datas/exportDB");
const working_1 = require("../working");
const player = require("./_player");
class PlayerServer {
    playerInfos(socket, data) {
        let request = net_1.Player.AuthRequest.decode(data);
    }
    playerBag(socket, data) {
        let request = net_1.Player.AuthRequest.decode(data);
        let publicDB = exportDB_1.DBServer.public(exportDB_1.AccountEntityDB);
        if (publicDB.checkAuth(request.uuid, request.token)) {
            if (!exportDB_1.DBServer.existUser(request.uuid)) {
                player.init(request.uuid);
            }
            let equips = new Array();
            exportDB_1.DBServer.user(exportDB_1.EquipEntityDB, request.uuid).getAll()
                .forEach(v => equips.push({ id: v.id, dataId: v.data_id, num: v.num }));
            let items = new Array();
            exportDB_1.DBServer.user(exportDB_1.ItemEntityDB, request.uuid).getAll()
                .forEach(v => items.push({ id: v.id, dataId: v.data_id, num: v.num }));
            working_1.send(socket, Api.S2C_PLAYER_BAG, net_1.Player.BagResponse.encode({
                equips,
                items
            }).finish());
        }
        else {
            working_1.send(socket, Api.S2C_Error, net_1.ErrorResponse.encode({
                error: "TOKEN无效(游戏)",
                errorCode: 0
            }).finish());
        }
    }
}
__decorate([
    mapping_1.requestBinary(Api.C2S_PLAYER_INFOS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CS.System.Net.Sockets.Socket, Uint8Array]),
    __metadata("design:returntype", void 0)
], PlayerServer.prototype, "playerInfos", null);
__decorate([
    mapping_1.requestBinary(Api.C2S_PLAYER_BAG),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CS.System.Net.Sockets.Socket, Uint8Array]),
    __metadata("design:returntype", void 0)
], PlayerServer.prototype, "playerBag", null);
//# sourceMappingURL=playerServer.js.map