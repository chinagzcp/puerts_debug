"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataDB = void 0;
const csharp_System_1 = require("csharp.System");
const dbConfig_1 = require("../dbConfig");
const dbConnectMgr_1 = require("../dbConnectMgr");
const __db_1 = require("./__db");
class Cache {
    constructor(data, time) {
        this.data = data;
        this.time = time;
        this.startTime = csharp_System_1.DateTime.Now.valueOf();
    }
    get dataColne() {
        let data = this.data;
        if (data) {
            let result = Object.create(Object.getPrototypeOf(data));
            Object.assign(result, data);
            return result;
        }
        return data;
    }
    isValid() {
        return this.time == 0 || this.time > 0 && (Date.now() - this.startTime) < this.time;
    }
}
class DataDB extends __db_1.DB {
    constructor() {
        super(...arguments);
        this.cacheAll = false;
        this.cacheDatas = new Map();
    }
    get conn() {
        return $.getInstance(dbConnectMgr_1.DBConnectMgr).open(dbConfig_1.DBConfig.dataPath);
    }
    get cacheTime() { return 120000; }
    removeAll() {
        this.clear();
        return super.removeAll();
    }
    saveAll(datas) {
        this.clear();
        return super.saveAll(datas);
    }
    save(data) {
        this.clear();
        return super.save(data);
    }
    remove(id) {
        this.clear();
        return super.remove(id);
    }
    get(id) {
        let cache = undefined;
        if (this.cacheDatas.has(id))
            cache = this.cacheDatas.get(id);
        if (!cache || !cache.isValid()) {
            let data = super.get(id);
            cache = new Cache(data, this.cacheTime);
            this.cacheDatas.set(id, cache);
        }
        return cache.dataColne;
    }
    getAll() {
        if (!this.cacheAll) {
            this.clear();
            for (let data of super.getAll()) {
                if (!data)
                    continue;
                let cache = new Cache(data, this.cacheTime);
                this.cacheDatas.set(data.id, cache);
            }
            this.cacheAll = true;
        }
        let result = new Array();
        for (let cache of this.cacheDatas.values()) {
            result.push(cache.dataColne);
        }
        return result;
    }
    clear() {
        this.cacheAll = false;
        this.cacheDatas = new Map();
    }
    clearInvalid() {
        let datas = this.cacheDatas;
        for (let key of datas.keys()) {
            if (!datas.get(key).isValid()) {
                this.cacheAll = false;
                datas.delete(key);
            }
        }
    }
}
exports.DataDB = DataDB;
//# sourceMappingURL=dataDB.js.map