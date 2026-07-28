import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

function LoadingScreen() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-colors duration-500 ${
        darkMode
          ? "bg-slate-950"
          : "bg-gradient-to-br from-cyan-50 via-white to-slate-100"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        {/* Animated Robot */}
        <motion.div
          animate={{
            rotate: [0, 8, -8, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="text-7xl"
        >
          🤖
        </motion.div>

        {/* Title */}
        <motion.h1
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className={`mt-6 text-4xl font-extrabold ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          CodeCareer AI
        </motion.h1>

        {/* Subtitle */}
        <p
          className={`mt-3 ${
            darkMode ? "text-gray-400" : "text-slate-600"
          }`}
        >
          Preparing your programming career...
        </p>

        {/* Loader */}
        <div className="mt-8 flex justify-center">
          <div className="h-14 w-14 rounded-full border-4 border-cyan-500 border-t-transparent animate-spin"></div>
        </div>

        {/* Loading Text */}
        <motion.p
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="mt-5 text-cyan-400 font-medium"
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
}

export default LoadingScreen;