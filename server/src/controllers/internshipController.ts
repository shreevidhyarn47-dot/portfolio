import { Request, Response, NextFunction } from 'express';
import { internshipService } from '../services/internshipService';
import { ApiError } from '../middleware/errorHandler';

export class InternshipController {
  async getAll(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const items = await internshipService.getAll();
      res.status(200).json({ success: true, count: items.length, data: items });
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const item = await internshipService.getById(req.params.id);
      if (!item) throw new ApiError(404, 'Internship not found');
      res.status(200).json({ success: true, data: item });
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { company, role, duration, description } = req.body;
      if (!company || !role || !duration || !description) {
        throw new ApiError(400, 'Company, role, duration, and description are required.');
      }
      const item = await internshipService.create(req.body);
      res.status(201).json({ success: true, message: 'Internship created', data: item });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const item = await internshipService.update(req.params.id, req.body);
      if (!item) throw new ApiError(404, 'Internship not found');
      res.status(200).json({ success: true, message: 'Internship updated', data: item });
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const item = await internshipService.delete(req.params.id);
      if (!item) throw new ApiError(404, 'Internship not found');
      res.status(200).json({ success: true, message: 'Internship deleted' });
    } catch (error) {
      next(error);
    }
  }
}

export const internshipController = new InternshipController();
