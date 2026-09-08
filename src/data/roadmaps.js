import { careerDomainsKnowledge } from "../utils/aiEngine";
import { languages } from "./Languages";

/* =========================================================
   CAREER PATH ROADMAPS
   Keyed by the exact career domain name.
========================================================= */

export const careerRoadmapSteps = {
  "Web Development": [
    "HTML & CSS Basics",
    "JavaScript Fundamentals",
    "React.js",
    "Backend with Node.js",
    "Database (MongoDB / SQL)",
    "Build Full Stack Projects",
  ],
  "Cyber Security": [
    "Computer Networks",
    "Linux Basics",
    "Python Scripting",
    "Ethical Hacking",
    "Security Tools",
    "Security Projects",
  ],
  "Artificial Intelligence": [
    "Python Basics",
    "Data Structures",
    "NumPy & Pandas",
    "Machine Learning",
    "Deep Learning",
    "AI Projects",
  ],
  "Data Science": [
    "Python Basics",
    "Statistics",
    "Data Analysis",
    "Machine Learning",
    "Data Visualization",
    "Real Data Projects",
  ],
  "Cloud Computing": [
    "Cloud Fundamentals",
    "Linux & Networking",
    "AWS / Azure Basics",
    "Docker & Containers",
    "Kubernetes",
    "CI/CD Pipelines",
  ],
  "Mobile Development": [
    "Programming Basics",
    "UI/UX for Mobile",
    "Android (Kotlin) / Flutter",
    "APIs & Databases",
    "App Testing",
    "Publish to Play Store",
  ],
};

/* =========================================================
   PROGRAMMING LANGUAGE ROADMAPS
   Keyed by the exact language name.
========================================================= */

export const languageRoadmapSteps = {
  Python: [
    "Python Basics",
    "OOP Concepts",
    "Data Structures & Algorithms",
    "Build Projects",
    "Frameworks (Django/Flask)",
    "Interview Preparation",
  ],
  Java: [
    "Core Java",
    "OOP Concepts",
    "Collections Framework",
    "JDBC",
    "Spring Boot",
    "Build Projects",
  ],
  C: [
    "C Basics",
    "Pointers",
    "Memory Management",
    "Data Structures",
    "Build Projects",
    "Interview Preparation",
  ],
  "C++": [
    "C++ Basics",
    "OOP Concepts",
    "STL",
    "Data Structures & Algorithms",
    "Competitive Coding",
    "Build Projects",
  ],
  JavaScript: [
    "JavaScript Basics",
    "DOM Manipulation",
    "ES6+ Features",
    "React.js",
    "Node.js",
    "Build Projects",
  ],
  "C#": [
    "C# Basics",
    "OOP Concepts",
    ".NET Fundamentals",
    "Unity / ASP.NET",
    "Build Projects",
    "Interview Preparation",
  ],
};

/* =========================================================
   COMBINED TRACK LIST for the Interactive Roadmap section
========================================================= */

export const careerTracks = careerDomainsKnowledge.map((domain) => ({
  key: domain.name,
  name: domain.name,
  icon: domain.icon,
  route: domain.route,
  steps: careerRoadmapSteps[domain.name] || [],
}));

export const languageTracks = languages.map((lang) => ({
  key: lang.name,
  name: lang.name,
  icon: lang.icon,
  route: lang.route,
  steps: languageRoadmapSteps[lang.name] || [],
}));
