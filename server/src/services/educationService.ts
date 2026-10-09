import { Education, IEducation } from '../models/Education';

export class EducationService {
  async getAll(): Promise<IEducation[]> {
    return Education.find().sort({ order: 1, createdAt: -1 });
  }

  async getById(id: string): Promise<IEducation | null> {
    return Education.findById(id);
  }

  async create(data: Partial<IEducation>): Promise<IEducation> {
    const item = new Education(data);
    return item.save();
  }

  async update(id: string, data: Partial<IEducation>): Promise<IEducation | null> {
    return Education.findByIdAndUpdate(id, data, { new: true, runValidators: true });
  }

  async delete(id: string): Promise<IEducation | null> {
    return Education.findByIdAndDelete(id);
  }
}

export const educationService = new EducationService();
