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
      className={`
      relative overflow-hidden
      py-24 px-6
      transition-all duration-500

      ${
        darkMode
          ? "bg-slate-950"
          : "bg-gradient-to-b from-white via-cyan-50/70 to-slate-100"
      }
      `}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
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
          className={`
          text-4xl md:text-5xl
          font-black
          tracking-tight
          text-center
          mb-16

          ${darkMode ? "text-white" : "text-slate-900"}
          `}
        >
          🚀 Trending Career Paths
        </motion.h2>

        <div
          className="
        grid md:grid-cols-2 lg:grid-cols-3
        gap-7
        "
        >
          {filteredDomains.map((domain, index) => (
            <motion.div
              key={domain.name}
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
                delay: index * 0.12,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className={`
              group
              relative overflow-hidden
              rounded-[28px]
              p-7
              border
              backdrop-blur-2xl
              transition-all duration-500
              hover:border-cyan-400/40
              hover:shadow-[0_20px_60px_rgba(34,211,238,0.18)]

              ${
                darkMode
                  ? "bg-white/[0.04] border-white/10"
                  : "bg-white/75 border-slate-200/70 shadow-lg"
              }

              `}
            >
              {/* Floating Background Icon */}

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
  -right-7
  -top-9
  text-[150px]
  opacity-[0.07]
  pointer-events-none
  select-none
  transition-all duration-700
  group-hover:scale-110
  group-hover:opacity-[0.12]
  "
              >
                {domain.icon}
              </motion.div>

              {/* Icon */}

              <motion.div
                whileHover={{
                  rotate: 10,
                  scale: 1.1,
                }}
                className="
                w-16 h-16
                rounded-2xl
                flex items-center justify-center
                text-4xl

                bg-gradient-to-br
                from-cyan-400
                via-blue-500
                to-purple-600

                border border-white/20
                shadow-[0_10px_30px_rgba(34,211,238,0.25)]

                transition-all duration-500
                group-hover:shadow-[0_15px_40px_rgba(34,211,238,0.4)]
                "
              >
                {domain.icon}
              </motion.div>

              <h3
                className={`
                text-2xl
                font-black
                tracking-tight
                mt-6

                ${darkMode ? "text-white" : "text-slate-900"}
                `}
              >
                {domain.name}
              </h3>

              <p
                className={`
                mt-4
                leading-relaxed
                text-[15px]

                ${darkMode ? "text-gray-400" : "text-gray-600"}
                `}
              >
                {domain.skills}
              </p>

              <button
                onClick={() => {
                  playClick();
                  navigate(domain.route);
                }}
                className="
                mt-8 w-full

                flex items-center justify-center gap-2

                rounded-2xl
                py-3.5

                font-bold
                text-white

                bg-gradient-to-r
                from-cyan-400
                via-blue-500
                to-purple-600

                shadow-lg
                shadow-cyan-500/20

                transition-all duration-300
                hover:scale-[1.03]
                hover:shadow-cyan-500/40
                active:scale-[0.98]
                "
              >
                Explore Career
                <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CareerDomains;
