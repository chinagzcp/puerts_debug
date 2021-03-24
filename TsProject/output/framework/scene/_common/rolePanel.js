"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolePanel = void 0;
const export_1 = require("../../../client/datas/export");
const playerClient_1 = require("../../../client/interface/playerClient");
const exportDB_1 = require("../../../datas/exportDB");
const jsComponent_1 = require("../../common/jsComponent");
const jsPanel_1 = require("../../jsPanel");
class StateView_Basic extends jsComponent_1.JsComponent {
    init() { }
    setData(data) {
        this._data = data;
    }
}
class StateView_Advanced extends jsComponent_1.JsComponent {
    init() { }
    setData(data) {
        this._data = data;
    }
}
class EquipCtrl extends jsComponent_1.JsComponent {
    get data() { return this._data; }
    get button() { return this._button; }
    setData(data) {
        this._data = data;
        this._bgImg.gameObject.SetActive(!!data);
        if (data) {
        }
    }
    Awake() {
        this.initComponents();
    }
    initComponents() {
        this._button = this.transform.GetComponent("Button");
        this._bgImg = this.transform.Find("Item").GetComponent("Image");
        this._iconImg = this.transform.Find("Item").GetComponent("Image/Icon");
        this._starImgs = [];
        let parent = this.transform.Find("Item/Star");
        for (let i = 0; i < parent.childCount; i++)
            this._starImgs.push(parent.GetChild(i).GetComponent("Image"));
    }
}
class SkillCtrl extends jsComponent_1.JsComponent {
}
class StateView extends jsComponent_1.JsComponent {
    init() {
        this._basicView = new StateView_Basic(this._basicObj);
        this._advancedView = new StateView_Advanced(this._advancedObj);
        this._basicView.init();
        this._advancedView.init();
        this.initListeners();
    }
    setData(data) {
        this._data = data;
        this._basicView.setData(data);
        this._advancedView.setData(data);
        this.loadInfos();
        this._basicTog.isOn = true;
        this._basicTog.onValueChanged.Invoke(true);
    }
    loadInfos() {
        this._playerImg.gameObject.SetActive(!!this._data);
        let npc = $.getInstance(exportDB_1.NpcDataDB).get(this.getDataId());
        this._sexTxt.text = npc?.gender == 1 ? "男" : npc?.gender == 2 ? "女" : "?";
        this._nameTxt.text = npc?.npc_name ?? "?";
        this._ageTxt.text = npc?.age.toString() ?? "?";
    }
    getDataId() {
        if (this._data && this._data instanceof export_1.HeroEntity) {
            return this._data.data_id;
        }
        return this._data?.id ?? 0;
    }
    initListeners() {
        let objs = [this._basicObj, this._advancedObj];
        for (let tog of [this._basicTog, this._advancedTog]) {
            tog.onValueChanged.AddListener(on => {
                if (on) {
                    for (let obj of objs) {
                        obj.SetActive(obj.name === tog.name);
                    }
                }
            });
        }
    }
}
class InnerView extends jsComponent_1.JsComponent {
    init() { }
    setData(data) {
    }
}
class SkillView extends jsComponent_1.JsComponent {
    init() { }
    setData(data) {
    }
}
class RolePanel extends jsPanel_1.JsPanel {
    openById(id, isHero) {
        this.open();
        let data = !isHero ? $.getInstance(exportDB_1.HeroDataDB).get(id) : undefined;
        this._stateView.setData(data);
        this._innerView.setData(data);
        this._skillView.setData(data);
        this._stateTog.isOn = true;
        this._stateTog.onValueChanged.Invoke(true);
        if (isHero) {
            playerClient_1.PlayerClient.requestHero(id, (hero) => {
                this._stateView.setData(data);
                this._innerView.setData(data);
                this._skillView.setData(data);
            });
        }
    }
    Awake() {
        this.initViews();
        this.initListeners();
    }
    initViews() {
        this._stateView = new StateView(this._stateObj);
        this._innerView = new InnerView(this._innerObj);
        this._skillView = new SkillView(this._skillObj);
        this._stateView.init();
        this._innerView.init();
        this._skillView.init();
    }
    initListeners() {
        let togs = [this._stateTog, this._innerTog, this._skillTog];
        let objs = [this._stateObj, this._innerObj, this._skillObj];
        for (let tog of togs) {
            tog.onValueChanged.AddListener(on => {
                if (on) {
                    for (let obj of objs) {
                        obj.SetActive(obj.name === tog.name);
                    }
                }
            });
        }
        this._closeBtn.onClick.AddListener(() => this.close());
    }
}
exports.RolePanel = RolePanel;
//# sourceMappingURL=rolePanel.js.map