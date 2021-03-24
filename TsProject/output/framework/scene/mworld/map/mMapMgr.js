"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MMapMgr = void 0;
const map_1 = require("../../map");
const nodes_1 = require("./nodes");
class MMapMgr extends map_1.MapMgr {
    get _defaultNams() {
        return ["ROOT"];
    }
    ;
    get _mapInfoSaveName() {
        return "MMapMgrPaths";
    }
    ;
    constructor() {
        super();
        this.registerMaps();
    }
    registerMaps() {
        let rootNode = new map_1.MapNode({ id: 140140000, path: "ROOT", }, () => $.getInstance(nodes_1.MMapPanel));
        this._nodes.push(rootNode);
        (function () {
            let node = new map_1.MapNode({ id: 140160000, name: "转化区" }, data => new nodes_1.MPlacePanel("id_" + data.id));
            node.registerChild({ id: 140160001, name: "机器人研究所" }, data => new nodes_1.MRoomPanel(data));
            node.registerChild({ id: 140160002, name: "3号研究所" }, data => new nodes_1.MRoomPanel(data));
            node.registerChild({ id: 140160003, name: "废弃研究所" }, data => new nodes_1.MRoomPanel(data));
            node.registerChild({ id: 140160004, name: "1号矿区" }, data => new nodes_1.MRoomPanel(data));
            node.registerChild({ id: 140160005, name: "2号矿区" }, data => new nodes_1.MRoomPanel(data));
            node.registerChild({ id: 140160006, name: "废弃居住区" }, data => new nodes_1.MRoomPanel(data));
            node.registerChild({ id: 140160007, name: "安全屋" }, data => new nodes_1.MRoomPanel(data));
            node.registerChild({ id: 140160008, name: "B2研究所" }, data => new nodes_1.MRoomPanel(data));
            node.registerChild({ id: 140160009, name: "X工厂" }, data => new nodes_1.MRoomPanel(data));
            node.registerChild({ id: 140160010, name: "G实验室" }, data => new nodes_1.MRoomPanel(data));
            rootNode.registerChild(node);
        })();
        (function () {
            let node = new map_1.MapNode({ id: 140170000, name: "珑川市", }, data => new nodes_1.MPlacePanel("id_" + data.id));
            node.registerChild({ id: 140170001, name: "天宇公司总部" }, data => new nodes_1.MRoomPanel(data));
            node.registerChild({ id: 140170002, name: "街道" }, data => new nodes_1.MRoomPanel(data));
            node.registerChild({ id: 140170003, name: "健身房" }, data => new nodes_1.MRoomPanel(data));
            node.registerChild({ id: -140170003, name: "未知" }, data => new nodes_1.MRoomPanel(data));
            rootNode.registerChild(node);
        })();
    }
}
exports.MMapMgr = MMapMgr;
//# sourceMappingURL=mMapMgr.js.map