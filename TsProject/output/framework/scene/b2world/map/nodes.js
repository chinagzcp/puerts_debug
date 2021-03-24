"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.B2PlacePanel = exports.B2RoomPanel = exports.B2MapPanel = void 0;
const csharp_UnityEngine_1 = require("csharp.UnityEngine");
const assetMgr_1 = require("../../../common/assetMgr");
const layerMgr_1 = require("../../../common/layerMgr");
const jsPanel_1 = require("../../../jsPanel");
const sceneTo_1 = require("../../sceneTo");
const b2PlayerBar_1 = require("../b2PlayerBar");
const b2MapMgr_1 = require("./b2MapMgr");
const b2Packages_1 = require("./b2Packages");
class B2MapPanel extends jsPanel_1.JsPanel {
    static __staticConstructor() {
        let prefab = $.getInstance(assetMgr_1.AssetMgr).Auto.loadPrefab("Prefabs/Scene/B2World/Map/B2MapPanel");
        let trf = csharp_UnityEngine_1.GameObject.Instantiate(prefab).transform;
        $.getInstance(layerMgr_1.LayerMgr).Scene.addChild(trf);
        return new B2MapPanel(trf);
    }
    open() {
        super.open();
        $.getInstance(b2PlayerBar_1.B2PlayerBar).setTopActive(false);
        $.getInstance(b2PlayerBar_1.B2PlayerBar).setBottomActive(true);
    }
    Awake() {
        this.initListeners();
    }
    initListeners() {
        for (let i = 0; i < this._roomTrf.childCount; i++) {
            let child = this._roomTrf.GetChild(i);
            if (child === this._mWorldBtn.transform)
                continue;
            let id = parseInt(child.name.replace("id_", ""));
            child.GetComponent("Button").onClick.AddListener(() => {
                let mgr = $.getInstance(b2MapMgr_1.B2MapMgr);
                let ids = [...mgr.getActiveIds(), id];
                try {
                    mgr.loadByIds(ids);
                }
                catch (e) {
                    console.error(child.name, e);
                }
            });
        }
        this._mWorldBtn.onClick.AddListener(() => {
            sceneTo_1.SceneTo.mWorld();
        });
    }
}
exports.B2MapPanel = B2MapPanel;
class B2Node extends jsPanel_1.JsPanel {
    constructor(data) {
        let path = "Prefabs/Scene/B2World/Map/" + (typeof (data) === "string" ? ("Nodes/" + data) : "B2RoomPanel");
        let prefab = $.getInstance(assetMgr_1.AssetMgr).Auto.loadPrefab(path);
        let trf = csharp_UnityEngine_1.GameObject.Instantiate(prefab).transform;
        $.getInstance(layerMgr_1.LayerMgr).Scene.addChild(trf);
        super(trf);
    }
}
class B2RoomPanel extends B2Node {
    constructor(data) {
        super(data);
        if (typeof (data) !== "string") {
            this.loadMap(data);
        }
    }
    open() {
        super.open();
        $.getInstance(b2PlayerBar_1.B2PlayerBar).setTopActive(true);
        $.getInstance(b2PlayerBar_1.B2PlayerBar).setBottomActive(false);
    }
    loadMap(data) {
        this.name = `id_${data.id}_${data.name}`;
        this._nameTxt.text = data.name;
        this._bgImg.sprite = $.getInstance(b2Packages_1.B2Packages).load(data.id);
    }
    Awake() {
        this.initListeners();
    }
    initListeners() {
        if (this._backUpperBtn) {
            this._backUpperBtn.onClick.AddListener(() => $.getInstance(b2MapMgr_1.B2MapMgr).backUpper());
        }
    }
}
exports.B2RoomPanel = B2RoomPanel;
class B2PlacePanel extends B2Node {
    open() {
        super.open();
        $.getInstance(b2PlayerBar_1.B2PlayerBar).setTopActive(true);
        $.getInstance(b2PlayerBar_1.B2PlayerBar).setBottomActive(true);
    }
    Awake() {
        this.initListeners();
    }
    initListeners() {
        this._backUpperBtn.onClick.AddListener(() => $.getInstance(b2MapMgr_1.B2MapMgr).backUpper());
        for (let i = 0; i < this._roomTrf.childCount; i++) {
            let child = this._roomTrf.GetChild(i);
            let id = parseInt(child.name.replace("id_", ""));
            child.GetComponent("Button").onClick.AddListener(() => {
                let mgr = $.getInstance(b2MapMgr_1.B2MapMgr);
                let ids = [...mgr.getActiveIds(), id];
                try {
                    mgr.loadByIds(ids);
                }
                catch (e) {
                    console.error(child.name, e);
                }
            });
        }
    }
}
exports.B2PlacePanel = B2PlacePanel;
//# sourceMappingURL=nodes.js.map