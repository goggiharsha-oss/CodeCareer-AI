import { useTheme } from "../context/ThemeContext";

function Statistics() {
  const { darkMode } = useTheme();

  const stats = [
    {
      number: "10+",
      title: "Programming Languages",
      icon: "💻",
    },
    {
      number: "50+",
      title: "Career Paths",
      icon: "🚀",
    },
    {
      number: "100+",
      title: "Job Roles",
      icon: "💼",
    },
    {
      number: "₹40L+",
      title: "Highest Salary",
      icon: "💰",
    },
  ];

  return (
    <section
      className={`py-20 transition-colors duration-500 ${
        darkMode
          ? "bg-slate-900"
          : "bg-gradient-to-b from-cyan-50 via-white to-slate-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className={`text-4xl font-bold text-center ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          Career Statistics
        </h2>

        <p
          className={`text-center mt-3 mb-14 ${
            darkMode ? "text-gray-400" : "text-slate-600"
          }`}
        >
          Explore technology careers with salary insights and opportunities
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? "bg-slate-800 border border-slate-700 hover:border-cyan-400"
                  : "bg-white border border-cyan-100 shadow-lg hover:border-cyan-400 hover:shadow-2xl"
              }`}
            >
              <div className="text-4xl mb-4">
                {item.icon}
              </div>

              <h3 className="text-5xl font-bold text-cyan-400">
                {item.number}
              </h3>

              <p
                className={`mt-3 ${
                  darkMode ? "text-gray-400" : "text-slate-600"
                }`}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Statistics;