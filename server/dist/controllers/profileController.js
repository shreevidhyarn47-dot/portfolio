"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileController = exports.ProfileController = void 0;
const profileService_1 = require("../services/profileService");
const errorHandler_1 = require("../middleware/errorHandler");
class ProfileController {
    async getProfile(_req, res, next) {
        try {
            const profile = await profileService_1.profileService.getProfile();
            if (!profile) {
                throw new errorHandler_1.ApiError(404, 'Profile data not found. Please run the database seeder.');
            }
            res.status(200).json({
                success: true,
                data: profile
            });
        }
        catch (error) {
            next(error);
        }
    }
    async updateProfile(req, res, next) {
        try {
            const profile = await profileService_1.profileService.updateOrCreateProfile(req.body);
            res.status(200).json({
                success: true,
                message: 'Profile updated successfully',
                data: profile
            });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.ProfileController = ProfileController;
exports.profileController = new ProfileController();
