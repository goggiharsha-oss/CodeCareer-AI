import { useState } from "react";
import { languages } from "../data/Languages";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { playClick } from "../utils/playClick";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Sparkles } from "lucide-react";
import { getLanguageAIReply } from "../utils/aiEngine";

function LanguageCard({ search = "" }) {
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  const [askingId, setAskingId] = useState(null);
  const [thinkingId, setThinkingId] = useState(null);

  const handleAskAI = (lang) => {
    playClick();

    if (askingId === lang.id) {
      setAskingId(null);
      return;
    }

    setAskingId(lang.id);
    setThinkingId(lang.id);

    setTimeout(() => {
      setThinkingId(null);
    }, 550);
  };

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
      className={`relative overflow-hidden px-6 py-24 transition-colors duration-700 ${
        darkMode ? "bg-[#020617] text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

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
          right-0
          top-[20%]
          h-[480px]
          w-[480px]
          rounded-full
          bg-violet-600/25
          blur-[100px]
        "
      />

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
          MOVING GLASS LIGHT
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
          GRID
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 opacity-40">
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
      </div>

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
             CARDS
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
                whileHover="cardHover"
                whileTap="cardHover"
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
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
                  variants={{
                    cardHover: {
                      opacity: 1,
                      scale: 1,
                    },
                  }}
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  transition={{
                    duration: 0.4,
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
                    BACKGROUND LOGO
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
                    MAIN LOGO
                    CARD ANYWHERE HOVER/TAP → ROTATE
                ================================================= */}

                <motion.div
                  variants={{
                    cardHover: {
                      rotate: 360,
                      scale: 1.12,
                    },
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className={`
                    relative
                    z-10
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    ${lang.color}
                    text-xl
                    font-bold
                    text-white
                    shadow-lg
                  `}
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
                    ASK AI PANEL
                ================================================= */}

                <AnimatePresence>
                  {askingId === lang.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 18 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className={`relative z-10 overflow-hidden rounded-2xl border backdrop-blur-xl ${
                        darkMode
                          ? "border-violet-400/25 bg-violet-500/[0.06]"
                          : "border-violet-300 bg-violet-50/80"
                      }`}
                    >
                      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 text-white">
                          <Bot size={13} />
                        </span>
                        <span
                          className={`text-xs font-bold tracking-wide ${
                            darkMode ? "text-violet-200" : "text-violet-700"
                          }`}
                        >
                          CodeCareer AI
                        </span>
                      </div>

                      <div className="px-4 py-3.5">
                        {thinkingId === lang.id ? (
                          <div className="flex gap-1.5 py-1 text-violet-400">
                            <span className="ai-card-dot" />
                            <span className="ai-card-dot" />
                            <span className="ai-card-dot" />
                          </div>
                        ) : (
                          <p
                            className={`whitespace-pre-line text-sm leading-relaxed ${
                              darkMode ? "text-gray-200" : "text-slate-700"
                            }`}
                          >
                            {getLanguageAIReply(lang.name)}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* =================================================
                    BUTTONS
                ================================================= */}

                <div className="relative z-10 mt-7 flex gap-2.5">
                  <motion.button
                    whileHover={{
                      scale: 1.03,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    onClick={() => handleAskAI(lang)}
                    className={`flex flex-1 items-center justify-center gap-1.5 rounded-2xl border py-3.5 text-sm font-bold transition-all duration-300 ${
                      askingId === lang.id
                        ? "border-transparent bg-gradient-to-r from-cyan-400 to-violet-500 text-white shadow-[0_10px_30px_rgba(139,92,246,0.35)]"
                        : darkMode
                          ? "border-violet-400/30 text-violet-200 hover:bg-violet-500/10"
                          : "border-violet-300 text-violet-700 hover:bg-violet-50"
                    }`}
                  >
                    <Bot size={16} />
                    Ask AI
                    <Sparkles size={12} className="opacity-70" />
                  </motion.button>

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
                      flex-[1.4]
                      rounded-2xl
                      bg-gradient-to-r
                      from-cyan-400
                      via-blue-500
                      to-purple-600
                      py-3.5
                      text-sm
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
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default LanguageCard;
