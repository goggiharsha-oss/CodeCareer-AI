import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";
const careerDetails = {
  "Web Development": {
    percentage: "92%",
    language: "JavaScript",
    salary: "₹4 - 8 LPA",
    roles: "Frontend Developer, Full Stack Developer",
  },

  "Artificial Intelligence": {
    percentage: "95%",
    language: "Python",
    salary: "₹6 - 15 LPA",
    roles: "AI Engineer, Machine Learning Engineer",
  },

  "Cyber Security": {
    percentage: "90%",
    language: "Python",
    salary: "₹5 - 12 LPA",
    roles: "Security Analyst, Ethical Hacker",
  },

  "Data Science": {
    percentage: "93%",
    language: "Python",
    salary: "₹6 - 14 LPA",
    roles: "Data Scientist, Data Analyst",
  },
};
const questions = [
  {
    question: "What interests you the most?",
    options: [
      { text: "Building Websites", career: "Web Development" },
      { text: "Artificial Intelligence", career: "Artificial Intelligence" },
      { text: "Securing Systems", career: "Cyber Security" },
      { text: "Analyzing Data", career: "Data Science" },
    ],
  },
  {
    question: "Which subject do you enjoy?",
    options: [
      { text: "Programming", career: "Web Development" },
      { text: "Mathematics", career: "Artificial Intelligence" },
      { text: "Networking", career: "Cyber Security" },
      { text: "Statistics", career: "Data Science" },
    ],
  },
  {
    question: "What is your career goal?",
    options: [
      { text: "High Salary", career: "Artificial Intelligence" },
      { text: "Creative Work", career: "Web Development" },
      { text: "Security Expert", career: "Cyber Security" },
      { text: "Business Analytics", career: "Data Science" },
    ],
  },
];

