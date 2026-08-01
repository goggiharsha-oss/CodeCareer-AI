import { motion } from "framer-motion";

const templates = [
  {
    id: 1,
    title: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 3,
    title: "AI Engineer",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    color: "from-green-500 to-cyan-600",
  },
  {
    id: 4,
    title: "Cyber Security",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    color: "from-red-500 to-orange-500",
  },
  {
    id: 5,
    title: "Cloud Engineer",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    color: "from-sky-500 to-indigo-600",
  },
  {
    id: 6,
    title: "Mobile Developer",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    color: "from-emerald-500 to-cyan-500",
  },
];

function PortfolioBuilder() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* Background Glow */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      {/* ================= HERO ================= */}

      <section className="relative max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400">
              🚀 Professional Portfolio Builder
            </span>

            <h1 className="text-6xl font-black mt-8 leading-tight">
              Build Your
              <span className="block text-cyan-400">
                Dream Portfolio
              </span>
            </h1>

            <p className="text-gray-400 text-xl mt-6 max-w-xl">
              Create a beautiful developer portfolio with projects,
              skills, resume and certifications in just a few minutes.
            </p>

            <div className="flex gap-5 mt-10">

              <button className="px-8 py-4 rounded-2xl bg-cyan-500 text-black font-bold hover:scale-105 transition">
                🚀 Start Building
              </button>

              <button className="px-8 py-4 rounded-2xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition">
                👀 Preview
              </button>

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >

            <div className="w-[380px] rounded-3xl bg-slate-900 border border-cyan-500 p-8 shadow-2xl shadow-cyan-500/20">

              <div className="w-28 h-28 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto"></div>

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
                  ["Node.js", 80],
                  ["UI Design", 85],
                ].map((item, index) => (
                  <div key={index}>

                    <div className="flex justify-between">
                      <span>{item[0]}</span>
                      <span>{item[1]}%</span>
                    </div>

                    <div className="w-full h-3 bg-slate-700 rounded-full mt-2">

                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item[1]}%` }}
                        transition={{
                          duration: 1,
                          delay: index * 0.2,
                        }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                      />

                    </div>

                  </div>
                ))}

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ================= TEMPLATE GALLERY ================= */}

<section className="max-w-7xl mx-auto px-6 py-20">

  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >

    <h2 className="text-5xl font-bold text-center">
      Choose Your
      <span className="text-cyan-400"> Portfolio Template</span>
    </h2>

    <p className="text-center text-gray-400 mt-4 text-lg">
      Beautiful templates inspired by modern developer portfolios.
    </p>

  </motion.div>

  <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16">

    {[
      {
        name: "Developer",
        color: "from-cyan-500 to-blue-600",
        icon: "💻"
      },
      {
        name: "Creative",
        color: "from-pink-500 to-purple-600",
        icon: "🎨"
      },
      {
        name: "Minimal",
        color: "from-emerald-500 to-teal-600",
        icon: "✨"
      }
    ].map((template, index) => (

      <motion.div
        key={index}
        whileHover={{
          y: -12,
          scale: 1.03
        }}
        className="
        rounded-3xl
        overflow-hidden
        bg-slate-900
        border
        border-slate-800
        hover:border-cyan-500
        transition-all
        duration-300
        "
      >

        <div
          className={`
          h-60
          bg-gradient-to-br
          ${template.color}
          flex
          items-center
          justify-center
          text-8xl
          `}
        >
          {template.icon}
        </div>

        <div className="p-6">

          <h3 className="text-2xl font-bold">
            {template.name}
          </h3>

          <p className="text-gray-400 mt-3">
            Professional portfolio design with responsive layout,
            animations and modern UI.
          </p>

          <button
            className="
            mt-6
            w-full
            py-3
            rounded-xl
            bg-cyan-500
            text-black
            font-bold
            hover:scale-105
            transition
            "
          >
            Use Template
          </button>

        </div>

      </motion.div>

    ))}

  </div>

</section>



      {/* ================= FEATURES ================= */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-5xl font-bold text-center">
          ✨ Why Choose Our Portfolio Builder?
        </h2>

        <p className="text-center text-gray-400 mt-5">
          Everything you need to create an impressive portfolio.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {[
            {
              icon: "⚡",
              title: "Fast Builder",
              desc: "Create portfolio in minutes.",
            },
            {
              icon: "🎨",
              title: "Modern Templates",
              desc: "Beautiful responsive templates.",
            },
            {
              icon: "📱",
              title: "Responsive",
              desc: "Looks great on every device.",
            },
            {
              icon: "📄",
              title: "Resume Export",
              desc: "Download professional resume.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                y: -10,
              }}
              className="bg-slate-900 rounded-3xl p-8 border border-slate-700 text-center"
            >

              <div className="text-6xl">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-4">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </section>

      {/* ================= HOW IT WORKS ================= */}

<section className="max-w-7xl mx-auto px-6 py-24">

  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="text-5xl font-bold text-center"
  >
    Build Portfolio in
    <span className="text-cyan-400"> 4 Easy Steps</span>
  </motion.h2>

  <div className="mt-20 space-y-8">

    {[
      {
        step: "01",
        title: "Choose Template",
        desc: "Select a modern portfolio template."
      },
      {
        step: "02",
        title: "Add Your Details",
        desc: "Fill your name, skills, education and projects."
      },
      {
        step: "03",
        title: "Customize Design",
        desc: "Change colors, fonts and layout."
      },
      {
        step: "04",
        title: "Publish Portfolio",
        desc: "Deploy instantly using Vercel or Netlify."
      }
    ].map((item, index) => (

      <motion.div
        key={index}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.2 }}
        whileHover={{ scale: 1.03 }}
        className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex gap-8 items-center"
      >

        <div className="w-20 h-20 rounded-full bg-cyan-500 flex items-center justify-center text-3xl font-bold text-black">
          {item.step}
        </div>

        <div>
          <h3 className="text-2xl font-bold">{item.title}</h3>
          <p className="text-gray-400 mt-2">{item.desc}</p>
        </div>

      </motion.div>

    ))}

  </div>

</section>

{/* ================= FINAL CTA ================= */}

<section className="max-w-7xl mx-auto px-6 py-24">

  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    className="
    rounded-[40px]
    p-16
    text-center
    bg-gradient-to-r
    from-cyan-600
    via-blue-600
    to-purple-700
    shadow-2xl
    shadow-cyan-500/30
    "
  >

    <h2 className="text-5xl font-black">
      🚀 Ready To Build Your Portfolio?
    </h2>

    <p className="text-xl text-white/90 mt-6 max-w-3xl mx-auto">
      Showcase your skills, projects, certifications and resume with a
      beautiful professional portfolio that helps you get hired.
    </p>

    <div className="flex flex-wrap justify-center gap-6 mt-12">

      <button
        className="
        px-10
        py-4
        rounded-2xl
        bg-white
        text-cyan-600
        font-bold
        hover:scale-105
        transition
        "
      >
        🚀 Start Building
      </button>

      <button
        className="
        px-10
        py-4
        rounded-2xl
        border-2
        border-white
        text-white
        font-bold
        hover:bg-white
        hover:text-cyan-600
        transition
        "
      >
        👀 Preview Templates
      </button>

      <button
        className="
        px-10
        py-4
        rounded-2xl
        bg-black/30
        text-white
        font-bold
        border
        border-white/20
        hover:bg-black/50
        transition
        "
      >
        📄 Download Resume
      </button>

    </div>

  </motion.div>

</section>


{/* ================= FAQ SECTION ================= */}

<section className="max-w-7xl mx-auto px-6 py-24">

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
  >

    <h2 className="text-5xl font-bold text-center">
      Frequently Asked
      <span className="text-cyan-400"> Questions</span>
    </h2>

    <p className="text-center text-gray-400 mt-5">
      Everything you need to know about Portfolio Builder.
    </p>

  </motion.div>

  <div className="max-w-4xl mx-auto mt-16 space-y-6">

    {[
      {
        q: "Is Portfolio Builder free?",
        a: "Yes. You can create and customize your portfolio for free."
      },
      {
        q: "Can I upload my resume?",
        a: "Yes. You can upload your resume and display it in your portfolio."
      },
      {
        q: "Can I add GitHub projects?",
        a: "Yes. Add GitHub links and showcase your projects."
      },
      {
        q: "Can I deploy my portfolio?",
        a: "Yes. Export your portfolio and deploy it on Vercel or Netlify."
      }
    ].map((item, index) => (

      <motion.div
        key={index}
        whileHover={{ scale: 1.02 }}
        className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
      >

        <h3 className="text-xl font-bold text-cyan-400">
          {item.q}
        </h3>

        <p className="text-gray-400 mt-3">
          {item.a}
        </p>

      </motion.div>

    ))}

  </div>

</section>


{/* ================= FOOTER ================= */}

<footer className="border-t border-slate-800 mt-20">

  <div className="max-w-7xl mx-auto px-6 py-16">

    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

      {/* Logo */}

      <div>

        <h2 className="text-3xl font-bold text-cyan-400">
          CodeCareer AI
        </h2>

        <p className="text-gray-400 mt-5 leading-7">
          Build a professional developer portfolio with beautiful
          templates, projects, skills and resume showcase.
        </p>

      </div>

      {/* Quick Links */}

      <div>

        <h3 className="text-xl font-bold mb-5">
          Quick Links
        </h3>

        <ul className="space-y-3 text-gray-400">

          <li className="hover:text-cyan-400 cursor-pointer">
            Home
          </li>

          <li className="hover:text-cyan-400 cursor-pointer">
            Templates
          </li>

          <li className="hover:text-cyan-400 cursor-pointer">
            Features
          </li>

          <li className="hover:text-cyan-400 cursor-pointer">
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

          <li className="hover:text-cyan-400 cursor-pointer">
            Resume Builder
          </li>

          <li className="hover:text-cyan-400 cursor-pointer">
            Portfolio Builder
          </li>

          <li className="hover:text-cyan-400 cursor-pointer">
            Interview Preparation
          </li>

          <li className="hover:text-cyan-400 cursor-pointer">
            Career Roadmaps
          </li>

        </ul>

      </div>

      {/* Contact */}

      <div>

        <h3 className="text-xl font-bold mb-5">
          Connect
        </h3>

        <div className="space-y-3 text-gray-400">

          <p>📧 support@codecareerai.com</p>

          <p>🌐 www.codecareerai.com</p>

          <p>🚀 Made for Developers</p>

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

     