import React from 'react';
import { Profile } from '../types';

interface FooterProps {
  profile?: Profile | null;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const currentYear = new Date().getFullYear();
  const name = profile?.name || 'Shreevidhya';
  const githubUrl = profile?.githubUrl || 'https://github.com/shreevidhya';
  const linkedinUrl = profile?.linkedinUrl || 'https://linkedin.com/in/shreevidhya';
  const email = profile?.email || 'shreevidhya.dev@example.com';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row g-4 justify-content-between align-items-center pb-5 border-bottom border-secondary border-opacity-25">
          <div className="col-lg-5 text-center text-lg-start">
            <h3 className="h4 fw-bold text-white mb-2 d-flex align-items-center justify-content-center justify-content-lg-start gap-2">
              <span className="badge bg-primary text-white p-2 rounded-3">
                <i className="bi bi-code-slash"></i>
              </span>
              <span>{name}</span>
            </h3>
            <p className="text-white-50 mb-3 small" style={{ maxWidth: '400px' }}>
              Information Technology Student at Dhanalakshmi College of Engineering. Aspiring App Developer dedicated
              to building intuitive, high-performance web and mobile software.
            </p>
            <div className="d-flex gap-2 justify-content-center justify-content-lg-start">
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                title="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                title="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href={`mailto:${email}`}
                className="social-icon-btn"
                title="Email"
              >
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-6 text-center text-lg-end">
            <div className="d-flex flex-wrap justify-content-center justify-content-lg-end gap-3 mb-3 small">
              <button onClick={() => scrollTo('home')} className="btn btn-link text-white-50 text-decoration-none p-0">
                Home
              </button>
              <span className="text-white-50">•</span>
              <button onClick={() => scrollTo('about')} className="btn btn-link text-white-50 text-decoration-none p-0">
                About
              </button>
              <span className="text-white-50">•</span>
              <button onClick={() => scrollTo('skills')} className="btn btn-link text-white-50 text-decoration-none p-0">
                Skills
              </button>
              <span className="text-white-50">•</span>
              <button onClick={() => scrollTo('education')} className="btn btn-link text-white-50 text-decoration-none p-0">
                Education
              </button>
              <span className="text-white-50">•</span>
              <button onClick={() => scrollTo('projects')} className="btn btn-link text-white-50 text-decoration-none p-0">
                Projects
              </button>
              <span className="text-white-50">•</span>
              <button onClick={() => scrollTo('contact')} className="btn btn-link text-white-50 text-decoration-none p-0">
                Contact
              </button>
            </div>

            <div className="d-inline-flex align-items-center gap-2 p-2 px-3 rounded-pill bg-white bg-opacity-10 text-white-50 small">
              <i className="bi bi-geo-alt text-info"></i>
              <span>Neyveli, Tamil Nadu, India</span>
            </div>
          </div>
        </div>

        <div className="pt-4 d-flex flex-wrap justify-content-between align-items-center gap-3 small text-white-50">
          <div>
            &copy; {currentYear} <strong className="text-light">{name}</strong>. Built with React, TypeScript, Bootstrap 5 & Express.
          </div>

          <button
            onClick={scrollToTop}
            className="btn btn-sm btn-outline-light rounded-pill px-3 py-1 d-inline-flex align-items-center gap-1"
          >
            <span>Back to top</span>
            <i className="bi bi-arrow-up"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};
