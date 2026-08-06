import { languages } from "../data/Languages";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { playClick } from "../utils/playClick";
import { motion } from "framer-motion";

function LanguageCard({ search = "" }) {
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  const searchText = search.toLowerCase().trim();

  const filteredLanguages = languages.filter((lang) => {
    if (!searchText) return true;

    const name = lang.name.toLowerCase();

    if (name === "javascript") {
      return name.includes(searchText) || "js".includes(searchText);
    }

    if (name === "c++") {
      return name.includes(searchText) || "cpp".includes(searchText);
    }

    if (name === "c#") {
      return (
        name.includes(searchText) ||
        "cs".includes(searchText) ||
        "csharp".includes(searchText)
      );
    }

    if (name === "python") {
      return name.includes(searchText) || "py".includes(searchText);
    }

    if (name === "java") {
      return name.includes(searchText);
    }

    if (name === "c") {
      return searchText === "c";
    }

    return name.includes(searchText);
  });

  return (
    <section
      id="languages"
      className={`py-20 px-6 transition-colors duration-500 ${
        darkMode ? "bg-slate-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-4xl font-bold text-center mb-12 ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          Popular Programming Languages
        </h2>

        {filteredLanguages.length === 0 ? (
          <div className="text-center py-20">
            <h3
              className={`text-3xl font-bold ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              No Language Found 😔
            </h3>

            <p
              className={`mt-3 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
            >
              Try Python, Java, JavaScript, C++, C#
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {filteredLanguages.map((lang) => (
              <div
                key={lang.id}
                className={`group relative overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(34,211,238,0.35)] ${
                  darkMode
                    ? "bg-slate-800/80 border border-cyan-500/20 backdrop-blur-xl"
                    : "bg-white/90 border border-cyan-200 backdrop-blur-xl"
                }`}
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10"></div>
                {/* Floating Background Logo */}

                <motion.div
                  animate={{
                    y: [0, -25, 0],
                    rotate: [0, 15, -15, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
  absolute
  -right-5
  -top-5
  text-[120px]
  opacity-10
  pointer-events-none
  "
                >
                  {lang.icon}
                </motion.div>
                {/* Icon */}
                <div
                  className={`relative z-10 w-14 h-14 rounded-xl ${lang.color} flex items-center justify-center text-white font-bold text-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
                >
                  {lang.icon}
                </div>

                {/* Language Name */}
                <h3
                  className={`relative z-10 mt-5 text-2xl font-bold ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  {lang.name}
                </h3>

                {/* Salary Card */}
                <div className="relative z-10 mt-5 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4 transition-all duration-500 group-hover:bg-cyan-500 group-hover:shadow-lg group-hover:shadow-cyan-500/40">
                  <p
                    className={`text-sm transition-colors duration-300 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    } group-hover:text-white`}
                  >
                    Average Fresher Salary
                  </p>

                  <p className="mt-2 text-2xl font-bold text-cyan-400 transition-all duration-300 group-hover:text-white">
                    {lang.salary}
                  </p>
                </div>

                {/* Jobs */}
                <p
                  className={`relative z-10 mt-5 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  💼 {lang.jobs}
                </p>

                {/* Difficulty */}
                <p
                  className={`relative z-10 mt-2 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  ⭐ Difficulty: {lang.difficulty}
                </p>

                {/* Duration */}
                <p
                  className={`relative z-10 mt-2 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  ⏳ {lang.duration}
                </p>

                {/* Button */}
                <button
                  onClick={() => {
                    playClick();
                    navigate(lang.route);
                  }}
                  className="relative z-10 mt-6 w-full rounded-xl bg-cyan-500 py-3 font-semibold text-white transition-all duration-300 hover:bg-cyan-600 hover:scale-105"
                >
                  Explore Career →
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default LanguageCard;
