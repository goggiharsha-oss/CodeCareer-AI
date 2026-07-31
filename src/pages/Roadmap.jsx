import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

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

  const { darkMode } = useTheme();
  const { career } = useParams();
const [completedSteps, setCompletedSteps] = useState([]);
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

        <motion.div
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          className={`rounded-3xl p-10 shadow-2xl border ${
            darkMode
              ? "bg-slate-900 border-cyan-500/20"
              : "bg-white border-cyan-200"
          }`}
        >

          <h1 className="text-4xl font-bold text-cyan-400">
            🚀 {career} Roadmap
          </h1>


          <p className="mt-4 text-xl">
            Recommended Language:
            <span className="font-bold">
              {" "}{roadmap.language}
            </span>
          </p>


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
    className="mt-8 rounded-3xl p-6 text-center border bg-cyan-500/10"
  >

    <div className="text-6xl">
      🏆
    </div>


    <h2 className="text-3xl font-bold mt-4 text-cyan-400">
      Roadmap Completed!
    </h2>


    <p className="mt-3">
      Congratulations! You completed your {career} roadmap.
    </p>


    <button
    onClick={() => window.open(roadmap.link, "_blank")}
      className="mt-6 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition"
    >
      🚀 Start Learning
    </button>


  </motion.div>

)}

  <div className="space-y-5">

    {roadmap.steps.map((step,index)=>(

      <motion.div
        key={index}
        onClick={() => toggleStep(index)}
        initial={{
          opacity:0,
          x:-30
        }}
        animate={{
          opacity:1,
          x:0
        }}
        transition={{
          delay:index * 0.15
        }}
        className={`flex items-center gap-5 rounded-2xl border p-5 transition hover:scale-[1.02] ${
          darkMode
          ? "bg-slate-800 border-slate-700 hover:border-cyan-500"
          : "bg-white border-gray-200 hover:border-cyan-500"
        }`}
      >

        <CheckCircle
          className="text-cyan-500"
          size={32}
        />


        <div>

          <p className="text-sm text-cyan-400">
            Step {index+1}
          </p>

          <p className="text-lg font-bold">
            {step}
          </p>

        </div>


      </motion.div>

    ))}

  </div>

</div>


        </motion.div>

      </div>

    </div>
  );
}

export default Roadmap;