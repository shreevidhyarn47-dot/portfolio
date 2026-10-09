import { Router } from 'express';
import { profileController } from '../controllers/profileController';
import { authenticateAdmin } from '../middleware/authMiddleware';

const router = Router();

router.get('/', (req, res, next) => profileController.getProfile(req, res, next));
router.put('/', authenticateAdmin as any, (req, res, next) => profileController.updateProfile(req, res, next));

export default router;
