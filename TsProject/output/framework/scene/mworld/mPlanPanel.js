"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MPlanPanel = void 0;
const CS = require("csharp");
const puerts_1 = require("puerts");
const jsComponent_1 = require("../../common/jsComponent");
const objectPool_1 = require("../../../common/objectPool");
const csharp_System_1 = require("csharp.System");
const csharp_UnityEngine_1 = require("csharp.UnityEngine");
const csharp_UnityEngine_EventSystems_1 = require("csharp.UnityEngine.EventSystems");
const csharp_UnityEngine_UI_1 = require("csharp.UnityEngine.UI");
const assetMgr_1 = require("../../common/assetMgr");
const jsPanel_1 = require("../../jsPanel");
const layerMgr_1 = require("../../common/layerMgr");
const mPlayerBar_1 = require("./mPlayerBar");
const mCalendarPanel_1 = require("./window/mCalendarPanel");
const export_1 = require("../../../client/datas/export");
class TimeItem extends jsComponent_1.JsComponent {
    Awake() {
        this.initComponents();
    }
    initComponents() {
        this._text = this.transform.GetComponent("Text");
    }
    setData(text) {
        this._text.text = text;
        this.name = text;
    }
}
const gray = new csharp_UnityEngine_1.Color(0xc8 / 255, 0xc8 / 255, 0xc8 / 255);
class PlanItem extends jsComponent_1.JsComponent {
    get index() { return this._index; }
    get type() { return this._type; }
    get select() { return this._select; }
    Awake() {
        this.initComponents();
    }
    initComponents() {
        this._image = this.transform.GetComponent("Image");
    }
    setData(type, sprite) {
        this._type = type;
        this._image.sprite = sprite;
    }
    setIndex(index) {
        this._index = index;
    }
    setSelect(select) {
        this._select = select;
        this._image.color = select ? gray : csharp_UnityEngine_1.Color.white;
    }
    containPos(pos) {
        let size = this.transform.rect.size;
        let halfWidth = size.x * this.transform.lossyScale.x * 0.5, halfHeight = size.y * this.transform.lossyScale.y * 0.5;
        return pos.x >= this.transform.position.x - halfWidth && pos.x <= this.transform.position.x + halfWidth &&
            pos.y >= this.transform.position.y - halfHeight && pos.y <= this.transform.position.y + halfHeight;
    }
}
class GraphItem extends jsComponent_1.JsComponent {
    Awake() {
        this.initComponents();
    }
    initComponents() {
        this._ratioImg = this.transform.Find("Ratio").GetComponent("Image");
        this._typeTxt = this.transform.Find("Type/Text").GetComponent("Text");
    }
    setAngle(angle, startAngle) {
        this._ratioImg.fillAmount = angle / 360.0;
        this._ratioImg.transform.localEulerAngles = csharp_UnityEngine_1.Vector3.op_Multiply(csharp_UnityEngine_1.Vector3.forward, startAngle);
        let direction = csharp_UnityEngine_1.Quaternion.op_Multiply(csharp_UnityEngine_1.Quaternion.AngleAxis(startAngle - angle * 0.5, csharp_UnityEngine_1.Vector3.forward), csharp_UnityEngine_1.Vector3.down).normalized;
        this._typeTxt.transform.parent.localPosition = csharp_UnityEngine_1.Vector3.op_Multiply(direction, 220);
        let anchorY = 0.5 - direction.y * 0.5;
        let trf = this._typeTxt.transform;
        trf.anchorMin = new csharp_UnityEngine_1.Vector2(0, anchorY);
        trf.anchorMax = new csharp_UnityEngine_1.Vector2(1, anchorY);
        trf.pivot = new csharp_UnityEngine_1.Vector2(0.5, anchorY);
    }
    setType(text, color) {
        this._typeTxt.text = text;
        this._ratioImg.color = this._typeTxt.color = color;
    }
    setTypeActive(active) {
        this._typeTxt.transform.parent.gameObject.SetActive(active);
    }
}
class ListItem extends jsComponent_1.JsComponent {
    Awake() {
        this.initComponents();
    }
    initComponents() {
        this._typeTxt = this.transform.Find("Type").GetComponent("Text");
        this._contentTxt = this.transform.Find("Content").GetComponent("Text");
    }
    setData(name, money, color) {
        this._typeTxt.text = name;
        this._contentTxt.text = money;
        this._typeTxt.color = this._contentTxt.color = color;
    }
}
class PlanView extends jsComponent_1.JsComponent {
    Awake() {
        this.initListeners();
        this.initPools();
    }
    OnEnable() {
        let now = csharp_System_1.DateTime.Now;
        this._year = now.getFullYear();
        this._month = now.getMonth() + 1;
        this._day = now.getDate();
        this.refreshView();
    }
    initListeners() {
        this._dateBtn.onClick.AddListener(() => {
            let panel = $.getInstance(mCalendarPanel_1.MCalendarPanel);
            panel.setDate(this._year, this._month, this._day);
            panel.setCallback((y, m, d) => {
                panel.close();
                this._year = y;
                this._month = m;
                this._day = d;
                this.refreshView();
            });
            panel.open();
        });
        for (let i = 0; i < this._menuTrf.childCount; i++) {
            let child = this._menuTrf.GetChild(i);
            let type = parseInt(child.name);
            child.GetComponent("Button").onClick.AddListener(() => {
                let items = new Array();
                for (let item of this._planPool.getActive()) {
                    if (item.select) {
                        items.push(item);
                    }
                }
                if (items.length > 0) {
                }
            });
        }
        let _this = this;
        function getSelect(pos) {
            for (let item of _this._planPool.getActive()) {
                if (item.containPos(pos)) {
                    return item;
                }
            }
            return undefined;
        }
        let downTime = 0;
        let downPos = csharp_UnityEngine_1.Vector2.zero, downVec2 = csharp_UnityEngine_1.Vector2.zero;
        let downSelect = undefined, dragSelect = undefined;
        let dragState = 0;
        let remove = true;
        let scroll = this._timeScroll;
        let height = this._planScroll.transform.rect.size.y * this._planScroll.transform.lossyScale.y;
        let triggers = this._planScroll.gameObject.AddComponent(puerts_1.$typeof(csharp_UnityEngine_EventSystems_1.EventTrigger)).triggers;
        triggers.Add(this.createEntry(csharp_UnityEngine_EventSystems_1.EventTriggerType.UpdateSelected, (data) => {
            if (dragState === 0
                && (csharp_UnityEngine_1.Input.GetMouseButton(0) || csharp_UnityEngine_1.Input.touchCount === 1 && csharp_UnityEngine_1.Input.GetTouch(0).phase === csharp_UnityEngine_1.TouchPhase.Moved)) {
                let time = csharp_UnityEngine_1.Time.time - downTime;
                let distance = csharp_UnityEngine_1.Vector2.op_Subtraction(new csharp_UnityEngine_1.Vector2(csharp_UnityEngine_1.Input.mousePosition.x, csharp_UnityEngine_1.Input.mousePosition.y), downPos).magnitude;
                if (distance > 10) {
                    dragState = 1;
                }
                else if (time > 0.5) {
                    dragState = -1;
                    csharp_UnityEngine_1.Handheld.Vibrate();
                }
            }
        }));
        triggers.Add(this.createEntry(csharp_UnityEngine_EventSystems_1.EventTriggerType.PointerDown, (data) => {
            downTime = csharp_UnityEngine_1.Time.time;
            dragState = 0;
            dragSelect = undefined;
            downSelect = getSelect(data.position);
            downPos = data.position;
            downVec2 = scroll.normalizedPosition;
            scroll.vertical = false;
            scroll.velocity = csharp_UnityEngine_1.Vector2.zero;
        }));
        triggers.Add(this.createEntry(csharp_UnityEngine_EventSystems_1.EventTriggerType.PointerUp, (data) => {
            let time = csharp_UnityEngine_1.Time.time - downTime;
            let offset = csharp_UnityEngine_1.Vector2.op_Subtraction(data.position, downPos);
            if (time <= 0.2 && offset.magnitude < 10) {
                let item = getSelect(data.position);
                if (item && downSelect === item) {
                    item.setSelect(!item.select);
                }
            }
            downSelect = undefined;
            dragSelect = undefined;
            scroll.vertical = true;
            if (dragState === 1 && scroll.movementType === csharp_UnityEngine_UI_1.ScrollRect.MovementType.Elastic) {
                scroll.velocity = csharp_UnityEngine_1.Vector2.op_Multiply(csharp_UnityEngine_1.Vector2.up, offset.y / time);
            }
        }));
        triggers.Add(this.createEntry(csharp_UnityEngine_EventSystems_1.EventTriggerType.Drag, (data) => {
            let time = csharp_UnityEngine_1.Time.time - downTime;
            let offset = csharp_UnityEngine_1.Vector2.op_Subtraction(data.position, downPos);
            switch (dragState) {
                case 1:
                    let vec2 = csharp_UnityEngine_1.Vector2.op_Addition(downVec2, csharp_UnityEngine_1.Vector2.op_Multiply(csharp_UnityEngine_1.Vector2.down, offset.y / height));
                    if (vec2.y > 1)
                        vec2.y = 1;
                    if (vec2.y < 0)
                        vec2.y = 0;
                    scroll.normalizedPosition = vec2;
                    break;
                case -1:
                    if (offset.magnitude > 10) {
                        let item = getSelect(data.position);
                        if (item && item !== dragSelect) {
                            if (!item.select && (!dragSelect || !remove)) {
                                remove = false;
                                item.setSelect(true);
                            }
                            else if (!dragSelect || remove) {
                                remove = true;
                                item.setSelect(false);
                            }
                            dragSelect = item;
                        }
                    }
                    break;
            }
        }));
        triggers = this._timeScroll.gameObject.AddComponent(puerts_1.$typeof(csharp_UnityEngine_EventSystems_1.EventTrigger)).triggers;
        triggers.Add(this.createEntry(csharp_UnityEngine_EventSystems_1.EventTriggerType.PointerDown, (data) => {
            downTime = csharp_UnityEngine_1.Time.time;
            downPos = data.position;
        }));
        triggers.Add(this.createEntry(csharp_UnityEngine_EventSystems_1.EventTriggerType.PointerUp, (data) => {
            let time = csharp_UnityEngine_1.Time.time - downTime;
            let offset = csharp_UnityEngine_1.Vector2.op_Subtraction(data.position, downPos);
            if (time <= 0.2 && offset.magnitude < 10) {
                for (let item of this._planPool.getActive()) {
                    item.setSelect(false);
                }
            }
        }));
    }
    initPools() {
        let pool1 = new objectPool_1.ObjectPool();
        pool1.createEvent = () => {
            let ins = csharp_UnityEngine_1.GameObject.Instantiate(this._timeItem);
            ins.SetParent(this._timeParent);
            ins.localScale = csharp_UnityEngine_1.Vector3.one;
            return new TimeItem(ins);
        };
        pool1.activeEvent = item => {
            item.gameObject.SetActive(true);
            item.transform.SetAsLastSibling();
        };
        pool1.releaseEvent = item => item.gameObject.SetActive(false);
        let pool2 = new objectPool_1.ObjectPool();
        pool2.createEvent = () => {
            let ins = csharp_UnityEngine_1.GameObject.Instantiate(this._planItem);
            ins.SetParent(this._planParent);
            ins.localScale = csharp_UnityEngine_1.Vector3.one;
            return new PlanItem(ins);
        };
        pool2.activeEvent = item => {
            item.gameObject.SetActive(true);
            item.transform.SetAsLastSibling();
        };
        pool2.releaseEvent = item => item.gameObject.SetActive(false);
        this._timeItem.gameObject.SetActive(false);
        this._planItem.gameObject.SetActive(false);
        this._timePool = pool1;
        this._planPool = pool2;
    }
    createEntry(type, callback) {
        let entry = new csharp_UnityEngine_EventSystems_1.EventTrigger.Entry();
        entry.eventID = type;
        entry.callback.AddListener(callback);
        return entry;
    }
    refreshView() {
        let year = this._year, month = this._month, day = this._day;
        this._dateTxt.text = `${year}.${month}.${day}`;
        let date = CS.System.String.Format("{0}-{1:00}-{2:00}", year, month, day);
        let data = {};
        if (!data) {
            data = new export_1.PlanEntity();
            data.date = date;
        }
        this._timePool.releaseAll();
        this._planPool.releaseAll();
        for (let i = 1; i <= 48; i++) {
            let type = data.types[i] ?? 0;
            let sprite = type >= 0 && type < this._typeSprites.Length ? this._typeSprites.get_Item(type) : undefined;
            let plan = this._planPool.active();
            plan.setIndex(i);
            plan.setSelect(false);
            plan.setData(type, sprite);
            if (i % 2 == 0) {
                let time = this._timePool.active();
                time.setData(CS.System.String.Format("{0:00}:00", i / 2));
            }
        }
    }
}
class OverviewView extends jsComponent_1.JsComponent {
    Awake() {
        this.initPools();
        this.initListeners();
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
            return new ListItem(ins);
        };
        pool2.activeEvent = item => {
            item.gameObject.SetActive(true);
            item.transform.SetAsLastSibling();
        };
        pool2.releaseEvent = item => item.gameObject.SetActive(false);
        this._graphItem.gameObject.SetActive(false);
        this._listItem.gameObject.SetActive(false);
        this._graphPool = pool1;
        this._listPool = pool2;
    }
    refreshView() {
        let year = this._year, month = this._month;
        this._dateTxt.text = year + "." + month;
        let totalTime = 0;
        let datas = new Map();
        let start = CS.System.String.Format("{0}-{1:00}-01", year, month);
        let end = CS.System.String.Format("{0}-{1:00}-31", year, month);
        let arr = datas.toArray((v, k) => ({ time: v, type: k }));
        arr.sort((v1, v2) => v1.time < v2.time ? 1 : -1);
        let totalAngle = 360, spaceAngle = 0, startAngle = 0;
        if (arr.length > 0) {
            spaceAngle = 3.6;
            totalAngle -= spaceAngle * arr.length;
        }
        this._graphPool.releaseAll();
        this._listPool.releaseAll();
        let maxType = -1, maxValue = -1, maxColor = csharp_UnityEngine_1.Color.black;
        for (let data of arr) {
            let name = this.getTypeName(data.type);
            let color = this.getTypeColor(data.type);
            let scale = data.time / totalTime;
            let angle = totalAngle * scale;
            startAngle += angle + spaceAngle;
            let graph = this._graphPool.active();
            graph.setAngle(angle, startAngle);
            graph.setType(name + CS.System.String.Format("{0:0.0}%", scale * 100), color);
            let list = this._listPool.active();
            list.setData(name, CS.System.String.Format("{0:0.0}小时", data.time), color);
            if (data.time > maxValue) {
                maxValue = data.time;
                maxType = data.type;
                maxColor = color;
            }
        }
        this._maxTxt.text = maxType > 0 ? CS.System.String.Format("{0}\n{1}小时", this.getTypeName(maxType), maxValue) : "暂无数据";
        this._maxTxt.color = maxColor;
    }
    getTypeName(type) {
        let dict = {
            [1]: "休息",
            [2]: "工作",
            [3]: "运动",
            [4]: "学习",
            [5]: "健身",
            [6]: "其他",
        };
        return dict[type] ?? "UNKNOWN";
    }
    getTypeColor(type) {
        let dict = {
            [1]: new csharp_UnityEngine_1.Color(0x63 / 255.0, 0xAE / 255.0, 0xCE / 255.0),
            [2]: new csharp_UnityEngine_1.Color(0xE5 / 255.0, 0x67 / 255.0, 0x75 / 255.0),
            [3]: new csharp_UnityEngine_1.Color(0xB3 / 255.0, 0xB7 / 255.0, 0x49 / 255.0),
            [4]: new csharp_UnityEngine_1.Color(0xED / 255.0, 0xC6 / 255.0, 0x83 / 255.0),
            [5]: new csharp_UnityEngine_1.Color(0x83 / 255.0, 0xA7 / 255.0, 0xA6 / 255.0),
            [6]: new csharp_UnityEngine_1.Color(0xAF / 255.0, 0x9D / 255.0, 0xCA / 255.0),
        };
        return dict[type] ?? csharp_UnityEngine_1.Color.white;
    }
}
class MPlanPanel extends jsPanel_1.JsPanel {
    static __staticConstructor() {
        let prefab = $.getInstance(assetMgr_1.AssetMgr).Auto.loadPrefab("Prefabs/Scene/MWorld/MPlanPanel");
        let trf = csharp_UnityEngine_1.GameObject.Instantiate(prefab).transform;
        $.getInstance(layerMgr_1.LayerMgr).Scene.addChild(trf);
        return new MPlanPanel(trf);
    }
    open() {
        super.open();
        $.getInstance(mPlayerBar_1.MPlayerBar).setTopActive(false);
        $.getInstance(mPlayerBar_1.MPlayerBar).setBottomActive(true);
        this._planTog.isOn = true;
        this._planTog.onValueChanged.Invoke(true);
    }
    Awake() {
        this.initListeners();
        this.initState();
    }
    initListeners() {
        let togs = [this._planTog, this._overviewTog];
        let objs = [this._planObj, this._overviewObj];
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
    initState() {
        new PlanView(this._planObj);
        new OverviewView(this._overviewObj);
    }
}
exports.MPlanPanel = MPlanPanel;
//# sourceMappingURL=mPlanPanel.js.map