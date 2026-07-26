import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer
      className={`py-10 border-t transition-colors duration-500 ${
        darkMode
          ? "bg-slate-900 border-slate-800 text-white"
          : "bg-white border-gray-200 text-slate-900"
      }`}
    >

      <motion.div
        initial={{
          opacity: 0,
          y: 30
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: 0.6
        }}
        className="max-w-7xl mx-auto px-6 text-center"
      >

        <h2 className="text-3xl font-bold text-cyan-500 hover:scale-105 transition">
          CodeCareer AI
        </h2>


        <p
          className={`mt-3 ${
            darkMode
              ? "text-gray-400"
              : "text-slate-600"
          }`}
        >
          Explore programming languages, career paths, skills and salary
          insights.
        </p>


        <div
          className={`flex flex-wrap justify-center gap-6 mt-6 ${
            darkMode
              ? "text-gray-400"
              : "text-slate-600"
          }`}
        >

          <a
            href="#languages"
            className="hover:text-cyan-500 transition"
          >
            Languages
          </a>


          <a
            href="#careers"
            className="hover:text-cyan-500 transition"
          >
            Roadmaps
          </a>


          <a
            href="#careers"
            className="hover:text-cyan-500 transition"
          >
            Careers
          </a>


          <a
            href="#salary"
            className="hover:text-cyan-500 transition"
          >
            Salary
          </a>

        </div>



        <div
          className={`mt-8 pt-6 border-t ${
            darkMode
              ? "border-slate-700"
              : "border-gray-200"
          }`}
        >

          <p
            className={
              darkMode
                ? "text-gray-500"
                : "text-slate-500"
            }
          >
            © 2026 CodeCareer AI. All Rights Reserved.
          </p>


          <p
            className={`mt-2 ${
              darkMode
                ? "text-gray-500"
                : "text-slate-500"
            }`}
          >
            Built with React + Tailwind CSS 🚀
          </p>

        </div>

      </motion.div>

    </footer>
  );
}

export default Footer;