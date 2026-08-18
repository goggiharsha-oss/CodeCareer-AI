import { Briefcase, TrendingUp, Map, Scale } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

function WhyChoose() {
  const { darkMode } = useTheme();

  const features = [
    {
      icon: <TrendingUp size={38} />,
      title: "Salary Insights",
      desc: "Know fresher and experienced salary packages.",
    },

    {
      icon: <Briefcase size={38} />,
      title: "Job Roles",
      desc: "Explore career opportunities for every language.",
    },

    {
      icon: <Map size={38} />,
      title: "Learning Roadmaps",
      desc: "Follow a step-by-step learning path.",
    },

    {
      icon: <Scale size={38} />,
      title: "Compare Languages",
      desc: "Compare languages and choose the best one.",
    },
  ];

  return (
    <section
      id="whychoose"
      className={`
        relative
        overflow-hidden
        py-24
        px-6
        transition-colors
        duration-500
        ${
          darkMode
            ? "bg-[#030712]"
            : "bg-gradient-to-b from-slate-50 via-white to-cyan-50/70"
        }
      `}
    >
      {/* =====================================================
          HOLOGRAPHIC BACKGROUND
      ===================================================== */}

      {/* Large cyan atmosphere */}

      <motion.div
        animate={{
          x: [-80, 100, -80],
          y: [30, -40, 30],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-48
          top-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/10
          blur-[140px]
          pointer-events-none
        "
      />

      {/* Purple atmosphere */}

      <motion.div
        animate={{
          x: [100, -80, 100],
          y: [-20, 60, -20],
          scale: [1, 0.9, 1.12],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-48
          bottom-0
          h-[520px]
          w-[520px]
          rounded-full
          bg-violet-600/10
          blur-[150px]
          pointer-events-none
        "
      />

      {/* =====================================================
          HOLOGRAM RING SYSTEM
      ===================================================== */}

      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.05, 1],
        }}
        transition={{
          rotate: {
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[650px]
          w-[650px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-cyan-400/[0.08]
          pointer-events-none
        "
      />

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[820px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-[50%]
          border
          border-violet-400/[0.08]
          pointer-events-none
        "
      />

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 42,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[850px]
          w-[380px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-[50%]
          border
          border-blue-400/[0.06]
          pointer-events-none
        "
      />

      {/* =====================================================
          HOLOGRAPHIC GRID
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.12]
          pointer-events-none
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(34,211,238,0.15) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(34,211,238,0.15) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* =====================================================
          MOVING DIAGONAL SCAN
      ===================================================== */}

      <motion.div
        animate={{
          y: ["-120%", "120%"],
          opacity: [0, 0.25, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          -left-[20%]
          top-0
          h-[220%]
          w-[35%]
          rotate-[25deg]
          bg-gradient-to-r
          from-transparent
          via-cyan-400/[0.04]
          to-transparent
          pointer-events-none
        "
      />

      {/* =====================================================
          CENTER HOLOGRAM
      ===================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-[52%]
          h-[280px]
          w-[280px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/10
          blur-[80px]
          pointer-events-none
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADING */}

        <motion.div
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
          className="mb-16 text-center"
        >
          {/* small AI indicator */}

          <div className="mb-5 flex items-center justify-center gap-3">
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="
                h-2
                w-2
                rounded-full
                bg-cyan-400
                shadow-[0_0_15px_rgba(34,211,238,1)]
              "
            />

            <span
              className={`
                text-xs
                font-bold
                uppercase
                tracking-[0.3em]
                ${darkMode ? "text-cyan-400" : "text-cyan-600"}
              `}
            >
              AI Career Intelligence
            </span>

            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 1,
              }}
              className="
                h-2
                w-2
                rounded-full
                bg-violet-400
                shadow-[0_0_15px_rgba(168,85,247,1)]
              "
            />
          </div>

          <motion.h2
            className={`
              text-4xl
              md:text-5xl
              font-black
              tracking-tight
              transition-colors
              duration-500
              ${darkMode ? "text-white" : "text-slate-900"}
            `}
          >
            Why Choose CodeCareer AI?
          </motion.h2>
        </motion.div>

        {/* =====================================================
            FEATURE CARDS
        ===================================================== */}

        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-4
            gap-7
          "
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
                rotateX: 12,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotateX: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.14,
                duration: 0.7,
                ease: "easeOut",
              }}
              whileHover={{
                y: -14,
                scale: 1.035,
                rotateX: -2,
                rotateY: index % 2 === 0 ? 2 : -2,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className={`
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                p-8
                backdrop-blur-2xl
                transition-all
                duration-500

                hover:border-cyan-400/50
                hover:shadow-[0_25px_70px_rgba(34,211,238,0.18)]

                ${
                  darkMode
                    ? `
                      bg-slate-900/65
                      border-white/10
                    `
                    : `
                      bg-white/85
                      border-slate-200
                      shadow-lg
                      shadow-slate-200/40
                    `
                }
              `}
            >
              {/* CARD GLOW */}

              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.04, 0.1, 0.04],
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
                className="
                  absolute
                  -right-16
                  -top-16
                  h-44
                  w-44
                  rounded-full
                  bg-gradient-to-br
                  from-cyan-400
                  to-violet-500
                  blur-[55px]
                  pointer-events-none
                "
              />

              {/* CORNER FRAME */}

              <div
                className="
                  absolute
                  right-5
                  top-5
                  h-8
                  w-8
                  border-r
                  border-t
                  border-cyan-400/20
                  transition-all
                  duration-500
                  group-hover:h-12
                  group-hover:w-12
                  group-hover:border-cyan-400/50
                "
              />

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  h-8
                  w-8
                  border-b
                  border-l
                  border-violet-400/20
                  transition-all
                  duration-500
                  group-hover:h-12
                  group-hover:w-12
                  group-hover:border-violet-400/50
                "
              />

              {/* ICON */}

              <motion.div
                whileHover={{
                  scale: 1.12,
                  rotate: 8,
                  z: 20,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 12,
                }}
                className="
                  relative
                  z-10
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/20
                  bg-gradient-to-br
                  from-cyan-400
                  via-blue-500
                  to-violet-600
                  text-white
                  shadow-[0_10px_35px_rgba(34,211,238,0.25)]
                  transition-all
                  duration-500
                  group-hover:shadow-[0_15px_45px_rgba(34,211,238,0.45)]
                "
              >
                {item.icon}
              </motion.div>

              {/* TITLE */}

              <h3
                className={`
                  relative
                  z-10
                  mt-6
                  text-xl
                  font-black
                  tracking-tight
                  transition-all
                  duration-500
                  group-hover:translate-x-1

                  ${darkMode ? "text-white" : "text-slate-900"}
                `}
              >
                {item.title}
              </h3>

              {/* DESCRIPTION */}

              <p
                className={`
                  relative
                  z-10
                  mt-3
                  text-[15px]
                  leading-relaxed
                  transition-colors
                  duration-500

                  ${darkMode ? "text-gray-400" : "text-gray-600"}
                `}
              >
                {item.desc}
              </p>

              {/* BOTTOM ACCENT */}

              <motion.div
                initial={{
                  width: "15%",
                }}
                whileHover={{
                  width: "70%",
                }}
                className="
                  absolute
                  bottom-0
                  left-1/2
                  h-[3px]
                  -translate-x-1/2
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-400
                  via-blue-500
                  to-violet-500
                  transition-all
                  duration-500
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
