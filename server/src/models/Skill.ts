import mongoose, { Document, Schema } from 'mongoose';

export type SkillCategoryType =
  | 'Programming Languages'
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'Tools'
  | 'Other skills';

export interface ISkill extends Document {
  name: string;
  category: SkillCategoryType;
  proficiency: number;
  levelLabel: string;
  icon?: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const SkillSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Skill name is required'],
      trim: true
    },
    category: {
      type: String,
      required: [true, 'Skill category is required'],
      enum: [
        'Programming Languages',
        'Frontend',
        'Backend',
        'Database',
        'Tools',
        'Other skills'
      ],
      trim: true
    },
    proficiency: {
      type: Number,
      required: [true, 'Proficiency percentage is required'],
      min: 0,
      max: 100,
      default: 80
    },
    levelLabel: {
      type: String,
      default: 'Proficient',
      trim: true
    },
    icon: {
      type: String,
      default: 'bi-check-circle-fill'
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

export const Skill = mongoose.model<ISkill>('Skill', SkillSchema);
