# Shreevidhya - Full-Stack Personal Portfolio Website

A modern, responsive, full-stack personal portfolio website designed for **Shreevidhya**, an Information Technology student and aspiring App Developer at Dhanalakshmi College of Engineering.

---

## 1. Project Overview

This project consists of a high-performance **React + TypeScript + Bootstrap 5** frontend and a robust **Node.js + Express + TypeScript + MongoDB** REST API backend. It features dynamic content rendering for projects and certifications, interactive contact messaging stored directly into MongoDB, and complete **OpenAPI / Swagger UI** documentation at `/api-docs`.

---

## 2. Technologies Used

### Frontend
- **React 18** & **TypeScript**
- **Bootstrap 5** & **Bootstrap Icons**
- **React Router DOM v6** (Client-side routing)
- **Axios** (Centralized REST API HTTP client)
- **Vite** (Next-generation lightning-fast bundler)
- Responsive Glassmorphism Design & CSS3 Animations

### Backend
- **Node.js** & **Express.js**
- **TypeScript**
- **MongoDB** & **Mongoose ODM**
- **Swagger UI Express** & **OpenAPI 3.0** specification
- **CORS** & **dotenv**
- Centralized Express Error Handling Middleware

---

## 3. Folder Structure

```
portfolio/
├── client/
│   ├── src/
│   │   ├── assets/           # Static media assets & icons
│   │   ├── components/       # Reusable UI components
│   │   │   ├── About.tsx
│   │   │   ├── Certifications.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Education.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── Skills.tsx
│   │   ├── pages/            # Page views
│   │   │   ├── Home.tsx
│   │   │   ├── NotFound.tsx
│   │   │   └── ProjectDetails.tsx
│   │   ├── services/         # Centralized Axios API service
│   │   │   └── api.ts
│   │   ├── types/            # TypeScript interfaces & types
│   │   │   └── index.ts
│   │   ├── App.tsx           # Router & Root Layout
│   │   ├── index.css         # Custom modern styling & variables
│   │   └── main.tsx          # Client React DOM entry point
│   ├── index.html            # HTML template with Google Fonts
│   ├── vite.config.ts        # Vite configuration & dev proxy
│   ├── package.json          # Frontend dependencies & scripts
│   └── tsconfig.json         # TypeScript configuration
│
├── server/
│   ├── src/
│   │   ├── config/           # MongoDB connection & database seeder
│   │   │   ├── db.ts
│   │   │   └── seed.ts
│   │   ├── controllers/      # REST API route controllers
│   │   │   ├── certificationController.ts
│   │   │   ├── contactController.ts
│   │   │   ├── profileController.ts
│   │   │   └── projectController.ts
│   │   ├── middleware/       # Error handling & validation middleware
│   │   │   └── errorHandler.ts
│   │   ├── models/           # Mongoose schemas
│   │   │   ├── Certification.ts
│   │   │   ├── ContactMessage.ts
│   │   │   ├── Profile.ts
│   │   │   └── Project.ts
│   │   ├── routes/           # Express router definitions
│   │   │   ├── certificationRoutes.ts
│   │   │   ├── contactRoutes.ts
│   │   │   ├── index.ts
│   │   │   ├── profileRoutes.ts
│   │   │   └── projectRoutes.ts
│   │   ├── services/         # Business logic layer
│   │   │   ├── certificationService.ts
│   │   │   ├── contactService.ts
│   │   │   ├── profileService.ts
│   │   │   └── projectService.ts
│   │   ├── swagger/          # OpenAPI 3.0 specification & Swagger UI
│   │   │   └── swagger.ts
│   │   └── server.ts         # Express server entry point
│   ├── .env                  # Backend environment variables
│   ├── .env.example          # Sample environment configuration
│   ├── package.json          # Backend dependencies & scripts
│   └── tsconfig.json         # TypeScript compiler configuration
│
├── package.json              # Root project configuration
└── README.md                 # Complete documentation
```

---

## 4. Requirements

Ensure the following tools are installed on your machine:
- **Node.js** (v18.x or v20.x or v22+)
- **npm** (v9+ or v10+)
- **MongoDB Community Server** running locally or a free **MongoDB Atlas** cloud cluster URI.

---

## 5. MongoDB Setup

### Option A: Local MongoDB
1. Ensure the MongoDB service is running on your machine:
   - On Windows: Start MongoDB in Windows Services (`services.msc`) or run:
     ```powershell
     net start MongoDB
     ```
   - The default local connection string is:
     `mongodb://localhost:27017/shreevidhya_portfolio`

### Option B: MongoDB Atlas (Cloud)
1. Create a cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Obtain your connection string:
   `mongodb+srv://<username>:<password>@cluster0.mongodb.net/shreevidhya_portfolio?retryWrites=true&w=majority`
