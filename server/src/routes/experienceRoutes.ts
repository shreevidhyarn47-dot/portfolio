import { Router } from 'express';
import { experienceController } from '../controllers/experienceController';
import { authenticateAdmin } from '../middleware/authMiddleware';

const router = Router();

router.get('/', (req, res, next) => experienceController.getAll(req, res, next));
router.get('/:id', (req, res, next) => experienceController.getById(req, res, next));
router.post('/', authenticateAdmin as any, (req, res, next) => experienceController.create(req, res, next));
router.put('/:id', authenticateAdmin as any, (req, res, next) => experienceController.update(req, res, next));
router.delete('/:id', authenticateAdmin as any, (req, res, next) => experienceController.delete(req, res, next));

export default router;
