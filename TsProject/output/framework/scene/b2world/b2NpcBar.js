"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.B2NpcBar = void 0;
const jsComponent_1 = require("../../common/jsComponent");
const objectPool_1 = require("../../../common/objectPool");
const csharp_UnityEngine_1 = require("csharp.UnityEngine");
const assetMgr_1 = require("../../common/assetMgr");
const jsPanel_1 = require("../../jsPanel");
const layerMgr_1 = require("../../common/layerMgr");
const t2dUtil_1 = require("../../utils/t2dUtil");
class Item extends jsComponent_1.JsComponent {
    Awake() {
        this.initComponents();
    }
    initComponents() {
        this._headImg = this.transform.GetComponent("Image");
        this._nameTxt = this.transform.Find("Name").GetComponent("Text");
        this._tipObj = this.transform.Find("Tip").gameObject;
    }
    setData(npc) {
        this._tipObj.SetActive(false);
        this._nameTxt.text = npc.npc_name;
        this._headImg.sprite = $.getInstance(t2dUtil_1.T2DUtil).getNpcHead(npc.icon, csharp_UnityEngine_1.Sprite);
    }
}
class B2NpcBar extends jsPanel_1.JsPanel {
    constructor() {
        super(...arguments);
        this._mapId = -1;
    }
    static __staticConstructor() {
        let prefab = $.getInstance(assetMgr_1.AssetMgr).Auto.loadPrefab("Prefabs/Game/Scene/B2World/B2NpcBar");
        let trf = csharp_UnityEngine_1.GameObject.Instantiate(prefab).transform;
        $.getInstance(layerMgr_1.LayerMgr).Background.addChild(trf);
        return new B2NpcBar(trf, true);
    }
    openByMapId(mapId) {
        this._mapId = mapId;
        this.open();
        this.refreshNpcs();
    }
    Awake() {
        this.initPools();
    }
    initPools() {
        let pool = new objectPool_1.ObjectPool();
        pool.createEvent = () => {
            let ins = csharp_UnityEngine_1.GameObject.Instantiate(this._npcItem);
            ins.SetParent(this._npcParent);
            ins.localScale = csharp_UnityEngine_1.Vector3.one;
            return new Item(ins);
        };
        pool.activeEvent = ctrl => {
            ctrl.gameObject.SetActive(true);
            ctrl.transform.SetAsLastSibling();
        };
        pool.releaseEvent = ctrl => ctrl.gameObject.SetActive(false);
        this._npcItem.gameObject.SetActive(false);
        this._npcPool = pool;
    }
    refreshNpcs() {
        this._npcPool.releaseAll();
        console.log(`Load Npcs MapId = ${this._mapId}\n` + [].toArray(d => `npcId=${d.npc_id}`).join("\n"));
    }
}
exports.B2NpcBar = B2NpcBar;
//# sourceMappingURL=b2NpcBar.js.map