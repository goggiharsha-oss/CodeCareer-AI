import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import TemplateSelector from "../components/TemplateSelector";
function PortfolioForm() {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState("frontend");
  const template = selectedTemplate;
  const [formData, setFormData] = useState({
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

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...formData.projects];
    updatedProjects[index][field] = value;

    setFormData((prev) => ({
      ...prev,
      projects: updatedProjects,
    }));
  };

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

  const removeProject = (index) => {
    const updatedProjects = [...formData.projects];
    updatedProjects.splice(index, 1);

    setFormData((prev) => ({
      ...prev,
      projects: updatedProjects,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const portfolioData = {
      ...formData,
      template: selectedTemplate,
    };

    localStorage.setItem("portfolioData", JSON.stringify(portfolioData));

    navigate("/portfolio-preview");
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files && files[0]) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          [name]: reader.result,
        }));
      };

      reader.readAsDataURL(files[0]);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <div
      className={`
      min-h-screen
      text-white
      ${
        template === "cyber"
          ? "bg-black"
          : template === "ai"
            ? "bg-linear-to-br from-purple-950 to-slate-950"
            : template === "frontend"
              ? "bg-linear-to-br from-cyan-950 to-slate-950"
              : template === "fullstack"
                ? "bg-linear-to-br from-blue-950 to-slate-950"
                : "bg-slate-950"
      }
    `}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="flex justify-start mb-8">
            <motion.button
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

          <div className="text-center">
            <h1 className="text-5xl font-black">🚀 Portfolio Builder</h1>

            <p className="text-gray-400 mt-5 text-lg">
              Fill your details and generate your professional portfolio.
            </p>
          </div>
        </motion.div>
        <form
          onSubmit={handleSubmit}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.target.tagName !== "TEXTAREA") {
              e.preventDefault();
            }
          }}
          className="space-y-10"
        >
          {/* ================= PERSONAL INFORMATION ================= */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`
  rounded-3xl
  p-8
  border
  ${
    template === "cyber"
      ? "bg-slate-950 border-green-500"
      : template === "ai"
        ? "bg-purple-950/40 border-purple-500"
        : template === "frontend"
          ? "bg-cyan-950/40 border-cyan-500"
          : template === "fullstack"
            ? "bg-blue-950/40 border-blue-500"
            : "bg-slate-900 border-slate-700"
  }
`}
          >
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">
              👤 Personal Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-semibold">Full Name</label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl bg-slate-800 border border-slate-700 p-4 outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">Job Title</label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl bg-slate-800 border border-slate-700 p-4 outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">Email</label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  required
                  className="w-full rounded-xl bg-slate-800 border border-slate-700 p-4 outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">Phone Number</label>

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-slate-800 border border-slate-700 p-4 outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">Location</label>

                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Hyderabad, India"
                  className="w-full rounded-xl bg-slate-800 border border-slate-700 p-4 outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">
                  Personal Website
                </label>

                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://yourwebsite.com"
                  className="w-full rounded-xl bg-slate-800 border border-slate-700 p-4 outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">GitHub</label>

                <input
                  type="text"
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  placeholder="https://github.com/username"
                  className="w-full rounded-xl bg-slate-800 border border-slate-700 p-4 outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">LinkedIn</label>

                <input
                  type="text"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/username"
                  className="w-full rounded-xl bg-slate-800 border border-slate-700 p-4 outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            <div className="mt-8">
              <label className="block mb-2 font-semibold">About Me</label>

              <textarea
                rows={6}
                name="about"
                value={formData.about}
                onChange={handleChange}
                placeholder="Write about yourself..."
                className="w-full rounded-xl bg-slate-800 border border-slate-700 p-4 outline-none resize-none focus:border-cyan-500"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <label className="block mb-3 font-semibold">
                  🖼 Profile Image
                </label>

                <input
                  type="file"
                  name="profileImage"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full bg-slate-800 rounded-xl p-4 border border-slate-700"
                />
              </div>

              <div>
                <label className="block mb-3 font-semibold">📄 Resume</label>

                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  className="w-full bg-slate-800 rounded-xl p-4 border border-slate-700"
                />
              </div>
            </div>
          </motion.div>

          <TemplateSelector
            selectedTemplate={selectedTemplate}
            setSelectedTemplate={setSelectedTemplate}
          />
          {/* ================= SKILLS / EDUCATION ================= */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`
  rounded-3xl
  p-8
  border
  ${
    template === "cyber"
      ? "bg-green-950/30 border-green-500"
      : template === "ai"
        ? "bg-purple-950/30 border-purple-500"
        : template === "frontend"
          ? "bg-cyan-950/30 border-cyan-500"
          : template === "fullstack"
            ? "bg-blue-950/30 border-blue-500"
            : "bg-slate-900 border-slate-800"
  }
`}
          >
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">
              🎓 Education & Skills
            </h2>

            {/* Skills */}

            <div className="mb-8">
              <label className="block mb-2 font-semibold">Skills</label>

              <textarea
                rows={4}
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="HTML, CSS, JavaScript, React, Node.js, Tailwind CSS..."
                className="w-full rounded-xl bg-slate-800 border border-slate-700 p-4 outline-none resize-none focus:border-cyan-500"
              />
            </div>

            {/* Education */}

            <div className="mb-8">
              <label className="block mb-2 font-semibold">Education</label>

              <textarea
                rows={5}
                name="education"
                value={formData.education}
                onChange={handleChange}
                placeholder="Diploma in Computer Engineering..."
                className="w-full rounded-xl bg-slate-800 border border-slate-700 p-4 outline-none resize-none focus:border-cyan-500"
              />
            </div>

            {/* Experience */}

            <div className="mb-8">
              <label className="block mb-2 font-semibold">Experience</label>

              <textarea
                rows={5}
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Frontend Developer Intern..."
                className="w-full rounded-xl bg-slate-800 border border-slate-700 p-4 outline-none resize-none focus:border-cyan-500"
              />
            </div>

            {/* Certifications */}

            <div>
              <label className="block mb-2 font-semibold">Certifications</label>

              <textarea
                rows={4}
                name="certifications"
                value={formData.certifications}
                onChange={handleChange}
                placeholder="AWS Cloud Practitioner, Google Cybersecurity..."
                className="w-full rounded-xl bg-slate-800 border border-slate-700 p-4 outline-none resize-none focus:border-cyan-500"
              />
            </div>
          </motion.div>
          {/* ================= PROJECTS ================= */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`
  rounded-3xl
  p-8
  border
  ${
    template === "cyber"
      ? "bg-green-950/30 border-green-500"
      : template === "ai"
        ? "bg-purple-950/30 border-purple-500"
        : template === "frontend"
          ? "bg-cyan-950/30 border-cyan-500"
          : template === "fullstack"
            ? "bg-blue-950/30 border-blue-500"
            : "bg-slate-900 border-slate-800"
  }
`}
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-cyan-400">🚀 Projects</h2>

              <button
                type="button"
                onClick={addProject}
                className="px-5 py-3 rounded-xl bg-cyan-500 text-black font-bold hover:scale-105 transition"
              >
                + Add Project
              </button>
            </div>

            {formData.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mb-10 rounded-2xl bg-slate-800 p-6 border border-slate-700"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold">Project {index + 1}</h3>

                  {formData.projects.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeProject(index)}
                      className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700"
                    >
                      Remove
                    </button>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 font-semibold">
                      Project Name
                    </label>

                    <input
                      type="text"
                      value={project.name}
                      onChange={(e) =>
                        handleProjectChange(index, "name", e.target.value)
                      }
                      placeholder="Portfolio Website"
                      className="w-full rounded-xl bg-slate-900 border border-slate-700 p-4 outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-semibold">
                      Technologies
                    </label>

                    <input
                      type="text"
                      value={project.tech}
                      onChange={(e) =>
                        handleProjectChange(index, "tech", e.target.value)
                      }
                      placeholder="React, Tailwind, Node.js"
                      className="w-full rounded-xl bg-slate-900 border border-slate-700 p-4 outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block mb-2 font-semibold">
                    Description
                  </label>

                  <textarea
                    rows={5}
                    value={project.description}
                    onChange={(e) =>
                      handleProjectChange(index, "description", e.target.value)
                    }
                    placeholder="Describe your project..."
                    className="w-full rounded-xl bg-slate-900 border border-slate-700 p-4 resize-none outline-none focus:border-cyan-500"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block mb-2 font-semibold">
                      GitHub Link
                    </label>

                    <input
                      type="text"
                      value={project.github}
                      onChange={(e) =>
                        handleProjectChange(index, "github", e.target.value)
                      }
                      placeholder="https://github.com/..."
                      className="w-full rounded-xl bg-slate-900 border border-slate-700 p-4 outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-semibold">
                      Live Demo
                    </label>

                    <input
                      type="text"
                      value={project.live}
                      onChange={(e) =>
                        handleProjectChange(index, "live", e.target.value)
                      }
                      placeholder="https://..."
                      className="w-full rounded-xl bg-slate-900 border border-slate-700 p-4 outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {/* ================= THEME ================= */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900 rounded-3xl p-8 border border-slate-800"
          >
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">
              🎨 Portfolio Theme
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="theme"
                  value="cyan"
                  defaultChecked
                  className="hidden"
                />

                <div className="rounded-2xl p-6 bg-linear-to-r from-cyan-500 to-blue-600 text-center font-bold hover:scale-105 transition">
                  💙 Blue Theme
                </div>
              </label>

              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="theme"
                  value="purple"
                  className="hidden"
                />

                <div className="rounded-2xl p-6 bg-linear-to-r from-purple-500 to-pink-600 text-center font-bold hover:scale-105 transition">
                  💜 Purple Theme
                </div>
              </label>

              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="theme"
                  value="green"
                  className="hidden"
                />

                <div className="rounded-2xl p-6 bg-linear-to-r from-green-500 to-emerald-600 text-center font-bold hover:scale-105 transition">
                  💚 Green Theme
                </div>
              </label>
            </div>
          </motion.div>

          {/* ================= SUBMIT ================= */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex justify-center pt-8"
          >
            <motion.button
              type="submit"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                px-12
                py-5
                rounded-2xl
                bg-linear-to-r
                from-cyan-500
                to-blue-600
                text-black
                font-black
                text-xl
                shadow-xl
                shadow-cyan-500/30
              "
            >
              🚀 Generate Portfolio
            </motion.button>
          </motion.div>
        </form>
      </div>
    </div>
  );
}

export default PortfolioForm;
