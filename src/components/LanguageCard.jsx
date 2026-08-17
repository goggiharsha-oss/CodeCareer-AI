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
      className={`relative py-24 px-6 overflow-hidden transition-colors duration-500 ${
        darkMode ? "bg-slate-950" : "bg-slate-50"
      }`}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-black text-center mb-14 tracking-tight ${
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredLanguages.map((lang) => (
              <div
                key={lang.id}
                className={`group relative overflow-hidden rounded-[28px] p-7
  border backdrop-blur-2xl
  transition-all duration-500
  hover:-translate-y-3
  hover:shadow-[0_20px_60px_rgba(34,211,238,0.18)]
  ${
    darkMode
      ? "bg-slate-900/80 border-white/10 hover:border-cyan-400/40"
      : "bg-white/80 border-slate-200/70 hover:border-cyan-300"
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
                  className={`relative z-10 w-16 h-16 rounded-2xl ${lang.color}
  flex items-center justify-center
  text-white font-bold text-xl
  shadow-lg
  transition-all duration-500
  group-hover:scale-110
  group-hover:rotate-6
  group-hover:shadow-cyan-500/30`}
                >
                  {lang.icon}
                </div>

                {/* Language Name */}
                <h3
                  className={`relative z-10 mt-6 text-2xl font-black tracking-tight ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  {lang.name}
                </h3>

                {/* Salary Card */}
                <div
                  className="relative z-10 mt-6 rounded-2xl
  border border-cyan-400/20
  bg-cyan-400/5
  p-5
  backdrop-blur-xl
  transition-all duration-500
  group-hover:bg-cyan-500
  group-hover:border-cyan-400
  group-hover:shadow-[0_10px_35px_rgba(34,211,238,0.25)]"
                >
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
                  className="relative z-10 mt-7 w-full
  rounded-2xl
  bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600
  py-3.5
  font-bold
  text-white
  shadow-lg shadow-cyan-500/20
  transition-all duration-300
  hover:scale-[1.03]
  hover:shadow-cyan-500/40
  active:scale-[0.98]"
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
