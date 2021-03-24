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
exports.PlayerClient = exports.playerAuth = void 0;
const Api = require("../api");
const mapping_1 = require("../utils/mapping");
const socket_1 = require("../network/socket");
const exportDB_1 = require("../../datas/exportDB");
const net_1 = require("../../datas/protobuf/net");
const export_1 = require("../datas/export");
const playerAuth = {
    uuid: 0,
    token: ""
};
exports.playerAuth = playerAuth;
class PlayerClient {
    static requestInfos(cb) {
        this.infosCB = cb;
        let request = net_1.Player.AuthRequest.encode(playerAuth);
        socket_1.reqSocket(socket => socket.send(Api.C2S_PLAYER_INFOS, request.finish()));
    }
    static requestBag(cb) {
        this.bagCB = cb;
        let request = net_1.Player.AuthRequest.encode(playerAuth);
        socket_1.reqSocket(socket => socket.send(Api.C2S_PLAYER_BAG, request.finish()));
    }
    static requestAllHeros(cb) {
        this.herosCB = cb;
    }
    static requestHero(heroId, cb) {
        this.heroCB = cb;
    }
    static requestHeroSkills(heroId, cb) {
        this.heroCB = cb;
    }
    static responseInfos(data) {
        if (this.infosCB) {
            this.infosCB(net_1.Player.InfoResponse.decode(data));
            this.infosCB = undefined;
        }
    }
    static responseBag(data) {
        if (this.bagCB) {
            let response = net_1.Player.BagResponse.decode(data);
            let items = new Array();
            let equips = new Array();
            if (!response.error) {
                for (let { id, dataId, num } of response.items) {
                    let entity = new export_1.ItemEntity($.getInstance(exportDB_1.ItemDataDB).get(dataId));
                    entity.id = id;
                    entity.data_id = id;
                    entity.num = num;
                    items.push(entity);
                }
                for (let { id, dataId, num } of response.equips) {
                    let entity = new export_1.EquipEntity($.getInstance(exportDB_1.EquipDataDB).get(dataId));
                    entity.id = id;
                    entity.data_id = id;
                    entity.num = num;
                    equips.push(entity);
                }
            }
            this.bagCB(items, equips);
            this.bagCB = undefined;
        }
    }
}
__decorate([
    mapping_1.responseBinary(Api.S2C_ACCOUNT_LOGIN),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Uint8Array]),
    __metadata("design:returntype", void 0)
], PlayerClient, "responseInfos", null);
__decorate([
    mapping_1.responseBinary(Api.S2C_PLAYER_BAG),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Uint8Array]),
    __metadata("design:returntype", void 0)
], PlayerClient, "responseBag", null);
exports.PlayerClient = PlayerClient;
//# sourceMappingURL=playerClient.js.map