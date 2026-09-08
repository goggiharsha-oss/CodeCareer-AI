import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Code2 } from "lucide-react";
import {
  ExternalLinkIcon,
  GithubIcon,
  StarIcon,
  EyeIcon,
  RocketIcon,
} from "./icons/CustomIcons";

// ================= DATA =================

const CATEGORIES = ["All", "Web App", "AI / ML", "Mobile", "Cloud"];

const PROJECTS = [
  {
    id: 1,
    title: "NeuraChat AI",
    category: "AI / ML",
    description:
      "A conversational AI assistant with real-time streaming responses, context memory and multi-language support.",
    tech: ["Python", "TensorFlow", "React", "FastAPI"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    color: "from-green-500 to-cyan-600",
    stars: 482,
    views: "12.4k",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 2,
    title: "CloudSync Dashboard",
    category: "Cloud",
    description:
      "Multi-cloud resource monitoring dashboard with live cost analytics across AWS, Azure and GCP.",
    tech: ["React", "AWS", "Node.js", "Recharts"],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    color: "from-sky-500 to-indigo-600",
    stars: 315,
    views: "8.1k",
    github: "#",
    live: "#",
    featured: false,
  },
  {
    id: 3,
    title: "ShopWave E-Commerce",
    category: "Web App",
    description:
      "Full-stack e-commerce platform with cart, payments, admin panel and real-time order tracking.",
    tech: ["MERN", "Stripe", "Redux", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
    color: "from-purple-500 to-pink-600",
    stars: 601,
    views: "19.7k",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 4,
    title: "FitTrack Mobile",
    category: "Mobile",
    description:
      "Cross-platform fitness tracker with workout plans, progress charts and social challenges.",
    tech: ["React Native", "Firebase", "Expo"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    color: "from-emerald-500 to-cyan-500",
    stars: 274,
    views: "6.9k",
    github: "#",
    live: "#",
    featured: false,
  },
  {
    id: 5,
    title: "SecureVault",
    category: "Web App",
    description:
      "Zero-knowledge password manager with end-to-end encryption and biometric unlock.",
    tech: ["React", "Node.js", "AES-256"],
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    color: "from-red-500 to-orange-500",
    stars: 398,
    views: "10.2k",
    github: "#",
    live: "#",
    featured: false,
  },
  {
    id: 6,
    title: "VisionScan ML",
    category: "AI / ML",
    description:
      "Real-time object detection and image classification pipeline deployed at the edge.",
    tech: ["PyTorch", "OpenCV", "Docker"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    color: "from-cyan-500 to-blue-600",
    stars: 356,
    views: "9.5k",
    github: "#",
    live: "#",
    featured: false,
  },
];

// ================= PROJECT CARD =================

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -10;
    const rotateY = ((x / rect.width) - 0.5) * 10;
    setTilt({ x: rotateX, y: rotateY });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      exit={{ opacity: 0, y: -30, scale: 0.95 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setTilt({ x: 0, y: 0 });
      }}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      style={{ transformStyle: "preserve-3d", perspective: 1200 }}
      className={`
        group relative overflow-hidden rounded-[28px] border
        bg-white/[0.035] backdrop-blur-2xl transition-colors duration-500
        ${
          hovered
            ? "border-cyan-400/40 shadow-[0_25px_80px_rgba(34,211,238,0.18)]"
            : "border-white/10"
        }
      `}
    >
      {/* animated glow border sweep */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-[28px] opacity-0 group-hover:opacity-100"
        style={{
          background: `linear-gradient(120deg, transparent, rgba(34,211,238,0.35), transparent)`,
          backgroundSize: "200% 200%",
        }}
        animate={hovered ? { backgroundPosition: ["0% 0%", "200% 200%"] } : {}}
        transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
      />

      {/* FEATURED badge */}
      {project.featured && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 + 0.3, duration: 0.4 }}
          className="absolute left-5 top-5 z-20 flex items-center gap-1.5 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1.5 text-xs font-bold text-yellow-300 backdrop-blur-xl"
        >
          <motion.span
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles size={12} />
          </motion.span>
          Featured
        </motion.div>
      )}

      {/* IMAGE */}
      <div className="relative h-56 overflow-hidden" style={{ transform: "translateZ(30px)" }}>
        <motion.img
          src={project.image}
          alt={project.title}
          animate={{ scale: hovered ? 1.12 : 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h-full w-full object-cover"
        />

        <div
          className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-30 mix-blend-overlay`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

        {/* hover overlay actions */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 flex items-center justify-center gap-4 bg-slate-950/50 backdrop-blur-sm"
            >
              <motion.a
                href={project.live}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.05 }}
                whileHover={{ scale: 1.12, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur-xl"
              >
                <ExternalLinkIcon size={18} />
              </motion.a>
              <motion.a
                href={project.github}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.12 }}
                whileHover={{ scale: 1.12, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur-xl"
              >
                <GithubIcon size={18} />
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* stats pill */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          <span className="flex items-center gap-1 rounded-full bg-black/40 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
            <StarIcon size={11} className="text-yellow-400" />
            {project.stars}
          </span>
          <span className="flex items-center gap-1 rounded-full bg-black/40 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
            <EyeIcon size={11} className="text-cyan-300" />
            {project.views}
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 p-6" style={{ transform: "translateZ(20px)" }}>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <span
            className={`rounded-full bg-gradient-to-r ${project.color} px-3 py-1 text-[11px] font-bold text-white`}
          >
            {project.category}
          </span>
        </div>

        <p className="mt-3 text-sm leading-6 text-gray-400">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-gray-300"
            >
              {t}
            </span>
          ))}
        </div>

        <motion.a
          href={project.live}
          whileHover={{ x: 4 }}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-cyan-400"
        >
          View Project
          <ArrowRight size={15} />
        </motion.a>
      </div>
    </motion.div>
  );
}

// ================= MAIN SECTION =================

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section
      id="featured-projects"
      className="relative mx-auto max-w-7xl overflow-hidden px-6 py-28"
    >
      {/* BACKGROUND GLOW */}
      <motion.div
        animate={{ x: [0, 90, 0], y: [0, -50, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]"
      />
      <motion.div
        animate={{ x: [0, -70, 0], y: [0, 60, 0], scale: [1.1, 0.95, 1.1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-40 bottom-0 h-[480px] w-[480px] rounded-full bg-purple-600/10 blur-[140px]"
      />

      {/* moving grid */}
      <motion.div
        animate={{ backgroundPosition: ["0px 0px", "45px 45px"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(34,211,238,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.25) 1px, transparent 1px)`,
          backgroundSize: "45px 45px",
        }}
      />

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-1.5 text-sm font-semibold tracking-widest text-cyan-400"
        >
          <RocketIcon size={16} />
          SHOWCASE
        </motion.span>

        <h2 className="mt-5 text-4xl font-black md:text-5xl">
          Featured
          <span className="text-cyan-400"> Projects</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
          Real portfolios built by our community — explore what you can
          create with CodeCareer AI.
        </p>
      </motion.div>

      {/* CATEGORY FILTER */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative z-10 mt-10 flex flex-wrap justify-center gap-3"
      >
        {CATEGORIES.map((cat) => {
          const active = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`
                relative flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold
                transition-colors duration-300
                ${
                  active
                    ? "border-transparent text-white"
                    : "border-white/10 text-gray-400 hover:border-cyan-400/30 hover:text-cyan-300"
                }
              `}
            >
              {active && (
                <motion.span
                  layoutId="project-tab-pill"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
                />
              )}
              <Code2 size={14} className="relative z-10" />
              <span className="relative z-10">{cat}</span>
            </button>
          );
        })}
      </motion.div>

      {/* PROJECT GRID */}
      <div className="relative z-10 mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative z-10 mt-16 text-center"
      >
        <motion.a
          href="/portfolio-form"
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.96 }}
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-9 py-4 font-black text-white shadow-xl transition hover:shadow-2xl"
        >
          🚀 Build Your Own Showcase
          <ArrowRight size={18} />
        </motion.a>
      </motion.div>
    </section>
  );
}
