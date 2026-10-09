import React, { useState, useEffect } from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Education } from '../components/Education';
import { Projects } from '../components/Projects';
import { Experience } from '../components/Experience';
import { Certifications } from '../components/Certifications';
import { Contact } from '../components/Contact';
import { Profile } from '../types';
import { getProfile } from '../services/api';

const DEFAULT_PROFILE: Profile = {
  name: 'Shreevidhya',
  role: 'IT Student | Aspiring App Developer',
  headline: 'IT Student & Aspiring App Developer',
  bio: 'Passionate and detail-oriented Information Technology student at Dhanalakshmi College of Engineering, dedicated to building responsive web applications and cutting-edge mobile solutions.',
  location: 'Neyveli, Tamil Nadu, India',
  email: 'shreevidhya.dev@example.com',
  phone: '+91 98765 43210',
  department: 'Information Technology',
  college: 'Dhanalakshmi College of Engineering',
  careerGoal: 'App Developer',
  currentLearningFocus: ['Java', 'React', 'TypeScript', 'Web Development', 'AI/ML'],
  githubUrl: 'https://github.com/shreevidhya',
  linkedinUrl: 'https://linkedin.com/in/shreevidhya',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80',
  resumeUrl: '#'
};

export const Home: React.FC = () => {
  const [profile, setProfile] = useState<Profile>(DEFAULT_PROFILE);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        if (data) {
          setProfile(data);
        }
      } catch (err) {
        // Safe fallback is active
        console.warn('API profile fetch notice: using cached profile data.');
      }
    };

    fetchProfile();
  }, []);

  return (
    <main>
      <Hero profile={profile} />
      <About profile={profile} />
      <Skills />
      <Education />
      <Projects />
      <Experience />
      <Certifications />
      <Contact profile={profile} />
    </main>
  );
};
