import { motion } from "framer-motion";

const templates = [
  {
    id: 1,
    title: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    color: "from-cyan-500 to-blue-600",
    description:
      "Perfect for React, HTML, CSS & JavaScript Developers.",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
    color: "from-purple-500 to-pink-600",
    description:
      "Best template for MERN & Full Stack Engineers.",
  },
  {
    id: 3,
    title: "AI / ML Engineer",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    color: "from-green-500 to-cyan-600",
    description:
      "Showcase AI, Python, TensorFlow & ML Projects.",
  },
  {
    id: 4,
    title: "Cyber Security",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    color: "from-red-500 to-orange-500",
    description:
      "Modern portfolio for Security Professionals.",
  },
  {
    id: 5,
    title: "Cloud Engineer",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    color: "from-sky-500 to-indigo-600",
    description:
      "AWS, Azure & Google Cloud Engineers.",
  },
  {
    id: 6,
    title: "Mobile Developer",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    color: "from-emerald-500 to-cyan-500",
    description:
      "Android, Flutter & React Native Developers.",
  },
];

export default function PortfolioTemplates() {
  return (
    <section
      id="portfolio"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center"
      >
        🎨 Portfolio Templates
      </motion.h2>

      <p className="text-center text-gray-400 mt-5 max-w-2xl mx-auto">
        Select a beautiful portfolio template and showcase your
        skills professionally.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {templates.map((template) => (
          <motion.div
            key={template.id}
            whileHover={{
              scale: 1.05,
              rotateY: 8,
              y: -10,
            }}
            transition={{ duration: 0.3 }}
            className="
            bg-slate-900
            rounded-3xl
            overflow-hidden
            border
            border-slate-700
            shadow-xl
            "
          >
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
                opacity-40
                `}
              />

              <div className="absolute bottom-5 left-5">
                <h3 className="text-2xl font-bold">
                  {template.title}
                </h3>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-400">
                {template.description}
              </p>

              <button
                className="
                mt-6
                w-full
                py-3
                rounded-xl
                bg-cyan-500
                hover:bg-cyan-400
                text-black
                font-bold
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
  );
}