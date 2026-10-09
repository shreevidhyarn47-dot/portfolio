import { Router } from 'express';
import { educationController } from '../controllers/educationController';
import { authenticateAdmin } from '../middleware/authMiddleware';

const router = Router();

router.get('/', (req, res, next) => educationController.getAll(req, res, next));
router.get('/:id', (req, res, next) => educationController.getById(req, res, next));
router.post('/', authenticateAdmin as any, (req, res, next) => educationController.create(req, res, next));
router.put('/:id', authenticateAdmin as any, (req, res, next) => educationController.update(req, res, next));
router.delete('/:id', authenticateAdmin as any, (req, res, next) => educationController.delete(req, res, next));

export default router;
