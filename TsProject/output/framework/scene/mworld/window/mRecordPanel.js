"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MRecordPanel = void 0;
const CS = require("csharp");
const csharp_System_1 = require("csharp.System");
const csharp_UnityEngine_1 = require("csharp.UnityEngine");
const jsComponent_1 = require("../../../common/jsComponent");
const objectPool_1 = require("../../../../common/objectPool");
const csharp_1 = require("csharp");
const assetMgr_1 = require("../../../common/assetMgr");
const dbPlayerPrefs_1 = require("../../../../datas/dbPlayerPrefs");
const jsPanel_1 = require("../../../jsPanel");
const boxMgr_1 = require("../../../common/boxMgr");
const layerMgr_1 = require("../../../common/layerMgr");
const mPlayerBar_1 = require("../mPlayerBar");
const export_1 = require("../../../../client/datas/export");
class TagItem extends jsComponent_1.JsComponent {
    get toggle() { return this._toggle; }
    get text() { return this._text; }
    Awake() {
        this.initComponents();
        this.initListeners();
    }
    initComponents() {
        this._toggle = this.transform.GetComponent("Toggle");
        this._text = this.transform.Find("Label").GetComponent("Text");
    }
    initListeners() {
        let on_color = new csharp_UnityEngine_1.Color(0xE7 / 255.0, 0x88 / 255.0, 0x00 / 255.0);
        let off_color = new csharp_UnityEngine_1.Color(0xA7 / 255.0, 0xA7 / 255.0, 0xA7 / 255.0);
        this._toggle.onValueChanged.AddListener(on => {
            this._text.color = on ? on_color : off_color;
        });
    }
    reset() {
        this._toggle.isOn = false;
        this._toggle.onValueChanged.Invoke(false);
    }
}
const grayText = new csharp_UnityEngine_1.Color(0xb8 / 255.0, 0xb7 / 255.0, 0xb7 / 255.0), blackText = new csharp_UnityEngine_1.Color(0x65 / 255.0, 0x65 / 255.0, 0x65 / 255.0), gray = new csharp_UnityEngine_1.Color(0xD9 / 255.0, 0xD9 / 255.0, 0xD9 / 255.0), blue = new csharp_UnityEngine_1.Color(0x64 / 255.0, 0xBA / 255.0, 0xD2 / 255.0), red = new csharp_UnityEngine_1.Color(0xCF / 255.0, 0x5D / 255.0, 0x47 / 255.0);
class DateItem extends jsComponent_1.JsComponent {
    get toggle() { return this._toggle; }
    get date() { return this._date; }
    get datas() { return this._datas; }
    get currentMonth() { return this._currentMonth; }
    Awake() {
        this.initComponents();
        this.initListeners();
    }
    initComponents() {
        this._toggle = this.transform.GetComponent("Toggle");
        this._dateTxt = this.transform.Find("Date").GetComponent("Text");
        this._moneyTxt = this.transform.Find("Money").GetComponent("Text");
    }
    initListeners() {
        this._toggle.onValueChanged.AddListener(on => this.refreshText());
    }
    refreshText() {
        let color = !this._currentMonth ? grayText : (this._toggle.isOn || this._datas != null) ? csharp_UnityEngine_1.Color.white : blackText;
        this._dateTxt.color = color;
        this._moneyTxt.color = color;
    }
    setDate(date, day, currentMonth) {
        this._date = date;
        this._currentMonth = currentMonth;
        this._dateTxt.text = day.toString();
        this._toggle.interactable = currentMonth;
    }
    setData(money, average, datas) {
        this._datas = datas;
        let state = money <= average || average <= 0;
        this._moneyTxt.text = money > 0 ? ("-" + money) : datas ? money.toString() : "";
        this.transform.name = money.toString();
        this._toggle.targetGraphic.color = (!this._currentMonth || datas == null) ? gray : state ? blue : red;
        this.refreshText();
    }
}
class ListItem extends jsComponent_1.JsComponent {
    get datas() { return this._datas; }
    get type() { return this._type; }
    Awake() {
        this.initComponents();
    }
    initComponents() {
        this._icomImg = this.transform.Find("Icon").GetComponent("Image");
        this._typeTxt = this.transform.Find("Type").GetComponent("Text");
        this._contentTxt = this.transform.Find("Content").GetComponent("Text");
    }
    setData(icon, name, money, color) {
        this._icomImg.sprite = icon;
        this._typeTxt.text = name;
        this._contentTxt.text = money;
        this._icomImg.color = this._typeTxt.color = this._contentTxt.color = color;
    }
    setDatas(type, datas) {
        this._type = type;
        this._datas = datas;
    }
}
class GraphItem extends jsComponent_1.JsComponent {
    Awake() {
        this.initComponents();
    }
    initComponents() {
        this._ratioImg = this.transform.Find("Ratio").GetComponent("Image");
        this._typeImg = this.transform.Find("Type/Image").GetComponent("Image");
        this._typeTxt = this.transform.Find("Type/Text").GetComponent("Text");
    }
    setAngle(angle, startAngle) {
        this._ratioImg.fillAmount = angle / 360.0;
        this._ratioImg.transform.localEulerAngles = csharp_UnityEngine_1.Vector3.op_Multiply(csharp_UnityEngine_1.Vector3.forward, startAngle);
        let direction = csharp_UnityEngine_1.Quaternion.op_Multiply(csharp_UnityEngine_1.Quaternion.AngleAxis(startAngle - angle * 0.5, csharp_UnityEngine_1.Vector3.forward), csharp_UnityEngine_1.Vector3.down).normalized;
        this._typeImg.transform.parent.localPosition = csharp_UnityEngine_1.Vector3.op_Multiply(direction, 180);
    }
    setType(sprite, text, color) {
        this._typeImg.sprite = sprite;
        this._typeTxt.text = text;
        this._ratioImg.color = this._typeImg.color = this._typeTxt.color = color;
    }
    setTypeActive(active) {
        this._typeImg.transform.parent.gameObject.SetActive(active);
    }
}
class DetailsItem extends jsComponent_1.JsComponent {
    Awake() {
        this.initComponents();
    }
    initComponents() {
        this._typeTxt = this.transform.Find("Type").GetComponent("Text");
        this._contentTxt = this.transform.Find("Content").GetComponent("Text");
    }
    setData(type, content) {
        this._typeTxt.text = type;
        this._contentTxt.text = content;
    }
}
class TypeData {
    static getType(type) {
        let names = {
            [1]: "杂项",
            [2]: "餐饮",
            [3]: "交通",
            [4]: "购物",
            [5]: "生活",
            [6]: "收入",
            [7]: "娱乐",
            [9]: "通讯",
            [10]: "学习",
            [11]: "医疗",
        };
        return names[type] ?? "Unknown";
    }
    static getTag(type) {
        return this._tagDatas[type] ?? [];
    }
    static getTagIndex(type, tagName) {
        let data = this._tagDatas[type];
        if (data && tagName) {
            for (let i = 0; i < data.length; i++) {
                if (data[i] === tagName)
                    return i;
            }
        }
        return -1;
    }
    static getTagName(type, tagIndex) {
        let data = this._tagDatas[type];
        if (data && tagIndex >= 0 && tagIndex < data.length) {
            return data[tagIndex];
        }
        return undefined;
    }
}
TypeData._tagDatas = {
    [2]: ["早餐", "午餐", "晚餐", "买菜"],
    [3]: ["打车", "地铁", "火车", "机票", "停车费", "加油", "交通", "公交车"],
    [4]: ["服饰", "护肤彩妆", "美容", "零食"],
    [5]: ["水电气", "住房", "日用品"],
    [6]: ["工资", "红包", "投资", "还款"],
    [7]: ["电影", "游戏", "KTV", "运动", "旅游"],
    [9]: ["话费", "网络费"],
    [10]: ["书籍", "学费", "培训", "考试", "文具"],
    [11]: ["医院", "药品", "健身保健"],
};
class RecordView extends jsComponent_1.JsComponent {
    constructor() {
        super(...arguments);
        this._optLeft = "";
        this._optRight = "";
        this._optSymbol = "";
        this._optOk = false;
        this._stateType = 0;
    }
    Awake() {
        this.initListeners();
        this.initPools();
    }
    OnEnable() {
        let date = csharp_System_1.DateTime.Now;
        this._dateTxt.text = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
        this._typeTogs.get_Item(1).isOn = true;
        this._typeTogs.get_Item(1).onValueChanged.Invoke(true);
        this.optClear();
    }
    initListeners() {
        for (let i = 0; i < this._typeTogs.Length; i++) {
            let tog = this._typeTogs.get_Item(i);
            let type = parseInt(tog.name);
            let text = tog.transform.Find("Text").GetComponent("Text");
            let icon = tog.transform.Find("Background").GetComponent("Image").sprite;
            tog.onValueChanged.AddListener(on => {
                if (on) {
                    this.setType(type, icon, text.text, text.color);
                }
            });
        }
        for (let i = 0; i < this._keyboardTrf.childCount; i++) {
            let child = this._keyboardTrf.GetChild(i);
            child.GetComponent("Button").onClick.AddListener(() => {
                this.setInput(child.name);
            });
        }
    }
    initPools() {
        let pool = new objectPool_1.ObjectPool();
        pool.createEvent = () => {
            let ins = csharp_UnityEngine_1.GameObject.Instantiate(this._tagItem);
            ins.SetParent(this._tagParent);
            ins.localScale = csharp_UnityEngine_1.Vector3.one;
            let item = new TagItem(ins);
            return item;
        };
        pool.activeEvent = item => {
            item.gameObject.SetActive(true);
            item.transform.SetAsLastSibling();
            item.reset();
        };
        pool.releaseEvent = item => item.gameObject.SetActive(false);
        this._tagItem.gameObject.SetActive(false);
        this._tagPool = pool;
    }
    setType(type, icon, text, color) {
        this._stateType = type;
        this._stateTypeImg.sprite = icon;
        this._stateTypeTxt.text = text;
        this._stateTypeTxt.color = color;
        this._tagPool.releaseAll();
        for (let tag of TypeData.getTag(type)) {
            this._tagPool.active().text.text = tag;
        }
    }
    setInput(symbol) {
        let left_len = this._optLeft.length;
        let right_len = this._optRight.length;
        switch (symbol) {
            case "ok":
                {
                    if (!this._optOk) {
                        let expr = this._optLeft + this._optSymbol + this._optRight;
                        while (expr.endsWith("+") || expr.endsWith("-")) {
                            expr = expr.substring(0, expr.length - 1);
                        }
                        this._optLeft = expr;
                        this._optSymbol = this._optRight = "";
                        this.optOk(true);
                        this.optEqual();
                    }
                    else {
                        this.optSave();
                    }
                }
                break;
            case "delete":
                {
                    if (this._optOk) {
                        this.optClear();
                        return;
                    }
                    if (right_len > 0)
                        this._optRight = this._optRight.substring(0, right_len - 1);
                    else if (this._optSymbol.length > 0)
                        this._optSymbol = "";
                    else if (left_len > 0) {
                        let expr = this._optLeft = this._optLeft.substring(0, left_len - 1);
                        if (expr.endsWith("+") || expr.endsWith("-")) {
                            this._optSymbol = expr.substring(expr.length - 1);
                            this._optLeft = expr.substring(0, expr.length - 1);
                        }
                    }
                    this.optOk(false);
                    this.optEqual();
                }
                break;
            case "+":
            case "-":
                {
                    if (right_len > 0) {
                        if (this._optLeft.length < 0) {
                            this._optLeft = this._optRight;
                        }
                        else {
                            this._optLeft = this._optLeft + this._optSymbol + this._optRight;
                        }
                        this._optRight = "";
                        this._optSymbol = symbol;
                    }
                    else if (this._optLeft.length > 0) {
                        this._optSymbol = symbol;
                    }
                    this.optOk(false);
                    this.optEqual();
                }
                break;
            case ".":
                {
                    let point = this._optRight.indexOf(".");
                    if (point < 0 && right_len > 0)
                        this._optRight += symbol;
                    this.optOk(false);
                    this.optEqual();
                }
                break;
            case "00":
                break;
            default:
                {
                    if (this._optOk) {
                        this.optClear();
                    }
                    let point = this._optRight.indexOf(".");
                    if (point < 0 && right_len < 9 || point >= 0 && right_len - point < 3) {
                        this._optRight += symbol;
                        if (this._optRight.startsWith("00"))
                            this._optRight = this._optRight.substring(1);
                    }
                    this.optOk(false);
                    this.optEqual();
                }
                break;
        }
    }
    optOk(ok) {
        this._optOk = ok;
        this._stateUpTxt.fontSize = ok ? 40 : 60;
        this._stateUpTxt.resizeTextMaxSize = ok ? 40 : 60;
        this._stateDownTxt.fontSize = !ok ? 40 : 60;
        this._stateDownTxt.resizeTextMaxSize = !ok ? 40 : 60;
    }
    optEqual() {
        let expr = this._optLeft + this._optSymbol + this._optRight;
        while (expr && (expr.endsWith("+") || expr.endsWith("-"))) {
            expr = expr.substring(0, expr.length - 1);
        }
        let result = eval(expr);
        this._stateDownTxt.text = (result ? result : 0) + "";
        this._stateUpTxt.text = this._optLeft + this._optSymbol + this._optRight;
    }
    optClear() {
        this._optLeft = this._optSymbol = this._optRight = "";
        this.optEqual();
    }
    optSave() {
        let expr = this._optLeft + this._optSymbol + this._optRight;
        while (expr && (expr.endsWith("+") || expr.endsWith("-"))) {
            expr = expr.substring(0, expr.length - 1);
        }
        let money = eval(expr);
        if (money && money !== NaN && money !== 0) {
            let entity = new export_1.RecordEntity();
            entity.money = money;
            entity.type = this._stateType;
            entity.tag_type = this.getTagActiveIndex();
            entity.remark = this._remarkInput.text;
            let date = csharp_System_1.DateTime.Now;
            entity.date = CS.System.String.Format("{0}-{1:00}-{2:00}", date.getFullYear(), date.getMonth() + 1, date.getDate());
            $.getInstance(boxMgr_1.BoxMgr).tip(0, "记录已保存");
            this.optClear();
        }
    }
    getTagActiveIndex() {
        let tagName = undefined;
        for (let item of this._tagPool.getActive()) {
            if (item.toggle.isOn) {
                tagName = item.text.text;
                break;
            }
        }
        return TypeData.getTagIndex(this._stateType, tagName);
    }
}
class DetailsView extends jsComponent_1.JsComponent {
    Awake() {
        this.initListeners();
        this.initPools();
        this.initState();
    }
    OnEnable() {
        let now = csharp_System_1.DateTime.Now;
        this._year = now.getFullYear();
        this._month = now.getMonth() + 1;
        this.refreshView();
    }
    initListeners() {
        this._dateLastBtn.onClick.AddListener(() => {
            if (this._year > 2010 || this._month > 1) {
                this._month--;
                if (this._month < 1) {
                    this._year--;
                    this._month = 12;
                }
                this.refreshView();
            }
        });
        this._dateNextBtn.onClick.AddListener(() => {
            if (this._year < 2035 || this._month < 5) {
                this._month++;
                if (this._month > 12) {
                    this._year++;
                    this._month = 1;
                }
                this.refreshView();
            }
        });
        this._setInput.onEndEdit.AddListener(text => {
            if (text && text.length > 0) {
                dbPlayerPrefs_1.DBPlayerPrefs.setNumber(`Budget.${this._year}-${this._month}`, parseFloat(text));
                this.refreshView();
            }
        });
    }
    initPools() {
        let pool1 = new objectPool_1.ObjectPool();
        pool1.createEvent = () => {
            let ins = csharp_UnityEngine_1.GameObject.Instantiate(this._viewItem);
            ins.SetParent(this._viewParent);
            ins.localScale = csharp_UnityEngine_1.Vector3.one;
            let item = new DateItem(ins);
            item.toggle.onValueChanged.AddListener(on => {
                if (on && item.currentMonth) {
                    this.refreshList(item.date, item.datas);
                }
            });
            return item;
        };
        pool1.activeEvent = item => {
            item.gameObject.SetActive(true);
            item.transform.SetAsLastSibling();
            item.toggle.isOn = false;
        };
        pool1.releaseEvent = item => item.gameObject.SetActive(false);
        let pool2 = new objectPool_1.ObjectPool();
        pool2.createEvent = () => {
            let ins = csharp_UnityEngine_1.GameObject.Instantiate(this._listItem);
            ins.SetParent(this._listParent);
            ins.localScale = csharp_UnityEngine_1.Vector3.one;
            return new ListItem(ins);
        };
        pool2.activeEvent = item => {
            item.gameObject.SetActive(true);
            item.transform.SetAsLastSibling();
        };
        pool2.releaseEvent = item => item.gameObject.SetActive(false);
        this._viewItem.gameObject.SetActive(false);
        this._listItem.gameObject.SetActive(false);
        this._viewPool = pool1;
        this._listPool = pool2;
    }
    initState() {
        this._recordIcons = $.getInstance(assetMgr_1.AssetMgr).Auto.loadAsset("Refs/RecordSprites", csharp_1.SpriteRefs);
        this._recordColors = $.getInstance(assetMgr_1.AssetMgr).Auto.loadAsset("Refs/RecordColors", csharp_1.ColorRefs);
    }
    refreshView() {
        let year = this._year, month = this._month;
        this._dateTxt.text = year + "." + month;
        this.refreshList("", undefined);
        let totalMoney = 0;
        let totalDatas = new Map();
        let datas = new Map();
        let start = CS.System.String.Format("{0}-{1:00}-01", year, month), end = CS.System.String.Format("{0}-{1:00}-31", year, month);
        let totalBudget = dbPlayerPrefs_1.DBPlayerPrefs.getNumber(`Budget.${year}-${month}`, 0);
        let averageBudget = totalBudget / this.getDays(year, month);
        let usable = totalBudget - totalMoney;
        this._usableTxt.text = (usable > 0 ? usable : 0).toString();
        this._setInput.interactable = false;
        this._setInput.text = totalBudget.toString();
        this._setInput.interactable = true;
        let currentMonth = false;
        let calendar = this.getCalendar(year, month);
        this._viewPool.releaseAll();
        for (let day of calendar) {
            if (day === 1)
                currentMonth = !currentMonth;
            let date = CS.System.String.Format("{0}-{1:00}-{2:00}", year, month, day);
            let item = this._viewPool.active();
            item.setDate(date, day, currentMonth);
            if (currentMonth && datas.has(date)) {
                item.setData(totalDatas.get(date), averageBudget, datas.get(date));
            }
            else {
                item.setData(0, averageBudget, undefined);
            }
        }
    }
    refreshList(title, datas) {
        this._listDateTxt.text = title.replace(/\-/g, ".");
        this._listPool.releaseAll();
        if (datas != null) {
            let total = new Map();
            for (let data of datas) {
                let type = data.type;
                if (total.has(type))
                    total.set(type, total.get(type) + data.money);
                else
                    total.set(type, data.money);
            }
            let arr = total.toArray((v, k) => ({ type: k, money: v }));
            arr.sort((v1, v2) => v1.money < v2.money ? 1 : -1);
            for (let data of arr) {
                let icon = this._recordIcons.get_Item(data.type + "");
                let color = this._recordColors.get_Item(data.type);
                let name = TypeData.getType(data.type);
                this._listPool.active().setData(icon, name, data.money.toString(), color);
            }
        }
    }
    getCalendar(year, month) {
        let date = new csharp_System_1.DateTime(year, month, 1);
        let last = date.AddDays(-1);
        let result = new Array();
        let week = date.DayOfWeek;
        let days = this.getDays(last.getFullYear(), last.getMonth() + 1);
        while (week > 0) {
            result.unshift(days);
            days--;
            week--;
        }
        days = this.getDays(date.Year, date.Month);
        for (let i = 1; i <= days; i++) {
            result.push(i);
        }
        days = 1;
        while (result.length % 7 !== 0) {
            result.push(days);
            days++;
        }
        return result;
    }
    getDays(year, month) {
        if (month === 2) {
            if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0)
                return 29;
            return 28;
        }
        if (month === 4 || month === 6 || month === 9 || month === 11) {
            return 30;
        }
        return 31;
    }
}
class OverviewView extends jsComponent_1.JsComponent {
    Awake() {
        this.initListeners();
        this.initPools();
        this.initState();
    }
    OnEnable() {
        let now = csharp_System_1.DateTime.Now;
        this._year = now.getFullYear();
        this._month = now.getMonth() + 1;
        this.refreshView();
    }
    initListeners() {
        this._dateLastBtn.onClick.AddListener(() => {
            if (this._year > 2010 || this._month > 1) {
                this._month--;
                if (this._month < 1) {
                    this._year--;
                    this._month = 12;
                }
                this.refreshView();
            }
        });
        this._dateNextBtn.onClick.AddListener(() => {
            if (this._year < 2035 || this._month < 5) {
                this._month++;
                if (this._month > 12) {
                    this._year++;
                    this._month = 1;
                }
                this.refreshView();
            }
        });
        this._detailsBgImg.GetComponent("Button").onClick.AddListener(() => {
            this.setDetailsActive(false);
        });
    }
    initPools() {
        let pool1 = new objectPool_1.ObjectPool();
        pool1.createEvent = () => {
            let ins = csharp_UnityEngine_1.GameObject.Instantiate(this._graphItem);
            ins.SetParent(this._graphParent);
            ins.localScale = csharp_UnityEngine_1.Vector3.one;
            ins.localPosition = this._graphItem.localPosition;
            return new GraphItem(ins);
        };
        pool1.activeEvent = item => {
            item.gameObject.SetActive(true);
            item.transform.SetAsLastSibling();
        };
        pool1.releaseEvent = item => item.gameObject.SetActive(false);
        let pool2 = new objectPool_1.ObjectPool();
        pool2.createEvent = () => {
            let ins = csharp_UnityEngine_1.GameObject.Instantiate(this._listItem);
            ins.SetParent(this._listParent);
            ins.localScale = csharp_UnityEngine_1.Vector3.one;
            let item = new ListItem(ins);
            item.gameObject.GetComponent("Button").onClick.AddListener(() => {
                if (item.datas) {
                    this.refreshDetails(item.type, item.datas);
                }
            });
            return item;
        };
        pool2.activeEvent = item => {
            item.gameObject.SetActive(true);
            item.transform.SetAsLastSibling();
        };
        pool2.releaseEvent = item => item.gameObject.SetActive(false);
        let pool3 = new objectPool_1.ObjectPool();
        pool3.createEvent = () => {
            let ins = csharp_UnityEngine_1.GameObject.Instantiate(this._detailsItem);
            ins.SetParent(this._detailsParent);
            ins.localScale = csharp_UnityEngine_1.Vector3.one;
            return new DetailsItem(ins);
        };
        pool3.activeEvent = item => {
            item.gameObject.SetActive(true);
            item.transform.SetAsLastSibling();
        };
        pool3.releaseEvent = item => item.gameObject.SetActive(false);
        this._graphItem.gameObject.SetActive(false);
        this._listItem.gameObject.SetActive(false);
        this._detailsItem.gameObject.SetActive(false);
        this._graphPool = pool1;
        this._listPool = pool2;
        this._detailsPool = pool3;
    }
    initState() {
        this._recordIcons = $.getInstance(assetMgr_1.AssetMgr).Auto.loadAsset("Refs/RecordSprites", csharp_1.SpriteRefs);
        this._recordColors = $.getInstance(assetMgr_1.AssetMgr).Auto.loadAsset("Refs/RecordColors", csharp_1.ColorRefs);
    }
    refreshView() {
        this.setDetailsActive(false);
        this._graphPool.releaseAll();
        this._listPool.releaseAll();
        this._detailsPool.releaseAll();
        let year = this._year, month = this._month;
        this._dateTxt.text = year + "." + month;
        let totalMoney = 0;
        let totalDatas = new Map();
        let datas = new Map();
        let start = CS.System.String.Format("{0}-{1:00}-01", year, month), end = CS.System.String.Format("{0}-{1:00}-31", year, month);
        let totalAngle = 360.0, minAngle = 3.6, startAngle = 0;
        if (datas.size > 1) {
            let min = minAngle / totalAngle;
            for (let money of totalDatas.values()) {
                let scale = money / totalMoney;
                if (scale < min)
                    totalAngle -= minAngle * (min - scale);
            }
        }
        let arr = totalDatas.toArray((v, k) => ({ type: k, money: v }));
        arr.sort((v1, v2) => v1.money < v2.money ? 1 : -1);
        let maxType = -1, maxValue = -1, maxColor = csharp_UnityEngine_1.Color.black;
        for (let i = 0; i < arr.length; i++) {
            let type = arr[i].type;
            let icon = this._recordIcons.get_Item(type + "");
            let color = this._recordColors.get_Item(type);
            let name = TypeData.getType(type);
            let money = totalDatas.get(type);
            let scale = totalMoney != 0 ? totalDatas.get(type) / totalMoney : 0;
            let angle = scale * totalAngle;
            if (angle < minAngle)
                angle = minAngle;
            startAngle += angle;
            let graph = this._graphPool.active();
            graph.setAngle(angle, startAngle);
            graph.setType(icon, name, color);
            graph.setTypeActive(scale > 0.01);
            let item = this._listPool.active();
            item.setData(icon, name, money.toString(), color);
            item.setDatas(type, datas.get(type));
            if (money > maxValue) {
                maxType = type;
                maxValue = money;
                maxColor = color;
            }
        }
        this._maxTxt.text = maxType > 0 ? `${TypeData.getType(maxType)}\n${maxValue}` : `暂无数据`;
        this._maxTxt.color = maxColor;
    }
    refreshDetails(type, datas) {
        this.setDetailsActive(true);
        this._detailsTxt.text = TypeData.getType(type);
        this._detailsImg.sprite = this._recordIcons.get_Item(type + "");
        this._detailsBgImg.color = this._recordColors.get_Item(type);
        let totalData = new Map();
        for (let data of datas) {
            let name = TypeData.getTagName(data.type, data.tag_type) ?? "其他";
            if (totalData.has(name))
                totalData.set(name, totalData.get(name) + data.money);
            else
                totalData.set(name, data.money);
        }
        let arr = totalData.toArray((v, k) => ({ name: k, money: v }));
        arr.sort((v1, v2) => v1.money < v2.money ? 1 : -1);
        this._detailsPool.releaseAll();
        for (let data of arr) {
            this._detailsPool.active().setData(data.name, data.money.toString());
        }
    }
    setDetailsActive(active) {
        this._listObj.SetActive(!active);
        this._detailsObj.SetActive(active);
    }
}
class MRecordPanel extends jsPanel_1.JsPanel {
    static __staticConstructor() {
        let prefab = $.getInstance(assetMgr_1.AssetMgr).Auto.loadPrefab("Prefabs/Game/Scene/MWorld/MRecordPanel");
        let trf = csharp_UnityEngine_1.GameObject.Instantiate(prefab).transform;
        $.getInstance(layerMgr_1.LayerMgr).Scene.addChild(trf);
        return new MRecordPanel(trf, true);
    }
    open() {
        super.open();
        $.getInstance(mPlayerBar_1.MPlayerBar).setTopActive(false);
        $.getInstance(mPlayerBar_1.MPlayerBar).setBottomActive(true);
        this._recordTog.isOn = true;
        this._recordTog.onValueChanged.Invoke(true);
    }
    Awake() {
        this.initListeners();
        this.initViews();
    }
    initListeners() {
        let togs = [this._recordTog, this._detailsTog, this._overviewTog];
        let objs = [this._recordObj, this._detailsObj, this._overviewObj];
        for (let tog of togs) {
            tog.onValueChanged.AddListener(on => {
                if (on) {
                    for (let obj of objs) {
                        obj.SetActive(obj.name === tog.name);
                    }
                }
            });
        }
    }
    initViews() {
        new RecordView(this._recordObj);
        new DetailsView(this._detailsObj);
        new OverviewView(this._overviewObj);
    }
}
exports.MRecordPanel = MRecordPanel;
//# sourceMappingURL=mRecordPanel.js.map