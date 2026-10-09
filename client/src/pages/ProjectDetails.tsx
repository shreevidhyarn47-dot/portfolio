import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Project } from '../types';
import { getProjectById } from '../services/api';

export const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const data = await getProjectById(id);
        setProject(data);
      } catch (err: any) {
        setError(err.message || 'Unable to retrieve project details');
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  return (
    <div className="py-5 bg-light min-vh-100" style={{ paddingTop: '100px' }}>
      <div className="container py-5">
        <Link to="/" className="btn btn-outline-secondary mb-4 rounded-3 d-inline-flex align-items-center gap-2">
          <i className="bi bi-arrow-left"></i>
          <span>Back to Portfolio</span>
        </Link>

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : error || !project ? (
          <div className="alert alert-warning text-center p-5 rounded-4 shadow-sm">
            <i className="bi bi-exclamation-circle-fill text-warning fs-1 d-block mb-3"></i>
            <h3 className="h4 fw-bold">Project Not Found</h3>
            <p className="text-secondary">{error || 'The requested project could not be found.'}</p>
            <Link to="/" className="btn btn-primary-custom mt-2">
              Return Home
            </Link>
          </div>
        ) : (
          <div className="custom-card p-4 p-md-5 bg-white">
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
              <span className="badge bg-primary px-3 py-2 rounded-pill">{project.category}</span>
              <span className="text-muted small">ID: {project._id}</span>
            </div>

            <h1 className="h2 fw-bold text-dark mb-3">{project.title}</h1>

            {project.imageUrl && (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="img-fluid rounded-4 mb-4 w-100"
                style={{ maxHeight: '420px', objectFit: 'cover' }}
              />
            )}

            <h2 className="h4 fw-bold text-dark mb-2">Description</h2>
            <p className="lead text-secondary mb-4">{project.description}</p>

            {project.detailedDescription && (
              <>
                <h2 className="h4 fw-bold text-dark mb-2">Architecture & Implementation</h2>
                <p className="text-secondary lh-lg mb-4">{project.detailedDescription}</p>
              </>
            )}

            <h2 className="h4 fw-bold text-dark mb-2">Technologies Used</h2>
            <div className="d-flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="badge bg-light text-dark border px-3 py-2 rounded-pill">
                  {tech}
                </span>
              ))}
            </div>

            <div className="d-flex flex-wrap gap-3 pt-4 border-top">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-dark px-4 py-2 rounded-3 d-inline-flex align-items-center gap-2"
                >
                  <i className="bi bi-github"></i>
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary-custom px-4 py-2 rounded-3 d-inline-flex align-items-center gap-2"
                >
                  <i className="bi bi-box-arrow-up-right"></i>
                  <span>View Live Demo</span>
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
