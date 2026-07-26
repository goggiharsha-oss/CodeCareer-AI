import { languages } from "../data/Languages";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function LanguageCard({ search = "" }) {
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  const searchText = search.toLowerCase().trim();

 const filteredLanguages = languages
  .filter((lang) => {
    if (!searchText) return true;

    const name = lang.name.toLowerCase();

    const aliases = {
      javascript: ["js", "javascript"],
      "c++": ["cpp", "c++"],
      "c#": ["cs", "csharp", "c#"],
      python: ["py", "python"],
      java: ["java"],
      c: ["c"]
    };

    const searchNames = aliases[name] || [name];

    return searchNames.some((item) =>
      item.includes(searchText) ||
      searchText.includes(item)
    );
  });
  return (
    <section
      id="languages"
      className={`py-20 px-6 transition-colors duration-500 ${
        darkMode ? "bg-slate-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto">

        <h2
          className={`text-4xl font-bold text-center mb-12 ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          Popular Programming Languages
        </h2>


        {filteredLanguages.length === 0 ? (
          <div className="text-center py-20">

            <h3
              className={`text-3xl font-bold ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              No Language Found 😔
            </h3>

            <p
              className={`mt-3 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Try Python, Java, JavaScript, C, C++, C#
            </p>

          </div>
        ) : (

          <div className="grid md:grid-cols-3 gap-8">

            {filteredLanguages.map((lang) => (

              <div
                key={lang.id}
                className={`rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  darkMode
                    ? "bg-slate-800 hover:shadow-cyan-500/20"
                    : "bg-white border border-gray-200 shadow-lg"
                }`}
              >

                <div
                  className={`w-14 h-14 rounded-xl ${lang.color} flex items-center justify-center text-white font-bold text-xl`}
                >
                  {lang.icon}
                </div>


                <h3
                  className={`text-2xl font-bold mt-5 ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  {lang.name}
                </h3>


                <p
                  className={`mt-2 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Average Fresher Salary
                </p>


                <p className="text-cyan-400 text-xl font-semibold mt-2">
                  {lang.salary}
                </p>


                <p
                  className={`mt-4 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  💼 {lang.jobs}
                </p>


                <p
                  className={`mt-2 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  ⭐ Difficulty: {lang.difficulty}
                </p>


                <p
                  className={`mt-2 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  ⏳ {lang.duration}
                </p>


                <button
                  onClick={() => navigate(lang.route)}
                  className="mt-6 w-full rounded-xl bg-cyan-500 py-3 font-semibold text-white transition duration-300 hover:bg-cyan-600"
                >
                  Explore Career →
                </button>

              </div>

            ))}

          </div>

        )}

      </div>
    </section>
  );
}

export default LanguageCard;