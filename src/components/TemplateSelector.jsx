import { motion } from "framer-motion";

function TemplateSelector({ selectedTemplate, setSelectedTemplate }) {

  const templates = [
    {
      id: "frontend",
      title: "Frontend Developer",
      icon: "💻",
      description: "Modern UI focused portfolio design",
    },
    {
      id: "fullstack",
      title: "Full Stack Developer",
      icon: "🚀",
      description: "Complete web development portfolio",
    },
    {
      id: "ai",
      title: "AI Engineer",
      icon: "🤖",
      description: "Artificial Intelligence focused design",
    },
    {
      id: "cyber",
      title: "Cyber Security",
      icon: "🛡️",
      description: "Security and ethical hacking style",
    },
    {
      id: "app",
      title: "App Developer",
      icon: "📱",
      description: "Mobile application developer theme",
    },
  ];


  return (
    <div className="mt-8">

      <h2 className="text-2xl font-bold text-cyan-400 mb-6">
        🎨 Select Portfolio Template
      </h2>


      <div className="grid md:grid-cols-3 gap-6">

        {templates.map((template) => (

          <motion.div
            key={template.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}

            onClick={() =>
              setSelectedTemplate(template.id)
            }

            className={`
              cursor-pointer
              rounded-2xl
              p-6
              border
              transition

              ${
                selectedTemplate === template.id
                ?
                "border-cyan-400 bg-cyan-500/20"
                :
                "border-slate-700 bg-slate-900"
              }
            `}
          >

            <div className="text-5xl text-center">
              {template.icon}
            </div>


            <h3 className="text-xl font-bold text-center mt-4">
              {template.title}
            </h3>


            <p className="text-gray-400 text-center mt-3">
              {template.description}
            </p>


          </motion.div>

        ))}

      </div>

    </div>
  );
}

export default TemplateSelector;