import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { getProjects } from '../services/api';

const FALLBACK_PROJECTS: Project[] = [
  {
    _id: 'sample-1',
    title: 'E-Commerce Website',
    description: 'Full-stack responsive online shopping platform with cart management, product filtering, and RESTful API integration.',
    detailedDescription: 'Engineered with React, TypeScript, Node.js, Express, and MongoDB. Implemented RESTful APIs for catalog pagination, search filters, state-managed shopping cart, and mock checkout.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap 5'],
    githubUrl: 'https://github.com/shreevidhya/ecommerce-store',
    liveDemoUrl: 'https://ecommerce-store-demo.vercel.app',
    imageUrl: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=80',
    category: 'Web Development',
    featured: true
  },
  {
    _id: 'sample-2',
    title: 'Student Management System',
    description: 'Academic administrative application to manage student profiles, attendance records, course registrations, and grade reports.',
    detailedDescription: 'Developed using Java and modern web technologies. Integrates structured relational and document databases with role-based access for students and faculty.',
    technologies: ['Java', 'TypeScript', 'Express.js', 'MongoDB', 'Bootstrap 5'],
    githubUrl: 'https://github.com/shreevidhya/student-management-system',
    liveDemoUrl: 'https://student-system-demo.vercel.app',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80',
    category: 'App Development',
    featured: true
  },
  {
    _id: 'sample-3',
    title: 'Personal Portfolio Website',
    description: 'Modern, high-performance personal portfolio built with React, TypeScript, Express, MongoDB, and Swagger documentation.',
    detailedDescription: 'Built with React, TypeScript, Bootstrap 5, Express.js, MongoDB, and Swagger UI. Features smooth navigation, active scroll spy, responsive mobile layout, and centralized API error handling.',
    technologies: ['React', 'TypeScript', 'Bootstrap 5', 'Express.js', 'MongoDB', 'Swagger UI'],
    githubUrl: 'https://github.com/shreevidhya/portfolio',
    liveDemoUrl: 'https://shreevidhya-portfolio.vercel.app',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    category: 'Web Development',
    featured: true
  },
  {
    _id: 'sample-4',
    title: 'AI/ML Mini Project - Smart Prediction App',
    description: 'Machine learning model predicting trends with a clean interactive web UI and Python/Flask backend integration.',
    detailedDescription: 'Implemented utilizing Python and Scikit-Learn algorithms, exposed via a lightweight REST API and consumed by a modern responsive React TypeScript dashboard with real-time charts.',
    technologies: ['Python', 'AI/ML', 'React', 'TypeScript', 'Flask', 'REST API'],
    githubUrl: 'https://github.com/shreevidhya/smart-prediction-ai',
    liveDemoUrl: 'https://ai-prediction-demo.vercel.app',
    imageUrl: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&auto=format&fit=crop&q=80',
    category: 'AI/ML',
    featured: true
  }
];

