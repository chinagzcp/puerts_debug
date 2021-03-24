"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemData = void 0;
const attribute_1 = require("../sqlite3/utils/attribute");
const __data_1 = require("./__data");
class ItemData extends __data_1.Data {
    constructor() {
        super(...arguments);
        this.icon = 0;
        this.type = 0;
        this.item_type = [];
        this.item_id = [];
        this.num = 0;
        this.drop_pro = [];
        this.drop_limit = 0;
        this.quality = 0;
        this.level = 0;
        this.key_id = 0;
        this.pile = 0;
        this.can_use = 0;
        this.hide = 0;
        this.item_num = [];
        this.world_types = 0;
        this.star = 0;
        this.can_sold = 0;
        this.sold = 0;
        this.five_element = 0;
        this.love_type = 0;
    }
}
__decorate([
    attribute_1.Column(`string`),
    __metadata("design:type", String)
], ItemData.prototype, "item_name", void 0);
__decorate([
    attribute_1.Column(`string`),
    __metadata("design:type", String)
], ItemData.prototype, "desc", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], ItemData.prototype, "icon", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], ItemData.prototype, "type", void 0);
__decorate([
    attribute_1.Column(`number[]`),
    __metadata("design:type", Array)
], ItemData.prototype, "item_type", void 0);
__decorate([
    attribute_1.Column(`number[]`),
    __metadata("design:type", Array)
], ItemData.prototype, "item_id", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], ItemData.prototype, "num", void 0);
__decorate([
    attribute_1.Column(`number[]`),
    __metadata("design:type", Array)
], ItemData.prototype, "drop_pro", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], ItemData.prototype, "drop_limit", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], ItemData.prototype, "quality", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], ItemData.prototype, "level", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], ItemData.prototype, "key_id", void 0);
__decorate([
    attribute_1.Column(`string`),
    __metadata("design:type", String)
], ItemData.prototype, "source", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], ItemData.prototype, "pile", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], ItemData.prototype, "can_use", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], ItemData.prototype, "hide", void 0);
__decorate([
    attribute_1.Column(`number[]`),
    __metadata("design:type", Array)
], ItemData.prototype, "item_num", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], ItemData.prototype, "world_types", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], ItemData.prototype, "star", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], ItemData.prototype, "can_sold", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], ItemData.prototype, "sold", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], ItemData.prototype, "five_element", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], ItemData.prototype, "love_type", void 0);
exports.ItemData = ItemData;
//# sourceMappingURL=itemData.js.map