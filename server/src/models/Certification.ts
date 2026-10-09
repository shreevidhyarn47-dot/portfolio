import mongoose, { Document, Schema } from 'mongoose';

export interface ICertification extends Document {
  title: string;
  issuingOrganization: string;
  issueDate: string;
  credentialUrl?: string;
  credentialId?: string;
  badgeIcon?: string;
  imageUrl?: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const CertificationSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Certification title is required'],
      trim: true
    },
    issuingOrganization: {
      type: String,
      required: [true, 'Issuing organization is required'],
      trim: true
    },
    issueDate: {
      type: String,
      required: [true, 'Issue date is required'],
      trim: true
    },
    credentialUrl: {
      type: String,
      default: '',
      trim: true
    },
    credentialId: {
      type: String,
      default: '',
      trim: true
    },
    badgeIcon: {
      type: String,
      default: 'bi-patch-check-fill'
    },
    imageUrl: {
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

export const Certification = mongoose.model<ICertification>('Certification', CertificationSchema);
