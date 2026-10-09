import { Router } from 'express';
import { internshipController } from '../controllers/internshipController';
import { authenticateAdmin } from '../middleware/authMiddleware';

const router = Router();

router.get('/', (req, res, next) => internshipController.getAll(req, res, next));
router.get('/:id', (req, res, next) => internshipController.getById(req, res, next));
router.post('/', authenticateAdmin as any, (req, res, next) => internshipController.create(req, res, next));
router.put('/:id', authenticateAdmin as any, (req, res, next) => internshipController.update(req, res, next));
router.delete('/:id', authenticateAdmin as any, (req, res, next) => internshipController.delete(req, res, next));

export default router;
