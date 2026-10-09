import { Router } from 'express';
import { projectController } from '../controllers/projectController';
import { authenticateAdmin } from '../middleware/authMiddleware';

const router = Router();

router.get('/', (req, res, next) => projectController.getProjects(req, res, next));
router.get('/:id', (req, res, next) => projectController.getProjectById(req, res, next));
router.post('/', authenticateAdmin as any, (req, res, next) => projectController.createProject(req, res, next));
router.put('/:id', authenticateAdmin as any, (req, res, next) => projectController.updateProject(req, res, next));
router.delete('/:id', authenticateAdmin as any, (req, res, next) => projectController.deleteProject(req, res, next));

export default router;
