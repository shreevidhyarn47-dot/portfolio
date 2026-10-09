import { Router } from 'express';
import { contactController } from '../controllers/contactController';
import { authenticateAdmin } from '../middleware/authMiddleware';

const router = Router();

router.post('/', (req, res, next) => contactController.submitContactMessage(req, res, next));
router.get('/', authenticateAdmin as any, (req, res, next) => contactController.getContactMessages(req, res, next));
router.delete('/:id', authenticateAdmin as any, (req, res, next) => contactController.deleteContactMessage(req, res, next));

export default router;
