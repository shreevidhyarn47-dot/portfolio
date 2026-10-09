import mongoose, { Document, Schema } from 'mongoose';

export interface IEducation extends Document {
  college: string;
  degree: string;
  department: string;
  year: string;
  startYear?: string;
  endYear?: string;
  cgpaOrPercentage?: string;
  description: string;
  coursework: string[];
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const EducationSchema: Schema = new Schema(
  {
    college: {
      type: String,
      required: [true, 'College name is required'],
      trim: true
    },
    degree: {
      type: String,
      required: [true, 'Degree is required'],
      trim: true
    },
    department: {
      type: String,
      required: [true, 'Department is required'],
      trim: true
    },
    year: {
      type: String,
      required: [true, 'Year/Duration is required'],
      trim: true
    },
    startYear: {
      type: String,
      default: '',
      trim: true
    },
    endYear: {
      type: String,
      default: '',
      trim: true
    },
    cgpaOrPercentage: {
      type: String,
      default: '',
      trim: true
    },
    description: {
      type: String,
      default: '',
      trim: true
    },
    coursework: {
      type: [String],
      default: []
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

export const Education = mongoose.model<IEducation>('Education', EducationSchema);
