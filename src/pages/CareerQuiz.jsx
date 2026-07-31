import { useTheme } from "../context/ThemeContext";

function CareerQuiz() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        darkMode
          ? "bg-slate-950 text-white"
          : "bg-white text-slate-900"
      }`}
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold text-cyan-500">
          🤖 AI Career Quiz
        </h1>

        <p className="mt-4 text-lg">
          Career Quiz Page is Ready 🚀
        </p>
      </div>
    </div>
  );
}

export default CareerQuiz;