"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profileController_1 = require("../controllers/profileController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => profileController_1.profileController.getProfile(req, res, next));
router.put('/', authMiddleware_1.authenticateAdmin, (req, res, next) => profileController_1.profileController.updateProfile(req, res, next));
exports.default = router;
