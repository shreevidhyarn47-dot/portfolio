import { Request, Response, NextFunction } from 'express';
import { User } from '../models/User';
import { signToken } from '../utils/jwt';
import { ApiError } from '../middleware/errorHandler';
import { AuthenticatedRequest } from '../middleware/authMiddleware';

export class AuthController {
  async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw new ApiError(400, 'Please provide both email and password.');
      }

      const user = await User.findOne({ email: email.toLowerCase().trim() }).select('+password');
      if (!user) {
        throw new ApiError(401, 'Invalid email or password credentials.');
      }

      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        throw new ApiError(401, 'Invalid email or password credentials.');
      }

      const token = signToken({
        userId: (user._id as any).toString(),
        role: user.role,
        email: user.email
      });

      res.status(200).json({
        success: true,
        message: 'Admin authentication successful',
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role
        }
      });
    } catch (error) {
      next(error);
    }
  }

  async getMe(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = req.user;
      if (!user) {
        throw new ApiError(401, 'Not authenticated');
      }

      res.status(200).json({
        success: true,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role
        }
      });
    } catch (error) {
      next(error);
    }
  }

  async changePassword(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const { currentPassword, newPassword } = req.body;
      const user = await User.findById(req.user?._id).select('+password');

      if (!user) {
        throw new ApiError(404, 'User not found');
      }

      if (!currentPassword || !newPassword) {
        throw new ApiError(400, 'Please supply both current and new password');
      }

      if (newPassword.length < 6) {
        throw new ApiError(400, 'New password must be at least 6 characters');
      }

      const isMatch = await user.comparePassword(currentPassword);
      if (!isMatch) {
        throw new ApiError(401, 'Current password is incorrect');
      }

      user.password = newPassword;
      await user.save();

      res.status(200).json({
        success: true,
        message: 'Password updated successfully'
      });
    } catch (error) {
      next(error);
    }
  }
}

export const authController = new AuthController();
