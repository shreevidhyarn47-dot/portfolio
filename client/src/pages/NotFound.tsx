import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light text-center px-3">
      <div className="custom-card p-5 bg-white max-w-md shadow-sm">
        <h1 className="display-1 fw-bolder text-primary">404</h1>
        <h2 className="h4 fw-bold text-dark mb-3">Page Not Found</h2>
        <p className="text-secondary mb-4">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary-custom px-4 py-2">
          <i className="bi bi-house-door-fill me-2"></i>
          Return to Portfolio
        </Link>
      </div>
    </div>
  );
};
