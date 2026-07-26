import { useTheme } from "../context/ThemeContext";

function SalaryComparison() {
  const { darkMode } = useTheme();

  const salaries = [
    {
      name: "Python",
      icon: "🐍",
      salary: "₹3–6 LPA",
      width: "75%",
    },
    {
      name: "Java",
      icon: "☕",
      salary: "₹4–7 LPA",
      width: "85%",
    },
    {
      name: "C++",
      icon: "⚙️",
      salary: "₹4–8 LPA",
      width: "90%",
    },
    {
      name: "JavaScript",
      icon: "🟨",
      salary: "₹4–9 LPA",
      width: "95%",
    },
  ];

  return (
    <section
      id="salary"
      className={`py-20 px-6 transition-colors duration-500 ${
        darkMode
          ? "bg-slate-950"
          : "bg-gradient-to-b from-white via-slate-50 to-cyan-50"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className={`text-4xl font-bold text-center ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          Salary Comparison
        </h2>

        <p
          className={`text-center mt-3 mb-12 ${
            darkMode ? "text-gray-400" : "text-slate-600"
          }`}
        >
          Compare average fresher salaries across popular technologies
        </p>

        <div className="space-y-8">
          {salaries.map((item) => (
            <div
              key={item.name}
              className={`p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? "bg-slate-900 border border-slate-800"
                  : "bg-white border border-cyan-100 shadow-lg hover:shadow-2xl"
              }`}
            >
              <div
                className={`flex justify-between items-center mb-3 ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{item.icon}</span>

                  <span className="text-xl font-semibold">
                    {item.name}
                  </span>
                </div>

                <span className="text-cyan-500 font-bold">
                  {item.salary}
                </span>
              </div>

              <div
                className={`w-full h-4 rounded-full ${
                  darkMode
                    ? "bg-slate-700"
                    : "bg-gray-200"
                }`}
              >
                <div
                  className="h-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-700"
                  style={{ width: item.width }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SalaryComparison;