"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.B2MapMgr = void 0;
const map_1 = require("../../map");
const nodes_1 = require("./nodes");
class B2MapMgr extends map_1.MapMgr {
    get _defaultNams() {
        return ["ROOT"];
    }
    ;
    get _mapInfoSaveName() {
        return "B2MapMgrNames";
    }
    ;
    constructor() {
        super();
        this.registerMaps();
    }
    registerMaps() {
        let rootNode = new map_1.MapNode({ id: 50000, path: "ROOT" }, () => $.getInstance(nodes_1.B2MapPanel));
        this._nodes.push(rootNode);
        (function () {
            let node = new map_1.MapNode({ id: 140010000, name: "流云门" }, data => new nodes_1.B2PlacePanel("id_" + data.id));
            node.registerChild({ id: 140010001, name: "议事厅" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140010002, name: "库房" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140010003, name: "弟子居" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140010004, name: "弘毅堂" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140010005, name: "明伦堂" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140010006, name: "练武场" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140010007, name: "膳食厅" }, data => new nodes_1.B2RoomPanel(data));
            rootNode.registerChild(node);
        })();
        (function () {
            let node = new map_1.MapNode({ id: 140020000, name: "赤霞神教" }, data => new nodes_1.B2PlacePanel("id_" + data.id));
            node.registerChild({ id: 140020001, name: "圣殿" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140020002, name: "炎灼殿" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140020003, name: "炎烬殿" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140020004, name: "奈落居" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140020005, name: "搏武坛" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140020006, name: "圣火坛" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140020007, name: "阳焱营" }, data => new nodes_1.B2RoomPanel(data));
            rootNode.registerChild(node);
        })();
        (function () {
            let node = new map_1.MapNode({ id: 140030000, name: "归元阁" }, data => new nodes_1.B2PlacePanel("id_" + data.id));
            node.registerChild({ id: 140030001, name: "问道崖" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140030002, name: "归元殿" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140030003, name: "观云台" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140030004, name: "奕剑馆" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140030005, name: "寝室" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140030006, name: "宴客厅" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140030007, name: "仓库" }, data => new nodes_1.B2RoomPanel(data));
            rootNode.registerChild(node);
        })();
        (function () {
            let node = new map_1.MapNode({ id: 140040000, name: "长空秋水" }, data => new nodes_1.B2PlacePanel("id_" + data.id));
            node.registerChild({ id: 140040001, name: "长秋厅" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140040002, name: "礼圣祠" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140040003, name: "宝光阁" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140040004, name: "文渊阁" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140040005, name: "正德堂" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140040006, name: "武极堂" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140040007, name: "世功楼" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140040008, name: "百厨司" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140040009, name: "德馨馆" }, data => new nodes_1.B2RoomPanel(data));
            rootNode.registerChild(node);
        })();
        (function () {
            let node = new map_1.MapNode({ id: 140050000, name: "空蝉山庄" }, data => new nodes_1.B2PlacePanel("id_" + data.id));
            node.registerChild({ id: 140050001, name: "后院" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140050002, name: "春景厅" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140050003, name: "冬悟楼" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140050004, name: "冬习楼" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140050005, name: "夏鸣场" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140050006, name: "秋荧居" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140050007, name: "四食堂" }, data => new nodes_1.B2RoomPanel(data));
            rootNode.registerChild(node);
        })();
        (function () {
            let node = new map_1.MapNode({ id: 140060000, name: "千湖城" }, data => new nodes_1.B2PlacePanel("id_" + data.id));
            node.registerChild({ id: 140060001, name: "青石坊" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140060002, name: "摘星揽月楼" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140060003, name: "布告栏" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140060004, name: "明镜悬空司" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140060005, name: "彩云裁缝铺" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140060006, name: "天禄客栈" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140060007, name: "贾药铺" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140060008, name: "潘氏铁匠铺" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140060009, name: "集市" }, data => new nodes_1.B2RoomPanel(data));
            rootNode.registerChild(node);
        })();
        (function () {
            let node = new map_1.MapNode({ id: 140070000, name: "临水镇" }, data => new nodes_1.B2PlacePanel("id_" + data.id));
            node.registerChild({ id: 140070001, name: "镇长家" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140070002, name: "肉铺" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140070003, name: "药铺" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140070004, name: "街道" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140070005, name: "李翠莲家" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140070006, name: "田地" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140070007, name: "周大山家" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140070008, name: "映红湖" }, data => new nodes_1.B2RoomPanel(data));
            node.registerChild({ id: 140070009, name: "阮昊家" }, data => new nodes_1.B2RoomPanel(data));
            rootNode.registerChild(node);
        })();
    }
}
exports.B2MapMgr = B2MapMgr;
//# sourceMappingURL=b2MapMgr.js.map