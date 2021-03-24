"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPanel = void 0;
const csharp_UnityEngine_1 = require("csharp.UnityEngine");
const jsPanel_1 = require("../../jsPanel");
const boxMgr_1 = require("../../common/boxMgr");
const assetMgr_1 = require("../../common/assetMgr");
const layerMgr_1 = require("../../common/layerMgr");
const sceneTo_1 = require("../sceneTo");
const accountClient_1 = require("../../../client/interface/accountClient");
class RegisterPanel extends jsPanel_1.JsPanel {
    open() {
        super.open();
        this._accountInput.text = '';
        this._pwdInput.text = '';
        this._repatPwdInput.text = '';
    }
    Awake() {
        this.initListeners();
    }
    initListeners() {
        this._backBtn.onClick.AddListener(() => this.gameObject.SetActive(false));
        this._confirmBtn.onClick.AddListener(() => {
            let account = this._accountInput.text;
            let pwd = this._pwdInput.text;
            if (account.length < 6) {
                $.getInstance(boxMgr_1.BoxMgr).tip(0, "输入的帐号长度不足6");
                return;
            }
            if (pwd.length < 6) {
                $.getInstance(boxMgr_1.BoxMgr).tip(0, "输入的密码长度不足6");
                return;
            }
            if (this._repatPwdInput.text !== pwd) {
                $.getInstance(boxMgr_1.BoxMgr).tip(0, "两次输入的密码不一致");
                return;
            }
            accountClient_1.Register.request(account, pwd, err => {
                if (!err) {
                    $.getInstance(boxMgr_1.BoxMgr).tip(0, "注册成功");
                }
                else {
                    $.getInstance(boxMgr_1.BoxMgr).tip(0, err);
                }
            });
        });
    }
}
class TreatyPanel extends jsPanel_1.JsPanel {
    Awake() {
        this.initListeners();
    }
    open() {
        super.open();
        this.reset();
        this._treatyBtn.gameObject.SetActive(true);
        this._privacyBtn.gameObject.SetActive(true);
        this._agreeBtn.gameObject.SetActive(true);
        this._refuseBtn.gameObject.SetActive(true);
    }
    openTreaty() {
        super.open();
        this._treatyBtn.onClick.Invoke();
    }
    openPrivacy() {
        super.open();
        this._privacyBtn.onClick.Invoke();
    }
    reset() {
        this._treatyObj.SetActive(false);
        this._privacyObj.SetActive(false);
        this._backBtn.gameObject.SetActive(false);
        this._treatyBtn.gameObject.SetActive(false);
        this._privacyBtn.gameObject.SetActive(false);
        this._agreeBtn.gameObject.SetActive(false);
        this._refuseBtn.gameObject.SetActive(false);
    }
    initListeners() {
        this._backBtn.onClick.AddListener(() => this.open());
        this._treatyBtn.onClick.AddListener(() => {
            this.reset();
            this._treatyObj.SetActive(true);
            this._backBtn.gameObject.SetActive(true);
        });
        this._privacyBtn.onClick.AddListener(() => {
            this.reset();
            this._privacyObj.SetActive(true);
            this._backBtn.gameObject.SetActive(true);
        });
        this._agreeBtn.onClick.AddListener(() => {
            super.close();
            this.callback(true);
        });
        this._refuseBtn.onClick.AddListener(() => {
            super.close();
            this.callback(false);
        });
    }
}
const [ACCOUNT_KEY, PASSWORD_KEY, AGREE_KEY] = ["ACCOUNT_KEY", "PASSWORD_KEY", "AGREE_KEY"];
class LoginPanel extends jsPanel_1.JsPanel {
    static __staticConstructor() {
        let prefab = $.getInstance(assetMgr_1.AssetMgr).Auto.loadPrefab("Prefabs/Scene/Login/LoginPanel");
        let trf = csharp_UnityEngine_1.GameObject.Instantiate(prefab).transform;
        $.getInstance(layerMgr_1.LayerMgr).Background.addChild(trf);
        let obj = new LoginPanel(trf.Find("Login"));
        obj._registerPanel = new RegisterPanel(trf.Find("Register"));
        obj._treatyPanel = new TreatyPanel(trf.Find("Treaty"));
        return obj;
    }
    Start() {
        this.initListeners();
        this.initState();
    }
    initListeners() {
        this._treatyPanel.callback = (on) => this._agreeTog.isOn = on;
        this._registerBtn.onClick.AddListener(() => this._registerPanel.open());
        this._treatyBtn.onClick.AddListener(() => this._treatyPanel.openTreaty());
        this._privacyBtn.onClick.AddListener(() => this._treatyPanel.openPrivacy());
        this._confirmBtn.onClick.AddListener(() => {
            if (this._accountInput.text.length < 6 || this._pwdInput.text.length < 6) {
                $.getInstance(boxMgr_1.BoxMgr).tip(0, "请输入账户或密码");
                return;
            }
            if (!this._agreeTog.isOn) {
                $.getInstance(boxMgr_1.BoxMgr).tip(0, "未同意用户协议");
                return;
            }
            let acoount = this._accountInput.text;
            let pwd = this._pwdInput.text;
            csharp_UnityEngine_1.PlayerPrefs.SetString(ACCOUNT_KEY, acoount);
            csharp_UnityEngine_1.PlayerPrefs.SetString(PASSWORD_KEY, pwd);
            csharp_UnityEngine_1.PlayerPrefs.SetInt(AGREE_KEY, 1);
            accountClient_1.Login.request(acoount, pwd, false, (response) => {
                if (!response.error) {
                    sceneTo_1.SceneTo.mWorld();
                }
                else {
                    $.getInstance(boxMgr_1.BoxMgr).tip(0, response.error);
                }
            });
        });
        this._pwdInput.onEndEdit.AddListener(text => {
            if (!text || text.length == 0)
                csharp_UnityEngine_1.PlayerPrefs.SetString(PASSWORD_KEY, "");
        });
        this._agreeTog.onValueChanged.AddListener(on => {
            if (!on)
                csharp_UnityEngine_1.PlayerPrefs.SetInt(AGREE_KEY, 0);
        });
    }
    initState() {
        this._agreeTog.isOn = csharp_UnityEngine_1.PlayerPrefs.GetInt(AGREE_KEY, 0) > 0;
        this._accountInput.text = csharp_UnityEngine_1.PlayerPrefs.GetString(ACCOUNT_KEY, "");
        this._pwdInput.text = csharp_UnityEngine_1.PlayerPrefs.GetString(PASSWORD_KEY, "");
    }
}
exports.LoginPanel = LoginPanel;
//# sourceMappingURL=loginPanel.js.map