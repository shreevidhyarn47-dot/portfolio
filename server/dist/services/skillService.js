"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillService = exports.SkillService = void 0;
const Skill_1 = require("../models/Skill");
class SkillService {
    async getAll(category) {
        const filter = category ? { category } : {};
        return Skill_1.Skill.find(filter).sort({ order: 1, proficiency: -1 });
    }
    async getById(id) {
        return Skill_1.Skill.findById(id);
    }
    async create(data) {
        const item = new Skill_1.Skill(data);
        return item.save();
    }
    async update(id, data) {
        return Skill_1.Skill.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    }
    async delete(id) {
        return Skill_1.Skill.findByIdAndDelete(id);
    }
}
exports.SkillService = SkillService;
exports.skillService = new SkillService();
