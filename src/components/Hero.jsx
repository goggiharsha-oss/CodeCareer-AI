import { Search, Sparkles, Brain, Code2, Cpu, Zap } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { playClick } from "../utils/playClick";
import { motion } from "framer-motion";

const pills = [
  {
    text: "🐍 Python",
    className: "top-[10%] left-[2%] text-cyan-400",
  },
  {
    text: "☕ Java",
    className: "top-[18%] right-[2%] text-yellow-400",
  },
  {
    text: "⚛️ React",
    className: "bottom-[18%] left-[4%] text-sky-400",
  },
  {
    text: "🟨 JavaScript",
    className: "top-[3%] left-1/2 -translate-x-1/2 text-yellow-300",
  },
  {
    text: "⚙️ C++",
    className: "bottom-[7%] right-[5%] text-orange-400",
  },
];

const floatingIcons = [
  { icon: "</>", top: "15%", left: "4%", delay: 0 },
  { icon: "{ }", top: "25%", right: "4%", delay: 1 },
  { icon: "⚛", bottom: "22%", left: "7%", delay: 2 },
  { icon: "🐍", bottom: "10%", right: "12%", delay: 3 },
  { icon: "☕", top: "52%", right: "3%", delay: 4 },
  { icon: "💻", top: "42%", left: "2%", delay: 5 },
];

const suggestions = [
  {
    name: "Python",
    icon: "🐍",
    path: "/python",
  },
  {
    name: "Java",
    icon: "☕",
    path: "/java",
  },
  {
    name: "JavaScript",
    icon: "🟨",
    path: "/javascript",
  },
  {
    name: "Artificial Intelligence",
    icon: "🤖",
    path: "/artificial-intelligence",
  },
  {
    name: "Web Development",
    icon: "🌐",
    path: "/web-development",
  },
  {
    name: "Cyber Security",
    icon: "🔐",
    path: "/cyber-security",
  },
];

