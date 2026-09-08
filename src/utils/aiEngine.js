import { languages } from "../data/languages";

/* =========================================================
   CAREER DOMAINS KNOWLEDGE BASE
   Single source of truth for the "Trending Career Paths"
   section AND the AI Assistant answers.
========================================================= */

export const careerDomainsKnowledge = [
  {
    icon: "🌐",
    name: "Web Development",
    skills: "HTML, CSS, JavaScript, React, Node.js",
    route: "/web-development",
    salary: "₹4–10 LPA",
    difficulty: "Easy to Medium",
    duration: "4–7 Months",
    roadmap:
      "HTML & CSS → JavaScript → React → Node.js & Databases → Projects → Deployment",
    careers: "Frontend Developer, Backend Developer, Full Stack Developer",
    description:
      "Web Development is about building websites and web apps — everything a user sees (frontend) and everything running behind the scenes (backend).",
  },
  {
    icon: "🔐",
    name: "Cyber Security",
    skills: "Networking, Linux, Ethical Hacking, Security",
    route: "/cyber-security",
    salary: "₹4–9 LPA",
    difficulty: "Medium",
    duration: "5–8 Months",
    roadmap:
      "Networking Basics → Linux → Security Fundamentals → Ethical Hacking → Certifications → Projects",
    careers: "Security Analyst, Ethical Hacker, SOC Engineer",
    description:
      "Cyber Security focuses on protecting systems, networks and data from digital attacks, breaches and unauthorized access.",
  },
  {
    icon: "🤖",
    name: "Artificial Intelligence",
    skills: "Python, Machine Learning, Deep Learning",
    route: "/artificial-intelligence",
    salary: "₹6–14 LPA",
    difficulty: "Hard",
    duration: "6–10 Months",
    roadmap:
      "Python → Maths for ML → Machine Learning → Deep Learning → Projects → Interview Prep",
    careers: "AI Engineer, ML Engineer, Research Engineer",
    description:
      "Artificial Intelligence is about building systems that can learn, reason and make decisions using data and Machine Learning.",
  },
  {
    icon: "📊",
    name: "Data Science",
    skills: "Python, SQL, Statistics, Analytics",
    route: "/data-science",
    salary: "₹5–12 LPA",
    difficulty: "Medium to Hard",
    duration: "5–9 Months",
    roadmap:
      "Python & SQL → Statistics → Data Analysis → Machine Learning → Visualization → Projects",
    careers: "Data Analyst, Data Scientist, Business Analyst",
    description:
      "Data Science combines programming, statistics and Machine Learning to turn raw data into insights and predictions.",
  },
  {
    icon: "☁️",
    name: "Cloud Computing",
    skills: "AWS, Azure, DevOps, Docker",
    route: "/cloud-computing",
    salary: "₹5–11 LPA",
    difficulty: "Medium",
    duration: "4–7 Months",
    roadmap:
      "Cloud Basics → AWS / Azure → Docker → Kubernetes → CI/CD → Projects",
    careers: "Cloud Engineer, DevOps Engineer, Site Reliability Engineer",
    description:
      "Cloud Computing is about deploying, managing and scaling applications using cloud platforms like AWS, Azure and Google Cloud.",
  },
  {
    icon: "📱",
    name: "Mobile Development",
    skills: "Android, Flutter, React Native",
    route: "/mobile-development",
    salary: "₹4–9 LPA",
    difficulty: "Medium",
    duration: "4–7 Months",
    roadmap:
      "Programming Basics → UI Design → Android / Flutter → APIs → Projects → Deployment",
    careers: "Android Developer, Flutter Developer, Mobile App Engineer",
    description:
      "Mobile Development is about building apps for Android and iOS using tools like Android Studio, Flutter or React Native.",
  },
];

/* =========================================================
   PROGRAMMING LANGUAGE KNOWLEDGE BASE
   Adds roadmap / description / careers on top of the base
   stats already stored in data/Languages.js
========================================================= */

