"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authRoutes_1 = __importDefault(require("./authRoutes"));
const profileRoutes_1 = __importDefault(require("./profileRoutes"));
const educationRoutes_1 = __importDefault(require("./educationRoutes"));
const skillRoutes_1 = __importDefault(require("./skillRoutes"));
const projectRoutes_1 = __importDefault(require("./projectRoutes"));
const internshipRoutes_1 = __importDefault(require("./internshipRoutes"));
const certificationRoutes_1 = __importDefault(require("./certificationRoutes"));
const achievementRoutes_1 = __importDefault(require("./achievementRoutes"));
const experienceRoutes_1 = __importDefault(require("./experienceRoutes"));
const contactRoutes_1 = __importDefault(require("./contactRoutes"));
const router = (0, express_1.Router)();
router.use('/auth', authRoutes_1.default);
router.use('/profile', profileRoutes_1.default);
router.use('/education', educationRoutes_1.default);
router.use('/skills', skillRoutes_1.default);
router.use('/projects', projectRoutes_1.default);
router.use('/internships', internshipRoutes_1.default);
router.use('/certifications', certificationRoutes_1.default);
router.use('/achievements', achievementRoutes_1.default);
router.use('/experience', experienceRoutes_1.default);
router.use('/contact', contactRoutes_1.default);
router.get('/health', (_req, res) => {
    res.status(200).json({
        status: 'ok',
        message: 'Portfolio CMS REST API is running smoothly',
        timestamp: new Date().toISOString()
    });
});
exports.default = router;
