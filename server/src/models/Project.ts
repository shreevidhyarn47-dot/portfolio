import mongoose, { Document, Schema } from 'mongoose';

export interface IProject extends Document {
  title: string;
  description: string;
  detailedDescription?: string;
  technologies: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  imageUrl?: string;
  category: string;
  featured: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Project title is required'],
      trim: true
    },
    description: {
      type: String,
      required: [true, 'Project description is required'],
      trim: true
    },
    detailedDescription: {
      type: String,
      default: ''
    },
    technologies: {
      type: [String],
      required: [true, 'At least one technology is required'],
      validate: {
        validator: (val: string[]) => val.length > 0,
        message: 'Project must include at least one technology'
      }
    },
    githubUrl: {
      type: String,
      required: [true, 'GitHub link is required'],
      trim: true
    },
    liveDemoUrl: {
      type: String,
      default: '',
      trim: true
    },
    imageUrl: {
      type: String,
      default: '',
      trim: true
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true
    },
    featured: {
      type: Boolean,
      default: false
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

export const Project = mongoose.model<IProject>('Project', ProjectSchema);
