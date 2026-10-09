import React, { useState } from 'react';
import { ContactFormData, Profile } from '../types';
import { sendContactMessage } from '../services/api';

interface ContactProps {
  profile?: Profile | null;
}

export const Contact: React.FC<ContactProps> = ({ profile }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (): boolean => {
    const errors: Record<string, string> = {};
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      errors.subject = 'Subject must be at least 3 characters';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-level error on change
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(null);
    setSubmitError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await sendContactMessage(formData);
      setSubmitSuccess(response.message || 'Your message has been sent successfully! Thank you for connecting.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setFormErrors({});
    } catch (err: any) {
      setSubmitError(
        err.message || 'Failed to deliver message. Please ensure the backend is running or email directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const location = profile?.location || 'Neyveli, Tamil Nadu, India';
  const email = profile?.email || 'shreevidhya.dev@example.com';
  const college = profile?.college || 'Dhanalakshmi College of Engineering';
  const githubUrl = profile?.githubUrl || 'https://github.com/shreevidhya';
  const linkedinUrl = profile?.linkedinUrl || 'https://linkedin.com/in/shreevidhya';

  return (
    <section id="contact" className="py-5 bg-white">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="section-title h1">Get In Touch</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Have a question, an internship opportunity, or want to collaborate? Send me a message!
          </p>
        </div>

        <div className="row g-5 align-items-stretch">
          {/* Left: Contact Info */}
          <div className="col-lg-5">
            <div className="custom-card p-4 p-md-5 h-100 d-flex flex-column justify-content-between bg-dark text-white">
              <div>
                <span className="badge bg-primary text-white mb-3 px-3 py-2 rounded-pill">
                  <i className="bi bi-broadcast me-1"></i> Open to Opportunities
                </span>

                <h3 className="h3 fw-bold mb-3">Let's Connect</h3>
                <p className="text-light text-opacity-75 mb-4">
                  I am actively looking for software development internships, app development projects, and technical
                  mentorship. Feel free to reach out anytime.
                </p>

                <div className="d-flex flex-column gap-4 mb-4">
                  <div className="d-flex align-items-center gap-3">
                    <div className="p-3 rounded-circle bg-white bg-opacity-10 text-info">
                      <i className="bi bi-geo-alt-fill fs-4"></i>
                    </div>
                    <div>
                      <span className="text-light text-opacity-50 small d-block">Location</span>
                      <strong className="text-light">{location}</strong>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3">
                    <div className="p-3 rounded-circle bg-white bg-opacity-10 text-info">
                      <i className="bi bi-envelope-fill fs-4"></i>
                    </div>
                    <div>
                      <span className="text-light text-opacity-50 small d-block">Email</span>
                      <a href={`mailto:${email}`} className="text-light text-decoration-none fw-bold">
                        {email}
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3">
                    <div className="p-3 rounded-circle bg-white bg-opacity-10 text-info">
                      <i className="bi bi-mortarboard-fill fs-4"></i>
                    </div>
                    <div>
                      <span className="text-light text-opacity-50 small d-block">College</span>
                      <strong className="text-light">{college}</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-top border-secondary">
                <span className="text-light text-opacity-75 small d-block mb-3">Connect on Social Networks:</span>
                <div className="d-flex gap-3">
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon-btn"
                    title="GitHub"
                  >
                    <i className="bi bi-github fs-5"></i>
                  </a>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon-btn"
                    title="LinkedIn"
                  >
                    <i className="bi bi-linkedin fs-5"></i>
                  </a>
                  <a
                    href={`mailto:${email}`}
                    className="social-icon-btn"
                    title="Email"
                  >
                    <i className="bi bi-envelope-at fs-5"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="col-lg-7">
            <div className="custom-card p-4 p-md-5 h-100 bg-white">
              <h3 className="h4 fw-bold text-dark mb-4">Send a Message</h3>

              {submitSuccess && (
                <div className="alert alert-success d-flex align-items-center gap-2 mb-4 rounded-3" role="alert">
                  <i className="bi bi-check-circle-fill fs-5"></i>
                  <div>{submitSuccess}</div>
                </div>
              )}

              {submitError && (
                <div className="alert alert-danger d-flex align-items-center gap-2 mb-4 rounded-3" role="alert">
                  <i className="bi bi-exclamation-triangle-fill fs-5"></i>
                  <div>{submitError}</div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="row g-3">
                  {/* Name */}
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label fw-semibold text-dark small">
                      Your Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Priyadharshini"
                      className={`form-control ${formErrors.name ? 'is-invalid' : ''}`}
                      disabled={isSubmitting}
                    />
                    {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
                  </div>

                  {/* Email */}
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label fw-semibold text-dark small">
                      Your Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                      disabled={isSubmitting}
                    />
                    {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                  </div>

                  {/* Subject */}
                  <div className="col-12">
                    <label htmlFor="subject" className="form-label fw-semibold text-dark small">
                      Subject <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Discussion / Internship Inquiry"
                      className={`form-control ${formErrors.subject ? 'is-invalid' : ''}`}
                      disabled={isSubmitting}
                    />
                    {formErrors.subject && <div className="invalid-feedback">{formErrors.subject}</div>}
                  </div>

                  {/* Message */}
                  <div className="col-12">
                    <label htmlFor="message" className="form-label fw-semibold text-dark small">
                      Message <span className="text-danger">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hello Shreevidhya, I'd like to talk about..."
                      className={`form-control ${formErrors.message ? 'is-invalid' : ''}`}
                      disabled={isSubmitting}
                    ></textarea>
                    {formErrors.message && <div className="invalid-feedback">{formErrors.message}</div>}
                    <div className="form-text small text-muted">
                      Minimum 10 characters required. Messages are saved directly to MongoDB.
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="col-12 mt-4">
                    <button
                      type="submit"
                      className="btn btn-primary-custom w-100 py-3 fw-bold d-flex align-items-center justify-content-center gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                          <span>Sending message to server...</span>
                        </>
                      ) : (
                        <>
                          <i className="bi bi-send-fill"></i>
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
