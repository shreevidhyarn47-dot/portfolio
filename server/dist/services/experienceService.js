"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.experienceService = exports.ExperienceService = void 0;
const Experience_1 = require("../models/Experience");
class ExperienceService {
    async getAll() {
        return Experience_1.Experience.find().sort({ order: 1, createdAt: -1 });
    }
    async getById(id) {
        return Experience_1.Experience.findById(id);
    }
    async create(data) {
        const item = new Experience_1.Experience(data);
        return item.save();
    }
    async update(id, data) {
        return Experience_1.Experience.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    }
    async delete(id) {
        return Experience_1.Experience.findByIdAndDelete(id);
    }
}
exports.ExperienceService = ExperienceService;
exports.experienceService = new ExperienceService();
