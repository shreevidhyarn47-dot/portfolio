import { Request, Response, NextFunction } from 'express';
import { skillService } from '../services/skillService';
import { ApiError } from '../middleware/errorHandler';

export class SkillController {
  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const category = req.query.category as string | undefined;
      const items = await skillService.getAll(category);
      res.status(200).json({ success: true, count: items.length, data: items });
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const item = await skillService.getById(req.params.id);
      if (!item) throw new ApiError(404, 'Skill not found');
      res.status(200).json({ success: true, data: item });
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { name, category } = req.body;
      if (!name || !category) {
        throw new ApiError(400, 'Skill name and category are required.');
      }
      const item = await skillService.create(req.body);
      res.status(201).json({ success: true, message: 'Skill created', data: item });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const item = await skillService.update(req.params.id, req.body);
      if (!item) throw new ApiError(404, 'Skill not found');
      res.status(200).json({ success: true, message: 'Skill updated', data: item });
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const item = await skillService.delete(req.params.id);
      if (!item) throw new ApiError(404, 'Skill not found');
      res.status(200).json({ success: true, message: 'Skill deleted' });
    } catch (error) {
      next(error);
    }
  }
}

export const skillController = new SkillController();
