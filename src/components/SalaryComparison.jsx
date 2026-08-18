import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { TrendingUp } from "lucide-react";

function SalaryComparison() {
  const { darkMode } = useTheme();

  const salaries = [
    {
      name: "JavaScript",
      icon: "🟨",
      salary: "₹4–9 LPA",
      width: "95%",
      rank: "1",
    },
    {
      name: "C++",
      icon: "⚙️",
      salary: "₹4–8 LPA",
      width: "90%",
      rank: "2",
    },
    {
      name: "Java",
      icon: "☕",
      salary: "₹4–7 LPA",
      width: "85%",
      rank: "3",
    },
    {
      name: "Python",
      icon: "🐍",
      salary: "₹3–6 LPA",
      width: "75%",
      rank: "4",
    },
  ];

  return (
    <section
      id="salary"
      className={`relative overflow-hidden py-24 px-6 transition-all duration-500 ${
        darkMode
          ? "bg-[#020617] text-white"
          : "bg-gradient-to-b from-cyan-50 via-white to-slate-100"
      }`}
    >
      {/* =====================================================
          PREMIUM MOVING BACKGROUND
      ===================================================== */}

      <motion.div
        animate={{
          x: ["-10%", "15%", "-10%"],
          y: ["0%", "8%", "0%"],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -top-40
          left-[10%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/15
          blur-[130px]
        "
      />

      <motion.div
        animate={{
          x: ["10%", "-15%", "10%"],
          y: ["0%", "-10%", "0%"],
          scale: [1.1, 0.9, 1.1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[5%]
          top-[20%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-violet-600/15
          blur-[130px]
        "
      />

      <motion.div
        animate={{
          x: [0, 80, 0],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          bottom-[-180px]
          left-[35%]
          h-[400px]
          w-[400px]
          rounded-full
          bg-blue-500/15
          blur-[120px]
        "
      />

      {/* =====================================================
          BACKGROUND GRID
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.16]
        "
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(34,211,238,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(34,211,238,0.08) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* =================================================
            HEADING
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mb-14 text-center"
        >
          {/* Animated Icon Container */}

          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [0, 3, -3, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative
              mx-auto
              mb-5
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-3xl
              border
              border-cyan-400/20
              bg-cyan-400/10
              shadow-[0_0_45px_rgba(34,211,238,0.15)]
              backdrop-blur-xl
            "
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
              className="
                absolute
                inset-0
                rounded-3xl
                bg-cyan-400/10
                blur-xl
              "
            />

            <TrendingUp
              size={42}
              strokeWidth={1.7}
              className="
                relative
                z-10
                text-cyan-400
                drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]
              "
            />
          </motion.div>

          <h2
            className={`text-4xl font-black tracking-tight md:text-5xl ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Salary Comparison
          </h2>

          <p
            className={`mt-4 ${darkMode ? "text-gray-400" : "text-slate-600"}`}
          >
            Average fresher salary comparison across programming languages
          </p>
        </motion.div>

        {/* =================================================
            SALARY CARDS
        ================================================= */}

        <div className="grid gap-8 md:grid-cols-2">
          {salaries.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{
                opacity: 0,
                y: 50,
                rotateX: 8,
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
                y: -12,
                scale: 1.025,
                rotateX: 2,
              }}
              className={`
                group
                relative
                overflow-hidden
                rounded-[30px]
                border
                p-7
                backdrop-blur-2xl
                transition-all
                duration-500

                ${
                  darkMode
                    ? `
                      border-white/10
                      bg-white/[0.045]
                      hover:border-cyan-400/40
                      hover:shadow-[0_25px_70px_rgba(34,211,238,0.16)]
                    `
                    : `
                      border-slate-200
                      bg-white/75
                      shadow-xl
                      hover:border-cyan-300
                      hover:shadow-[0_25px_70px_rgba(34,211,238,0.18)]
                    `
                }
              `}
            >
              {/* =================================================
                  CARD INNER AURA
              ================================================= */}

              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.04, 0.1, 0.04],
                }}
                transition={{
                  duration: 5 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-56
                  w-56
                  rounded-full
                  bg-cyan-400
                  blur-[80px]
                "
              />

              {/* =================================================
                  SECOND AURA
              ================================================= */}

              <motion.div
                animate={{
                  x: [0, -25, 0],
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 7 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  bottom-[-100px]
                  left-[-80px]
                  h-48
                  w-48
                  rounded-full
                  bg-violet-500/10
                  blur-[70px]
                "
              />

              {/* =================================================
                  FLOATING BACKGROUND ICON
              ================================================= */}

              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.04, 1],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  -right-4
                  -top-5
                  select-none
                  text-[125px]
                  opacity-[0.055]
                  transition-all
                  duration-500
                  group-hover:opacity-[0.11]
                  group-hover:scale-110
                "
              >
                {item.icon}
              </motion.div>

              {/* =================================================
                  RANK
              ================================================= */}

              <motion.div
                whileHover={{
                  scale: 1.15,
                  rotate: 8,
                }}
                className="
                  absolute
                  right-5
                  top-5
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/20
                  bg-gradient-to-br
                  from-cyan-400
                  via-blue-500
                  to-violet-600
                  font-black
                  text-white
                  shadow-[0_0_25px_rgba(34,211,238,0.25)]
                "
              >
                #{item.rank}
              </motion.div>

              {/* =================================================
                  LANGUAGE
              ================================================= */}

              <div className="relative z-10 mb-7 flex items-center gap-4">
                <motion.div
                  whileHover={{
                    scale: 1.15,
                    rotate: -8,
                  }}
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.05]
                    text-4xl
                    shadow-[0_10px_30px_rgba(34,211,238,0.12)]
                    backdrop-blur-xl
                  "
                >
                  {item.icon}
                </motion.div>

                <div>
                  <h3
                    className={`text-2xl font-black ${
                      darkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {item.name}
                  </h3>

                  <motion.p
                    animate={{
                      opacity: [0.75, 1, 0.75],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      mt-1
                      text-lg
                      font-black
                      text-cyan-400
                      drop-shadow-[0_0_12px_rgba(34,211,238,0.55)]
                    "
                  >
                    {item.salary}
                  </motion.p>
                </div>
              </div>

              {/* =================================================
                  SALARY LABEL
              ================================================= */}

              <div className="relative z-10 mb-3 flex items-center justify-between">
                <span
                  className={`text-xs font-semibold uppercase tracking-wider ${
                    darkMode ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  Salary Potential
                </span>

                <span className="text-xs font-bold text-cyan-400">
                  {item.width}
                </span>
              </div>

              {/* =================================================
                  SALARY BAR
              ================================================= */}

              <div
                className={`
                  relative
                  z-10
                  h-4
                  overflow-hidden
                  rounded-full
                  ${darkMode ? "bg-slate-800" : "bg-slate-200"}
                `}
              >
                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: item.width,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1.5,
                    delay: 0.2 + index * 0.12,
                    ease: "easeOut",
                  }}
                  className="
                    relative
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-400
                    via-blue-500
                    to-violet-600
                  "
                >
                  {/* Moving highlight */}

                  <motion.div
                    animate={{
                      x: ["-100%", "300%"],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.4,
                    }}
                    className="
                      absolute
                      top-0
                      h-full
                      w-16
                      bg-white/30
                      blur-md
                    "
                  />
                </motion.div>
              </div>

              {/* =================================================
                  BOTTOM ENERGY LINE
              ================================================= */}

              <motion.div
                animate={{
                  scaleX: [0.3, 1, 0.3],
                  opacity: [0.25, 0.7, 0.25],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  bottom-0
                  left-1/2
                  h-[3px]
                  w-1/2
                  -translate-x-1/2
                  origin-center
                  rounded-full
                  bg-gradient-to-r
                  from-transparent
                  via-cyan-400
                  to-transparent
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SalaryComparison;
