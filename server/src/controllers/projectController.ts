import { Request, Response, NextFunction } from 'express';
import { projectService } from '../services/projectService';
import { ApiError } from '../middleware/errorHandler';

export class ProjectController {
  async getProjects(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const category = req.query.category as string | undefined;
      const projects = await projectService.getAllProjects(category);
      res.status(200).json({
        success: true,
        count: projects.length,
        data: projects
      });
    } catch (error) {
      next(error);
    }
  }

  async getProjectById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const project = await projectService.getProjectById(id);
      if (!project) {
        throw new ApiError(404, `Project not found with id ${id}`);
      }
      res.status(200).json({
        success: true,
        data: project
      });
    } catch (error) {
      next(error);
    }
  }

  async createProject(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { title, description, technologies, githubUrl, category } = req.body;
      if (!title || !description || !technologies || !githubUrl || !category) {
        throw new ApiError(400, 'Please provide title, description, technologies, githubUrl, and category');
      }
      const project = await projectService.createProject(req.body);
      res.status(201).json({
        success: true,
        message: 'Project created successfully',
        data: project
      });
    } catch (error) {
      next(error);
    }
  }

  async updateProject(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const project = await projectService.updateProject(id, req.body);
      if (!project) {
        throw new ApiError(404, `Project not found with id ${id}`);
      }
      res.status(200).json({
        success: true,
        message: 'Project updated successfully',
        data: project
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteProject(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const project = await projectService.deleteProject(id);
      if (!project) {
        throw new ApiError(404, `Project not found with id ${id}`);
      }
      res.status(200).json({
        success: true,
        message: 'Project deleted successfully'
      });
    } catch (error) {
      next(error);
    }
  }
}

export const projectController = new ProjectController();
