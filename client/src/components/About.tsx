import React from 'react';
import { Profile } from '../types';

interface AboutProps {
  profile?: Profile | null;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  const college = profile?.college || 'Dhanalakshmi College of Engineering';
  const department = profile?.department || 'Information Technology';
  const location = profile?.location || 'Neyveli, Tamil Nadu, India';
  const careerGoal = profile?.careerGoal || 'App Developer';

  return (
    <section id="about" className="py-5 bg-white">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="section-title h1">About Me</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Get to know my journey, academic foundation, and technical aspirations.
          </p>
        </div>

        <div className="row g-4 align-items-stretch">
          {/* Left Narrative Card */}
          <div className="col-lg-7">
            <div className="custom-card p-4 p-md-5 h-100">
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="p-3 bg-primary-subtle text-primary rounded-4">
                  <i className="bi bi-person-badge-fill fs-3"></i>
                </div>
                <div>
                  <h3 className="h4 fw-bold mb-1">Information Technology Student</h3>
                  <span className="text-muted small">Aspiring Software & Mobile App Developer</span>
                </div>
              </div>

              <p className="text-secondary mb-3 lh-lg">
                I am an enthusiastic Information Technology student currently pursuing my undergraduate degree at{' '}
                <strong className="text-dark">{college}</strong>. Ever since I began coding, I have been deeply
                fascinated by how digital tools can transform everyday lives and solve meaningful problems.
              </p>

              <p className="text-secondary mb-3 lh-lg">
                My primary ambition is to become a top-tier <strong className="text-primary">{careerGoal}</strong>. I thrive on
                transforming creative UI designs into performant, intuitive, and robust applications. From understanding core
                programming paradigms in Java to building reactive, component-driven interfaces with TypeScript and React,
                I am constantly honing my craft.
              </p>

              <p className="text-secondary mb-4 lh-lg">
                Beyond full-stack web development, I am passionate about exploring emerging domains like{' '}
                <strong className="text-dark">Artificial Intelligence and Machine Learning</strong>. I love collaborating in team
                environments, participating in campus tech symposiums, and staying on the bleeding edge of software trends.
              </p>

              <div className="row g-3 pt-2">
                <div className="col-sm-6">
                  <div className="p-3 border rounded-3 bg-light d-flex align-items-center gap-3">
                    <i className="bi bi-bullseye fs-3 text-primary"></i>
                    <div>
                      <small className="text-muted d-block">Career Vision</small>
                      <strong className="text-dark">App Developer</strong>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="p-3 border rounded-3 bg-light d-flex align-items-center gap-3">
                    <i className="bi bi-mortarboard fs-3 text-success"></i>
                    <div>
                      <small className="text-muted d-block">Department</small>
                      <strong className="text-dark">Information Tech</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Summary & Key Facts Card */}
          <div className="col-lg-5">
            <div className="custom-card p-4 p-md-5 h-100 d-flex flex-column justify-content-between">
              <div>
                <h4 className="fw-bold mb-4 d-flex align-items-center gap-2">
                  <i className="bi bi-stars text-warning"></i>
                  Quick Overview
                </h4>

                <ul className="list-unstyled d-flex flex-column gap-3 mb-4">
                  <li className="d-flex align-items-start gap-3">
                    <span className="p-2 bg-light rounded text-primary">
                      <i className="bi bi-person"></i>
                    </span>
                    <div>
                      <span className="text-muted small d-block">Full Name</span>
                      <strong className="text-dark">Shreevidhya</strong>
                    </div>
                  </li>

                  <li className="d-flex align-items-start gap-3">
                    <span className="p-2 bg-light rounded text-primary">
                      <i className="bi bi-building"></i>
                    </span>
                    <div>
                      <span className="text-muted small d-block">Institution</span>
                      <strong className="text-dark">{college}</strong>
                    </div>
                  </li>

                  <li className="d-flex align-items-start gap-3">
                    <span className="p-2 bg-light rounded text-primary">
                      <i className="bi bi-geo-alt"></i>
                    </span>
                    <div>
                      <span className="text-muted small d-block">Location</span>
                      <strong className="text-dark">{location}</strong>
                    </div>
                  </li>

                  <li className="d-flex align-items-start gap-3">
                    <span className="p-2 bg-light rounded text-primary">
                      <i className="bi bi-book"></i>
                    </span>
                    <div>
                      <span className="text-muted small d-block">Major</span>
                      <strong className="text-dark">{department}</strong>
                    </div>
                  </li>

                  <li className="d-flex align-items-start gap-3">
                    <span className="p-2 bg-light rounded text-primary">
                      <i className="bi bi-lightning-charge"></i>
                    </span>
                    <div>
                      <span className="text-muted small d-block">Current Focus</span>
                      <span className="badge bg-primary-subtle text-primary border me-1">Java</span>
                      <span className="badge bg-primary-subtle text-primary border me-1">React</span>
                      <span className="badge bg-primary-subtle text-primary border me-1">TypeScript</span>
                      <span className="badge bg-primary-subtle text-primary border">AI/ML</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="pt-3 border-top d-flex gap-2">
                <a
                  href="#contact"
                  className="btn btn-primary-custom flex-grow-1 text-center"
                >
                  <i className="bi bi-send-fill me-2"></i> Get in Touch
                </a>
                <a
                  href="#projects"
                  className="btn btn-outline-secondary px-3"
                  title="View Projects"
                >
                  <i className="bi bi-folder2-open"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
