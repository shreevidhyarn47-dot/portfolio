"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.educationService = exports.EducationService = void 0;
const Education_1 = require("../models/Education");
class EducationService {
    async getAll() {
        return Education_1.Education.find().sort({ order: 1, createdAt: -1 });
    }
    async getById(id) {
        return Education_1.Education.findById(id);
    }
    async create(data) {
        const item = new Education_1.Education(data);
        return item.save();
    }
    async update(id, data) {
        return Education_1.Education.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    }
    async delete(id) {
        return Education_1.Education.findByIdAndDelete(id);
    }
}
exports.EducationService = EducationService;
exports.educationService = new EducationService();
