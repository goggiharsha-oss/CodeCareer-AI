import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Cropper from "react-easy-crop";
import getCroppedImg from "../utils/cropImage";
import FAQSection from "../components/FAQSection";

const templates = [
  {
    id: "frontend",
    title: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    color: "from-cyan-500 to-blue-600",
    icon: "💻",
  },
  {
    id: "fullstack",
    title: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    color: "from-purple-500 to-pink-600",
    icon: "⚛️",
  },
  {
    id: "ai",
    title: "AI Engineer",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    color: "from-green-500 to-cyan-600",
    icon: "🤖",
  },
  {
    id: "cyber",
    title: "Cyber Security",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    color: "from-red-500 to-orange-500",
    icon: "🛡️",
  },
  {
    id: "cloud",
    title: "Cloud Engineer",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    color: "from-sky-500 to-indigo-600",
    icon: "☁️",
  },
  {
    id: "mobile",
    title: "Mobile Developer",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    color: "from-emerald-500 to-cyan-500",
    icon: "📱",
  },
];

function PortfolioBuilder() {
  const navigate = useNavigate();

  // ================= PROFILE IMAGE =================

  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  // ================= IMAGE CROP =================

  const [crop, setCrop] = useState({
    x: 0,
    y: 0,
  });

  const [zoom, setZoom] = useState(1);
  const [showCrop, setShowCrop] = useState(false);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  // ================= NAME =================

  const [previewName, setPreviewName] = useState("Your Name");
  const [editingName, setEditingName] = useState(false);

  // ================= IMAGE SELECT =================

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const imageUrl = URL.createObjectURL(file);

    setImage(imageUrl);
    setShowCrop(true);
  };

  // ================= NAME CHANGE =================

  const handleNameChange = (event) => {
    setPreviewName(event.target.value);
  };

  // ================= CROP COMPLETE =================

  const onCropComplete = (croppedArea, croppedPixels) => {
    setCroppedAreaPixels(croppedPixels);
  };

  // ================= SAVE CROPPED IMAGE =================

  const handleCropSave = async () => {
    if (!image || !croppedAreaPixels) {
      return;
    }

    try {
      const croppedImage = await getCroppedImg(image, croppedAreaPixels);

      setPreviewImage(croppedImage);
      setShowCrop(false);
    } catch (error) {
      console.error("Image crop failed:", error);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* ================= PREMIUM BACKGROUND ================= */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Cyan Aurora */}

        <motion.div
          animate={{
            x: ["-10%", "12%", "-10%"],
            y: ["-5%", "10%", "-5%"],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
      absolute
      -left-40
      -top-40
      h-[600px]
      w-[600px]
      rounded-full
      bg-cyan-500/15
      blur-[140px]
    "
        />

        {/* Violet Aurora */}

        <motion.div
          animate={{
            x: ["10%", "-15%", "10%"],
            y: ["5%", "-10%", "5%"],
            scale: [1.1, 0.9, 1.1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
      absolute
      right-[-190px]
      top-[25%]
      h-[650px]
      w-[650px]
      rounded-full
      bg-violet-600/10
      blur-[150px]
    "
        />

        {/* Bottom Blue Glow */}

        <motion.div
          animate={{
            x: ["-20%", "20%", "-20%"],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
      absolute
      bottom-[-250px]
      left-[20%]
      h-[500px]
      w-[700px]
      rounded-full
      bg-blue-600/10
      blur-[160px]
    "
        />

        {/* Moving Grid */}

        <motion.div
          animate={{
            backgroundPosition: ["0px 0px", "45px 45px"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
      absolute
      inset-0
      opacity-[0.08]
    "
          style={{
            backgroundImage: `
        linear-gradient(
          rgba(34, 211, 238, 0.25) 1px,
          transparent 1px
        ),
        linear-gradient(
          90deg,
          rgba(34, 211, 238, 0.25) 1px,
          transparent 1px
        )
      `,
            backgroundSize: "45px 45px",
          }}
        />

        {/* ================= ANIMATED RINGS ================= */}

        {/* RING 1 */}

        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
    absolute
    top-[10%]
    right-[8%]
    h-64
    w-64
    rounded-full
    border
    border-cyan-400/20
  "
        >
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
      absolute
      -left-2
      top-1/2
      h-4
      w-4
      -translate-y-1/2
      rounded-full
      bg-cyan-400
      shadow-[0_0_25px_rgba(34,211,238,0.9)]
    "
          />
        </motion.div>

        {/* RING 2 */}

        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
    absolute
    bottom-[8%]
    left-[6%]
    h-80
    w-80
    rounded-full
    border
    border-violet-500/15
  "
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
      absolute
      right-0
      top-1/2
      h-4
      w-4
      -translate-y-1/2
      rounded-full
      bg-violet-400
      shadow-[0_0_25px_rgba(168,85,247,0.9)]
    "
          />
        </motion.div>

        {/* RING 3 — LARGE CENTER ORBIT */}

        <motion.div
          animate={{
            rotate: [0, -360],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
    pointer-events-none
    absolute
    left-1/2
    top-1/2
    h-[700px]
    w-[700px]
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    border
    border-cyan-400/[0.06]
  "
        >
          <div
            className="
      absolute
      left-1/2
      top-0
      h-2
      w-2
      -translate-x-1/2
      rounded-full
      bg-cyan-300
      shadow-[0_0_20px_rgba(34,211,238,0.8)]
    "
          />
        </motion.div>

        {/* RING 4 — SOFT INNER RING */}

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
    pointer-events-none
    absolute
    left-1/2
    top-1/2
    h-[420px]
    w-[420px]
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    border
    border-blue-500/[0.07]
  "
        />
      </div>

      {/* ================= CROP POPUP ================= */}

      {showCrop && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-slate-900 p-6 shadow-2xl">
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl bg-black">
              <Cropper
                image={image}
                crop={crop}
                zoom={zoom}
                aspect={1}
                cropShape="round"
                showGrid={false}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            </div>

            <div className="mt-6">
              <p className="mb-3 text-center font-medium text-gray-300">Zoom</p>

              <input
                type="range"
                min="1"
                max="3"
                step="0.1"
                value={zoom}
                onChange={(event) => {
                  setZoom(Number(event.target.value));
                }}
                className="w-full accent-cyan-400"
              />
            </div>

            <div className="mt-6 flex gap-4">
              <button
                type="button"
                onClick={() => {
                  setShowCrop(false);
                }}
                className="
            flex-1
            rounded-xl
            bg-slate-700
            py-3
            font-semibold
            transition
            hover:bg-slate-600
          "
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleCropSave}
                className="
            flex-1
            rounded-xl
            bg-gradient-to-r
            from-cyan-400
            to-blue-500
            py-3
            font-bold
            text-black
            transition
            hover:scale-[1.02]
          "
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      {/* ================= PORTFOLIO HERO ================= */}

      <section
        id="portfolio-hero"
        className="
    relative
    z-10
    mx-auto
    max-w-7xl
    px-6
    py-20
    lg:px-10
    lg:py-28
  "
      >
        <div
          className="
      grid
      items-center
      gap-16
      lg:grid-cols-[1.05fr_0.95fr]
      lg:gap-20
    "
        >
          {/* ================= LEFT SIDE ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="text-center lg:text-left"
          >
            {/* BACK HOME */}

            <motion.button
              type="button"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => {
                navigate("/");
              }}
              className="
          mb-7
          rounded-2xl
          border
          border-cyan-400/40
          bg-cyan-400/[0.04]
          px-7
          py-3
          font-bold
          text-cyan-300
          backdrop-blur-xl
          transition
          hover:border-cyan-400
          hover:bg-cyan-400/10
          hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
        "
            >
              🏠 Back to Home
            </motion.button>

            {/* BADGE */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
              }}
              className="
          inline-flex
          items-center
          rounded-full
          border
          border-cyan-400/30
          bg-cyan-400/[0.07]
          px-5
          py-2.5
          text-sm
          font-semibold
          text-cyan-300
          shadow-[0_0_25px_rgba(34,211,238,0.12)]
          backdrop-blur-xl
          lg:ml-8
        "
            >
              🚀 Professional Portfolio Builder
            </motion.div>

            {/* HEADING */}

            <h1
              className="
          mt-8
          text-5xl
          font-black
          leading-[1.04]
          tracking-tight
          sm:text-6xl
          lg:text-7xl
        "
            >
              Build Your
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
            block
            bg-gradient-to-r
            from-cyan-400
            via-blue-500
            to-violet-500
            bg-[length:200%_200%]
            bg-clip-text
            text-transparent
          "
              >
                Dream Portfolio
              </motion.span>
            </h1>

            {/* DESCRIPTION */}

            <p
              className="
          mx-auto
          mt-7
          max-w-xl
          text-base
          leading-7
          text-gray-400
          md:text-lg
          lg:mx-0
          lg:text-xl
        "
            >
              Create a beautiful developer portfolio with projects, skills,
              certifications, resume and modern animations. No coding required.
            </p>

            {/* BUTTONS */}

            <div
              className="
          mt-9
          flex
          flex-wrap
          justify-center
          gap-4
          lg:justify-start
        "
            >
              {/* START BUILDING */}

              <motion.button
                type="button"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={() => {
                  navigate("/portfolio-form");
                }}
                className="
            rounded-2xl
            bg-gradient-to-r
            from-cyan-400
            to-blue-500
            px-8
            py-4
            font-bold
            text-white
            shadow-[0_0_30px_rgba(34,211,238,0.2)]
            transition-all
            hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]
          "
              >
                🚀 Start Building
              </motion.button>

              {/* PREVIEW TEMPLATES */}

              <motion.button
                type="button"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={() => {
                  document.getElementById("templates")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="
            rounded-2xl
            border
            border-cyan-400/50
            bg-white/[0.03]
            px-8
            py-4
            font-bold
            text-cyan-300
            backdrop-blur-xl
            transition-all
            hover:bg-cyan-400/10
            hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
          "
              >
                👀 Preview Templates
              </motion.button>
            </div>

            {/* STATS */}

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-3 md:gap-5">
              {/* TEMPLATES */}

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="
            rounded-2xl
            border
            border-white/10
            bg-white/[0.04]
            p-4
            text-center
            backdrop-blur-xl
          "
              >
                <h3 className="text-2xl font-black text-cyan-400 md:text-3xl">
                  25+
                </h3>

                <p className="mt-2 text-xs text-gray-400 md:text-sm">
                  Templates
                </p>
              </motion.div>

              {/* RESPONSIVE */}

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="
            rounded-2xl
            border
            border-white/10
            bg-white/[0.04]
            p-4
            text-center
            backdrop-blur-xl
          "
              >
                <h3 className="text-2xl font-black text-cyan-400 md:text-3xl">
                  100%
                </h3>

                <p className="mt-2 text-xs text-gray-400 md:text-sm">
                  Responsive
                </p>
              </motion.div>

              {/* FREE */}

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="
            rounded-2xl
            border
            border-white/10
            bg-white/[0.04]
            p-4
            text-center
            backdrop-blur-xl
          "
              >
                <h3 className="text-2xl font-black text-cyan-400 md:text-3xl">
                  Free
                </h3>

                <p className="mt-2 text-xs text-gray-400 md:text-sm">Forever</p>
              </motion.div>
            </div>
          </motion.div>

          {/* ================= RIGHT SIDE ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
            }}
            className="
        relative
        mx-auto
        flex
        w-full
        max-w-[520px]
        items-center
        justify-center
      "
          >
            {/* AMBIENT GLOW */}

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.25, 0.45, 0.25],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
          absolute
          h-[420px]
          w-[420px]
          rounded-full
          bg-cyan-500/10
          blur-[100px]
          md:h-[520px]
          md:w-[520px]
        "
            />

            {/* FLOATING GLASS FRAME */}

            <motion.div
              animate={{
                rotate: [0, 4, 0, -4, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
          absolute
          h-[400px]
          w-[400px]
          rounded-[70px]
          border
          border-cyan-400/10
          bg-cyan-400/[0.015]
          md:h-[500px]
          md:w-[500px]
        "
            />

            {/* PROFILE CARD */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
          relative
          z-10
          w-full
          max-w-[390px]
          overflow-hidden
          rounded-[38px]
          border
          border-white/10
          bg-slate-900/80
          p-7
          shadow-[0_0_70px_rgba(34,211,238,0.12)]
          backdrop-blur-2xl
          md:p-9
        "
            >
              {/* CARD GLOW */}

              <motion.div
                animate={{
                  opacity: [0.35, 0.65, 0.35],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
            absolute
            left-1/2
            top-[-100px]
            h-[260px]
            w-[260px]
            -translate-x-1/2
            rounded-full
            bg-cyan-500/15
            blur-[70px]
          "
              />

              {/* PROFILE IMAGE */}

              <div className="relative z-10 flex justify-center">
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(34,211,238,0.15)",
                      "0 0 45px rgba(34,211,238,0.35)",
                      "0 0 20px rgba(34,211,238,0.15)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="rounded-full"
                >
                  <label className="relative block cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />

                    {previewImage ? (
                      <img
                        src={previewImage}
                        alt="Profile"
                        className="
                    h-32
                    w-32
                    rounded-full
                    border-4
                    border-cyan-400
                    object-cover
                    md:h-36
                    md:w-36
                  "
                      />
                    ) : (
                      <div
                        className="
                    h-32
                    w-32
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-400
                    via-blue-500
                    to-violet-500
                    md:h-36
                    md:w-36
                  "
                      />
                    )}

                    {/* ONLINE DOT */}

                    <motion.span
                      animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="
                  absolute
                  bottom-2
                  right-2
                  h-5
                  w-5
                  rounded-full
                  border-4
                  border-slate-900
                  bg-cyan-400
                "
                    />
                  </label>
                </motion.div>
              </div>

              {/* NAME */}

              <div className="relative z-10 mt-6 text-center">
                {editingName ? (
                  <input
                    autoFocus
                    value={previewName}
                    onChange={handleNameChange}
                    onBlur={() => {
                      setEditingName(false);
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        setEditingName(false);
                      }
                    }}
                    className="
                w-full
                border-b-2
                border-cyan-500
                bg-transparent
                text-center
                text-3xl
                font-bold
                text-white
                outline-none
              "
                  />
                ) : (
                  <h2
                    onClick={() => {
                      setEditingName(true);
                    }}
                    className="
                cursor-text
                text-3xl
                font-black
                transition
                hover:text-cyan-400
              "
                  >
                    {previewName}
                  </h2>
                )}

                <p className="mt-2 text-cyan-400">Full Stack Developer</p>
              </div>

              {/* SKILLS */}

              <div className="relative z-10 mt-8 space-y-4">
                {[
                  ["HTML", 95],
                  ["React", 90],
                  ["Node.js", 85],
                  ["UI Design", 80],
                ].map(([skill, percentage], index) => (
                  <div key={skill}>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">{skill}</span>

                      <span className="text-gray-400">{percentage}%</span>
                    </div>

                    <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-slate-700">
                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        whileInView={{
                          width: `${percentage}%`,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 1,
                          delay: index * 0.2,
                        }}
                        className="
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-400
                    via-blue-500
                    to-violet-500
                  "
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= PORTFOLIO TEMPLATES ================= */}

      <section
        id="templates"
        className="relative mx-auto max-w-7xl overflow-hidden px-6 py-28"
      >
        {/* HEADING */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative z-10 text-center"
        >
          <span className="font-semibold tracking-widest text-cyan-400">
            PORTFOLIO TEMPLATES
          </span>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Choose Your
            <span className="text-cyan-400"> Perfect Template</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
            Select a professional design and start building your portfolio.
          </p>
        </motion.div>

        {/* TEMPLATE GRID */}

        <div className="relative z-10 mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
              }}
              className="
          group
          overflow-hidden
          rounded-[28px]
          border
          border-white/10
          bg-white/[0.035]
          backdrop-blur-2xl
          transition-all
          duration-500
          hover:border-cyan-400/30
          hover:shadow-[0_20px_60px_rgba(34,211,238,0.12)]
        "
            >
              {/* IMAGE */}

              <div className="relative h-56 overflow-hidden">
                <img
                  src={template.image}
                  alt={template.title}
                  className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
                />

                {/* IMAGE OVERLAY */}

                <div
                  className="
              absolute
              inset-0
              bg-gradient-to-t
              from-slate-950
              via-slate-950/20
              to-transparent
            "
                />

                {/* ICON */}

                <div
                  className={`
              absolute
              left-5
              top-5
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-r
              ${template.color}
              text-2xl
              shadow-lg
            `}
                >
                  {template.icon}
                </div>
              </div>

              {/* CONTENT */}

              <div className="p-6">
                <h3 className="text-xl font-bold text-white">
                  {template.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Create a modern and professional portfolio with this template.
                </p>

                {/* BUTTON */}

                <motion.button
                  type="button"
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  onClick={() => {
                    navigate("/portfolio-form", {
                      state: { template: template.id },
                    });
                  }}
                  className={`
              mt-6
              w-full
              rounded-xl
              bg-gradient-to-r
              ${template.color}
              px-5
              py-3
              font-bold
              text-white
              transition
              hover:brightness-110
              hover:shadow-lg
            `}
                >
                  Use This Template
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}

      <section className="relative mx-auto max-w-7xl overflow-hidden px-6 py-28">
        {/* BACKGROUND GLOW */}

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
            opacity: [0.08, 0.16, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
      pointer-events-none
      absolute
      -right-32
      -top-20
      h-[420px]
      w-[420px]
      rounded-full
      bg-cyan-500/20
      blur-[120px]
    "
        />

        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 50, 0],
            opacity: [0.06, 0.14, 0.06],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
      pointer-events-none
      absolute
      -bottom-32
      -left-32
      h-[380px]
      w-[380px]
      rounded-full
      bg-purple-600/20
      blur-[120px]
    "
        />

        {/* HEADING */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative z-10 text-center"
        >
          <span className="font-semibold tracking-widest text-cyan-400">
            HOW IT WORKS
          </span>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Build Portfolio In
            <span className="text-cyan-400"> 4 Easy Steps</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
            Create your professional portfolio quickly with a simple
            step-by-step process.
          </p>
        </motion.div>

        {/* STEPS */}

        <div className="relative z-10 mt-20">
          {/* CONNECTING LINE */}

          <motion.div
            initial={{
              scaleY: 0,
            }}
            whileInView={{
              scaleY: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="
        absolute
        bottom-8
        left-[31px]
        top-8
        hidden
        w-[2px]
        origin-top
        bg-gradient-to-b
        from-cyan-400
        via-blue-500
        to-purple-600
        md:block
      "
          />

          {[
            {
              number: "01",
              title: "Choose Template",
              icon: "🎨",
              desc: "Pick a professional portfolio template that matches your style.",
            },
            {
              number: "02",
              title: "Fill Your Details",
              icon: "📝",
              desc: "Add your profile, projects, skills, education and experience.",
            },
            {
              number: "03",
              title: "Customize Design",
              icon: "⚙️",
              desc: "Personalize your portfolio with your own information and design.",
            },
            {
              number: "04",
              title: "Download & Publish",
              icon: "🚀",
              desc: "Export your portfolio and make it ready to share with recruiters.",
            },
          ].map((step, index) => (
            <motion.div
              key={step.number}
              initial={{
                opacity: 0,
                x: -60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="
          relative
          mb-8
          flex
          items-start
          gap-6
          last:mb-0
          md:gap-8
        "
            >
              {/* NUMBER */}

              <motion.div
                whileHover={{
                  scale: 1.12,
                  rotate: 5,
                }}
                className="
            relative
            z-10
            flex
            h-16
            w-16
            shrink-0
            items-center
            justify-center
            rounded-2xl
            border
            border-white/20
            bg-gradient-to-br
            from-cyan-400
            via-blue-500
            to-purple-600
            text-lg
            font-black
            text-white
            shadow-[0_10px_35px_rgba(34,211,238,0.25)]
          "
              >
                {step.number}
              </motion.div>

              {/* CONTENT CARD */}

              <motion.div
                whileHover={{
                  x: 8,
                }}
                className="
            flex-1
            rounded-[28px]
            border
            border-white/10
            bg-white/[0.035]
            p-6
            backdrop-blur-2xl
            transition-all
            duration-500
            hover:border-cyan-400/30
            hover:bg-white/[0.055]
            hover:shadow-[0_15px_50px_rgba(34,211,238,0.08)]
            md:p-8
          "
              >
                <div className="flex items-start gap-5">
                  {/* ICON */}

                  <motion.div
                    whileHover={{
                      scale: 1.12,
                      rotate: -6,
                    }}
                    className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-2xl
                border
                border-white/10
                bg-slate-800/80
                text-3xl
              "
                  >
                    {step.icon}
                  </motion.div>

                  {/* TEXT */}

                  <div>
                    <h3 className="text-xl font-bold md:text-2xl">
                      {step.title}
                    </h3>

                    <p className="mt-2 leading-7 text-gray-400">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
      <FAQSection />

      {/* ================= FINAL CTA ================= */}

      <section className="relative mx-auto max-w-7xl overflow-hidden px-6 pb-24 pt-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
      relative
      overflow-hidden
      rounded-[40px]
      border
      border-cyan-400/20
      bg-gradient-to-br
      from-cyan-600
      via-blue-600
      to-purple-700
      px-6
      py-20
      text-center
      shadow-[0_25px_80px_rgba(34,211,238,0.15)]
      md:px-16
    "
        >
          {/* DECORATIVE CIRCLE 1 */}

          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -60, 0],
              rotate: [0, 90, 180],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
        absolute
        -right-32
        -top-40
        h-80
        w-80
        rounded-full
        border
        border-white/10
        bg-white/[0.06]
      "
          />

          {/* DECORATIVE CIRCLE 2 */}

          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 50, 0],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
        absolute
        -bottom-44
        -left-32
        h-96
        w-96
        rounded-full
        border
        border-white/10
        bg-black/[0.06]
      "
          />

          {/* SMALL DOT */}

          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.45, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
        absolute
        left-[15%]
        top-[20%]
        h-3
        w-3
        rounded-full
        bg-white
      "
          />

          {/* SMALL DOT 2 */}

          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="
        absolute
        bottom-[25%]
        right-[18%]
        h-4
        w-4
        rounded-full
        bg-white
      "
          />

          {/* CONTENT */}

          <div className="relative z-10">
            {/* ICON */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mb-7 text-5xl"
            >
              🚀
            </motion.div>

            {/* HEADING */}

            <h2 className="text-4xl font-black md:text-5xl lg:text-6xl">
              Ready To Build Your
              <span className="mt-2 block text-cyan-100">Dream Portfolio?</span>
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
          mx-auto
          mt-7
          max-w-3xl
          text-base
          leading-7
          text-white/80
          md:text-lg
        "
            >
              Showcase your skills, projects, education, certificates and resume
              with a beautiful professional portfolio.
            </p>

            {/* BUTTONS */}

            <div
              className="
          mt-10
          flex
          flex-wrap
          justify-center
          gap-5
        "
            >
              {/* START BUILDING */}

              <motion.button
                type="button"
                whileHover={{
                  scale: 1.07,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={() => {
                  navigate("/portfolio-form");
                }}
                className="
            rounded-2xl
            bg-white
            px-9
            py-4
            font-black
            text-cyan-600
            shadow-xl
            transition-all
            hover:shadow-2xl
          "
              >
                🚀 Start Building
              </motion.button>

              {/* VIEW TEMPLATES */}

              <motion.button
                type="button"
                whileHover={{
                  scale: 1.07,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={() => {
                  document.getElementById("templates")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="
            rounded-2xl
            border-2
            border-white/70
            bg-white/5
            px-9
            py-4
            font-black
            text-white
            backdrop-blur-xl
            transition-all
            hover:bg-white
            hover:text-cyan-600
          "
              >
                👀 View Templates
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>
      {/* ================= FOOTER ================= */}

      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* BRAND */}

            <div>
              <motion.h2
                whileHover={{
                  x: 5,
                }}
                className="
            cursor-default
            text-3xl
            font-black
            text-cyan-400
          "
              >
                CodeCareer AI
              </motion.h2>

              <p
                className="
            mt-5
            max-w-sm
            leading-7
            text-gray-400
          "
              >
                Build modern developer portfolios with beautiful templates,
                projects, skills, resume and professional animations.
              </p>
            </div>

            {/* QUICK LINKS */}

            <div>
              <h3 className="text-lg font-bold text-white">Quick Links</h3>

              <ul className="mt-5 space-y-3 text-gray-400">
                <li
                  onClick={() => {
                    navigate("/");
                  }}
                  className="
              cursor-pointer
              transition
              hover:translate-x-1
              hover:text-cyan-400
            "
                >
                  Home
                </li>

                <li
                  onClick={() => {
                    document.getElementById("templates")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className="
              cursor-pointer
              transition
              hover:translate-x-1
              hover:text-cyan-400
            "
                >
                  Portfolio Templates
                </li>

                <li
                  onClick={() => {
                    document.getElementById("portfolio-hero")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className="
              cursor-pointer
              transition
              hover:translate-x-1
              hover:text-cyan-400
            "
                >
                  Features
                </li>

                <li
                  onClick={() => {
                    document.getElementById("faq")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className="
              cursor-pointer
              transition
              hover:translate-x-1
              hover:text-cyan-400
            "
                >
                  FAQ
                </li>
              </ul>
            </div>

            {/* RESOURCES */}

            <div>
              <h3 className="text-lg font-bold text-white">Resources</h3>

              <ul className="mt-5 space-y-3 text-gray-400">
                <li
                  className="
              cursor-pointer
              transition
              hover:text-cyan-400
            "
                >
                  Resume Builder
                </li>

                <li
                  onClick={() => {
                    navigate("/portfolio-form");
                  }}
                  className="
              cursor-pointer
              transition
              hover:text-cyan-400
            "
                >
                  Portfolio Builder
                </li>

                <li
                  className="
              cursor-pointer
              transition
              hover:text-cyan-400
            "
                >
                  Career Roadmaps
                </li>

                <li
                  className="
              cursor-pointer
              transition
              hover:text-cyan-400
            "
                >
                  Interview Preparation
                </li>
              </ul>
            </div>

            {/* CONTACT */}

            <div>
              <h3 className="text-lg font-bold text-white">Contact</h3>

              <div className="mt-5 space-y-4 text-gray-400">
                <p>📧 support@codecareerai.com</p>

                <p>🌐 www.codecareerai.com</p>

                <p>🚀 Built for Developers</p>
              </div>
            </div>
          </div>

          {/* BOTTOM */}

          <div
            className="
        mt-12
        border-t
        border-slate-800
        pt-8
        text-center
        text-sm
        text-gray-500
      "
          >
            © 2026 CodeCareer AI. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* ================= CLOSE MAIN CONTAINER ================= */}
    </div>
  );
}

export default PortfolioBuilder;
