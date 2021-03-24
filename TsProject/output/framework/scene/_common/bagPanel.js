"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BagPanel = void 0;
const playerClient_1 = require("../../../client/interface/playerClient");
const jsPanel_1 = require("../../jsPanel");
const scrollVertical_1 = require("./scrollVertical");
class BagPanel extends jsPanel_1.JsPanel {
    open() {
        super.open();
        this.loadDatas();
    }
    loadDatas() {
        this._view.clearData();
        playerClient_1.PlayerClient.requestBag((items, equips) => {
            this._view.clearData();
            this._view.addData(...items, ...equips);
        });
    }
    Awake() {
        this.initPools();
        this.initListeners();
    }
    initPools() {
        this._view = new scrollVertical_1.ScrollVertical(this._viewTrf);
        this._view.create(trf => {
            return data => {
            };
        });
    }
    initListeners() {
        this._closeBtn.onClick.AddListener(() => this.close());
    }
}
exports.BagPanel = BagPanel;
//# sourceMappingURL=bagPanel.js.map