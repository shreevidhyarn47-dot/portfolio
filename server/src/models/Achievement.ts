import mongoose, { Document, Schema } from 'mongoose';

export interface IAchievement extends Document {
  title: string;
  description: string;
  date: string;
  issuer?: string;
  url?: string;
  badgeIcon?: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const AchievementSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Achievement title is required'],
      trim: true
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true
    },
    date: {
      type: String,
      required: [true, 'Date/Year is required'],
      trim: true
    },
    issuer: {
      type: String,
      default: '',
      trim: true
    },
    url: {
      type: String,
      default: '',
      trim: true
    },
    badgeIcon: {
      type: String,
      default: 'bi-trophy-fill'
    },
    order: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

export const Achievement = mongoose.model<IAchievement>('Achievement', AchievementSchema);
