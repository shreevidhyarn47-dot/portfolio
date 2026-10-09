import { Request, Response, NextFunction } from 'express';
import { achievementService } from '../services/achievementService';
import { ApiError } from '../middleware/errorHandler';

export class AchievementController {
  async getAll(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const items = await achievementService.getAll();
      res.status(200).json({ success: true, count: items.length, data: items });
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const item = await achievementService.getById(req.params.id);
      if (!item) throw new ApiError(404, 'Achievement not found');
      res.status(200).json({ success: true, data: item });
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { title, description, date } = req.body;
      if (!title || !description || !date) {
        throw new ApiError(400, 'Title, description, and date are required.');
      }
      const item = await achievementService.create(req.body);
      res.status(201).json({ success: true, message: 'Achievement created', data: item });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const item = await achievementService.update(req.params.id, req.body);
      if (!item) throw new ApiError(404, 'Achievement not found');
      res.status(200).json({ success: true, message: 'Achievement updated', data: item });
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const item = await achievementService.delete(req.params.id);
      if (!item) throw new ApiError(404, 'Achievement not found');
      res.status(200).json({ success: true, message: 'Achievement deleted' });
    } catch (error) {
      next(error);
    }
  }
}

export const achievementController = new AchievementController();
