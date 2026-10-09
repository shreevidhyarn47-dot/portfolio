import React, { useState, useEffect } from 'react';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = ['home', 'about', 'skills', 'education', 'projects', 'experience', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveNav(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsNavCollapsed(true);
    setActiveNav(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top navbar-custom ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="container">
        <a
          className="navbar-brand fw-bold d-flex align-items-center gap-2"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
        >
          <span className="badge bg-primary text-white p-2 rounded-3">
            <i className="bi bi-code-slash"></i>
          </span>
          <span className="fs-5 tracking-tight">Shreevidhya</span>
        </a>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          onClick={() => setIsNavCollapsed(!isNavCollapsed)}
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            <li className="nav-item">
              <a
                className={`nav-link ${activeNav === 'home' ? 'active' : ''}`}
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('home');
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeNav === 'about' ? 'active' : ''}`}
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('about');
                }}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeNav === 'skills' ? 'active' : ''}`}
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('skills');
                }}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeNav === 'education' ? 'active' : ''}`}
                href="#education"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('education');
                }}
              >
                Education
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeNav === 'projects' ? 'active' : ''}`}
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('projects');
                }}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeNav === 'experience' ? 'active' : ''}`}
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('experience');
                }}
              >
                Activities
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeNav === 'certifications' ? 'active' : ''}`}
                href="#certifications"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('certifications');
                }}
              >
                Certifications
              </a>
            </li>
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <a
                className="btn btn-sm btn-primary-custom px-3 text-nowrap"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('contact');
                }}
              >
                <i className="bi bi-chat-text-fill me-1"></i> Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
