"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MPlayerBar = void 0;
const csharp_UnityEngine_1 = require("csharp.UnityEngine");
const assetMgr_1 = require("../../common/assetMgr");
const jsPanel_1 = require("../../jsPanel");
const layerMgr_1 = require("../../common/layerMgr");
const mMapMgr_1 = require("./map/mMapMgr");
const mExperimentPanel_1 = require("./mExperimentPanel");
const mPlanPanel_1 = require("./mPlanPanel");
const mHomePanel_1 = require("./mHomePanel");
const mEventPanel_1 = require("./mEventPanel");
class MPlayerBar extends jsPanel_1.JsPanel {
    static __staticConstructor() {
        let prefab = $.getInstance(assetMgr_1.AssetMgr).Auto.loadPrefab("Prefabs/Scene/MWorld/MPlayerBar");
        let trf = csharp_UnityEngine_1.GameObject.Instantiate(prefab).transform;
        $.getInstance(layerMgr_1.LayerMgr).Background.addChild(trf);
        return new MPlayerBar(trf);
    }
    setTopActive(active) {
        this._topViewObj.SetActive(active);
    }
    setBottomActive(active) {
        this._bottomViewObj.SetActive(active);
    }
    openFirst() {
        this.open();
        let tog = this._bottomTogs.get_Item(0);
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
    }
    toggle(name) {
        $.instance(mHomePanel_1.MHomePanel)?.close();
        $.instance(mEventPanel_1.MEventPanel)?.close();
        $.instance(mExperimentPanel_1.MExperimentPanel)?.close();
        $.instance(mPlanPanel_1.MPlanPanel)?.close();
        $.instance(mMapMgr_1.MMapMgr)?.closeActive();
        switch (name.toLowerCase()) {
            case "home":
                $.getInstance(mHomePanel_1.MHomePanel).open();
                break;
            case "event":
                $.getInstance(mEventPanel_1.MEventPanel).open();
                break;
            case "seek":
                $.getInstance(mMapMgr_1.MMapMgr).loadLastActive();
                break;
            case "experiment":
                $.getInstance(mExperimentPanel_1.MExperimentPanel).open();
                break;
            case "plan":
                $.getInstance(mPlanPanel_1.MPlanPanel).open();
                break;
        }
    }
}
exports.MPlayerBar = MPlayerBar;
//# sourceMappingURL=mPlayerBar.js.map