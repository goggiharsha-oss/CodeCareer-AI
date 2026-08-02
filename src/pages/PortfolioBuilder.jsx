import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const templates = [
  {
    id: 1,
    title: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    color: "from-cyan-500 to-blue-600",
    icon: "💻",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    color: "from-purple-500 to-pink-600",
    icon: "⚛️",
  },
  {
    id: 3,
    title: "AI Engineer",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    color: "from-green-500 to-cyan-600",
    icon: "🤖",
  },
  {
    id: 4,
    title: "Cyber Security",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    color: "from-red-500 to-orange-500",
    icon: "🛡️",
  },
  {
    id: 5,
    title: "Cloud Engineer",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    color: "from-sky-500 to-indigo-600",
    icon: "☁️",
  },
  {
    id: 6,
    title: "Mobile Developer",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    color: "from-emerald-500 to-cyan-500",
    icon: "📱",
  },
];

function PortfolioBuilder() {
  const navigate = useNavigate();

  const [selectedTemplate, setSelectedTemplate] = useState(null);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* Animated Background */}

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
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-[600px]
        h-[600px]
        rounded-full
        bg-cyan-500/20
        blur-[140px]
        "
      />

      {/* HERO SECTION */}

      <section className="relative max-w-7xl mx-auto px-6 py-24">

  <div className="grid lg:grid-cols-2 gap-20 items-center">

    {/* LEFT SIDE */}
    <motion.div id="templates"
  initial={{ opacity: 0, x: -80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>


  <span
    className="
    px-5
    py-2
    rounded-full
    bg-cyan-500/20
    text-cyan-400
    font-semibold
    "
  >
    🚀 Professional Portfolio Builder
  </span>

  <h1
    className="
    text-6xl
    lg:text-7xl
    font-black
    leading-tight
    mt-8
    "
  >
    Build Your

    <span className="block text-cyan-400">
      Dream Portfolio
    </span>

  </h1>

  <p
    className="
    text-xl
    text-gray-400
    mt-8
    max-w-xl
    leading-8
    "
  >
    Create a beautiful developer portfolio with projects,
    skills, certifications, resume and modern animations.
    No coding required.
  </p>

  {/* BUTTONS */}

  <div className="flex flex-wrap gap-5 mt-10">

    <motion.button

      whileHover={{
        scale: 1.05
      }}

      whileTap={{
        scale: 0.95
      }}

      onClick={() => navigate("/portfolio-form")}

      className="
      px-8
      py-4
      rounded-2xl
      bg-cyan-500
      text-black
      font-bold
      shadow-xl
      shadow-cyan-500/30
      "
    >

      🚀 Start Building

    </motion.button>

   <motion.button
  whileHover={{ scale: 1.05 }}
  onClick={() => {
    document
      .getElementById("templates")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
  className="
    px-8
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
  👀 Preview Templates
</motion.button>

  </div>

  {/* STATS */}

  <div className="grid grid-cols-3 gap-5 mt-14">

    <motion.div

      whileHover={{
        y: -8
      }}

      className="
      bg-slate-900
      rounded-2xl
      p-5
      border
      border-slate-800
      text-center
      "
    >

      <h3 className="text-3xl font-bold text-cyan-400">
        25+
      </h3>

      <p className="text-gray-400 mt-2">
        Templates
      </p>

    </motion.div>

    <motion.div

      whileHover={{
        y: -8
      }}

      className="
      bg-slate-900
      rounded-2xl
      p-5
      border
      border-slate-800
      text-center
      "
    >

      <h3 className="text-3xl font-bold text-cyan-400">
        100%
      </h3>

      <p className="text-gray-400 mt-2">
        Responsive
      </p>

    </motion.div>

    <motion.div

      whileHover={{
        y: -8
      }}

      className="
      bg-slate-900
      rounded-2xl
      p-5
      border
      border-slate-800
      text-center
      "
    >

      <h3 className="text-3xl font-bold text-cyan-400">
        Free
      </h3>

      <p className="text-gray-400 mt-2">
        Forever
      </p>

    </motion.div>

  </div>

</motion.div>

{/* RIGHT SIDE */}

<motion.div

  initial={{
    opacity: 0,
    x: 80
  }}

  animate={{
    opacity: 1,
    x: 0
  }}

  transition={{
    duration: 0.8
  }}

  className="flex justify-center"
>

  <motion.div

    animate={{
      y: [0, -15, 0]
    }}

    transition={{
      duration: 4,
      repeat: Infinity
    }}

    className="
    w-[390px]
    rounded-[35px]
    bg-slate-900
    border
    border-cyan-500
    p-8
    shadow-2xl
    shadow-cyan-500/20
    "
  >

    <div
      className="
      w-28
      h-28
      rounded-full
      mx-auto
      bg-gradient-to-r
      from-cyan-400
      to-blue-600
      "
    />

    <h2 className="text-3xl font-bold text-center mt-6">
      Your Name
    </h2>

    <p className="text-center text-cyan-400 mt-2">
      Full Stack Developer
    </p>

    <div className="space-y-5 mt-10">

      {[
        ["HTML", 95],
        ["React", 90],
        ["Node.js", 85],
        ["UI Design", 80],
      ].map((item, index) => (

        <div key={index}>

          <div className="flex justify-between">

            <span>{item[0]}</span>

            <span>{item[1]}%</span>

          </div>

          <div className="w-full h-3 bg-slate-700 rounded-full mt-2">

            <motion.div

              initial={{
                width: 0
              }}

              whileInView={{
                width: `${item[1]}%`
              }}

              transition={{
                duration: 1,
                delay: index * 0.2
              }}

              className="
              h-full
              rounded-full
              bg-gradient-to-r
              from-cyan-500
              to-blue-500
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
{/* ================= TEMPLATE GALLERY ================= */}

<section
  id="templates"
  className="max-w-7xl mx-auto px-6 py-24"
>

  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center"
  >

    <span className="text-cyan-400 font-semibold">
      PROFESSIONAL TEMPLATES
    </span>

    <h2 className="text-5xl font-black mt-4">
      Choose Your
      <span className="text-cyan-400"> Portfolio</span>
    </h2>

    <p className="text-gray-400 mt-5 text-lg">
      Pick a beautiful template and customize it in minutes.
    </p>

  </motion.div>

  <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">

    {templates.map((template) => (

      <motion.div

        key={template.id}

        initial={{
          opacity: 0,
          y: 50
        }}

        whileInView={{
          opacity: 1,
          y: 0
        }}

        whileHover={{
          y: -12,
          scale: 1.03
        }}

        transition={{
          duration: 0.5
        }}

        className="
        overflow-hidden
        rounded-3xl
        bg-slate-900
        border
        border-slate-800
        hover:border-cyan-500
        transition-all
        duration-300
        shadow-xl
        "
      >

        {/* IMAGE */}

        <div className="relative h-72 overflow-hidden">

          <img
            src={template.image}
            alt={template.title}
            className="
            w-full
            h-full
            object-cover
            transition
            duration-500
            hover:scale-110
            "
          />

          <div
            className={`
            absolute
            inset-0
            bg-gradient-to-t
            ${template.color}
            opacity-60
            `}
          />

          <div className="absolute top-5 right-5 text-5xl">
            {template.icon}
          </div>

          <div className="absolute bottom-6 left-6">

            <h3 className="text-3xl font-bold">
              {template.title}
            </h3>

            <p className="text-white/80 mt-2">
              Modern Responsive Portfolio
            </p>

          </div>

        </div>

        {/* CONTENT */}

        <div className="p-6">

          <div className="flex gap-2 flex-wrap">

            <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm">
              Responsive
            </span>

            <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
              Modern
            </span>

            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm">
              Animated
            </span>

          </div>

          <button

            onClick={() => navigate("/portfolio-form")}

            className="
            mt-6
            w-full
            py-4
            rounded-2xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            text-black
            font-bold
            hover:scale-105
            transition
            "

          >

            🚀 Use Template

          </button>

        </div>

      </motion.div>

    ))}

  </div>

</section>
{/* ================= WHY CHOOSE US ================= */}

<section className="max-w-7xl mx-auto px-6 py-24">

  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center"
  >

    <span className="text-cyan-400 font-semibold">
      WHY CHOOSE US
    </span>

    <h2 className="text-5xl font-black mt-4">
      Everything You Need
      <span className="text-cyan-400"> In One Place</span>
    </h2>

    <p className="text-gray-400 mt-5 text-lg max-w-3xl mx-auto">
      Create a modern developer portfolio with beautiful animations,
      responsive layouts and professional designs.
    </p>

  </motion.div>

  <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-20">

    {[
      {
        icon: "⚡",
        title: "Fast Builder",
        desc: "Create your portfolio in just a few minutes.",
        color: "from-cyan-500 to-blue-600"
      },
      {
        icon: "🎨",
        title: "Modern Design",
        desc: "Professional UI inspired by top developer portfolios.",
        color: "from-pink-500 to-purple-600"
      },
      {
        icon: "📱",
        title: "Responsive",
        desc: "Looks perfect on desktop, tablet and mobile.",
        color: "from-green-500 to-cyan-600"
      },
      {
        icon: "🚀",
        title: "Easy Deploy",
        desc: "Deploy instantly using GitHub, Vercel or Netlify.",
        color: "from-orange-500 to-red-600"
      }
    ].map((item, index) => (

      <motion.div

        key={index}

        initial={{
          opacity: 0,
          y: 60
        }}

        whileInView={{
          opacity: 1,
          y: 0
        }}

        transition={{
          delay: index * 0.15
        }}

        whileHover={{
          y: -12,
          scale: 1.05
        }}

        className="
        relative
        overflow-hidden
        rounded-3xl
        bg-slate-900
        border
        border-slate-800
        p-8
        group
        "
      >

        <div
          className={`
          absolute
          inset-0
          bg-gradient-to-br
          ${item.color}
          opacity-0
          group-hover:opacity-10
          transition
          duration-500
          `}
        />

        <div
          className="
          w-20
          h-20
          rounded-2xl
          bg-slate-800
          flex
          items-center
          justify-center
          text-5xl
          "
        >
          {item.icon}
        </div>

        <h3 className="text-2xl font-bold mt-8">
          {item.title}
        </h3>

        <p className="text-gray-400 mt-5 leading-7">
          {item.desc}
        </p>

      </motion.div>

    ))}

  </div>

</section>
{/* ================= HOW IT WORKS ================= */}

<section className="max-w-7xl mx-auto px-6 py-24">

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center"
  >

    <span className="text-cyan-400 font-semibold">
      HOW IT WORKS
    </span>

    <h2 className="text-5xl font-black mt-4">
      Build Portfolio In
      <span className="text-cyan-400"> 4 Easy Steps</span>
    </h2>

    <p className="text-gray-400 text-lg mt-5">
      From template selection to deployment in just a few minutes.
    </p>

  </motion.div>

  <div className="relative mt-24">

    {/* Vertical Line */}

    <div
      className="
      absolute
      left-8
      top-0
      bottom-0
      w-1
      bg-gradient-to-b
      from-cyan-500
      via-blue-500
      to-purple-500
      hidden
      md:block
      "
    />

    {[
      {
        number: "01",
        title: "Choose Template",
        icon: "🎨",
        desc: "Pick a professional portfolio template that matches your style."
      },
      {
        number: "02",
        title: "Fill Your Details",
        icon: "📝",
        desc: "Add your profile, projects, skills, education and experience."
      },
      {
        number: "03",
        title: "Customize Design",
        icon: "⚙️",
        desc: "Change colors, fonts, layouts and personalize your portfolio."
      },
      {
        number: "04",
        title: "Download & Publish",
        icon: "🚀",
        desc: "Export your portfolio and deploy it using Vercel or Netlify."
      }
    ].map((step, index) => (

      <motion.div

        key={index}

        initial={{
          opacity: 0,
          x: -80
        }}

        whileInView={{
          opacity: 1,
          x: 0
        }}

        transition={{
          duration: 0.6,
          delay: index * 0.2
        }}

        whileHover={{
          scale: 1.02
        }}

        className="
        relative
        flex
        gap-8
        items-start
        mb-12
        "
      >

        {/* Number */}

        <div
          className="
          relative
          z-10
          w-16
          h-16
          rounded-full
          bg-gradient-to-r
          from-cyan-500
          to-blue-600
          flex
          items-center
          justify-center
          font-bold
          text-black
          text-xl
          shadow-xl
          "
        >
          {step.number}
        </div>

        {/* Card */}

        <div
          className="
          flex-1
          bg-slate-900
          rounded-3xl
          border
          border-slate-800
          p-8
          hover:border-cyan-500
          transition-all
          duration-300
          "
        >

          <div className="flex items-center gap-5">

            <div className="text-5xl">
              {step.icon}
            </div>

            <div>

              <h3 className="text-2xl font-bold">
                {step.title}
              </h3>

              <p className="text-gray-400 mt-2">
                {step.desc}
              </p>

            </div>

          </div>

        </div>

      </motion.div>

    ))}

  </div>

</section>
{/* ================= FAQ SECTION ================= */}

<section className="max-w-7xl mx-auto px-6 py-24">

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center"
  >

    <span className="text-cyan-400 font-semibold">
      FAQ
    </span>

    <h2 className="text-5xl font-black mt-4">
      Frequently Asked
      <span className="text-cyan-400"> Questions</span>
    </h2>

    <p className="text-gray-400 mt-5 text-lg">
      Everything you need to know before creating your portfolio.
    </p>

  </motion.div>

  <div className="max-w-5xl mx-auto mt-20 space-y-6">

    {[
      {
        q: "Is Portfolio Builder free?",
        a: "Yes. You can create beautiful portfolios for free."
      },
      {
        q: "Can I upload my resume?",
        a: "Yes. You can upload your resume and showcase it."
      },
      {
        q: "Can I add GitHub projects?",
        a: "Yes. Add unlimited GitHub repositories."
      },
      {
        q: "Can I edit later?",
        a: "Yes. Update your portfolio anytime."
      }
    ].map((item,index)=>(

      <motion.div

        key={index}

        initial={{
          opacity:0,
          y:40
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        whileHover={{
          scale:1.02
        }}

        className="
        bg-slate-900
        border
        border-slate-800
        rounded-3xl
        p-8
        hover:border-cyan-500
        transition
        "

      >

        <h3 className="text-2xl font-bold text-cyan-400">
          {item.q}
        </h3>

        <p className="text-gray-400 mt-4 leading-7">
          {item.a}
        </p>

      </motion.div>

    ))}

  </div>

</section>

{/* ================= FINAL CTA ================= */}

<section className="max-w-7xl mx-auto px-6 pb-24">

  <motion.div

    initial={{
      opacity:0,
      scale:0.9
    }}

    whileInView={{
      opacity:1,
      scale:1
    }}

    transition={{
      duration:0.8
    }}

    className="
    rounded-[40px]
    overflow-hidden
    relative
    bg-gradient-to-r
    from-cyan-600
    via-blue-600
    to-purple-700
    p-16
    text-center
    "

  >

    <motion.div

      animate={{
        rotate:[0,360]
      }}

      transition={{
        duration:30,
        repeat:Infinity,
        ease:"linear"
      }}

      className="
      absolute
      -top-32
      -right-32
      w-72
      h-72
      rounded-full
      bg-white/10
      "

    />

    <motion.div

      animate={{
        rotate:[360,0]
      }}

      transition={{
        duration:25,
        repeat:Infinity,
        ease:"linear"
      }}

      className="
      absolute
      -bottom-32
      -left-32
      w-80
      h-80
      rounded-full
      bg-black/10
      "

    />

    <h2 className="text-5xl font-black relative z-10">
      🚀 Ready To Build Your Portfolio?
    </h2>

    <p className="text-xl mt-8 text-white/90 max-w-3xl mx-auto relative z-10">
      Showcase your skills, projects, education, certificates and resume
      with a beautiful portfolio that helps you get hired.
    </p>

    <div className="flex flex-wrap justify-center gap-6 mt-12 relative z-10">

      <motion.button

        whileHover={{
          scale:1.08
        }}

        whileTap={{
          scale:0.95
        }}

        onClick={() => navigate("/portfolio-form")}

        className="
        px-10
        py-4
        rounded-2xl
        bg-white
        text-cyan-600
        font-bold
        "

      >

        🚀 Start Building

      </motion.button>

      <motion.button

        whileHover={{
          scale:1.08
        }}

        className="
        px-10
        py-4
        rounded-2xl
        border-2
        border-white
        text-white
        hover:bg-white
        hover:text-cyan-600
        transition
        "

      >

        👀 View Templates

      </motion.button>

    </div>

  </motion.div>

</section>
{/* ================= FOOTER ================= */}

<footer className="border-t border-slate-800">

  <div className="max-w-7xl mx-auto px-6 py-16">

    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

      {/* Logo */}

      <div>

        <h2 className="text-3xl font-black text-cyan-400">
          CodeCareer AI
        </h2>

        <p className="text-gray-400 mt-5 leading-7">
          Build modern developer portfolios with beautiful templates,
          projects, skills, resume and professional animations.
        </p>

      </div>

      {/* Quick Links */}

      <div>

        <h3 className="text-xl font-bold mb-5">
          Quick Links
        </h3>

        <ul className="space-y-3 text-gray-400">

          <li className="hover:text-cyan-400 cursor-pointer transition">
            Home
          </li>

          <li className="hover:text-cyan-400 cursor-pointer transition">
            Portfolio Templates
          </li>

          <li className="hover:text-cyan-400 cursor-pointer transition">
            Features
          </li>

          <li className="hover:text-cyan-400 cursor-pointer transition">
            FAQ
          </li>

        </ul>

      </div>

      {/* Resources */}

      <div>

        <h3 className="text-xl font-bold mb-5">
          Resources
        </h3>

        <ul className="space-y-3 text-gray-400">

          <li className="hover:text-cyan-400 cursor-pointer transition">
            Resume Builder
          </li>

          <li className="hover:text-cyan-400 cursor-pointer transition">
            Portfolio Builder
          </li>

          <li className="hover:text-cyan-400 cursor-pointer transition">
            Career Roadmaps
          </li>

          <li className="hover:text-cyan-400 cursor-pointer transition">
            Interview Preparation
          </li>

        </ul>

      </div>

      {/* Contact */}

      <div>

        <h3 className="text-xl font-bold mb-5">
          Contact
        </h3>

        <div className="space-y-3 text-gray-400">

          <p>📧 support@codecareerai.com</p>

          <p>🌐 www.codecareerai.com</p>

          <p>🚀 Built for Developers</p>

        </div>

      </div>

    </div>

    <div className="border-t border-slate-800 mt-12 pt-8 text-center text-gray-500">

      © 2026 CodeCareer AI. All Rights Reserved.

    </div>

  </div>

</footer>

    </div>
  );
}

export default PortfolioBuilder;