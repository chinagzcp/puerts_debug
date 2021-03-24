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
exports.EquipData = void 0;
const attribute_1 = require("../sqlite3/utils/attribute");
const __data_1 = require("./__data");
class EquipData extends __data_1.Data {
    constructor() {
        super(...arguments);
        this.quality = 0;
        this.place = 0;
        this.attack = 0;
        this.defense = 0;
        this.health = 0;
        this.speed = 0;
        this.hit = 0;
        this.critical = 0;
        this.dodge = 0;
        this.parry = 0;
        this.fight_back = 0;
        this.equip_group_id = 0;
        this.milt_receive = 0;
        this.sold = 0;
        this.level_limit = 0;
        this.world_types = 0;
        this.star = 0;
        this.num = 0;
        this.equip_experience = 0;
        this.equipment_type = 0;
        this.five_attribute = 0;
    }
}
__decorate([
    attribute_1.Column(`string`),
    __metadata("design:type", String)
], EquipData.prototype, "equip_name", void 0);
__decorate([
    attribute_1.Column(`string`),
    __metadata("design:type", String)
], EquipData.prototype, "desc", void 0);
__decorate([
    attribute_1.Column(`string`),
    __metadata("design:type", String)
], EquipData.prototype, "source", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], EquipData.prototype, "quality", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], EquipData.prototype, "place", void 0);
__decorate([
    attribute_1.Column(`string`),
    __metadata("design:type", String)
], EquipData.prototype, "icon", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], EquipData.prototype, "attack", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], EquipData.prototype, "defense", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], EquipData.prototype, "health", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], EquipData.prototype, "speed", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], EquipData.prototype, "hit", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], EquipData.prototype, "critical", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], EquipData.prototype, "dodge", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], EquipData.prototype, "parry", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], EquipData.prototype, "fight_back", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], EquipData.prototype, "equip_group_id", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], EquipData.prototype, "milt_receive", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], EquipData.prototype, "sold", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], EquipData.prototype, "level_limit", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], EquipData.prototype, "world_types", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], EquipData.prototype, "star", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], EquipData.prototype, "num", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], EquipData.prototype, "equip_experience", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], EquipData.prototype, "equipment_type", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], EquipData.prototype, "five_attribute", void 0);
exports.EquipData = EquipData;
//# sourceMappingURL=equipData.js.map