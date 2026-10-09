"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = exports.swaggerDocument = void 0;
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
exports.swaggerDocument = {
    openapi: '3.0.0',
    info: {
        title: 'Shreevidhya - Portfolio CMS REST API',
        version: '2.0.0',
        description: 'Complete dynamic CMS REST API for Shreevidhya\'s personal portfolio website. Features secure JWT Admin Authentication and full CRUD capabilities for every portfolio section.',
        contact: {
            name: 'Shreevidhya',
            email: 'admin@shreevidhya.dev'
        }
    },
    servers: [
        {
            url: 'http://localhost:5000',
            description: 'Local Development Server'
        }
    ],
    components: {
        securitySchemes: {
            BearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
                description: 'Enter your JWT token obtained from /api/auth/login'
            }
        },
        schemas: {
            LoginInput: {
                type: 'object',
                required: ['email', 'password'],
                properties: {
                    email: { type: 'string', example: 'admin@shreevidhya.dev' },
                    password: { type: 'string', example: 'Admin@123' }
                }
            },
            ProfileInput: {
                type: 'object',
                required: ['name', 'title', 'bio', 'location', 'email', 'department', 'college', 'careerGoal'],
                properties: {
                    name: { type: 'string', example: 'Shreevidhya' },
                    title: { type: 'string', example: 'IT Student | Aspiring App Developer' },
                    shortIntro: { type: 'string', example: 'Passionate IT student building modern web & mobile solutions.' },
                    bio: { type: 'string', example: 'Detailed narrative about background and tech enthusiasm.' },
                    careerGoal: { type: 'string', example: 'App Developer' },
                    interests: { type: 'array', items: { type: 'string' }, example: ['App Development', 'AI/ML', 'Cloud'] },
                    location: { type: 'string', example: 'Neyveli, Tamil Nadu, India' },
                    email: { type: 'string', example: 'admin@shreevidhya.dev' },
                    phone: { type: 'string', example: '+91 98765 43210' },
                    department: { type: 'string', example: 'Information Technology' },
                    college: { type: 'string', example: 'Dhanalakshmi College of Engineering' },
                    avatarUrl: { type: 'string', example: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb' },
                    resumeUrl: { type: 'string', example: '#' },
                    githubUrl: { type: 'string', example: 'https://github.com/shreevidhya' },
                    linkedinUrl: { type: 'string', example: 'https://linkedin.com/in/shreevidhya' },
                    twitterUrl: { type: 'string', example: '' },
                    currentLearningFocus: { type: 'array', items: { type: 'string' }, example: ['Java', 'React', 'TypeScript', 'AI/ML'] }
                }
            },
            EducationInput: {
                type: 'object',
                required: ['college', 'degree', 'department', 'year'],
                properties: {
                    college: { type: 'string', example: 'Dhanalakshmi College of Engineering' },
                    degree: { type: 'string', example: 'Bachelor of Technology (B.Tech)' },
                    department: { type: 'string', example: 'Information Technology' },
                    year: { type: 'string', example: '2022 - 2026' },
                    startYear: { type: 'string', example: '2022' },
                    endYear: { type: 'string', example: '2026' },
                    cgpaOrPercentage: { type: 'string', example: 'First Class with Distinction' },
                    description: { type: 'string', example: 'Core computer science & engineering curriculum' },
                    coursework: { type: 'array', items: { type: 'string' }, example: ['DSA', 'Java OOP', 'DBMS', 'Networks'] },
                    order: { type: 'integer', example: 1 }
                }
            },
            SkillInput: {
                type: 'object',
                required: ['name', 'category'],
                properties: {
                    name: { type: 'string', example: 'TypeScript' },
                    category: {
                        type: 'string',
                        enum: ['Programming Languages', 'Frontend', 'Backend', 'Database', 'Tools', 'Other skills'],
                        example: 'Programming Languages'
                    },
                    proficiency: { type: 'integer', example: 85 },
                    levelLabel: { type: 'string', example: 'Proficient' },
                    icon: { type: 'string', example: 'bi-code-slash' },
                    order: { type: 'integer', example: 1 }
                }
            },
            ProjectInput: {
                type: 'object',
                required: ['title', 'description', 'technologies', 'githubUrl', 'category'],
                properties: {
                    title: { type: 'string', example: 'E-Commerce Website' },
                    description: { type: 'string', example: 'Full-stack store with shopping cart and REST API' },
                    detailedDescription: { type: 'string', example: 'Engineered with React, TypeScript, Express, MongoDB' },
                    technologies: { type: 'array', items: { type: 'string' }, example: ['React', 'TypeScript', 'MongoDB'] },
                    githubUrl: { type: 'string', example: 'https://github.com/shreevidhya/ecommerce-store' },
                    liveDemoUrl: { type: 'string', example: 'https://ecommerce-demo.vercel.app' },
                    imageUrl: { type: 'string', example: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc' },
                    category: { type: 'string', example: 'Web Development' },
                    featured: { type: 'boolean', example: true }
                }
            },
            InternshipInput: {
                type: 'object',
                required: ['company', 'role', 'duration', 'description'],
                properties: {
                    company: { type: 'string', example: 'Tech Labs India' },
                    role: { type: 'string', example: 'Web Development Trainee' },
                    duration: { type: 'string', example: 'June 2024 - August 2024' },
                    description: { type: 'string', example: 'Worked on REST APIs and interactive React interfaces' },
                    technologies: { type: 'array', items: { type: 'string' }, example: ['React', 'Node.js', 'MongoDB'] },
                    certificateUrl: { type: 'string', example: '#' },
                    location: { type: 'string', example: 'Chennai (Hybrid)' }
                }
            },
            CertificationInput: {
                type: 'object',
                required: ['title', 'issuingOrganization', 'issueDate'],
                properties: {
                    title: { type: 'string', example: 'Java Programming Foundations' },
                    issuingOrganization: { type: 'string', example: 'Oracle Academy / Coursera' },
                    issueDate: { type: 'string', example: '2024' },
                    credentialUrl: { type: 'string', example: 'https://coursera.org/verify/example' },
                    credentialId: { type: 'string', example: 'CERT-JAVA-2024' },
                    badgeIcon: { type: 'string', example: 'bi-patch-check-fill' },
                    imageUrl: { type: 'string', example: '' }
                }
            },
            AchievementInput: {
                type: 'object',
                required: ['title', 'description', 'date'],
                properties: {
                    title: { type: 'string', example: 'First Place - Department Web Hackathon' },
                    description: { type: 'string', example: 'Developed innovative responsive student utility platform' },
                    date: { type: 'string', example: '2024' },
                    issuer: { type: 'string', example: 'Dhanalakshmi College of Engineering' },
                    url: { type: 'string', example: '#' },
                    badgeIcon: { type: 'string', example: 'bi-trophy-fill' }
                }
            },
            ExperienceInput: {
                type: 'object',
                required: ['title', 'organization', 'period', 'description'],
                properties: {
                    title: { type: 'string', example: 'Active Member & Cultural Coordinator' },
                    organization: { type: 'string', example: 'Tamil Mandram - Dhanalakshmi College of Engineering' },
                    period: { type: 'string', example: '2023 - Present' },
                    category: { type: 'string', example: 'club' },
                    description: { type: 'string', example: 'Coordinated cultural events and student oratory sessions.' },
                    highlights: { type: 'array', items: { type: 'string' }, example: ['Organized annual festival', 'Team coordination'] }
                }
            },
            ContactInput: {
                type: 'object',
                required: ['name', 'email', 'subject', 'message'],
                properties: {
                    name: { type: 'string', example: 'Visitor Name' },
                    email: { type: 'string', example: 'visitor@example.com' },
                    subject: { type: 'string', example: 'Project Collaboration' },
                    message: { type: 'string', example: 'Hi Shreevidhya, great portfolio! Let us connect.' }
                }
            }
        }
    },
    tags: [
        { name: 'Auth', description: 'Admin authentication and password management' },
        { name: 'Profile', description: 'Hero & About details' },
        { name: 'Education', description: 'Academic milestones and degrees' },
        { name: 'Skills', description: 'Technical and programming skills' },
        { name: 'Projects', description: 'Portfolio project showcases' },
        { name: 'Internships', description: 'Internship experiences' },
        { name: 'Certifications', description: 'Professional & academic certifications' },
        { name: 'Achievements', description: 'Honors and hackathon awards' },
        { name: 'Experience', description: 'Activities, Tamil Mandram, and clubs' },
        { name: 'Contact', description: 'Contact form messages' }
    ],
    paths: {
        '/api/auth/login': {
            post: {
                tags: ['Auth'],
                summary: 'Admin login',
                requestBody: {
                    required: true,
                    content: { 'application/json': { schema: { $ref: '#/components/schemas/LoginInput' } } }
                },
                responses: {
                    200: { description: 'Login successful with JWT token' },
                    401: { description: 'Invalid credentials' }
                }
            }
        },
        '/api/auth/me': {
            get: {
                tags: ['Auth'],
                summary: 'Get currently authenticated user',
                security: [{ BearerAuth: [] }],
                responses: { 200: { description: 'Authenticated user profile' } }
            }
        },
        '/api/profile': {
            get: {
                tags: ['Profile'],
                summary: 'Get portfolio profile',
                responses: { 200: { description: 'Profile retrieved' } }
            },
            put: {
                tags: ['Profile'],
                summary: 'Update portfolio profile (Admin only)',
                security: [{ BearerAuth: [] }],
                requestBody: {
                    required: true,
                    content: { 'application/json': { schema: { $ref: '#/components/schemas/ProfileInput' } } }
                },
                responses: { 200: { description: 'Profile updated successfully' } }
            }
        },
        '/api/education': {
            get: {
                tags: ['Education'],
                summary: 'Get all education entries',
                responses: { 200: { description: 'Education list retrieved' } }
            },
            post: {
                tags: ['Education'],
                summary: 'Create education entry (Admin only)',
                security: [{ BearerAuth: [] }],
                requestBody: {
                    required: true,
                    content: { 'application/json': { schema: { $ref: '#/components/schemas/EducationInput' } } }
                },
                responses: { 201: { description: 'Education entry created' } }
            }
        },
        '/api/education/{id}': {
            put: {
                tags: ['Education'],
                summary: 'Update education entry (Admin only)',
                security: [{ BearerAuth: [] }],
                parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
                requestBody: {
                    required: true,
                    content: { 'application/json': { schema: { $ref: '#/components/schemas/EducationInput' } } }
                },
                responses: { 200: { description: 'Education entry updated' } }
            },
            delete: {
                tags: ['Education'],
                summary: 'Delete education entry (Admin only)',
                security: [{ BearerAuth: [] }],
                parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
                responses: { 200: { description: 'Education entry deleted' } }
            }
        },
        '/api/skills': {
            get: {
                tags: ['Skills'],
                summary: 'Get all skills',
                parameters: [{ name: 'category', in: 'query', schema: { type: 'string' } }],
                responses: { 200: { description: 'Skills list retrieved' } }
            },
            post: {
                tags: ['Skills'],
                summary: 'Create skill (Admin only)',
                security: [{ BearerAuth: [] }],
                requestBody: {
                    required: true,
                    content: { 'application/json': { schema: { $ref: '#/components/schemas/SkillInput' } } }
                },
                responses: { 201: { description: 'Skill created' } }
            }
        },
        '/api/skills/{id}': {
            put: {
                tags: ['Skills'],
                summary: 'Update skill (Admin only)',
                security: [{ BearerAuth: [] }],
                parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
                requestBody: {
                    required: true,
                    content: { 'application/json': { schema: { $ref: '#/components/schemas/SkillInput' } } }
                },
                responses: { 200: { description: 'Skill updated' } }
            },
            delete: {
                tags: ['Skills'],
                summary: 'Delete skill (Admin only)',
                security: [{ BearerAuth: [] }],
                parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
                responses: { 200: { description: 'Skill deleted' } }
            }
        },
        '/api/projects': {
            get: {
                tags: ['Projects'],
                summary: 'Get all projects',
                parameters: [{ name: 'category', in: 'query', schema: { type: 'string' } }],
                responses: { 200: { description: 'Projects list retrieved' } }
            },
            post: {
                tags: ['Projects'],
                summary: 'Create project (Admin only)',
                security: [{ BearerAuth: [] }],
                requestBody: {
                    required: true,
                    content: { 'application/json': { schema: { $ref: '#/components/schemas/ProjectInput' } } }
                },
                responses: { 201: { description: 'Project created' } }
            }
        },
        '/api/projects/{id}': {
            get: {
                tags: ['Projects'],
                summary: 'Get project by ID',
                parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
                responses: { 200: { description: 'Project retrieved' } }
            },
            put: {
                tags: ['Projects'],
                summary: 'Update project (Admin only)',
                security: [{ BearerAuth: [] }],
                parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
                requestBody: {
                    required: true,
                    content: { 'application/json': { schema: { $ref: '#/components/schemas/ProjectInput' } } }
                },
                responses: { 200: { description: 'Project updated' } }
            },
            delete: {
                tags: ['Projects'],
                summary: 'Delete project (Admin only)',
                security: [{ BearerAuth: [] }],
                parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
                responses: { 200: { description: 'Project deleted' } }
            }
        },
        '/api/internships': {
            get: {
                tags: ['Internships'],
                summary: 'Get all internships',
                responses: { 200: { description: 'Internships list retrieved' } }
            },
            post: {
                tags: ['Internships'],
                summary: 'Create internship (Admin only)',
                security: [{ BearerAuth: [] }],
                requestBody: {
                    required: true,
                    content: { 'application/json': { schema: { $ref: '#/components/schemas/InternshipInput' } } }
                },
                responses: { 201: { description: 'Internship created' } }
            }
        },
        '/api/internships/{id}': {
            put: {
                tags: ['Internships'],
                summary: 'Update internship (Admin only)',
                security: [{ BearerAuth: [] }],
                parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
                requestBody: {
                    required: true,
                    content: { 'application/json': { schema: { $ref: '#/components/schemas/InternshipInput' } } }
                },
                responses: { 200: { description: 'Internship updated' } }
            },
            delete: {
                tags: ['Internships'],
                summary: 'Delete internship (Admin only)',
                security: [{ BearerAuth: [] }],
                parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
                responses: { 200: { description: 'Internship deleted' } }
            }
        },
        '/api/certifications': {
            get: {
                tags: ['Certifications'],
                summary: 'Get all certifications',
                responses: { 200: { description: 'Certifications list retrieved' } }
            },
            post: {
                tags: ['Certifications'],
                summary: 'Create certification (Admin only)',
                security: [{ BearerAuth: [] }],
                requestBody: {
                    required: true,
                    content: { 'application/json': { schema: { $ref: '#/components/schemas/CertificationInput' } } }
                },
                responses: { 201: { description: 'Certification created' } }
            }
        },
        '/api/certifications/{id}': {
            put: {
                tags: ['Certifications'],
                summary: 'Update certification (Admin only)',
                security: [{ BearerAuth: [] }],
                parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
                requestBody: {
                    required: true,
                    content: { 'application/json': { schema: { $ref: '#/components/schemas/CertificationInput' } } }
                },
                responses: { 200: { description: 'Certification updated' } }
            },
            delete: {
                tags: ['Certifications'],
                summary: 'Delete certification (Admin only)',
                security: [{ BearerAuth: [] }],
                parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
                responses: { 200: { description: 'Certification deleted' } }
            }
        },
        '/api/achievements': {
            get: {
                tags: ['Achievements'],
                summary: 'Get all achievements',
                responses: { 200: { description: 'Achievements list retrieved' } }
            },
            post: {
                tags: ['Achievements'],
                summary: 'Create achievement (Admin only)',
                security: [{ BearerAuth: [] }],
                requestBody: {
                    required: true,
                    content: { 'application/json': { schema: { $ref: '#/components/schemas/AchievementInput' } } }
                },
                responses: { 201: { description: 'Achievement created' } }
            }
        },
        '/api/achievements/{id}': {
            put: {
                tags: ['Achievements'],
                summary: 'Update achievement (Admin only)',
                security: [{ BearerAuth: [] }],
                parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
                requestBody: {
                    required: true,
                    content: { 'application/json': { schema: { $ref: '#/components/schemas/AchievementInput' } } }
                },
                responses: { 200: { description: 'Achievement updated' } }
            },
            delete: {
                tags: ['Achievements'],
                summary: 'Delete achievement (Admin only)',
                security: [{ BearerAuth: [] }],
                parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
                responses: { 200: { description: 'Achievement deleted' } }
            }
        },
        '/api/experience': {
            get: {
                tags: ['Experience'],
                summary: 'Get all experience entries',
                responses: { 200: { description: 'Experience list retrieved' } }
            },
            post: {
                tags: ['Experience'],
                summary: 'Create experience (Admin only)',
                security: [{ BearerAuth: [] }],
                requestBody: {
                    required: true,
                    content: { 'application/json': { schema: { $ref: '#/components/schemas/ExperienceInput' } } }
                },
                responses: { 201: { description: 'Experience created' } }
            }
        },
        '/api/experience/{id}': {
            put: {
                tags: ['Experience'],
                summary: 'Update experience (Admin only)',
                security: [{ BearerAuth: [] }],
                parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
                requestBody: {
                    required: true,
                    content: { 'application/json': { schema: { $ref: '#/components/schemas/ExperienceInput' } } }
                },
                responses: { 200: { description: 'Experience updated' } }
            },
            delete: {
                tags: ['Experience'],
                summary: 'Delete experience (Admin only)',
                security: [{ BearerAuth: [] }],
                parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
                responses: { 200: { description: 'Experience deleted' } }
            }
        },
        '/api/contact': {
            post: {
                tags: ['Contact'],
                summary: 'Submit contact message (Public)',
                requestBody: {
                    required: true,
                    content: { 'application/json': { schema: { $ref: '#/components/schemas/ContactInput' } } }
                },
                responses: { 201: { description: 'Message received and stored' } }
            },
            get: {
                tags: ['Contact'],
                summary: 'View contact messages (Admin only)',
                security: [{ BearerAuth: [] }],
                responses: { 200: { description: 'Messages list retrieved' } }
            }
        },
        '/api/contact/{id}': {
            delete: {
                tags: ['Contact'],
                summary: 'Delete contact message (Admin only)',
                security: [{ BearerAuth: [] }],
                parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
                responses: { 200: { description: 'Message deleted' } }
            }
        }
    }
};
const setupSwagger = (app) => {
    app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(exports.swaggerDocument, {
        customCss: '.swagger-ui .topbar { display: none }',
        customSiteTitle: 'Shreevidhya Portfolio CMS Docs'
    }));
    console.log('[Swagger] Documentation available at /api-docs');
};
exports.setupSwagger = setupSwagger;
