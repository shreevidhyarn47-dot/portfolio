"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = exports.AuthController = void 0;
const User_1 = require("../models/User");
const jwt_1 = require("../utils/jwt");
const errorHandler_1 = require("../middleware/errorHandler");
class AuthController {
    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                throw new errorHandler_1.ApiError(400, 'Please provide both email and password.');
            }
            const user = await User_1.User.findOne({ email: email.toLowerCase().trim() }).select('+password');
            if (!user) {
                throw new errorHandler_1.ApiError(401, 'Invalid email or password credentials.');
            }
            const isMatch = await user.comparePassword(password);
            if (!isMatch) {
                throw new errorHandler_1.ApiError(401, 'Invalid email or password credentials.');
            }
            const token = (0, jwt_1.signToken)({
                userId: user._id.toString(),
                role: user.role,
                email: user.email
            });
            res.status(200).json({
                success: true,
                message: 'Admin authentication successful',
                token,
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                }
            });
        }
        catch (error) {
            next(error);
        }
    }
    async getMe(req, res, next) {
        try {
            const user = req.user;
            if (!user) {
                throw new errorHandler_1.ApiError(401, 'Not authenticated');
            }
            res.status(200).json({
                success: true,
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                }
            });
        }
        catch (error) {
            next(error);
        }
    }
    async changePassword(req, res, next) {
        try {
            const { currentPassword, newPassword } = req.body;
            const user = await User_1.User.findById(req.user?._id).select('+password');
            if (!user) {
                throw new errorHandler_1.ApiError(404, 'User not found');
            }
            if (!currentPassword || !newPassword) {
                throw new errorHandler_1.ApiError(400, 'Please supply both current and new password');
            }
            if (newPassword.length < 6) {
                throw new errorHandler_1.ApiError(400, 'New password must be at least 6 characters');
            }
            const isMatch = await user.comparePassword(currentPassword);
            if (!isMatch) {
                throw new errorHandler_1.ApiError(401, 'Current password is incorrect');
            }
            user.password = newPassword;
            await user.save();
            res.status(200).json({
                success: true,
                message: 'Password updated successfully'
            });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.AuthController = AuthController;
exports.authController = new AuthController();
