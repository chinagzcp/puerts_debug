"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollVertical = void 0;
const csharp_UnityEngine_1 = require("csharp.UnityEngine");
const csharp_UnityEngine_UI_1 = require("csharp.UnityEngine.UI");
const puerts_1 = require("puerts");
const jsComponent_1 = require("../../common/jsComponent");
class ScrollVertical extends jsComponent_1.JsComponent {
    constructor(trf, viewport, parent, item) {
        super(trf);
        this._spaceWidth = 0;
        this._spaceHeight = 0;
        this._paddingLeft = 0;
        this._paddingRight = 0;
        this._paddingTop = 0;
        this._paddingBottom = 0;
        this._width = 0;
        this._height = 0;
        this._row = 0;
        this._column = 0;
        this._needRefresh = false;
        this._datas = new Array();
        this._startIndex = 0;
        this._releaseItems = new Array();
        this._activeItems = new Array();
        if (viewport)
            this._viewport = viewport;
        if (parent)
            this._viewParent = parent;
        if (item)
            this._viewItem = item;
        this.initSizeInfo();
    }
    create(cb) {
        this._create = cb;
    }
    setCellSize(p) {
        let width = p.width ?? this._width;
        let height = p.height ?? this._height;
        if (this._width != width || this._height != height) {
            this._width = width;
            this._height = height;
            this.refresh();
        }
    }
    setCount(p) {
        let row = p.row ?? this._row;
        let column = p.column ?? this._column;
        if (row < 3)
            throw new Error("SET ROW ERROR: count must >=3 ");
        if (column < 1)
            throw new Error("SET COLUMN ERROR: count must >=1 ");
        if (this._row != row || this._column != column) {
            this._row = row;
            this._column = column;
            this.refresh();
        }
    }
    setSpacing(p) {
        let width = p.width ?? this._spaceWidth;
        let height = p.height ?? this._spaceHeight;
        if (this._spaceWidth != width || this._spaceHeight != height) {
            this._spaceWidth = width;
            this._spaceHeight = height;
            this.refresh();
        }
    }
    setPadding(p) {
        this._paddingLeft = p.left ?? this._paddingLeft;
        this._paddingRight = p.right ?? this._paddingRight;
        this._paddingTop = p.top ?? this._paddingTop;
        this._paddingBottom = p.bottom ?? this._paddingBottom;
        this.refresh();
    }
    refresh() {
        this.refreshContentSize();
        this.refreshContent();
    }
    resetPosition() {
        this._viewParent.localPosition = new csharp_UnityEngine_1.Vector3(this._viewParent.localPosition.x, 0, 0);
        this._needRefresh = true;
    }
    clearData() {
        this._datas = [];
        this._needRefresh = true;
    }
    addData(...datas) {
        this._datas.push(...datas);
        this._needRefresh = true;
    }
    remove(...datas) {
        for (let data of datas) {
            let index = this._datas.indexOf(data);
            if (index >= 0) {
                removeAt(this._datas, index);
            }
        }
        this._needRefresh = true;
    }
    Awake() {
        this.tryGetChildren();
        this.initSizeInfo();
        this.initListeners();
        this.refresh();
    }
    Update() {
        if (this._needRefresh) {
            this._needRefresh = false;
            this.refresh();
        }
    }
    tryGetChildren() {
        if (!this._viewport) {
            this._viewport = this.transform.Find("Viewport");
        }
        if (!this._viewParent && this._viewport) {
            this._viewParent = this._viewport.Find("Content");
        }
        if (!this._viewItem && this._viewParent) {
            this._viewItem = this._viewParent.Find("Item");
        }
        this._viewItem?.gameObject.SetActive(false);
    }
    initSizeInfo() {
        if (this._viewport && this._viewItem) {
            this._width = this._viewItem.sizeDelta.x;
            this._height = this._viewItem.sizeDelta.y;
            if (this._column <= 0) {
                let x = this._viewport.rect.size.x / (this._width + (this._spaceWidth ?? 0));
                x = Math.floor(x);
                this._column = x > 1 ? x : 1;
            }
            if (this._row < 3) {
                let y = this._viewport.rect.size.y / (this._height + (this._spaceHeight ?? 0));
                y = Math.floor(y);
                y += 2;
                this._row = y >= 3 ? y : 3;
            }
        }
    }
    initListeners() {
        let rect = this.transform.GetComponent(puerts_1.$typeof(csharp_UnityEngine_UI_1.ScrollRect));
        rect.onValueChanged.AddListener(_ => this.refreshIndex());
    }
    refreshIndex() {
        let startIndex = this.getStartIndex(this._viewParent.localPosition.y);
        if (startIndex != this._startIndex && startIndex >= 0) {
            let count = this._row * this._column;
            if (Math.abs(this._startIndex - startIndex) >= count || this._activeItems.length < count) {
                this._startIndex = startIndex;
                this.refreshContent();
            }
            else {
                while (this._startIndex != startIndex) {
                    let index = 0, item = undefined;
                    if (this._startIndex > startIndex) {
                        this._startIndex--;
                        index = this._startIndex;
                        item = this._activeItems.pop();
                        this._activeItems.unshift(item);
                        item.transform.SetAsFirstSibling();
                    }
                    else {
                        index = this._startIndex + count;
                        this._startIndex++;
                        item = this._activeItems.shift();
                        this._activeItems.push(item);
                        item.transform.SetAsLastSibling();
                    }
                    if (index >= 0 && index < this._datas.length) {
                        item.setData(this._datas[index], index);
                        item.transform.localPosition = this.getPosition(index);
                    }
                    else {
                        item.setActive(false);
                    }
                }
            }
        }
    }
    refreshContentSize() {
        if (this._viewParent && this._column > 0 && this._row > 0) {
            let y = this._datas.length / this._column;
            y = Math.floor(y);
            if (this._datas.length % this._column !== 0) {
                y++;
            }
            let height = y * (this._height + this._spaceHeight) + this._paddingTop + this._paddingBottom;
            this._viewParent.sizeDelta = new csharp_UnityEngine_1.Vector2(this._viewParent.sizeDelta.x, height);
        }
    }
    refreshContent() {
        if (!this._viewParent || !this._viewItem || !this._create)
            return;
        let items = this._activeItems;
        items.forEach(item => item.setActive(false));
        this._releaseItems.push(...items);
        this._activeItems = [];
        let count = this._row * this._column;
        for (let i = 0; i < count; i++) {
            let index = this._startIndex + i;
            if (index < this._datas.length) {
                let item = this.activeItem();
                item.setData(this._datas[index], index);
                item.transform.localPosition = this.getPosition(index);
            }
            else
                break;
        }
    }
    getStartIndex(y) {
        return Math.floor(y / (this._height + this._spaceHeight)) * this._column;
    }
    getPosition(index) {
        let x = index % this._column;
        let y = Math.floor(index / this._column);
        return new csharp_UnityEngine_1.Vector3((this._width + this._spaceWidth) * x + this._width * 0.5 + this._paddingLeft, -((this._height + this._spaceHeight) * y + this._height * 0.5 + this._paddingTop), 0);
    }
    activeItem() {
        let item = undefined;
        while (this._releaseItems.length > 0 && (!item || item.isDestroy())) {
            item = this._releaseItems.shift();
        }
        if (!item || item.isDestroy()) {
            let trf = csharp_UnityEngine_1.GameObject.Instantiate(this._viewItem);
            trf.SetParent(this._viewParent);
            trf.localScale = csharp_UnityEngine_1.Vector3.one;
            item = new Item(trf, this._create(trf));
        }
        this._activeItems.push(item);
        item.setActive(true);
        item.transform.SetAsLastSibling();
        return item;
    }
    releaseItem(item) {
        item.setActive(false);
        let index = this._activeItems.indexOf(item);
        if (index >= 0) {
            removeAt(this._activeItems, index);
        }
        if (!item.isDestroy()) {
            this._releaseItems.push(item);
        }
    }
}
exports.ScrollVertical = ScrollVertical;
class Item {
    constructor(trf, callback) {
        this._transform = trf;
        this._gameObject = trf.gameObject;
        this._callback = callback;
    }
    get transform() { return this._transform; }
    get gameObject() { return this._gameObject; }
    setData(data, index) {
        this._callback(data, index);
    }
    setActive(active) {
        this._gameObject.SetActive(active);
    }
    isDestroy() {
        return !this._gameObject || this._gameObject.Equals(undefined);
    }
}
function removeAt(arr, index) {
    if (index >= 0 && index < arr.length) {
        for (let i = index; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr.pop();
        return true;
    }
    return false;
}
//# sourceMappingURL=scrollVertical.js.map