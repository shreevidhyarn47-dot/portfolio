import React from 'react';
import { ExperienceItem } from '../types';

export const Experience: React.FC = () => {
  const activities: ExperienceItem[] = [
    {
      id: 'act-1',
      title: 'Active Member & Cultural Coordinator',
      organization: 'Tamil Mandram - Dhanalakshmi College of Engineering',
      period: '2023 - Present',
      category: 'club',
      description:
        'Engaged in celebrating regional cultural heritage, oratory competitions, and community outreach. Coordinated departmental cultural segments and managed stage flow for inter-college festivals.',
      highlights: [
        'Organized annual Tamil cultural fest and debate competitions',
        'Fostered collaborative team spirit and public speaking among students',
        'Managed event logistics, anchoring, and stage coordination'
      ]
    },
    {
      id: 'act-2',
      title: 'Team Lead & Hackathon Participant',
      organization: 'Inter-College Technical Symposiums & Hackathons',
      period: '2023 - 2024',
      category: 'activity',
      description:
        'Represented the Department of Information Technology in coding challenges and collaborative hackathons focused on civic applications and automated student tools.',
      highlights: [
        'Built full-stack prototypes within 24-hour hackathon sprints',
        'Collaborated on git workflows, sprint planning, and system architecture',
        'Presented project demos to academic and industrial evaluation juries'
      ]
    },
    {
      id: 'act-3',
      title: 'Full Stack Web Development Trainee',
      organization: 'Hands-on Technical Internship Program',
      period: '2024 (Summer)',
      category: 'internship',
      description:
        'Engaged in industry-oriented training on modern REST API design, MongoDB schema modeling, and responsive React frontend development.',
      highlights: [
        'Implemented end-to-end CRUD operations with Express and Mongoose',
        'Integrated responsive Bootstrap 5 UI components with TypeScript props',
        'Learned clean coding conventions and API documentation with Swagger'
      ]
    },
    {
      id: 'act-4',
      title: 'Technical Learning & AI/ML Workshops',
      organization: 'Department of IT Technical Forum',
      period: '2023 - 2024',
      category: 'workshop',
      description:
        'Attended specialized technical workshops covering Java OOP paradigms, cloud deployment fundamentals, and introduction to Machine Learning algorithms.',
      highlights: [
        'Hands-on labs on Scikit-Learn classification algorithms',
        'Advanced problem solving using Java Collections framework',
        'Version control best practices with Git & GitHub'
      ]
    }
  ];

  const getBadgeColor = (category: ExperienceItem['category']) => {
    switch (category) {
      case 'club':
        return 'bg-warning-subtle text-warning border-warning-subtle';
      case 'activity':
        return 'bg-primary-subtle text-primary border-primary-subtle';
      case 'internship':
        return 'bg-success-subtle text-success border-success-subtle';
      case 'workshop':
        return 'bg-info-subtle text-info border-info-subtle';
      default:
        return 'bg-light text-secondary border';
    }
  };

  const getCategoryIcon = (category: ExperienceItem['category']) => {
    switch (category) {
      case 'club':
        return 'bi-mic-fill';
      case 'activity':
        return 'bi-trophy-fill';
      case 'internship':
        return 'bi-briefcase-fill';
      case 'workshop':
        return 'bi-laptop-fill';
      default:
        return 'bi-star-fill';
    }
  };

  return (
    <section id="experience" className="py-5 bg-white">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="section-title h1">Experience & Activities</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Co-curricular engagements, Tamil Mandram involvement, team hackathons, and technical workshops.
          </p>
        </div>

        <div className="row g-4">
          {activities.map((item) => (
            <div key={item.id} className="col-lg-6">
              <div className="custom-card p-4 p-md-4 h-100 d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex justify-content-between align-items-start gap-2 mb-2">
                    <span className={`badge border px-3 py-1 rounded-pill small fw-semibold ${getBadgeColor(item.category)}`}>
                      <i className={`bi ${getCategoryIcon(item.category)} me-1`}></i>
                      {item.category.toUpperCase()}
                    </span>
                    <span className="badge bg-light text-dark border small">
                      <i className="bi bi-clock me-1"></i> {item.period}
                    </span>
                  </div>

                  <h3 className="h5 fw-bold text-dark mt-2 mb-1">{item.title}</h3>
                  <h4 className="h6 text-primary fw-medium mb-3">{item.organization}</h4>

                  <p className="text-secondary small mb-3">{item.description}</p>

                  <div className="bg-light p-3 rounded-3 mb-3 border">
                    <h5 className="small fw-bold text-dark mb-2">Key Highlights:</h5>
                    <ul className="mb-0 ps-3 small text-secondary">
                      {item.highlights.map((point, pIdx) => (
                        <li key={pIdx} className="mb-1">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="text-muted small pt-2 border-top d-flex align-items-center justify-content-between">
                  <span>
                    <i className="bi bi-geo-alt me-1"></i> Dhanalakshmi College of Engineering
                  </span>
                  <span className="text-primary">
                    <i className="bi bi-check2-circle me-1"></i> Verified Record
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
