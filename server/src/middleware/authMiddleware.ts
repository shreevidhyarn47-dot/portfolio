import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';
import { User, IUser } from '../models/User';
import { ApiError } from './errorHandler';

export interface AuthenticatedRequest extends Request {
  user?: IUser;
}

export const authenticateAdmin = async (
  req: AuthenticatedRequest,
  _res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new ApiError(401, 'Access denied. No authentication token provided.');
    }

    const token = authHeader.split(' ')[1];

    let decoded;
    try {
      decoded = verifyToken(token);
    } catch (err: any) {
      throw new ApiError(401, 'Invalid or expired authentication token. Please log in again.');
    }

    const user = await User.findById(decoded.userId);
    if (!user) {
      throw new ApiError(401, 'The user associated with this token no longer exists.');
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
