import React from 'react';
import { SkillCategory } from '../types';

export const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      category: 'Frontend',
      icon: 'bi-window-stack',
      skills: [
        { name: 'React', level: 85, levelLabel: 'Advanced' },
        { name: 'TypeScript', level: 80, levelLabel: 'Proficient' },
        { name: 'JavaScript', level: 85, levelLabel: 'Advanced' },
        { name: 'HTML5', level: 90, levelLabel: 'Expert' },
        { name: 'CSS3', level: 85, levelLabel: 'Advanced' },
        { name: 'Bootstrap 5', level: 90, levelLabel: 'Expert' }
      ]
    },
    {
      category: 'Backend',
      icon: 'bi-hdd-network',
      skills: [
        { name: 'Node.js', level: 80, levelLabel: 'Proficient' },
        { name: 'Express.js', level: 85, levelLabel: 'Proficient' },
        { name: 'REST APIs', level: 85, levelLabel: 'Advanced' }
      ]
    },
    {
      category: 'Programming Languages',
      icon: 'bi-code-square',
      skills: [
        { name: 'Java', level: 85, levelLabel: 'Advanced' },
        { name: 'TypeScript', level: 80, levelLabel: 'Proficient' },
        { name: 'JavaScript', level: 85, levelLabel: 'Advanced' },
        { name: 'Python', level: 75, levelLabel: 'Intermediate' }
      ]
    },
    {
      category: 'Database',
      icon: 'bi-database-fill',
      skills: [
        { name: 'MongoDB', level: 80, levelLabel: 'Proficient' },
        { name: 'SQL', level: 75, levelLabel: 'Intermediate' },
        { name: 'Mongoose ODM', level: 80, levelLabel: 'Proficient' }
      ]
    },
    {
      category: 'Tools & Technologies',
      icon: 'bi-tools',
      skills: [
        { name: 'Git & GitHub', level: 85, levelLabel: 'Proficient' },
        { name: 'VS Code', level: 90, levelLabel: 'Expert' },
        { name: 'Postman / API Testing', level: 80, levelLabel: 'Proficient' },
        { name: 'Swagger / OpenAPI', level: 75, levelLabel: 'Intermediate' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="section-title h1">Technical Skills</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Core programming languages, frameworks, databases, and development tools in my arsenal.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div className="custom-card p-4 h-100 bg-white">
                <div className="d-flex align-items-center gap-3 mb-4 border-bottom pb-3">
                  <div className="p-3 bg-primary-subtle text-primary rounded-3">
                    <i className={`bi ${cat.icon} fs-4`}></i>
                  </div>
                  <h3 className="h5 fw-bold mb-0 text-dark">{cat.category}</h3>
                </div>

                <div className="d-flex flex-column gap-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx}>
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="fw-semibold text-dark small">{skill.name}</span>
                        <span className="badge bg-light text-muted border small">
                          {skill.levelLabel}
                        </span>
                      </div>
                      <div className="skill-progress-bar">
                        <div
                          className="skill-progress-fill"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
