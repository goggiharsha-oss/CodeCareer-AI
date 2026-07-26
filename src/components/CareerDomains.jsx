import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
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
const filteredDomains = domains.filter((domain) =>
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
        <h2
          className={`text-4xl font-bold text-center mb-12 ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          🚀 Trending Career Paths
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredDomains.map((domain, index) => (
            <div
              key={index}
              onClick={() => navigate(domain.route)}
              className={`rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? "bg-slate-900 border border-slate-800 hover:border-cyan-400"
                  : "bg-white border border-cyan-100 shadow-lg hover:border-cyan-400 hover:shadow-2xl"
              }`}
            >
              <div className="text-4xl">
                {domain.icon}
              </div>

              <h3 className="text-2xl text-cyan-400 font-bold mt-4">
                {domain.name}
              </h3>

              <p
                className={`mt-3 ${
                  darkMode ? "text-gray-400" : "text-slate-600"
                }`}
              >
                {domain.skills}
              </p>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(domain.route);
                }}
                className="mt-6 w-full rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white py-3 font-semibold transition duration-300"
              >
                Explore Career →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CareerDomains;