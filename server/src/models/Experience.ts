import mongoose, { Document, Schema } from 'mongoose';

export interface IExperience extends Document {
  title: string;
  organization: string;
  period: string;
  category: string;
  description: string;
  highlights: string[];
  location?: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const ExperienceSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true
    },
    organization: {
      type: String,
      required: [true, 'Organization is required'],
      trim: true
    },
    period: {
      type: String,
      required: [true, 'Period is required'],
      trim: true
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true,
      default: 'activity'
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true
    },
    highlights: {
      type: [String],
      default: []
    },
    location: {
      type: String,
      default: '',
      trim: true
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

export const Experience = mongoose.model<IExperience>('Experience', ExperienceSchema);
