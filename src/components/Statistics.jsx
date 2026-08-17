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
      className={`py-24 px-6 transition-all duration-500 ${
        darkMode
          ? "bg-slate-950"
          : "bg-gradient-to-b from-cyan-50 via-white to-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-4xl md:text-5xl font-extrabold text-center ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          Career Statistics
        </motion.h2>

        <p
          className={`text-center mt-4 mb-14 ${
            darkMode ? "text-gray-400" : "text-slate-600"
          }`}
        >
          Explore technology careers with salary insights and opportunities
        </p>

        {/* Statistics Cards */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
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
                p-7 md:p-8
                text-center
                border
                backdrop-blur-xl
                transition-all
                duration-500

                ${
                  darkMode
                    ? `
                      bg-slate-900/70
                      border-cyan-500/20
                      hover:border-cyan-400/60
                      hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]
                    `
                    : `
                      bg-white/80
                      border-cyan-100
                      shadow-lg
                      hover:border-cyan-300
                      hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]
                    `
                }
              `}
            >
              {/* Top Glow */}

              <div
                className="
                  absolute
                  -top-20
                  left-1/2
                  -translate-x-1/2
                  w-40
                  h-40
                  rounded-full
                  bg-cyan-400/20
                  blur-3xl
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                "
              />

              {/* Background Icon */}

              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 8, -8, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: index * 0.4,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -right-5
                  -top-3
                  text-8xl
                  opacity-[0.06]
                  pointer-events-none
                  select-none
                  group-hover:opacity-[0.12]
                  transition-all
                  duration-500
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
                  w-16
                  h-16
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  text-3xl
                  bg-gradient-to-br
                  from-cyan-400
                  to-blue-600
                  shadow-lg
                  shadow-cyan-500/30
                  transition-all
                  duration-500
                  group-hover:shadow-cyan-400/60
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
                  md:text-5xl
                  font-extrabold
                  bg-gradient-to-r
                  from-cyan-400
                  via-blue-500
                  to-purple-500
                  bg-clip-text
                  text-transparent
                  transition-all
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
                  md:text-base
                  font-medium

                  ${darkMode ? "text-gray-400" : "text-slate-600"}
                `}
              >
                {item.title}
              </p>

              {/* Bottom Line */}

              <div
                className="
                  absolute
                  bottom-0
                  left-1/2
                  -translate-x-1/2
                  w-0
                  h-[3px]
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-400
                  to-blue-600
                  group-hover:w-1/2
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
export default Statistics;
