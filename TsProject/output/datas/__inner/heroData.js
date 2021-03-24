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
exports.HeroData = void 0;
const attribute_1 = require("../sqlite3/utils/attribute");
const __data_1 = require("./__data");
class HeroData extends __data_1.Data {
    constructor() {
        super(...arguments);
        this.level = 0;
        this.health = 0;
        this.attack = 0;
        this.defense = 0;
        this.critical = 0;
        this.hit = 0;
        this.speed = 0;
        this.dodge = 0;
        this.fight_back = 0;
        this.parry = 0;
        this.auto_skills = [];
        this.auto_skills_round = [];
        this.not_auto_skills = [];
        this.not_auto_skills_round = [];
        this.five_attribute = 0;
        this.out_skill = 0;
        this.inner_skill = 0;
        this.shenfa_skill = 0;
        this.model = 0;
        this.occupation_type = 0;
        this.skill_damage = 0;
        this.split_defense = 0;
        this.uncover_control = 0;
        this.reduce_damage = 0;
        this.real_hurt = 0;
        this.critical_ratio = 0;
        this.torrent = 0;
        this.quality = 0;
        this.milt_receive = 0;
        this.extra_skill = 0;
        this.limit_star = 0;
        this.star = 0;
    }
}
__decorate([
    attribute_1.Column(`string`),
    __metadata("design:type", String)
], HeroData.prototype, "hero_name", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], HeroData.prototype, "level", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], HeroData.prototype, "health", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], HeroData.prototype, "attack", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], HeroData.prototype, "defense", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], HeroData.prototype, "critical", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], HeroData.prototype, "hit", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], HeroData.prototype, "speed", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], HeroData.prototype, "dodge", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], HeroData.prototype, "fight_back", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], HeroData.prototype, "parry", void 0);
__decorate([
    attribute_1.Column(`number[]`),
    __metadata("design:type", Array)
], HeroData.prototype, "auto_skills", void 0);
__decorate([
    attribute_1.Column(`number[]`),
    __metadata("design:type", Array)
], HeroData.prototype, "auto_skills_round", void 0);
__decorate([
    attribute_1.Column(`number[]`),
    __metadata("design:type", Array)
], HeroData.prototype, "not_auto_skills", void 0);
__decorate([
    attribute_1.Column(`number[]`),
    __metadata("design:type", Array)
], HeroData.prototype, "not_auto_skills_round", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], HeroData.prototype, "five_attribute", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], HeroData.prototype, "out_skill", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], HeroData.prototype, "inner_skill", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], HeroData.prototype, "shenfa_skill", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], HeroData.prototype, "model", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], HeroData.prototype, "occupation_type", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], HeroData.prototype, "skill_damage", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], HeroData.prototype, "split_defense", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], HeroData.prototype, "uncover_control", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], HeroData.prototype, "reduce_damage", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], HeroData.prototype, "real_hurt", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], HeroData.prototype, "critical_ratio", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], HeroData.prototype, "torrent", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], HeroData.prototype, "quality", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], HeroData.prototype, "milt_receive", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], HeroData.prototype, "extra_skill", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], HeroData.prototype, "limit_star", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], HeroData.prototype, "star", void 0);
exports.HeroData = HeroData;
//# sourceMappingURL=heroData.js.map