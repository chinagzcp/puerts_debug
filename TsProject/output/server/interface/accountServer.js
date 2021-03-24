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
const working_1 = require("../working");
const exportDB_1 = require("../datas/exportDB");
const export_1 = require("../datas/export");
const net_1 = require("../../datas/protobuf/net");
class AccountServer {
    login(socket, data) {
        let request = net_1.Account.LoginRequest.decode(data);
        let publicDB = exportDB_1.DBServer.public(exportDB_1.AccountEntityDB);
        let account;
        if (request.type == net_1.Account.LoginRequest.LoginType.PASSWORD) {
            account = publicDB.getByPwd(request.account, request.password);
            if (account) {
                account.account_token = CS.System.Guid.NewGuid().ToString("N");
            }
        }
        else {
            account = publicDB.getByToken(request.account, request.password);
        }
        if (account) {
            account.token = CS.System.Guid.NewGuid().ToString("N");
            account.login_ip = "0.0.0.0";
            account.login_time = dateFormat(new Date(), "yyyy-MM-dd hh:mm:ss");
            publicDB.save(account);
        }
        let response = net_1.Account.LoginResponse.encode({
            error: !account ? "帐号或密码错误" : undefined,
            uuid: account?.uuid,
            token: account?.token,
            accountToken: account?.account_token
        });
        working_1.send(socket, Api.S2C_ACCOUNT_LOGIN, response.finish());
    }
    register(socket, data) {
        let request = net_1.Account.RegisterRequest.decode(data);
        let publicDB = exportDB_1.DBServer.public(exportDB_1.AccountEntityDB);
        let response;
        if (publicDB.chekcAccount(request.account) == 0) {
            let account = new export_1.AccountEntity();
            account.account = request.account;
            account.password = request.password;
            account.token = "";
            account.account_token = "";
            account.login_ip = "";
            account.login_time = "";
            account.register_time = dateFormat(new Date(), "yyyy-MM-dd hh:mm:ss");
            publicDB.save(account);
            response = net_1.Account.RegisterResponse.encode({});
        }
        else {
            response = net_1.Account.RegisterResponse.encode({
                error: "帐号已存在"
            });
        }
        working_1.send(socket, Api.S2C_ACCOUNT_REGISTER, response.finish());
    }
}
__decorate([
    mapping_1.requestBinary(Api.C2S_ACCOUNT_LOGIN),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CS.System.Net.Sockets.Socket, Uint8Array]),
    __metadata("design:returntype", void 0)
], AccountServer.prototype, "login", null);
__decorate([
    mapping_1.requestBinary(Api.C2S_ACCOUNT_REGISTER),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CS.System.Net.Sockets.Socket, Uint8Array]),
    __metadata("design:returntype", void 0)
], AccountServer.prototype, "register", null);
function dateFormat(date, format) {
    var o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "q+": Math.floor((date.getMonth() + 3) / 3),
        "S": date.getMilliseconds()
    };
    if (/(y+)/.test(format))
        format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] :
                ("00" + o[k]).substr(("" + o[k]).length));
        }
    return format;
}
//# sourceMappingURL=accountServer.js.map