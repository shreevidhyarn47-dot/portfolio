import React, { useState, useEffect } from 'react';
import { Certification } from '../types';
import { getCertifications } from '../services/api';

const FALLBACK_CERTIFICATIONS: Certification[] = [
  {
    _id: 'cert-1',
    title: 'Java Programming Foundations',
    issuingOrganization: 'Oracle Academy / Coursera',
    issueDate: '2024',
    credentialUrl: 'https://coursera.org/verify/java-foundations',
    credentialId: 'CERT-ORCL-2024-912',
    badgeIcon: 'bi-patch-check-fill'
  },
  {
    _id: 'cert-2',
    title: 'Full Stack Web Development with React & Node.js',
    issuingOrganization: 'Udemy Masterclass',
    issueDate: '2024',
    credentialUrl: 'https://udemy.com/certificate/react-node-cert',
    credentialId: 'UC-REACT-NODE-7721',
    badgeIcon: 'bi-award-fill'
  },
  {
    _id: 'cert-3',
    title: 'Introduction to Artificial Intelligence & Machine Learning',
    issuingOrganization: 'NPTEL / IIT Madras',
    issueDate: '2024',
    credentialUrl: 'https://nptel.ac.in/noc/Ecertificate/ai-foundations',
    credentialId: 'NPTEL24CS9102',
    badgeIcon: 'bi-cpu-fill'
  }
];

export const Certifications: React.FC = () => {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCerts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getCertifications();
      if (data && data.length > 0) {
        setCertifications(data);
      } else {
        setCertifications(FALLBACK_CERTIFICATIONS);
      }
    } catch (err: any) {
      console.warn('API error fetching certifications:', err.message);
      setError('Live backend not reachable yet. Displaying cached certifications.');
      setCertifications(FALLBACK_CERTIFICATIONS);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCerts();
  }, []);

  return (
    <section id="certifications" className="py-5 bg-light">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="section-title h1">Certifications & Achievements</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Industry and academic certifications fetched live through Express & MongoDB REST API.
          </p>
        </div>

        {error && (
          <div className="alert alert-info d-flex align-items-center gap-2 justify-content-center mb-4 rounded-3">
            <i className="bi bi-info-circle-fill"></i>
            <span>{error}</span>
          </div>
        )}

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading certifications...</span>
            </div>
            <p className="mt-3 text-muted">Fetching certifications...</p>
          </div>
        ) : (
          <div className="row g-4 justify-content-center">
            {certifications.map((cert) => (
              <div key={cert._id} className="col-lg-4 col-md-6">
                <div className="custom-card p-4 h-100 bg-white d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="p-3 bg-primary-subtle text-primary rounded-4">
                        <i className={`bi ${cert.badgeIcon || 'bi-patch-check-fill'} fs-3`}></i>
                      </div>
                      <span className="badge bg-light text-dark border px-3 py-2 rounded-pill small">
                        <i className="bi bi-calendar-event me-1 text-primary"></i>
                        {cert.issueDate}
                      </span>
                    </div>

                    <h3 className="h5 fw-bold text-dark mb-2">{cert.title}</h3>
                    <h4 className="h6 text-primary fw-medium mb-3">{cert.issuingOrganization}</h4>

                    {cert.credentialId && (
                      <div className="small text-muted mb-3 font-monospace">
                        <span className="text-secondary fw-semibold">ID: </span>
                        {cert.credentialId}
                      </div>
                    )}
                  </div>

                  <div className="pt-3 border-top">
                    {cert.credentialUrl ? (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-sm btn-outline-custom w-100 d-flex align-items-center justify-content-center gap-2"
                      >
                        <span>Verify Credential</span>
                        <i className="bi bi-box-arrow-up-right"></i>
                      </a>
                    ) : (
                      <button className="btn btn-sm btn-light w-100 disabled" disabled>
                        Verified on Record
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
