"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.B2PlayerBar = void 0;
const csharp_UnityEngine_1 = require("csharp.UnityEngine");
const assetMgr_1 = require("../../common/assetMgr");
const jsPanel_1 = require("../../jsPanel");
const layerMgr_1 = require("../../common/layerMgr");
const b2EnergyPanel_1 = require("./b2EnergyPanel");
const b2HeroPanel_1 = require("./b2HeroPanel");
const b2MiJingPanel_1 = require("./b2MiJingPanel");
const b2TaskPanel_1 = require("./b2TaskPanel");
const b2MapMgr_1 = require("./map/b2MapMgr");
const b2RolePanel_1 = require("./window/b2RolePanel");
const b2BagPanel_1 = require("./window/b2BagPanel");
class B2PlayerBar extends jsPanel_1.JsPanel {
    static __staticConstructor() {
        let prefab = $.getInstance(assetMgr_1.AssetMgr).Auto.loadPrefab("Prefabs/Scene/B2World/B2PlayerBar");
        let trf = csharp_UnityEngine_1.GameObject.Instantiate(prefab).transform;
        $.getInstance(layerMgr_1.LayerMgr).Background.addChild(trf);
        return new B2PlayerBar(trf);
    }
    setTopActive(active) {
        this._topViewObj.SetActive(active);
    }
    setBottomActive(active) {
        this._bottomViewObj.SetActive(active);
    }
    openMap() {
        this.open();
        let tog = this._bottomTogs.get_Item(2);
        tog.isOn = true;
        tog.onValueChanged.Invoke(true);
    }
    Awake() {
        this.initListeners();
    }
    initListeners() {
        for (let i = 0; i < this._bottomTogs.Length; i++) {
            let tog = this._bottomTogs.get_Item(i);
            tog.onValueChanged.AddListener(on => {
                if (on)
                    this.toggle(tog.name);
            });
        }
        this._headBtn.onClick.AddListener(() => $.getInstance(b2RolePanel_1.B2RolePanel).openById(1, true));
        this._bagBtn.onClick.AddListener(() => $.getInstance(b2BagPanel_1.B2BagPanel).open());
    }
    toggle(name) {
        $.instance(b2TaskPanel_1.B2TaskPanel)?.close();
        $.instance(b2EnergyPanel_1.B2EnergyPanel)?.close();
        $.instance(b2HeroPanel_1.B2HeroPanel)?.close();
        $.instance(b2MiJingPanel_1.B2MiJingPanel)?.close();
        $.instance(b2MapMgr_1.B2MapMgr)?.closeActive();
        switch (name.toLowerCase()) {
            case "task":
                $.getInstance(b2TaskPanel_1.B2TaskPanel).open();
                break;
            case "energy":
                $.getInstance(b2EnergyPanel_1.B2EnergyPanel).open();
                break;
            case "map":
                $.getInstance(b2MapMgr_1.B2MapMgr).loadLastActive();
                break;
            case "hero":
                $.getInstance(b2HeroPanel_1.B2HeroPanel).open();
                break;
            case "mijing":
                $.getInstance(b2MiJingPanel_1.B2MiJingPanel).open();
                break;
        }
    }
}
exports.B2PlayerBar = B2PlayerBar;
//# sourceMappingURL=b2PlayerBar.js.map