export default function Hero({ search, setSearch }) {
  const { darkMode } = useTheme();

  const filteredSuggestions = suggestions.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section
      className={`relative min-h-[720px] overflow-hidden px-6 py-28 transition-colors duration-500 ${
        darkMode ? "bg-[#020617] text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* =====================================================
          BACKGROUND GLOWS
      ===================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 left-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[130px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-180px] right-[-100px] h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-120px] top-[40%] h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[120px]"
      />

      {/* =====================================================
          GRID
      ===================================================== */}

      <div className="absolute inset-0 opacity-[0.18]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.12) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      {/* =====================================================
          FLOATING ICONS
      ===================================================== */}

      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -18, 0],
            rotate: [0, 8, -8, 0],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
          style={{
            top: item.top,
            bottom: item.bottom,
            left: item.left,
            right: item.right,
          }}
          className="pointer-events-none absolute hidden select-none text-6xl lg:block"
        >
          {item.icon}
        </motion.div>
      ))}

      {/* =====================================================
          TECHNOLOGY PILLS
      ===================================================== */}

      {pills.map((pill, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 3 + index * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute hidden rounded-full border border-white/10 bg-white/[0.05] px-5 py-2 text-sm shadow-[0_0_25px_rgba(34,211,238,0.08)] backdrop-blur-xl md:block ${pill.className}`}
        >
          {pill.text}
        </motion.div>
      ))}

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        {/* =================================================
            LEFT SIDE
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-center lg:text-left"
        >
          {/* BADGE */}

          <motion.span
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.15,
            }}
            className="
              inline-flex
              items-center
              ml-0
              mt-9
              lg:ml-8
              rounded-full
              border
              border-cyan-400/30
              bg-cyan-400/[0.08]
              px-5
              py-2.5
              text-sm
              font-medium
              text-cyan-300
              shadow-[0_0_25px_rgba(34,211,238,0.12)]
              backdrop-blur-xl
            "
          >
            🤖 AI Powered Career Discovery Platform
          </motion.span>

          {/* HEADING */}

          <h1 className="mt-8 text-5xl font-black leading-[1.03] tracking-tight sm:text-6xl md:text-7xl lg:text-[76px]">
            Discover Your{" "}
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                bg-gradient-to-r
                from-cyan-400
                via-blue-500
                to-violet-500
                bg-[length:200%_200%]
                bg-clip-text
                text-transparent
                drop-shadow-[0_0_25px_rgba(59,130,246,0.2)]
              "
            >
              Dream Tech Career
            </motion.span>
          </h1>

          {/* DESCRIPTION */}

          <p className="mt-7 max-w-2xl text-base leading-7 text-gray-400 md:text-lg lg:text-xl">
            Discover the right programming path with AI-powered career insights,
            technology roadmaps, salary trends, and skills required for top
            software careers.
          </p>

          {/* SEARCH */}

          <div className="relative mt-8 max-w-2xl">
            <div
              className="
                flex
                items-center
                rounded-2xl
                border
                border-cyan-400/25
                bg-slate-900/70
                px-5
                py-4
                shadow-[0_0_35px_rgba(34,211,238,0.08)]
                backdrop-blur-2xl
                transition-all
                duration-300
                hover:border-cyan-400/60
                hover:shadow-[0_0_40px_rgba(34,211,238,0.16)]
              "
            >
              <Search size={22} className="shrink-0 text-gray-400" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    const result = filteredSuggestions[0];

                    if (result) {
                      window.location.href = result.path;
                    }
                  }
                }}
                placeholder="Search Programming Language..."
                className="
                  ml-3
                  w-full
                  bg-transparent
                  text-white
                  outline-none
                  placeholder:text-gray-500
                "
              />
            </div>

            {search && filteredSuggestions.length > 0 && (
              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-full
                  z-30
                  mt-2
                  overflow-hidden
                  rounded-xl
                  border
                  border-white/10
                  bg-slate-900/95
                  text-left
                  shadow-2xl
                  backdrop-blur-xl
                "
              >
                {filteredSuggestions.map((item, index) => (
                  <a
                    key={index}
                    href={item.path}
                    className="
                      block
                      border-b
                      border-white/5
                      px-5
                      py-3
                      text-gray-200
                      transition
                      hover:bg-cyan-500/10
                      hover:text-cyan-300
                    "
                  >
                    {item.icon} {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* BUTTONS */}

          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <motion.a
              href="#languages"
              onClick={playClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                rounded-2xl
                bg-gradient-to-r
                from-cyan-400
                to-blue-500
                px-7
                py-3.5
                font-bold
                text-white
                shadow-[0_0_25px_rgba(34,211,238,0.25)]
                transition-all
                duration-300
                hover:shadow-[0_0_35px_rgba(34,211,238,0.5)]
              "
            >
              Explore Languages
            </motion.a>

            <motion.a
              href="#salary"
              onClick={playClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                rounded-2xl
                border
                border-cyan-400/50
                bg-white/[0.03]
                px-7
                py-3.5
                font-bold
                text-cyan-300
                backdrop-blur-xl
                transition-all
                duration-300
                hover:bg-cyan-400/10
                hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]
              "
            >
              Compare Salaries
            </motion.a>

            <motion.a
              href="/career-quiz"
              onClick={playClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                rounded-2xl
                bg-gradient-to-r
                from-violet-500
                to-fuchsia-600
                px-7
                py-3.5
                font-bold
                text-white
                shadow-[0_0_25px_rgba(168,85,247,0.25)]
                transition-all
                duration-300
                hover:shadow-[0_0_35px_rgba(168,85,247,0.45)]
              "
            >
              🤖 Find My Career
            </motion.a>
          </div>
        </motion.div>

        {/* =================================================
            PREMIUM 3D RIGHT SIDE
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 60,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="
            relative
            mx-auto
            flex
            min-h-[560px]
            w-full
            max-w-[560px]
            items-center
            justify-center
            [perspective:1200px]
          "
        >
          {/* =================================================
              ATMOSPHERE
          ================================================= */}

          <motion.div
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              h-[430px]
              w-[430px]
              rounded-full
              bg-cyan-400/20
              blur-[100px]
            "
          />

          <motion.div
            animate={{
              scale: [1.1, 0.95, 1.1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
            }}
            className="
              absolute
              h-[360px]
              w-[360px]
              rounded-full
              bg-violet-600/20
              blur-[100px]
            "
          />

          {/* =================================================
              OUTER ORBIT
          ================================================= */}

          <motion.div
            animate={{
              rotateX: 360,
              rotateZ: 360,
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              h-[470px]
              w-[470px]
              rounded-full
              border
              border-cyan-400/20
              shadow-[0_0_30px_rgba(34,211,238,0.08)]
            "
            style={{
              transformStyle: "preserve-3d",
            }}
          />

          {/* =================================================
              SECOND ORBIT
          ================================================= */}

          <motion.div
            animate={{
              rotateY: 360,
              rotateZ: -360,
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              h-[400px]
              w-[400px]
              rounded-full
              border
              border-violet-400/25
              border-dashed
            "
            style={{
              transformStyle: "preserve-3d",
            }}
          />

          {/* =================================================
              VERTICAL ORBIT
          ================================================= */}

          <motion.div
            animate={{
              rotateX: -360,
              rotateY: 360,
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              h-[520px]
              w-[260px]
              rounded-full
              border
              border-blue-400/15
            "
            style={{
              transformStyle: "preserve-3d",
            }}
          />

          {/* =================================================
              ORBIT DOT 1
          ================================================= */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[470px] w-[470px]"
          >
            <div
              className="
                absolute
                left-1/2
                -top-2
                h-4
                w-4
                -translate-x-1/2
                rounded-full
                bg-cyan-300
                shadow-[0_0_25px_rgba(34,211,238,1)]
              "
            />
          </motion.div>

          {/* =================================================
              ORBIT DOT 2
          ================================================= */}

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[400px] w-[400px]"
          >
            <div
              className="
                absolute
                right-[-5px]
                top-1/2
                h-3
                w-3
                rounded-full
                bg-violet-300
                shadow-[0_0_22px_rgba(168,85,247,1)]
              "
            />
          </motion.div>

          {/* =================================================
              MAIN 3D GLASS CARD
          ================================================= */}

          <motion.div
            animate={{
              y: [0, -10, 0],
              rotateX: [0, 2, 0, -2, 0],
              rotateY: [0, -3, 0, 3, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative
              z-20
              flex
              h-[420px]
              w-[320px]
              flex-col
              items-center
              rounded-[45px]
              border
              border-white/10
              bg-slate-950/70
              shadow-[0_30px_100px_rgba(0,0,0,0.55)]
              backdrop-blur-3xl
            "
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* GLASS REFLECTION */}

            <div
              className="
                absolute
                left-6
                right-6
                top-4
                h-24
                rounded-[35px]
                bg-gradient-to-b
                from-white/[0.08]
                to-transparent
                blur-sm
              "
            />

            {/* CORE GLOW */}

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.25, 0.45, 0.25],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="
                absolute
                top-[30px]
                h-56
                w-56
                rounded-full
                bg-cyan-400/20
                blur-[65px]
              "
            />

            {/* =================================================
                BRAIN CORE + RINGS
                PERFECTLY CENTERED
                SLIGHTLY LOWER POSITION
            ================================================= */}

            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-1/2
                top-[45px]
                h-[230px]
                w-[230px]
                -translate-x-1/2
              "
            >
              {/* OUTER RING */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[215px]
                  w-[215px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-cyan-400/20
                  border-t-cyan-300
                  border-r-blue-400
                  shadow-[0_0_25px_rgba(34,211,238,0.12)]
                "
              />

              {/* INNER RING */}

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[175px]
                  w-[175px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-violet-400/20
                  border-b-violet-400
                  border-l-cyan-400
                  shadow-[0_0_20px_rgba(168,85,247,0.1)]
                "
              />

              {/* INNER GLOW */}

              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[145px]
                  w-[145px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-cyan-400/10
                  blur-[35px]
                "
              />

              {/* BRAIN CORE */}

              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  boxShadow: [
                    "0 0 35px rgba(34,211,238,0.25)",
                    "0 0 70px rgba(34,211,238,0.5)",
                    "0 0 35px rgba(34,211,238,0.25)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  flex
                  h-32
                  w-32
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-cyan-300/30
                  bg-gradient-to-br
                  from-cyan-400/25
                  via-blue-500/20
                  to-violet-600/25
                  shadow-[inset_0_0_30px_rgba(34,211,238,0.12)]
                "
              >
                {/* ROTATING BRAIN */}

                <motion.div
                  animate={{
                    rotateY: [0, 180, 360],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <Brain
                    size={65}
                    strokeWidth={1.4}
                    className="
                      text-cyan-200
                      drop-shadow-[0_0_18px_rgba(34,211,238,0.9)]
                    "
                  />
                </motion.div>

                {/* CORE PARTICLES */}

                <span
                  className="
                    absolute
                    -top-2
                    left-1/2
                    h-2
                    w-2
                    rounded-full
                    bg-cyan-300
                    shadow-[0_0_15px_rgba(34,211,238,1)]
                  "
                />

                <span
                  className="
                    absolute
                    bottom-2
                    right-1
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-violet-300
                    shadow-[0_0_12px_rgba(168,85,247,1)]
                  "
                />

                <span
                  className="
                    absolute
                    left-1
                    top-1/2
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-blue-300
                    shadow-[0_0_12px_rgba(59,130,246,1)]
                  "
                />
              </motion.div>
            </motion.div>

            {/* =================================================
                TEXT BELOW THE CIRCLES
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.8,
              }}
              className="
                absolute
                bottom-[30px]
                left-0
                right-0
                z-30
                text-center
              "
            >
              {/* NAME */}

              <div className="flex items-center justify-center gap-2">
                <Sparkles size={15} className="text-cyan-300" />

                <h2 className="text-2xl font-black tracking-tight">
                  CodeCareer AI
                </h2>

                <Sparkles size={15} className="text-violet-300" />
              </div>

              {/* SUBTITLE */}

              <p className="mt-1.5 text-sm text-gray-400">
                AI Career Intelligence
              </p>

              {/* STATUS */}

              <div
                className="
                  mx-auto
                  mt-3
                  flex
                  w-fit
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-cyan-400/[0.06]
                  px-4
                  py-1.5
                  shadow-[0_0_20px_rgba(34,211,238,0.08)]
                "
              >
                <span
                  className="
                    h-2
                    w-2
                    animate-pulse
                    rounded-full
                    bg-cyan-400
                    shadow-[0_0_12px_rgba(34,211,238,1)]
                  "
                />

                <span className="text-[11px] font-semibold text-cyan-300">
                  Intelligence Active
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* =================================================
              FLOATING CARD - LEFT TOP
          ================================================= */}

          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [0, 2, 0, -2, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-[-10px]
              top-[22%]
              z-30
              hidden
              rounded-2xl
              border
              border-cyan-400/20
              bg-slate-950/80
              px-4
              py-3
              shadow-[0_15px_40px_rgba(0,0,0,0.35)]
              backdrop-blur-2xl
              md:block
            "
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-cyan-400/10 p-2">
                <Code2 size={19} className="text-cyan-300" />
              </div>

              <div>
                <p className="text-[10px] text-gray-500">Career Path</p>

                <p className="text-sm font-bold text-cyan-300">Programming</p>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              FLOATING CARD - RIGHT
          ================================================= */}

          <motion.div
            animate={{
              y: [0, 12, 0],
              rotate: [0, -2, 0, 2, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              right-[-10px]
              top-[30%]
              z-30
              hidden
              rounded-2xl
              border
              border-violet-400/20
              bg-slate-950/80
              px-4
              py-3
              shadow-[0_15px_40px_rgba(0,0,0,0.35)]
              backdrop-blur-2xl
              md:block
            "
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-violet-400/10 p-2">
                <Cpu size={19} className="text-violet-300" />
              </div>

              <div>
                <p className="text-[10px] text-gray-500">AI Analysis</p>

                <p className="text-sm font-bold text-violet-300">
                  Career Match
                </p>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              FLOATING CARD - BOTTOM LEFT
          ================================================= */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              bottom-[8%]
              left-[3%]
              z-30
              hidden
              rounded-2xl
              border
              border-blue-400/20
              bg-slate-950/80
              px-4
              py-3
              shadow-[0_15px_40px_rgba(0,0,0,0.35)]
              backdrop-blur-2xl
              md:block
            "
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-400/10 p-2">
                <Zap size={19} className="text-blue-300" />
              </div>

              <div>
                <p className="text-[10px] text-gray-500">Smart Insights</p>

                <p className="text-sm font-bold text-blue-300">
                  Skills + Salary
                </p>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              PARTICLES
          ================================================= */}

          <motion.span
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="
              absolute
              right-[13%]
              top-[12%]
              h-2
              w-2
              rounded-full
              bg-cyan-300
              shadow-[0_0_20px_rgba(34,211,238,1)]
            "
          />

          <motion.span
            animate={{
              y: [0, 20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="
              absolute
              bottom-[13%]
              right-[18%]
              h-2
              w-2
              rounded-full
              bg-violet-300
              shadow-[0_0_20px_rgba(168,85,247,1)]
            "
          />

          <motion.span
            animate={{
              scale: [1, 1.6, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="
              absolute
              left-[18%]
              top-[28%]
              h-1.5
              w-1.5
              rounded-full
              bg-blue-300
              shadow-[0_0_15px_rgba(59,130,246,1)]
            "
          />
        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM STATS
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.7,
        }}
        className="
          relative
          z-10
          mx-auto
          mt-16
          flex
          max-w-5xl
          flex-wrap
          items-center
          justify-center
          gap-6
          border-t
          border-white/10
          pt-8
          text-center
          md:gap-12
        "
      >
        <div>
          <p className="text-2xl font-black text-white">AI</p>

          <p className="mt-1 text-xs text-gray-500">Powered Career Insights</p>
        </div>

        <div className="hidden h-8 w-px bg-white/10 md:block" />

        <div>
          <p className="text-2xl font-black text-white">Roadmaps</p>

          <p className="mt-1 text-xs text-gray-500">
            Technology Learning Paths
          </p>
        </div>

        <div className="hidden h-8 w-px bg-white/10 md:block" />

        <div>
          <p className="text-2xl font-black text-white">Salary</p>

          <p className="mt-1 text-xs text-gray-500">Career Trends</p>
        </div>
      </motion.div>
    </section>
  );
}
