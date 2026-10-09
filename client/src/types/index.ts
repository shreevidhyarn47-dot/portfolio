export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin';
}

export interface Profile {
  _id?: string;
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
  createdAt?: string;
  updatedAt?: string;
}

export interface Education {
  _id: string;
  college: string;
  degree: string;
  department: string;
  year: string;
  startYear?: string;
  endYear?: string;
  cgpaOrPercentage?: string;
  description: string;
  coursework: string[];
  order?: number;
  createdAt?: string;
  updatedAt?: string;
}

export type SkillCategoryType =
  | 'Programming Languages'
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'Tools'
  | 'Other skills';

export interface Skill {
  _id: string;
  name: string;
  category: SkillCategoryType;
  proficiency: number;
  levelLabel: string;
  icon?: string;
  order?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  technologies: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  imageUrl?: string;
  category: string;
  featured?: boolean;
  order?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface Internship {
  _id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  technologies: string[];
  certificateUrl?: string;
  location?: string;
  order?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface Certification {
  _id: string;
  title: string;
  issuingOrganization: string;
  issueDate: string;
  credentialUrl?: string;
  credentialId?: string;
  badgeIcon?: string;
  imageUrl?: string;
  order?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface Achievement {
  _id: string;
  title: string;
  description: string;
  date: string;
  issuer?: string;
  url?: string;
  badgeIcon?: string;
  order?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface Experience {
  _id: string;
  title: string;
  organization: string;
  period: string;
  category: string;
  description: string;
  highlights: string[];
  location?: string;
  order?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface ContactMessage {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status?: 'unread' | 'read';
  createdAt: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  count?: number;
  data: T;
  token?: string;
  user?: User;
  errors?: string[];
}
