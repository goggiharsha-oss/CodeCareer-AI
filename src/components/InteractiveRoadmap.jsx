import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Map, ArrowRight, CheckCircle2, Layers, Code2 } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { playClick } from "../utils/playClick";
import { careerTracks, languageTracks } from "../data/roadmaps";

function InteractiveRoadmap() {
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  const [mode, setMode] = useState("career");
  const [activeKey, setActiveKey] = useState(careerTracks[0].key);

  const tracks = mode === "career" ? careerTracks : languageTracks;
  const activeTrack =
    tracks.find((t) => t.key === activeKey) || tracks[0];

  const switchMode = (nextMode) => {
    playClick();
    setMode(nextMode);
    const nextTracks = nextMode === "career" ? careerTracks : languageTracks;
    setActiveKey(nextTracks[0].key);
  };

  const selectTrack = (key) => {
    playClick();
    setActiveKey(key);
  };

  return (
    <section
      id="roadmap"
      className={`relative overflow-hidden px-6 py-24 transition-colors duration-700 ${
        darkMode ? "bg-[#020617] text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <motion.div
        animate={{
          x: [-160, 140, -160],
          y: [-60, 60, -60],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[6%] top-[8%] h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[100px]"
      />

      <motion.div
        animate={{
          x: [120, -120, 120],
          y: [60, -60, 60],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[4%] bottom-[6%] h-[460px] w-[460px] rounded-full bg-violet-600/20 blur-[110px]"
      />

      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34,211,238,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,211,238,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* HEADING */}

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-4 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/5 px-4 py-1.5 text-xs font-bold tracking-[0.18em] text-cyan-400">
            <Map size={13} />
            STEP-BY-STEP GUIDANCE
          </div>

          <h2 className="text-4xl font-black tracking-tight md:text-5xl">
            🗺️ Interactive Learning Roadmap
          </h2>

          <p
            className={`mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Pick a career path or a programming language and follow a clear,
            step-by-step roadmap built to get you job-ready.
          </p>
        </motion.div>

        {/* MODE SWITCH */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 flex justify-center"
        >
          <div
            className={`inline-flex rounded-2xl border p-1.5 backdrop-blur-xl ${
              darkMode
                ? "border-white/10 bg-white/[0.04]"
                : "border-slate-200 bg-white"
            }`}
          >
            <button
              onClick={() => switchMode("career")}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                mode === "career"
                  ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20"
                  : darkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Layers size={16} />
              Career Paths
            </button>

            <button
              onClick={() => switchMode("language")}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                mode === "language"
                  ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20"
                  : darkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Code2 size={16} />
              Languages
            </button>
          </div>
        </motion.div>

        {/* TRACK CHIPS */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {tracks.map((track) => (
            <button
              key={track.key}
              onClick={() => selectTrack(track.key)}
              className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-bold transition-all duration-300 ${
                activeKey === track.key
                  ? "border-transparent bg-gradient-to-r from-cyan-400 to-violet-500 text-white shadow-[0_8px_25px_rgba(34,211,238,0.3)] scale-105"
                  : darkMode
                    ? "border-white/10 bg-white/[0.03] text-gray-300 hover:border-cyan-400/30 hover:text-cyan-300"
                    : "border-slate-200 bg-white text-slate-700 hover:border-cyan-300 hover:text-cyan-700"
              }`}
            >
              <span className="text-base leading-none">{track.icon}</span>
              {track.name}
            </button>
          ))}
        </motion.div>

        {/* =====================================================
            TIMELINE
        ===================================================== */}

        <div className="relative mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${mode}-${activeKey}`}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
            >
              {/* TRACK HEADER CARD */}

              <div
                className={`mb-10 flex flex-col items-center gap-4 rounded-3xl border p-8 text-center backdrop-blur-2xl sm:flex-row sm:text-left ${
                  darkMode
                    ? "border-cyan-400/15 bg-slate-900/70"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 text-3xl shadow-lg shadow-cyan-500/20">
                  {activeTrack.icon}
                </div>

                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                    {mode === "career" ? "Career Roadmap" : "Language Roadmap"}
                  </p>
                  <h3 className="mt-1 text-2xl font-black tracking-tight">
                    {activeTrack.name}
                  </h3>
                  <p
                    className={`mt-1 text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {activeTrack.steps.length} guided steps to get you started
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => {
                    playClick();
                    navigate(
                      mode === "career"
                        ? `/roadmap/${activeTrack.name}`
                        : activeTrack.route,
                    );
                  }}
                  className="flex flex-shrink-0 items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:shadow-[0_12px_35px_rgba(34,211,238,0.35)]"
                >
                  {mode === "career" ? "Open Full Roadmap" : "Explore Language"}
                  <ArrowRight size={16} />
                </motion.button>
              </div>

              {/* =====================================================
                  DESKTOP HORIZONTAL TIMELINE
              ===================================================== */}

              <div className="hidden md:block">
                <div className="relative">
                  <div
                    className={`absolute left-0 right-0 top-7 h-[3px] rounded-full ${
                      darkMode ? "bg-white/10" : "bg-slate-200"
                    }`}
                  />
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute left-0 top-7 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 shadow-[0_0_12px_rgba(34,211,238,0.6)]"
                  />

                  <div
                    className="relative grid gap-4"
                    style={{
                      gridTemplateColumns: `repeat(${activeTrack.steps.length}, minmax(0, 1fr))`,
                    }}
                  >
                    {activeTrack.steps.map((step, index) => (
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.12, duration: 0.5 }}
                        className="flex flex-col items-center text-center"
                      >
                        <motion.div
                          whileHover={{ scale: 1.15, rotate: 6 }}
                          className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 text-lg font-black text-white shadow-[0_10px_25px_rgba(34,211,238,0.35)]"
                        >
                          {index + 1}
                          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-cyan-400/25" />
                        </motion.div>

                        <div
                          className={`mt-4 w-full rounded-2xl border p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 ${
                            darkMode
                              ? "border-white/10 bg-white/[0.04]"
                              : "border-slate-200 bg-white"
                          }`}
                        >
                          <p
                            className={`text-[11px] font-bold uppercase tracking-wide ${
                              darkMode ? "text-cyan-400" : "text-cyan-600"
                            }`}
                          >
                            Step {index + 1}
                          </p>
                          <p className="mt-1.5 text-sm font-bold leading-snug">
                            {step}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* =====================================================
                  MOBILE VERTICAL TIMELINE
              ===================================================== */}

              <div className="block md:hidden">
                <div className="relative pl-8">
                  <div
                    className={`absolute left-[22px] top-2 bottom-2 w-[3px] rounded-full ${
                      darkMode ? "bg-white/10" : "bg-slate-200"
                    }`}
                  />
                  <motion.div
                    initial={{ height: "0%" }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute left-[22px] top-2 w-[3px] rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-violet-500"
                  />

                  <div className="space-y-6">
                    {activeTrack.steps.map((step, index) => (
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.45 }}
                        className="relative flex items-start gap-4"
                      >
                        <div className="relative z-10 -ml-8 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 text-sm font-black text-white shadow-[0_8px_20px_rgba(34,211,238,0.35)]">
                          {index + 1}
                        </div>

                        <div
                          className={`flex-1 rounded-2xl border p-4 backdrop-blur-xl ${
                            darkMode
                              ? "border-white/10 bg-white/[0.04]"
                              : "border-slate-200 bg-white"
                          }`}
                        >
                          <p
                            className={`text-[11px] font-bold uppercase tracking-wide ${
                              darkMode ? "text-cyan-400" : "text-cyan-600"
                            }`}
                          >
                            Step {index + 1}
                          </p>
                          <p className="mt-1 text-sm font-bold leading-snug">
                            {step}
                          </p>
                        </div>
                      </motion.div>
                    ))}

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: activeTrack.steps.length * 0.1,
                        duration: 0.45,
                      }}
                      className="relative flex items-start gap-4"
                    >
                      <div className="relative z-10 -ml-8 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white shadow-[0_8px_20px_rgba(34,197,94,0.35)]">
                        <CheckCircle2 size={18} />
                      </div>
                      <div
                        className={`flex-1 rounded-2xl border p-4 backdrop-blur-xl ${
                          darkMode
                            ? "border-green-400/20 bg-green-500/[0.06]"
                            : "border-green-200 bg-green-50"
                        }`}
                      >
                        <p className="text-sm font-bold">
                          🎉 Job Ready — Start Applying!
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default InteractiveRoadmap;
