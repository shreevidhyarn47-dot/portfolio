import { Request, Response, NextFunction } from 'express';
import { experienceService } from '../services/experienceService';
import { ApiError } from '../middleware/errorHandler';

export class ExperienceController {
  async getAll(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const items = await experienceService.getAll();
      res.status(200).json({ success: true, count: items.length, data: items });
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const item = await experienceService.getById(req.params.id);
      if (!item) throw new ApiError(404, 'Experience entry not found');
      res.status(200).json({ success: true, data: item });
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { title, organization, period, description } = req.body;
      if (!title || !organization || !period || !description) {
        throw new ApiError(400, 'Title, organization, period, and description are required.');
      }
      const item = await experienceService.create(req.body);
      res.status(201).json({ success: true, message: 'Experience created', data: item });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const item = await experienceService.update(req.params.id, req.body);
      if (!item) throw new ApiError(404, 'Experience entry not found');
      res.status(200).json({ success: true, message: 'Experience updated', data: item });
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const item = await experienceService.delete(req.params.id);
      if (!item) throw new ApiError(404, 'Experience entry not found');
      res.status(200).json({ success: true, message: 'Experience deleted' });
    } catch (error) {
      next(error);
    }
  }
}

export const experienceController = new ExperienceController();
