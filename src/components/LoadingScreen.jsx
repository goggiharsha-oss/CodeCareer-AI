import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const loadingMessages = [
  "Initializing AI Engine...",
  "Loading Career Roadmaps...",
  "Preparing Portfolio Builder...",
  "Analyzing Skill Paths...",
  "Optimizing Experience...",
  "Almost Ready...",
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
        return prev + 1;
      });
    }, 25);

    const messageTimer = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 1000);

    return () => {
      clearInterval(progressTimer);
      clearInterval(messageTimer);
    };
  }, []);
  return (
    <div
      className={`fixed inset-0 overflow-hidden flex items-center justify-center ${
        darkMode
          ? "bg-slate-950"
          : "bg-linear-to-br from-cyan-50 via-white to-slate-100"
      }`}
    >
      {/* Animated Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.25, 0.55, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
        absolute
        w-[175]
        h-[175]
        rounded-full
        bg-cyan-500/20
        blur-[180px]
      "
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.4, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
        absolute
        top-0
        right-0
        w-[125]
        h-[125]
        rounded-full
        bg-blue-500/20
        blur-[150px]
      "
      />

      {/* Floating Particles */}

      {Array.from({ length: 18 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          className="
          absolute
          w-2
          h-2
          rounded-full
          bg-cyan-400
        "
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Glass Card */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
        relative
        z-10
        w-[92%]
        max-w-md
        rounded-[35px]
        border
        border-cyan-400/20
        bg-white/5
        backdrop-blur-2xl
        shadow-[0_0_70px_rgba(6,182,212,0.25)]
        px-10
        py-12
        text-center
      "
      >
        {/* Animated Border */}

        <motion.div
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="
          absolute
          inset-0
          rounded-[35px]
          border
          border-cyan-400/30
          pointer-events-none
        "
        />
        {/* Dual Ring Loader */}

        <div className="relative flex justify-center items-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
            w-28
            h-28
            rounded-full
            border-[5px]
            border-cyan-500
            border-t-transparent
          "
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
            absolute
            w-20
            h-20
            rounded-full
            border-[5px]
            border-blue-400
            border-b-transparent
          "
          />

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="
            absolute
            text-4xl
          "
          >
            🤖
          </motion.div>
        </div>

        {/* Title */}

        <motion.h1
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className={`
          mt-8
          text-4xl
          font-black
          ${darkMode ? "text-white" : "text-slate-900"}
        `}
        >
          CodeCareer AI
        </motion.h1>

        {/* Loading Message */}

        <motion.p
          key={messageIndex}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-5 text-cyan-400 font-medium"
        >
          {loadingMessages[messageIndex]}
        </motion.p>

        {/* Progress */}

        <div className="mt-8">
          <div
            className={`
            h-3
            rounded-full
            overflow-hidden
            ${darkMode ? "bg-slate-800" : "bg-slate-300"}
          `}
          >
            <motion.div
              className="
              h-full
              rounded-full
              bg-linear-to-r
              from-cyan-400
              via-blue-500
              to-cyan-400
            "
              animate={{
                width: `${progress}%`,
              }}
              transition={{
                duration: 0.2,
              }}
            />
          </div>

          <p className="mt-4 text-cyan-400 font-bold text-lg">{progress}%</p>
        </div>

        {/* Footer */}

        <motion.p
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="mt-6 text-sm text-slate-400"
        >
          Building your future...
        </motion.p>

        <p className="mt-8 text-xs text-slate-500">Version 2.0.0</p>
      </motion.div>
    </div>
  );
}

export default LoadingScreen;
