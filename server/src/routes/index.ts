import { Router } from 'express';
import authRoutes from './authRoutes';
import profileRoutes from './profileRoutes';
import educationRoutes from './educationRoutes';
import skillRoutes from './skillRoutes';
import projectRoutes from './projectRoutes';
import internshipRoutes from './internshipRoutes';
import certificationRoutes from './certificationRoutes';
import achievementRoutes from './achievementRoutes';
import experienceRoutes from './experienceRoutes';
import contactRoutes from './contactRoutes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/profile', profileRoutes);
router.use('/education', educationRoutes);
router.use('/skills', skillRoutes);
router.use('/projects', projectRoutes);
router.use('/internships', internshipRoutes);
router.use('/certifications', certificationRoutes);
router.use('/achievements', achievementRoutes);
router.use('/experience', experienceRoutes);
router.use('/contact', contactRoutes);

router.get('/health', (_req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Portfolio CMS REST API is running smoothly',
    timestamp: new Date().toISOString()
  });
});

export default router;
