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
exports.DBPlayerPrefs = void 0;
const attribute_1 = require("./sqlite3/utils/attribute");
const dbConfig_1 = require("./dbConfig");
const dbConnectMgr_1 = require("./dbConnectMgr");
class Data {
    constructor() {
        this.key = "";
    }
}
let StringData = class StringData {
    constructor() {
        this.key = "";
        this.value = "";
    }
};
__decorate([
    attribute_1.Column("string"),
    attribute_1.NotNull(),
    attribute_1.Unique(),
    __metadata("design:type", String)
], StringData.prototype, "key", void 0);
__decorate([
    attribute_1.Column("string"),
    __metadata("design:type", String)
], StringData.prototype, "value", void 0);
StringData = __decorate([
    attribute_1.Table("__STRING_DATA")
], StringData);
let NumberData = class NumberData {
    constructor() {
        this.key = "";
        this.value = 0;
    }
};
__decorate([
    attribute_1.Column("string"),
    attribute_1.NotNull(),
    attribute_1.Unique(),
    __metadata("design:type", String)
], NumberData.prototype, "key", void 0);
__decorate([
    attribute_1.Column("number"),
    __metadata("design:type", Number)
], NumberData.prototype, "value", void 0);
NumberData = __decorate([
    attribute_1.Table("__NUMBER_DATA")
], NumberData);
class DBPlayerPrefs {
    static getString(key, def) {
        let conn = $.getInstance(dbConnectMgr_1.DBConnectMgr).open(this.path);
        let data = conn.table(StringData)
            .where(o => o.key == key, { key })
            .first();
        return data?.value ?? def;
    }
    static setString(key, value) {
        let data = new StringData();
        data.key = key;
        data.value = value;
        let conn = $.getInstance(dbConnectMgr_1.DBConnectMgr).open(this.path);
        return conn.table(StringData)
            .where(o => o.key == key, { key })
            .updateOrInsert(data) > 0;
    }
    static getNumber(key, def) {
        let conn = $.getInstance(dbConnectMgr_1.DBConnectMgr).open(this.path);
        let data = conn.table(NumberData)
            .where(o => o.key == key, { key })
            .first();
        return data?.value ?? def;
    }
    static setNumber(key, value) {
        let data = new NumberData();
        data.key = key;
        data.value = value;
        let conn = $.getInstance(dbConnectMgr_1.DBConnectMgr).open(this.path);
        return conn.table(NumberData)
            .where(o => o.key == key, { key })
            .updateOrInsert(data) > 0;
    }
    static deleteAll() {
        let conn = $.getInstance(dbConnectMgr_1.DBConnectMgr).open(this.path);
        try {
            conn.runInTransaction(() => {
                conn.clearTable(StringData);
                conn.clearTable(NumberData);
            });
            return true;
        }
        catch (e) {
            console.error(e);
        }
        return false;
    }
    static delete(key, type) {
        let conn = $.getInstance(dbConnectMgr_1.DBConnectMgr).open(this.path);
        let table = type === "string" ? conn.table(StringData) : conn.table(NumberData);
        return table
            .where(o => o.key == key, { key })
            .delete() > 0;
    }
    static has(key, type) {
        let conn = $.getInstance(dbConnectMgr_1.DBConnectMgr).open(this.path);
        let table = type === "string" ? conn.table(StringData) : conn.table(NumberData);
        return table
            .where(o => o.key == key, { key })
            .count() > 0;
    }
}
exports.DBPlayerPrefs = DBPlayerPrefs;
DBPlayerPrefs.path = dbConfig_1.DBConfig.userPath;
//# sourceMappingURL=dbPlayerPrefs.js.map