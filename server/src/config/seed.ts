import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { User } from '../models/User';
import { Profile } from '../models/Profile';
import { Education } from '../models/Education';
import { Skill } from '../models/Skill';
import { Project } from '../models/Project';
import { Internship } from '../models/Internship';
import { Certification } from '../models/Certification';
import { Achievement } from '../models/Achievement';
import { Experience } from '../models/Experience';

dotenv.config();

export const seedData = async (): Promise<void> => {
  console.log('[Seed] Seeding CMS database for Shreevidhya...');

  // 1. Seed Admin User
  await User.deleteMany({});
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@shreevidhya.dev';
  const adminPassword = process.env.ADMIN_PASSWORD || 'Admin@123';
  const adminName = process.env.ADMIN_NAME || 'Shreevidhya Admin';

  const admin = new User({
    name: adminName,
    email: adminEmail,
    password: adminPassword,
    role: 'admin'
  });
  await admin.save();
  console.log(`[Seed] Admin user seeded: ${adminEmail} (password: ${adminPassword})`);

  // 2. Seed Profile (Hero & About)
  await Profile.deleteMany({});
  await Profile.create({
    name: 'Shreevidhya',
    title: 'IT Student | Aspiring App Developer',
    shortIntro: 'Passionate Information Technology student with a strong drive for building responsive web apps, clean software architecture, and modern mobile solutions.',
    bio: 'I am an enthusiastic Information Technology student currently pursuing my undergraduate degree at Dhanalakshmi College of Engineering. Ever since I began coding, I have been deeply fascinated by how digital tools can transform everyday lives and solve meaningful problems. My primary ambition is to become a top-tier App Developer. I thrive on transforming creative UI designs into performant, intuitive, and robust applications. From understanding core programming paradigms in Java to building reactive, component-driven interfaces with TypeScript and React, I am constantly honing my craft. Beyond full-stack web development, I am passionate about exploring emerging domains like Artificial Intelligence and Machine Learning.',
    careerGoal: 'App Developer',
    interests: ['Mobile & Web App Development', 'Artificial Intelligence & ML', 'Cloud Systems', 'Open Source'],
    location: 'Neyveli, Tamil Nadu, India',
    email: 'admin@shreevidhya.dev',
    phone: '+91 98765 43210',
    department: 'Information Technology',
    college: 'Dhanalakshmi College of Engineering',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80',
    resumeUrl: '#',
    githubUrl: 'https://github.com/shreevidhya',
    linkedinUrl: 'https://linkedin.com/in/shreevidhya',
    twitterUrl: '',
    otherLinks: [
      { label: 'Portfolio CMS', url: 'http://localhost:5173' }
    ],
    currentLearningFocus: ['Java', 'React', 'TypeScript', 'Web Development', 'AI/ML']
  });
  console.log('[Seed] Profile seeded successfully.');

  // 3. Seed Education
  await Education.deleteMany({});
  await Education.insertMany([
    {
      college: 'Dhanalakshmi College of Engineering',
      degree: 'Bachelor of Technology (B.Tech)',
      department: 'Department of Information Technology',
      year: '2022 - 2026 (Expected)',
      startYear: '2022',
      endYear: '2026',
      cgpaOrPercentage: 'First Class with Distinction (Pursuing)',
      description: 'Rigorous undergraduate curriculum emphasizing computer science foundations, algorithms, full-stack systems, and mobile software engineering.',
      coursework: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming (Java)',
        'Database Management Systems',
        'Web Technology & Cloud',
        'Computer Networks',
        'Operating Systems'
      ],
      order: 1
    },
    {
      college: 'Higher Secondary School',
      degree: 'Higher Secondary Certificate (HSC / 12th Grade)',
      department: 'Computer Science & Mathematics Stream',
      year: '2020 - 2022',
      startYear: '2020',
      endYear: '2022',
      cgpaOrPercentage: 'Completed with High Distinction',
      description: 'Strengthened logical fundamentals, mathematics, algorithmic problem-solving, and introductory programming.',
      coursework: ['Computer Science', 'Mathematics', 'Physics', 'Chemistry'],
      order: 2
    }
  ]);
  console.log('[Seed] Education seeded successfully.');

  // 4. Seed Skills
  await Skill.deleteMany({});
  await Skill.insertMany([
    // Programming Languages
    { name: 'Java', category: 'Programming Languages', proficiency: 88, levelLabel: 'Advanced', icon: 'bi-cup-hot-fill', order: 1 },
    { name: 'TypeScript', category: 'Programming Languages', proficiency: 82, levelLabel: 'Proficient', icon: 'bi-code-slash', order: 2 },
    { name: 'JavaScript', category: 'Programming Languages', proficiency: 86, levelLabel: 'Advanced', icon: 'bi-filetype-js', order: 3 },
    { name: 'Python', category: 'Programming Languages', proficiency: 76, levelLabel: 'Intermediate', icon: 'bi-filetype-py', order: 4 },

    // Frontend
    { name: 'React', category: 'Frontend', proficiency: 88, levelLabel: 'Advanced', icon: 'bi-filetype-tsx', order: 5 },
    { name: 'HTML5', category: 'Frontend', proficiency: 92, levelLabel: 'Expert', icon: 'bi-filetype-html', order: 6 },
    { name: 'CSS3', category: 'Frontend', proficiency: 88, levelLabel: 'Advanced', icon: 'bi-filetype-css', order: 7 },
    { name: 'Bootstrap 5', category: 'Frontend', proficiency: 90, levelLabel: 'Expert', icon: 'bi-bootstrap-fill', order: 8 },

    // Backend
    { name: 'Node.js', category: 'Backend', proficiency: 80, levelLabel: 'Proficient', icon: 'bi-hdd-network-fill', order: 9 },
    { name: 'Express.js', category: 'Backend', proficiency: 85, levelLabel: 'Proficient', icon: 'bi-server', order: 10 },
    { name: 'REST APIs', category: 'Backend', proficiency: 88, levelLabel: 'Advanced', icon: 'bi-arrow-left-right', order: 11 },

    // Database
    { name: 'MongoDB', category: 'Database', proficiency: 82, levelLabel: 'Proficient', icon: 'bi-database-fill', order: 12 },
    { name: 'SQL', category: 'Database', proficiency: 78, levelLabel: 'Intermediate', icon: 'bi-table', order: 13 },
    { name: 'Mongoose ODM', category: 'Database', proficiency: 82, levelLabel: 'Proficient', icon: 'bi-diagram-3-fill', order: 14 },

    // Tools
    { name: 'Git & GitHub', category: 'Tools', proficiency: 85, levelLabel: 'Proficient', icon: 'bi-git', order: 15 },
    { name: 'VS Code', category: 'Tools', proficiency: 92, levelLabel: 'Expert', icon: 'bi-terminal', order: 16 },
    { name: 'Postman', category: 'Tools', proficiency: 84, levelLabel: 'Proficient', icon: 'bi-send-check', order: 17 },

    // Other skills
    { name: 'AI/ML Basics', category: 'Other skills', proficiency: 75, levelLabel: 'Intermediate', icon: 'bi-cpu-fill', order: 18 },
    { name: 'Mobile App Concepts', category: 'Other skills', proficiency: 80, levelLabel: 'Proficient', icon: 'bi-phone', order: 19 },
    { name: 'Problem Solving', category: 'Other skills', proficiency: 85, levelLabel: 'Proficient', icon: 'bi-lightbulb-fill', order: 20 }
  ]);
  console.log('[Seed] Skills seeded successfully.');

  // 5. Seed Projects
  await Project.deleteMany({});
  await Project.insertMany([
    {
      title: 'E-Commerce Website',
      description: 'A responsive full-stack e-commerce web application featuring product browsing, category filtering, cart management, and seamless checkout experience.',
      detailedDescription: 'Engineered with React, TypeScript, Node.js, Express, and MongoDB. Implemented RESTful APIs for catalog pagination, search filters, state-managed shopping cart, and mock payment gateway.',
      technologies: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap 5'],
      githubUrl: 'https://github.com/shreevidhya/ecommerce-store',
      liveDemoUrl: 'https://ecommerce-store-demo.vercel.app',
      imageUrl: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=80',
      category: 'Web Development',
      featured: true,
      order: 1
    },
    {
      title: 'Student Management System',
      description: 'An academic administrative application to handle student records, attendance tracking, course registration, and performance analytics.',
      detailedDescription: 'Developed using Java and modern web technologies. Integrates structured relational and document databases with role-based access for students and faculty.',
      technologies: ['Java', 'TypeScript', 'Express.js', 'MongoDB', 'Bootstrap 5'],
      githubUrl: 'https://github.com/shreevidhya/student-management-system',
      liveDemoUrl: 'https://student-system-demo.vercel.app',
      imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80',
      category: 'App Development',
      featured: true,
      order: 2
    },
    {
      title: 'Personal Portfolio CMS',
      description: 'A full-stack dynamic portfolio and content management system with secure JWT authentication and instant live editing.',
      detailedDescription: 'Built with React, TypeScript, Bootstrap 5, Express.js, MongoDB, and Swagger UI. Features smooth navigation, active scroll spy, responsive mobile layout, and real-time CRUD modals.',
      technologies: ['React', 'TypeScript', 'Bootstrap 5', 'Express.js', 'MongoDB', 'JWT', 'Swagger UI'],
      githubUrl: 'https://github.com/shreevidhya/portfolio',
      liveDemoUrl: 'https://shreevidhya-portfolio.vercel.app',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
      category: 'Web Development',
      featured: true,
      order: 3
    },
    {
      title: 'AI/ML Mini Project - Smart Prediction App',
      description: 'An intelligent predictive application analyzing data patterns to forecast student outcomes and automate classification tasks.',
      detailedDescription: 'Implemented utilizing Python and Scikit-Learn algorithms, exposed via a lightweight REST API and consumed by a modern responsive React TypeScript dashboard with real-time charts.',
      technologies: ['Python', 'AI/ML', 'React', 'TypeScript', 'Flask', 'REST API'],
      githubUrl: 'https://github.com/shreevidhya/smart-prediction-ai',
      liveDemoUrl: 'https://ai-prediction-demo.vercel.app',
      imageUrl: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&auto=format&fit=crop&q=80',
      category: 'AI/ML',
      featured: true,
      order: 4
    }
  ]);
  console.log('[Seed] Projects seeded successfully.');

  // 6. Seed Internships
  await Internship.deleteMany({});
  await Internship.insertMany([
    {
      company: 'Tech Innovators Studio',
      role: 'Full Stack Web Development Trainee',
      duration: 'June 2024 - August 2024',
      description: 'Engaged in developing scalable RESTful API endpoints and integrating responsive React frontends with TypeScript state validation.',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Bootstrap 5'],
      certificateUrl: '#',
      location: 'Chennai, Tamil Nadu (Hybrid)',
      order: 1
    },
    {
      company: 'CodeCraft Solutions',
      role: 'App Development Intern (Summer Track)',
      duration: 'May 2023 - July 2023',
      description: 'Collaborated on mobile design prototypes, component lifecycle optimization, and database schema refinement for educational tools.',
      technologies: ['Java', 'Mobile UI', 'REST APIs', 'MySQL'],
      certificateUrl: '#',
      location: 'Tamil Nadu (Remote)',
      order: 2
    }
  ]);
  console.log('[Seed] Internships seeded successfully.');

  // 7. Seed Certifications
  await Certification.deleteMany({});
  await Certification.insertMany([
    {
      title: 'Java Programming Foundations',
      issuingOrganization: 'Oracle Academy / Coursera',
      issueDate: '2024',
      credentialUrl: 'https://coursera.org/verify/java-foundations',
      credentialId: 'CERT-ORCL-2024-912',
      badgeIcon: 'bi-patch-check-fill',
      order: 1
    },
    {
      title: 'Full Stack Web Development with React & Node.js',
      issuingOrganization: 'Udemy Masterclass',
      issueDate: '2024',
      credentialUrl: 'https://udemy.com/certificate/react-node-cert',
      credentialId: 'UC-REACT-NODE-7721',
      badgeIcon: 'bi-award-fill',
      order: 2
    },
    {
      title: 'Introduction to Artificial Intelligence & Machine Learning',
      issuingOrganization: 'NPTEL / IIT Madras',
      issueDate: '2024',
      credentialUrl: 'https://nptel.ac.in/noc/Ecertificate/ai-foundations',
      credentialId: 'NPTEL24CS9102',
      badgeIcon: 'bi-cpu-fill',
      order: 3
    }
  ]);
  console.log('[Seed] Certifications seeded successfully.');

  // 8. Seed Achievements
  await Achievement.deleteMany({});
  await Achievement.insertMany([
    {
      title: 'First Place - Inter-Department Web Hackathon',
      description: 'Awarded first prize for designing and deploying a rapid emergency assistance portal in a 24-hour hackathon.',
      date: '2024',
      issuer: 'Dhanalakshmi College of Engineering',
      url: '#',
      badgeIcon: 'bi-trophy-fill',
      order: 1
    },
    {
      title: 'Academic Excellence in Information Technology',
      description: 'Recognized for top percentile coursework in Object-Oriented Programming (Java) and Database Systems.',
      date: '2023',
      issuer: 'Department of IT',
      url: '#',
      badgeIcon: 'bi-star-fill',
      order: 2
    },
    {
      title: 'Active Participant - State Level Coding Olympiad',
      description: 'Selected in top 10 finalists solving algorithmic challenges under strict time constraints.',
      date: '2023',
      issuer: 'Tamil Nadu Collegiate Tech Forum',
      url: '#',
      badgeIcon: 'bi-award-fill',
      order: 3
    }
  ]);
  console.log('[Seed] Achievements seeded successfully.');

  // 9. Seed Experience
  await Experience.deleteMany({});
  await Experience.insertMany([
    {
      title: 'Active Member & Cultural Coordinator',
      organization: 'Tamil Mandram - Dhanalakshmi College of Engineering',
      period: '2023 - Present',
      category: 'club',
      description: 'Engaged in celebrating regional cultural heritage, oratory competitions, and community outreach. Coordinated departmental cultural segments and managed stage flow for inter-college festivals.',
      highlights: [
        'Organized annual Tamil cultural fest and debate competitions',
        'Fostered collaborative team spirit and public speaking among students',
        'Managed event logistics, anchoring, and stage coordination'
      ],
      location: 'Dhanalakshmi College of Engineering',
      order: 1
    },
    {
      title: 'Team Lead & Hackathon Participant',
      organization: 'Inter-College Technical Symposiums & Hackathons',
      period: '2023 - 2024',
      category: 'activity',
      description: 'Represented the Department of Information Technology in coding challenges and collaborative hackathons focused on civic applications and automated student tools.',
      highlights: [
        'Built full-stack prototypes within 24-hour hackathon sprints',
        'Collaborated on git workflows, sprint planning, and system architecture',
        'Presented project demos to academic and industrial evaluation juries'
      ],
      location: 'Chennai, Tamil Nadu',
      order: 2
    },
    {
      title: 'Technical Learning & AI/ML Workshops',
      organization: 'Department of IT Technical Forum',
      period: '2023 - 2024',
      category: 'workshop',
      description: 'Attended specialized technical workshops covering Java OOP paradigms, cloud deployment fundamentals, and introduction to Machine Learning algorithms.',
      highlights: [
        'Hands-on labs on Scikit-Learn classification algorithms',
        'Advanced problem solving using Java Collections framework',
        'Version control best practices with Git & GitHub'
      ],
      location: 'Dhanalakshmi College of Engineering',
      order: 3
    }
  ]);
  console.log('[Seed] Experience seeded successfully.');

  console.log('[Seed] Database initialization complete!');
};

export const seedDefaultsIfNeeded = async (): Promise<void> => {
  try {
    const userCount = await User.countDocuments();
    if (userCount === 0) {
      console.log('[Seed] Empty database detected. Auto-seeding initial sample CMS data...');
      await seedData();
    }
  } catch (error) {
    console.warn('[Seed] Notice: Could not auto-seed database:', error);
  }
};

// Standalone execution handler
if (require.main === module) {
  const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/shreevidhya_portfolio';
  mongoose
    .connect(mongoUri)
    .then(async () => {
      console.log(`[Seed] Connected to MongoDB at ${mongoUri}`);
      await seedData();
      await mongoose.disconnect();
      console.log('[Seed] Disconnected from MongoDB. Exiting.');
      process.exit(0);
    })
    .catch((err) => {
      console.error('[Seed] Database connection error:', err);
      process.exit(1);
    });
}
