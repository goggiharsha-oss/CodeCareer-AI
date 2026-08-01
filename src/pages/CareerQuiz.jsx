import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { CheckCircle, ArrowLeft } from "lucide-react";
const careerDetails = {
  "Web Development": {
    percentage: "92%",
    language: "JavaScript",
    salary: "₹4 - 8 LPA",
    roles: "Frontend Developer, Full Stack Developer",
    icon: "🌐",
  },

  "Artificial Intelligence": {
    percentage: "95%",
    language: "Python",
    salary: "₹6 - 15 LPA",
    roles: "AI Engineer, Machine Learning Engineer",
     icon: "🤖",
  },

  "Cyber Security": {
    percentage: "90%",
    language: "Python",
    salary: "₹5 - 12 LPA",
    roles: "Security Analyst, Ethical Hacker",
    icon: "🛡️",
  },

  "Data Science": {
    percentage: "93%",
    language: "Python",
    salary: "₹6 - 14 LPA",
    roles: "Data Scientist, Data Analyst",
      icon: "📊",
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
  const [showWarning, setShowWarning] = useState(false);
  const [resultCareer, setResultCareer] = useState("");

  const handleNext = () => {
    if (!selectedAnswer) {
      setShowWarning(true);

setTimeout(() => {
  setShowWarning(false);
}, 2500);

return;
    }

    const updatedAnswers = [...answers];
updatedAnswers[currentQuestion] = selectedAnswer;
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
const handleBack = () => {
  if (currentQuestion > 0) {
    const previousQuestion = currentQuestion - 1;

    setCurrentQuestion(previousQuestion);
    setSelectedAnswer(
      answers[previousQuestion] || ""
    );
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
      {showWarning && (
  <motion.div
    initial={{ opacity: 0, scale: 0.7, y: -20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0 }}
    className="mb-6 flex items-center justify-center gap-4"
  >

    {/* Robot */}
    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 0.8,
        repeat: Infinity,
      }}
      className="text-6xl"
    >
      🤖
    </motion.div>


    {/* Speech Bubble */}
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      className="
      relative
      rounded-3xl
      bg-white
      dark:bg-gray-800
      px-6
      py-4
      shadow-2xl
      border
      border-yellow-400
      "
    >

      {/* Bubble Arrow */}
      <div
        className="
        absolute
        left-[-10px]
        top-1/2
        -translate-y-1/2
        w-5
        h-5
        bg-white
        dark:bg-gray-800
        rotate-45
        border-l
        border-b
        border-yellow-400
        "
      ></div>


      <h3 className="font-bold text-yellow-600 dark:text-yellow-300">
        Hey! 👋
      </h3>

      <p className="text-sm">
        Select an option first, then I can guide your career path 🚀
      </p>

    </motion.div>

  </motion.div>
)}
        <div className="mb-6">

  <button
    onClick={() => navigate("/")}
    className="group flex items-center gap-2 rounded-xl border border-cyan-500 bg-cyan-500/10 px-5 py-3 text-cyan-400 font-semibold transition-all duration-300 hover:bg-cyan-500 hover:text-white hover:shadow-lg hover:shadow-cyan-500/30"
  >
    <ArrowLeft
      size={20}
      className="transition-transform duration-300 group-hover:-translate-x-1"
    />
    Back to Home
  </button>
</div>

        {showResult ? (

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`rounded-3xl p-12 text-center border shadow-2xl backdrop-blur-xl transition-all duration-500 ${
              darkMode
                ? "bg-slate-900 border-cyan-500/20"
                : "bg-white border-cyan-200"
            }`}
          >
<div className="mb-6 text-left">
  <button
    onClick={() => navigate("/")}
    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition"
  >
    ← Back to Home
  </button>
</div>
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

            <motion.h1
  initial={{
    opacity:0,
    y:-20
  }}
  animate={{
    opacity:1,
    y:0
  }}
  transition={{
    duration:0.5
  }}
  className="text-4xl font-bold text-cyan-400"
>
  🎯 Your Best Career Path
</motion.h1>
<motion.div
  animate={{
    y: [0, -10, 0],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
  }}
  className="text-7xl mb-4"
>
  {careerDetails[resultCareer].icon}
</motion.div>
            <h2 className="text-4xl font-extrabold mt-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
  {resultCareer}
</h2>
<div className="mt-8 flex justify-center">

  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.6 }}
    className="relative flex h-40 w-40 items-center justify-center rounded-full border-8 border-cyan-500 shadow-lg shadow-cyan-500/30"
  >

    <div className="text-center">
      <p className="text-5xl font-extrabold text-cyan-400">
        {careerDetails[resultCareer].percentage}
      </p>

      <p className="text-sm mt-2">
        Match Score
      </p>
    </div>

  </motion.div>

</div>
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
              Based on your interests and answers, our AI recommends this career path as the best fit for your future.
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

            <motion.div
  animate={{
    y:[0,-15,0]
  }}
  transition={{
    duration:2,
    repeat:Infinity
  }}
  className="text-7xl mb-6"
>
  🤖
</motion.div>


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
            className={`rounded-3xl p-10 border shadow-2xl backdrop-blur-xl ${
              darkMode
                ? "bg-slate-900/80 border-cyan-500/20"
                : "bg-white/90 border-cyan-200"
            }`}
          >

            <div className="inline-flex rounded-full bg-cyan-500/10 px-5 py-2 mb-6 text-cyan-400 font-semibold">
  Question {currentQuestion + 1} / {questions.length}
</div>
<div className="mb-8">
  <div className="flex justify-between text-sm mb-2">
    <span>Progress</span>

    <span>
      {Math.round(
        ((currentQuestion + 1) / questions.length) * 100
      )}%
    </span>
  </div>

  <div className="w-full h-3 rounded-full bg-gray-300 overflow-hidden">
    <motion.div
      animate={{
        width: `${((currentQuestion + 1) / questions.length) * 100}%`,
      }}
      transition={{ duration: 0.5 }}
      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
    />
  </div>
</div>


            
              <motion.h2
  key={currentQuestion}
  initial={{
    opacity: 0,
    x: 40,
  }}
  animate={{
    opacity: 1,
    x: 0,
  }}
  transition={{
    duration: 0.4,
  }}
  className="text-3xl font-bold mb-8"
>
  {questions[currentQuestion].question}
</motion.h2>


            <div className="space-y-4">

              {questions[currentQuestion].options.map(
                (option, index) => (

<motion.button
  key={`${currentQuestion}-${index}`}
  initial={{
  opacity: 0,
  x: 30,
}}

animate={{
  opacity: 1,
  x: 0,
}}

transition={{
  delay: index * 0.1,
  duration: 0.35,
}}
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  onClick={() => setSelectedAnswer(option.career)}
  className={`w-full rounded-2xl border p-5 text-left transition ${
    selectedAnswer === option.career
      ? "bg-cyan-500 text-white border-cyan-500 shadow-lg shadow-cyan-500/40"
      : darkMode
      ? "bg-slate-800 border-slate-700 hover:border-cyan-500"
      : "bg-white border-gray-200 hover:border-cyan-500"
  }`}
>
  <div className="flex items-center justify-between">
    <span className="font-medium">
      {option.text}
    </span>

    {selectedAnswer === option.career && (
      <CheckCircle size={24} />
    )}
  </div>
</motion.button>

              ))}

            </div>


           <div className="mt-8 flex gap-4">

  <motion.button
    onClick={handleBack}
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.96 }}
    disabled={currentQuestion === 0}
    className={`flex-1 rounded-xl py-4 font-semibold transition ${
      currentQuestion === 0
        ? "bg-gray-400 cursor-not-allowed text-white"
        : "bg-slate-700 text-white hover:bg-slate-600"
    }`}
  >
    ← Back
  </motion.button>

  <motion.button
    onClick={handleNext}
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.96 }}
    className="flex-1 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 font-semibold text-white"
  >
    {currentQuestion === questions.length - 1
      ? "Finish Quiz 🎉"
      : "Next →"}
  </motion.button>

</div>


          </motion.div>

        )}

      </div>

    </div>
  );
}

export default CareerQuiz;