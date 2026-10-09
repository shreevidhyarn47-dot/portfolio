import { Router } from 'express';
import { certificationController } from '../controllers/certificationController';
import { authenticateAdmin } from '../middleware/authMiddleware';

const router = Router();

router.get('/', (req, res, next) => certificationController.getCertifications(req, res, next));
router.get('/:id', (req, res, next) => certificationController.getCertificationById(req, res, next));
router.post('/', authenticateAdmin as any, (req, res, next) => certificationController.createCertification(req, res, next));
router.put('/:id', authenticateAdmin as any, (req, res, next) => certificationController.updateCertification(req, res, next));
router.delete('/:id', authenticateAdmin as any, (req, res, next) => certificationController.deleteCertification(req, res, next));

export default router;
