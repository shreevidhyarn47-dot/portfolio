"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/shreevidhya_portfolio';
        await mongoose_1.default.connect(mongoUri);
        console.log(`[MongoDB] Connected successfully to database: ${mongoose_1.default.connection.name}`);
    }
    catch (error) {
        console.error('[MongoDB] Connection error:', error);
        // Don't kill process immediately in dev mode if MongoDB is not running yet,
        // so API can still return helpful errors or seed instructions.
    }
};
exports.connectDB = connectDB;
