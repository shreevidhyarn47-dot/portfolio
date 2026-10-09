import { Request, Response, NextFunction } from 'express';
import { educationService } from '../services/educationService';
import { ApiError } from '../middleware/errorHandler';

export class EducationController {
  async getAll(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const items = await educationService.getAll();
      res.status(200).json({ success: true, count: items.length, data: items });
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const item = await educationService.getById(req.params.id);
      if (!item) throw new ApiError(404, 'Education entry not found');
      res.status(200).json({ success: true, data: item });
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { college, degree, department, year } = req.body;
      if (!college || !degree || !department || !year) {
        throw new ApiError(400, 'College, degree, department, and year are required.');
      }
      const item = await educationService.create(req.body);
      res.status(201).json({ success: true, message: 'Education entry created', data: item });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const item = await educationService.update(req.params.id, req.body);
      if (!item) throw new ApiError(404, 'Education entry not found');
      res.status(200).json({ success: true, message: 'Education entry updated', data: item });
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const item = await educationService.delete(req.params.id);
      if (!item) throw new ApiError(404, 'Education entry not found');
      res.status(200).json({ success: true, message: 'Education entry deleted' });
    } catch (error) {
      next(error);
    }
  }
}

export const educationController = new EducationController();
