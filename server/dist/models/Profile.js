"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const ProfileSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    title: {
        type: String,
        required: [true, 'Professional title is required'],
        trim: true
    },
    shortIntro: {
        type: String,
        default: '',
        trim: true
    },
    bio: {
        type: String,
        required: [true, 'Bio/About description is required']
    },
    careerGoal: {
        type: String,
        required: [true, 'Career goal is required'],
        trim: true
    },
    interests: {
        type: [String],
        default: []
    },
    location: {
        type: String,
        required: [true, 'Location is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        default: '',
        trim: true
    },
    department: {
        type: String,
        required: [true, 'Department is required'],
        trim: true
    },
    college: {
        type: String,
        required: [true, 'College is required'],
        trim: true
    },
    avatarUrl: {
        type: String,
        default: '',
        trim: true
    },
    resumeUrl: {
        type: String,
        default: '',
        trim: true
    },
    githubUrl: {
        type: String,
        default: '',
        trim: true
    },
    linkedinUrl: {
        type: String,
        default: '',
        trim: true
    },
    twitterUrl: {
        type: String,
        default: '',
        trim: true
    },
    otherLinks: [
        {
            label: { type: String, required: true },
            url: { type: String, required: true }
        }
    ],
    currentLearningFocus: {
        type: [String],
        default: []
    }
}, {
    timestamps: true
});
exports.Profile = mongoose_1.default.model('Profile', ProfileSchema);
