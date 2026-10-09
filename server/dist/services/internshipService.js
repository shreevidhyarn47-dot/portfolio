"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.internshipService = exports.InternshipService = void 0;
const Internship_1 = require("../models/Internship");
class InternshipService {
    async getAll() {
        return Internship_1.Internship.find().sort({ order: 1, createdAt: -1 });
    }
    async getById(id) {
        return Internship_1.Internship.findById(id);
    }
    async create(data) {
        const item = new Internship_1.Internship(data);
        return item.save();
    }
    async update(id, data) {
        return Internship_1.Internship.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    }
    async delete(id) {
        return Internship_1.Internship.findByIdAndDelete(id);
    }
}
exports.InternshipService = InternshipService;
exports.internshipService = new InternshipService();