export const languageAIInfo = {
  python: {
    description:
      "Python is a beginner-friendly language known for its simple, readable syntax and is widely used in AI, Data Science, Automation and Web Development.",
    roadmap:
      "Python Basics → OOP → DSA → Projects → Frameworks → Interview Preparation",
    careers: "AI Engineer, Data Scientist, Backend Developer, Automation Engineer",
  },
  java: {
    description:
      "Java is a robust, object-oriented language mainly used for Enterprise Applications and Android Development.",
    roadmap: "Core Java → OOP → Collections → JDBC → Spring Boot → Projects",
    careers: "Backend Developer, Android Developer, Software Engineer",
  },
  c: {
    description:
      "C is the foundation of programming — a fast, low-level language widely used in Embedded Systems and Operating Systems.",
    roadmap: "C Basics → Pointers → Memory Management → Data Structures → Projects",
    careers: "Embedded Systems Engineer, System Programmer",
  },
  "c++": {
    description:
      "C++ builds on C with Object-Oriented Programming and is popular in Game Development, System Programming and Competitive Coding.",
    roadmap: "C++ Basics → OOP → STL → DSA → Competitive Coding → Projects",
    careers: "Game Developer, System Programmer, Competitive Programmer",
  },
  javascript: {
    description:
      "JavaScript is the language of the web — used on both the frontend and backend to build interactive websites and apps.",
    roadmap: "JS Basics → DOM → ES6+ → React → Node.js → Projects",
    careers: "Frontend Developer, Full Stack Developer, Web Developer",
  },
  "c#": {
    description:
      "C# is mainly used with the .NET ecosystem and Unity, making it popular for enterprise software and game development.",
    roadmap: "C# Basics → OOP → .NET → Unity / ASP.NET → Projects",
    careers: ".NET Developer, Unity Game Developer, Software Engineer",
  },
};

/* =========================================================
   RICH REPLY BUILDERS — used by the Ask AI panels on cards
========================================================= */

export function getLanguageAIReply(name) {
  const lang = languages.find(
    (l) => l.name.toLowerCase() === name.toLowerCase(),
  );
  if (!lang) return null;

  const info = languageAIInfo[lang.name.toLowerCase()];

  return `${lang.icon} ${lang.name}

${info ? info.description : ""}

💰 Salary: ${lang.salary}
📈 Difficulty: ${lang.difficulty}
⏳ Duration: ${lang.duration}
💼 Jobs: ${lang.jobs}
${info ? `🛣️ Roadmap: ${info.roadmap}` : ""}
${info ? `🎯 Careers: ${info.careers}` : ""}`;
}

export function getCareerAIReply(name) {
  const domain = careerDomainsKnowledge.find(
    (d) => d.name.toLowerCase() === name.toLowerCase(),
  );
  if (!domain) return null;

  return `${domain.icon} ${domain.name}

${domain.description}

🧠 Key Skills: ${domain.skills}
💰 Salary: ${domain.salary}
📈 Difficulty: ${domain.difficulty}
⏳ Duration: ${domain.duration}
🛣️ Roadmap: ${domain.roadmap}
🎯 Careers: ${domain.careers}`;
}

/* =========================================================
   GENERAL FREE-TEXT REPLY — used by the AI Chat page
========================================================= */

/* Order matters: more specific / superset tokens (javascript, c++, c#)
   must be checked before their short substrings (java, c) so that
   e.g. "javascript" never gets matched as "java" and "c++"/"cyber"/
   "cloud"/"css"/"career" never get wrongly matched as the "C" language. */
