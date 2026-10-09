import { Internship, IInternship } from '../models/Internship';

export class InternshipService {
  async getAll(): Promise<IInternship[]> {
    return Internship.find().sort({ order: 1, createdAt: -1 });
  }

  async getById(id: string): Promise<IInternship | null> {
    return Internship.findById(id);
  }

  async create(data: Partial<IInternship>): Promise<IInternship> {
    const item = new Internship(data);
    return item.save();
  }

  async update(id: string, data: Partial<IInternship>): Promise<IInternship | null> {
    return Internship.findByIdAndUpdate(id, data, { new: true, runValidators: true });
  }

  async delete(id: string): Promise<IInternship | null> {
    return Internship.findByIdAndDelete(id);
  }
}

export const internshipService = new InternshipService();
