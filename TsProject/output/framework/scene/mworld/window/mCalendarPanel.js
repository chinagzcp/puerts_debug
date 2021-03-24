"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MCalendarPanel = void 0;
const puerts_1 = require("puerts");
const jsComponent_1 = require("../../../common/jsComponent");
const objectPool_1 = require("../../../../common/objectPool");
const csharp_DG_Tweening_1 = require("csharp.DG.Tweening");
const csharp_System_1 = require("csharp.System");
const csharp_UnityEngine_1 = require("csharp.UnityEngine");
const csharp_UnityEngine_EventSystems_1 = require("csharp.UnityEngine.EventSystems");
const assetMgr_1 = require("../../../common/assetMgr");
const jsPanel_1 = require("../../../jsPanel");
const layerMgr_1 = require("../../../common/layerMgr");
class Item extends jsComponent_1.JsComponent {
    constructor() {
        super(...arguments);
        this._currentMonth = false;
        this._select = false;
        this._year = 0;
        this._month = 0;
        this._day = 0;
    }
    get currentMonth() { return this._currentMonth; }
    get year() { return this._year; }
    get month() { return this._month; }
    get day() { return this._day; }
    Awake() {
        this.initComponents();
    }
    initComponents() {
        this._text = this.transform.Find("Text").GetComponent("Text");
        this._selectObj = this.transform.Find("Select").gameObject;
    }
    refresh() {
        this._selectObj.SetActive(this._select);
        this._text.text = this._day.toString();
        this._text.color = this._select ? csharp_UnityEngine_1.Color.white : this._currentMonth ? csharp_UnityEngine_1.Color.black : csharp_UnityEngine_1.Color.gray;
    }
    setData(year, month, day, currentMonth) {
        this._year = year;
        this._month = month;
        this._day = day;
        this._currentMonth = currentMonth;
        this.refresh();
    }
    setSelect(state) {
        this._select = state;
        this.refresh();
    }
    containPos(pos) {
        let size = this.transform.rect.size;
        let halfWidth = size.x * this.transform.lossyScale.x * 0.5, halfHeight = size.y * this.transform.lossyScale.y * 0.5;
        return pos.x >= this.transform.position.x - halfWidth && pos.x <= this.transform.position.x + halfWidth &&
            pos.y >= this.transform.position.y - halfHeight && pos.y <= this.transform.position.y + halfHeight;
    }
}
class MCalendarPanel extends jsPanel_1.JsPanel {
    static __staticConstructor() {
        let prefab = $.getInstance(assetMgr_1.AssetMgr).Auto.loadPrefab("Prefabs/Game/Scene/MWorld/Window/MCalendarPanel");
        let trf = csharp_UnityEngine_1.GameObject.Instantiate(prefab).transform;
        $.getInstance(layerMgr_1.LayerMgr).Scene.addChild(trf);
        return new MCalendarPanel(trf, true);
    }
    Awake() {
        this.initPools();
        this.initListeners();
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
        this.gameObject.GetComponent("Button").onClick.AddListener(() => {
            this.close();
        });
        let downTime = 0, downPos = csharp_UnityEngine_1.Vector2.zero, downState = false;
        let trigger = this._contentTrf.gameObject.AddComponent(puerts_1.$typeof(csharp_UnityEngine_EventSystems_1.EventTrigger)).triggers;
        trigger.Add(this.createEntry(csharp_UnityEngine_EventSystems_1.EventTriggerType.PointerDown, (data) => {
            if (!this._sequence || !this._sequence.IsActive()) {
                downState = true;
                downTime = csharp_UnityEngine_1.Time.time;
                downPos = data.position;
            }
        }));
        trigger.Add(this.createEntry(csharp_UnityEngine_EventSystems_1.EventTriggerType.Drag, (data) => {
            if (downState && (!this._sequence || !this._sequence.IsActive())) {
                let offset = csharp_UnityEngine_1.Vector2.op_Subtraction(data.position, downPos);
                this._contentTrf.localPosition = csharp_UnityEngine_1.Vector3.op_Addition(csharp_UnityEngine_1.Vector3.op_Multiply(csharp_UnityEngine_1.Vector3.right, offset.x), csharp_UnityEngine_1.Vector3.op_Multiply(csharp_UnityEngine_1.Vector3.up, this._contentTrf.localPosition.y));
            }
        }));
        trigger.Add(this.createEntry(csharp_UnityEngine_EventSystems_1.EventTriggerType.PointerUp, (data) => {
            if (!this._sequence || !this._sequence.IsActive()) {
                downState = false;
                if (csharp_UnityEngine_1.Time.time - downTime <= 0.2 && csharp_UnityEngine_1.Vector2.op_Subtraction(data.position, downPos).magnitude < 10) {
                    this._contentTrf.localPosition = csharp_UnityEngine_1.Vector3.op_Multiply(csharp_UnityEngine_1.Vector3.up, this._contentTrf.localPosition.y);
                    if (this._callback) {
                        for (let item of this._currendPool.getActive()) {
                            if (item.containPos(data.position) && item.currentMonth) {
                                this._callback(item.year, item.month, item.day);
                                break;
                            }
                        }
                    }
                }
                else {
                    let offsetX = csharp_UnityEngine_1.Vector2.op_Subtraction(data.position, downPos).x;
                    let speed = Math.abs(offsetX) / (csharp_UnityEngine_1.Time.time - downTime);
                    let pos = csharp_UnityEngine_1.Vector3.zero;
                    if (offsetX < -csharp_UnityEngine_1.Screen.width * 0.5 || speed > 1200 && offsetX < 10) {
                        pos = csharp_UnityEngine_1.Vector3.op_Multiply(csharp_UnityEngine_1.Vector3.left, 840);
                    }
                    else if (offsetX > csharp_UnityEngine_1.Screen.width * 0.5 || speed > 1200 && offsetX > 10) {
                        pos = csharp_UnityEngine_1.Vector3.op_Multiply(csharp_UnityEngine_1.Vector3.right, 840);
                    }
                    let time = csharp_UnityEngine_1.Vector3.op_Subtraction(this._contentTrf.localPosition, pos).magnitude / 1000;
                    let move = this._contentTrf.DOLocalMove(csharp_UnityEngine_1.Vector3.op_Addition(pos, csharp_UnityEngine_1.Vector3.op_Multiply(csharp_UnityEngine_1.Vector3.up, this._contentTrf.localPosition.y)), time > 0.3 ? time : 0.3).SetEase(csharp_DG_Tweening_1.Ease.Linear);
                    this._sequence = csharp_DG_Tweening_1.DOTween.Sequence().Append(move).AppendCallback(() => {
                        this._sequence = undefined;
                        this._contentTrf.localPosition = csharp_UnityEngine_1.Vector3.op_Multiply(csharp_UnityEngine_1.Vector3.up, this._contentTrf.localPosition.y);
                        if (pos.x > 0) {
                            this._month--;
                            if (this._month < 1) {
                                this._month = 12;
                                this._year--;
                            }
                        }
                        else {
                            this._month++;
                            if (this._month > 12) {
                                this._month = 1;
                                this._year++;
                            }
                        }
                        this.refreshView();
                    });
                }
            }
        }));
    }
    initPools() {
        let pool1 = new objectPool_1.ObjectPool();
        pool1.createEvent = () => {
            let ins = csharp_UnityEngine_1.GameObject.Instantiate(this._lastItem);
            ins.SetParent(this._lastParent);
            ins.localScale = csharp_UnityEngine_1.Vector3.one;
            return new Item(ins);
        };
        pool1.activeEvent = item => {
            item.gameObject.SetActive(true);
            item.transform.SetAsLastSibling();
        };
        pool1.releaseEvent = item => item.gameObject.SetActive(false);
        let pool2 = new objectPool_1.ObjectPool();
        pool2.createEvent = () => {
            let ins = csharp_UnityEngine_1.GameObject.Instantiate(this._currentItem);
            ins.SetParent(this._currentParent);
            ins.localScale = csharp_UnityEngine_1.Vector3.one;
            return new Item(ins);
        };
        pool2.activeEvent = item => {
            item.gameObject.SetActive(true);
            item.transform.SetAsLastSibling();
        };
        pool2.releaseEvent = item => item.gameObject.SetActive(false);
        let pool3 = new objectPool_1.ObjectPool();
        pool3.createEvent = () => {
            let ins = csharp_UnityEngine_1.GameObject.Instantiate(this._nextItem);
            ins.SetParent(this._nextParent);
            ins.localScale = csharp_UnityEngine_1.Vector3.one;
            return new Item(ins);
        };
        pool3.activeEvent = item => {
            item.gameObject.SetActive(true);
            item.transform.SetAsLastSibling();
        };
        pool3.releaseEvent = item => item.gameObject.SetActive(false);
        this._lastItem.gameObject.SetActive(false);
        this._currentItem.gameObject.SetActive(false);
        this._nextItem.gameObject.SetActive(false);
        this._lastPool = pool1;
        this._currendPool = pool2;
        this._nextPool = pool3;
    }
    refreshView() {
        let year = this._year, month = this._month;
        this._dateTxt.text = year + "年" + month + "月";
        if (this._sequence && this._sequence.IsActive())
            this._sequence.Kill();
        this._contentTrf.DOKill();
        this._contentTrf.localPosition = csharp_UnityEngine_1.Vector3.op_Multiply(csharp_UnityEngine_1.Vector3.up, this._contentTrf.localPosition.y);
        let _this = this;
        function working(pool, year, month) {
            let currentMonth = false;
            pool.releaseAll();
            for (let day of _this.getCalendar(year, month)) {
                if (day === 1)
                    currentMonth = !currentMonth;
                let item = pool.active();
                item.setData(year, month, day, currentMonth);
                item.setSelect(currentMonth && year === _this._selectYear && month === _this._selectMonth && day === _this._selectDay);
            }
        }
        ;
        year = this._year, month = this._month;
        working(this._currendPool, year, month);
        year = this._year, month = this._month - 1;
        if (month < 1) {
            month = 12;
            year--;
        }
        working(this._lastPool, year, month);
        year = this._year, month = this._month + 1;
        if (month > 12) {
            month = 1;
            year++;
        }
        ;
        working(this._nextPool, year, month);
    }
    createEntry(type, callback) {
        let entry = new csharp_UnityEngine_EventSystems_1.EventTrigger.Entry();
        entry.eventID = type;
        entry.callback.AddListener(callback);
        return entry;
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
    open(asLast) {
        super.open(asLast);
        this.refreshView();
    }
    close() {
        super.close();
        this._callback = undefined;
    }
    setDate(year, month, day) {
        this._selectYear = year;
        this._selectMonth = month;
        this._selectDay = day;
        this._year = year;
        this._month = month;
    }
    setCallback(callback) {
        this._callback = callback;
    }
}
exports.MCalendarPanel = MCalendarPanel;
//# sourceMappingURL=mCalendarPanel.js.map