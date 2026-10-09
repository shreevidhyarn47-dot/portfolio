import mongoose from 'mongoose';

export const connectDB = async (): Promise<void> => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/shreevidhya_portfolio';
    
    await mongoose.connect(mongoUri);
    console.log(`[MongoDB] Connected successfully to database: ${mongoose.connection.name}`);
  } catch (error) {
    console.error('[MongoDB] Connection error:', error);
    // Don't kill process immediately in dev mode if MongoDB is not running yet,
    // so API can still return helpful errors or seed instructions.
  }
};
