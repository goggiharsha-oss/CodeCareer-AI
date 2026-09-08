import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function PortfolioPreview() {
  const navigate = useNavigate();

  const [data, setData] = useState(null);

  // ================= PRINT STYLE =================

  useEffect(() => {
    const style = document.createElement("style");

    style.innerHTML = `
      @media print {
        body {
          background: white !important;
        }

        button,
        .no-print {
          display: none !important;
        }

        a {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
      }
    `;

    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // ================= LOAD PORTFOLIO DATA =================

  useEffect(() => {
    const saved = localStorage.getItem("portfolioData");

    if (!saved) {
      navigate("/portfolio-form");
      return;
    }

    try {
      setData(JSON.parse(saved));
    } catch (error) {
      console.error("Portfolio data error:", error);
      navigate("/portfolio-form");
    }
  }, [navigate]);

  // ================= LOADING =================

  if (!data) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  // ================= TEMPLATE =================

  const template = data.template || "frontend";

  // ================= SELECTED THEME =================

  const selectedTheme = data.theme || "cyan";

  // ================= TEMPLATE THEME =================

  const theme = {
    cyber: {
      accent: "text-green-400",
      border: "border-green-500",
      card: "bg-green-950/30",
      glow: "bg-green-500",
    },

    ai: {
      accent: "text-purple-400",
      border: "border-purple-500",
      card: "bg-purple-950/30",
      glow: "bg-purple-500",
    },

    fullstack: {
      accent: "text-blue-400",
      border: "border-blue-500",
      card: "bg-blue-950/30",
      glow: "bg-blue-500",
    },

    frontend: {
      accent: "text-cyan-400",
      border: "border-cyan-500",
      card: "bg-cyan-950/30",
      glow: "bg-cyan-500",
    },

    cloud: {
      accent: "text-indigo-400",
      border: "border-indigo-500",
      card: "bg-indigo-950/30",
      glow: "bg-indigo-500",
    },

    mobile: {
      accent: "text-emerald-400",
      border: "border-emerald-500",
      card: "bg-emerald-950/30",
      glow: "bg-emerald-500",
    },
  };

  const currentTheme = theme[template] || theme.frontend;

  // ================= PORTFOLIO COLOR =================

  const themeColor =
    selectedTheme === "purple"
      ? {
          accent: "text-purple-400",
          border: "border-purple-500",
          card: "bg-purple-950/30",
          glow: "bg-purple-500",
          ring: "border-purple-400/10",
          particle: "bg-purple-400",
        }
      : selectedTheme === "green"
        ? {
            accent: "text-green-400",
            border: "border-green-500",
            card: "bg-green-950/30",
            glow: "bg-green-500",
            ring: "border-green-400/10",
            particle: "bg-green-400",
          }
        : {
            accent: "text-cyan-400",
            border: "border-cyan-500",
            card: "bg-cyan-950/30",
            glow: "bg-cyan-500",
            ring: "border-cyan-400/10",
            particle: "bg-cyan-400",
          };

  // ================= PAGE BACKGROUND =================

  const pageBackground =
    template === "cyber"
      ? "bg-black"
      : template === "ai"
        ? "bg-gradient-to-br from-purple-950 via-slate-950 to-black"
        : template === "fullstack"
          ? "bg-gradient-to-br from-blue-950 via-slate-950 to-black"
          : template === "cloud"
            ? "bg-gradient-to-br from-indigo-950 via-slate-950 to-black"
            : template === "mobile"
              ? "bg-gradient-to-br from-emerald-950 via-slate-950 to-black"
              : "bg-gradient-to-br from-cyan-950 via-slate-950 to-black";

  // ================= RENDER =================

  return (
    <div
      className={`
        relative
        min-h-screen
        overflow-hidden
        text-white
        ${pageBackground}
      `}
    >
      {/* =====================================================
          ANIMATED BACKGROUND
      ====================================================== */}

      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* ================= GLOW 1 ================= */}

        <motion.div
          className={`
            absolute
            w-[500px]
            h-[500px]
            rounded-full
            blur-[120px]
            opacity-20
            ${themeColor.glow}
          `}
          animate={{
            x: ["-15%", "70%", "-15%"],
            y: ["5%", "60%", "5%"],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ================= GLOW 2 ================= */}

        <motion.div
          className={`
            absolute
            right-[-100px]
            bottom-[-100px]
            w-[550px]
            h-[550px]
            rounded-full
            blur-[140px]
            opacity-20
            ${themeColor.glow}
          `}
          animate={{
            x: ["10%", "-40%", "10%"],
            y: ["10%", "-25%", "10%"],
            scale: [1.1, 0.85, 1.1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ================= CENTER GLOW ================= */}

        <motion.div
          className={`
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[350px]
            h-[350px]
            rounded-full
            blur-[130px]
            opacity-10
            ${themeColor.glow}
          `}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ================= OUTER ROTATING RING ================= */}

        <motion.div
          className={`
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[850px]
            h-[850px]
            rounded-full
            border
            ${themeColor.ring}
          `}
          animate={{
            rotate: 360,
            scale: [1, 1.04, 1],
          }}
          transition={{
            rotate: {
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />

        {/* ================= INNER ROTATING RING ================= */}

        <motion.div
          className={`
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[550px]
            h-[550px]
            rounded-full
            border
            ${themeColor.ring}
          `}
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* ================= ANIMATED GRID ================= */}

        <motion.div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "80px 80px"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* ================= FLOATING PARTICLES ================= */}

        {Array.from({ length: 30 }).map((_, index) => (
          <motion.span
            key={index}
            className={`
              absolute
              w-1
              h-1
              rounded-full
              ${themeColor.particle}
            `}
            style={{
              left: `${(index * 37) % 100}%`,
              top: `${(index * 53) % 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.1, 0.7, 0.1],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: 4 + (index % 4),
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`
            rounded-[35px]
            border
            p-10
            backdrop-blur-xl
            ${themeColor.card}
            ${themeColor.border}
          `}
        >
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* ================= PROFILE IMAGE ================= */}

            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`
                w-44
                h-44
                rounded-full
                overflow-hidden
                border-4
                shadow-2xl
                flex-shrink-0
                ${themeColor.border}
              `}
            >
              {data.profileImage ? (
                <img
                  src={data.profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-slate-800 flex items-center justify-center text-6xl">
                  👤
                </div>
              )}
            </motion.div>

            {/* ================= DETAILS ================= */}

            <div className="flex-1">
              <h1
                className={`
                  text-5xl
                  md:text-6xl
                  font-black
                  tracking-tight
                  ${themeColor.accent}
                `}
              >
                {data.fullName || "Your Name"}
              </h1>

              <h2 className="text-2xl md:text-3xl font-semibold text-white mt-3">
                {data.title || "Your Professional Title"}
              </h2>

              <p className="text-gray-300 mt-6 leading-8 max-w-3xl">
                {data.about || "Write something about yourself..."}
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                {data.github && (
                  <span className="px-4 py-2 rounded-full bg-slate-800 text-gray-300">
                    🐙 GitHub
                  </span>
                )}

                {data.linkedin && (
                  <span className="px-4 py-2 rounded-full bg-slate-800 text-gray-300">
                    💼 LinkedIn
                  </span>
                )}

                {data.website && (
                  <span className="px-4 py-2 rounded-full bg-slate-800 text-gray-300">
                    🌐 Website
                  </span>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-8 text-gray-300">
                {data.email && <div>📧 {data.email}</div>}
                {data.phone && <div>📱 {data.phone}</div>}
                {data.location && <div>📍 {data.location}</div>}
                {data.website && <div>🌐 {data.website}</div>}
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            SKILLS + EDUCATION
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 mt-10"
        >
          {/* ================= SKILLS ================= */}

          <div
            className={`
              rounded-3xl
              border
              p-8
              backdrop-blur-xl
              ${themeColor.card}
              ${themeColor.border}
            `}
          >
            <h2 className={`text-3xl font-bold ${themeColor.accent} mb-6`}>
              💻 Skills
            </h2>

            <div className="flex flex-wrap gap-3">
              {data.skills
                ?.split(",")
                .filter((skill) => skill.trim())
                .map((skill, index) => (
                  <span
                    key={index}
                    className={`
                      px-5
                      py-3
                      rounded-full
                      ${themeColor.card}
                      ${themeColor.accent}
                      border
                      ${themeColor.border}
                      font-semibold
                      transition
                      hover:scale-105
                    `}
                  >
                    {skill.trim()}
                  </span>
                ))}
            </div>
          </div>

          {/* ================= EDUCATION ================= */}

          <div
            className={`
              rounded-3xl
              border
              p-8
              backdrop-blur-xl
              ${themeColor.card}
              ${themeColor.border}
            `}
          >
            <h2 className={`text-3xl font-bold ${themeColor.accent} mb-6`}>
              🎓 Education
            </h2>

            <p className="text-gray-300 whitespace-pre-line leading-8">
              {data.education || "Education details not added."}
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            EXPERIENCE
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`
            mt-10
            rounded-3xl
            border
            p-8
            backdrop-blur-xl
            ${themeColor.card}
            ${themeColor.border}
          `}
        >
          <h2 className={`text-3xl font-bold ${themeColor.accent} mb-6`}>
            💼 Experience
          </h2>

          <p className="text-gray-300 whitespace-pre-line leading-8">
            {data.experience || "Experience details not added."}
          </p>
        </motion.div>

        {/* =====================================================
            CERTIFICATIONS
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`
            mt-10
            rounded-3xl
            border
            p-8
            backdrop-blur-xl
            ${themeColor.card}
            ${themeColor.border}
          `}
        >
          <h2 className={`text-3xl font-bold ${themeColor.accent} mb-6`}>
            🏆 Certifications
          </h2>

          <p className="text-gray-300 whitespace-pre-line leading-8">
            {data.certifications || "Certifications not added."}
          </p>
        </motion.div>

        {/* =====================================================
            PROJECTS
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <h2 className={`text-4xl font-black ${themeColor.accent} mb-8`}>
            🚀 Projects
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {data.projects?.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className={`
                  rounded-3xl
                  border
                  p-8
                  shadow-xl
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  ${themeColor.card}
                  ${themeColor.border}
                `}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">
                    {project.name || `Project ${index + 1}`}
                  </h3>

                  <span className="text-3xl">
                    {template === "cyber"
                      ? "🛡️"
                      : template === "ai"
                        ? "🤖"
                        : template === "fullstack"
                          ? "🚀"
                          : template === "cloud"
                            ? "☁️"
                            : template === "mobile"
                              ? "📱"
                              : "💻"}
                  </span>
                </div>

                <p className="text-gray-400 mt-5 leading-7">
                  {project.description || "Project description not added."}
                </p>

                {project.tech && (
                  <div className="mt-6">
                    <h4 className={`font-semibold ${themeColor.accent} mb-3`}>
                      Technologies
                    </h4>

                    <div className="flex flex-wrap gap-3">
                      {project.tech
                        .split(",")
                        .filter((tech) => tech.trim())
                        .map((tech, i) => (
                          <span
                            key={i}
                            className={`
                              px-4
                              py-2
                              rounded-full
                              ${themeColor.card}
                              ${themeColor.accent}
                              border
                              ${themeColor.border}
                              text-sm
                            `}
                          >
                            {tech.trim()}
                          </span>
                        ))}
                    </div>
                  </div>
                )}

                <div className="flex gap-4 mt-8">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        flex-1
                        text-center
                        py-3
                        rounded-xl
                        bg-slate-800
                        hover:bg-cyan-500
                        hover:text-black
                        transition
                      "
                    >
                      GitHub
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className={`
                        flex-1
                        text-center
                        py-3
                        rounded-xl
                        font-bold
                        transition
                        hover:scale-105
                        ${
                          selectedTheme === "purple"
                            ? "bg-purple-500 text-white"
                            : selectedTheme === "green"
                              ? "bg-green-500 text-black"
                              : "bg-cyan-500 text-black"
                        }
                      `}
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* =====================================================
            CONNECT WITH ME
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`
            mt-10
            rounded-3xl
            border
            p-8
            backdrop-blur-xl
            ${themeColor.card}
            ${themeColor.border}
          `}
        >
          <h2 className={`text-3xl font-bold ${themeColor.accent} mb-8`}>
            🌐 Connect With Me
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {data.github && (
              <a
                href={data.github}
                target="_blank"
                rel="noreferrer"
                className={`
                  rounded-2xl
                  p-6
                  text-center
                  transition
                  hover:text-black
                  ${
                    selectedTheme === "purple"
                      ? "bg-purple-900 hover:bg-purple-500"
                      : selectedTheme === "green"
                        ? "bg-green-900 hover:bg-green-500"
                        : "bg-slate-800 hover:bg-cyan-500"
                  }
                `}
              >
                <div className="text-5xl">🐙</div>
                <h3 className="mt-4 font-bold">GitHub</h3>
              </a>
            )}

            {data.linkedin && (
              <a
                href={data.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-slate-800 p-6 text-center hover:bg-blue-600 transition"
              >
                <div className="text-5xl">💼</div>
                <h3 className="mt-4 font-bold">LinkedIn</h3>
              </a>
            )}

            {data.website && (
              <a
                href={data.website}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-slate-800 p-6 text-center hover:bg-green-600 transition"
              >
                <div className="text-5xl">🌍</div>
                <h3 className="mt-4 font-bold">Website</h3>
              </a>
            )}
          </div>
        </motion.div>

        {/* =====================================================
            BACK TO FORM
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="no-print flex justify-center mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/portfolio-form")}
            className={`
              px-10
              py-4
              rounded-2xl
              border
              font-bold
              transition
              ${themeColor.border}
              ${themeColor.accent}
              hover:bg-white
              hover:text-black
            `}
          >
            🏠 Back to Home
          </motion.button>
        </motion.div>

        {/* =====================================================
            ACTION BUTTONS
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="no-print flex flex-wrap justify-center gap-6 mt-14"
        >
          {/* DOWNLOAD */}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.print()}
            className={`
              px-10
              py-4
              rounded-2xl
              text-black
              font-bold
              shadow-xl
              ${
                selectedTheme === "purple"
                  ? "bg-gradient-to-r from-purple-400 to-pink-600"
                  : selectedTheme === "green"
                    ? "bg-gradient-to-r from-green-400 to-emerald-600"
                    : "bg-gradient-to-r from-cyan-400 to-blue-600"
              }
            `}
          >
            🖨 Download Portfolio
          </motion.button>

          {/* EDIT */}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/portfolio-form")}
            className={`
              px-10
              py-4
              rounded-2xl
              border
              transition
              ${themeColor.border}
              ${themeColor.accent}
              hover:bg-white
              hover:text-black
            `}
          >
            ✏️ Edit Portfolio
          </motion.button>
        </motion.div>

        {/* =====================================================
            FOOTER
        ====================================================== */}

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="
            mt-20
            border-t
            border-slate-800
            pt-10
            pb-10
            text-center
          "
        >
          <h2 className={`text-3xl font-black ${themeColor.accent}`}>
            CodeCareer AI
          </h2>

          <p className="text-gray-400 mt-4">Professional Portfolio Builder</p>

          <p className="text-gray-500 mt-8">
            © 2026 CodeCareer AI. All Rights Reserved.
          </p>
        </motion.footer>
      </div>
    </div>
  );
}

export default PortfolioPreview;
