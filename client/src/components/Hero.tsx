import React from 'react';
import { Profile } from '../types';

interface HeroProps {
  profile?: Profile | null;
}

export const Hero: React.FC<HeroProps> = ({ profile }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const name = profile?.name || 'Shreevidhya';
  const heading = profile?.headline || 'IT Student & Aspiring App Developer';
  const location = profile?.location || 'Neyveli, Tamil Nadu, India';

  return (
    <section id="home" className="hero-section d-flex align-items-center min-vh-100">
      <div className="container py-5 mt-4">
        <div className="row align-items-center g-5">
          {/* Hero Left Content */}
          <div className="col-lg-7 text-center text-lg-start">
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 mb-3 rounded-pill bg-white bg-opacity-10 border border-white border-opacity-10 text-white-50 small">
              <i className="bi bi-geo-alt-fill text-info"></i>
              <span className="text-light">{location}</span>
            </div>

            <h2 className="display-4 fw-bold mb-2">
              Hello, I'm <span className="text-gradient">{name}</span> 👋
            </h2>

            <h3 className="h3 fw-semibold text-info mb-4">
              {heading}
            </h3>

            <p className="lead text-slate-300 text-white-50 mb-4" style={{ maxWidth: '600px' }}>
              Passionate Information Technology student with a strong drive for building responsive web apps,
              clean software architectures, and modern mobile solutions. Currently expanding my horizons across
              <strong> Java, React, TypeScript</strong>, and <strong>AI/ML</strong>.
            </p>

            {/* Quick Skills Badges */}
            <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start mb-4">
              <span className="badge bg-secondary bg-opacity-25 border border-white border-opacity-10 text-light py-2 px-3 rounded-pill">
                <i className="bi bi-cup-hot-fill text-warning me-1"></i> Java
              </span>
              <span className="badge bg-secondary bg-opacity-25 border border-white border-opacity-10 text-light py-2 px-3 rounded-pill">
                <i className="bi bi-filetype-tsx text-info me-1"></i> React & TypeScript
              </span>
              <span className="badge bg-secondary bg-opacity-25 border border-white border-opacity-10 text-light py-2 px-3 rounded-pill">
                <i className="bi bi-phone text-success me-1"></i> App Development
              </span>
              <span className="badge bg-secondary bg-opacity-25 border border-white border-opacity-10 text-light py-2 px-3 rounded-pill">
                <i className="bi bi-cpu-fill text-danger me-1"></i> AI/ML
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
              <button
                onClick={() => scrollTo('projects')}
                className="btn btn-primary-custom d-inline-flex align-items-center gap-2"
              >
                <span>View My Projects</span>
                <i className="bi bi-arrow-right"></i>
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="btn btn-outline-light px-4 py-2 rounded-3 fw-semibold"
              >
                <i className="bi bi-envelope-fill me-2"></i>
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-4 pt-2 d-flex gap-3 justify-content-center justify-content-lg-start">
              <a
                href={profile?.githubUrl || 'https://github.com/shreevidhya'}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                title="GitHub Profile"
              >
                <i className="bi bi-github fs-5"></i>
              </a>
              <a
                href={profile?.linkedinUrl || 'https://linkedin.com/in/shreevidhya'}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                title="LinkedIn Profile"
              >
                <i className="bi bi-linkedin fs-5"></i>
              </a>
              <a
                href={`mailto:${profile?.email || 'shreevidhya.dev@example.com'}`}
                className="social-icon-btn"
                title="Send Email"
              >
                <i className="bi bi-envelope-at fs-5"></i>
              </a>
            </div>
          </div>

          {/* Hero Right Avatar Image */}
          <div className="col-lg-5 text-center">
            <div className="profile-img-container">
              <img
                src={
                  profile?.avatarUrl ||
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80'
                }
                alt={name}
                className="avatar-img img-fluid"
              />

              {/* Floating Badge 1 */}
              <div className="floating-badge badge-pos-1">
                <span className="p-1 rounded-circle bg-success"></span>
                <span>Aspiring App Developer</span>
              </div>

              {/* Floating Badge 2 */}
              <div className="floating-badge badge-pos-2">
                <i className="bi bi-mortarboard-fill text-warning"></i>
                <span>B.Tech / B.E. IT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
