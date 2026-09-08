import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

function PortfolioForm() {
  const navigate = useNavigate();
  const location = useLocation();

  // ================= TEMPLATE =================

  const [selectedTemplate, setSelectedTemplate] = useState(
    location.state?.template || "frontend",
  );

  const template = selectedTemplate;

  // ================= FORM DATA =================

  const [formData, setFormData] = useState({
    theme: "cyan",
    fullName: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    about: "",

    github: "",
    linkedin: "",
    website: "",

    skills: "",
    education: "",
    experience: "",
    certifications: "",

    profileImage: null,
    resume: null,

    projects: [
      {
        name: "",
        description: "",
        tech: "",
        github: "",
        live: "",
      },
    ],
  });

  // ================= PROJECT CHANGE =================

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...formData.projects];

    updatedProjects[index] = {
      ...updatedProjects[index],
      [field]: value,
    };

    setFormData((prev) => ({
      ...prev,
      projects: updatedProjects,
    }));
  };

  // ================= ADD PROJECT =================

  const addProject = () => {
    setFormData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          name: "",
          description: "",
          tech: "",
          github: "",
          live: "",
        },
      ],
    }));
  };

  // ================= REMOVE PROJECT =================

  const removeProject = (index) => {
    setFormData((prev) => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index),
    }));
  };

  // ================= NORMAL INPUT CHANGE =================

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files && files[0]) {
      const file = files[0];

      if (name === "profileImage") {
        const imageUrl = URL.createObjectURL(file);

        setFormData((prev) => ({
          ...prev,
          profileImage: imageUrl,
        }));

        return;
      }

      if (name === "resume") {
        setFormData((prev) => ({
          ...prev,
          resume: file.name,
        }));

        return;
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ================= SUBMIT / GENERATE PORTFOLIO =================

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Generate Portfolio clicked");

    try {
      const portfolioData = {
        ...formData,
        template: selectedTemplate,
      };

      // Save portfolio data
      localStorage.setItem("portfolioData", JSON.stringify(portfolioData));

      console.log("Portfolio data saved:", portfolioData);

      // Navigate to preview
      navigate("/portfolio-preview");
    } catch (error) {
      console.error("Portfolio generation error:", error);
    }
  };

  // ================= TEMPLATE BACKGROUND =================

  const getBackground = () => {
    if (template === "cyber") {
      return "bg-black";
    }

    if (template === "ai") {
      return "bg-gradient-to-br from-purple-950 to-slate-950";
    }

    if (template === "fullstack") {
      return "bg-gradient-to-br from-blue-950 to-slate-950";
    }

    if (template === "frontend") {
      return "bg-gradient-to-br from-cyan-950 to-slate-950";
    }

    if (template === "cloud") {
      return "bg-gradient-to-br from-indigo-950 to-slate-950";
    }

    if (template === "mobile") {
      return "bg-gradient-to-br from-emerald-950 to-slate-950";
    }

    return "bg-slate-950";
  };

  // ================= TEMPLATE BORDER =================

  const getBorder = () => {
    if (template === "cyber") {
      return "border-green-500";
    }

    if (template === "ai") {
      return "border-purple-500";
    }

    if (template === "fullstack") {
      return "border-blue-500";
    }

    if (template === "cloud") {
      return "border-indigo-500";
    }

    if (template === "mobile") {
      return "border-emerald-500";
    }

    return "border-cyan-500";
  };

  // ================= BACKGROUND ANIMATIONS =================

  const getAnimationColor = () => {
    if (template === "cyber") return "bg-green-500";
    if (template === "ai") return "bg-purple-500";
    if (template === "fullstack") return "bg-blue-500";
    if (template === "cloud") return "bg-indigo-500";
    if (template === "mobile") return "bg-emerald-500";
    return "bg-cyan-500";
  };

  const animationColor = getAnimationColor();

  const floatingParticles = Array.from({ length: 18 });

  // ================= PAGE =================

  return (
    <div
      className={`
        relative
        min-h-screen
        overflow-hidden
        text-white
        ${getBackground()}
      `}
    >
      {/* ================= ANIMATED BACKGROUND ================= */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Glow 1 */}
        <motion.div
          className={`absolute w-96 h-96 rounded-full blur-3xl opacity-20 ${animationColor}`}
          animate={{
            x: ["-10%", "70%", "-10%"],
            y: ["10%", "60%", "10%"],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Glow 2 */}
        <motion.div
          className={`absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-15 ${animationColor}`}
          animate={{
            x: ["10%", "-50%", "10%"],
            y: ["10%", "-20%", "10%"],
            scale: [1.2, 0.9, 1.2],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Rotating Light Ring */}
        <motion.div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
    w-[650px] h-[650px]
    rounded-full
    border
    border-white/5
  `}
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: {
              duration: 30,
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

        {/* Floating Particles */}
        {floatingParticles.map((_, index) => (
          <motion.span
            key={index}
            className={`absolute w-1 h-1 rounded-full ${animationColor} opacity-40`}
            style={{
              left: `${(index * 37) % 100}%`,
              top: `${(index * 53) % 100}%`,
            }}
            animate={{
              y: [0, -80, 0],
              opacity: [0.15, 0.7, 0.15],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: 4 + (index % 4),
              repeat: Infinity,
              delay: index * 0.25,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Animated Grid */}
        <motion.div
          className="absolute inset-0 opacity-[0.04]"
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
      </div>
      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        {/* ================= TOP HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          {/* BACK BUTTON */}

          <div className="flex justify-start mb-8">
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/portfolio-builder")}
              className="
                px-8
                py-3
                rounded-2xl
                border
                border-cyan-500
                text-cyan-400
                font-bold
                hover:bg-cyan-500
                hover:text-black
                transition
              "
            >
              🏠 Back to Home
            </motion.button>
          </div>

          {/* ================= TITLE ================= */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            {/* BADGE */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-5
                py-2
                rounded-full
                bg-cyan-500/10
                border
                border-cyan-500/30
                text-cyan-400
                text-sm
                font-semibold
              "
            >
              ✨ Let's build your career profile
            </div>

            {/* TITLE */}

            <h1 className="text-5xl md:text-6xl font-black mt-6">
              Create Your
              <span className="block text-cyan-400">Professional Profile</span>
            </h1>

            {/* DESCRIPTION */}

            <p className="text-gray-400 mt-5 text-lg max-w-2xl mx-auto">
              Enter your details once and we'll transform them into a beautiful
              portfolio and professional resume.
            </p>
          </motion.div>
        </motion.div>

        {/* ================= FORM START ================= */}

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* =====================================================
              PERSONAL INFORMATION
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`
              rounded-3xl
              p-8
              border
              ${getBorder()}
              ${
                template === "cyber"
                  ? "bg-slate-950"
                  : template === "ai"
                    ? "bg-purple-950/40"
                    : template === "frontend"
                      ? "bg-cyan-950/40"
                      : template === "fullstack"
                        ? "bg-blue-950/40"
                      : template === "cloud"
                        ? "bg-indigo-950/40"
                        : template === "mobile"
                          ? "bg-emerald-950/40"
                            : "bg-slate-900"
              }
            `}
          >
            {/* SECTION HEADER */}

            <div className="flex items-center gap-5 mb-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-cyan-500/10
                  border
                  border-cyan-500/30
                  flex
                  items-center
                  justify-center
                  text-2xl
                "
              >
                👤
              </motion.div>

              <div>
                <h2 className="text-3xl font-bold">Personal Information</h2>

                <p className="text-gray-400 mt-1">
                  Tell us a little about yourself
                </p>
              </div>
            </div>

            {/* ================= PERSONAL GRID ================= */}

            <div className="grid md:grid-cols-2 gap-6">
              {/* FULL NAME */}

              <div>
                <label className="block mb-3 text-sm font-semibold text-gray-300">
                  Full Name
                </label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="
                    w-full
                    rounded-2xl
                    bg-white/5
                    backdrop-blur-xl
                    border
                    border-white/10
                    p-4
                    text-white
                    placeholder-gray-500
                    outline-none
                    transition-all
                    duration-300
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-400/20
                    focus:bg-cyan-500/5
                    hover:border-cyan-500/40
                  "
                />
              </div>

              {/* JOB TITLE */}

              <div>
                <label className="block mb-3 text-sm font-semibold text-gray-300">
                  Job Title
                </label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder="Frontend Developer"
                  className="
                    w-full
                    rounded-2xl
                    bg-white/5
                    backdrop-blur-xl
                    border
                    border-white/10
                    p-4
                    text-white
                    placeholder-gray-500
                    outline-none
                    transition-all
                    duration-300
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-400/20
                    focus:bg-cyan-500/5
                    hover:border-cyan-500/40
                  "
                />
              </div>

              {/* EMAIL */}

              <div>
                <label className="block mb-3 text-sm font-semibold text-gray-300">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="example@gmail.com"
                  className="
                    w-full
                    rounded-2xl
                    bg-white/5
                    backdrop-blur-xl
                    border
                    border-white/10
                    p-4
                    text-white
                    placeholder-gray-500
                    outline-none
                    transition-all
                    duration-300
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-400/20
                    focus:bg-cyan-500/5
                    hover:border-cyan-500/40
                  "
                />
              </div>

              {/* PHONE */}

              <div>
                <label className="block mb-3 text-sm font-semibold text-gray-300">
                  Phone Number
                </label>

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 9876543210"
                  className="
                    w-full
                    rounded-2xl
                    bg-white/5
                    backdrop-blur-xl
                    border
                    border-white/10
                    p-4
                    text-white
                    placeholder-gray-500
                    outline-none
                    transition-all
                    duration-300
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-400/20
                    focus:bg-cyan-500/5
                    hover:border-cyan-500/40
                  "
                />
              </div>

              {/* LOCATION */}

              <div>
                <label className="block mb-3 text-sm font-semibold text-gray-300">
                  Location
                </label>

                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Hyderabad, India"
                  className="
                    w-full
                    rounded-2xl
                    bg-white/5
                    backdrop-blur-xl
                    border
                    border-white/10
                    p-4
                    text-white
                    placeholder-gray-500
                    outline-none
                    transition-all
                    duration-300
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-400/20
                    focus:bg-cyan-500/5
                    hover:border-cyan-500/40
                  "
                />
              </div>

              {/* WEBSITE */}

              <div>
                <label className="block mb-3 text-sm font-semibold text-gray-300">
                  Personal Website
                </label>

                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://yourwebsite.com"
                  className="
                    w-full
                    rounded-2xl
                    bg-white/5
                    backdrop-blur-xl
                    border
                    border-white/10
                    p-4
                    text-white
                    placeholder-gray-500
                    outline-none
                    transition-all
                    duration-300
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-400/20
                    focus:bg-cyan-500/5
                    hover:border-cyan-500/40
                  "
                />
              </div>

              {/* GITHUB */}

              <div>
                <label className="block mb-3 text-sm font-semibold text-gray-300">
                  GitHub
                </label>

                <input
                  type="text"
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  placeholder="https://github.com/username"
                  className="
                    w-full
                    rounded-2xl
                    bg-white/5
                    backdrop-blur-xl
                    border
                    border-white/10
                    p-4
                    text-white
                    placeholder-gray-500
                    outline-none
                    transition-all
                    duration-300
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-400/20
                    focus:bg-cyan-500/5
                    hover:border-cyan-500/40
                  "
                />
              </div>

              {/* LINKEDIN */}

              <div>
                <label className="block mb-3 text-sm font-semibold text-gray-300">
                  LinkedIn
                </label>

                <input
                  type="text"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/username"
                  className="
                    w-full
                    rounded-2xl
                    bg-white/5
                    backdrop-blur-xl
                    border
                    border-white/10
                    p-4
                    text-white
                    placeholder-gray-500
                    outline-none
                    transition-all
                    duration-300
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-400/20
                    focus:bg-cyan-500/5
                    hover:border-cyan-500/40
                  "
                />
              </div>
            </div>

            {/* ================= ABOUT ME ================= */}

            <div className="mt-8">
              <label className="block mb-3 text-sm font-semibold text-gray-300">
                About Me
              </label>

              <textarea
                rows={6}
                name="about"
                value={formData.about}
                onChange={handleChange}
                placeholder="Write about yourself..."
                className="
                  w-full
                  rounded-2xl
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-white/10
                  p-4
                  text-white
                  placeholder-gray-500
                  outline-none
                  resize-none
                  transition-all
                  duration-300
                  focus:border-cyan-400
                  focus:ring-2
                  focus:ring-cyan-400/20
                  focus:bg-cyan-500/5
                  hover:border-cyan-500/40
                "
              />
            </div>

            {/* ================= FILE UPLOADS ================= */}

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              {/* PROFILE IMAGE */}

              <div>
                <label className="block mb-3 text-sm font-semibold text-gray-300">
                  🖼 Profile Image
                </label>

                <input
                  type="file"
                  name="profileImage"
                  accept="image/*"
                  onChange={handleChange}
                  className="
                    w-full
                    rounded-2xl
                    bg-white/5
                    backdrop-blur-xl
                    border
                    border-white/10
                    p-4
                    text-white
                    outline-none
                    transition-all
                    duration-300
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-400/20
                    hover:border-cyan-500/40
                  "
                />
              </div>

              {/* RESUME */}

              <div>
                <label className="block mb-3 text-sm font-semibold text-gray-300">
                  📄 Resume
                </label>

                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  className="
                    w-full
                    rounded-2xl
                    bg-white/5
                    backdrop-blur-xl
                    border
                    border-white/10
                    p-4
                    text-white
                    outline-none
                    transition-all
                    duration-300
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-400/20
                    hover:border-cyan-500/40
                  "
                />
              </div>
            </div>
          </motion.div>
          {/* =====================================================
              SKILLS / EDUCATION / EXPERIENCE / CERTIFICATIONS
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`
              rounded-3xl
              p-8
              border
              ${getBorder()}
              ${
                template === "cyber"
                  ? "bg-green-950/30"
                  : template === "ai"
                    ? "bg-purple-950/40"
                    : template === "frontend"
                      ? "bg-cyan-950/40"
                      : template === "fullstack"
                        ? "bg-blue-950/40"
                      : template === "cloud"
                        ? "bg-indigo-950/40"
                        : template === "mobile"
                          ? "bg-emerald-950/40"
                            : "bg-slate-900"
              }
            `}
          >
            {/* ================= SECTION HEADER ================= */}

            <div className="flex items-center gap-5 mb-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-purple-500/10
                  border
                  border-purple-500/30
                  flex
                  items-center
                  justify-center
                  text-2xl
                "
              >
                🎓
              </motion.div>

              <div>
                <h2 className="text-3xl font-bold">Education & Skills</h2>

                <p className="text-gray-400 mt-1">
                  Showcase your technical skills and educational background
                </p>
              </div>
            </div>

            {/* ================= SKILLS ================= */}

            <div className="mb-8">
              <label className="block mb-3 text-sm font-semibold text-gray-300">
                Skills
              </label>

              <textarea
                rows={4}
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="HTML, CSS, JavaScript, React, Node.js, Tailwind CSS..."
                className="
                  w-full
                  rounded-2xl
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-white/10
                  p-5
                  text-white
                  placeholder-gray-500
                  outline-none
                  resize-none
                  transition-all
                  duration-300
                  focus:border-cyan-400
                  focus:ring-2
                  focus:ring-cyan-400/20
                  focus:bg-cyan-500/5
                  hover:border-cyan-500/40
                "
              />

              <p className="text-gray-500 text-sm mt-2">
                Separate your skills using commas.
              </p>
            </div>

            {/* ================= EDUCATION ================= */}

            <div className="mb-8">
              <label className="block mb-3 text-sm font-semibold text-gray-300">
                Education
              </label>

              <textarea
                rows={5}
                name="education"
                value={formData.education}
                onChange={handleChange}
                placeholder="Diploma in Computer Engineering..."
                className="
                  w-full
                  rounded-2xl
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-white/10
                  p-5
                  text-white
                  placeholder-gray-500
                  outline-none
                  resize-none
                  transition-all
                  duration-300
                  focus:border-cyan-400
                  focus:ring-2
                  focus:ring-cyan-400/20
                  focus:bg-cyan-500/5
                  hover:border-cyan-500/40
                "
              />
            </div>

            {/* ================= EXPERIENCE ================= */}

            <div className="mb-8">
              <label className="block mb-3 text-sm font-semibold text-gray-300">
                Experience
              </label>

              <textarea
                rows={5}
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Frontend Developer Intern..."
                className="
                  w-full
                  rounded-2xl
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-white/10
                  p-5
                  text-white
                  placeholder-gray-500
                  outline-none
                  resize-none
                  transition-all
                  duration-300
                  focus:border-cyan-400
                  focus:ring-2
                  focus:ring-cyan-400/20
                  focus:bg-cyan-500/5
                  hover:border-cyan-500/40
                "
              />
            </div>

            {/* ================= CERTIFICATIONS ================= */}

            <div>
              <label className="block mb-3 text-sm font-semibold text-gray-300">
                Certifications
              </label>

              <textarea
                rows={4}
                name="certifications"
                value={formData.certifications}
                onChange={handleChange}
                placeholder="AWS Cloud Practitioner, Google Cybersecurity..."
                className="
                  w-full
                  rounded-2xl
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-white/10
                  p-5
                  text-white
                  placeholder-gray-500
                  outline-none
                  resize-none
                  transition-all
                  duration-300
                  focus:border-cyan-400
                  focus:ring-2
                  focus:ring-cyan-400/20
                  focus:bg-cyan-500/5
                  hover:border-cyan-500/40
                "
              />
            </div>
          </motion.div>
          {/* =====================================================
              PROJECTS
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`
              rounded-3xl
              p-8
              border
              ${getBorder()}
              ${
                template === "cyber"
                  ? "bg-green-950/30"
                  : template === "ai"
                    ? "bg-purple-950/40"
                    : template === "frontend"
                      ? "bg-cyan-950/40"
                      : template === "fullstack"
                        ? "bg-blue-950/40"
                      : template === "cloud"
                        ? "bg-indigo-950/40"
                        : template === "mobile"
                          ? "bg-emerald-950/40"
                            : "bg-slate-900"
              }
            `}
          >
            {/* ================= PROJECT HEADER ================= */}

            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-5">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-cyan-500/10
                    border
                    border-cyan-500/30
                    flex
                    items-center
                    justify-center
                    text-2xl
                  "
                >
                  🚀
                </motion.div>

                <div>
                  <h2 className="text-3xl font-bold">Projects</h2>

                  <p className="text-gray-400 mt-1">
                    Showcase your best work and achievements
                  </p>
                </div>
              </div>

              {/* ================= ADD PROJECT ================= */}

              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={addProject}
                className="
                  px-6
                  py-3
                  rounded-2xl
                  bg-linear-to-r
                  from-cyan-500
                  to-blue-600
                  text-black
                  font-bold
                  shadow-lg
                  shadow-cyan-500/20
                  hover:shadow-cyan-500/40
                  transition-all
                  duration-300
                "
              >
                + Add Project
              </motion.button>
            </div>

            {/* ================= PROJECT LIST ================= */}

            {formData.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="
                  mb-10
                  rounded-3xl
                  bg-white/5
                  backdrop-blur-xl
                  p-7
                  border
                  border-white/10
                  hover:border-cyan-500/40
                  transition-all
                  duration-300
                  shadow-xl
                "
              >
                {/* ================= PROJECT TOP ================= */}

                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        w-10
                        h-10
                        rounded-xl
                        bg-cyan-500/10
                        border
                        border-cyan-500/20
                        flex
                        items-center
                        justify-center
                      "
                    >
                      🚀
                    </div>

                    <h3 className="text-xl font-bold text-white">
                      Project {index + 1}
                    </h3>
                  </div>

                  {/* ================= REMOVE PROJECT ================= */}

                  {formData.projects.length > 1 && (
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => removeProject(index)}
                      className="
                        px-4
                        py-2
                        rounded-xl
                        bg-red-500/10
                        border
                        border-red-500/30
                        text-red-400
                        hover:bg-red-500
                        hover:text-white
                        transition-all
                        duration-300
                      "
                    >
                      🗑 Remove
                    </motion.button>
                  )}
                </div>

                {/* ================= NAME + TECHNOLOGIES ================= */}

                <div className="grid md:grid-cols-2 gap-6">
                  {/* PROJECT NAME */}

                  <div>
                    <label className="block mb-3 text-sm font-semibold text-gray-300">
                      Project Name
                    </label>

                    <input
                      type="text"
                      value={project.name}
                      onChange={(e) =>
                        handleProjectChange(index, "name", e.target.value)
                      }
                      placeholder="Portfolio Website"
                      className="
                        w-full
                        rounded-2xl
                        bg-white/5
                        backdrop-blur-xl
                        border
                        border-white/10
                        p-4
                        text-white
                        placeholder-gray-500
                        outline-none
                        transition-all
                        duration-300
                        focus:border-cyan-400
                        focus:ring-2
                        focus:ring-cyan-400/20
                        focus:bg-cyan-500/5
                        hover:border-cyan-500/40
                      "
                    />
                  </div>

                  {/* TECHNOLOGIES */}

                  <div>
                    <label className="block mb-3 text-sm font-semibold text-gray-300">
                      Technologies
                    </label>

                    <input
                      type="text"
                      value={project.tech}
                      onChange={(e) =>
                        handleProjectChange(index, "tech", e.target.value)
                      }
                      placeholder="React, Tailwind CSS, Node.js"
                      className="
                        w-full
                        rounded-2xl
                        bg-white/5
                        backdrop-blur-xl
                        border
                        border-white/10
                        p-4
                        text-white
                        placeholder-gray-500
                        outline-none
                        transition-all
                        duration-300
                        focus:border-cyan-400
                        focus:ring-2
                        focus:ring-cyan-400/20
                        focus:bg-cyan-500/5
                        hover:border-cyan-500/40
                      "
                    />
                  </div>
                </div>

                {/* ================= DESCRIPTION ================= */}

                <div className="mt-6">
                  <label className="block mb-3 text-sm font-semibold text-gray-300">
                    Project Description
                  </label>

                  <textarea
                    rows={5}
                    value={project.description}
                    onChange={(e) =>
                      handleProjectChange(index, "description", e.target.value)
                    }
                    placeholder="Describe your project, its features and what you built..."
                    className="
                      w-full
                      rounded-2xl
                      bg-white/5
                      backdrop-blur-xl
                      border
                      border-white/10
                      p-5
                      text-white
                      placeholder-gray-500
                      outline-none
                      resize-none
                      transition-all
                      duration-300
                      focus:border-cyan-400
                      focus:ring-2
                      focus:ring-cyan-400/20
                      focus:bg-cyan-500/5
                      hover:border-cyan-500/40
                    "
                  />
                </div>

                {/* ================= LINKS ================= */}

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  {/* GITHUB */}

                  <div>
                    <label className="block mb-3 text-sm font-semibold text-gray-300">
                      GitHub Link
                    </label>

                    <input
                      type="text"
                      value={project.github}
                      onChange={(e) =>
                        handleProjectChange(index, "github", e.target.value)
                      }
                      placeholder="https://github.com/username/project"
                      className="
                        w-full
                        rounded-2xl
                        bg-white/5
                        backdrop-blur-xl
                        border
                        border-white/10
                        p-4
                        text-white
                        placeholder-gray-500
                        outline-none
                        transition-all
                        duration-300
                        focus:border-cyan-400
                        focus:ring-2
                        focus:ring-cyan-400/20
                        focus:bg-cyan-500/5
                        hover:border-cyan-500/40
                      "
                    />
                  </div>

                  {/* LIVE DEMO */}

                  <div>
                    <label className="block mb-3 text-sm font-semibold text-gray-300">
                      Live Demo
                    </label>

                    <input
                      type="text"
                      value={project.live}
                      onChange={(e) =>
                        handleProjectChange(index, "live", e.target.value)
                      }
                      placeholder="https://yourproject.com"
                      className="
                        w-full
                        rounded-2xl
                        bg-white/5
                        backdrop-blur-xl
                        border
                        border-white/10
                        p-4
                        text-white
                        placeholder-gray-500
                        outline-none
                        transition-all
                        duration-300
                        focus:border-cyan-400
                        focus:ring-2
                        focus:ring-cyan-400/20
                        focus:bg-cyan-500/5
                        hover:border-cyan-500/40
                      "
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {/* =====================================================
              PORTFOLIO THEME
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              bg-slate-900/80
              backdrop-blur-xl
              rounded-3xl
              p-8
              border
              border-slate-800
            "
          >
            {/* ================= THEME HEADER ================= */}

            <div className="flex items-center gap-5 mb-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-purple-500/10
                  border
                  border-purple-500/30
                  flex
                  items-center
                  justify-center
                  text-2xl
                "
              >
                🎨
              </motion.div>

              <div>
                <h2 className="text-3xl font-bold">Portfolio Theme</h2>

                <p className="text-gray-400 mt-1">
                  Choose the visual style for your portfolio
                </p>
              </div>
            </div>

            {/* ================= THEME OPTIONS ================= */}

            <div className="grid md:grid-cols-3 gap-6">
              {/* ================= BLUE ================= */}

              <label className="cursor-pointer group">
                <input
                  type="radio"
                  name="theme"
                  value="cyan"
                  checked={formData.theme === "cyan"}
                  onChange={handleChange}
                  className="hidden peer"
                />

                <div
                  className="
                    rounded-2xl
                    p-6
                    bg-linear-to-br
                    from-cyan-500
                    to-blue-600
                    text-center
                    font-bold
                    border-2
                    border-transparent
                    group-hover:border-cyan-300
                    group-hover:scale-105
                    peer-checked:border-white
                    transition-all
                    duration-300
                    shadow-lg
                    shadow-cyan-500/20
                  "
                >
                  <div className="text-4xl mb-3">💙</div>

                  <div className="text-lg">Blue Theme</div>

                  <p className="text-sm text-white/70 mt-2">Clean & Modern</p>
                </div>
              </label>

              {/* ================= PURPLE ================= */}

              <label className="cursor-pointer group">
                <input
                  type="radio"
                  name="theme"
                  value="purple"
                  checked={formData.theme === "purple"}
                  onChange={handleChange}
                  className="hidden peer"
                />

                <div
                  className="
                    rounded-2xl
                    p-6
                    bg-linear-to-br
                    from-purple-500
                    to-pink-600
                    text-center
                    font-bold
                    border-2
                    border-transparent
                    group-hover:border-purple-300
                    group-hover:scale-105
                    peer-checked:border-white
                    transition-all
                    duration-300
                    shadow-lg
                    shadow-purple-500/20
                  "
                >
                  <div className="text-4xl mb-3">💜</div>

                  <div className="text-lg">Purple Theme</div>

                  <p className="text-sm text-white/70 mt-2">
                    Creative & Elegant
                  </p>
                </div>
              </label>

              {/* ================= GREEN ================= */}

              <label className="cursor-pointer group">
                <input
                  type="radio"
                  name="theme"
                  value="green"
                  checked={formData.theme === "green"}
                  onChange={handleChange}
                  className="hidden peer"
                />

                <div
                  className="
                    rounded-2xl
                    p-6
                    bg-linear-to-br
                    from-green-500
                    to-emerald-600
                    text-center
                    font-bold
                    border-2
                    border-transparent
                    group-hover:border-green-300
                    group-hover:scale-105
                    peer-checked:border-white
                    transition-all
                    duration-300
                    shadow-lg
                    shadow-green-500/20
                  "
                >
                  <div className="text-4xl mb-3">💚</div>

                  <div className="text-lg">Green Theme</div>

                  <p className="text-sm text-white/70 mt-2">
                    Fresh & Professional
                  </p>
                </div>
              </label>
            </div>
          </motion.div>

          {/* =====================================================
              GENERATE PORTFOLIO
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              flex
              justify-center
              pt-8
              pb-16
            "
          >
            <motion.button
              type="submit"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 45px rgba(34,211,238,0.45)",
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="
                relative
                overflow-hidden
                px-12
                py-5
                rounded-2xl
                bg-linear-to-r
                from-cyan-400
                via-blue-500
                to-purple-600
                text-white
                font-black
                text-xl
                shadow-2xl
                shadow-cyan-500/30
                transition-all
                duration-300
              "
            >
              {/* Animated Shine */}

              <motion.span
                className="
                  absolute
                  inset-0
                  bg-white/20
                "
                initial={{
                  x: "-100%",
                }}
                whileHover={{
                  x: "100%",
                }}
                transition={{
                  duration: 0.7,
                }}
              />

              {/* Button Content */}

              <span
                className="
                  relative
                  z-10
                  flex
                  items-center
                  gap-3
                "
              >
                🚀 Generate My Portfolio
                <motion.span
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                  }}
                  className="text-2xl"
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </motion.div>
        </form>
      </div>
    </div>
  );
}

export default PortfolioForm;
