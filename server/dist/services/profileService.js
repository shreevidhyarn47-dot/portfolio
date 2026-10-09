"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileService = exports.ProfileService = void 0;
const Profile_1 = require("../models/Profile");
class ProfileService {
    async getProfile() {
        return Profile_1.Profile.findOne();
    }
    async updateOrCreateProfile(data) {
        let profile = await Profile_1.Profile.findOne();
        if (!profile) {
            profile = new Profile_1.Profile(data);
            return profile.save();
        }
        Object.assign(profile, data);
        return profile.save();
    }
}
exports.ProfileService = ProfileService;
exports.profileService = new ProfileService();