export const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const fetchProjectData = async (category: string = 'All') => {
    setLoading(true);
    setError(null);
    try {
      const data = await getProjects(category === 'All' ? undefined : category);
      if (data && data.length > 0) {
        setProjects(data);
      } else {
        // If DB has no items yet, fallback gracefully
        setProjects(
          category === 'All'
            ? FALLBACK_PROJECTS
            : FALLBACK_PROJECTS.filter((p) => p.category === category)
        );
      }
    } catch (err: any) {
      console.warn('Backend API connection note:', err.message);
      setError('Live backend not reachable yet. Showing cached projects.');
      setProjects(
        category === 'All'
          ? FALLBACK_PROJECTS
          : FALLBACK_PROJECTS.filter((p) => p.category === category)
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjectData(selectedCategory);
  }, [selectedCategory]);

  const categories = ['All', 'Web Development', 'App Development', 'AI/ML'];

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container py-4">
        <div className="text-center mb-4">
          <h2 className="section-title h1">Featured Projects</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Dynamic showcases pulled directly via REST API from the Express & MongoDB backend.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Error / API Notice */}
        {error && (
          <div className="alert alert-info d-flex align-items-center gap-2 justify-content-center mb-4 rounded-3">
            <i className="bi bi-info-circle-fill"></i>
            <span>{error}</span>
          </div>
        )}

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading projects...</span>
            </div>
            <p className="mt-3 text-muted">Fetching projects from REST API...</p>
          </div>
        ) : (
          <div className="row g-4">
            {projects.map((project) => (
              <div key={project._id} className="col-lg-6 col-md-6">
                <div className="custom-card project-card bg-white">
                  <div className="project-img-wrapper">
                    <img
                      src={
                        project.imageUrl ||
                        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80'
                      }
                      alt={project.title}
                      loading="lazy"
                    />
                    <span className="category-tag">{project.category}</span>
                  </div>

                  <div className="p-4 d-flex flex-column flex-grow-1 justify-content-between">
                    <div>
                      <h3 className="h5 fw-bold text-dark mb-2">{project.title}</h3>
                      <p className="text-secondary small mb-3">{project.description}</p>

                      <div className="d-flex flex-wrap gap-1 mb-4">
                        {project.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="badge bg-light text-dark border px-2 py-1 small rounded-2"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-3 border-top">
                      <div className="d-flex gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-sm btn-outline-dark d-inline-flex align-items-center gap-1 rounded-3"
                          >
                            <i className="bi bi-github"></i>
                            <span>GitHub</span>
                          </a>
                        )}
                        {project.liveDemoUrl && (
                          <a
                            href={project.liveDemoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-sm btn-primary-custom d-inline-flex align-items-center gap-1 rounded-3"
                          >
                            <i className="bi bi-box-arrow-up-right"></i>
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>

                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="btn btn-sm btn-link text-primary text-decoration-none fw-semibold p-0"
                      >
                        Details <i className="bi bi-chevron-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Project Details Modal */}
        {activeModalProject && (
          <div
            className="modal fade show d-block"
            tabIndex={-1}
            style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
            onClick={() => setActiveModalProject(null)}
          >
            <div
              className="modal-dialog modal-dialog-centered modal-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content rounded-4 border-0 shadow-lg overflow-hidden">
                <div className="modal-header bg-dark text-white border-0 py-3">
                  <h4 className="modal-title h5 fw-bold d-flex align-items-center gap-2">
                    <span className="badge bg-primary">{activeModalProject.category}</span>
                    {activeModalProject.title}
                  </h4>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    onClick={() => setActiveModalProject(null)}
                    aria-label="Close"
                  ></button>
                </div>

                <div className="modal-body p-4">
                  {activeModalProject.imageUrl && (
                    <img
                      src={activeModalProject.imageUrl}
                      alt={activeModalProject.title}
                      className="img-fluid rounded-3 mb-3 w-100"
                      style={{ maxHeight: '300px', objectFit: 'cover' }}
                    />
                  )}

                  <h5 className="fw-bold text-dark mb-2">Overview</h5>
                  <p className="text-secondary">{activeModalProject.description}</p>

                  {activeModalProject.detailedDescription && (
                    <>
                      <h5 className="fw-bold text-dark mt-3 mb-2">Implementation Details</h5>
                      <p className="text-secondary">{activeModalProject.detailedDescription}</p>
                    </>
                  )}

                  <h5 className="fw-bold text-dark mt-3 mb-2">Technologies Used</h5>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {activeModalProject.technologies.map((t, i) => (
                      <span key={i} className="badge bg-primary-subtle text-primary border px-3 py-2 rounded-pill">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="d-flex gap-3 pt-3 border-top">
                    {activeModalProject.githubUrl && (
                      <a
                        href={activeModalProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline-dark rounded-3 px-3"
                      >
                        <i className="bi bi-github me-1"></i> Repository
                      </a>
                    )}
                    {activeModalProject.liveDemoUrl && (
                      <a
                        href={activeModalProject.liveDemoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary-custom rounded-3 px-3"
                      >
                        <i className="bi bi-box-arrow-up-right me-1"></i> Launch Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
