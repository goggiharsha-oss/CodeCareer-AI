import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";

function Counter({ value }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    const duration = 1200;
    const increment = end / (duration / 30);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, 30);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <>
      {value.includes("₹") && "₹"}
      {count}
      {value.includes("L") && "L+"}
      {value.includes("+") && !value.includes("L") && "+"}
    </>
  );
}

function Statistics() {
  const { darkMode } = useTheme();

  const stats = [
    {
      number: "10+",
      title: "Programming Languages",
      icon: "💻",
    },
    {
      number: "50+",
      title: "Career Paths",
      icon: "🚀",
    },
    {
      number: "100+",
      title: "Job Roles",
      icon: "💼",
    },
    {
      number: "40L+",
      title: "Highest Salary",
      icon: "💰",
    },
  ];

  return (
    <section
      id="statistics"
      className={`relative overflow-hidden py-24 px-6 transition-all duration-500 ${
        darkMode
          ? "bg-[#020617] text-white"
          : "bg-gradient-to-b from-cyan-50 via-white to-slate-100 text-slate-900"
      }`}
    >
      {/* =====================================================
          PREMIUM ANALYTICS BACKGROUND
      ===================================================== */}

      {/* Large moving cyan atmosphere */}

      <motion.div
        animate={{
          x: [-100, 120, -100],
          y: [0, -50, 20, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-40
          top-10
          h-[420px]
          w-[420px]
          rounded-full
          bg-cyan-500/10
          blur-[120px]
          pointer-events-none
        "
      />

      {/* Purple atmosphere */}

      <motion.div
        animate={{
          x: [100, -100, 80, 100],
          y: [0, 60, -30, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-40
          bottom-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-violet-600/10
          blur-[130px]
          pointer-events-none
        "
      />

      {/* =====================================================
          ANALYTICS GRID
      ===================================================== */}

      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "0px 55px"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          inset-0
          opacity-[0.16]
          pointer-events-none
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(34,211,238,0.16) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(34,211,238,0.16) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "55px 55px",
        }}
      />

      {/* =====================================================
          VERTICAL DATA BEAMS
      ===================================================== */}

      <motion.div
        animate={{
          y: ["-100%", "100%"],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          left-[15%]
          top-0
          h-full
          w-[1px]
          bg-gradient-to-b
          from-transparent
          via-cyan-400
          to-transparent
          pointer-events-none
        "
      />

      <motion.div
        animate={{
          y: ["100%", "-100%"],
          opacity: [0, 0.4, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
        className="
          absolute
          left-[50%]
          top-0
          h-full
          w-[1px]
          bg-gradient-to-b
          from-transparent
          via-blue-400
          to-transparent
          pointer-events-none
        "
      />

      <motion.div
        animate={{
          y: ["-100%", "100%"],
          opacity: [0, 0.4, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          delay: 1,
        }}
        className="
          absolute
          right-[18%]
          top-0
          h-full
          w-[1px]
          bg-gradient-to-b
          from-transparent
          via-violet-400
          to-transparent
          pointer-events-none
        "
      />

      {/* =====================================================
          HORIZONTAL DATA BEAMS
      ===================================================== */}

      <motion.div
        animate={{
          x: ["-100%", "100%"],
          opacity: [0, 0.35, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          top-[32%]
          left-0
          h-[1px]
          w-full
          bg-gradient-to-r
          from-transparent
          via-cyan-400
          to-transparent
          pointer-events-none
        "
      />

      <motion.div
        animate={{
          x: ["100%", "-100%"],
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
          delay: 3,
        }}
        className="
          absolute
          top-[72%]
          left-0
          h-[1px]
          w-full
          bg-gradient-to-r
          from-transparent
          via-violet-400
          to-transparent
          pointer-events-none
        "
      />

      {/* =====================================================
          TOP DECORATIVE DATA BARS
      ===================================================== */}

      <div
        className="
          absolute
          right-[8%]
          top-12
          hidden
          h-32
          w-44
          items-end
          gap-2
          opacity-[0.12]
          md:flex
        "
      >
        {[40, 65, 48, 85, 58, 95, 72].map((height, index) => (
          <motion.div
            key={index}
            animate={{
              height: [`${height}%`, `${height - 20}%`, `${height}%`],
            }}
            transition={{
              duration: 2 + index * 0.15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              w-3
              rounded-t-full
              bg-gradient-to-t
              from-cyan-500
              to-violet-400
            "
          />
        ))}
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
          className="text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <motion.span
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.5, 1, 0.5],
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
              className={`text-xs font-bold uppercase tracking-[0.3em] ${
                darkMode ? "text-cyan-400" : "text-cyan-600"
              }`}
            >
              Career Intelligence
            </span>

            <motion.span
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.5, 1, 0.5],
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

          <h2
            className={`text-4xl md:text-5xl font-extrabold ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Career Statistics
          </h2>

          <p
            className={`mt-4 ${darkMode ? "text-gray-400" : "text-slate-600"}`}
          >
            Explore technology careers with salary insights and opportunities
          </p>
        </motion.div>

        {/* =====================================================
            STATISTICS CARDS
        ===================================================== */}

        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.12,
                duration: 0.6,
              }}
              whileHover={{
                y: -12,
                scale: 1.04,
              }}
              className={`
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                p-7
                text-center
                backdrop-blur-2xl
                transition-all
                duration-500

                ${
                  darkMode
                    ? `
                      border-white/10
                      bg-slate-900/70
                      hover:border-cyan-400/50
                      hover:shadow-[0_25px_70px_rgba(34,211,238,0.2)]
                    `
                    : `
                      border-slate-200
                      bg-white/80
                      shadow-lg
                      hover:border-cyan-300
                      hover:shadow-[0_25px_70px_rgba(34,211,238,0.18)]
                    `
                }
              `}
            >
              {/* CARD INTERNAL ATMOSPHERE */}

              <motion.div
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.08, 0.18, 0.08],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  left-1/2
                  top-0
                  h-32
                  w-32
                  -translate-x-1/2
                  rounded-full
                  bg-cyan-400
                  blur-[65px]
                  pointer-events-none
                "
              />

              {/* Background Icon */}

              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 5 + index,
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -right-5
                  -top-3
                  text-8xl
                  opacity-[0.05]
                  pointer-events-none
                  select-none
                  transition-all
                  duration-500
                  group-hover:opacity-[0.12]
                  group-hover:scale-110
                "
              >
                {item.icon}
              </motion.div>

              {/* Icon */}

              <motion.div
                whileHover={{
                  scale: 1.15,
                  rotate: 8,
                }}
                className="
                  relative
                  z-10
                  mx-auto
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-cyan-400
                  to-blue-600
                  text-3xl
                  shadow-lg
                  shadow-cyan-500/30
                  transition-all
                  duration-500
                  group-hover:shadow-[0_0_35px_rgba(34,211,238,0.55)]
                "
              >
                {item.icon}
              </motion.div>

              {/* Number */}

              <h3
                className="
                  relative
                  z-10
                  mt-6
                  text-4xl
                  font-extrabold
                  md:text-5xl
                  bg-gradient-to-r
                  from-cyan-400
                  via-blue-500
                  to-purple-500
                  bg-clip-text
                  text-transparent
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              >
                <Counter value={item.number} />
              </h3>

              {/* Title */}

              <p
                className={`
                  relative
                  z-10
                  mt-4
                  text-sm
                  font-medium
                  md:text-base

                  ${darkMode ? "text-gray-400" : "text-slate-600"}
                `}
              >
                {item.title}
              </p>

              {/* DATA PROGRESS */}

              <div className="relative z-10 mx-auto mt-5 h-1 w-16 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{
                    width: "0%",
                  }}
                  whileInView={{
                    width: "100%",
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.5 + index * 0.15,
                    duration: 1.2,
                    ease: "easeOut",
                  }}
                  className="
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-400
                    via-blue-500
                    to-violet-500
                  "
                />
              </div>

              {/* Bottom Accent */}

              <div
                className="
                  absolute
                  bottom-0
                  left-1/2
                  h-[3px]
                  w-0
                  -translate-x-1/2
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-400
                  via-blue-500
                  to-violet-500
                  transition-all
                  duration-500
                  group-hover:w-1/2
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Statistics;
