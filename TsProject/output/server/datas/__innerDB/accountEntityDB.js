"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountEntityDB = void 0;
const accountEntity_1 = require("../__inner/accountEntity");
const _db_1 = require("./_db");
class AccountEntityDB extends _db_1.DB {
    get Type() {
        return accountEntity_1.AccountEntity;
    }
    save(obj) {
        let uuid = obj.uuid;
        return this.conn.table(this.Type)
            .where(o => o.uuid == uuid, { uuid })
            .updateOrInsert(obj);
    }
    chekcAccount(account) {
        return this.conn.table(this.Type)
            .where(o => o.account == account, { account })
            .count();
    }
    checkAuth(uuid, token) {
        if (token && token.length > 0) {
            return this.conn.table(this.Type)
                .where(o => o.uuid == uuid && o.token == token, { uuid, token })
                .count() > 0;
        }
        return false;
    }
    getByPwd(account, pwd) {
        return this.conn.table(this.Type)
            .where(o => o.account == account && o.password == pwd, { account, pwd })
            .first();
    }
    getByToken(account, accountToken) {
        if (accountToken && accountToken.length > 0) {
            return this.conn.table(this.Type)
                .where(o => o.account == account && o.account_token == accountToken, { account, token: accountToken })
                .first();
        }
        return undefined;
    }
}
exports.AccountEntityDB = AccountEntityDB;
//# sourceMappingURL=accountEntityDB.js.map