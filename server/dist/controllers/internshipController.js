"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.internshipController = exports.InternshipController = void 0;
const internshipService_1 = require("../services/internshipService");
const errorHandler_1 = require("../middleware/errorHandler");
class InternshipController {
    async getAll(_req, res, next) {
        try {
            const items = await internshipService_1.internshipService.getAll();
            res.status(200).json({ success: true, count: items.length, data: items });
        }
        catch (error) {
            next(error);
        }
    }
    async getById(req, res, next) {
        try {
            const item = await internshipService_1.internshipService.getById(req.params.id);
            if (!item)
                throw new errorHandler_1.ApiError(404, 'Internship not found');
            res.status(200).json({ success: true, data: item });
        }
        catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            const { company, role, duration, description } = req.body;
            if (!company || !role || !duration || !description) {
                throw new errorHandler_1.ApiError(400, 'Company, role, duration, and description are required.');
            }
            const item = await internshipService_1.internshipService.create(req.body);
            res.status(201).json({ success: true, message: 'Internship created', data: item });
        }
        catch (error) {
            next(error);
        }
    }
    async update(req, res, next) {
        try {
            const item = await internshipService_1.internshipService.update(req.params.id, req.body);
            if (!item)
                throw new errorHandler_1.ApiError(404, 'Internship not found');
            res.status(200).json({ success: true, message: 'Internship updated', data: item });
        }
        catch (error) {
            next(error);
        }
    }
    async delete(req, res, next) {
        try {
            const item = await internshipService_1.internshipService.delete(req.params.id);
            if (!item)
                throw new errorHandler_1.ApiError(404, 'Internship not found');
            res.status(200).json({ success: true, message: 'Internship deleted' });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.InternshipController = InternshipController;
exports.internshipController = new InternshipController();
