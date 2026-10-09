import { Router } from 'express';
import { achievementController } from '../controllers/achievementController';
import { authenticateAdmin } from '../middleware/authMiddleware';

const router = Router();

router.get('/', (req, res, next) => achievementController.getAll(req, res, next));
router.get('/:id', (req, res, next) => achievementController.getById(req, res, next));
router.post('/', authenticateAdmin as any, (req, res, next) => achievementController.create(req, res, next));
router.put('/:id', authenticateAdmin as any, (req, res, next) => achievementController.update(req, res, next));
router.delete('/:id', authenticateAdmin as any, (req, res, next) => achievementController.delete(req, res, next));

export default router;
