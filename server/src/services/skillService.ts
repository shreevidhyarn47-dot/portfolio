import { Skill, ISkill } from '../models/Skill';

export class SkillService {
  async getAll(category?: string): Promise<ISkill[]> {
    const filter = category ? { category } : {};
    return Skill.find(filter).sort({ order: 1, proficiency: -1 });
  }

  async getById(id: string): Promise<ISkill | null> {
    return Skill.findById(id);
  }

  async create(data: Partial<ISkill>): Promise<ISkill> {
    const item = new Skill(data);
    return item.save();
  }

  async update(id: string, data: Partial<ISkill>): Promise<ISkill | null> {
    return Skill.findByIdAndUpdate(id, data, { new: true, runValidators: true });
  }

  async delete(id: string): Promise<ISkill | null> {
    return Skill.findByIdAndDelete(id);
  }
}

export const skillService = new SkillService();
