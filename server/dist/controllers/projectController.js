"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectController = exports.ProjectController = void 0;
const projectService_1 = require("../services/projectService");
const errorHandler_1 = require("../middleware/errorHandler");
class ProjectController {
    async getProjects(req, res, next) {
        try {
            const category = req.query.category;
            const projects = await projectService_1.projectService.getAllProjects(category);
            res.status(200).json({
                success: true,
                count: projects.length,
                data: projects
            });
        }
        catch (error) {
            next(error);
        }
    }
    async getProjectById(req, res, next) {
        try {
            const { id } = req.params;
            const project = await projectService_1.projectService.getProjectById(id);
            if (!project) {
                throw new errorHandler_1.ApiError(404, `Project not found with id ${id}`);
            }
            res.status(200).json({
                success: true,
                data: project
            });
        }
        catch (error) {
            next(error);
        }
    }
    async createProject(req, res, next) {
        try {
            const { title, description, technologies, githubUrl, category } = req.body;
            if (!title || !description || !technologies || !githubUrl || !category) {
                throw new errorHandler_1.ApiError(400, 'Please provide title, description, technologies, githubUrl, and category');
            }
            const project = await projectService_1.projectService.createProject(req.body);
            res.status(201).json({
                success: true,
                message: 'Project created successfully',
                data: project
            });
        }
        catch (error) {
            next(error);
        }
    }
    async updateProject(req, res, next) {
        try {
            const { id } = req.params;
            const project = await projectService_1.projectService.updateProject(id, req.body);
            if (!project) {
                throw new errorHandler_1.ApiError(404, `Project not found with id ${id}`);
            }
            res.status(200).json({
                success: true,
                message: 'Project updated successfully',
                data: project
            });
        }
        catch (error) {
            next(error);
        }
    }
    async deleteProject(req, res, next) {
        try {
            const { id } = req.params;
            const project = await projectService_1.projectService.deleteProject(id);
            if (!project) {
                throw new errorHandler_1.ApiError(404, `Project not found with id ${id}`);
            }
            res.status(200).json({
                success: true,
                message: 'Project deleted successfully'
            });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.ProjectController = ProjectController;
exports.projectController = new ProjectController();
