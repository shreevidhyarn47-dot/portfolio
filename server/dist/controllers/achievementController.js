"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.achievementController = exports.AchievementController = void 0;
const achievementService_1 = require("../services/achievementService");
const errorHandler_1 = require("../middleware/errorHandler");
class AchievementController {
    async getAll(_req, res, next) {
        try {
            const items = await achievementService_1.achievementService.getAll();
            res.status(200).json({ success: true, count: items.length, data: items });
        }
        catch (error) {
            next(error);
        }
    }
    async getById(req, res, next) {
        try {
            const item = await achievementService_1.achievementService.getById(req.params.id);
            if (!item)
                throw new errorHandler_1.ApiError(404, 'Achievement not found');
            res.status(200).json({ success: true, data: item });
        }
        catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            const { title, description, date } = req.body;
            if (!title || !description || !date) {
                throw new errorHandler_1.ApiError(400, 'Title, description, and date are required.');
            }
            const item = await achievementService_1.achievementService.create(req.body);
            res.status(201).json({ success: true, message: 'Achievement created', data: item });
        }
        catch (error) {
            next(error);
        }
    }
    async update(req, res, next) {
        try {
            const item = await achievementService_1.achievementService.update(req.params.id, req.body);
            if (!item)
                throw new errorHandler_1.ApiError(404, 'Achievement not found');
            res.status(200).json({ success: true, message: 'Achievement updated', data: item });
        }
        catch (error) {
            next(error);
        }
    }
    async delete(req, res, next) {
        try {
            const item = await achievementService_1.achievementService.delete(req.params.id);
            if (!item)
                throw new errorHandler_1.ApiError(404, 'Achievement not found');
            res.status(200).json({ success: true, message: 'Achievement deleted' });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.AchievementController = AchievementController;
exports.achievementController = new AchievementController();
