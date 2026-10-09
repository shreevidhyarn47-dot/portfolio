import React from 'react';
import { EducationItem } from '../types';

export const Education: React.FC = () => {
  const educationList: EducationItem[] = [
    {
      id: 'deg-1',
      degree: 'Bachelor of Technology (B.Tech) - Information Technology',
      institution: 'Dhanalakshmi College of Engineering',
      department: 'Department of Information Technology',
      period: '2022 - 2026 (Expected)',
      location: 'Chennai / Tamil Nadu, India',
      gradeOrStatus: 'First Class with Distinction (Pursuing)',
      description:
        'Comprehensive undergraduate curriculum covering foundational computer science theory, software engineering practices, systems architecture, and modern full-stack web/app development.',
      keyCoursework: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming (Java)',
        'Database Management Systems (SQL & NoSQL)',
        'Web Technology & Cloud Computing',
        'Computer Networks',
        'Operating Systems'
      ]
    },
    {
      id: 'hsc-2',
      degree: 'Higher Secondary Certificate (HSC / 12th Grade)',
      institution: 'Higher Secondary School',
      department: 'Computer Science & Mathematics Stream',
      period: '2020 - 2022',
      location: 'Neyveli, Tamil Nadu, India',
      gradeOrStatus: 'Completed with High Distinction',
      description:
        'Focused on Computer Science, Mathematics, Physics, and Chemistry. Developed initial enthusiasm for programming and logic formulation.',
      keyCoursework: [
        'Computer Science (C++ / Python basics)',
        'Advanced Mathematics',
        'Physics & Electronics',
        'Chemistry'
      ]
    }
  ];

  return (
    <section id="education" className="py-5 bg-white">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="section-title h1">Education & Academics</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            My academic journey and core coursework preparing me for industry challenges.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="timeline">
              {educationList.map((item) => (
                <div key={item.id} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="custom-card p-4 p-md-5">
                    <div className="d-flex flex-wrap justify-content-between align-items-start gap-2 mb-2">
                      <div>
                        <span className="badge bg-primary-subtle text-primary border mb-2">
                          <i className="bi bi-mortarboard-fill me-1"></i> {item.department}
                        </span>
                        <h3 className="h4 fw-bold text-dark mb-1">{item.degree}</h3>
                        <h4 className="h5 text-primary fw-semibold mb-2">{item.institution}</h4>
                      </div>
                      <div className="text-md-end">
                        <span className="badge bg-light text-dark border px-3 py-2 rounded-pill fw-medium d-inline-block">
                          <i className="bi bi-calendar3 me-1 text-primary"></i> {item.period}
                        </span>
                        <div className="small text-muted mt-1">
                          <i className="bi bi-geo-alt me-1"></i> {item.location}
                        </div>
                      </div>
                    </div>

                    <div className="d-inline-block px-3 py-1 rounded bg-success-subtle text-success border border-success-subtle small fw-semibold mb-3">
                      <i className="bi bi-award-fill me-1"></i> {item.gradeOrStatus}
                    </div>

                    <p className="text-secondary mb-3">{item.description}</p>

                    <div>
                      <h5 className="small fw-bold text-dark text-uppercase tracking-wider mb-2">
                        Relevant Coursework & Modules:
                      </h5>
                      <div className="d-flex flex-wrap gap-2">
                        {item.keyCoursework.map((course, cIdx) => (
                          <span
                            key={cIdx}
                            className="badge bg-light text-secondary border px-3 py-2 rounded-pill small"
                          >
                            <i className="bi bi-check-circle-fill text-primary me-1"></i>
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Note for easy editing */}
            <div className="p-3 bg-light rounded-3 border text-muted small mt-4 d-flex align-items-center gap-2">
              <i className="bi bi-info-circle-fill text-primary fs-5"></i>
              <span>
                Academic milestones, percentages, or upcoming semester updates can be tailored directly in{' '}
                <code>Education.tsx</code> or integrated via the backend API.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
