import { Experience, IExperience } from '../models/Experience';

export class ExperienceService {
  async getAll(): Promise<IExperience[]> {
    return Experience.find().sort({ order: 1, createdAt: -1 });
  }

  async getById(id: string): Promise<IExperience | null> {
    return Experience.findById(id);
  }

  async create(data: Partial<IExperience>): Promise<IExperience> {
    const item = new Experience(data);
    return item.save();
  }

  async update(id: string, data: Partial<IExperience>): Promise<IExperience | null> {
    return Experience.findByIdAndUpdate(id, data, { new: true, runValidators: true });
  }

  async delete(id: string): Promise<IExperience | null> {
    return Experience.findByIdAndDelete(id);
  }
}

export const experienceService = new ExperienceService();
