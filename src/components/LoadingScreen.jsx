import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const loadingMessages = [
  "Preparing your programming career...",
  "Loading programming languages...",
  "Fetching career roadmaps...",
  "Analyzing salary insights...",
  "Almost ready...",
];

function LoadingScreen() {
  const { darkMode } = useTheme();

  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    const messageTimer = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 1200);

    return () => {
      clearInterval(progressTimer);
      clearInterval(messageTimer);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden ${
        darkMode
          ? "bg-slate-950"
          : "bg-gradient-to-br from-cyan-50 via-white to-slate-100"
      }`}
    >
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute w-[450px] h-[450px] rounded-full bg-cyan-500/20 blur-3xl"
      />

      {/* Floating Icons */}
      {[
        { icon: "🐍", top: "18%", left: "18%" },
        { icon: "☕", top: "22%", right: "18%" },
        { icon: "⚛️", bottom: "22%", left: "20%" },
        { icon: "🟨", bottom: "18%", right: "18%" },
        { icon: "⚙️", top: "50%", left: "10%" },
        { icon: "🤖", top: "50%", right: "10%" },
      ].map((item, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -18, 0],
            rotate: [0, 6, -6, 0],
          }}
          transition={{
            duration: 3 + index * 0.3,
            repeat: Infinity,
          }}
          className="absolute text-3xl opacity-30 select-none"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        className="relative z-10 text-center px-6"
      >
        {/* Robot */}
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
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
          className={`mt-6 text-5xl font-extrabold ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          CodeCareer AI
        </motion.h1>

        {/* Message */}
        <motion.p
          key={messageIndex}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className={`mt-4 text-lg ${
            darkMode ? "text-gray-400" : "text-slate-600"
          }`}
        >
          {loadingMessages[messageIndex]}
        </motion.p>

        {/* Spinner */}
        <div className="mt-8 flex justify-center">
          <div className="h-14 w-14 rounded-full border-4 border-cyan-500 border-t-transparent animate-spin"></div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 w-72 mx-auto">
          <div
            className={`h-2 rounded-full overflow-hidden ${
              darkMode ? "bg-slate-800" : "bg-gray-200"
            }`}
          >
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
              animate={{
                width: `${progress}%`,
              }}
              transition={{
                duration: 0.2,
              }}
            />
          </div>

          <p className="mt-3 text-cyan-400 font-semibold">
            {progress}%
          </p>
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
          className="mt-5 text-sm text-cyan-400"
        >
          Please wait while we prepare your experience...
        </motion.p>

        {/* Version */}
        <p
          className={`mt-8 text-xs ${
            darkMode ? "text-gray-600" : "text-gray-400"
          }`}
        >
          Version 1.0.0
        </p>
      </motion.div>
    </div>
  );
}

export default LoadingScreen;