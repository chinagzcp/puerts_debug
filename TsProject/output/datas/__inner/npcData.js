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
exports.NpcData = void 0;
const attribute_1 = require("../sqlite3/utils/attribute");
const __data_1 = require("./__data");
class NpcData extends __data_1.Data {
    constructor() {
        super(...arguments);
        this.level = 0;
        this.parent = [];
        this.broder = [];
        this.teacher = [];
        this.partner = [];
        this.iron_friend = [];
        this.child = [];
        this.younger_generation = [];
        this.apprentice = [];
        this.enjoy = [];
        this.believe = [];
        this.benefactor = [];
        this.disguise = [];
        this.hate = [];
        this.hatred = [];
        this.gen_gu = 0;
        this.wu_xing = 0;
        this.mood = 0;
        this.health = 0;
        this.attack = 0;
        this.defense = 0;
        this.critical = 0;
        this.hit = 0;
        this.speed = 0;
        this.dodge = 0;
        this.fight_back = 0;
        this.earth = 0;
        this.fire = 0;
        this.water = 0;
        this.wind = 0;
        this.lighting = 0;
        this.parry = 0;
        this.star = 0;
        this.reputation = 0;
        this.reputation_value = 0;
        this.status = 0;
        this.status_value = 0;
        this.favorite = 0;
        this.age = 0;
        this.gender = 0;
        this.can_see = 0;
        this.level_inition = 0;
        this.level_max = 0;
        this.levelup_available = 0;
        this.levelup_type = 0;
        this.outer_skill = 0;
        this.inner_skill = 0;
        this.shen_fa = 0;
        this.equipment_ids = [];
        this.bag_items_ids = [];
        this.bag_item_num = [];
        this.charm_type = 0;
        this.charm_value = 0;
        this.location = 0;
        this.model = 0;
        this.npc_types = 0;
        this.can_competition = 0;
        this.mood_type = 0;
        this.mood_value = 0;
        this.hero_types = [];
        this.extra_skill = 0;
    }
}
__decorate([
    attribute_1.Column(`string`),
    __metadata("design:type", String)
], NpcData.prototype, "npc_name", void 0);
__decorate([
    attribute_1.Column(`string`),
    __metadata("design:type", String)
], NpcData.prototype, "description", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "level", void 0);
__decorate([
    attribute_1.Column(`number[]`),
    __metadata("design:type", Array)
], NpcData.prototype, "parent", void 0);
__decorate([
    attribute_1.Column(`number[]`),
    __metadata("design:type", Array)
], NpcData.prototype, "broder", void 0);
__decorate([
    attribute_1.Column(`number[]`),
    __metadata("design:type", Array)
], NpcData.prototype, "teacher", void 0);
__decorate([
    attribute_1.Column(`number[]`),
    __metadata("design:type", Array)
], NpcData.prototype, "partner", void 0);
__decorate([
    attribute_1.Column(`number[]`),
    __metadata("design:type", Array)
], NpcData.prototype, "iron_friend", void 0);
__decorate([
    attribute_1.Column(`number[]`),
    __metadata("design:type", Array)
], NpcData.prototype, "child", void 0);
__decorate([
    attribute_1.Column(`number[]`),
    __metadata("design:type", Array)
], NpcData.prototype, "younger_generation", void 0);
__decorate([
    attribute_1.Column(`number[]`),
    __metadata("design:type", Array)
], NpcData.prototype, "apprentice", void 0);
__decorate([
    attribute_1.Column(`number[]`),
    __metadata("design:type", Array)
], NpcData.prototype, "enjoy", void 0);
__decorate([
    attribute_1.Column(`number[]`),
    __metadata("design:type", Array)
], NpcData.prototype, "believe", void 0);
__decorate([
    attribute_1.Column(`number[]`),
    __metadata("design:type", Array)
], NpcData.prototype, "benefactor", void 0);
__decorate([
    attribute_1.Column(`number[]`),
    __metadata("design:type", Array)
], NpcData.prototype, "disguise", void 0);
__decorate([
    attribute_1.Column(`number[]`),
    __metadata("design:type", Array)
], NpcData.prototype, "hate", void 0);
__decorate([
    attribute_1.Column(`number[]`),
    __metadata("design:type", Array)
], NpcData.prototype, "hatred", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "gen_gu", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "wu_xing", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "mood", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "health", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "attack", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "defense", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "critical", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "hit", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "speed", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "dodge", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "fight_back", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "earth", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "fire", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "water", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "wind", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "lighting", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "parry", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "star", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "reputation", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "reputation_value", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "status", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "status_value", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "favorite", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "age", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "gender", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "can_see", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "level_inition", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "level_max", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "levelup_available", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "levelup_type", void 0);
__decorate([
    attribute_1.Column(`string`),
    __metadata("design:type", String)
], NpcData.prototype, "icon", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "outer_skill", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "inner_skill", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "shen_fa", void 0);
__decorate([
    attribute_1.Column(`number[]`),
    __metadata("design:type", Array)
], NpcData.prototype, "equipment_ids", void 0);
__decorate([
    attribute_1.Column(`number[]`),
    __metadata("design:type", Array)
], NpcData.prototype, "bag_items_ids", void 0);
__decorate([
    attribute_1.Column(`number[]`),
    __metadata("design:type", Array)
], NpcData.prototype, "bag_item_num", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "charm_type", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "charm_value", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "location", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "model", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "npc_types", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "can_competition", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "mood_type", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "mood_value", void 0);
__decorate([
    attribute_1.Column(`number[]`),
    __metadata("design:type", Array)
], NpcData.prototype, "hero_types", void 0);
__decorate([
    attribute_1.Column(`number`),
    __metadata("design:type", Number)
], NpcData.prototype, "extra_skill", void 0);
exports.NpcData = NpcData;
//# sourceMappingURL=npcData.js.map