const LANGUAGE_MATCHERS = [
  { key: "javascript", regex: /\bjavascript\b|\bjs\b/ },
  { key: "c++", regex: /c\+\+/ },
  { key: "c#", regex: /c#/ },
  { key: "python", regex: /\bpython\b/ },
  { key: "java", regex: /\bjava\b/ },
  { key: "c", regex: /\bc\b/ },
];

function findLanguageMatch(q) {
  for (const { key, regex } of LANGUAGE_MATCHERS) {
    if (regex.test(q)) {
      const lang = languages.find((l) => l.name.toLowerCase() === key);
      if (lang) return lang;
    }
  }
  return null;
}

export function getAIReply(userMessage) {
  const q = userMessage.toLowerCase().trim();

  const language = findLanguageMatch(q);
  if (language) return getLanguageAIReply(language.name);

  const domain = careerDomainsKnowledge.find((d) =>
    q.includes(d.name.toLowerCase()),
  );
  if (domain) return getCareerAIReply(domain.name);

  if (q.includes("artificial intelligence") || q === "ai" || q.includes(" ai ")) {
    return "🤖 Artificial Intelligence focuses on building intelligent systems using Machine Learning and data.";
  }
  if (q.includes("machine learning")) {
    return "🧠 Machine Learning helps computers learn patterns from data and make predictions.";
  }
  if (q.includes("data science")) {
    return "📊 Data Science combines programming, statistics, data analysis and Machine Learning.";
  }
  if (q.includes("web development")) {
    return "🌐 Web Development includes HTML, CSS, JavaScript, React and backend technologies.";
  }
  if (q.includes("mobile") || q.includes("android") || q.includes("flutter")) {
    return "📱 Mobile Development commonly uses Android (Kotlin/Java), Flutter or React Native.";
  }
  if (q.includes("cyber")) {
    return "🔐 Cyber Security protects systems, applications and networks from security threats.";
  }
  if (q.includes("cloud")) {
    return "☁️ Cloud Computing includes platforms and services such as AWS, Azure and Google Cloud.";
  }
  if (q.includes("salary") || q.includes("highest salary")) {
    return "💰 Salaries depend on skills, experience, location and company. Ask me about a specific language or career.";
  }
  if (q.includes("roadmap")) {
    return "🛣️ Tell me the programming language or career path you want, and I can guide you through the learning roadmap.";
  }
  if (q.includes("skills")) {
    return "📚 Strong careers need technical skills, problem solving, projects and continuous learning.";
  }
  if (q.includes("interview")) {
    return "🎯 Interview preparation should cover core concepts, DSA, projects and mock interviews.";
  }
  if (q.includes("devops")) {
    return "⚡ DevOps combines development and operations using tools such as Docker, Kubernetes and CI/CD.";
  }
  if (q.includes("ui") || q.includes("ux")) {
    return "🎨 UI/UX Design focuses on creating useful, accessible and user-friendly digital experiences.";
  }
  if (q.includes("game")) {
    return "🎮 Game Development commonly uses Unity with C# and Unreal Engine with C++.";
  }

  return "🤖 I can help with Programming Languages, Career Paths, Salaries, Skills, Interviews and Learning Roadmaps. Try asking about Python, Java, AI or Web Development.";
}

/* =========================================================
   FOLLOW-UP SUGGESTIONS — shown as chips under the AI's
   latest reply so the user can keep exploring the topic
========================================================= */

const DEFAULT_FOLLOWUPS = [
  "Compare Python vs Java",
  "Highest paying career",
  "Best roadmap for beginners",
];

export function getFollowUpSuggestions(userMessage) {
  const q = userMessage.toLowerCase().trim();

  const language = findLanguageMatch(q);
  if (language) {
    return [
      `${language.name} salary`,
      `${language.name} roadmap`,
      "Compare with another language",
    ];
  }

  const domain = careerDomainsKnowledge.find((d) =>
    q.includes(d.name.toLowerCase()),
  );
  if (domain) {
    return [
      `${domain.name} roadmap`,
      `${domain.name} salary`,
      "Required skills",
    ];
  }

  if (q.includes("salary")) {
    return ["Python salary", "Highest paying career", "Web Development salary"];
  }
  if (q.includes("roadmap")) {
    return ["Python roadmap", "Web Development roadmap", "AI roadmap"];
  }
  if (q.includes("interview")) {
    return ["DSA topics to learn", "Common interview questions", "Resume tips"];
  }

  return DEFAULT_FOLLOWUPS;
}
