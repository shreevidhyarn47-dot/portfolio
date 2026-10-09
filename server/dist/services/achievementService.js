"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.achievementService = exports.AchievementService = void 0;
const Achievement_1 = require("../models/Achievement");
class AchievementService {
    async getAll() {
        return Achievement_1.Achievement.find().sort({ order: 1, createdAt: -1 });
    }
    async getById(id) {
        return Achievement_1.Achievement.findById(id);
    }
    async create(data) {
        const item = new Achievement_1.Achievement(data);
        return item.save();
    }
    async update(id, data) {
        return Achievement_1.Achievement.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    }
    async delete(id) {
        return Achievement_1.Achievement.findByIdAndDelete(id);
    }
}
exports.AchievementService = AchievementService;
exports.achievementService = new AchievementService();
