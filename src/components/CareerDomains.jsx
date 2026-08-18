import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { playClick } from "../utils/playClick";
import { ArrowRight } from "lucide-react";

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

  const filteredDomains = domains.filter(
    (domain) =>
      domain.name.toLowerCase().includes(search.toLowerCase()) ||
      domain.skills.toLowerCase().includes(search.toLowerCase()) ||
      (search.toLowerCase() === "ai" &&
        domain.name === "Artificial Intelligence"),
  );

  return (
    <section
      id="careers"
      className={`relative overflow-hidden py-24 px-6 transition-all duration-500 ${
        darkMode
          ? "bg-[#020617] text-white"
          : "bg-gradient-to-b from-white via-cyan-50/70 to-slate-100"
      }`}
    >
      {/* =====================================================
          PREMIUM ANIMATED BACKGROUND
      ===================================================== */}

      {/* Large Aurora Glow - Left */}
      <motion.div
        animate={{
          x: [0, 80, -30, 0],
          y: [0, -40, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/10
          blur-[130px]
        "
      />

      {/* Large Aurora Glow - Right */}
      <motion.div
        animate={{
          x: [0, -70, 40, 0],
          y: [0, 60, -40, 0],
          scale: [1, 0.85, 1.2, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-40
          top-40
          h-[520px]
          w-[520px]
          rounded-full
          bg-violet-600/10
          blur-[140px]
        "
      />

      {/* Center Blue Atmosphere */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[600px]
          w-[600px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-600/10
          blur-[160px]
        "
      />

      {/* =====================================================
          FLOATING ABSTRACT SHAPES
      ===================================================== */}

      {/* Shape 1 */}
      <motion.div
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          left-[8%]
          top-[18%]
          h-32
          w-32
          rounded-[35px]
          border
          border-cyan-400/10
          bg-cyan-400/[0.02]
          blur-[1px]
        "
      />

      {/* Shape 2 */}
      <motion.div
        animate={{
          rotate: [360, 180, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[7%]
          bottom-[15%]
          h-40
          w-40
          rounded-full
          border
          border-violet-400/10
          bg-violet-400/[0.02]
        "
      />

      {/* Shape 3 */}
      <motion.div
        animate={{
          rotate: [0, -120, -240, -360],
          x: [0, 30, -20, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          right-[35%]
          top-[8%]
          h-20
          w-20
          rounded-[25px]
          border
          border-blue-400/10
          rotate-45
        "
      />

      {/* =====================================================
          ANIMATED GRID
      ===================================================== */}

      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "45px 45px"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.18]
        "
        style={{
          backgroundImage: darkMode
            ? `
              linear-gradient(
                rgba(34,211,238,0.08) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(34,211,238,0.08) 1px,
                transparent 1px
              )
            `
            : `
              linear-gradient(
                rgba(14,116,144,0.07) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(14,116,144,0.07) 1px,
                transparent 1px
              )
            `,
          backgroundSize: "45px 45px",
        }}
      />

      {/* =====================================================
          TOP FADE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          right-0
          top-0
          h-32
          bg-gradient-to-b
          from-cyan-500/[0.04]
          to-transparent
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
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
          className="mb-16 text-center"
        >
          <h2
            className={`text-4xl font-black tracking-tight md:text-5xl ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            🚀 Trending Career Paths
          </h2>

          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 110,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              mx-auto
              mt-5
              h-1
              rounded-full
              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-violet-500
            "
          />
        </motion.div>

        {/* =====================================================
            CARDS
        ===================================================== */}

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {filteredDomains.map((domain, index) => (
            <motion.div
              key={domain.name}
              initial={{
                opacity: 0,
                y: 50,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{
                y: -12,
                scale: 1.025,
              }}
              className={`
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                p-7
                backdrop-blur-2xl
                transition-all
                duration-500

                ${
                  darkMode
                    ? "border-white/10 bg-white/[0.04]"
                    : "border-slate-200/70 bg-white/75 shadow-lg"
                }

                hover:border-cyan-400/40
                hover:shadow-[0_25px_70px_rgba(34,211,238,0.16)]
              `}
            >
              {/* =================================================
                  CARD OUTER AURA
              ================================================= */}

              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.05, 0.13, 0.05],
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
                  h-48
                  w-48
                  rounded-full
                  bg-cyan-400
                  blur-[70px]
                "
              />

              {/* Second Aura */}

              <motion.div
                animate={{
                  scale: [1, 0.85, 1],
                  opacity: [0.03, 0.1, 0.03],
                }}
                transition={{
                  duration: 6 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  -bottom-20
                  -left-16
                  h-40
                  w-40
                  rounded-full
                  bg-violet-500
                  blur-[65px]
                "
              />

              {/* =================================================
                  LARGE BACKGROUND ICON
              ================================================= */}

              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.04, 1],
                }}
                transition={{
                  duration: 7 + index * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  -right-7
                  -top-9
                  select-none
                  text-[150px]
                  opacity-[0.055]
                  transition-all
                  duration-700
                  group-hover:scale-125
                  group-hover:opacity-[0.11]
                "
              >
                {domain.icon}
              </motion.div>

              {/* =================================================
                  ICON
              ================================================= */}

              <motion.div
                whileHover={{
                  rotate: 8,
                  scale: 1.12,
                  y: -4,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
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
                  to-purple-600
                  text-4xl
                  shadow-[0_10px_30px_rgba(34,211,238,0.25)]
                  transition-all
                  duration-500
                  group-hover:shadow-[0_15px_45px_rgba(34,211,238,0.45)]
                "
              >
                {domain.icon}
              </motion.div>

              {/* =================================================
                  CONTENT
              ================================================= */}

              <h3
                className={`
                  relative
                  z-10
                  mt-6
                  text-2xl
                  font-black
                  tracking-tight
                  ${darkMode ? "text-white" : "text-slate-900"}
                `}
              >
                {domain.name}
              </h3>

              <p
                className={`
                  relative
                  z-10
                  mt-4
                  text-[15px]
                  leading-relaxed
                  ${darkMode ? "text-gray-400" : "text-gray-600"}
                `}
              >
                {domain.skills}
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
                  navigate(domain.route);
                }}
                className="
                  relative
                  z-10
                  mt-8
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  overflow-hidden
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
                  hover:shadow-[0_10px_35px_rgba(34,211,238,0.4)]
                "
              >
                Explore Career
                <motion.span
                  animate={{
                    x: [0, 4, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CareerDomains;
