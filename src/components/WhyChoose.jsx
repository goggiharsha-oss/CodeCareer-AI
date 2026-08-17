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
      relative overflow-hidden
      py-24 px-6
      transition-all duration-500

      ${
        darkMode
          ? "bg-slate-950"
          : "bg-gradient-to-b from-slate-50 via-white to-cyan-50/70"
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
          transition={{
            duration: 0.6,
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
          Why Choose CodeCareer AI?
        </motion.h2>

        <div
          className="
        grid md:grid-cols-2 lg:grid-cols-4
        gap-7
        "
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
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
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className={`
                group
                relative overflow-hidden
                rounded-[28px]
                p-8
                border
                backdrop-blur-2xl
                transition-all duration-500
                hover:border-cyan-400/40
                hover:shadow-[0_20px_55px_rgba(34,211,238,0.18)]

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
                  y: [0, -18, 0],
                  rotate: [0, 15, -15, 0],
                  opacity: [0.06, 0.15, 0.06],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: index * 0.4,
                }}
                className="
  absolute
  -right-8
  -top-4
  w-36
  h-36
  rounded-full
  bg-gradient-to-br
  from-cyan-400/20
  to-purple-500/10
  blur-3xl
  pointer-events-none
  transition-all duration-700
  group-hover:scale-125
  "
              />

              <motion.div
                whileHover={{
                  rotate: 10,
                  scale: 1.1,
                }}
                className="
                relative z-10
                w-16 h-16
                rounded-2xl
                flex items-center justify-center

                text-white

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
                {item.icon}
              </motion.div>

              <h3
                className={`
                relative z-10
                text-xl
                font-black
                tracking-tight
                mt-6

                ${darkMode ? "text-white" : "text-slate-900"}

                `}
              >
                {item.title}
              </h3>

              <p
                className={`
                relative z-10
                mt-3
                leading-relaxed
                text-[15px]

                ${darkMode ? "text-gray-400" : "text-gray-600"}

                `}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
