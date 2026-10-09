import mongoose, { Document, Schema } from 'mongoose';

export interface IProfile extends Document {
  name: string;
  title: string;
  shortIntro: string;
  bio: string;
  careerGoal: string;
  interests: string[];
  location: string;
  email: string;
  phone: string;
  department: string;
  college: string;
  avatarUrl: string;
  resumeUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  twitterUrl?: string;
  otherLinks?: { label: string; url: string }[];
  currentLearningFocus: string[];
  createdAt: Date;
  updatedAt: Date;
}

const ProfileSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true
    },
    title: {
      type: String,
      required: [true, 'Professional title is required'],
      trim: true
    },
    shortIntro: {
      type: String,
      default: '',
      trim: true
    },
    bio: {
      type: String,
      required: [true, 'Bio/About description is required']
    },
    careerGoal: {
      type: String,
      required: [true, 'Career goal is required'],
      trim: true
    },
    interests: {
      type: [String],
      default: []
    },
    location: {
      type: String,
      required: [true, 'Location is required'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true
    },
    phone: {
      type: String,
      default: '',
      trim: true
    },
    department: {
      type: String,
      required: [true, 'Department is required'],
      trim: true
    },
    college: {
      type: String,
      required: [true, 'College is required'],
      trim: true
    },
    avatarUrl: {
      type: String,
      default: '',
      trim: true
    },
    resumeUrl: {
      type: String,
      default: '',
      trim: true
    },
    githubUrl: {
      type: String,
      default: '',
      trim: true
    },
    linkedinUrl: {
      type: String,
      default: '',
      trim: true
    },
    twitterUrl: {
      type: String,
      default: '',
      trim: true
    },
    otherLinks: [
      {
        label: { type: String, required: true },
        url: { type: String, required: true }
      }
    ],
    currentLearningFocus: {
      type: [String],
      default: []
    }
  },
  {
    timestamps: true
  }
);

export const Profile = mongoose.model<IProfile>('Profile', ProfileSchema);
