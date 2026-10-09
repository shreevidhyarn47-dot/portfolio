import { Achievement, IAchievement } from '../models/Achievement';

export class AchievementService {
  async getAll(): Promise<IAchievement[]> {
    return Achievement.find().sort({ order: 1, createdAt: -1 });
  }

  async getById(id: string): Promise<IAchievement | null> {
    return Achievement.findById(id);
  }

  async create(data: Partial<IAchievement>): Promise<IAchievement> {
    const item = new Achievement(data);
    return item.save();
  }

  async update(id: string, data: Partial<IAchievement>): Promise<IAchievement | null> {
    return Achievement.findByIdAndUpdate(id, data, { new: true, runValidators: true });
  }

  async delete(id: string): Promise<IAchievement | null> {
    return Achievement.findByIdAndDelete(id);
  }
}

export const achievementService = new AchievementService();
