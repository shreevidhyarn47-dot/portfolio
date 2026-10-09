"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateAdmin = void 0;
const jwt_1 = require("../utils/jwt");
const User_1 = require("../models/User");
const errorHandler_1 = require("./errorHandler");
const authenticateAdmin = async (req, _res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw new errorHandler_1.ApiError(401, 'Access denied. No authentication token provided.');
        }
        const token = authHeader.split(' ')[1];
        let decoded;
        try {
            decoded = (0, jwt_1.verifyToken)(token);
        }
        catch (err) {
            throw new errorHandler_1.ApiError(401, 'Invalid or expired authentication token. Please log in again.');
        }
        const user = await User_1.User.findById(decoded.userId);
        if (!user) {
            throw new errorHandler_1.ApiError(401, 'The user associated with this token no longer exists.');
        }
        req.user = user;
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.authenticateAdmin = authenticateAdmin;
