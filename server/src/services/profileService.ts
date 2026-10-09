import { Profile, IProfile } from '../models/Profile';

export class ProfileService {
  async getProfile(): Promise<IProfile | null> {
    return Profile.findOne();
  }

  async updateOrCreateProfile(data: Partial<IProfile>): Promise<IProfile> {
    let profile = await Profile.findOne();
    if (!profile) {
      profile = new Profile(data);
      return profile.save();
    }
    Object.assign(profile, data);
    return profile.save();
  }
}

export const profileService = new ProfileService();
