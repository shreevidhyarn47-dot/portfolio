import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import { seedDefaultsIfNeeded } from './config/seed';
import apiRoutes from './routes';
import { setupSwagger } from './swagger/swagger';
import { errorHandler } from './middleware/errorHandler';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173';

// 1. Core Middlewares
app.use(
  cors({
    origin: [CLIENT_ORIGIN, 'http://localhost:5173', 'http://127.0.0.1:5173', 'http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2. Swagger Documentation UI
setupSwagger(app);

// 3. Root route
app.get('/', (_req: Request, res: Response) => {
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
app.use('/api', apiRoutes);

// 5. 404 Route Handler
app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: `Resource not found at ${req.originalUrl}`
  });
});

// 6. Centralized Error Handling Middleware
app.use(errorHandler);

// 7. Server Initialization
const startServer = async () => {
  try {
    await connectDB();
    await seedDefaultsIfNeeded();

    app.listen(PORT, () => {
      console.log(`===============================================`);
      console.log(`🚀 Shreevidhya Portfolio Server is running!`);
      console.log(`📡 URL: http://localhost:${PORT}`);
      console.log(`📚 Swagger Docs: http://localhost:${PORT}/api-docs`);
      console.log(`⚙️  Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log(`===============================================`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
};

startServer();

export default app;
