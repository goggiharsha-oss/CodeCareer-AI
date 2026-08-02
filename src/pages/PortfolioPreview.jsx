import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function PortfolioPreview() {
  const navigate = useNavigate();

  const [data, setData] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("portfolioData");

    if (!saved) {
      navigate("/portfolio-form");
      return;
    }

    setData(JSON.parse(saved));
  }, [navigate]);

  if (!data) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Background */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
        fixed
        top-0
        left-1/2
        -translate-x-1/2
        w-[700px]
        h-[700px]
        rounded-full
        bg-cyan-500/20
        blur-[180px]
        -z-10
        "
      />

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
          bg-slate-900
          rounded-[35px]
          border
          border-slate-800
          p-10
          "
        >

          <div className="flex flex-col lg:flex-row items-center gap-10">

            {/* Profile */}

            <div
              className="
              w-44
              h-44
              rounded-full
              overflow-hidden
              border-4
              border-cyan-500
              shadow-2xl
              shadow-cyan-500/30
              "
            >
              {data.profileImage ? (
                <img
                  src={URL.createObjectURL(data.profileImage)}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-slate-800 flex items-center justify-center text-6xl">
                  👤
                </div>
              )}
            </div>

            {/* Details */}

            <div className="flex-1">

              <h1 className="text-5xl font-black">
                {data.fullName}
              </h1>

              <h2 className="text-2xl text-cyan-400 mt-3">
                {data.title}
              </h2>

              <p className="text-gray-400 mt-6 leading-8">
                {data.about}
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-8">

                <div>📧 {data.email}</div>

                <div>📱 {data.phone}</div>

                <div>📍 {data.location}</div>

                <div>🌐 {data.website}</div>

              </div>

            </div>

          </div>

        </motion.div>
                {/* ================= SKILLS ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-8 mt-10"
        >

          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8">

            <h2 className="text-3xl font-bold text-cyan-400 mb-6">
              💻 Skills
            </h2>

            <div className="flex flex-wrap gap-3">

              {data.skills
                ?.split(",")
                .map((skill, index) => (

                  <span
                    key={index}
                    className="
                    px-5
                    py-3
                    rounded-full
                    bg-cyan-500/20
                    text-cyan-400
                    font-semibold
                    "
                  >
                    {skill.trim()}
                  </span>

              ))}

            </div>

          </div>

          {/* ================= EDUCATION ================= */}

          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8">

            <h2 className="text-3xl font-bold text-cyan-400 mb-6">
              🎓 Education
            </h2>

            <p className="text-gray-300 whitespace-pre-line leading-8">
              {data.education}
            </p>

          </div>

        </motion.div>

        {/* ================= EXPERIENCE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
          mt-10
          bg-slate-900
          rounded-3xl
          border
          border-slate-800
          p-8
          "
        >

          <h2 className="text-3xl font-bold text-cyan-400 mb-6">
            💼 Experience
          </h2>

          <p className="text-gray-300 whitespace-pre-line leading-8">
            {data.experience}
          </p>

        </motion.div>

        {/* ================= CERTIFICATIONS ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
          mt-10
          bg-slate-900
          rounded-3xl
          border
          border-slate-800
          p-8
          "
        >

          <h2 className="text-3xl font-bold text-cyan-400 mb-6">
            🏆 Certifications
          </h2>

          <p className="text-gray-300 whitespace-pre-line leading-8">
            {data.certifications}
          </p>

        </motion.div>
                {/* ================= PROJECTS ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10"
        >

          <h2 className="text-4xl font-black text-cyan-400 mb-8">
            🚀 Projects
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">

            {data.projects.map((project, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="
                bg-slate-900
                rounded-3xl
                border
                border-slate-800
                p-8
                shadow-xl
                hover:border-cyan-500
                transition-all
                duration-300
                "
              >

                <div className="flex items-center justify-between">

                  <h3 className="text-2xl font-bold">
                    {project.name || `Project ${index + 1}`}
                  </h3>

                  <span className="text-3xl">
                    💻
                  </span>

                </div>

                <p className="text-gray-400 mt-5 leading-7">
                  {project.description}
                </p>

                <div className="mt-6">

                  <h4 className="font-semibold text-cyan-400 mb-3">
                    Technologies
                  </h4>

                  <div className="flex flex-wrap gap-3">

                    {project.tech
                      ?.split(",")
                      .map((tech, i) => (

                        <span
                          key={i}
                          className="
                          px-4
                          py-2
                          rounded-full
                          bg-cyan-500/20
                          text-cyan-300
                          text-sm
                          "
                        >
                          {tech.trim()}
                        </span>

                    ))}

                  </div>

                </div>

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
                      className="
                      flex-1
                      text-center
                      py-3
                      rounded-xl
                      bg-cyan-500
                      text-black
                      font-bold
                      hover:scale-105
                      transition
                      "
                    >
                      Live Demo
                    </a>

                  )}

                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>
                {/* ================= LINKS ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
          mt-10
          bg-slate-900
          rounded-3xl
          border
          border-slate-800
          p-8
          "
        >

          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            🌐 Connect With Me
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {data.github && (
              <a
                href={data.github}
                target="_blank"
                rel="noreferrer"
                className="
                rounded-2xl
                bg-slate-800
                p-6
                text-center
                hover:bg-cyan-500
                hover:text-black
                transition
                "
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
                className="
                rounded-2xl
                bg-slate-800
                p-6
                text-center
                hover:bg-blue-600
                transition
                "
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
                className="
                rounded-2xl
                bg-slate-800
                p-6
                text-center
                hover:bg-green-600
                transition
                "
              >
                <div className="text-5xl">🌍</div>
                <h3 className="mt-4 font-bold">Website</h3>
              </a>
            )}

          </div>

        </motion.div>

        {/* ================= ACTION BUTTONS ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-wrap justify-center gap-6 mt-14"
        >

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.print()}
            className="
            px-10
            py-4
            rounded-2xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            text-black
            font-bold
            shadow-xl
            "
          >
            🖨 Download Portfolio
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/portfolio-form")}
            className="
            px-10
            py-4
            rounded-2xl
            border
            border-cyan-500
            text-cyan-400
            hover:bg-cyan-500
            hover:text-black
            transition
            "
          >
            ✏️ Edit Portfolio
          </motion.button>

        </motion.div>
                {/* ================= FOOTER ================= */}

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

          <h2 className="text-3xl font-black text-cyan-400">
            CodeCareer AI
          </h2>

          <p className="text-gray-400 mt-4">
            Professional Portfolio Builder
          </p>

          <p className="text-gray-500 mt-8">
            © 2026 CodeCareer AI. All Rights Reserved.
          </p>

        </motion.footer>

      </div>

    </div>
  );
}

export default PortfolioPreview;