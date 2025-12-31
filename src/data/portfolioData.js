// src/data/portfolioData.js

export const projects = [
  {
    id: "skillbridge",
    name: "SkillBridge – ✨ AI-Powered Personalized Learning Roadmap Platform",
    shortDescription:
      "A full-stack personalized learning roadmap platform with a secure, context-aware AI assistant that helps users understand concepts, track progress, and plan what to learn next.",
    features: [
      "Secure JWT authentication with protected REST API routes",
      "Role-based learning paths for Frontend, Backend, and Full-Stack developers",
      "Dynamic roadmap generation with step-wise progress tracking",
      "AI-powered learning assistant integrated into step detail pages",
      "Context-aware AI responses using step title, focus area, topics, and outcomes",
      "Beginner-friendly explanations enforced through structured prompt design",
      "User notes system persisted in MongoDB and loaded dynamically",
      "Graceful AI error handling, loading states, and demo-mode fallbacks",
    ],
    techStack: [
      "React",
      "Tailwind CSS",
      "React Router",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT Authentication",
      "REST APIs",
      "AI Integration (LLM API)",
    ],
    tools: ["VS Code", "Git", "GitHub", "Postman", "npm", "Nodemon"],
    githubUrl: "https://github.com/18mukeshram/skillbridge",
    liveUrl: "https://skillbridge-silk.vercel.app/",
  },
  {
    id: "ai-pipeline-builder",
    name: "Node-Based AI Pipeline Builder",
    shortDescription:
      "A node-based visual system for building and validating AI pipelines, focusing on graph abstractions, advanced state management, and backend DAG validation.",

    features: [
      "Custom node-based UI built with React Flow",
      "Dynamic text nodes with auto-resizing inputs and {{variable}} parsing",
      "Advanced state management using Zustand with event-driven updates",
      "Resolved React Flow render-loop issues through store ownership patterns",
      "FastAPI backend for pipeline validation and graph analysis",
      "Cycle detection using DAG algorithms (Kahn’s Algorithm)",
      "Clean frontend-backend API contracts with proper CORS configuration",
      "SaaS-grade UI polish with centralized Tailwind styling",
    ],
    badges: ["Advanced Project", "Graph Systems", "AI Tooling"],
    techStack: [
      "React",
      "React Flow",
      "Zustand",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "REST APIs",
      "Graph Algorithms (DAG)",
    ],

    tools: [
      "VS Code",
      "Git",
      "GitHub",
      "Postman",
      "Python virtual environments (venv)",
    ],

    githubUrl: "https://github.com/18mukeshram/<REPO_NAME>",
    liveUrl: "",
  },
  {
    id: "weather-app",
    name: "Weather Information Web App",
    shortDescription:
      "Responsive weather dashboard showing real-time city-based weather using the OpenWeather REST API.",
    features: [
      "City-based live weather search using async/await and Fetch API",
      "Displays temperature, conditions, humidity, wind speed, and pressure",
      "Loading spinner and error handling for invalid inputs",
      "Mobile-first responsive UI with glass-effect card and gradient background",
    ],
    techStack: [
      "HTML5",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "Fetch API",
      "OpenWeather API",
    ],
    tools: ["VS Code", "Git", "GitHub", "Browser DevTools"],
    githubUrl: "https://github.com/18mukeshram/weather-api-app",
    liveUrl: "",
  },
  {
    id: "student-course-management",
    name: "Student Course Management System (Angular SPA)",
    shortDescription:
      "Angular SPA for browsing courses, filtering, and managing student enrollment with CRUD operations.",
    features: [
      "Built with Angular standalone components and modern routing",
      "Dynamic course listing with search and filtering",
      "Course details with student enrollment add/remove (CRUD)",
      "Service-based state management and two-way data binding",
      "Responsive dashboard UI using Tailwind utility classes and gradients",
    ],
    techStack: ["Angular", "TypeScript", "Tailwind CSS", "HTML5", "SCSS"],
    tools: ["Angular CLI", "VS Code", "Git", "GitHub", "Chrome DevTools"],
    githubUrl: "https://github.com/18mukeshram/student-course-manager",
    liveUrl: "",
  },
];

export const skills = {
  languages: [
    "JavaScript (ES6+)",
    "TypeScript",
    "Python",
    "C",
    "Java",
    "Kotlin",
  ],

  frameworks: [
    "React.js",
    "Angular",
    "React Flow",
    "Tailwind CSS",
    "Bootstrap",
    "SCSS / SASS",
    "FastAPI (Python)",
  ],

  webSkills: [
    "REST API integration",
    "Asynchronous programming (async/await)",
    "Responsive design (mobile-first layouts)",
    "Single Page Application (SPA) development",
    "Component-based architecture",
    "Client-side routing",
    "State management (Zustand, services)",
    "Event-driven state updates",
    "Render optimization & avoiding render loops",
    "Form handling and validation",
    "UI/UX design with Tailwind utility classes",
  ],

  tools: [
    "VS Code",
    "Git",
    "GitHub",
    "Angular CLI",
    "Browser Developer Tools",
    "Postman / Thunder Client",
    "npm",
    "Nodemon",
    "Python virtual environments (venv)",
  ],

  concepts: [
    "API integration",
    "Component communication",
    "Unidirectional data flow",
    "Controlled vs uncontrolled components",
    "CRUD operations",
    "SPA routing patterns",
    "Graph algorithms (DAG detection, cycle detection)",
    "CORS configuration & frontend-backend integration",
    "Version control (Git workflow)",
  ],
};
