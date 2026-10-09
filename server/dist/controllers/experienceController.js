"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.experienceController = exports.ExperienceController = void 0;
const experienceService_1 = require("../services/experienceService");
const errorHandler_1 = require("../middleware/errorHandler");
class ExperienceController {
    async getAll(_req, res, next) {
        try {
            const items = await experienceService_1.experienceService.getAll();
            res.status(200).json({ success: true, count: items.length, data: items });
        }
        catch (error) {
            next(error);
        }
    }
    async getById(req, res, next) {
        try {
            const item = await experienceService_1.experienceService.getById(req.params.id);
            if (!item)
                throw new errorHandler_1.ApiError(404, 'Experience entry not found');
            res.status(200).json({ success: true, data: item });
        }
        catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            const { title, organization, period, description } = req.body;
            if (!title || !organization || !period || !description) {
                throw new errorHandler_1.ApiError(400, 'Title, organization, period, and description are required.');
            }
            const item = await experienceService_1.experienceService.create(req.body);
            res.status(201).json({ success: true, message: 'Experience created', data: item });
        }
        catch (error) {
            next(error);
        }
    }
    async update(req, res, next) {
        try {
            const item = await experienceService_1.experienceService.update(req.params.id, req.body);
            if (!item)
                throw new errorHandler_1.ApiError(404, 'Experience entry not found');
            res.status(200).json({ success: true, message: 'Experience updated', data: item });
        }
        catch (error) {
            next(error);
        }
    }
    async delete(req, res, next) {
        try {
            const item = await experienceService_1.experienceService.delete(req.params.id);
            if (!item)
                throw new errorHandler_1.ApiError(404, 'Experience entry not found');
            res.status(200).json({ success: true, message: 'Experience deleted' });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.ExperienceController = ExperienceController;
exports.experienceController = new ExperienceController();