3. Update `server/.env` with your URI.

---

## 6. Environment Variables

### Backend (`server/.env`)
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/shreevidhya_portfolio
CLIENT_ORIGIN=http://localhost:5173
```

### Frontend (`client/.env`)
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

---

## 7. Installation

### 1. Install Backend Dependencies
```bash
cd server
npm install
```

### 2. Install Frontend Dependencies
```bash
cd ../client
npm install
```

---

## 8. Running the Backend Server

```bash
cd server
npm run dev
```

The Express API server will start on `http://localhost:5000`.
- The database is automatically verified upon startup.
- If the database is empty, initial default records for Shreevidhya (Profile, Projects, Certifications) will be seeded automatically.
- To manually re-seed the sample data at any time, run:
  ```bash
  npm run seed
  ```

---

## 9. Running the Frontend Client

```bash
cd client
npm run dev
```

Open your browser at `http://localhost:5173` to explore the portfolio.

---

## 10. Swagger API Documentation

The server includes an interactive Swagger UI for testing and exploring every endpoint:

👉 **URL:** [http://localhost:5000/api-docs](http://localhost:5000/api-docs)

You can inspect schemas, send sample payloads, and verify responses directly inside your browser.

---

## 11. API Endpoints

### Profile
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/profile` | Retrieve owner profile details |
| `PUT` | `/api/profile` | Update profile information |

### Projects
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/projects` | Get all projects (supports `?category=...`) |
| `GET` | `/api/projects/:id` | Get single project by ID |
| `POST` | `/api/projects` | Create a new project |
| `PUT` | `/api/projects/:id` | Update an existing project |
| `DELETE` | `/api/projects/:id` | Delete a project |

### Certifications
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/certifications` | Get all certificates |
| `POST` | `/api/certifications` | Add a new certificate |
| `PUT` | `/api/certifications/:id` | Update a certificate |
| `DELETE` | `/api/certifications/:id` | Delete a certificate |

### Contact Messages
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/contact` | Submit a message from the contact form |
| `GET` | `/api/contact` | View received messages |

---

## 12. Database Models

### Profile (`server/src/models/Profile.ts`)
- `name`: String (required)
- `role`: String (required)
- `headline`: String
- `bio`: String (required)
- `location`: String (required)
- `email`: String (required)
- `phone`: String
- `department`: String (required)
- `college`: String (required)
- `careerGoal`: String (required)
- `currentLearningFocus`: [String]
- `githubUrl`: String
- `linkedinUrl`: String
- `avatarUrl`: String
- `resumeUrl`: String

### Project (`server/src/models/Project.ts`)
- `title`: String (required)
- `description`: String (required)
- `detailedDescription`: String
- `technologies`: [String] (required)
- `githubUrl`: String (required)
- `liveDemoUrl`: String
- `imageUrl`: String
- `category`: String (required, e.g. "Web Development", "App Development", "AI/ML")
- `featured`: Boolean
- `order`: Number

### Certification (`server/src/models/Certification.ts`)
- `title`: String (required)
- `issuingOrganization`: String (required)
- `issueDate`: String (required)
- `credentialUrl`: String
- `credentialId`: String
- `badgeIcon`: String

### ContactMessage (`server/src/models/ContactMessage.ts`)
- `name`: String (required, min length 2)
- `email`: String (required, email regex)
- `subject`: String (required, min length 3)
- `message`: String (required, min length 10)
- `status`: String ('unread' \| 'read')
- `createdAt`: Date

---

## 13. How to Add or Edit Portfolio Projects

You can add new projects either through:

### Method 1: Using Swagger UI
1. Navigate to `http://localhost:5000/api-docs`.
2. Expand `POST /api/projects`.
3. Click **Try it out**.
4. Enter your project details:
```json
{
  "title": "Flutter Mobile Tracker",
  "description": "Cross-platform mobile habit and productivity tracker.",
  "technologies": ["Flutter", "Dart", "Firebase"],
  "githubUrl": "https://github.com/shreevidhya/habit-tracker",
  "liveDemoUrl": "https://habit-tracker.demo",
  "category": "App Development"
}
```
5. Click **Execute**. The new project is instantly stored in MongoDB and appears immediately in the frontend!

### Method 2: Using cURL or Postman
```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "New App Project",
    "description": "Innovative app solution",
    "technologies": ["Java", "Android", "Firebase"],
    "githubUrl": "https://github.com/shreevidhya/new-app",
    "category": "App Development"
  }'
```

---

## 14. How to Build for Production

### Build Server
```bash
cd server
npm run build
npm start
```
The compiled files are created in `server/dist`.

### Build Client
```bash
cd client
npm run build
npm run preview
```
The production bundle is built into `client/dist`.
