"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillController = exports.SkillController = void 0;
const skillService_1 = require("../services/skillService");
const errorHandler_1 = require("../middleware/errorHandler");
class SkillController {
    async getAll(req, res, next) {
        try {
            const category = req.query.category;
            const items = await skillService_1.skillService.getAll(category);
            res.status(200).json({ success: true, count: items.length, data: items });
        }
        catch (error) {
            next(error);
        }
    }
    async getById(req, res, next) {
        try {
            const item = await skillService_1.skillService.getById(req.params.id);
            if (!item)
                throw new errorHandler_1.ApiError(404, 'Skill not found');
            res.status(200).json({ success: true, data: item });
        }
        catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            const { name, category } = req.body;
            if (!name || !category) {
                throw new errorHandler_1.ApiError(400, 'Skill name and category are required.');
            }
            const item = await skillService_1.skillService.create(req.body);
            res.status(201).json({ success: true, message: 'Skill created', data: item });
        }
        catch (error) {
            next(error);
        }
    }
    async update(req, res, next) {
        try {
            const item = await skillService_1.skillService.update(req.params.id, req.body);
            if (!item)
                throw new errorHandler_1.ApiError(404, 'Skill not found');
            res.status(200).json({ success: true, message: 'Skill updated', data: item });
        }
        catch (error) {
            next(error);
        }
    }
    async delete(req, res, next) {
        try {
            const item = await skillService_1.skillService.delete(req.params.id);
            if (!item)
                throw new errorHandler_1.ApiError(404, 'Skill not found');
            res.status(200).json({ success: true, message: 'Skill deleted' });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.SkillController = SkillController;
exports.skillController = new SkillController();