function CareerQuiz() {
    const navigate = useNavigate();
  const { darkMode } = useTheme();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const [started, setStarted] = useState(false);

  const [showResult, setShowResult] = useState(false);
  const [resultCareer, setResultCareer] = useState("");

  const handleNext = () => {
    if (!selectedAnswer) {
      alert("Please select an option!");
      return;
    }

    const updatedAnswers = [...answers, selectedAnswer];
    setAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      const careerCount = {};

      updatedAnswers.forEach((career) => {
        careerCount[career] =
          (careerCount[career] || 0) + 1;
      });

      const bestCareer = Object.keys(careerCount).reduce(
        (a, b) =>
          careerCount[a] > careerCount[b] ? a : b
      );

      setResultCareer(bestCareer);
      setShowResult(true);
    }
  };


  return (
    <div
      className={`min-h-screen flex items-center justify-center px-6 transition-all duration-500 ${
        darkMode
          ? "bg-slate-950 text-white"
          : "bg-gradient-to-br from-cyan-50 via-white to-slate-100 text-slate-900"
      }`}
    >

      <div className="w-full max-w-3xl">

        {showResult ? (

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`rounded-3xl p-10 text-center border shadow-2xl ${
              darkMode
                ? "bg-slate-900 border-cyan-500/20"
                : "bg-white border-cyan-200"
            }`}
          >

            <motion.div
  animate={{
    y:[0,-15,0]
  }}
  transition={{
    duration:2,
    repeat:Infinity
  }}
  className="text-7xl mb-5"
>
  🏆
</motion.div>

            <h1 className="text-4xl font-bold text-cyan-400">
              Your Best Career Path
            </h1>

            <h2 className="text-4xl font-extrabold mt-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
  {resultCareer}
</h2>
            <div className="grid md:grid-cols-2 gap-5 mt-8">

  {[
    {
      icon: "📊",
      title: "Match Score",
      value: careerDetails[resultCareer].percentage,
    },
    {
      icon: "💻",
      title: "Recommended Language",
      value: careerDetails[resultCareer].language,
    },
    {
      icon: "💰",
      title: "Expected Salary",
      value: careerDetails[resultCareer].salary,
    },
    {
      icon: "🚀",
      title: "Job Roles",
      value: careerDetails[resultCareer].roles,
    },
  ].map((card, index) => (

    <motion.div
      key={index}
      initial={{
        opacity: 0,
        y: 30
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        delay: index * 0.15
      }}
      whileHover={{
        scale: 1.05
      }}
      className={`rounded-2xl p-6 border backdrop-blur-xl transition ${
        darkMode
          ? "bg-slate-800/70 border-slate-700"
          : "bg-white/80 border-gray-200"
      }`}
    >

      <div className="text-4xl mb-3">
        {card.icon}
      </div>

      <h3 className="font-semibold text-cyan-400">
        {card.title}
      </h3>

      <p className="mt-3 text-xl font-bold">
        {card.value}
      </p>

    </motion.div>

  ))}

</div>

            <p
              className={`mt-5 text-lg ${
                darkMode
                  ? "text-gray-300"
                  : "text-gray-600"
              }`}
            >
              Based on your answers, this career is the
              best match for you.
            </p>


            <motion.button
  onClick={() => window.location.reload()}
  whileHover={{
    scale:1.05
  }}
  className="mt-8 rounded-xl border border-cyan-500 px-8 py-4 font-semibold text-cyan-400"
>
  🔄 Retake Quiz
</motion.button>
            <motion.button
  onClick={() =>
    navigate(`/roadmap/${resultCareer}`)
  }
  whileHover={{
    scale: 1.08
  }}
  whileTap={{
    scale: 0.95
  }}
  className="mt-5 ml-4 relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 px-8 py-4 text-white font-bold shadow-lg"
>

  <span className="flex items-center gap-2">
    🚀
    View Roadmap
  </span>

</motion.button>

          </motion.div>


        ) : !started ? (

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
           className={`rounded-3xl p-10 text-center border shadow-2xl backdrop-blur-xl transition-all duration-500 ${
  darkMode
    ? "bg-slate-900/70 border-cyan-500/30"
    : "bg-white/80 border-cyan-200"
}`}
          >

            <div className="text-7xl mb-6">
              🤖
            </div>


            <h1 className="text-4xl font-bold text-cyan-400">
              AI Career Advisor
            </h1>


            <p className="mt-6 text-lg">
              Answer simple questions and discover
              your best programming career path.
            </p>


            <button
              onClick={() => setStarted(true)}
              className="mt-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-white text-lg font-semibold hover:scale-105 transition"
            >
              🚀 Start Quiz
            </button>


          </motion.div>


        ) : (


          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`rounded-3xl p-10 border shadow-2xl ${
              darkMode
                ? "bg-slate-900/80 border-cyan-500/20"
                : "bg-white/90 border-cyan-200"
            }`}
          >

            <p className="text-cyan-400 font-semibold mb-4">
              Question {currentQuestion + 1} of {questions.length}
            </p>


            <h2 className="text-3xl font-bold mb-8">
              {questions[currentQuestion].question}
            </h2>


            <div className="space-y-4">

              {questions[currentQuestion].options.map(
                (option, index) => (

                <button
                  key={index}
                  onClick={() =>
                    setSelectedAnswer(option.career)
                  }
                  className={`w-full rounded-2xl border p-5 text-left transition ${
                    selectedAnswer === option.career
                      ? "bg-cyan-500 text-white border-cyan-500"
                      : darkMode
                      ? "bg-slate-800 border-slate-700 hover:border-cyan-500"
                      : "bg-white border-gray-200 hover:border-cyan-500"
                  }`}
                >
                  {option.text}
                </button>

              ))}

            </div>


            <button
              onClick={handleNext}
              className="mt-8 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 text-white font-semibold hover:scale-105 transition"
            >

              {currentQuestion === questions.length - 1
                ? "Finish Quiz 🎉"
                : "Next →"}

            </button>


          </motion.div>

        )}

      </div>

    </div>
  );
}

export default CareerQuiz;