import { Router } from 'express';
import { skillController } from '../controllers/skillController';
import { authenticateAdmin } from '../middleware/authMiddleware';

const router = Router();

router.get('/', (req, res, next) => skillController.getAll(req, res, next));
router.get('/:id', (req, res, next) => skillController.getById(req, res, next));
router.post('/', authenticateAdmin as any, (req, res, next) => skillController.create(req, res, next));
router.put('/:id', authenticateAdmin as any, (req, res, next) => skillController.update(req, res, next));
router.delete('/:id', authenticateAdmin as any, (req, res, next) => skillController.delete(req, res, next));

export default router;
