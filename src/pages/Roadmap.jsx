import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";


const roadmapData = {
  "Web Development": {
    language: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    steps: [
      "HTML & CSS Basics",
      "JavaScript Fundamentals",
      "React.js",
      "Backend with Node.js",
      "Database (MongoDB / SQL)",
      "Build Full Stack Projects",
    ],
  },

  "Artificial Intelligence": {
    language: "Python",
    link: "https://www.python.org/about/gettingstarted/",
    steps: [
      "Python Basics",
      "Data Structures",
      "NumPy & Pandas",
      "Machine Learning",
      "Deep Learning",
      "AI Projects",
    ],
  },

  "Cyber Security": {
    language: "Python",
    link: "https://www.kali.org/docs/",
    steps: [
      "Computer Networks",
      "Linux Basics",
      "Python Scripting",
      "Ethical Hacking",
      "Security Tools",
      "Security Projects",
    ],
  },

  "Data Science": {
    language: "Python",
    link: "https://pandas.pydata.org/docs/",
    steps: [
      "Python Basics",
      "Statistics",
      "Data Analysis",
      "Machine Learning",
      "Data Visualization",
      "Real Data Projects",
    ],
  },
};


function Roadmap() {
const navigate = useNavigate();
  const { darkMode } = useTheme();
  const { career } = useParams();
const [completedSteps, setCompletedSteps] = useState(() => {

  const saved =
    localStorage.getItem(
      `${career}-progress`
    );

  return saved
    ? JSON.parse(saved)
    : [];

});
  const roadmap = roadmapData[career];
  const toggleStep = (index) => {

  if (completedSteps.includes(index)) {

    setCompletedSteps(
      completedSteps.filter(
        (step) => step !== index
      )
    );

  } else {

    setCompletedSteps([
      ...completedSteps,
      index
    ]);

  }

};
useEffect(() => {

  localStorage.setItem(
    `${career}-progress`,
    JSON.stringify(completedSteps)
  );

}, [completedSteps, career]);
const progress =
  Math.round(
    (completedSteps.length / roadmap.steps.length) * 100
  );


  return (
    <div
      className={`min-h-screen px-6 py-16 ${
        darkMode
          ? "bg-slate-950 text-white"
          : "bg-gradient-to-br from-cyan-50 via-white to-slate-100"
      }`}
    >

      <div className="max-w-4xl mx-auto">
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

  

        <motion.div
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          className={`rounded-3xl p-10 shadow-2xl border ${
            darkMode
              ? "bg-slate-900 border-cyan-500/20"
              : "bg-white border-cyan-200"
          }`}
        >

         <motion.div
  initial={{
    opacity:0,
    y:-30
  }}
  animate={{
    opacity:1,
    y:0
  }}
  className="mb-10"
>

  <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
    🚀 {career}
  </h1>

  <p className="mt-3 text-2xl font-semibold">
    Career Roadmap
  </p>


  <div className="mt-6 grid md:grid-cols-2 gap-5">


    <div className={`rounded-2xl p-6 border ${
      darkMode
      ? "bg-slate-800 border-slate-700"
      : "bg-white border-gray-200"
    }`}>

      <p className="text-cyan-400 font-semibold">
        💻 Recommended Language
      </p>

      <h2 className="text-3xl font-bold mt-2">
        {roadmap.language}
      </h2>

    </div>


    <div className={`rounded-2xl p-6 border ${
      darkMode
      ? "bg-slate-800 border-slate-700"
      : "bg-white border-gray-200"
    }`}>

      <p className="text-cyan-400 font-semibold">
        🎯 Total Steps
      </p>

      <h2 className="text-3xl font-bold mt-2">
        {roadmap.steps.length}
      </h2>

    </div>


  </div>


</motion.div>


          <div className="mt-10">

  <div className="mb-8">

    <div className="flex justify-between mb-2">
      <span className="font-semibold">
        Learning Progress
      </span>

      <span className="text-cyan-400 font-bold">
        {progress}%
      </span>
    </div>


    <div className="h-3 rounded-full bg-gray-200 dark:bg-slate-700">

      <div
        className="h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
        style={{
 width:`${progress}%`
}}
      ></div>

    </div>

  </div>
{progress === 100 && (

  <motion.div
    initial={{
      opacity:0,
      scale:0.8
    }}
    animate={{
      opacity:1,
      scale:1
    }}
    transition={{
      duration:0.5
    }}
    className={`mt-10 rounded-3xl p-8 text-center border shadow-xl ${
      darkMode
        ? "bg-slate-800 border-cyan-500/30"
        : "bg-white border-cyan-200"
    }`}
  >

    <motion.div
      animate={{
        rotate:[0,10,-10,0]
      }}
      transition={{
        duration:2,
        repeat:Infinity
      }}
      className="text-7xl"
    >
      🏆
    </motion.div>


    <h2 className="mt-5 text-4xl font-extrabold text-cyan-400">
      Achievement Unlocked!
    </h2>


    <p className="mt-3 text-xl font-semibold">
      {career} Roadmap Completed 🎉
    </p>


    <div className="mt-6 rounded-2xl bg-cyan-500/10 p-5">

      <p className="text-sm text-cyan-400">
        Certificate
      </p>

      <h3 className="text-2xl font-bold mt-2">
        CodeCareer AI Certified
      </h3>

      <p className="mt-2">
        Successfully completed the learning roadmap.
      </p>

    </div>


    <button
      onClick={() => window.print()}
      className="mt-8 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-white font-bold hover:scale-105 transition"
    >
      🖨️ Print Certificate
    </button>


  </motion.div>

)}

  <div className="relative mt-10">

  <div className="absolute left-5 top-0 h-full w-1 bg-cyan-500/30">
  </div>


  <div className="space-y-8">

    {roadmap.steps.map((step,index)=>(

      <motion.div
        key={index}
        onClick={() => toggleStep(index)}
        initial={{
          opacity:0,
          x:-40
        }}
        animate={{
          opacity:1,
          x:0
        }}
        transition={{
          delay:index * 0.15
        }}
        whileHover={{
          scale:1.03
        }}
        className={`relative flex items-center gap-6 cursor-pointer rounded-3xl p-6 border backdrop-blur-xl ${
          darkMode
          ? "bg-slate-800/80 border-slate-700"
          : "bg-white/80 border-gray-200"
        }`}
      >


        <div
          className={`z-10 flex h-12 w-12 items-center justify-center rounded-full font-bold text-white ${
            completedSteps.includes(index)
            ? "bg-green-500"
            : "bg-cyan-500"
          }`}
        >
          {completedSteps.includes(index)
            ? "✓"
            : index + 1}
        </div>


        <div>

          <p className="text-sm text-cyan-400">
            Level {index + 1}
          </p>


          <h3 className="text-xl font-bold">
            {step}
          </h3>


          <p className="text-sm mt-1 opacity-70">
            Click to mark as completed
          </p>

        </div>


      </motion.div>

    ))}

  </div>

</div>
</div>


        </motion.div>

      </div>

    </div>
  );
}

export default Roadmap;