import { Project, IProject } from '../models/Project';

export class ProjectService {
  async getAllProjects(category?: string): Promise<IProject[]> {
    const filter = category && category !== 'All' ? { category } : {};
    return Project.find(filter).sort({ order: 1, createdAt: -1 });
  }

  async getProjectById(id: string): Promise<IProject | null> {
    return Project.findById(id);
  }

  async createProject(data: Partial<IProject>): Promise<IProject> {
    const project = new Project(data);
    return project.save();
  }

  async updateProject(id: string, data: Partial<IProject>): Promise<IProject | null> {
    return Project.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true
    });
  }

  async deleteProject(id: string): Promise<IProject | null> {
    return Project.findByIdAndDelete(id);
  }
}

export const projectService = new ProjectService();
