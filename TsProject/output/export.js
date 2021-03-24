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
function a() {
    function Column(type, alias) { return (target, key) => { }; }
    class AttackReportData {
        constructor() {
            this.dicFriends = {};
            this.dicEnemies = {};
            this.dicFriendsSkill = {};
            this.dicEnemiesSkill = {};
            this.dicAttackMessages = {};
        }
    }
    __decorate([
        Column(`{ [key: number]: number }`),
        __metadata("design:type", Object)
    ], AttackReportData.prototype, "dicFriends", void 0);
    __decorate([
        Column(`{ [key: number]: number }`),
        __metadata("design:type", Object)
    ], AttackReportData.prototype, "dicEnemies", void 0);
    __decorate([
        Column(`{ [key: number]: "SkillMessage"[] }`),
        __metadata("design:type", Object)
    ], AttackReportData.prototype, "dicFriendsSkill", void 0);
    __decorate([
        Column(`{ [key: number]: "SkillMessage"[] }`),
        __metadata("design:type", Object)
    ], AttackReportData.prototype, "dicEnemiesSkill", void 0);
    __decorate([
        Column(`{ [key: number]: { [key: number]: "AttackMessage" } }`),
        __metadata("design:type", Object)
    ], AttackReportData.prototype, "dicAttackMessages", void 0);
    class TimeItemData {
    }
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], TimeItemData.prototype, "time", void 0);
    class AccidentData {
        constructor() {
            this.id = 0;
            this.listNPC_id = [];
            this.listEvent_id = [];
            this.event_limit = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], AccidentData.prototype, "id", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], AccidentData.prototype, "location", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], AccidentData.prototype, "listNPC_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], AccidentData.prototype, "listEvent_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], AccidentData.prototype, "event_limit", void 0);
    class ActionData {
        constructor() {
            this.id = 0;
            this.type = 0;
            this.listEvent_id = [];
            this.listEvent_prob = [];
            this.num_limit = 0;
            this.interval = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ActionData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ActionData.prototype, "type", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ActionData.prototype, "listEvent_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ActionData.prototype, "listEvent_prob", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ActionData.prototype, "num_limit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ActionData.prototype, "interval", void 0);
    class ActionResultData {
        constructor() {
            this.guide_group_id = 0;
            this.reward_item_ids = [];
            this.reward_item_nums = [];
            this.next_action_type = 0;
            this.chat_data_id = 0;
            this.battle_data_id = 0;
            this.location_data_id = 0;
            this.action_data_id = 0;
            this.gift_data_id = 0;
            this.time_data_id = 0;
            this.invest_task_id = 0;
            this.prob_action_type = [];
            this.prob_action = [];
            this.prob_chat_data_id = 0;
            this.prob_battle_data_id = 0;
            this.prob_location_id = 0;
            this.prob_action_data_id = 0;
            this.prob_gift_data_id = 0;
            this.prob_time_data_id = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ActionResultData.prototype, "guide_group_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ActionResultData.prototype, "reward_item_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ActionResultData.prototype, "reward_item_nums", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ActionResultData.prototype, "next_action_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ActionResultData.prototype, "chat_data_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ActionResultData.prototype, "battle_data_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ActionResultData.prototype, "location_data_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ActionResultData.prototype, "action_data_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ActionResultData.prototype, "gift_data_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ActionResultData.prototype, "time_data_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ActionResultData.prototype, "invest_task_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ActionResultData.prototype, "prob_action_type", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ActionResultData.prototype, "prob_action", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ActionResultData.prototype, "prob_chat_data_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ActionResultData.prototype, "prob_battle_data_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ActionResultData.prototype, "prob_location_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ActionResultData.prototype, "prob_action_data_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ActionResultData.prototype, "prob_gift_data_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ActionResultData.prototype, "prob_time_data_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ActionResultData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ActionResultData.prototype, "data_id", void 0);
    class AdventureActionData {
        constructor() {
            this.id = 0;
            this.type = 0;
            this.actions = [];
            this.action1_reward_types = [];
            this.action1_reward_ids = [];
            this.action1_reward_num = [];
            this.action2_reward_types = [];
            this.action2_reward_ids = [];
            this.action2_reward_num = [];
            this.action3_reward_types = [];
            this.action3_reward_ids = [];
            this.action3_reward_num = [];
            this.desc_npc = [];
            this.actions_types = [];
            this.action1_gainOrlose = [];
            this.action1_complete_content = [];
            this.action2_gainOrlose = [];
            this.action2_complete_content = [];
            this.action3_gainOrlose = [];
            this.action3_complete_content = [];
            this.receive_items = [];
            this.receive_num = [];
            this.receive_prob = [];
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], AdventureActionData.prototype, "id", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], AdventureActionData.prototype, "name", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], AdventureActionData.prototype, "desc", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], AdventureActionData.prototype, "type", void 0);
    __decorate([
        Column(`string[]`),
        __metadata("design:type", Array)
    ], AdventureActionData.prototype, "actions", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], AdventureActionData.prototype, "action1_name", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], AdventureActionData.prototype, "action1_reward_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], AdventureActionData.prototype, "action1_reward_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], AdventureActionData.prototype, "action1_reward_num", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], AdventureActionData.prototype, "action2_name", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], AdventureActionData.prototype, "action2_reward_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], AdventureActionData.prototype, "action2_reward_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], AdventureActionData.prototype, "action2_reward_num", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], AdventureActionData.prototype, "action3_name", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], AdventureActionData.prototype, "action3_reward_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], AdventureActionData.prototype, "action3_reward_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], AdventureActionData.prototype, "action3_reward_num", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], AdventureActionData.prototype, "desc_npc", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], AdventureActionData.prototype, "actions_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], AdventureActionData.prototype, "action1_gainOrlose", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], AdventureActionData.prototype, "action1_complete_content", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], AdventureActionData.prototype, "action2_gainOrlose", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], AdventureActionData.prototype, "action2_complete_content", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], AdventureActionData.prototype, "action3_gainOrlose", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], AdventureActionData.prototype, "action3_complete_content", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], AdventureActionData.prototype, "receive_items", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], AdventureActionData.prototype, "receive_num", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], AdventureActionData.prototype, "receive_prob", void 0);
    class AdventureData {
        constructor() {
            this.id = 0;
            this.scene = 0;
            this.event_type = 0;
            this.event_ids = [];
            this.event_prob = [];
            this.event_limit = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], AdventureData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], AdventureData.prototype, "scene", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], AdventureData.prototype, "event_type", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], AdventureData.prototype, "event_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], AdventureData.prototype, "event_prob", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], AdventureData.prototype, "event_limit", void 0);
    class AdventureEventData {
        constructor() {
            this.id = 0;
            this.scene = 0;
            this.level_limit = [];
            this.num_range = [];
            this.event_type = 0;
            this.enemy_id = [];
            this.reward_types = [];
            this.reward_ids = [];
            this.reward_prop = [];
            this.reward_num = [];
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], AdventureEventData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], AdventureEventData.prototype, "scene", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], AdventureEventData.prototype, "level_limit", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], AdventureEventData.prototype, "num_range", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], AdventureEventData.prototype, "event_type", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], AdventureEventData.prototype, "enemy_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], AdventureEventData.prototype, "reward_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], AdventureEventData.prototype, "reward_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], AdventureEventData.prototype, "reward_prop", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], AdventureEventData.prototype, "reward_num", void 0);
    class AdventureFightData {
        constructor() {
            this.id = 0;
            this.location = [];
            this.scene = 0;
            this.num_range = [];
            this.event_type = 0;
            this.enemy_id = [];
            this.reward_types = [];
            this.reward_ids = [];
            this.reward_prop = [];
            this.reward_num = [];
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], AdventureFightData.prototype, "id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], AdventureFightData.prototype, "location", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], AdventureFightData.prototype, "scene", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], AdventureFightData.prototype, "num_range", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], AdventureFightData.prototype, "event_type", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], AdventureFightData.prototype, "enemy_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], AdventureFightData.prototype, "reward_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], AdventureFightData.prototype, "reward_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], AdventureFightData.prototype, "reward_prop", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], AdventureFightData.prototype, "reward_num", void 0);
    class BattleData {
        constructor() {
            this.force_battle = 0;
            this.friends_team_ids = [];
            this.friend_team_levels = [];
            this.enemy_team_ids = [];
            this.enemy_team_levels = [];
            this.level_id = 0;
            this.action_result_id = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], BattleData.prototype, "force_battle", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleData.prototype, "friends_team_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleData.prototype, "friend_team_levels", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleData.prototype, "enemy_team_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleData.prototype, "enemy_team_levels", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], BattleData.prototype, "level_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], BattleData.prototype, "action_result_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], BattleData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], BattleData.prototype, "data_id", void 0);
    class BattleStreamData {
        constructor() {
            this.id = 0;
            this.round = 0;
            this.attacker = [];
            this.be_attacker = [];
            this.is_attack_move = 0;
            this.teamA_damage_target = [];
            this.teamA_damages = [];
            this.teamB_damage_target = [];
            this.teamB_damages = [];
            this.teamA_total_health = [];
            this.teamB_total_health = [];
            this.teamA_healths = [];
            this.teamB__healths = [];
            this.teamA_energies = [];
            this.teamB_energies = [];
            this.teamA1_buffs_id = [];
            this.teamA1_buffs_round = [];
            this.teamA2_buffs_id = [];
            this.teamA2_buffs_round = [];
            this.teamA3_buffs_id = [];
            this.teamA3_buffs_round = [];
            this.teamA4_buffs_id = [];
            this.teamA4_buffs_round = [];
            this.teamA5_buffs_id = [];
            this.teamA5_buffs_round = [];
            this.teamB1_buffs_id = [];
            this.teamB1_buffs_round = [];
            this.teamB2_buffs_id = [];
            this.teamB2_buffs_round = [];
            this.teamB3_buffs_id = [];
            this.teamB3_buffs_round = [];
            this.teamB4_buffs_id = [];
            this.teamB4_buffs_round = [];
            this.teamB5_buffs_id = [];
            this.teamB5_buffs_round = [];
            this.teamA_death = [];
            this.teamB_death = [];
            this.round_finished_need_chat = 0;
            this.chat_dialog_npcs = [];
            this.chat_dialogs = [];
            this.round_add_heros = [];
            this.round_add_heros_position = [];
            this.winner = 0;
            this.battle_belong = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], BattleStreamData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], BattleStreamData.prototype, "round", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleStreamData.prototype, "attacker", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleStreamData.prototype, "be_attacker", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], BattleStreamData.prototype, "is_attack_move", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleStreamData.prototype, "teamA_damage_target", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleStreamData.prototype, "teamA_damages", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleStreamData.prototype, "teamB_damage_target", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleStreamData.prototype, "teamB_damages", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleStreamData.prototype, "teamA_total_health", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleStreamData.prototype, "teamB_total_health", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleStreamData.prototype, "teamA_healths", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleStreamData.prototype, "teamB__healths", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleStreamData.prototype, "teamA_energies", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleStreamData.prototype, "teamB_energies", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleStreamData.prototype, "teamA1_buffs_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleStreamData.prototype, "teamA1_buffs_round", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleStreamData.prototype, "teamA2_buffs_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleStreamData.prototype, "teamA2_buffs_round", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleStreamData.prototype, "teamA3_buffs_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleStreamData.prototype, "teamA3_buffs_round", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleStreamData.prototype, "teamA4_buffs_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleStreamData.prototype, "teamA4_buffs_round", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleStreamData.prototype, "teamA5_buffs_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleStreamData.prototype, "teamA5_buffs_round", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleStreamData.prototype, "teamB1_buffs_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleStreamData.prototype, "teamB1_buffs_round", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleStreamData.prototype, "teamB2_buffs_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleStreamData.prototype, "teamB2_buffs_round", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleStreamData.prototype, "teamB3_buffs_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleStreamData.prototype, "teamB3_buffs_round", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleStreamData.prototype, "teamB4_buffs_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleStreamData.prototype, "teamB4_buffs_round", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleStreamData.prototype, "teamB5_buffs_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleStreamData.prototype, "teamB5_buffs_round", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleStreamData.prototype, "teamA_death", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleStreamData.prototype, "teamB_death", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], BattleStreamData.prototype, "round_finished_need_chat", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleStreamData.prototype, "chat_dialog_npcs", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleStreamData.prototype, "chat_dialogs", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleStreamData.prototype, "round_add_heros", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], BattleStreamData.prototype, "round_add_heros_position", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], BattleStreamData.prototype, "winner", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], BattleStreamData.prototype, "battle_belong", void 0);
    class BroadcastData {
        constructor() {
            this.type = 0;
            this.priority = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], BroadcastData.prototype, "type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], BroadcastData.prototype, "priority", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], BroadcastData.prototype, "message", void 0);
    class BuffData {
        constructor() {
            this.id = 0;
            this.random = 0;
            this.round = 0;
            this.stack = 0;
            this.attribute_type = 0;
            this.data_type = 0;
            this.attribute_value = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], BuffData.prototype, "id", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], BuffData.prototype, "buff_name", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], BuffData.prototype, "random", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], BuffData.prototype, "round", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], BuffData.prototype, "stack", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], BuffData.prototype, "attribute_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], BuffData.prototype, "data_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], BuffData.prototype, "attribute_value", void 0);
    class BuffSkillData {
        constructor() {
            this.stack = 0;
            this.need_show = 0;
            this.icon = 0;
            this.priority = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], BuffSkillData.prototype, "name", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], BuffSkillData.prototype, "stack", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], BuffSkillData.prototype, "description", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], BuffSkillData.prototype, "need_show", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], BuffSkillData.prototype, "icon", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], BuffSkillData.prototype, "priority", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], BuffSkillData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], BuffSkillData.prototype, "data_id", void 0);
    class BuyPhysicalEnergyData {
        constructor() {
            this.num = 0;
            this.jewel = 0;
            this.physical_energy = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], BuyPhysicalEnergyData.prototype, "num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], BuyPhysicalEnergyData.prototype, "jewel", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], BuyPhysicalEnergyData.prototype, "physical_energy", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], BuyPhysicalEnergyData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], BuyPhysicalEnergyData.prototype, "data_id", void 0);
    class ChangeEnergyData {
        constructor() {
            this.id = 0;
            this.type = 0;
            this.max_limit = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ChangeEnergyData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ChangeEnergyData.prototype, "type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ChangeEnergyData.prototype, "max_limit", void 0);
    class ChatData {
        constructor() {
            this.npc_id = 0;
            this.dialong_npc_ids = [];
            this.dialog_ids = [];
            this.action_result_ids = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ChatData.prototype, "npc_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ChatData.prototype, "dialong_npc_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ChatData.prototype, "dialog_ids", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ChatData.prototype, "action_result_ids", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ChatData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ChatData.prototype, "data_id", void 0);
    class ChatTypeData {
        constructor() {
            this.type = 0;
            this.priority = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ChatTypeData.prototype, "type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ChatTypeData.prototype, "priority", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ChatTypeData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ChatTypeData.prototype, "data_id", void 0);
    class ChipData {
        constructor() {
            this.id = 0;
            this.target_type = 0;
            this.target_id = 0;
            this.num = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ChipData.prototype, "id", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], ChipData.prototype, "chip_name", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], ChipData.prototype, "icon", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], ChipData.prototype, "desc", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ChipData.prototype, "target_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ChipData.prototype, "target_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ChipData.prototype, "num", void 0);
    class CompoundData {
        constructor() {
            this.id = 0;
            this.target_id = 0;
            this.target_prob = 0;
            this.recipe = 0;
            this.num = 0;
            this.money_type = 0;
            this.money_num = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], CompoundData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], CompoundData.prototype, "target_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], CompoundData.prototype, "target_prob", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], CompoundData.prototype, "recipe", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], CompoundData.prototype, "num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], CompoundData.prototype, "money_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], CompoundData.prototype, "money_num", void 0);
    class DialogData {
        constructor() {
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], DialogData.prototype, "content", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], DialogData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], DialogData.prototype, "data_id", void 0);
    class DialogGroupData {
        constructor() {
            this.dialogs = [];
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], DialogGroupData.prototype, "dialogs", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], DialogGroupData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], DialogGroupData.prototype, "data_id", void 0);
    class DiscountData {
        constructor() {
            this.discounts = [];
            this.probs = [];
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], DiscountData.prototype, "discounts", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], DiscountData.prototype, "probs", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], DiscountData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], DiscountData.prototype, "data_id", void 0);
    class EnergyChangeSkillData {
        constructor() {
            this.id = 0;
            this.type = 0;
            this.transfer_rate = 0;
            this.experience = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EnergyChangeSkillData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EnergyChangeSkillData.prototype, "type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EnergyChangeSkillData.prototype, "transfer_rate", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EnergyChangeSkillData.prototype, "experience", void 0);
    class EnvelopeData {
        constructor() {
            this.npc_envelope_item_data_id = [];
            this.content = 0;
            this.action_result_data = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EnvelopeData.prototype, "npc_envelope_item_data_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EnvelopeData.prototype, "content", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EnvelopeData.prototype, "action_result_data", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EnvelopeData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EnvelopeData.prototype, "data_id", void 0);
    class EquipAttributeData {
        constructor() {
            this.group_id = 0;
            this.group_type = 0;
            this.valid_num1 = 0;
            this.attribute_type1 = 0;
            this.value_type1 = 0;
            this.value1 = 0;
            this.valid_num2 = 0;
            this.attribute_type2 = 0;
            this.value_type2 = 0;
            this.value2 = 0;
            this.valid_num3 = 0;
            this.attribute_type3 = 0;
            this.value_type3 = 0;
            this.value3 = 0;
            this.valid_num4 = 0;
            this.attribute_type4 = 0;
            this.value_type4 = 0;
            this.value4 = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipAttributeData.prototype, "group_id", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], EquipAttributeData.prototype, "group_name", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipAttributeData.prototype, "group_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipAttributeData.prototype, "valid_num1", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipAttributeData.prototype, "attribute_type1", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipAttributeData.prototype, "value_type1", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipAttributeData.prototype, "value1", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipAttributeData.prototype, "valid_num2", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipAttributeData.prototype, "attribute_type2", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipAttributeData.prototype, "value_type2", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipAttributeData.prototype, "value2", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipAttributeData.prototype, "valid_num3", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipAttributeData.prototype, "attribute_type3", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipAttributeData.prototype, "value_type3", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipAttributeData.prototype, "value3", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipAttributeData.prototype, "valid_num4", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipAttributeData.prototype, "attribute_type4", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipAttributeData.prototype, "value_type4", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipAttributeData.prototype, "value4", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipAttributeData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipAttributeData.prototype, "data_id", void 0);
    class EquipData {
        constructor() {
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
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], EquipData.prototype, "equip_name", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], EquipData.prototype, "desc", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], EquipData.prototype, "source", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipData.prototype, "quality", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipData.prototype, "place", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], EquipData.prototype, "icon", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipData.prototype, "attack", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipData.prototype, "defense", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipData.prototype, "health", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipData.prototype, "speed", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipData.prototype, "hit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipData.prototype, "critical", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipData.prototype, "dodge", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipData.prototype, "parry", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipData.prototype, "fight_back", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipData.prototype, "equip_group_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipData.prototype, "milt_receive", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipData.prototype, "sold", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipData.prototype, "level_limit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipData.prototype, "world_types", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipData.prototype, "star", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipData.prototype, "num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipData.prototype, "equip_experience", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipData.prototype, "equipment_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipData.prototype, "five_attribute", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipData.prototype, "data_id", void 0);
    class EquipForgeData {
        constructor() {
            this.compound_before = 0;
            this.compound_after = 0;
            this.compound_num = 0;
            this.consume_type = 0;
            this.consume_id = 0;
            this.consume_num = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipForgeData.prototype, "compound_before", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipForgeData.prototype, "compound_after", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipForgeData.prototype, "compound_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipForgeData.prototype, "consume_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipForgeData.prototype, "consume_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipForgeData.prototype, "consume_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipForgeData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipForgeData.prototype, "data_id", void 0);
    class EquipGroupData {
        constructor() {
            this.group_item_ids = [];
            this.group_type = 0;
            this.valid_num1 = 0;
            this.attribute_type1 = [];
            this.value_type1 = [];
            this.value1 = [];
            this.valid_num2 = 0;
            this.attribute_type2 = [];
            this.value_type2 = [];
            this.value2 = [];
            this.valid_num3 = 0;
            this.attribute_type3 = [];
            this.value_type3 = [];
            this.value3 = [];
            this.valid_num4 = 0;
            this.attribute_type4 = [];
            this.value_type4 = [];
            this.value4 = [];
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], EquipGroupData.prototype, "name", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], EquipGroupData.prototype, "desc", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EquipGroupData.prototype, "group_item_ids", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipGroupData.prototype, "group_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipGroupData.prototype, "valid_num1", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EquipGroupData.prototype, "attribute_type1", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EquipGroupData.prototype, "value_type1", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EquipGroupData.prototype, "value1", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipGroupData.prototype, "valid_num2", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EquipGroupData.prototype, "attribute_type2", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EquipGroupData.prototype, "value_type2", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EquipGroupData.prototype, "value2", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipGroupData.prototype, "valid_num3", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EquipGroupData.prototype, "attribute_type3", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EquipGroupData.prototype, "value_type3", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EquipGroupData.prototype, "value3", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipGroupData.prototype, "valid_num4", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EquipGroupData.prototype, "attribute_type4", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EquipGroupData.prototype, "value_type4", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EquipGroupData.prototype, "value4", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipGroupData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipGroupData.prototype, "data_id", void 0);
    class EquipInventData {
        constructor() {
            this.id = 0;
            this.type = 0;
            this.level_limit = 0;
            this.invent_types = 0;
            this.quality = 0;
            this.desc = 0;
            this.attribute_range = [];
            this.cost_type = 0;
            this.cost_ids = 0;
            this.cost_value = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipInventData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipInventData.prototype, "type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipInventData.prototype, "level_limit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipInventData.prototype, "invent_types", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipInventData.prototype, "quality", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipInventData.prototype, "desc", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EquipInventData.prototype, "attribute_range", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipInventData.prototype, "cost_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipInventData.prototype, "cost_ids", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipInventData.prototype, "cost_value", void 0);
    class EquipmentExchangeData {
        constructor() {
            this.quality_before = 0;
            this.consume_types = [];
            this.consume_ids = [];
            this.consume_nums = [];
            this.include_items = [];
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipmentExchangeData.prototype, "quality_before", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EquipmentExchangeData.prototype, "consume_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EquipmentExchangeData.prototype, "consume_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EquipmentExchangeData.prototype, "consume_nums", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EquipmentExchangeData.prototype, "include_items", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipmentExchangeData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipmentExchangeData.prototype, "data_id", void 0);
    class EquipmentFragmentData {
        constructor() {
            this.fragment_ids = [];
            this.fragment_nums = [];
            this.equipment_id = 0;
            this.icon = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EquipmentFragmentData.prototype, "fragment_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EquipmentFragmentData.prototype, "fragment_nums", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipmentFragmentData.prototype, "equipment_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipmentFragmentData.prototype, "icon", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipmentFragmentData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipmentFragmentData.prototype, "data_id", void 0);
    class EquipmentStrengthenData {
        constructor() {
            this.quality_type = 0;
            this.level = 0;
            this.experience = 0;
            this.attribute_add = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipmentStrengthenData.prototype, "quality_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipmentStrengthenData.prototype, "level", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipmentStrengthenData.prototype, "experience", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipmentStrengthenData.prototype, "attribute_add", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipmentStrengthenData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipmentStrengthenData.prototype, "data_id", void 0);
    class EventBossData {
        constructor() {
            this.kill_num = 0;
            this.boss_num = 0;
            this.power_down_limit = 0;
            this.power_up_limit = 0;
            this.drop_item_ids = [];
            this.drop_item_nums = [];
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventBossData.prototype, "kill_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventBossData.prototype, "boss_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventBossData.prototype, "power_down_limit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventBossData.prototype, "power_up_limit", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventBossData.prototype, "drop_item_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventBossData.prototype, "drop_item_nums", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventBossData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventBossData.prototype, "data_id", void 0);
    class EventData {
        constructor() {
            this.limit_level = 0;
            this.limit_reputation = 0;
            this.limit_hamony = 0;
            this.type = 0;
            this.item_ids = [];
            this.item_num = [];
            this.time_remain = 0;
            this.monster_ids = [];
            this.monster_num = [];
            this.sence = 0;
            this.npc_type = 0;
            this.npc_confirm = [];
            this.npc_ids = [];
            this.npc_prob = [];
            this.npc_value_min = [];
            this.cost_type = 0;
            this.cost_num = 0;
            this.actions = [];
            this.action1_reward_types = [];
            this.action1_reward_ids = [];
            this.action1_reward_num = [];
            this.action2_reward_types = [];
            this.action2_reward_ids = [];
            this.action2_reward_num = [];
            this.action3_reward_types = [];
            this.action3_reward_ids = [];
            this.action3_reward_num = [];
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], EventData.prototype, "event_name", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventData.prototype, "limit_level", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventData.prototype, "limit_reputation", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventData.prototype, "limit_hamony", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], EventData.prototype, "desc", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventData.prototype, "type", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventData.prototype, "item_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventData.prototype, "item_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventData.prototype, "time_remain", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventData.prototype, "monster_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventData.prototype, "monster_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventData.prototype, "sence", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventData.prototype, "npc_type", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventData.prototype, "npc_confirm", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventData.prototype, "npc_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventData.prototype, "npc_prob", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventData.prototype, "npc_value_min", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventData.prototype, "cost_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventData.prototype, "cost_num", void 0);
    __decorate([
        Column(`string[]`),
        __metadata("design:type", Array)
    ], EventData.prototype, "actions", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], EventData.prototype, "action1_name", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventData.prototype, "action1_reward_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventData.prototype, "action1_reward_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventData.prototype, "action1_reward_num", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], EventData.prototype, "action2_name", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventData.prototype, "action2_reward_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventData.prototype, "action2_reward_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventData.prototype, "action2_reward_num", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], EventData.prototype, "action3_name", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventData.prototype, "action3_reward_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventData.prototype, "action3_reward_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventData.prototype, "action3_reward_num", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], EventData.prototype, "action_dialog", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventData.prototype, "data_id", void 0);
    class EventDropData {
        constructor() {
            this.belong_id = 0;
            this.item_id = 0;
            this.item_num = 0;
            this.prob = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventDropData.prototype, "belong_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventDropData.prototype, "item_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventDropData.prototype, "item_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventDropData.prototype, "prob", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventDropData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventDropData.prototype, "data_id", void 0);
    class EventGroupData {
        constructor() {
            this.id = 0;
            this.event_ids = [];
            this.event_probs = [];
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventGroupData.prototype, "id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventGroupData.prototype, "event_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventGroupData.prototype, "event_probs", void 0);
    class EventMonsterData {
        constructor() {
            this.map_id = 0;
            this.monster_ids = [];
            this.monster_nums = [];
            this.experience = 0;
            this.experience_range = [];
            this.gold = 0;
            this.gold_range = [];
            this.drop_relate_id = 0;
            this.battle_map_id = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventMonsterData.prototype, "map_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventMonsterData.prototype, "monster_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventMonsterData.prototype, "monster_nums", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventMonsterData.prototype, "experience", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventMonsterData.prototype, "experience_range", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventMonsterData.prototype, "gold", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventMonsterData.prototype, "gold_range", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventMonsterData.prototype, "drop_relate_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventMonsterData.prototype, "battle_map_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventMonsterData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventMonsterData.prototype, "data_id", void 0);
    class ExchangeData {
        constructor() {
            this.id = 0;
            this.exchange_id = 0;
            this.receive_ids = [];
            this.receive_prob = [];
            this.receive_num = [];
            this.cost_type = 0;
            this.cost_id = 0;
            this.cost_value = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ExchangeData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ExchangeData.prototype, "exchange_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ExchangeData.prototype, "receive_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ExchangeData.prototype, "receive_prob", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ExchangeData.prototype, "receive_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ExchangeData.prototype, "cost_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ExchangeData.prototype, "cost_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ExchangeData.prototype, "cost_value", void 0);
    class ExchangeMoneyData {
        constructor() {
            this.id = 0;
            this.max = 0n;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ExchangeMoneyData.prototype, "id", void 0);
    __decorate([
        Column(`bigint`),
        __metadata("design:type", BigInt)
    ], ExchangeMoneyData.prototype, "max", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], ExchangeMoneyData.prototype, "content", void 0);
    class FightData {
        constructor() {
            this.id = 0;
            this.num_range = [];
            this.enemy_id = [];
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], FightData.prototype, "id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], FightData.prototype, "num_range", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], FightData.prototype, "enemy_id", void 0);
    class FiveElementData {
    }
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], FiveElementData.prototype, "tanShi", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], FiveElementData.prototype, "teBing", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], FiveElementData.prototype, "shiRe", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], FiveElementData.prototype, "xueYu", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], FiveElementData.prototype, "yangXu", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], FiveElementData.prototype, "yinXu", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], FiveElementData.prototype, "qiYu", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], FiveElementData.prototype, "qiXu", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], FiveElementData.prototype, "pingHe", void 0);
    class ForbiddenData {
        constructor() {
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], ForbiddenData.prototype, "type", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], ForbiddenData.prototype, "word", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ForbiddenData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ForbiddenData.prototype, "data_id", void 0);
    class ForgeData {
        constructor() {
            this.id = 0;
            this.target_ids = [];
            this.target_prob = [];
            this.recipe_ids = [];
            this.recipe_nums = [];
            this.cost_id = 0;
            this.cost_num = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ForgeData.prototype, "id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ForgeData.prototype, "target_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ForgeData.prototype, "target_prob", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ForgeData.prototype, "recipe_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ForgeData.prototype, "recipe_nums", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ForgeData.prototype, "cost_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ForgeData.prototype, "cost_num", void 0);
    class FriendlyDegressData {
        constructor() {
            this.friendly_type = 0;
            this.friendly_range = [];
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], FriendlyDegressData.prototype, "friendly_type", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], FriendlyDegressData.prototype, "friendly_range", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], FriendlyDegressData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], FriendlyDegressData.prototype, "data_id", void 0);
    class GiftData {
        constructor() {
            this.npc_id = 0;
            this.item_ids = [];
            this.item_nums = [];
            this.action_result_id = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], GiftData.prototype, "npc_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], GiftData.prototype, "item_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], GiftData.prototype, "item_nums", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], GiftData.prototype, "action_result_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], GiftData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], GiftData.prototype, "data_id", void 0);
    class GroceryShopData {
        constructor() {
            this.item_type = 0;
            this.item_id = 0;
            this.item_num = 0;
            this.money_type = 0;
            this.money_single_cost = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], GroceryShopData.prototype, "item_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], GroceryShopData.prototype, "item_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], GroceryShopData.prototype, "item_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], GroceryShopData.prototype, "money_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], GroceryShopData.prototype, "money_single_cost", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], GroceryShopData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], GroceryShopData.prototype, "data_id", void 0);
    class GuideData {
        constructor() {
            this.type = 0;
            this.condition = 0;
            this.info = 0;
            this.next_step = 0;
            this.save_step = 0;
            this.save_ui = 0;
            this.section_flag = 0;
            this.action_result_ids = 0;
            this.ui_hand_positions = [];
            this.ui_dialog_position = [];
            this.need_gold_hand = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], GuideData.prototype, "type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], GuideData.prototype, "condition", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], GuideData.prototype, "info", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], GuideData.prototype, "target", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], GuideData.prototype, "next_step", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], GuideData.prototype, "save_step", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], GuideData.prototype, "save_ui", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], GuideData.prototype, "section_flag", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], GuideData.prototype, "action_result_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], GuideData.prototype, "ui_hand_positions", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], GuideData.prototype, "ui_dialog_position", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], GuideData.prototype, "need_gold_hand", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], GuideData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], GuideData.prototype, "data_id", void 0);
    class HelpDespatchData {
        constructor() {
            this.help_npc = 0;
            this.dispatch_npc = 0;
            this.item_ids = [];
            this.item_nums = [];
            this.catch_types = [];
            this.catch_item_data_ids = [];
            this.can_see_types = [];
            this.envelope_data_ids = [];
            this.action_result_data_ids = [];
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HelpDespatchData.prototype, "help_npc", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HelpDespatchData.prototype, "dispatch_npc", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], HelpDespatchData.prototype, "item_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], HelpDespatchData.prototype, "item_nums", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], HelpDespatchData.prototype, "catch_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], HelpDespatchData.prototype, "catch_item_data_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], HelpDespatchData.prototype, "can_see_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], HelpDespatchData.prototype, "envelope_data_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], HelpDespatchData.prototype, "action_result_data_ids", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HelpDespatchData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HelpDespatchData.prototype, "data_id", void 0);
    class HeroAttributeUpData {
        constructor() {
            this.hero_id = 0;
            this.quality = 0;
            this.level_range = [];
            this.health = 0;
            this.attack = 0;
            this.defense = 0;
            this.critical = 0;
            this.hit = 0;
            this.speed = 0;
            this.dodge = 0;
            this.fight_back = 0;
            this.parry = 0;
            this.split_defense = 0;
            this.uncover_control = 0;
            this.reduce_damage = 0;
            this.real_hurt = 0;
            this.critical_ratio = 0;
            this.torrent = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroAttributeUpData.prototype, "hero_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroAttributeUpData.prototype, "quality", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], HeroAttributeUpData.prototype, "level_range", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroAttributeUpData.prototype, "health", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroAttributeUpData.prototype, "attack", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroAttributeUpData.prototype, "defense", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroAttributeUpData.prototype, "critical", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroAttributeUpData.prototype, "hit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroAttributeUpData.prototype, "speed", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroAttributeUpData.prototype, "dodge", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroAttributeUpData.prototype, "fight_back", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroAttributeUpData.prototype, "parry", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroAttributeUpData.prototype, "split_defense", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroAttributeUpData.prototype, "uncover_control", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroAttributeUpData.prototype, "reduce_damage", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroAttributeUpData.prototype, "real_hurt", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroAttributeUpData.prototype, "critical_ratio", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroAttributeUpData.prototype, "torrent", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroAttributeUpData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroAttributeUpData.prototype, "data_id", void 0);
    class HeroCompoundData {
        constructor() {
            this.fragment_id = 0;
            this.compound_num = 0;
            this.hero_ids = [];
            this.hero_stars = 0;
            this.hero_probs = [];
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroCompoundData.prototype, "fragment_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroCompoundData.prototype, "compound_num", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], HeroCompoundData.prototype, "hero_ids", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroCompoundData.prototype, "hero_stars", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], HeroCompoundData.prototype, "hero_probs", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroCompoundData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroCompoundData.prototype, "data_id", void 0);
    class HeroCreateData {
        constructor() {
            this.star = 0;
            this.create_level = 0;
            this.skill_level_limit = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroCreateData.prototype, "star", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroCreateData.prototype, "create_level", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], HeroCreateData.prototype, "create_name", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroCreateData.prototype, "skill_level_limit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroCreateData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroCreateData.prototype, "data_id", void 0);
    class HeroData {
        constructor() {
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
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], HeroData.prototype, "hero_name", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroData.prototype, "level", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroData.prototype, "health", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroData.prototype, "attack", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroData.prototype, "defense", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroData.prototype, "critical", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroData.prototype, "hit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroData.prototype, "speed", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroData.prototype, "dodge", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroData.prototype, "fight_back", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroData.prototype, "parry", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], HeroData.prototype, "auto_skills", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], HeroData.prototype, "auto_skills_round", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], HeroData.prototype, "not_auto_skills", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], HeroData.prototype, "not_auto_skills_round", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroData.prototype, "five_attribute", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroData.prototype, "out_skill", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroData.prototype, "inner_skill", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroData.prototype, "shenfa_skill", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroData.prototype, "model", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroData.prototype, "occupation_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroData.prototype, "skill_damage", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroData.prototype, "split_defense", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroData.prototype, "uncover_control", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroData.prototype, "reduce_damage", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroData.prototype, "real_hurt", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroData.prototype, "critical_ratio", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroData.prototype, "torrent", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroData.prototype, "quality", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroData.prototype, "milt_receive", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroData.prototype, "extra_skill", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroData.prototype, "limit_star", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroData.prototype, "star", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroData.prototype, "data_id", void 0);
    class HeroFragmentData {
        constructor() {
            this.fragment_ids = [];
            this.fragment_nums = [];
            this.hero_id = 0;
            this.icon = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], HeroFragmentData.prototype, "fragment_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], HeroFragmentData.prototype, "fragment_nums", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroFragmentData.prototype, "hero_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroFragmentData.prototype, "icon", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroFragmentData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroFragmentData.prototype, "data_id", void 0);
    class HeroLevelData {
        constructor() {
            this.level = 0;
            this.expreience = 0;
            this.attack = 0;
            this.defense = 0;
            this.health = 0;
            this.speed = 0;
            this.hit = 0;
            this.critical = 0;
            this.parry = 0;
            this.fight_back = 0;
            this.dodge = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroLevelData.prototype, "level", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroLevelData.prototype, "expreience", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroLevelData.prototype, "attack", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroLevelData.prototype, "defense", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroLevelData.prototype, "health", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroLevelData.prototype, "speed", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroLevelData.prototype, "hit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroLevelData.prototype, "critical", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroLevelData.prototype, "parry", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroLevelData.prototype, "fight_back", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroLevelData.prototype, "dodge", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroLevelData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroLevelData.prototype, "data_id", void 0);
    class HeroQualityData {
        constructor() {
            this.quality = 0;
            this.attack = 0;
            this.defend = 0;
            this.health = 0;
            this.speed = 0;
            this.hit = 0;
            this.dodge = 0;
            this.critical = 0;
            this.torrent = 0;
            this.agile = 0;
            this.skill_harm_rate = 0;
            this.critical_harm = 0;
            this.critical_reduce = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroQualityData.prototype, "quality", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], HeroQualityData.prototype, "quality_name", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroQualityData.prototype, "attack", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroQualityData.prototype, "defend", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroQualityData.prototype, "health", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroQualityData.prototype, "speed", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroQualityData.prototype, "hit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroQualityData.prototype, "dodge", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroQualityData.prototype, "critical", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroQualityData.prototype, "torrent", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroQualityData.prototype, "agile", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroQualityData.prototype, "skill_harm_rate", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroQualityData.prototype, "critical_harm", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroQualityData.prototype, "critical_reduce", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroQualityData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroQualityData.prototype, "data_id", void 0);
    class HeroQualityUpData {
        constructor() {
            this.base_quality = 0;
            this.consume_hero_types = [];
            this.consume_hero_quality = [];
            this.consume_hero_nums = [];
            this.consume_items = [];
            this.consume_item_nums = [];
            this.attribute_up = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroQualityUpData.prototype, "base_quality", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], HeroQualityUpData.prototype, "consume_hero_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], HeroQualityUpData.prototype, "consume_hero_quality", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], HeroQualityUpData.prototype, "consume_hero_nums", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], HeroQualityUpData.prototype, "consume_items", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], HeroQualityUpData.prototype, "consume_item_nums", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroQualityUpData.prototype, "attribute_up", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroQualityUpData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroQualityUpData.prototype, "data_id", void 0);
    class InventData {
        constructor() {
            this.id = 0;
            this.scene = 0;
            this.cost_type = 0;
            this.cost_value = 0;
            this.invent_type = 0;
            this.limit_level = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], InventData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], InventData.prototype, "scene", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], InventData.prototype, "cost_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], InventData.prototype, "cost_value", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], InventData.prototype, "invent_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], InventData.prototype, "limit_level", void 0);
    class InvestItemData {
        constructor() {
            this.location = 0;
            this.invest_dialog = 0;
            this.analysis_dialog = 0;
            this.task_item_types = [];
            this.task_ids = [];
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], InvestItemData.prototype, "location", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], InvestItemData.prototype, "invest_dialog", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], InvestItemData.prototype, "analysis_dialog", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], InvestItemData.prototype, "task_item_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], InvestItemData.prototype, "task_ids", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], InvestItemData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], InvestItemData.prototype, "data_id", void 0);
    class InvestLocationData {
        constructor() {
            this.gui_objects = [];
            this.gui_objects_show = [];
            this.item_objects = [];
            this.items = [];
            this.items_type = [];
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], InvestLocationData.prototype, "gui_objects", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], InvestLocationData.prototype, "gui_objects_show", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], InvestLocationData.prototype, "item_objects", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], InvestLocationData.prototype, "items", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], InvestLocationData.prototype, "items_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], InvestLocationData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], InvestLocationData.prototype, "data_id", void 0);
    class InvestTaskData {
        constructor() {
            this.desc = 0;
            this.task_item_ids = [];
            this.task_item_types = [];
            this.task_item_nums = [];
            this.task_npc_ids = [];
            this.task_npc_start_dialogs = [];
            this.task_npc_items = [];
            this.task_npc_items_nums = [];
            this.task_npc_action_types = [];
            this.task_npc_end_dialogs = [];
            this.task_complete_dialog = [];
            this.invest_locations = [];
            this.scene = [];
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], InvestTaskData.prototype, "title", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], InvestTaskData.prototype, "desc", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], InvestTaskData.prototype, "task_item_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], InvestTaskData.prototype, "task_item_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], InvestTaskData.prototype, "task_item_nums", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], InvestTaskData.prototype, "task_npc_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], InvestTaskData.prototype, "task_npc_start_dialogs", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], InvestTaskData.prototype, "task_npc_items", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], InvestTaskData.prototype, "task_npc_items_nums", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], InvestTaskData.prototype, "task_npc_action_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], InvestTaskData.prototype, "task_npc_end_dialogs", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], InvestTaskData.prototype, "task_complete_dialog", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], InvestTaskData.prototype, "invest_locations", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], InvestTaskData.prototype, "scene", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], InvestTaskData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], InvestTaskData.prototype, "data_id", void 0);
    class ItemData {
        constructor() {
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
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], ItemData.prototype, "item_name", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], ItemData.prototype, "desc", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemData.prototype, "icon", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemData.prototype, "type", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ItemData.prototype, "item_type", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ItemData.prototype, "item_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemData.prototype, "num", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ItemData.prototype, "drop_pro", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemData.prototype, "drop_limit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemData.prototype, "quality", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemData.prototype, "level", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemData.prototype, "key_id", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], ItemData.prototype, "source", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemData.prototype, "pile", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemData.prototype, "can_use", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemData.prototype, "hide", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ItemData.prototype, "item_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemData.prototype, "world_types", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemData.prototype, "star", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemData.prototype, "can_sold", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemData.prototype, "sold", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemData.prototype, "five_element", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemData.prototype, "love_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemData.prototype, "data_id", void 0);
    class ItemGiftValueData {
        constructor() {
            this.quality = 0;
            this.degress_types = [];
            this.degress_values = [];
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemGiftValueData.prototype, "quality", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ItemGiftValueData.prototype, "degress_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ItemGiftValueData.prototype, "degress_values", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemGiftValueData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemGiftValueData.prototype, "data_id", void 0);
    class ItemPelletUseData {
        constructor() {
            this.love_range = [];
            this.self_point = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ItemPelletUseData.prototype, "love_range", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemPelletUseData.prototype, "self_point", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemPelletUseData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemPelletUseData.prototype, "data_id", void 0);
    class ItemRealworldData {
        constructor() {
            this.id = 0;
            this.quality = 0;
            this.type = 0;
            this.stack = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemRealworldData.prototype, "id", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], ItemRealworldData.prototype, "item_name", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], ItemRealworldData.prototype, "desc", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemRealworldData.prototype, "quality", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemRealworldData.prototype, "type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemRealworldData.prototype, "stack", void 0);
    class ItemUseData {
        constructor() {
            this.can_use = 0;
            this.use_get_types = [];
            this.use_get_ids = [];
            this.use_get_nums = [];
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
            this.health_rate = 0;
            this.dialog_npc_ids = [];
            this.dialog_ids = [];
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemUseData.prototype, "can_use", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ItemUseData.prototype, "use_get_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ItemUseData.prototype, "use_get_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ItemUseData.prototype, "use_get_nums", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemUseData.prototype, "gen_gu", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemUseData.prototype, "wu_xing", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemUseData.prototype, "mood", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemUseData.prototype, "health", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemUseData.prototype, "attack", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemUseData.prototype, "defense", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemUseData.prototype, "critical", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemUseData.prototype, "hit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemUseData.prototype, "speed", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemUseData.prototype, "dodge", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemUseData.prototype, "fight_back", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemUseData.prototype, "earth", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemUseData.prototype, "fire", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemUseData.prototype, "water", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemUseData.prototype, "wind", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemUseData.prototype, "lighting", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemUseData.prototype, "parry", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemUseData.prototype, "health_rate", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ItemUseData.prototype, "dialog_npc_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ItemUseData.prototype, "dialog_ids", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemUseData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemUseData.prototype, "data_id", void 0);
    class JournalData {
        constructor() {
            this.scene = 0;
            this.monster_ids = 0;
            this.item_ids = [];
            this.item_types = [];
            this.item_ids_num = [];
            this.drop_probs = [];
            this.item_drop_limit = [];
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], JournalData.prototype, "scene", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], JournalData.prototype, "monster_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], JournalData.prototype, "item_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], JournalData.prototype, "item_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], JournalData.prototype, "item_ids_num", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], JournalData.prototype, "drop_probs", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], JournalData.prototype, "item_drop_limit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], JournalData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], JournalData.prototype, "data_id", void 0);
    class LevelData {
        constructor() {
            this.next_level = 0;
            this.level_req = 0;
            this.fight_limit = 0;
            this.recommend_power = 0;
            this.enemy_id = [];
            this.enemy_levels = [];
            this.campaign = 0;
            this.drop_id = [];
            this.drop_pro = [];
            this.drop_num = [];
            this.first_reward_type = [];
            this.first_reward_id = [];
            this.first_reward_num = [];
            this.level_degress = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], LevelData.prototype, "level_name", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], LevelData.prototype, "icon", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], LevelData.prototype, "next_level", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], LevelData.prototype, "level_req", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], LevelData.prototype, "fight_limit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], LevelData.prototype, "recommend_power", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], LevelData.prototype, "enemy_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], LevelData.prototype, "enemy_levels", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], LevelData.prototype, "campaign", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], LevelData.prototype, "drop_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], LevelData.prototype, "drop_pro", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], LevelData.prototype, "drop_num", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], LevelData.prototype, "first_reward_type", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], LevelData.prototype, "first_reward_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], LevelData.prototype, "first_reward_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], LevelData.prototype, "level_degress", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], LevelData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], LevelData.prototype, "data_id", void 0);
    class LevelReachData {
        constructor() {
            this.level_reach = 0;
            this.reward_item_ids = [];
            this.reward_item_types = [];
            this.reward_item_nums = [];
            this.reward_drop_probs = [];
            this.reward_drop_max = [];
            this.reward_daily_drop_limit = [];
            this.consume_type = 0;
            this.consume_id = 0;
            this.consume_num = 0;
            this.add_chance_consume_type = 0;
            this.add_chance_consume_nums = [];
            this.consume_time = 0;
            this.fight_time_limit = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], LevelReachData.prototype, "level_reach", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], LevelReachData.prototype, "reward_item_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], LevelReachData.prototype, "reward_item_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], LevelReachData.prototype, "reward_item_nums", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], LevelReachData.prototype, "reward_drop_probs", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], LevelReachData.prototype, "reward_drop_max", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], LevelReachData.prototype, "reward_daily_drop_limit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], LevelReachData.prototype, "consume_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], LevelReachData.prototype, "consume_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], LevelReachData.prototype, "consume_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], LevelReachData.prototype, "add_chance_consume_type", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], LevelReachData.prototype, "add_chance_consume_nums", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], LevelReachData.prototype, "consume_time", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], LevelReachData.prototype, "fight_time_limit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], LevelReachData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], LevelReachData.prototype, "data_id", void 0);
    class LocalLanguageData {
        constructor() {
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], LocalLanguageData.prototype, "ch", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], LocalLanguageData.prototype, "en", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], LocalLanguageData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], LocalLanguageData.prototype, "data_id", void 0);
    class LocationData {
        constructor() {
            this.location_id = 0;
            this.action_result_id = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], LocationData.prototype, "location_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], LocationData.prototype, "action_result_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], LocationData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], LocationData.prototype, "data_id", void 0);
    class MapData {
        constructor() {
            this.map_id = 0;
            this.map_condition = 0;
            this.lv = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MapData.prototype, "map_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MapData.prototype, "map_condition", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MapData.prototype, "lv", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MapData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MapData.prototype, "data_id", void 0);
    class MeltShopData {
        constructor() {
            this.shop_type = 0;
            this.item_type = 0;
            this.item_id = 0;
            this.money_type = 0;
            this.money_single_cost = 0;
            this.buy_limit_num = 0;
            this.world_types = 0;
            this.item_num = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MeltShopData.prototype, "shop_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MeltShopData.prototype, "item_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MeltShopData.prototype, "item_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MeltShopData.prototype, "money_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MeltShopData.prototype, "money_single_cost", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MeltShopData.prototype, "buy_limit_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MeltShopData.prototype, "world_types", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MeltShopData.prototype, "item_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MeltShopData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MeltShopData.prototype, "data_id", void 0);
    class MonsterLevelData {
        constructor() {
            this.level = 0;
            this.attack = 0;
            this.defense = 0;
            this.health = 0;
            this.speed = 0;
            this.hit = 0;
            this.critical = 0;
            this.parry = 0;
            this.fight_back = 0;
            this.dodge = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MonsterLevelData.prototype, "level", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MonsterLevelData.prototype, "attack", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MonsterLevelData.prototype, "defense", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MonsterLevelData.prototype, "health", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MonsterLevelData.prototype, "speed", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MonsterLevelData.prototype, "hit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MonsterLevelData.prototype, "critical", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MonsterLevelData.prototype, "parry", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MonsterLevelData.prototype, "fight_back", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MonsterLevelData.prototype, "dodge", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MonsterLevelData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MonsterLevelData.prototype, "data_id", void 0);
    class NameData {
        constructor() {
            this.id = 0;
            this.first_name = [];
            this.last_name = [];
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NameData.prototype, "id", void 0);
    __decorate([
        Column(`string[]`),
        __metadata("design:type", Array)
    ], NameData.prototype, "first_name", void 0);
    __decorate([
        Column(`string[]`),
        __metadata("design:type", Array)
    ], NameData.prototype, "last_name", void 0);
    class NpcActionData {
        constructor() {
            this.npc = 0;
            this.mood_type = 0;
            this.location = 0;
            this.action_types = [];
            this.action_type_probs = [];
            this.npc_envelope_npc_data_id = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcActionData.prototype, "npc", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcActionData.prototype, "mood_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcActionData.prototype, "location", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcActionData.prototype, "action_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcActionData.prototype, "action_type_probs", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcActionData.prototype, "npc_envelope_npc_data_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcActionData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcActionData.prototype, "data_id", void 0);
    class NpcBaseData {
        constructor() {
            this.item_ids = [];
            this.item_nums = [];
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcBaseData.prototype, "item_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcBaseData.prototype, "item_nums", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcBaseData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcBaseData.prototype, "data_id", void 0);
    class NpcChatRelateData {
        constructor() {
            this.npc = 0;
            this.dialog = 0;
            this.relate_items = [];
            this.relate_item_nums = [];
            this.ask_type = 0;
            this.request_type = 0;
            this.massive_request_type = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcChatRelateData.prototype, "npc", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcChatRelateData.prototype, "dialog", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcChatRelateData.prototype, "relate_items", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcChatRelateData.prototype, "relate_item_nums", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcChatRelateData.prototype, "ask_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcChatRelateData.prototype, "request_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcChatRelateData.prototype, "massive_request_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcChatRelateData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcChatRelateData.prototype, "data_id", void 0);
    class NpcCompetitionData {
        constructor() {
            this.id = 0;
            this.npc_id = 0;
            this.success_reward_types = [];
            this.success_reward_ids = [];
            this.success_reward_num = [];
            this.success_dialog = [];
            this.fail_reward_types = [];
            this.fail_reward_ids = [];
            this.fail_reward_num = [];
            this.fail_dialog = [];
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcCompetitionData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcCompetitionData.prototype, "npc_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcCompetitionData.prototype, "success_reward_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcCompetitionData.prototype, "success_reward_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcCompetitionData.prototype, "success_reward_num", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcCompetitionData.prototype, "success_dialog", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcCompetitionData.prototype, "fail_reward_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcCompetitionData.prototype, "fail_reward_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcCompetitionData.prototype, "fail_reward_num", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcCompetitionData.prototype, "fail_dialog", void 0);
    class NpcData {
        constructor() {
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
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], NpcData.prototype, "npc_name", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], NpcData.prototype, "description", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "level", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcData.prototype, "parent", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcData.prototype, "broder", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcData.prototype, "teacher", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcData.prototype, "partner", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcData.prototype, "iron_friend", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcData.prototype, "child", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcData.prototype, "younger_generation", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcData.prototype, "apprentice", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcData.prototype, "enjoy", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcData.prototype, "believe", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcData.prototype, "benefactor", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcData.prototype, "disguise", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcData.prototype, "hate", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcData.prototype, "hatred", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "gen_gu", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "wu_xing", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "mood", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "health", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "attack", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "defense", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "critical", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "hit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "speed", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "dodge", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "fight_back", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "earth", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "fire", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "water", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "wind", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "lighting", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "parry", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "star", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "reputation", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "reputation_value", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "status", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "status_value", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "favorite", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "age", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "gender", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "can_see", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "level_inition", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "level_max", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "levelup_available", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "levelup_type", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], NpcData.prototype, "icon", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "outer_skill", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "inner_skill", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "shen_fa", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcData.prototype, "equipment_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcData.prototype, "bag_items_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcData.prototype, "bag_item_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "charm_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "charm_value", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "location", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "model", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "npc_types", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "can_competition", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "mood_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "mood_value", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcData.prototype, "hero_types", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "extra_skill", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcData.prototype, "data_id", void 0);
    class NpcDialogData {
        constructor() {
            this.npc = 0;
            this.dialogs = 0;
            this.chat_dialogs = 0;
            this.condition_types = [];
            this.dialog_titles = [];
            this.dialog_group = [];
            this.item_ids = [];
            this.item_nums = [];
            this.reputation_value = 0;
            this.task_ids = [];
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcDialogData.prototype, "npc", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcDialogData.prototype, "dialogs", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcDialogData.prototype, "chat_dialogs", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcDialogData.prototype, "condition_types", void 0);
    __decorate([
        Column(`string[]`),
        __metadata("design:type", Array)
    ], NpcDialogData.prototype, "dialog_titles", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcDialogData.prototype, "dialog_group", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcDialogData.prototype, "item_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcDialogData.prototype, "item_nums", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcDialogData.prototype, "reputation_value", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcDialogData.prototype, "task_ids", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcDialogData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcDialogData.prototype, "data_id", void 0);
    class NpcEnvelopeContentData {
        constructor() {
            this.npc_id = 0;
            this.npc_envelope_data_ids = [];
            this.npc_envelope_data_ids_probs = [];
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEnvelopeContentData.prototype, "npc_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcEnvelopeContentData.prototype, "npc_envelope_data_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcEnvelopeContentData.prototype, "npc_envelope_data_ids_probs", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEnvelopeContentData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEnvelopeContentData.prototype, "data_id", void 0);
    class NpcEnvelopeData {
        constructor() {
            this.npc_envelope_item_data_id = [];
            this.content = 0;
            this.action_result_data = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcEnvelopeData.prototype, "npc_envelope_item_data_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEnvelopeData.prototype, "content", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEnvelopeData.prototype, "action_result_data", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEnvelopeData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEnvelopeData.prototype, "data_id", void 0);
    class NpcEnvelopeItemData {
        constructor() {
            this.relate_item_ids = [];
            this.relate_item_nums = [];
            this.relate_item_probs = [];
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcEnvelopeItemData.prototype, "relate_item_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcEnvelopeItemData.prototype, "relate_item_nums", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcEnvelopeItemData.prototype, "relate_item_probs", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEnvelopeItemData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEnvelopeItemData.prototype, "data_id", void 0);
    class NpcEnvelopeNpcData {
        constructor() {
            this.npc_ids = [];
            this.npc_probs = [];
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcEnvelopeNpcData.prototype, "npc_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcEnvelopeNpcData.prototype, "npc_probs", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEnvelopeNpcData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEnvelopeNpcData.prototype, "data_id", void 0);
    class NpcFriendlyRewardData {
        constructor() {
            this.npc_id = 0;
            this.friendly_degress = [];
            this.level = [];
            this.action_type = 0;
            this.item_ids = [];
            this.item_nums = [];
            this.item_probs = [];
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcFriendlyRewardData.prototype, "npc_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcFriendlyRewardData.prototype, "friendly_degress", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcFriendlyRewardData.prototype, "level", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcFriendlyRewardData.prototype, "action_type", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcFriendlyRewardData.prototype, "item_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcFriendlyRewardData.prototype, "item_nums", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcFriendlyRewardData.prototype, "item_probs", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcFriendlyRewardData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcFriendlyRewardData.prototype, "data_id", void 0);
    class NpcFriendRelationData {
        constructor() {
            this.friendly_degress = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcFriendRelationData.prototype, "friendly_degress", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcFriendRelationData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcFriendRelationData.prototype, "data_id", void 0);
    class NpcInfoData {
        constructor() {
            this.id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcInfoData.prototype, "id", void 0);
    class NpcMoodData {
        constructor() {
            this.npc = 0;
            this.mood_type = 0;
            this.dialogs = [];
            this.dialog_probs = [];
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcMoodData.prototype, "npc", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcMoodData.prototype, "mood_type", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcMoodData.prototype, "dialogs", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcMoodData.prototype, "dialog_probs", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcMoodData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcMoodData.prototype, "data_id", void 0);
    class NpcRandomData {
        constructor() {
            this.npc_id = 0;
            this.time_range = [];
            this.scene_ids = [];
            this.scene_probs = [];
            this.action_result_data_ids = [];
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcRandomData.prototype, "npc_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcRandomData.prototype, "time_range", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcRandomData.prototype, "scene_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcRandomData.prototype, "scene_probs", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcRandomData.prototype, "action_result_data_ids", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcRandomData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcRandomData.prototype, "data_id", void 0);
    class NpcTaskActionData {
        constructor() {
            this.id = 0;
            this.npc = 0;
            this.actions = [];
            this.action1_type = 0;
            this.action1_events = [];
            this.action1_dialogs = [];
            this.action2_type = 0;
            this.action2_events = [];
            this.action2_dialogs = [];
            this.action3_type = 0;
            this.action3_events = [];
            this.action3_dialogs = [];
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcTaskActionData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcTaskActionData.prototype, "npc", void 0);
    __decorate([
        Column(`string[]`),
        __metadata("design:type", Array)
    ], NpcTaskActionData.prototype, "actions", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcTaskActionData.prototype, "action1_type", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], NpcTaskActionData.prototype, "action1_name", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcTaskActionData.prototype, "action1_events", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcTaskActionData.prototype, "action1_dialogs", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcTaskActionData.prototype, "action2_type", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], NpcTaskActionData.prototype, "action2_name", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcTaskActionData.prototype, "action2_events", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcTaskActionData.prototype, "action2_dialogs", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcTaskActionData.prototype, "action3_type", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], NpcTaskActionData.prototype, "action3_name", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcTaskActionData.prototype, "action3_events", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcTaskActionData.prototype, "action3_dialogs", void 0);
    class NpcTimeChangeData {
        constructor() {
            this.id = 0;
            this.npc_id = 0;
            this.time_range = [];
            this.scenes = [];
            this.scene_prop = [];
            this.event_group = [];
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcTimeChangeData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcTimeChangeData.prototype, "npc_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcTimeChangeData.prototype, "time_range", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcTimeChangeData.prototype, "scenes", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcTimeChangeData.prototype, "scene_prop", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcTimeChangeData.prototype, "event_group", void 0);
    class NpcTimeLocationData {
        constructor() {
            this.npc = 0;
            this.time_type = 0;
            this.time_range = [];
            this.locations = [];
            this.location_probs = [];
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcTimeLocationData.prototype, "npc", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcTimeLocationData.prototype, "time_type", void 0);
    __decorate([
        Column(`string[]`),
        __metadata("design:type", Array)
    ], NpcTimeLocationData.prototype, "time_range", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcTimeLocationData.prototype, "locations", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcTimeLocationData.prototype, "location_probs", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcTimeLocationData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcTimeLocationData.prototype, "data_id", void 0);
    class PayData {
        constructor() {
            this.id = 0;
            this.type = 0;
            this.value = 0;
            this.cost = 0;
            this.first_pay = 0;
            this.first_pay_recovery = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PayData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PayData.prototype, "type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PayData.prototype, "value", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PayData.prototype, "cost", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PayData.prototype, "first_pay", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PayData.prototype, "first_pay_recovery", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], PayData.prototype, "desc", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], PayData.prototype, "icon", void 0);
    class PlanActivityData {
        constructor() {
            this.plan_type = 0;
            this.level_range = [];
            this.reward_probs = [];
            this.reward_itme_ids = [];
            this.reward_item_nums = [];
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlanActivityData.prototype, "plan_type", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], PlanActivityData.prototype, "level_range", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], PlanActivityData.prototype, "reward_probs", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], PlanActivityData.prototype, "reward_itme_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], PlanActivityData.prototype, "reward_item_nums", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlanActivityData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlanActivityData.prototype, "data_id", void 0);
    class PlanDropData {
        constructor() {
            this.drop_id = 0;
            this.drop_ratio1 = 0;
            this.drop_ratio2 = 0;
            this.drop_ratio3 = 0;
            this.drop_ratio4 = 0;
            this.drop_ratio5 = 0;
            this.drop_ratio6 = 0;
            this.drop_ratio7 = 0;
            this.drop_ratio8 = 0;
            this.drop_ratio9 = 0;
            this.drop_ratio10 = 0;
            this.drop_limit = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlanDropData.prototype, "drop_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlanDropData.prototype, "drop_ratio1", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlanDropData.prototype, "drop_ratio2", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlanDropData.prototype, "drop_ratio3", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlanDropData.prototype, "drop_ratio4", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlanDropData.prototype, "drop_ratio5", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlanDropData.prototype, "drop_ratio6", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlanDropData.prototype, "drop_ratio7", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlanDropData.prototype, "drop_ratio8", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlanDropData.prototype, "drop_ratio9", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlanDropData.prototype, "drop_ratio10", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlanDropData.prototype, "drop_limit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlanDropData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlanDropData.prototype, "data_id", void 0);
    class PlanDropFirstData {
        constructor() {
            this.num = 0;
            this.drop_ratio = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlanDropFirstData.prototype, "num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlanDropFirstData.prototype, "drop_ratio", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlanDropFirstData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlanDropFirstData.prototype, "data_id", void 0);
    class PlanDropLevelData {
        constructor() {
            this.drop_ratio_level = 0;
            this.level = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlanDropLevelData.prototype, "drop_ratio_level", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlanDropLevelData.prototype, "level", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlanDropLevelData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlanDropLevelData.prototype, "data_id", void 0);
    class PlanRewardData {
        constructor() {
            this.level_range = [];
            this.sure_drop_num = [];
            this.prob_drop = [];
            this.reward_item_ids = [];
            this.reward_item_nums = [];
            this.limit_num = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], PlanRewardData.prototype, "level_range", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], PlanRewardData.prototype, "sure_drop_num", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], PlanRewardData.prototype, "prob_drop", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], PlanRewardData.prototype, "reward_item_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], PlanRewardData.prototype, "reward_item_nums", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlanRewardData.prototype, "limit_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlanRewardData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlanRewardData.prototype, "data_id", void 0);
    class RealworldAccidentData {
        constructor() {
            this.robot_star = 0;
            this.robot_num = 0;
            this.item_ids = [];
            this.item_probs = [];
            this.item_nums = [];
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldAccidentData.prototype, "robot_star", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldAccidentData.prototype, "robot_num", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldAccidentData.prototype, "item_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldAccidentData.prototype, "item_probs", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldAccidentData.prototype, "item_nums", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldAccidentData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldAccidentData.prototype, "data_id", void 0);
    class RealworldEquipmentExchangeData {
        constructor() {
            this.item_id_before = 0;
            this.item_id_after = 0;
            this.consume_type = 0;
            this.consume_num = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldEquipmentExchangeData.prototype, "item_id_before", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldEquipmentExchangeData.prototype, "item_id_after", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldEquipmentExchangeData.prototype, "consume_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldEquipmentExchangeData.prototype, "consume_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldEquipmentExchangeData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldEquipmentExchangeData.prototype, "data_id", void 0);
    class RealworldEquipmentQualityCompoundData {
        constructor() {
            this.equipment_before_id = 0;
            this.quality_compound_type = 0;
            this.equipment_after_id = 0;
            this.compound_type = 0;
            this.compound_num = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldEquipmentQualityCompoundData.prototype, "equipment_before_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldEquipmentQualityCompoundData.prototype, "quality_compound_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldEquipmentQualityCompoundData.prototype, "equipment_after_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldEquipmentQualityCompoundData.prototype, "compound_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldEquipmentQualityCompoundData.prototype, "compound_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldEquipmentQualityCompoundData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldEquipmentQualityCompoundData.prototype, "data_id", void 0);
    class RealworldEventData {
        constructor() {
            this.desc = [];
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], RealworldEventData.prototype, "title", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldEventData.prototype, "desc", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldEventData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldEventData.prototype, "data_id", void 0);
    class RealworldHeroActiveSkillData {
        constructor() {
            this.star = 0;
            this.card_slot_num = 0;
            this.card_open_num = 0;
            this.card_fixed_num = 0;
            this.card_change_num = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroActiveSkillData.prototype, "star", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroActiveSkillData.prototype, "card_slot_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroActiveSkillData.prototype, "card_open_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroActiveSkillData.prototype, "card_fixed_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroActiveSkillData.prototype, "card_change_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroActiveSkillData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroActiveSkillData.prototype, "data_id", void 0);
    class RealworldHeroData {
        constructor() {
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
            this.out_skill = [];
            this.inner_skill = [];
            this.shenfa_skill = [];
            this.model = 0;
            this.occupation_type = 0;
            this.geniu_skill = 0;
            this.quality = 0;
            this.melt_types = [];
            this.melt_ids = [];
            this.melt_nums = [];
            this.oringin_star = 0;
            this.star_max_limit = 0;
            this.b2_hero_id = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], RealworldHeroData.prototype, "hero_name", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroData.prototype, "level", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroData.prototype, "health", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroData.prototype, "attack", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroData.prototype, "defense", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroData.prototype, "critical", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroData.prototype, "hit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroData.prototype, "speed", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroData.prototype, "dodge", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroData.prototype, "fight_back", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroData.prototype, "parry", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldHeroData.prototype, "auto_skills", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldHeroData.prototype, "auto_skills_round", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldHeroData.prototype, "not_auto_skills", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldHeroData.prototype, "not_auto_skills_round", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroData.prototype, "five_attribute", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldHeroData.prototype, "out_skill", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldHeroData.prototype, "inner_skill", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldHeroData.prototype, "shenfa_skill", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroData.prototype, "model", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroData.prototype, "occupation_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroData.prototype, "geniu_skill", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroData.prototype, "quality", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldHeroData.prototype, "melt_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldHeroData.prototype, "melt_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldHeroData.prototype, "melt_nums", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroData.prototype, "oringin_star", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroData.prototype, "star_max_limit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroData.prototype, "b2_hero_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroData.prototype, "data_id", void 0);
    class RealworldHeroSummonData {
        constructor() {
            this.hero_ids = [];
            this.hero_probs = [];
            this.belong = 0;
            this.unit_cost_types = [];
            this.unit_cost_nums = [];
            this.ten_cost_types = [];
            this.ten_cost_nums = [];
            this.free_summon_num = 0;
            this.max_summon = 0;
            this.sure_gain_num = 0;
            this.hero_stars = [];
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldHeroSummonData.prototype, "hero_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldHeroSummonData.prototype, "hero_probs", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroSummonData.prototype, "belong", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldHeroSummonData.prototype, "unit_cost_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldHeroSummonData.prototype, "unit_cost_nums", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldHeroSummonData.prototype, "ten_cost_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldHeroSummonData.prototype, "ten_cost_nums", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroSummonData.prototype, "free_summon_num", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], RealworldHeroSummonData.prototype, "refresh_time", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroSummonData.prototype, "max_summon", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroSummonData.prototype, "sure_gain_num", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldHeroSummonData.prototype, "hero_stars", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroSummonData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroSummonData.prototype, "data_id", void 0);
    class RealworldHeroUpgradeStarData {
        constructor() {
            this.star_start = 0;
            this.consume_hero_stars = [];
            this.consume_hero_types = [];
            this.consume_hero_nums = [];
            this.consume_item = 0;
            this.consume_item_num = 0;
            this.add_attribute_value = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroUpgradeStarData.prototype, "star_start", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldHeroUpgradeStarData.prototype, "consume_hero_stars", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldHeroUpgradeStarData.prototype, "consume_hero_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldHeroUpgradeStarData.prototype, "consume_hero_nums", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroUpgradeStarData.prototype, "consume_item", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroUpgradeStarData.prototype, "consume_item_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroUpgradeStarData.prototype, "add_attribute_value", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroUpgradeStarData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroUpgradeStarData.prototype, "data_id", void 0);
    class RealworldItemDropData {
        constructor() {
            this.drop_types = [];
            this.drop_probs = [];
            this.item_drop_probs = [];
            this.item_sequence_ids = [];
            this.sequence = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldItemDropData.prototype, "drop_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldItemDropData.prototype, "drop_probs", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldItemDropData.prototype, "item_drop_probs", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldItemDropData.prototype, "item_sequence_ids", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldItemDropData.prototype, "sequence", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldItemDropData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldItemDropData.prototype, "data_id", void 0);
    class RealworldRelateB2Data {
        constructor() {
            this.realworld_hero_id = 0;
            this.b2_hero_id = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldRelateB2Data.prototype, "realworld_hero_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldRelateB2Data.prototype, "b2_hero_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldRelateB2Data.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldRelateB2Data.prototype, "data_id", void 0);
    class RealworldStoryData {
        constructor() {
            this.npc_ids = [];
            this.dialog_ids = [];
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldStoryData.prototype, "npc_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldStoryData.prototype, "dialog_ids", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldStoryData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldStoryData.prototype, "data_id", void 0);
    class RealworldTaskData {
        constructor() {
            this.npc_name = 0;
            this.npc_id = 0;
            this.group = 0;
            this.limit_level = 0;
            this.type = 0;
            this.condition = [];
            this.target_num = [];
            this.recept_scene = 0;
            this.after_id = 0;
            this.reward_types = [];
            this.reward_ids = [];
            this.reward_numbers = [];
            this.receiving_npc = [];
            this.receiving_content = [];
            this.complete_npc = [];
            this.complete_content = [];
            this.belong = 0;
            this.chatType = 0;
            this.time_range = [];
            this.need_battle = 0;
            this.friends_team = [];
            this.friends_level = [];
            this.enemies_team = [];
            this.enemies_level = [];
            this.task_type = 0;
            this.task_commit_type = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], RealworldTaskData.prototype, "task_name", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], RealworldTaskData.prototype, "description", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], RealworldTaskData.prototype, "icon", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldTaskData.prototype, "npc_name", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldTaskData.prototype, "npc_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldTaskData.prototype, "group", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldTaskData.prototype, "limit_level", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldTaskData.prototype, "type", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldTaskData.prototype, "condition", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldTaskData.prototype, "target_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldTaskData.prototype, "recept_scene", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldTaskData.prototype, "after_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldTaskData.prototype, "reward_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldTaskData.prototype, "reward_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldTaskData.prototype, "reward_numbers", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldTaskData.prototype, "receiving_npc", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldTaskData.prototype, "receiving_content", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldTaskData.prototype, "complete_npc", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldTaskData.prototype, "complete_content", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldTaskData.prototype, "belong", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldTaskData.prototype, "chatType", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldTaskData.prototype, "time_range", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldTaskData.prototype, "need_battle", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldTaskData.prototype, "friends_team", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldTaskData.prototype, "friends_level", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldTaskData.prototype, "enemies_team", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldTaskData.prototype, "enemies_level", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldTaskData.prototype, "task_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldTaskData.prototype, "task_commit_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldTaskData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldTaskData.prototype, "data_id", void 0);
    class RealworldUnionData {
        constructor() {
            this.id = 0;
            this.specify = 0;
            this.num = 0;
            this.health = 0;
            this.attack = 0;
            this.defense = 0;
            this.critical = 0;
            this.hit = 0;
            this.speed = 0;
            this.dodge = 0;
            this.fight_back = 0;
            this.parry = 0;
            this.energy_change = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldUnionData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldUnionData.prototype, "specify", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldUnionData.prototype, "num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldUnionData.prototype, "health", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldUnionData.prototype, "attack", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldUnionData.prototype, "defense", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldUnionData.prototype, "critical", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldUnionData.prototype, "hit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldUnionData.prototype, "speed", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldUnionData.prototype, "dodge", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldUnionData.prototype, "fight_back", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldUnionData.prototype, "parry", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldUnionData.prototype, "energy_change", void 0);
    class RealworldUserLevelupData {
        constructor() {
            this.level = 0;
            this.experience = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldUserLevelupData.prototype, "level", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldUserLevelupData.prototype, "experience", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldUserLevelupData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldUserLevelupData.prototype, "data_id", void 0);
    class RecordDayData {
        constructor() {
            this.id = 0;
            this.type = 0;
            this.icon = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RecordDayData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RecordDayData.prototype, "type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RecordDayData.prototype, "icon", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], RecordDayData.prototype, "content_format", void 0);
    class RecordRewardData {
        constructor() {
            this.level_range = [];
            this.sure_drop_num = [];
            this.prob_drop = [];
            this.reward_item_ids = [];
            this.reward_item_nums = [];
            this.limit_num = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RecordRewardData.prototype, "level_range", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RecordRewardData.prototype, "sure_drop_num", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RecordRewardData.prototype, "prob_drop", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RecordRewardData.prototype, "reward_item_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RecordRewardData.prototype, "reward_item_nums", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RecordRewardData.prototype, "limit_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RecordRewardData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RecordRewardData.prototype, "data_id", void 0);
    class RelationData {
        constructor() {
            this.id = 0;
            this.npc_id = [];
            this.relation = [];
            this.relation_init_value = [];
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RelationData.prototype, "id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RelationData.prototype, "npc_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RelationData.prototype, "relation", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RelationData.prototype, "relation_init_value", void 0);
    class ReputationData {
        constructor() {
            this.reputation = 0;
            this.achievement = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ReputationData.prototype, "reputation", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ReputationData.prototype, "achievement", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ReputationData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ReputationData.prototype, "data_id", void 0);
    class RobotData {
        constructor() {
            this.id = 0;
            this.type = 0;
            this.daily_max_value_limit = 0;
            this.each_time_value = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RobotData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RobotData.prototype, "type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RobotData.prototype, "daily_max_value_limit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RobotData.prototype, "each_time_value", void 0);
    class RobotLevelData {
        constructor() {
            this.id = 0;
            this.level = 0;
            this.experience = 0;
            this.attack = 0;
            this.defense = 0;
            this.health = 0;
            this.energy_max_limit = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RobotLevelData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RobotLevelData.prototype, "level", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RobotLevelData.prototype, "experience", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RobotLevelData.prototype, "attack", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RobotLevelData.prototype, "defense", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RobotLevelData.prototype, "health", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RobotLevelData.prototype, "energy_max_limit", void 0);
    class SceneData {
        constructor() {
            this.id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SceneData.prototype, "id", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], SceneData.prototype, "scene", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], SceneData.prototype, "desc", void 0);
    class ScretPlaceData {
        constructor() {
            this.id = 0;
            this.npc_id_limit = 0;
            this.npc_value_limit = 0;
            this.reward_types = [];
            this.reward_prob = [];
            this.reward_ids = [];
            this.reward_num_range = [];
            this.num_limit = 0;
            this.level_ids = [];
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ScretPlaceData.prototype, "id", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], ScretPlaceData.prototype, "scret_name", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], ScretPlaceData.prototype, "desc", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ScretPlaceData.prototype, "npc_id_limit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ScretPlaceData.prototype, "npc_value_limit", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ScretPlaceData.prototype, "reward_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ScretPlaceData.prototype, "reward_prob", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ScretPlaceData.prototype, "reward_ids", void 0);
    __decorate([
        Column(`string[]`),
        __metadata("design:type", Array)
    ], ScretPlaceData.prototype, "reward_num_range", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ScretPlaceData.prototype, "num_limit", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ScretPlaceData.prototype, "level_ids", void 0);
    class SevenSignData {
        constructor() {
            this.id = 0;
            this.day = 0;
            this.item_types = [];
            this.item_ids = [];
            this.item_value = [];
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SevenSignData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SevenSignData.prototype, "day", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SevenSignData.prototype, "item_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SevenSignData.prototype, "item_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SevenSignData.prototype, "item_value", void 0);
    class ShopData {
        constructor() {
            this.id = 0;
            this.shop_type = 0;
            this.item_type = 0;
            this.item_id = 0;
            this.money_type = 0;
            this.money_single_cost = 0;
            this.buy_limit_num = 0;
            this.world_types = 0;
            this.item_num = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ShopData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ShopData.prototype, "shop_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ShopData.prototype, "item_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ShopData.prototype, "item_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ShopData.prototype, "money_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ShopData.prototype, "money_single_cost", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ShopData.prototype, "buy_limit_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ShopData.prototype, "world_types", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ShopData.prototype, "item_num", void 0);
    class ShopGroceryData {
        constructor() {
            this.npc_id = 0;
            this.item_ids = [];
            this.item_nums = [];
            this.money_types = [];
            this.money_single_cost = [];
            this.buy_limit_num = [];
            this.refresh_time = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ShopGroceryData.prototype, "npc_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ShopGroceryData.prototype, "item_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ShopGroceryData.prototype, "item_nums", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ShopGroceryData.prototype, "money_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ShopGroceryData.prototype, "money_single_cost", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ShopGroceryData.prototype, "buy_limit_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ShopGroceryData.prototype, "refresh_time", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], ShopGroceryData.prototype, "shop_name", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ShopGroceryData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ShopGroceryData.prototype, "data_id", void 0);
    class ShopPartData {
        constructor() {
            this.level_limit = 0;
            this.location_limit = 0;
            this.relate_npc = 0;
            this.item_ids = [];
            this.item_prob = [];
            this.item_num = [];
            this.money_types = [];
            this.money_single_cost = [];
            this.discount_data_id = [];
            this.free_time = 0;
            this.buy_fresh_time = [];
            this.buy_cost_id = [];
            this.buy_cost_num = [];
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ShopPartData.prototype, "level_limit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ShopPartData.prototype, "location_limit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ShopPartData.prototype, "relate_npc", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ShopPartData.prototype, "item_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ShopPartData.prototype, "item_prob", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ShopPartData.prototype, "item_num", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ShopPartData.prototype, "money_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ShopPartData.prototype, "money_single_cost", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ShopPartData.prototype, "discount_data_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ShopPartData.prototype, "free_time", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ShopPartData.prototype, "buy_fresh_time", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ShopPartData.prototype, "buy_cost_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ShopPartData.prototype, "buy_cost_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ShopPartData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ShopPartData.prototype, "data_id", void 0);
    class ShopSectionData {
        constructor() {
            this.level_limit = 0;
            this.location_limit = 0;
            this.relate_npc = 0;
            this.item_types = [];
            this.item_ids = [];
            this.item_prob = [];
            this.item_num = [];
            this.money_ids = [];
            this.money_types = [];
            this.money_single_cost = [];
            this.discount_data_id = [];
            this.free_time = 0;
            this.buy_fresh_time = 0;
            this.buy_cost_id = 0;
            this.buy_cost_num = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ShopSectionData.prototype, "level_limit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ShopSectionData.prototype, "location_limit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ShopSectionData.prototype, "relate_npc", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ShopSectionData.prototype, "item_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ShopSectionData.prototype, "item_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ShopSectionData.prototype, "item_prob", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ShopSectionData.prototype, "item_num", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ShopSectionData.prototype, "money_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ShopSectionData.prototype, "money_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ShopSectionData.prototype, "money_single_cost", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ShopSectionData.prototype, "discount_data_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ShopSectionData.prototype, "free_time", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ShopSectionData.prototype, "buy_fresh_time", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ShopSectionData.prototype, "buy_cost_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ShopSectionData.prototype, "buy_cost_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ShopSectionData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ShopSectionData.prototype, "data_id", void 0);
    class SignData {
        constructor() {
            this.day = 0;
            this.item_types = [];
            this.item_ids = [];
            this.num = [];
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SignData.prototype, "day", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], SignData.prototype, "sign_name", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], SignData.prototype, "icon", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SignData.prototype, "item_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SignData.prototype, "item_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SignData.prototype, "num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SignData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SignData.prototype, "data_id", void 0);
    class SkillCompoundLevelData {
        constructor() {
            this.skill_id = 0;
            this.quality = 0;
            this.attack = 0;
            this.defense = 0;
            this.health = 0;
            this.speed = 0;
            this.agile = 0;
            this.critical = 0;
            this.fight_back = 0;
            this.parry = 0;
            this.hit = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompoundLevelData.prototype, "skill_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompoundLevelData.prototype, "quality", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompoundLevelData.prototype, "attack", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompoundLevelData.prototype, "defense", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompoundLevelData.prototype, "health", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompoundLevelData.prototype, "speed", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompoundLevelData.prototype, "agile", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompoundLevelData.prototype, "critical", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompoundLevelData.prototype, "fight_back", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompoundLevelData.prototype, "parry", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompoundLevelData.prototype, "hit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompoundLevelData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompoundLevelData.prototype, "data_id", void 0);
    class SkillCompoundQualityData {
        constructor() {
            this.quality_level = 0;
            this.range = [];
            this.experience = 0;
            this.attribute_value = 0;
            this.gold_cost = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompoundQualityData.prototype, "quality_level", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SkillCompoundQualityData.prototype, "range", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompoundQualityData.prototype, "experience", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompoundQualityData.prototype, "attribute_value", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompoundQualityData.prototype, "gold_cost", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompoundQualityData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompoundQualityData.prototype, "data_id", void 0);
    class SkillCompundData {
        constructor() {
            this.type = 0;
            this.skill_ids = [];
            this.star = 0;
            this.quality = 0;
            this.five_attribute = 0;
            this.star_quality_limit = 0;
            this.icon = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], SkillCompundData.prototype, "skill_name", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompundData.prototype, "type", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], SkillCompundData.prototype, "desc", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SkillCompundData.prototype, "skill_ids", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompundData.prototype, "star", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompundData.prototype, "quality", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompundData.prototype, "five_attribute", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompundData.prototype, "star_quality_limit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompundData.prototype, "icon", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompundData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompundData.prototype, "data_id", void 0);
    class SkillCompundLevelData {
        constructor() {
            this.id = 0;
            this.skill_id = 0;
            this.level = 0;
            this.layer = 0;
            this.experience = 0;
            this.star = 0;
            this.attack = 0;
            this.defense = 0;
            this.health = 0;
            this.speed = 0;
            this.agile = 0;
            this.critical = 0;
            this.fight_back = 0;
            this.parry = 0;
            this.hit = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompundLevelData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompundLevelData.prototype, "skill_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompundLevelData.prototype, "level", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompundLevelData.prototype, "layer", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompundLevelData.prototype, "experience", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompundLevelData.prototype, "star", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompundLevelData.prototype, "attack", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompundLevelData.prototype, "defense", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompundLevelData.prototype, "health", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompundLevelData.prototype, "speed", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompundLevelData.prototype, "agile", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompundLevelData.prototype, "critical", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompundLevelData.prototype, "fight_back", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompundLevelData.prototype, "parry", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompundLevelData.prototype, "hit", void 0);
    class SkillData {
        constructor() {
            this.skill_id = 0;
            this.skill_type = 0;
            this.skill_round = 0;
            this.condition = 0;
            this.target = 0;
            this.range = 0;
            this.buff_id = [];
            this.buff_target = [];
            this.buff_range = [];
            this.damage_type = 0;
            this.damage_ratio = 0;
            this.attribute_type = 0;
            this.fire_sound = 0;
            this.model = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillData.prototype, "skill_id", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], SkillData.prototype, "skill_name", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], SkillData.prototype, "description", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], SkillData.prototype, "icon", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillData.prototype, "skill_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillData.prototype, "skill_round", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillData.prototype, "condition", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillData.prototype, "target", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillData.prototype, "range", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SkillData.prototype, "buff_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SkillData.prototype, "buff_target", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SkillData.prototype, "buff_range", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillData.prototype, "damage_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillData.prototype, "damage_ratio", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillData.prototype, "attribute_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillData.prototype, "fire_sound", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], SkillData.prototype, "hurt_sound", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillData.prototype, "model", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillData.prototype, "data_id", void 0);
    class SkillLevelData {
        constructor() {
            this.id = 0;
            this.skill_id = 0;
            this.level = 0;
            this.limit_level = 0;
            this.target = 0;
            this.range = 0;
            this.buff_id = [];
            this.buff_target = [];
            this.damage_type = 0;
            this.damage_ratio = 0;
            this.attribute_type = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillLevelData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillLevelData.prototype, "skill_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillLevelData.prototype, "level", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillLevelData.prototype, "limit_level", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillLevelData.prototype, "target", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillLevelData.prototype, "range", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SkillLevelData.prototype, "buff_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SkillLevelData.prototype, "buff_target", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillLevelData.prototype, "damage_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillLevelData.prototype, "damage_ratio", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillLevelData.prototype, "attribute_type", void 0);
    class SkillNewLevelData {
        constructor() {
            this.skill_id = 0;
            this.level = 0;
            this.limit_level = 0;
            this.ranges_friend = [];
            this.buff_ids_friend = [];
            this.buff_probs_friend = [];
            this.buff_round_friend = [];
            this.buff_targets_friend = [];
            this.damage_types_friend = [];
            this.damage_ratio_friend = [];
            this.attribute_type_friend = [];
            this.ranges_enemy = [];
            this.buff_ids_enemy = [];
            this.buff_probs_enemy = [];
            this.buff_round_enemy = [];
            this.buff_targets_enemy = [];
            this.damage_types_enemy = [];
            this.damage_ratio_enemy = [];
            this.attribute_type_enemy = [];
            this.trigger_friends = [];
            this.trigger_enemies = [];
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillNewLevelData.prototype, "skill_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillNewLevelData.prototype, "level", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillNewLevelData.prototype, "limit_level", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SkillNewLevelData.prototype, "ranges_friend", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SkillNewLevelData.prototype, "buff_ids_friend", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SkillNewLevelData.prototype, "buff_probs_friend", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SkillNewLevelData.prototype, "buff_round_friend", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SkillNewLevelData.prototype, "buff_targets_friend", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SkillNewLevelData.prototype, "damage_types_friend", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SkillNewLevelData.prototype, "damage_ratio_friend", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SkillNewLevelData.prototype, "attribute_type_friend", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SkillNewLevelData.prototype, "ranges_enemy", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SkillNewLevelData.prototype, "buff_ids_enemy", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SkillNewLevelData.prototype, "buff_probs_enemy", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SkillNewLevelData.prototype, "buff_round_enemy", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SkillNewLevelData.prototype, "buff_targets_enemy", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SkillNewLevelData.prototype, "damage_types_enemy", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SkillNewLevelData.prototype, "damage_ratio_enemy", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SkillNewLevelData.prototype, "attribute_type_enemy", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], SkillNewLevelData.prototype, "desc", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SkillNewLevelData.prototype, "trigger_friends", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SkillNewLevelData.prototype, "trigger_enemies", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillNewLevelData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillNewLevelData.prototype, "data_id", void 0);
    class SportData {
        constructor() {
            this.id = 0;
            this.step_max = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SportData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SportData.prototype, "step_max", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], SportData.prototype, "state", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], SportData.prototype, "content", void 0);
    class SuspendData {
        constructor() {
            this.id = 0;
            this.level_limit = 0;
            this.reward_types = [];
            this.reward_ids = [];
            this.reward_num = [];
            this.drop_types = [];
            this.drop_ids = [];
            this.drop_prob = [];
            this.drop_num = [];
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SuspendData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SuspendData.prototype, "level_limit", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SuspendData.prototype, "reward_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SuspendData.prototype, "reward_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SuspendData.prototype, "reward_num", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SuspendData.prototype, "drop_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SuspendData.prototype, "drop_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SuspendData.prototype, "drop_prob", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SuspendData.prototype, "drop_num", void 0);
    class TaskAchieveData {
        constructor() {
            this.type = 0;
            this.task_value = 0;
            this.reward_ids = [];
            this.reward_nums = [];
            this.task_limit_value = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskAchieveData.prototype, "type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskAchieveData.prototype, "task_value", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskAchieveData.prototype, "reward_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskAchieveData.prototype, "reward_nums", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskAchieveData.prototype, "task_limit_value", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskAchieveData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskAchieveData.prototype, "data_id", void 0);
    class TaskCenterData {
        constructor() {
            this.icon = 0;
            this.task_type = 0;
            this.goal = 0;
            this.trigger = 0;
            this.target_ids = [];
            this.target_nums = [];
            this.target_scene = 0;
            this.target_npc = 0;
            this.receive_dialogs = [];
            this.complete_npc = 0;
            this.complete_dialog = [];
            this.reward_item_types = [];
            this.reward_item_ids = [];
            this.reward_item_nums = [];
            this.children_task_ids = [];
            this.limit_types = [];
            this.limit_npc_ids = [];
            this.limit_npc_value = [];
            this.limit_level = 0;
            this.limit_item_ids = [];
            this.limit_item_num = [];
            this.limit_time_period = [];
            this.limit_time_period_prob = 0;
            this.limit_power_value = 0;
            this.need_battle = 0;
            this.friends_team = [];
            this.friends_level = [];
            this.enemies_team = [];
            this.enemies_level = [];
            this.commit_type = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], TaskCenterData.prototype, "name", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], TaskCenterData.prototype, "desc", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskCenterData.prototype, "icon", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskCenterData.prototype, "task_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskCenterData.prototype, "goal", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskCenterData.prototype, "trigger", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskCenterData.prototype, "target_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskCenterData.prototype, "target_nums", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskCenterData.prototype, "target_scene", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskCenterData.prototype, "target_npc", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskCenterData.prototype, "receive_dialogs", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskCenterData.prototype, "complete_npc", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskCenterData.prototype, "complete_dialog", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskCenterData.prototype, "reward_item_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskCenterData.prototype, "reward_item_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskCenterData.prototype, "reward_item_nums", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskCenterData.prototype, "children_task_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskCenterData.prototype, "limit_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskCenterData.prototype, "limit_npc_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskCenterData.prototype, "limit_npc_value", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskCenterData.prototype, "limit_level", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskCenterData.prototype, "limit_item_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskCenterData.prototype, "limit_item_num", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], TaskCenterData.prototype, "limit_time_create", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], TaskCenterData.prototype, "limit_time", void 0);
    __decorate([
        Column(`string[]`),
        __metadata("design:type", Array)
    ], TaskCenterData.prototype, "limit_time_period", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskCenterData.prototype, "limit_time_period_prob", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskCenterData.prototype, "limit_power_value", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskCenterData.prototype, "need_battle", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskCenterData.prototype, "friends_team", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskCenterData.prototype, "friends_level", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskCenterData.prototype, "enemies_team", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskCenterData.prototype, "enemies_level", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskCenterData.prototype, "commit_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskCenterData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskCenterData.prototype, "data_id", void 0);
    class TaskData {
        constructor() {
            this.npc_name = 0;
            this.npc_id = 0;
            this.group = 0;
            this.limit_level = 0;
            this.type = 0;
            this.condition = [];
            this.target_num = [];
            this.recept_scene = 0;
            this.after_id = 0;
            this.reward_types = [];
            this.reward_ids = [];
            this.reward_numbers = [];
            this.receiving_npc = [];
            this.receiving_content = [];
            this.complete_npc = [];
            this.complete_content = [];
            this.belong = 0;
            this.chatType = 0;
            this.time_range = [];
            this.need_battle = 0;
            this.friends_team = [];
            this.friends_level = [];
            this.enemies_team = [];
            this.enemies_level = [];
            this.task_type = 0;
            this.task_commit_type = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], TaskData.prototype, "task_name", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], TaskData.prototype, "description", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], TaskData.prototype, "icon", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskData.prototype, "npc_name", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskData.prototype, "npc_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskData.prototype, "group", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskData.prototype, "limit_level", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskData.prototype, "type", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskData.prototype, "condition", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskData.prototype, "target_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskData.prototype, "recept_scene", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskData.prototype, "after_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskData.prototype, "reward_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskData.prototype, "reward_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskData.prototype, "reward_numbers", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskData.prototype, "receiving_npc", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskData.prototype, "receiving_content", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskData.prototype, "complete_npc", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskData.prototype, "complete_content", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskData.prototype, "belong", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskData.prototype, "chatType", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskData.prototype, "time_range", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskData.prototype, "need_battle", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskData.prototype, "friends_team", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskData.prototype, "friends_level", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskData.prototype, "enemies_team", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskData.prototype, "enemies_level", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskData.prototype, "task_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskData.prototype, "task_commit_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskData.prototype, "data_id", void 0);
    class TaskRealworldDailyData {
        constructor() {
            this.limit_level = 0;
            this.action_type = 0;
            this.action_num = [];
            this.recept_scene = 0;
            this.reward_types = [];
            this.reward_ids = [];
            this.reward_numbers = [];
            this.type = 0;
            this.reward_task_value = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], TaskRealworldDailyData.prototype, "task_name", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], TaskRealworldDailyData.prototype, "description", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], TaskRealworldDailyData.prototype, "icon", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskRealworldDailyData.prototype, "limit_level", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskRealworldDailyData.prototype, "action_type", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskRealworldDailyData.prototype, "action_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskRealworldDailyData.prototype, "recept_scene", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskRealworldDailyData.prototype, "reward_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskRealworldDailyData.prototype, "reward_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskRealworldDailyData.prototype, "reward_numbers", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskRealworldDailyData.prototype, "type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskRealworldDailyData.prototype, "reward_task_value", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskRealworldDailyData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskRealworldDailyData.prototype, "data_id", void 0);
    class TaskSectionData {
        constructor() {
            this.npc_name = 0;
            this.npc_id = 0;
            this.group = 0;
            this.limit_level = 0;
            this.type = 0;
            this.condition = [];
            this.target_num = [];
            this.recept_scene = 0;
            this.after_id = 0;
            this.reward_types = [];
            this.reward_ids = [];
            this.reward_numbers = [];
            this.receiving_npc = [];
            this.receiving_content = [];
            this.complete_npc = [];
            this.complete_content = [];
            this.belong = 0;
            this.chatType = 0;
            this.task_type = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], TaskSectionData.prototype, "task_name", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], TaskSectionData.prototype, "description", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], TaskSectionData.prototype, "icon", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskSectionData.prototype, "npc_name", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskSectionData.prototype, "npc_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskSectionData.prototype, "group", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskSectionData.prototype, "limit_level", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskSectionData.prototype, "type", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskSectionData.prototype, "condition", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskSectionData.prototype, "target_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskSectionData.prototype, "recept_scene", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskSectionData.prototype, "after_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskSectionData.prototype, "reward_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskSectionData.prototype, "reward_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskSectionData.prototype, "reward_numbers", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskSectionData.prototype, "receiving_npc", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskSectionData.prototype, "receiving_content", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskSectionData.prototype, "complete_npc", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskSectionData.prototype, "complete_content", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskSectionData.prototype, "belong", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskSectionData.prototype, "chatType", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskSectionData.prototype, "task_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskSectionData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskSectionData.prototype, "data_id", void 0);
    class TaskTeachNewData {
        constructor() {
            this.task_type = 0;
            this.goal = 0;
            this.trigger = 0;
            this.target_ids = [];
            this.target_nums = [];
            this.target_num = [];
            this.target_scene = 0;
            this.target_npc = 0;
            this.receiving_npc = [];
            this.receive_dialogs = [];
            this.complete_npc = [];
            this.complete_dialog = [];
            this.reward_types = [];
            this.reward_nums = [];
            this.children_task_ids = [];
            this.limit_types = [];
            this.limit_npc_ids = [];
            this.limit_npc_value = [];
            this.limit_level = 0;
            this.limit_item_ids = [];
            this.limit_item_num = [];
            this.limit_time_period = [];
            this.limit_time_period_prob = 0;
            this.limit_power_value = 0;
            this.need_battle = 0;
            this.friends_team = [];
            this.friends_level = [];
            this.enemies_team = [];
            this.enemies_level = [];
            this.commit_type = 0;
            this.battle_complete_scene = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], TaskTeachNewData.prototype, "task_name", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], TaskTeachNewData.prototype, "desc", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], TaskTeachNewData.prototype, "icon", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskTeachNewData.prototype, "task_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskTeachNewData.prototype, "goal", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskTeachNewData.prototype, "trigger", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskTeachNewData.prototype, "target_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskTeachNewData.prototype, "target_nums", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskTeachNewData.prototype, "target_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskTeachNewData.prototype, "target_scene", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskTeachNewData.prototype, "target_npc", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskTeachNewData.prototype, "receiving_npc", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskTeachNewData.prototype, "receive_dialogs", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskTeachNewData.prototype, "complete_npc", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskTeachNewData.prototype, "complete_dialog", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskTeachNewData.prototype, "reward_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskTeachNewData.prototype, "reward_nums", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskTeachNewData.prototype, "children_task_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskTeachNewData.prototype, "limit_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskTeachNewData.prototype, "limit_npc_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskTeachNewData.prototype, "limit_npc_value", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskTeachNewData.prototype, "limit_level", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskTeachNewData.prototype, "limit_item_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskTeachNewData.prototype, "limit_item_num", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], TaskTeachNewData.prototype, "limit_time_create", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], TaskTeachNewData.prototype, "limit_time", void 0);
    __decorate([
        Column(`string[]`),
        __metadata("design:type", Array)
    ], TaskTeachNewData.prototype, "limit_time_period", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskTeachNewData.prototype, "limit_time_period_prob", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskTeachNewData.prototype, "limit_power_value", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskTeachNewData.prototype, "need_battle", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskTeachNewData.prototype, "friends_team", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskTeachNewData.prototype, "friends_level", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskTeachNewData.prototype, "enemies_team", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskTeachNewData.prototype, "enemies_level", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskTeachNewData.prototype, "commit_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskTeachNewData.prototype, "battle_complete_scene", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskTeachNewData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskTeachNewData.prototype, "data_id", void 0);
    class TaskTransactionData {
        constructor() {
            this.summary_title = 0;
            this.title = 0;
            this.desc = 0;
            this.group = 0;
            this.before_task_id = 0;
            this.after_task_id = 0;
            this.action_type = 0;
            this.action_result_id = 0;
            this.chat_data_id = 0;
            this.battle_data_id = 0;
            this.location_data_id = 0;
            this.action_data_id = 0;
            this.gift_data_id = 0;
            this.time_data_id = 0;
            this.condition_type = [];
            this.condition_level_limit = 0;
            this.condition_hero_power = 0;
            this.condition_item_ids = [];
            this.condition_item_nums = [];
            this.condition_hero_ids = [];
            this.condition_hero_nums = [];
            this.condition_during_time = [];
            this.condition_npc = [];
            this.condition_scene = 0;
            this.prob_action_type = [];
            this.prob_action = [];
            this.prob_chat_data_id = 0;
            this.prob_battle_data_id = 0;
            this.prob_location_id = 0;
            this.prob_action_data_id = 0;
            this.prob_gift_data_id = 0;
            this.prob_time_data_id = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskTransactionData.prototype, "summary_title", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskTransactionData.prototype, "title", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskTransactionData.prototype, "desc", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskTransactionData.prototype, "group", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskTransactionData.prototype, "before_task_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskTransactionData.prototype, "after_task_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskTransactionData.prototype, "action_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskTransactionData.prototype, "action_result_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskTransactionData.prototype, "chat_data_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskTransactionData.prototype, "battle_data_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskTransactionData.prototype, "location_data_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskTransactionData.prototype, "action_data_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskTransactionData.prototype, "gift_data_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskTransactionData.prototype, "time_data_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskTransactionData.prototype, "condition_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskTransactionData.prototype, "condition_level_limit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskTransactionData.prototype, "condition_hero_power", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskTransactionData.prototype, "condition_item_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskTransactionData.prototype, "condition_item_nums", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskTransactionData.prototype, "condition_hero_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskTransactionData.prototype, "condition_hero_nums", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], TaskTransactionData.prototype, "condition_server_time", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], TaskTransactionData.prototype, "condition_create_time", void 0);
    __decorate([
        Column(`string[]`),
        __metadata("design:type", Array)
    ], TaskTransactionData.prototype, "condition_during_time", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskTransactionData.prototype, "condition_npc", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskTransactionData.prototype, "condition_scene", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskTransactionData.prototype, "prob_action_type", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskTransactionData.prototype, "prob_action", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskTransactionData.prototype, "prob_chat_data_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskTransactionData.prototype, "prob_battle_data_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskTransactionData.prototype, "prob_location_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskTransactionData.prototype, "prob_action_data_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskTransactionData.prototype, "prob_gift_data_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskTransactionData.prototype, "prob_time_data_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskTransactionData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskTransactionData.prototype, "data_id", void 0);
    class TavernData {
        constructor() {
            this.id = 0;
            this.npc_id = 0;
            this.sold_item_type = [];
            this.sold_item_ids = [];
            this.sold_item_num = [];
            this.event_ids = [];
            this.event_prob = [];
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TavernData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TavernData.prototype, "npc_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TavernData.prototype, "sold_item_type", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TavernData.prototype, "sold_item_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TavernData.prototype, "sold_item_num", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TavernData.prototype, "event_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TavernData.prototype, "event_prob", void 0);
    class TimeData {
        constructor() {
            this.during_time = [];
            this.action_result_id = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], TimeData.prototype, "point_time", void 0);
    __decorate([
        Column(`string[]`),
        __metadata("design:type", Array)
    ], TimeData.prototype, "during_time", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TimeData.prototype, "action_result_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TimeData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TimeData.prototype, "data_id", void 0);
    class TransferStoneData {
        constructor() {
            this.id = 0;
            this.stone_cost = 0;
            this.value_limit = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TransferStoneData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TransferStoneData.prototype, "stone_cost", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TransferStoneData.prototype, "value_limit", void 0);
    class WeatherData {
        constructor() {
            this.id = 0;
            this.temperature_max = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], WeatherData.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], WeatherData.prototype, "temperature_max", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], WeatherData.prototype, "content", void 0);
    class SpecificSpendItemData {
        constructor() {
            this.type = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SpecificSpendItemData.prototype, "type", void 0);
    __decorate([
        Column(`"UnityEngine.Sprite"`),
        __metadata("design:type", String)
    ], SpecificSpendItemData.prototype, "sprite", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], SpecificSpendItemData.prototype, "name", void 0);
    __decorate([
        Column(`"System.Decimal"`),
        __metadata("design:type", String)
    ], SpecificSpendItemData.prototype, "money", void 0);
    class JourneyActionData {
        constructor() {
            this.level = 0;
            this.speed = 0;
            this.useGUILayout = false;
            this.runInEditMode = false;
            this.enabled = false;
            this.isActiveAndEnabled = false;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], JourneyActionData.prototype, "level", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], JourneyActionData.prototype, "speed", void 0);
    __decorate([
        Column(`boolean`),
        __metadata("design:type", Boolean)
    ], JourneyActionData.prototype, "useGUILayout", void 0);
    __decorate([
        Column(`boolean`),
        __metadata("design:type", Boolean)
    ], JourneyActionData.prototype, "runInEditMode", void 0);
    __decorate([
        Column(`boolean`),
        __metadata("design:type", Boolean)
    ], JourneyActionData.prototype, "enabled", void 0);
    __decorate([
        Column(`boolean`),
        __metadata("design:type", Boolean)
    ], JourneyActionData.prototype, "isActiveAndEnabled", void 0);
    __decorate([
        Column(`"UnityEngine.Transform"`),
        __metadata("design:type", String)
    ], JourneyActionData.prototype, "transform", void 0);
    __decorate([
        Column(`"UnityEngine.GameObject"`),
        __metadata("design:type", String)
    ], JourneyActionData.prototype, "gameObject", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], JourneyActionData.prototype, "tag", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyActionData.prototype, "rigidbody", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyActionData.prototype, "rigidbody2D", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyActionData.prototype, "camera", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyActionData.prototype, "light", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyActionData.prototype, "animation", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyActionData.prototype, "constantForce", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyActionData.prototype, "renderer", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyActionData.prototype, "audio", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyActionData.prototype, "guiText", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyActionData.prototype, "networkView", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyActionData.prototype, "guiElement", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyActionData.prototype, "guiTexture", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyActionData.prototype, "collider", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyActionData.prototype, "collider2D", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyActionData.prototype, "hingeJoint", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyActionData.prototype, "particleSystem", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], JourneyActionData.prototype, "name", void 0);
    __decorate([
        Column(`"UnityEngine.HideFlags"`),
        __metadata("design:type", String)
    ], JourneyActionData.prototype, "hideFlags", void 0);
    class JourneyData {
        constructor() {
            this.map_id = [];
            this.map_prob = [];
            this.distance = [];
            this.useGUILayout = false;
            this.runInEditMode = false;
            this.enabled = false;
            this.isActiveAndEnabled = false;
        }
    }
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], JourneyData.prototype, "map_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], JourneyData.prototype, "map_prob", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], JourneyData.prototype, "distance", void 0);
    __decorate([
        Column(`boolean`),
        __metadata("design:type", Boolean)
    ], JourneyData.prototype, "useGUILayout", void 0);
    __decorate([
        Column(`boolean`),
        __metadata("design:type", Boolean)
    ], JourneyData.prototype, "runInEditMode", void 0);
    __decorate([
        Column(`boolean`),
        __metadata("design:type", Boolean)
    ], JourneyData.prototype, "enabled", void 0);
    __decorate([
        Column(`boolean`),
        __metadata("design:type", Boolean)
    ], JourneyData.prototype, "isActiveAndEnabled", void 0);
    __decorate([
        Column(`"UnityEngine.Transform"`),
        __metadata("design:type", String)
    ], JourneyData.prototype, "transform", void 0);
    __decorate([
        Column(`"UnityEngine.GameObject"`),
        __metadata("design:type", String)
    ], JourneyData.prototype, "gameObject", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], JourneyData.prototype, "tag", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyData.prototype, "rigidbody", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyData.prototype, "rigidbody2D", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyData.prototype, "camera", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyData.prototype, "light", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyData.prototype, "animation", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyData.prototype, "constantForce", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyData.prototype, "renderer", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyData.prototype, "audio", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyData.prototype, "guiText", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyData.prototype, "networkView", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyData.prototype, "guiElement", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyData.prototype, "guiTexture", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyData.prototype, "collider", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyData.prototype, "collider2D", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyData.prototype, "hingeJoint", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyData.prototype, "particleSystem", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], JourneyData.prototype, "name", void 0);
    __decorate([
        Column(`"UnityEngine.HideFlags"`),
        __metadata("design:type", String)
    ], JourneyData.prototype, "hideFlags", void 0);
    class JourneyItemData {
        constructor() {
            this.item_name = 0;
            this.item_desc = 0;
            this.useGUILayout = false;
            this.runInEditMode = false;
            this.enabled = false;
            this.isActiveAndEnabled = false;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], JourneyItemData.prototype, "item_name", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], JourneyItemData.prototype, "item_desc", void 0);
    __decorate([
        Column(`boolean`),
        __metadata("design:type", Boolean)
    ], JourneyItemData.prototype, "useGUILayout", void 0);
    __decorate([
        Column(`boolean`),
        __metadata("design:type", Boolean)
    ], JourneyItemData.prototype, "runInEditMode", void 0);
    __decorate([
        Column(`boolean`),
        __metadata("design:type", Boolean)
    ], JourneyItemData.prototype, "enabled", void 0);
    __decorate([
        Column(`boolean`),
        __metadata("design:type", Boolean)
    ], JourneyItemData.prototype, "isActiveAndEnabled", void 0);
    __decorate([
        Column(`"UnityEngine.Transform"`),
        __metadata("design:type", String)
    ], JourneyItemData.prototype, "transform", void 0);
    __decorate([
        Column(`"UnityEngine.GameObject"`),
        __metadata("design:type", String)
    ], JourneyItemData.prototype, "gameObject", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], JourneyItemData.prototype, "tag", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyItemData.prototype, "rigidbody", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyItemData.prototype, "rigidbody2D", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyItemData.prototype, "camera", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyItemData.prototype, "light", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyItemData.prototype, "animation", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyItemData.prototype, "constantForce", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyItemData.prototype, "renderer", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyItemData.prototype, "audio", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyItemData.prototype, "guiText", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyItemData.prototype, "networkView", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyItemData.prototype, "guiElement", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyItemData.prototype, "guiTexture", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyItemData.prototype, "collider", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyItemData.prototype, "collider2D", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyItemData.prototype, "hingeJoint", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyItemData.prototype, "particleSystem", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], JourneyItemData.prototype, "name", void 0);
    __decorate([
        Column(`"UnityEngine.HideFlags"`),
        __metadata("design:type", String)
    ], JourneyItemData.prototype, "hideFlags", void 0);
    class JourneyMapData {
        constructor() {
            this.map_id = 0;
            this.item_ids = [];
            this.item_num = [];
            this.useGUILayout = false;
            this.runInEditMode = false;
            this.enabled = false;
            this.isActiveAndEnabled = false;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], JourneyMapData.prototype, "map_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], JourneyMapData.prototype, "item_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], JourneyMapData.prototype, "item_num", void 0);
    __decorate([
        Column(`boolean`),
        __metadata("design:type", Boolean)
    ], JourneyMapData.prototype, "useGUILayout", void 0);
    __decorate([
        Column(`boolean`),
        __metadata("design:type", Boolean)
    ], JourneyMapData.prototype, "runInEditMode", void 0);
    __decorate([
        Column(`boolean`),
        __metadata("design:type", Boolean)
    ], JourneyMapData.prototype, "enabled", void 0);
    __decorate([
        Column(`boolean`),
        __metadata("design:type", Boolean)
    ], JourneyMapData.prototype, "isActiveAndEnabled", void 0);
    __decorate([
        Column(`"UnityEngine.Transform"`),
        __metadata("design:type", String)
    ], JourneyMapData.prototype, "transform", void 0);
    __decorate([
        Column(`"UnityEngine.GameObject"`),
        __metadata("design:type", String)
    ], JourneyMapData.prototype, "gameObject", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], JourneyMapData.prototype, "tag", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyMapData.prototype, "rigidbody", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyMapData.prototype, "rigidbody2D", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyMapData.prototype, "camera", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyMapData.prototype, "light", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyMapData.prototype, "animation", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyMapData.prototype, "constantForce", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyMapData.prototype, "renderer", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyMapData.prototype, "audio", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyMapData.prototype, "guiText", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyMapData.prototype, "networkView", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyMapData.prototype, "guiElement", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyMapData.prototype, "guiTexture", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyMapData.prototype, "collider", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyMapData.prototype, "collider2D", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyMapData.prototype, "hingeJoint", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], JourneyMapData.prototype, "particleSystem", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], JourneyMapData.prototype, "name", void 0);
    __decorate([
        Column(`"UnityEngine.HideFlags"`),
        __metadata("design:type", String)
    ], JourneyMapData.prototype, "hideFlags", void 0);
    class BillContrastData {
        constructor() {
            this.type = 0;
        }
    }
    __decorate([
        Column(`"UnityEngine.Sprite"`),
        __metadata("design:type", String)
    ], BillContrastData.prototype, "circle", void 0);
    __decorate([
        Column(`"UnityEngine.Sprite"`),
        __metadata("design:type", String)
    ], BillContrastData.prototype, "icon", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], BillContrastData.prototype, "name", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], BillContrastData.prototype, "type", void 0);
    class ExtendPlanData {
        constructor() {
            this.type = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ExtendPlanData.prototype, "type", void 0);
    class ExtendLogData {
        constructor() {
            this.id = 0n;
            this.dateDeatils = 0n;
            this.type = 0;
            this.money = 0;
        }
    }
    __decorate([
        Column(`bigint`),
        __metadata("design:type", BigInt)
    ], ExtendLogData.prototype, "id", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], ExtendLogData.prototype, "date", void 0);
    __decorate([
        Column(`bigint`),
        __metadata("design:type", BigInt)
    ], ExtendLogData.prototype, "dateDeatils", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ExtendLogData.prototype, "type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ExtendLogData.prototype, "money", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], ExtendLogData.prototype, "remarks", void 0);
    class PlayerData {
        constructor() {
            this.scene = 0;
            this.level = 0;
            this.experience = 0;
            this.charm = 0;
            this.reputation = 0;
            this.star = 0;
            this.gen_gu = 0;
            this.wu_xing = 0;
            this.speed = 0;
            this.hit = 0;
            this.agile = 0;
            this.critical = 0;
            this.parry = 0;
            this.fight_back = 0;
            this.outterSkill = [];
            this.innerSkill = [];
            this.shenFaSkill = [];
            this.listChip = {};
            this.listEquip = {};
            this.listMedicine = {};
            this.listBook = {};
            this.listTool = {};
            this.useGUILayout = false;
            this.runInEditMode = false;
            this.enabled = false;
            this.isActiveAndEnabled = false;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlayerData.prototype, "scene", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], PlayerData.prototype, "player_name", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlayerData.prototype, "level", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlayerData.prototype, "experience", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], PlayerData.prototype, "favourite", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlayerData.prototype, "charm", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlayerData.prototype, "reputation", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlayerData.prototype, "star", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], PlayerData.prototype, "mood", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], PlayerData.prototype, "state", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlayerData.prototype, "gen_gu", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlayerData.prototype, "wu_xing", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlayerData.prototype, "speed", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlayerData.prototype, "hit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlayerData.prototype, "agile", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlayerData.prototype, "critical", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlayerData.prototype, "parry", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlayerData.prototype, "fight_back", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], PlayerData.prototype, "outterSkill", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], PlayerData.prototype, "innerSkill", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], PlayerData.prototype, "shenFaSkill", void 0);
    __decorate([
        Column(`{ [key: number]: number }`),
        __metadata("design:type", Object)
    ], PlayerData.prototype, "listChip", void 0);
    __decorate([
        Column(`{ [key: number]: number }`),
        __metadata("design:type", Object)
    ], PlayerData.prototype, "listEquip", void 0);
    __decorate([
        Column(`{ [key: number]: number }`),
        __metadata("design:type", Object)
    ], PlayerData.prototype, "listMedicine", void 0);
    __decorate([
        Column(`{ [key: number]: number }`),
        __metadata("design:type", Object)
    ], PlayerData.prototype, "listBook", void 0);
    __decorate([
        Column(`{ [key: number]: number }`),
        __metadata("design:type", Object)
    ], PlayerData.prototype, "listTool", void 0);
    __decorate([
        Column(`boolean`),
        __metadata("design:type", Boolean)
    ], PlayerData.prototype, "useGUILayout", void 0);
    __decorate([
        Column(`boolean`),
        __metadata("design:type", Boolean)
    ], PlayerData.prototype, "runInEditMode", void 0);
    __decorate([
        Column(`boolean`),
        __metadata("design:type", Boolean)
    ], PlayerData.prototype, "enabled", void 0);
    __decorate([
        Column(`boolean`),
        __metadata("design:type", Boolean)
    ], PlayerData.prototype, "isActiveAndEnabled", void 0);
    __decorate([
        Column(`"UnityEngine.Transform"`),
        __metadata("design:type", String)
    ], PlayerData.prototype, "transform", void 0);
    __decorate([
        Column(`"UnityEngine.GameObject"`),
        __metadata("design:type", String)
    ], PlayerData.prototype, "gameObject", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], PlayerData.prototype, "tag", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], PlayerData.prototype, "rigidbody", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], PlayerData.prototype, "rigidbody2D", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], PlayerData.prototype, "camera", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], PlayerData.prototype, "light", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], PlayerData.prototype, "animation", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], PlayerData.prototype, "constantForce", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], PlayerData.prototype, "renderer", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], PlayerData.prototype, "audio", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], PlayerData.prototype, "guiText", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], PlayerData.prototype, "networkView", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], PlayerData.prototype, "guiElement", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], PlayerData.prototype, "guiTexture", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], PlayerData.prototype, "collider", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], PlayerData.prototype, "collider2D", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], PlayerData.prototype, "hingeJoint", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], PlayerData.prototype, "particleSystem", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], PlayerData.prototype, "name", void 0);
    __decorate([
        Column(`"UnityEngine.HideFlags"`),
        __metadata("design:type", String)
    ], PlayerData.prototype, "hideFlags", void 0);
    class Id {
        constructor() {
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], Id.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], Id.prototype, "data_id", void 0);
    class BagItemEntity {
        constructor() {
            this.item_id = 0;
            this.num = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], BagItemEntity.prototype, "item_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], BagItemEntity.prototype, "num", void 0);
    class DiaryEntity {
        constructor() {
            this.step = 0;
            this.distance = 0;
            this.income = 0;
            this.outcome = 0;
            this.rank = 0;
            this.temperature = 0;
            this.dicActivity = {};
            this.seekTime = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], DiaryEntity.prototype, "title", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], DiaryEntity.prototype, "content", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], DiaryEntity.prototype, "step", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], DiaryEntity.prototype, "distance", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], DiaryEntity.prototype, "income", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], DiaryEntity.prototype, "outcome", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], DiaryEntity.prototype, "rank", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], DiaryEntity.prototype, "dayTime", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], DiaryEntity.prototype, "weather", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], DiaryEntity.prototype, "mood", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], DiaryEntity.prototype, "temperature", void 0);
    __decorate([
        Column(`{ [key: number]: number }`),
        __metadata("design:type", Object)
    ], DiaryEntity.prototype, "dicActivity", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], DiaryEntity.prototype, "seekTime", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], DiaryEntity.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], DiaryEntity.prototype, "data_id", void 0);
    class DutyEntity {
        constructor() {
            this.taskId = 0;
            this.actionType = 0;
            this.actionId = 0;
            this.actionState = 0;
            this.state = 0;
            this.dicRewards = {};
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], DutyEntity.prototype, "taskId", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], DutyEntity.prototype, "actionType", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], DutyEntity.prototype, "actionId", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], DutyEntity.prototype, "actionState", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], DutyEntity.prototype, "state", void 0);
    __decorate([
        Column(`{ [key: number]: number }`),
        __metadata("design:type", Object)
    ], DutyEntity.prototype, "dicRewards", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], DutyEntity.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], DutyEntity.prototype, "data_id", void 0);
    class EquipEntity {
        constructor() {
            this.enhance_level = 0;
            this.using_id = 0;
            this.exp = 0;
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
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipEntity.prototype, "enhance_level", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipEntity.prototype, "using_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipEntity.prototype, "exp", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], EquipEntity.prototype, "equip_name", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], EquipEntity.prototype, "desc", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], EquipEntity.prototype, "source", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipEntity.prototype, "quality", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipEntity.prototype, "place", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], EquipEntity.prototype, "icon", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipEntity.prototype, "attack", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipEntity.prototype, "defense", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipEntity.prototype, "health", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipEntity.prototype, "speed", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipEntity.prototype, "hit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipEntity.prototype, "critical", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipEntity.prototype, "dodge", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipEntity.prototype, "parry", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipEntity.prototype, "fight_back", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipEntity.prototype, "equip_group_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipEntity.prototype, "milt_receive", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipEntity.prototype, "sold", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipEntity.prototype, "level_limit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipEntity.prototype, "world_types", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipEntity.prototype, "star", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipEntity.prototype, "num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipEntity.prototype, "equip_experience", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipEntity.prototype, "equipment_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipEntity.prototype, "five_attribute", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipEntity.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EquipEntity.prototype, "data_id", void 0);
    class EventEntity {
        constructor() {
            this.status = 0;
            this.target_progress = [];
            this.limit_level = 0;
            this.limit_reputation = 0;
            this.limit_hamony = 0;
            this.type = 0;
            this.item_ids = [];
            this.item_num = [];
            this.time_remain = 0;
            this.monster_ids = [];
            this.monster_num = [];
            this.sence = 0;
            this.npc_type = 0;
            this.npc_confirm = [];
            this.npc_ids = [];
            this.npc_prob = [];
            this.npc_value_min = [];
            this.cost_type = 0;
            this.cost_num = 0;
            this.actions = [];
            this.action1_reward_types = [];
            this.action1_reward_ids = [];
            this.action1_reward_num = [];
            this.action2_reward_types = [];
            this.action2_reward_ids = [];
            this.action2_reward_num = [];
            this.action3_reward_types = [];
            this.action3_reward_ids = [];
            this.action3_reward_num = [];
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventEntity.prototype, "status", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventEntity.prototype, "target_progress", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], EventEntity.prototype, "event_name", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventEntity.prototype, "limit_level", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventEntity.prototype, "limit_reputation", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventEntity.prototype, "limit_hamony", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], EventEntity.prototype, "desc", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventEntity.prototype, "type", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventEntity.prototype, "item_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventEntity.prototype, "item_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventEntity.prototype, "time_remain", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventEntity.prototype, "monster_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventEntity.prototype, "monster_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventEntity.prototype, "sence", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventEntity.prototype, "npc_type", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventEntity.prototype, "npc_confirm", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventEntity.prototype, "npc_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventEntity.prototype, "npc_prob", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventEntity.prototype, "npc_value_min", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventEntity.prototype, "cost_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventEntity.prototype, "cost_num", void 0);
    __decorate([
        Column(`string[]`),
        __metadata("design:type", Array)
    ], EventEntity.prototype, "actions", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], EventEntity.prototype, "action1_name", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventEntity.prototype, "action1_reward_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventEntity.prototype, "action1_reward_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventEntity.prototype, "action1_reward_num", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], EventEntity.prototype, "action2_name", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventEntity.prototype, "action2_reward_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventEntity.prototype, "action2_reward_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventEntity.prototype, "action2_reward_num", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], EventEntity.prototype, "action3_name", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventEntity.prototype, "action3_reward_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventEntity.prototype, "action3_reward_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], EventEntity.prototype, "action3_reward_num", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], EventEntity.prototype, "action_dialog", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventEntity.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], EventEntity.prototype, "data_id", void 0);
    class HealthEntity {
        constructor() {
            this.sleep = 0;
            this.walk = 0;
            this.distance = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], HealthEntity.prototype, "date", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HealthEntity.prototype, "sleep", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HealthEntity.prototype, "walk", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HealthEntity.prototype, "distance", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HealthEntity.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HealthEntity.prototype, "data_id", void 0);
    class HeroEntity {
        constructor() {
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
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], HeroEntity.prototype, "hero_name", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroEntity.prototype, "level", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroEntity.prototype, "health", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroEntity.prototype, "attack", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroEntity.prototype, "defense", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroEntity.prototype, "critical", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroEntity.prototype, "hit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroEntity.prototype, "speed", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroEntity.prototype, "dodge", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroEntity.prototype, "fight_back", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroEntity.prototype, "parry", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], HeroEntity.prototype, "auto_skills", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], HeroEntity.prototype, "auto_skills_round", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], HeroEntity.prototype, "not_auto_skills", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], HeroEntity.prototype, "not_auto_skills_round", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroEntity.prototype, "five_attribute", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroEntity.prototype, "out_skill", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroEntity.prototype, "inner_skill", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroEntity.prototype, "shenfa_skill", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroEntity.prototype, "model", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroEntity.prototype, "occupation_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroEntity.prototype, "skill_damage", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroEntity.prototype, "split_defense", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroEntity.prototype, "uncover_control", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroEntity.prototype, "reduce_damage", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroEntity.prototype, "real_hurt", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroEntity.prototype, "critical_ratio", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroEntity.prototype, "torrent", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroEntity.prototype, "quality", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroEntity.prototype, "milt_receive", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroEntity.prototype, "extra_skill", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroEntity.prototype, "limit_star", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroEntity.prototype, "star", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroEntity.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], HeroEntity.prototype, "data_id", void 0);
    class InvestTaskEntity {
        constructor() {
            this.taskId = 0;
            this.DicItem = {};
            this.dicItemObjects = {};
            this.dicItemScan = {};
            this.lisGuiObjects = [];
            this.isFinish = false;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], InvestTaskEntity.prototype, "taskId", void 0);
    __decorate([
        Column(`{ [key: number]: number }`),
        __metadata("design:type", Object)
    ], InvestTaskEntity.prototype, "DicItem", void 0);
    __decorate([
        Column(`{ [key: number]: number }`),
        __metadata("design:type", Object)
    ], InvestTaskEntity.prototype, "dicItemObjects", void 0);
    __decorate([
        Column(`{ [key: number]: number }`),
        __metadata("design:type", Object)
    ], InvestTaskEntity.prototype, "dicItemScan", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], InvestTaskEntity.prototype, "lisGuiObjects", void 0);
    __decorate([
        Column(`boolean`),
        __metadata("design:type", Boolean)
    ], InvestTaskEntity.prototype, "isFinish", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], InvestTaskEntity.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], InvestTaskEntity.prototype, "data_id", void 0);
    class ItemEntity {
        constructor() {
            this.npc_id = 0;
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
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemEntity.prototype, "npc_id", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], ItemEntity.prototype, "item_name", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], ItemEntity.prototype, "desc", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemEntity.prototype, "icon", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemEntity.prototype, "type", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ItemEntity.prototype, "item_type", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ItemEntity.prototype, "item_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemEntity.prototype, "num", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ItemEntity.prototype, "drop_pro", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemEntity.prototype, "drop_limit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemEntity.prototype, "quality", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemEntity.prototype, "level", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemEntity.prototype, "key_id", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], ItemEntity.prototype, "source", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemEntity.prototype, "pile", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemEntity.prototype, "can_use", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemEntity.prototype, "hide", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ItemEntity.prototype, "item_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemEntity.prototype, "world_types", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemEntity.prototype, "star", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemEntity.prototype, "can_sold", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemEntity.prototype, "sold", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemEntity.prototype, "five_element", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemEntity.prototype, "love_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemEntity.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ItemEntity.prototype, "data_id", void 0);
    class LogEntity {
        constructor() {
            this.dateDeatils = 0n;
            this.type = 0;
            this.sub_type = 0;
            this.money = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], LogEntity.prototype, "date", void 0);
    __decorate([
        Column(`bigint`),
        __metadata("design:type", BigInt)
    ], LogEntity.prototype, "dateDeatils", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], LogEntity.prototype, "type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], LogEntity.prototype, "sub_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], LogEntity.prototype, "money", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], LogEntity.prototype, "remarks", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], LogEntity.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], LogEntity.prototype, "data_id", void 0);
    class MItemEntity {
        constructor() {
            this.npc_id = 0;
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
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MItemEntity.prototype, "npc_id", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], MItemEntity.prototype, "item_name", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], MItemEntity.prototype, "desc", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MItemEntity.prototype, "icon", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MItemEntity.prototype, "type", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], MItemEntity.prototype, "item_type", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], MItemEntity.prototype, "item_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MItemEntity.prototype, "num", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], MItemEntity.prototype, "drop_pro", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MItemEntity.prototype, "drop_limit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MItemEntity.prototype, "quality", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MItemEntity.prototype, "level", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MItemEntity.prototype, "key_id", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], MItemEntity.prototype, "source", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MItemEntity.prototype, "pile", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MItemEntity.prototype, "can_use", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MItemEntity.prototype, "hide", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], MItemEntity.prototype, "item_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MItemEntity.prototype, "world_types", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MItemEntity.prototype, "star", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MItemEntity.prototype, "can_sold", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MItemEntity.prototype, "sold", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MItemEntity.prototype, "five_element", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MItemEntity.prototype, "love_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MItemEntity.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], MItemEntity.prototype, "data_id", void 0);
    class NpcEntity {
        constructor() {
            this.exp = 0;
            this.need_exp = 0;
            this.qulity = 0;
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
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "exp", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "need_exp", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "qulity", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], NpcEntity.prototype, "npc_name", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], NpcEntity.prototype, "description", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "level", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcEntity.prototype, "parent", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcEntity.prototype, "broder", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcEntity.prototype, "teacher", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcEntity.prototype, "partner", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcEntity.prototype, "iron_friend", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcEntity.prototype, "child", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcEntity.prototype, "younger_generation", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcEntity.prototype, "apprentice", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcEntity.prototype, "enjoy", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcEntity.prototype, "believe", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcEntity.prototype, "benefactor", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcEntity.prototype, "disguise", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcEntity.prototype, "hate", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcEntity.prototype, "hatred", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "gen_gu", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "wu_xing", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "mood", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "health", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "attack", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "defense", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "critical", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "hit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "speed", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "dodge", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "fight_back", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "earth", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "fire", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "water", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "wind", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "lighting", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "parry", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "star", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "reputation", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "reputation_value", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "status", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "status_value", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "favorite", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "age", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "gender", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "can_see", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "level_inition", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "level_max", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "levelup_available", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "levelup_type", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], NpcEntity.prototype, "icon", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "outer_skill", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "inner_skill", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "shen_fa", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcEntity.prototype, "equipment_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcEntity.prototype, "bag_items_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcEntity.prototype, "bag_item_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "charm_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "charm_value", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "location", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "model", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "npc_types", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "can_competition", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "mood_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "mood_value", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcEntity.prototype, "hero_types", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "extra_skill", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcEntity.prototype, "data_id", void 0);
    class NpcFriendRelationEntity {
        constructor() {
            this.npc_id = 0;
            this.friendly_degress = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcFriendRelationEntity.prototype, "npc_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcFriendRelationEntity.prototype, "friendly_degress", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcFriendRelationEntity.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcFriendRelationEntity.prototype, "data_id", void 0);
    class NpcInfoEntity {
        constructor() {
            this.useGUILayout = false;
            this.runInEditMode = false;
            this.enabled = false;
            this.isActiveAndEnabled = false;
        }
    }
    __decorate([
        Column(`boolean`),
        __metadata("design:type", Boolean)
    ], NpcInfoEntity.prototype, "useGUILayout", void 0);
    __decorate([
        Column(`boolean`),
        __metadata("design:type", Boolean)
    ], NpcInfoEntity.prototype, "runInEditMode", void 0);
    __decorate([
        Column(`boolean`),
        __metadata("design:type", Boolean)
    ], NpcInfoEntity.prototype, "enabled", void 0);
    __decorate([
        Column(`boolean`),
        __metadata("design:type", Boolean)
    ], NpcInfoEntity.prototype, "isActiveAndEnabled", void 0);
    __decorate([
        Column(`"UnityEngine.Transform"`),
        __metadata("design:type", String)
    ], NpcInfoEntity.prototype, "transform", void 0);
    __decorate([
        Column(`"UnityEngine.GameObject"`),
        __metadata("design:type", String)
    ], NpcInfoEntity.prototype, "gameObject", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], NpcInfoEntity.prototype, "tag", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], NpcInfoEntity.prototype, "rigidbody", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], NpcInfoEntity.prototype, "rigidbody2D", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], NpcInfoEntity.prototype, "camera", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], NpcInfoEntity.prototype, "light", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], NpcInfoEntity.prototype, "animation", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], NpcInfoEntity.prototype, "constantForce", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], NpcInfoEntity.prototype, "renderer", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], NpcInfoEntity.prototype, "audio", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], NpcInfoEntity.prototype, "guiText", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], NpcInfoEntity.prototype, "networkView", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], NpcInfoEntity.prototype, "guiElement", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], NpcInfoEntity.prototype, "guiTexture", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], NpcInfoEntity.prototype, "collider", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], NpcInfoEntity.prototype, "collider2D", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], NpcInfoEntity.prototype, "hingeJoint", void 0);
    __decorate([
        Column(`"UnityEngine.Component"`),
        __metadata("design:type", String)
    ], NpcInfoEntity.prototype, "particleSystem", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], NpcInfoEntity.prototype, "name", void 0);
    __decorate([
        Column(`"UnityEngine.HideFlags"`),
        __metadata("design:type", String)
    ], NpcInfoEntity.prototype, "hideFlags", void 0);
    class NpcInformationEntity {
        constructor() {
            this.npcId = 0;
            this.location = 0;
            this.npcType = 0;
            this.listTask = [];
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcInformationEntity.prototype, "npcId", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcInformationEntity.prototype, "location", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcInformationEntity.prototype, "npcType", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], NpcInformationEntity.prototype, "listTask", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcInformationEntity.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], NpcInformationEntity.prototype, "data_id", void 0);
    class PlanEntity {
        constructor() {
            this.types = {};
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], PlanEntity.prototype, "date", void 0);
    __decorate([
        Column(`{ [key: number]: number }`),
        __metadata("design:type", Object)
    ], PlanEntity.prototype, "types", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlanEntity.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlanEntity.prototype, "data_id", void 0);
    class PlanRewardEntity {
        constructor() {
            this.dicSportState = {};
            this.dicRewardItemIds = {};
            this.dicRewardItemNums = {};
            this.dicTime = {};
            this.listReward = [];
            this.drop_num = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], PlanRewardEntity.prototype, "data", void 0);
    __decorate([
        Column(`{ [key: number]: number }`),
        __metadata("design:type", Object)
    ], PlanRewardEntity.prototype, "dicSportState", void 0);
    __decorate([
        Column(`{ [key: number]: number }`),
        __metadata("design:type", Object)
    ], PlanRewardEntity.prototype, "dicRewardItemIds", void 0);
    __decorate([
        Column(`{ [key: number]: number }`),
        __metadata("design:type", Object)
    ], PlanRewardEntity.prototype, "dicRewardItemNums", void 0);
    __decorate([
        Column(`{ [key: number]: number }`),
        __metadata("design:type", Object)
    ], PlanRewardEntity.prototype, "dicTime", void 0);
    __decorate([
        Column(`string[]`),
        __metadata("design:type", Array)
    ], PlanRewardEntity.prototype, "listReward", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlanRewardEntity.prototype, "drop_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlanRewardEntity.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], PlanRewardEntity.prototype, "data_id", void 0);
    class RealworldHeroEntity {
        constructor() {
            this.b2_hero_entity = 0;
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
            this.out_skill = [];
            this.inner_skill = [];
            this.shenfa_skill = [];
            this.model = 0;
            this.occupation_type = 0;
            this.geniu_skill = 0;
            this.quality = 0;
            this.melt_types = [];
            this.melt_ids = [];
            this.melt_nums = [];
            this.oringin_star = 0;
            this.star_max_limit = 0;
            this.b2_hero_id = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroEntity.prototype, "b2_hero_entity", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], RealworldHeroEntity.prototype, "hero_name", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroEntity.prototype, "level", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroEntity.prototype, "health", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroEntity.prototype, "attack", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroEntity.prototype, "defense", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroEntity.prototype, "critical", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroEntity.prototype, "hit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroEntity.prototype, "speed", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroEntity.prototype, "dodge", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroEntity.prototype, "fight_back", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroEntity.prototype, "parry", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldHeroEntity.prototype, "auto_skills", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldHeroEntity.prototype, "auto_skills_round", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldHeroEntity.prototype, "not_auto_skills", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldHeroEntity.prototype, "not_auto_skills_round", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroEntity.prototype, "five_attribute", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldHeroEntity.prototype, "out_skill", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldHeroEntity.prototype, "inner_skill", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldHeroEntity.prototype, "shenfa_skill", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroEntity.prototype, "model", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroEntity.prototype, "occupation_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroEntity.prototype, "geniu_skill", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroEntity.prototype, "quality", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldHeroEntity.prototype, "melt_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldHeroEntity.prototype, "melt_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldHeroEntity.prototype, "melt_nums", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroEntity.prototype, "oringin_star", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroEntity.prototype, "star_max_limit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroEntity.prototype, "b2_hero_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroEntity.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldHeroEntity.prototype, "data_id", void 0);
    class RealworldItemDropEntity {
        constructor() {
            this.npc_id = 0;
            this.drop_types = [];
            this.drop_probs = [];
            this.item_drop_probs = [];
            this.item_sequence_ids = [];
            this.sequence = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldItemDropEntity.prototype, "npc_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldItemDropEntity.prototype, "drop_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldItemDropEntity.prototype, "drop_probs", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldItemDropEntity.prototype, "item_drop_probs", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldItemDropEntity.prototype, "item_sequence_ids", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldItemDropEntity.prototype, "sequence", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldItemDropEntity.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldItemDropEntity.prototype, "data_id", void 0);
    class RealworldTaskEntity {
        constructor() {
            this.status = 0;
            this.target_progress = [];
            this.npc_name = 0;
            this.npc_id = 0;
            this.group = 0;
            this.limit_level = 0;
            this.type = 0;
            this.condition = [];
            this.target_num = [];
            this.recept_scene = 0;
            this.after_id = 0;
            this.reward_types = [];
            this.reward_ids = [];
            this.reward_numbers = [];
            this.receiving_npc = [];
            this.receiving_content = [];
            this.complete_npc = [];
            this.complete_content = [];
            this.belong = 0;
            this.chatType = 0;
            this.time_range = [];
            this.need_battle = 0;
            this.friends_team = [];
            this.friends_level = [];
            this.enemies_team = [];
            this.enemies_level = [];
            this.task_type = 0;
            this.task_commit_type = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldTaskEntity.prototype, "status", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldTaskEntity.prototype, "target_progress", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], RealworldTaskEntity.prototype, "task_name", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], RealworldTaskEntity.prototype, "description", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], RealworldTaskEntity.prototype, "icon", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldTaskEntity.prototype, "npc_name", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldTaskEntity.prototype, "npc_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldTaskEntity.prototype, "group", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldTaskEntity.prototype, "limit_level", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldTaskEntity.prototype, "type", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldTaskEntity.prototype, "condition", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldTaskEntity.prototype, "target_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldTaskEntity.prototype, "recept_scene", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldTaskEntity.prototype, "after_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldTaskEntity.prototype, "reward_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldTaskEntity.prototype, "reward_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldTaskEntity.prototype, "reward_numbers", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldTaskEntity.prototype, "receiving_npc", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldTaskEntity.prototype, "receiving_content", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldTaskEntity.prototype, "complete_npc", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldTaskEntity.prototype, "complete_content", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldTaskEntity.prototype, "belong", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldTaskEntity.prototype, "chatType", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldTaskEntity.prototype, "time_range", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldTaskEntity.prototype, "need_battle", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldTaskEntity.prototype, "friends_team", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldTaskEntity.prototype, "friends_level", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldTaskEntity.prototype, "enemies_team", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], RealworldTaskEntity.prototype, "enemies_level", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldTaskEntity.prototype, "task_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldTaskEntity.prototype, "task_commit_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldTaskEntity.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], RealworldTaskEntity.prototype, "data_id", void 0);
    class ShopSectionEntity {
        constructor() {
            this.location = 0;
            this.npc = 0;
            this.dicItem = {};
            this.lisItemType = [];
            this.lisDiscount = [];
            this.lisCostId = [];
            this.lisCostType = [];
            this.lisCost = [];
            this.lisState = [];
            this.freeTime = 0;
            this.buy_cost_id = 0;
            this.buy_cost_num = 0;
            this.buyTime = 0;
            this.totalTime = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], ShopSectionEntity.prototype, "data", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ShopSectionEntity.prototype, "location", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ShopSectionEntity.prototype, "npc", void 0);
    __decorate([
        Column(`{ [key: number]: number }`),
        __metadata("design:type", Object)
    ], ShopSectionEntity.prototype, "dicItem", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ShopSectionEntity.prototype, "lisItemType", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ShopSectionEntity.prototype, "lisDiscount", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ShopSectionEntity.prototype, "lisCostId", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ShopSectionEntity.prototype, "lisCostType", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ShopSectionEntity.prototype, "lisCost", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], ShopSectionEntity.prototype, "lisState", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ShopSectionEntity.prototype, "freeTime", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ShopSectionEntity.prototype, "buy_cost_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ShopSectionEntity.prototype, "buy_cost_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ShopSectionEntity.prototype, "buyTime", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ShopSectionEntity.prototype, "totalTime", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ShopSectionEntity.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], ShopSectionEntity.prototype, "data_id", void 0);
    class SignEntity {
        constructor() {
            this.sign_state = false;
            this.day = 0;
            this.item_types = [];
            this.item_ids = [];
            this.num = [];
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`boolean`),
        __metadata("design:type", Boolean)
    ], SignEntity.prototype, "sign_state", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], SignEntity.prototype, "sign_week", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SignEntity.prototype, "day", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], SignEntity.prototype, "sign_name", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], SignEntity.prototype, "icon", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SignEntity.prototype, "item_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SignEntity.prototype, "item_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SignEntity.prototype, "num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SignEntity.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SignEntity.prototype, "data_id", void 0);
    class SkillCompundEntity {
        constructor() {
            this.npc_id = 0;
            this.level = 0;
            this.exp = 0;
            this.need_exp = 0;
            this.using_place = 0;
            this.read = false;
            this.type = 0;
            this.skill_ids = [];
            this.star = 0;
            this.quality = 0;
            this.five_attribute = 0;
            this.star_quality_limit = 0;
            this.icon = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompundEntity.prototype, "npc_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompundEntity.prototype, "level", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompundEntity.prototype, "exp", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompundEntity.prototype, "need_exp", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompundEntity.prototype, "using_place", void 0);
    __decorate([
        Column(`boolean`),
        __metadata("design:type", Boolean)
    ], SkillCompundEntity.prototype, "read", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], SkillCompundEntity.prototype, "skill_name", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompundEntity.prototype, "type", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], SkillCompundEntity.prototype, "desc", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], SkillCompundEntity.prototype, "skill_ids", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompundEntity.prototype, "star", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompundEntity.prototype, "quality", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompundEntity.prototype, "five_attribute", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompundEntity.prototype, "star_quality_limit", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompundEntity.prototype, "icon", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompundEntity.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], SkillCompundEntity.prototype, "data_id", void 0);
    class TaskEntity {
        constructor() {
            this.status = 0;
            this.target_progress = [];
            this.npc_name = 0;
            this.npc_id = 0;
            this.group = 0;
            this.limit_level = 0;
            this.type = 0;
            this.condition = [];
            this.target_num = [];
            this.recept_scene = 0;
            this.after_id = 0;
            this.reward_types = [];
            this.reward_ids = [];
            this.reward_numbers = [];
            this.receiving_npc = [];
            this.receiving_content = [];
            this.complete_npc = [];
            this.complete_content = [];
            this.belong = 0;
            this.chatType = 0;
            this.time_range = [];
            this.need_battle = 0;
            this.friends_team = [];
            this.friends_level = [];
            this.enemies_team = [];
            this.enemies_level = [];
            this.task_type = 0;
            this.task_commit_type = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskEntity.prototype, "status", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskEntity.prototype, "target_progress", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], TaskEntity.prototype, "task_name", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], TaskEntity.prototype, "description", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], TaskEntity.prototype, "icon", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskEntity.prototype, "npc_name", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskEntity.prototype, "npc_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskEntity.prototype, "group", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskEntity.prototype, "limit_level", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskEntity.prototype, "type", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskEntity.prototype, "condition", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskEntity.prototype, "target_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskEntity.prototype, "recept_scene", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskEntity.prototype, "after_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskEntity.prototype, "reward_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskEntity.prototype, "reward_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskEntity.prototype, "reward_numbers", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskEntity.prototype, "receiving_npc", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskEntity.prototype, "receiving_content", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskEntity.prototype, "complete_npc", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskEntity.prototype, "complete_content", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskEntity.prototype, "belong", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskEntity.prototype, "chatType", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskEntity.prototype, "time_range", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskEntity.prototype, "need_battle", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskEntity.prototype, "friends_team", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskEntity.prototype, "friends_level", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskEntity.prototype, "enemies_team", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskEntity.prototype, "enemies_level", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskEntity.prototype, "task_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskEntity.prototype, "task_commit_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskEntity.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskEntity.prototype, "data_id", void 0);
    class TaskEventEntity {
        constructor() {
            this.taskId = 0;
            this.actionType = 0;
            this.taskState = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskEventEntity.prototype, "taskId", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskEventEntity.prototype, "actionType", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], TaskEventEntity.prototype, "taskEventNpcChatDetail", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], TaskEventEntity.prototype, "taskEventNpcGiftDetail", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], TaskEventEntity.prototype, "taskEventNpcKill", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], TaskEventEntity.prototype, "taskEventNpcEnvelopeDispatch", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], TaskEventEntity.prototype, "taskEventNpcFight", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskEventEntity.prototype, "taskState", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskEventEntity.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskEventEntity.prototype, "data_id", void 0);
    class TaskGuideEntity {
        constructor() {
            this.taskId = 0;
            this.state = 0;
            this.limitTypeState = {};
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskGuideEntity.prototype, "taskId", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskGuideEntity.prototype, "state", void 0);
    __decorate([
        Column(`{ [key: number]: number }`),
        __metadata("design:type", Object)
    ], TaskGuideEntity.prototype, "limitTypeState", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskGuideEntity.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskGuideEntity.prototype, "data_id", void 0);
    class TaskSectionEntity {
        constructor() {
            this.status = 0;
            this.target_progress = [];
            this.npc_name = 0;
            this.npc_id = 0;
            this.group = 0;
            this.limit_level = 0;
            this.type = 0;
            this.condition = [];
            this.target_num = [];
            this.recept_scene = 0;
            this.after_id = 0;
            this.reward_types = [];
            this.reward_ids = [];
            this.reward_numbers = [];
            this.receiving_npc = [];
            this.receiving_content = [];
            this.complete_npc = [];
            this.complete_content = [];
            this.belong = 0;
            this.chatType = 0;
            this.task_type = 0;
            this.id = 0;
            this.data_id = 0;
        }
    }
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskSectionEntity.prototype, "status", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskSectionEntity.prototype, "target_progress", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], TaskSectionEntity.prototype, "task_name", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], TaskSectionEntity.prototype, "description", void 0);
    __decorate([
        Column(`string`),
        __metadata("design:type", String)
    ], TaskSectionEntity.prototype, "icon", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskSectionEntity.prototype, "npc_name", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskSectionEntity.prototype, "npc_id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskSectionEntity.prototype, "group", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskSectionEntity.prototype, "limit_level", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskSectionEntity.prototype, "type", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskSectionEntity.prototype, "condition", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskSectionEntity.prototype, "target_num", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskSectionEntity.prototype, "recept_scene", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskSectionEntity.prototype, "after_id", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskSectionEntity.prototype, "reward_types", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskSectionEntity.prototype, "reward_ids", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskSectionEntity.prototype, "reward_numbers", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskSectionEntity.prototype, "receiving_npc", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskSectionEntity.prototype, "receiving_content", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskSectionEntity.prototype, "complete_npc", void 0);
    __decorate([
        Column(`number[]`),
        __metadata("design:type", Array)
    ], TaskSectionEntity.prototype, "complete_content", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskSectionEntity.prototype, "belong", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskSectionEntity.prototype, "chatType", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskSectionEntity.prototype, "task_type", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskSectionEntity.prototype, "id", void 0);
    __decorate([
        Column(`number`),
        __metadata("design:type", Number)
    ], TaskSectionEntity.prototype, "data_id", void 0);
}
//# sourceMappingURL=export.js.map