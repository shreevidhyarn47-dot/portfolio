import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ProjectDetails } from './pages/ProjectDetails';
import { NotFound } from './pages/NotFound';
import { Profile } from './types';
import { getProfile } from './services/api';

export const App: React.FC = () => {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await getProfile();
        setProfile(data);
      } catch (err) {
        // Fallback default
        setProfile({
          name: 'Shreevidhya',
          role: 'IT Student | Aspiring App Developer',
          headline: 'IT Student & Aspiring App Developer',
          bio: 'Passionate and detail-oriented Information Technology student at Dhanalakshmi College of Engineering.',
          location: 'Neyveli, Tamil Nadu, India',
          email: 'shreevidhya.dev@example.com',
          department: 'Information Technology',
          college: 'Dhanalakshmi College of Engineering',
          careerGoal: 'App Developer',
          currentLearningFocus: ['Java', 'React', 'TypeScript', 'Web Development', 'AI/ML'],
          githubUrl: 'https://github.com/shreevidhya',
          linkedinUrl: 'https://linkedin.com/in/shreevidhya'
        });
      }
    };
    loadProfile();
  }, []);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer profile={profile} />
      </div>
    </Router>
  );
};

export default App;
