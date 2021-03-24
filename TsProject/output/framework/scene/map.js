"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapMgr = exports.MapNode = exports.MapData = void 0;
const dbPlayerPrefs_1 = require("../../datas/dbPlayerPrefs");
const pinyinUtil_1 = require("../utils/pinyinUtil");
class MapData {
    constructor(data, getInstance) {
        this._data = data;
        if (!data.path && data.name) {
            data.path = pinyinUtil_1.pinyinUtil.getFullChars(data.name);
        }
        this._getInstance = getInstance;
    }
    get id() { return this._data.id; }
    get path() { return this._data.path; }
    get name() { return this._data.name; }
    get userData() { return this._data.userData; }
    destroy() {
        if (this._instance) {
            this._instance.destroy();
        }
        this._instance = undefined;
    }
    close() {
        if (this._instance && !this._instance.isDestroy()) {
            this._instance.close();
        }
    }
    get() {
        if (!this._instance || this._instance.isDestroy()) {
            this._instance = this._getInstance(this);
        }
        return this._instance;
    }
    open() {
        let ins = this.get();
        ins.open();
        return ins;
    }
}
exports.MapData = MapData;
class MapNode extends MapData {
    constructor() {
        super(...arguments);
        this._childs = new Array();
    }
    get parent() { return this._parent; }
    get activeChild() { return this._activeChild; }
    get childs() { return this._childs; }
    setParent(node) {
        this._parent = node;
    }
    setActiveChild(node) {
        this._activeChild = node;
    }
    registerChild(map, getInstance) {
        if (map instanceof MapNode) {
            map.setParent(this);
            this._childs.push(map);
        }
        else if (map && getInstance) {
            this.registerChild(new MapNode(map, getInstance));
        }
        else {
            throw new Error("");
        }
    }
    getPaths() {
        let names = [this.path];
        let p = this._parent;
        while (p) {
            names.unshift(p.path);
            p = p._parent;
        }
        return names;
    }
    getIds() {
        let ids = [this.id];
        let p = this._parent;
        while (p) {
            ids.unshift(p.id);
            p = p._parent;
        }
        return ids;
    }
    getChildByPaths(...paths) {
        if (paths.length == 0)
            return this;
        for (let child of this.childs) {
            if (child.path === paths[0]) {
                let _names = paths.slice(1);
                return child.getChildByPaths(..._names);
            }
        }
        return undefined;
    }
    getChildByIds(...ids) {
        if (ids.length == 0)
            return this;
        for (let child of this.childs) {
            if (child.id === ids[0]) {
                let _ids = ids.slice(1);
                return child.getChildByIds(..._ids);
            }
        }
        return undefined;
    }
}
exports.MapNode = MapNode;
class MapMgr {
    constructor() {
        this._nodes = new Array();
    }
    get _defaultNams() {
        throw new Error("method not implemented: " + this);
    }
    ;
    get _mapInfoSaveName() {
        throw new Error("method not implemented: " + this);
    }
    ;
    closeNode(node) {
        node.close();
        let parent = node.parent;
        while (parent) {
            parent.close();
            parent.setActiveChild(undefined);
            parent = parent.parent;
        }
    }
    loadNode(node) {
        if (this._activeNode !== undefined && this._activeNode !== node) {
            this.closeNode(this._activeNode);
        }
        let _node = node, _parent = _node.parent;
        while (_parent) {
            _parent.setActiveChild(_node);
            _node = _parent;
            _parent = _node.parent;
        }
        this._activeNode = node;
        node.open();
        dbPlayerPrefs_1.DBPlayerPrefs.setString(this._mapInfoSaveName, node.getPaths().join(","));
    }
    loadByPaths(paths) {
        for (let node of this._nodes) {
            if (node.path === paths[0]) {
                let _names = paths.slice(1);
                let _node = node.getChildByPaths(..._names);
                if (_node) {
                    this.loadNode(_node);
                    return _node.get();
                }
                break;
            }
        }
        throw new Error("找不到路径: " + paths.join(","));
    }
    loadByIds(ids) {
        for (let node of this._nodes) {
            if (node.id === ids[0]) {
                let _ids = ids.slice(1);
                let _node = node.getChildByIds(..._ids);
                if (_node) {
                    this.loadNode(_node);
                    return _node.get();
                }
                break;
            }
        }
        throw new Error("找不到ID: " + ids.join(","));
    }
    loadLastActive() {
        let info = dbPlayerPrefs_1.DBPlayerPrefs.getString(this._mapInfoSaveName, undefined) ?? "";
        let names = info.split(",");
        if (names.length <= 0 || names[0] != this._defaultNams[0]) {
            names = [...this._defaultNams];
        }
        return this.loadByPaths(names);
    }
    backUpper() {
        if (this._activeNode && this._activeNode.parent) {
            let node = this._activeNode.parent;
            this.loadNode(node);
            return node.get();
        }
        return undefined;
    }
    closeActive() {
        if (this._activeNode)
            this.closeNode(this._activeNode);
        this._activeNode = undefined;
    }
    getActivePaths() {
        if (this._activeNode)
            return this._activeNode.getPaths();
        return [];
    }
    getActiveIds() {
        if (this._activeNode)
            return this._activeNode.getIds();
        return [];
    }
    getActiveId() {
        if (this._activeNode)
            return this._activeNode.id;
        return 0;
    }
}
exports.MapMgr = MapMgr;
//# sourceMappingURL=map.js.map