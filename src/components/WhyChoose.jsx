import { Briefcase, TrendingUp, Map, Scale } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function WhyChoose() {
  const { darkMode } = useTheme();

  const features = [
    {
      icon: <TrendingUp size={40} />,
      title: "Salary Insights",
      desc: "Know fresher and experienced salary packages.",
    },
    {
      icon: <Briefcase size={40} />,
      title: "Job Roles",
      desc: "Explore career opportunities for every language.",
    },
    {
      icon: <Map size={40} />,
      title: "Learning Roadmaps",
      desc: "Follow a step-by-step learning path.",
    },
    {
      icon: <Scale size={40} />,
      title: "Compare Languages",
      desc: "Compare languages and choose the best one.",
    },
  ];

  return (
    <section
      className={`py-20 px-6 transition-all duration-500 ${
        darkMode
          ? "bg-slate-950"
          : "bg-gradient-to-b from-slate-50 via-white to-cyan-50"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-4xl font-bold text-center mb-12 ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          Why Choose CodeCareer AI?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                darkMode
                  ? "bg-slate-900 border border-slate-700 hover:border-cyan-400"
                  : "bg-white border border-gray-200 shadow-lg hover:border-cyan-400"
              }`}
            >
              <div className="text-cyan-500 mb-5">{item.icon}</div>

              <h3
                className={`text-xl font-bold ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                {item.title}
              </h3>

              <p
                className={`mt-3 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;