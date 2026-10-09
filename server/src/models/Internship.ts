import mongoose, { Document, Schema } from 'mongoose';

export interface IInternship extends Document {
  company: string;
  role: string;
  duration: string;
  description: string;
  technologies: string[];
  certificateUrl?: string;
  location?: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const InternshipSchema: Schema = new Schema(
  {
    company: {
      type: String,
      required: [true, 'Company name is required'],
      trim: true
    },
    role: {
      type: String,
      required: [true, 'Internship role is required'],
      trim: true
    },
    duration: {
      type: String,
      required: [true, 'Duration is required'],
      trim: true
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true
    },
    technologies: {
      type: [String],
      default: []
    },
    certificateUrl: {
      type: String,
      default: '',
      trim: true
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

export const Internship = mongoose.model<IInternship>('Internship', InternshipSchema);
