import { Request, Response, NextFunction } from 'express';
import { profileService } from '../services/profileService';
import { ApiError } from '../middleware/errorHandler';

export class ProfileController {
  async getProfile(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const profile = await profileService.getProfile();
      if (!profile) {
        throw new ApiError(404, 'Profile data not found. Please run the database seeder.');
      }
      res.status(200).json({
        success: true,
        data: profile
      });
    } catch (error) {
      next(error);
    }
  }

  async updateProfile(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const profile = await profileService.updateOrCreateProfile(req.body);
      res.status(200).json({
        success: true,
        message: 'Profile updated successfully',
        data: profile
      });
    } catch (error) {
      next(error);
    }
  }
}

export const profileController = new ProfileController();
