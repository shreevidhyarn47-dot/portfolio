"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.educationController = exports.EducationController = void 0;
const educationService_1 = require("../services/educationService");
const errorHandler_1 = require("../middleware/errorHandler");
class EducationController {
    async getAll(_req, res, next) {
        try {
            const items = await educationService_1.educationService.getAll();
            res.status(200).json({ success: true, count: items.length, data: items });
        }
        catch (error) {
            next(error);
        }
    }
    async getById(req, res, next) {
        try {
            const item = await educationService_1.educationService.getById(req.params.id);
            if (!item)
                throw new errorHandler_1.ApiError(404, 'Education entry not found');
            res.status(200).json({ success: true, data: item });
        }
        catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            const { college, degree, department, year } = req.body;
            if (!college || !degree || !department || !year) {
                throw new errorHandler_1.ApiError(400, 'College, degree, department, and year are required.');
            }
            const item = await educationService_1.educationService.create(req.body);
            res.status(201).json({ success: true, message: 'Education entry created', data: item });
        }
        catch (error) {
            next(error);
        }
    }
    async update(req, res, next) {
        try {
            const item = await educationService_1.educationService.update(req.params.id, req.body);
            if (!item)
                throw new errorHandler_1.ApiError(404, 'Education entry not found');
            res.status(200).json({ success: true, message: 'Education entry updated', data: item });
        }
        catch (error) {
            next(error);
        }
    }
    async delete(req, res, next) {
        try {
            const item = await educationService_1.educationService.delete(req.params.id);
            if (!item)
                throw new errorHandler_1.ApiError(404, 'Education entry not found');
            res.status(200).json({ success: true, message: 'Education entry deleted' });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.EducationController = EducationController;
exports.educationController = new EducationController();
