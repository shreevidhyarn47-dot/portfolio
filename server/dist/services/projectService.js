"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectService = exports.ProjectService = void 0;
const Project_1 = require("../models/Project");
class ProjectService {
    async getAllProjects(category) {
        const filter = category && category !== 'All' ? { category } : {};
        return Project_1.Project.find(filter).sort({ order: 1, createdAt: -1 });
    }
    async getProjectById(id) {
        return Project_1.Project.findById(id);
    }
    async createProject(data) {
        const project = new Project_1.Project(data);
        return project.save();
    }
    async updateProject(id, data) {
        return Project_1.Project.findByIdAndUpdate(id, data, {
            new: true,
            runValidators: true
        });
    }
    async deleteProject(id) {
        return Project_1.Project.findByIdAndDelete(id);
    }
}
exports.ProjectService = ProjectService;
exports.projectService = new ProjectService();
