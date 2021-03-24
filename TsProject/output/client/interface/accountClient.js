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
exports.Register = exports.Login = void 0;
const Api = require("../api");
const mapping_1 = require("../utils/mapping");
const socket_1 = require("../network/socket");
const net_1 = require("../../datas/protobuf/net");
const playerClient_1 = require("./playerClient");
class LoginClient {
    static request(account, pwd, isToken, cb) {
        this.cb = cb;
        let request = net_1.Account.LoginRequest.encode({
            account: account,
            password: pwd,
            type: isToken ? net_1.Account.LoginRequest.LoginType.TOKEN : net_1.Account.LoginRequest.LoginType.PASSWORD
        });
        socket_1.connectSocket(socket => socket.send(Api.C2S_ACCOUNT_LOGIN, request.finish()));
    }
    static response(data) {
        let response = net_1.Account.LoginResponse.decode(data);
        playerClient_1.playerAuth.uuid = response.uuid;
        playerClient_1.playerAuth.token = response.token;
        if (this.cb) {
            this.cb(response);
            this.cb = undefined;
        }
    }
}
__decorate([
    mapping_1.responseBinary(Api.S2C_ACCOUNT_LOGIN),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Uint8Array]),
    __metadata("design:returntype", void 0)
], LoginClient, "response", null);
exports.Login = LoginClient;
class RegisterClient {
    static request(account, pwd, cb) {
        this.cb = cb;
        let request = net_1.Account.RegisterRequest.encode({
            account: account,
            password: pwd
        });
        socket_1.connectSocket(socket => socket.send(Api.C2S_ACCOUNT_REGISTER, request.finish()));
    }
    static response(data) {
        let response = net_1.Account.RegisterResponse.decode(data);
        if (this.cb) {
            this.cb(response?.error);
            this.cb = undefined;
        }
    }
}
__decorate([
    mapping_1.responseBinary(Api.S2C_ACCOUNT_REGISTER),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Uint8Array]),
    __metadata("design:returntype", void 0)
], RegisterClient, "response", null);
exports.Register = RegisterClient;
//# sourceMappingURL=accountClient.js.map