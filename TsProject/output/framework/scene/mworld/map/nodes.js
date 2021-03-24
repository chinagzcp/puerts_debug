"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MPlacePanel = exports.MRoomPanel = exports.MMapPanel = void 0;
const csharp_UnityEngine_1 = require("csharp.UnityEngine");
const assetMgr_1 = require("../../../common/assetMgr");
const layerMgr_1 = require("../../../common/layerMgr");
const jsPanel_1 = require("../../../jsPanel");
const mPlayerBar_1 = require("../mPlayerBar");
const mMapMgr_1 = require("./mMapMgr");
const mPackages_1 = require("./mPackages");
class MMapPanel extends jsPanel_1.JsPanel {
    static __staticConstructor() {
        let prefab = $.getInstance(assetMgr_1.AssetMgr).Auto.loadPrefab("Prefabs/Scene/MWorld/Map/MMapPanel");
        let trf = csharp_UnityEngine_1.GameObject.Instantiate(prefab).transform;
        $.getInstance(layerMgr_1.LayerMgr).Scene.addChild(trf);
        return new MMapPanel(trf);
    }
    open() {
        super.open();
        $.getInstance(mPlayerBar_1.MPlayerBar).setTopActive(false);
        $.getInstance(mPlayerBar_1.MPlayerBar).setBottomActive(true);
    }
    Awake() {
        this.initListeners();
    }
    initListeners() {
        for (let i = 0; i < this._roomTrf.childCount; i++) {
            let child = this._roomTrf.GetChild(i);
            let id = parseInt(child.name.replace("id_", ""));
            child.GetComponent("Button").onClick.AddListener(() => {
                let mgr = $.getInstance(mMapMgr_1.MMapMgr);
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
exports.MMapPanel = MMapPanel;
class MNode extends jsPanel_1.JsPanel {
    constructor(data) {
        let path = "Prefabs/Scene/MWorld/Map/" + (typeof (data) === "string" ? ("Nodes/" + data) : "MRoomPanel");
        let prefab = $.getInstance(assetMgr_1.AssetMgr).Auto.loadPrefab(path);
        let trf = csharp_UnityEngine_1.GameObject.Instantiate(prefab).transform;
        $.getInstance(layerMgr_1.LayerMgr).Scene.addChild(trf);
        super(trf);
    }
}
class MRoomPanel extends MNode {
    constructor(data) {
        super(data);
        if (typeof (data) !== "string") {
            this.loadMap(data);
        }
    }
    open() {
        super.open();
        $.getInstance(mPlayerBar_1.MPlayerBar).setTopActive(true);
        $.getInstance(mPlayerBar_1.MPlayerBar).setBottomActive(false);
    }
    loadMap(data) {
        this.name = `id_${data.id}_${data.name}`;
        this._nameTxt.text = data.name;
        this._bgImg.sprite = $.getInstance(mPackages_1.MPackages).load(data.id);
    }
    Awake() {
        this.initListeners();
    }
    initListeners() {
        if (this._backUpperBtn) {
            this._backUpperBtn.onClick.AddListener(() => $.getInstance(mMapMgr_1.MMapMgr).backUpper());
        }
    }
}
exports.MRoomPanel = MRoomPanel;
class MPlacePanel extends MNode {
    open() {
        super.open();
        $.getInstance(mPlayerBar_1.MPlayerBar).setTopActive(true);
        $.getInstance(mPlayerBar_1.MPlayerBar).setBottomActive(true);
    }
    Awake() {
        this.initListeners();
    }
    initListeners() {
        this._backUpperBtn.onClick.AddListener(() => $.getInstance(mMapMgr_1.MMapMgr).backUpper());
        for (let i = 0; i < this._roomTrf.childCount; i++) {
            let child = this._roomTrf.GetChild(i);
            let id = parseInt(child.name.replace("id_", ""));
            child.GetComponent("Button").onClick.AddListener(() => {
                let mgr = $.getInstance(mMapMgr_1.MMapMgr);
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
exports.MPlacePanel = MPlacePanel;
//# sourceMappingURL=nodes.js.map