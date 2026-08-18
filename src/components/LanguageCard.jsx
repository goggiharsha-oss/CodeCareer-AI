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
      className={`relative overflow-hidden py-24 px-6 transition-colors duration-700 ${
        darkMode ? "bg-[#020617] text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* =====================================================
          PREMIUM ANIMATED BACKGROUND
      ===================================================== */}

      {/* CYAN LIGHT MASS */}
      <motion.div
        animate={{
          x: [-180, 120, -80, -180],
          y: [-80, 80, -40, -80],
          scale: [1, 1.25, 0.9, 1],
          opacity: [0.25, 0.5, 0.3, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[5%]
          top-[5%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-cyan-500/25
          blur-[90px]
        "
      />

      {/* VIOLET LIGHT MASS */}
      <motion.div
        animate={{
          x: [100, -100, 80, 100],
          y: [80, -100, 40, 80],
          scale: [1.1, 0.85, 1.2, 1.1],
          opacity: [0.2, 0.45, 0.25, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[0%]
          top-[20%]
          h-[480px]
          w-[480px]
          rounded-full
          bg-violet-600/25
          blur-[100px]
        "
      />

      {/* BLUE CENTER LIGHT */}
      <motion.div
        animate={{
          scale: [0.8, 1.25, 0.9, 0.8],
          opacity: [0.15, 0.4, 0.2, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[45%]
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-600/20
          blur-[110px]
        "
      />

      {/* BOTTOM MAGENTA LIGHT */}
      <motion.div
        animate={{
          x: [-80, 100, -40, -80],
          scale: [1, 1.15, 0.9, 1],
          opacity: [0.15, 0.35, 0.2, 0.15],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          bottom-[-120px]
          left-[30%]
          h-[430px]
          w-[600px]
          rounded-full
          bg-fuchsia-600/15
          blur-[120px]
        "
      />

      {/* =====================================================
          MOVING GLASS LIGHT SHAPES
      ===================================================== */}

      <motion.div
        animate={{
          rotate: [0, 12, -8, 0],
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[18%]
          top-[28%]
          h-[180px]
          w-[500px]
          rotate-12
          rounded-full
          bg-gradient-to-r
          from-cyan-400/10
          via-blue-500/15
          to-transparent
          blur-[45px]
        "
      />

      <motion.div
        animate={{
          rotate: [0, -15, 10, 0],
          x: [0, -50, 30, 0],
          y: [0, 30, -20, 0],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[12%]
          bottom-[20%]
          h-[170px]
          w-[480px]
          -rotate-12
          rounded-full
          bg-gradient-to-r
          from-violet-500/10
          via-fuchsia-500/15
          to-transparent
          blur-[50px]
        "
      />

      {/* =====================================================
          LIGHT PULSE
      ===================================================== */}

      <motion.div
        animate={{
          opacity: [0, 0.35, 0],
          scale: [0.7, 1.2, 0.7],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[45%]
          top-[18%]
          h-[220px]
          w-[220px]
          rounded-full
          bg-cyan-300/20
          blur-[80px]
        "
      />

      {/* =====================================================
          PREMIUM GRID
      ===================================================== */}

      <motion.div
        animate={{
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(34,211,238,0.045) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(34,211,238,0.045) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </motion.div>

      {/* DARK GLASS OVERLAY */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-b
          from-slate-950/10
          via-transparent
          to-slate-950/30
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADING */}

        <motion.h2
          initial={{
            opacity: 0,
            y: -30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className={`mb-14 text-center text-4xl font-black tracking-tight md:text-5xl ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          Popular Programming Languages
        </motion.h2>

        {/* =====================================================
            NO RESULT
        ===================================================== */}

        {filteredLanguages.length === 0 ? (
          <div className="py-20 text-center">
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
          /* =====================================================
             LANGUAGE CARDS
          ===================================================== */

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {filteredLanguages.map((lang, index) => (
              <motion.div
                key={lang.id}
                initial={{
                  opacity: 0,
                  y: 45,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                className={`group relative overflow-hidden rounded-[28px] border p-7 backdrop-blur-2xl transition-all duration-500 ${
                  darkMode
                    ? "border-white/10 bg-slate-900/80 hover:border-cyan-400/40 hover:shadow-[0_20px_60px_rgba(34,211,238,0.18)]"
                    : "border-slate-200 bg-white hover:border-cyan-300 hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)]"
                }`}
              >
                {/* =================================================
                    CARD HOVER AURA
                ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  whileHover={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-52
                    w-52
                    rounded-full
                    bg-cyan-400/10
                    blur-[70px]
                  "
                />

                {/* =================================================
                    FLOATING BACKGROUND LOGO
                ================================================= */}

                <motion.div
                  animate={{
                    y: [0, -18, 0],
                    rotate: [0, 4, -4, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.4,
                  }}
                  className="
                    pointer-events-none
                    absolute
                    -right-5
                    -top-5
                    select-none
                    text-[120px]
                    opacity-[0.07]
                  "
                >
                  {lang.icon}
                </motion.div>

                {/* =================================================
                    ICON
                ================================================= */}

                <motion.div
                  whileHover={{
                    scale: 1.12,
                    rotate: -6,
                    y: -4,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                  className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl ${lang.color} text-xl font-bold text-white shadow-lg transition-all duration-500 group-hover:shadow-[0_15px_40px_rgba(34,211,238,0.35)]`}
                >
                  {lang.icon}
                </motion.div>

                {/* =================================================
                    LANGUAGE NAME
                ================================================= */}

                <h3
                  className={`relative z-10 mt-6 text-2xl font-black tracking-tight ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  {lang.name}
                </h3>

                {/* =================================================
                    SALARY
                ================================================= */}

                <div
                  className={`relative z-10 mt-6 rounded-2xl border p-5 backdrop-blur-xl transition-all duration-500 ${
                    darkMode
                      ? "border-cyan-400/20 bg-cyan-400/5"
                      : "border-cyan-200 bg-cyan-50/70"
                  } group-hover:border-cyan-400 group-hover:bg-cyan-500 group-hover:shadow-[0_10px_35px_rgba(34,211,238,0.25)]`}
                >
                  <p
                    className={`text-sm transition-colors duration-300 ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    } group-hover:text-white`}
                  >
                    Average Fresher Salary
                  </p>

                  <p className="mt-2 text-2xl font-bold text-cyan-400 transition-all duration-300 group-hover:text-white">
                    {lang.salary}
                  </p>
                </div>

                {/* =================================================
                    JOBS
                ================================================= */}

                <p
                  className={`relative z-10 mt-5 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  💼 {lang.jobs}
                </p>

                {/* =================================================
                    DIFFICULTY
                ================================================= */}

                <p
                  className={`relative z-10 mt-2 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  ⭐ Difficulty: {lang.difficulty}
                </p>

                {/* =================================================
                    DURATION
                ================================================= */}

                <p
                  className={`relative z-10 mt-2 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  ⏳ {lang.duration}
                </p>

                {/* =================================================
                    BUTTON
                ================================================= */}

                <motion.button
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  onClick={() => {
                    playClick();
                    navigate(lang.route);
                  }}
                  className="
                    relative
                    z-10
                    mt-7
                    w-full
                    rounded-2xl
                    bg-gradient-to-r
                    from-cyan-400
                    via-blue-500
                    to-purple-600
                    py-3.5
                    font-bold
                    text-white
                    shadow-lg
                    shadow-cyan-500/20
                    transition-all
                    duration-300
                    hover:shadow-[0_12px_35px_rgba(34,211,238,0.35)]
                    active:scale-[0.98]
                  "
                >
                  Explore Career →
                </motion.button>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default LanguageCard;
