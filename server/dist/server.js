"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./config/db");
const seed_1 = require("./config/seed");
const routes_1 = __importDefault(require("./routes"));
const swagger_1 = require("./swagger/swagger");
const errorHandler_1 = require("./middleware/errorHandler");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173';
// 1. Core Middlewares
app.use((0, cors_1.default)({
    origin: [CLIENT_ORIGIN, 'http://localhost:5173', 'http://127.0.0.1:5173', 'http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// 2. Swagger Documentation UI
(0, swagger_1.setupSwagger)(app);
// 3. Root route
app.get('/', (_req, res) => {
    res.json({
        message: "Welcome to Shreevidhya's Portfolio API",
        documentation: '/api-docs',
        endpoints: {
            profile: '/api/profile',
            projects: '/api/projects',
            certifications: '/api/certifications',
            contact: '/api/contact (POST)'
        }
    });
});
// 4. API Routes
app.use('/api', routes_1.default);
// 5. 404 Route Handler
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: `Resource not found at ${req.originalUrl}`
    });
});
// 6. Centralized Error Handling Middleware
app.use(errorHandler_1.errorHandler);
// 7. Server Initialization
const startServer = async () => {
    try {
        await (0, db_1.connectDB)();
        await (0, seed_1.seedDefaultsIfNeeded)();
        app.listen(PORT, () => {
            console.log(`===============================================`);
            console.log(`🚀 Shreevidhya Portfolio Server is running!`);
            console.log(`📡 URL: http://localhost:${PORT}`);
            console.log(`📚 Swagger Docs: http://localhost:${PORT}/api-docs`);
            console.log(`⚙️  Environment: ${process.env.NODE_ENV || 'development'}`);
            console.log(`===============================================`);
        });
    }
    catch (err) {
        console.error('Failed to start server:', err);
        process.exit(1);
    }
};
startServer();
exports.default = app;
