import { Router } from 'express';
import { authController } from '../controllers/authController';
import { authenticateAdmin } from '../middleware/authMiddleware';

const router = Router();

router.post('/login', (req, res, next) => authController.login(req, res, next));
router.get('/me', authenticateAdmin as any, (req, res, next) => authController.getMe(req as any, res, next));
router.put('/password', authenticateAdmin as any, (req, res, next) => authController.changePassword(req as any, res, next));

export default router;
