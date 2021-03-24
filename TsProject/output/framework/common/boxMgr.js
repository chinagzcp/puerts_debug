"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoxMgr = exports.BoxWindow = exports.BoxSlider = exports.BoxTip = void 0;
const layerMgr_1 = require("./layerMgr");
const assetMgr_1 = require("./assetMgr");
const csharp_UnityEngine_1 = require("csharp.UnityEngine");
const objectPool_1 = require("../../common/objectPool");
const generator_1 = require("../../common/generator");
const jsPanel_1 = require("../jsPanel");
class Box extends jsPanel_1.JsPanel {
    constructor(path) {
        let prefab = $.getInstance(assetMgr_1.AssetMgr).Auto.loadPrefab(path);
        let obj = csharp_UnityEngine_1.GameObject.Instantiate(prefab);
        $.getInstance(layerMgr_1.LayerMgr).Tip.addChild(obj.transform);
        super(obj);
    }
}
class BoxTip extends Box {
    constructor(style) {
        super("Prefabs/UI/UITip" + style);
        this._style = style;
        this.initComponents();
    }
    get style() { return this._style; }
    ;
    initComponents() {
        this._textTxt = this.transform.Find("Content/Text").GetComponent("Text");
    }
    setText(text) {
        this._textTxt.text = text;
        return this;
    }
    setTimeout(timeout) {
        let _this = this;
        function* doing() {
            yield new csharp_UnityEngine_1.WaitForSeconds(timeout);
            _this.close();
        }
        this._textTxt.StopAllCoroutines();
        this._textTxt.StartCoroutine(generator_1.cs_generator(doing()));
        return this;
    }
}
exports.BoxTip = BoxTip;
class BoxSlider extends Box {
    constructor(style) {
        super("Prefabs/UI/UISlider" + style);
        this._style = style;
        this.initComponents();
    }
    get style() { return this._style; }
    ;
    initComponents() {
        this._textTxt = this.transform.Find("Content/Text").GetComponent("Text");
        this._sliderTrf = this.transform.Find("Content/Slider/Image");
    }
    setValue(val) {
        this._sliderTrf.localScale = new csharp_UnityEngine_1.Vector3(val, 1, 1);
        return this;
    }
    setText(text) {
        this._textTxt.text = text;
        return this;
    }
}
exports.BoxSlider = BoxSlider;
class BoxWindow extends Box {
    constructor(style) {
        super("Prefabs/UI/UIWindow" + style);
        this._style = style;
        this.initComponents();
    }
    get style() { return this._style; }
    ;
    initComponents() {
        this._titleTxt = this.transform.Find("Content/Title").GetComponent("Text");
        this._textTxt = this.transform.Find("Content/Text").GetComponent("Text");
        this._buttons = new Array();
        let parent = this.transform.Find("Content/Buttons");
        for (let i = 0; i < parent.childCount; i++) {
            let child = parent.GetChild(i);
            this._buttons.push({
                button: child.GetComponent("Button"),
                text: child.Find("Text").GetComponent("Text")
            });
        }
    }
    close() {
        super.close();
        for (let i = 0; i < this._buttons.length; i++) {
            this._buttons[i].button.gameObject.SetActive(false);
            this._buttons[i].button.onClick.RemoveAllListeners();
        }
        return this;
    }
    setTitle(text) {
        this._titleTxt.text = text;
        return this;
    }
    setText(text) {
        this._textTxt.text = text;
        return this;
    }
    setButtons(...datas) {
        for (let i = 0; i < this._buttons.length; i++) {
            this._buttons[i].button.gameObject.SetActive(i < datas.length);
            if (i < datas.length) {
                this._buttons[i].button.onClick.RemoveAllListeners();
                this._buttons[i].button.onClick.AddListener(datas[i].callback);
                this._buttons[i].text.text = datas[i].text;
            }
        }
        return this;
    }
}
exports.BoxWindow = BoxWindow;
class BoxMgr {
    getPools(type) {
        let name = type.name + "Pools";
        let map = this[name];
        if (!map) {
            this[name] = map = new Map();
        }
        return map;
    }
    getPool(style, type) {
        let map = this.getPools(type);
        if (!map.has(style)) {
            let pool = new objectPool_1.ObjectPool();
            pool.createEvent = () => new type(style);
            pool.activeEvent = item => {
                item.open();
                item.transform.SetAsLastSibling();
            };
            pool.releaseEvent = item => item.close();
            pool.isValid = item => item && !item.isDestroy();
            map.set(style, pool);
        }
        let pool = map.get(style);
        for (let item of pool.getActive()) {
            if (!item.isActive())
                pool.release(item);
        }
        return pool;
    }
    getTip(style) {
        return this.getPool(style, BoxTip).active();
    }
    getSlider(style) {
        return this.getPool(style, BoxSlider).active();
    }
    getWindow(style) {
        return this.getPool(style, BoxWindow).active();
    }
    tip(style, text, timeout) {
        return this.getTip(style)
            .setText(text)
            .setTimeout(timeout !== undefined ? timeout : 2);
    }
    slider(style, text, val) {
        return this.getSlider(style)
            .setText(text)
            .setValue(val);
    }
    window(style, title, text, ...buttons) {
        return this.getWindow(style)
            .setTitle(title)
            .setText(text)
            .setButtons(...buttons);
    }
    close(box) {
        if (box instanceof BoxTip)
            this.getPool(box.style, BoxTip).release(box);
        else if (box instanceof BoxSlider)
            this.getPool(box.style, BoxSlider).release(box);
        else if (box instanceof BoxWindow)
            this.getPool(box.style, BoxWindow).release(box);
    }
    closeAll() {
        this.closeAllTip();
        this.closeAllSlider();
        this.closeAllWindow();
    }
    closeAllTip() {
        for (let pool of this.getPools(BoxTip).values()) {
            pool.releaseAll();
        }
    }
    closeAllSlider() {
        for (let pool of this.getPools(BoxSlider).values()) {
            pool.releaseAll();
        }
    }
    closeAllWindow() {
        for (let pool of this.getPools(BoxWindow).values()) {
            pool.releaseAll();
        }
    }
    dispose() {
        for (let pool of this.getPools(BoxTip).values()) {
            for (let box of pool.getAll()) {
                box.destroy();
            }
            pool.clear();
        }
        for (let pool of this.getPools(BoxSlider).values()) {
            for (let box of pool.getAll()) {
                box.destroy();
            }
            pool.clear();
        }
        for (let pool of this.getPools(BoxWindow).values()) {
            for (let box of pool.getAll()) {
                box.destroy();
            }
            pool.clear();
        }
    }
}
exports.BoxMgr = BoxMgr;
//# sourceMappingURL=boxMgr.js.map