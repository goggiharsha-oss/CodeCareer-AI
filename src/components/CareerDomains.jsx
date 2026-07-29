import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { playClick } from "../utils/playClick";

function CareerDomains({ search = "" }) {
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  const domains = [
    {
      icon: "🌐",
      name: "Web Development",
      skills: "HTML, CSS, JavaScript, React, Node.js",
      route: "/web-development",
    },
    {
      icon: "🔐",
      name: "Cyber Security",
      skills: "Networking, Linux, Ethical Hacking, Security",
      route: "/cyber-security",
    },
    {
      icon: "🤖",
      name: "Artificial Intelligence",
      skills: "Python, Machine Learning, Deep Learning",
      route: "/artificial-intelligence",
    },
    {
      icon: "📊",
      name: "Data Science",
      skills: "Python, SQL, Statistics, Analytics",
      route: "/data-science",
    },
    {
      icon: "☁️",
      name: "Cloud Computing",
      skills: "AWS, Azure, DevOps, Docker",
      route: "/cloud-computing",
    },
    {
      icon: "📱",
      name: "Mobile Development",
      skills: "Android, Flutter, React Native",
      route: "/mobile-development",
    },
  ];

  const filteredDomains = domains.filter(
    (domain) =>
      domain.name.toLowerCase().includes(search.toLowerCase()) ||
      domain.skills.toLowerCase().includes(search.toLowerCase()) ||
      (search.toLowerCase() === "ai" &&
        domain.name === "Artificial Intelligence")
  );

  return (
    <section
      id="careers"
      className={`py-20 px-6 transition-colors duration-500 ${
        darkMode
          ? "bg-slate-950"
          : "bg-gradient-to-b from-white via-slate-50 to-cyan-50"
      }`}
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`text-4xl font-bold text-center mb-12 ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          🚀 Trending Career Paths
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredDomains.map((domain, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    onClick={() => navigate(domain.route)}
    className={`group rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
      darkMode
        ? "bg-slate-900 border border-slate-800 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]"
        : "bg-white border border-cyan-100 shadow-lg hover:border-cyan-400 hover:shadow-[0_15px_35px_rgba(34,211,238,0.25)]"
    }`}
  >
    <div className="text-5xl transition-transform duration-300 group-hover:scale-110">
      {domain.icon}
    </div>

    <h3 className="text-2xl font-bold text-cyan-400 mt-4">
      {domain.name}
    </h3>

    <p
      className={`mt-3 leading-7 ${
        darkMode ? "text-gray-400" : "text-slate-600"
      }`}
    >
      {domain.skills}
    </p>

    <button
      onClick={(e) => {
        e.stopPropagation();
        playClick();
        navigate(domain.route);
      }}
      className="mt-6 inline-flex items-center gap-2 text-cyan-400 font-semibold transition-all duration-300 hover:text-cyan-300 hover:translate-x-2"
    >
      Explore Career
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </button>
  </motion.div>
))}
        </div>
      </div>
    </section>
  );
}

export default CareerDomains;