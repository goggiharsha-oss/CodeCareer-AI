import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

function CProgramming() {
const [selectedProject, setSelectedProject] = useState(null);
const [activeQuestion, setActiveQuestion] = useState(null);

  const skills = [
    "C Basics",
    "Variables & Data Types",
    "Operators",
    "Conditional Statements",
    "Loops",
    "Functions",
    "Pointers",
    "Structures",
    "File Handling",
    "Problem Solving",
  ];

const skillProgress = [
  {
    name:"C Basics",
    level:95
  },
  {
    name:"Variables & Data Types",
    level:90
  },
  {
    name:"Functions",
    level:80
  },
  {
    name:"Pointers",
    level:65
  },
  {
    name:"Data Structures",
    level:55
  }
];

  const roadmap = [
    "Learn C Fundamentals",
    "Understand Variables & Operators",
    "Learn Conditional Statements",
    "Master Loops",
    "Learn Functions",
    "Understand Pointers",
    "Study Data Structures",
    "Practice C Programs",
    "Build Mini Projects",
    "Apply for Programming Jobs",
  ];



  const certifications = [
    "C Programming Certification",
    "NPTEL C Programming Certificate",
    "HackerRank C Certificate",
    "Coursera C Programming Certificate",
  ];



  const tools = [
    "C Language",
    "GCC Compiler",
    "VS Code",
    "Code::Blocks",
    "Dev C++",
    "Linux Terminal",
  ];



  const projects = [

  {
    name:"Student Management System",
    category:"Management System",
    difficulty:"Intermediate",
    skills:[
      "C",
      "Structures",
      "File Handling"
    ],
    desc:"Create a student record management system using C structures and file handling.",
    icon:"🎓"
  },


  {
    name:"Bank Management System",
    category:"Console Application",
    difficulty:"Advanced",
    skills:[
      "C",
      "Functions",
      "File Handling"
    ],
    desc:"Develop a banking application to manage accounts and transactions.",
    icon:"🏦"
  },


  {
    name:"Calculator Application",
    category:"Beginner Project",
    difficulty:"Beginner",
    skills:[
      "C",
      "Operators",
      "Functions"
    ],
    desc:"Build a calculator application using C operators and functions.",
    icon:"🧮"
  },


  {
    name:"Library Management System",
    category:"Database Project",
    difficulty:"Intermediate",
    skills:[
      "C",
      "Structures",
      "File Handling"
    ],
    desc:"Create a library system to manage books and user records.",
    icon:"📚"
  },


  {
    name:"File Handling Project",
    category:"System Programming",
    difficulty:"Advanced",
    skills:[
      "C",
      "Files",
      "Pointers"
    ],
    desc:"Practice file operations and memory concepts in C.",
    icon:"📁"
  }

];



  const companies = [
    "Google",
    "Microsoft",
    "Intel",
    "IBM",
    "Oracle",
    "Infosys",
    "TCS",
    "Accenture",
  ];



  const jobRoles = [
    {
      role:"C Programmer",
      salary:"₹3–8 LPA",
      desc:"Develop software programs using C language."
    },
    {
      role:"Embedded Developer",
      salary:"₹5–15 LPA",
      desc:"Build embedded systems and hardware solutions."
    },
    {
      role:"System Programmer",
      salary:"₹6–18 LPA",
      desc:"Develop low-level system applications."
    },
    {
      role:"Software Engineer",
      salary:"₹6–20 LPA",
      desc:"Create efficient software solutions."
    }
  ];

const interviewQuestions = [
  {
    question:"What is C programming?",
    answer:"C is a procedural programming language used for system programming and software development.",
    level:"Beginner"
  },
  {
    question:"What are pointers in C?",
    answer:"Pointers are variables that store memory addresses of other variables.",
    level:"Intermediate"
  },
  {
    question:"Difference between array and pointer?",
    answer:"Array stores multiple values while pointer stores memory address.",
    level:"Intermediate"
  },
  {
    question:"Explain memory management in C.",
    answer:"C uses malloc(), calloc(), realloc() and free() for dynamic memory management.",
    level:"Advanced"
  }
];



  return (

    <div className="min-h-screen bg-slate-950 text-white">



      {/* HERO SECTION */}


      <div
        className="
        bg-gradient-to-br
        from-slate-900
        via-blue-950
        to-slate-950
        border-b
        border-slate-800
        "
      >


        <div className="max-w-7xl mx-auto px-6 py-16">


          <Link
            to="/"
            className="text-cyan-400 hover:text-cyan-300"
          >
            ← Back to Home
          </Link>




          <div className="grid md:grid-cols-2 gap-10 items-center mt-10">



            <div>


              <motion.h1

                initial={{
                  opacity:0,
                  x:-50
                }}

                animate={{
                  opacity:1,
                  x:0
                }}

                transition={{
                  duration:0.7
                }}

                className="text-5xl font-bold"

              >

                💻 C Programming

              </motion.h1>




              <motion.p

                initial={{
                  opacity:0
                }}

                animate={{
                  opacity:1
                }}

                transition={{
                  delay:0.4
                }}

                className="text-gray-400 text-lg mt-6"

              >

                Learn the foundation of programming with C language,
                memory management, system programming and problem solving.

              </motion.p>



            </div>







            {/* C PROGRAMMING CARD */}


            <motion.div

              animate={{
                y:[0,-20,0],
                rotate:[0,8,-8,0]
              }}

              transition={{
                duration:4,
                repeat:Infinity
              }}


              className="
              h-72
              rounded-3xl
              bg-gradient-to-br
              from-blue-500
              to-cyan-600
              flex
              items-center
              justify-center
              text-8xl
              shadow-2xl
              shadow-blue-500/30
              "

            >

              <div className="text-8xl font-bold bg-blue-600 rounded-2xl w-32 h-32 flex items-center justify-center">
  C
</div>

            </motion.div>



          </div>



        </div>


      </div>
      

      <div className="max-w-7xl mx-auto px-6 py-12">


        {/* SALARY SECTION */}


        <motion.div

          initial={{
            opacity:0,
            y:50
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          className="
          bg-slate-900
          rounded-3xl
          p-8
          "

        >


          <h2 className="text-3xl font-bold text-cyan-400">
            💰 C Programmer Salary
          </h2>




          <div className="grid md:grid-cols-3 gap-6 mt-8">


            {
              [
                ["Fresher","₹3–6 LPA"],
                ["Experienced","₹8–15 LPA"],
                ["Senior","₹20+ LPA"]
              ].map((item,index)=>(


                <motion.div

                  key={index}

                  whileHover={{
                    scale:1.08,
                    rotateX:10,
                    rotateY:10
                  }}

                  className="
                  bg-slate-800
                  rounded-2xl
                  p-8
                  text-center
                  border
                  border-slate-700
                  "

                >


                  <h3 className="font-bold text-xl">
                    {item[0]}
                  </h3>


                  <p className="text-4xl text-cyan-400 mt-4">
                    {item[1]}
                  </p>


                </motion.div>


              ))
            }


          </div>


        </motion.div>








        {/* SKILLS SECTION */}



        <motion.div

          initial={{
            opacity:0,
            y:50
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          className="
          bg-slate-900
          rounded-3xl
          p-8
          mt-8
          "

        >


          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            🛠 C Programming Skills Required
          </h2>




          <div className="grid md:grid-cols-3 gap-6">


            {
              skills.map((skill,index)=>(


                <motion.div

                  key={index}

                  whileHover={{
                    scale:1.08,
                    y:-10
                  }}

                  className="
                  bg-slate-800
                  rounded-2xl
                  p-6
                  border
                  border-slate-700
                  hover:border-cyan-400
                  transition
                  "

                >


                  <div className="text-3xl">
                    💻
                  </div>



                  <h3 className="font-semibold text-lg mt-4">
                    {skill}
                  </h3>



                </motion.div>


              ))
            }


          </div>


        </motion.div>




{/* SKILL PROGRESS TRACKER */}


<motion.div

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

className="
bg-slate-900
rounded-3xl
p-8
mt-8
"

>


<h2 className="text-3xl font-bold text-cyan-400 mb-8">

🎯 C Skill Progress

</h2>



<div className="space-y-6">


{
skillProgress.map((skill,index)=>(


<div key={index}>


<div className="flex justify-between mb-2">


<h3 className="font-semibold">

{skill.name}

</h3>


<span className="text-cyan-400">

{skill.level}%

</span>


</div>



<div
className="
w-full
h-4
bg-slate-700
rounded-full
overflow-hidden
"
>


<motion.div

initial={{
width:0
}}

whileInView={{
width:`${skill.level}%`
}}

transition={{
duration:1,
delay:index*0.2
}}

className="
h-full
bg-gradient-to-r
from-cyan-400
to-blue-500
rounded-full
"

>


</motion.div>


</div>


</div>


))
}


</div>


</motion.div>



        {/* TOOLS SECTION */}



        <motion.div

          initial={{
            opacity:0,
            y:50
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          className="
          bg-slate-900
          rounded-3xl
          p-8
          mt-8
          "

        >


          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            ⚙️ C Tools & Technologies
          </h2>



          <div className="grid md:grid-cols-3 gap-5">


            {
              tools.map((tool,index)=>(


                <motion.div

                  key={index}

                  whileHover={{
                    scale:1.1,
                    rotateY:10
                  }}

                  className="
                  bg-gradient-to-br
                  from-slate-800
                  to-slate-700
                  rounded-xl
                  p-6
                  text-center
                  font-semibold
                  border
                  border-slate-700
                  "

                >


                  🚀 {tool}


                </motion.div>


              ))
            }


          </div>


        </motion.div>
        

        {/* PROJECTS SECTION */}


        <motion.div

          initial={{
            opacity:0,
            y:50
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          className="
          bg-slate-900
          rounded-3xl
          p-8
          mt-8
          "

        >


          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            🚀 C Programming Projects To Build
          </h2>



          <div className="grid md:grid-cols-3 gap-6">


            {
              projects.map((project,index)=>(


                <motion.div

                  key={index}

                  whileHover={{
                    scale:1.08,
                    y:-8
                  }}

                  className="
bg-slate-800
rounded-2xl
p-6
border
border-slate-700
hover:border-cyan-400
hover:shadow-xl
hover:shadow-cyan-500/30
transition
duration-300
"
                >


                  <h3 className="font-bold text-lg">
                    {project.icon} {project.name}
                  </h3>


                  <p className="text-gray-400 mt-3">
                    {project.desc}
                  </p>
<button

onClick={() => setSelectedProject(project)}

className="
mt-5
px-5
py-2
rounded-xl
bg-cyan-500
text-black
font-bold
"

>

View Details →

</button>

                </motion.div>


              ))
            }


          </div>


        </motion.div>




{/* CAREER CTA */}


<motion.div

  initial={{
    opacity:0,
    y:50
  }}

  whileInView={{
    opacity:1,
    y:0
  }}

  className="
  bg-gradient-to-r
  from-blue-900
  to-cyan-900
  rounded-3xl
  p-10
  mt-8
  text-center
  "

>


<h2 className="text-3xl font-bold">

🚀 Ready to Become a C Programmer?

</h2>


<p className="text-gray-300 mt-4">

Follow the roadmap, practice programs and prepare for interviews.

</p>



<div className="flex justify-center gap-5 mt-8 flex-wrap">



<button

onClick={() =>
document.getElementById("roadmap")
.scrollIntoView({
behavior:"smooth"
})
}

className="
px-6
py-3
rounded-xl
bg-cyan-500
text-black
font-bold
"

>

🛣 Start Roadmap

</button>




<button

onClick={() =>
document.getElementById("interview")
.scrollIntoView({
behavior:"smooth"
})
}

className="
px-6
py-3
rounded-xl
bg-white
text-black
font-bold
"

>

🎤 Practice Interview

</button>



</div>


</motion.div>

{/* PROJECT POPUP */}


{
selectedProject && (

<motion.div

initial={{
opacity:0
}}

animate={{
opacity:1
}}

className="
fixed
inset-0
bg-black/70
flex
items-center
justify-center
z-50
"

>


<motion.div

initial={{
scale:0.7
}}

animate={{
scale:1
}}

className="
bg-slate-900
rounded-3xl
p-8
max-w-lg
w-full
border
border-cyan-400
"

>


<h2 className="text-3xl font-bold text-cyan-400">

{selectedProject.icon} {selectedProject.name}

</h2>



<p className="text-cyan-400 mt-3">

{selectedProject.category}

</p>



<p className="text-gray-300 mt-4">

{selectedProject.desc}

</p>



<div className="flex flex-wrap gap-2 mt-5">

{
selectedProject.skills.map((skill,index)=>(

<span

key={index}

className="
px-3
py-1
rounded-full
bg-cyan-500/20
text-cyan-300
"

>

{skill}

</span>

))
}

</div>



<button

onClick={() => setSelectedProject(null)}

className="
mt-6
px-5
py-2
bg-cyan-500
text-black
rounded-xl
font-bold
"

>

Close

</button>



</motion.div>


</motion.div>

)
}

        {/* ROADMAP SECTION */}



        <motion.div
id="roadmap"
          initial={{
            opacity:0,
            y:50
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          className="
          bg-slate-900
          rounded-3xl
          p-8
          mt-8
          "

        >


          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            🗺 C Programming Learning Roadmap
          </h2>



          <div className="space-y-5">


            {
              roadmap.map((step,index)=>(


                <motion.div

                  key={index}

                  initial={{
                    opacity:0,
                    x:-40
                  }}

                  whileInView={{
                    opacity:1,
                    x:0
                  }}

                  transition={{
                    delay:index*0.1
                  }}

                  className="
                  flex
                  items-center
                  gap-5
                  bg-slate-800
                  rounded-2xl
                  p-5
                  border
                  border-slate-700
                  "

                >


                  <div
                    className="
                    w-12
                    h-12
                    rounded-full
                    bg-cyan-500
                    flex
                    items-center
                    justify-center
                    font-bold
                    text-black
                    "
                  >

                    {index+1}

                  </div>


                  <p className="text-lg">
                    {step}
                  </p>


                </motion.div>


              ))
            }


          </div>


        </motion.div>




{/* INTERVIEW PREPARATION */}


<motion.div

id="interview"

initial={{
  opacity:0,
  y:50
}}

whileInView={{
  opacity:1,
  y:0
}}

className="
bg-slate-900
rounded-3xl
p-8
mt-8
"

>


<h2 className="text-3xl font-bold text-cyan-400 mb-8">

🎤 C Programming Interview Preparation

</h2>



<div className="grid md:grid-cols-2 gap-6">


{
interviewQuestions.map((item,index)=>(


<motion.div

key={index}

whileHover={{
scale:1.05,
y:-8
}}

className="
bg-slate-800
rounded-2xl
p-6
border
border-slate-700
"

>


<div className="flex justify-between items-center">


<h3 className="font-bold">

Question {index+1}

</h3>



<span
className="
bg-cyan-500
text-black
px-3
py-1
rounded-full
text-sm
"
>

{item.level}

</span>


</div>



<p className="text-gray-300 mt-4">

{item.question}

</p>



<button

onClick={() =>
setActiveQuestion(
activeQuestion === index ? null : index
)
}

className="
mt-5
px-4
py-2
rounded-xl
bg-cyan-500
text-black
font-bold
"

>

{
activeQuestion === index
?
"Hide Answer"
:
"Show Answer"
}

</button>




{
activeQuestion === index && (

<motion.p

initial={{
opacity:0,
y:-10
}}

animate={{
opacity:1,
y:0
}}

className="
mt-5
text-green-400
"

>

💡 {item.answer}

</motion.p>

)

}



</motion.div>


))
}


</div>


</motion.div>



        {/* CERTIFICATIONS */}



        <motion.div

          initial={{
            opacity:0,
            y:50
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          className="
          bg-slate-900
          rounded-3xl
          p-8
          mt-8
          "

        >


          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            🎓 C Programming Certifications
          </h2>



          <div className="grid md:grid-cols-2 gap-6">


            {
              certifications.map((cert,index)=>(


                <motion.div

                  key={index}

                  whileHover={{
                    scale:1.05,
                    y:-8
                  }}

                  className="
                  bg-slate-800
                  rounded-2xl
                  p-6
                  border
                  border-slate-700
                  "

                >

                  🏆 {cert}


                </motion.div>


              ))
            }


          </div>


        </motion.div>








        {/* CAREER OPPORTUNITIES */}



        <motion.div

          initial={{
            opacity:0,
            y:50
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          className="
          bg-slate-900
          rounded-3xl
          p-8
          mt-8
          "

        >


          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            💼 C Programming Career Opportunities
          </h2>



          <div className="grid md:grid-cols-2 gap-6">


            {
              jobRoles.map((job,index)=>(


                <motion.div

                  key={index}

                  whileHover={{
                    scale:1.05
                  }}

                  className="
                  bg-slate-800
                  rounded-2xl
                  p-6
                  border
                  border-slate-700
                  "

                >


                  <h3 className="text-xl font-bold">
                    🚀 {job.role}
                  </h3>


                  <p className="text-gray-400 mt-3">
                    {job.desc}
                  </p>


                  <p className="text-green-400 font-bold mt-4">
                    {job.salary}
                  </p>


                </motion.div>


              ))
            }


          </div>


        </motion.div>








        {/* TOP COMPANIES */}



        <motion.div

          initial={{
            opacity:0,
            y:50
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          className="
          bg-slate-900
          rounded-3xl
          p-8
          mt-8
          "

        >


          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            🏢 Top C Programming Companies
          </h2>




          <div className="grid md:grid-cols-4 gap-5">


            {
              companies.map((company,index)=>(


                <motion.div

                  key={index}

                  whileHover={{
                    scale:1.1,
                    rotateY:10
                  }}

                  className="
                  bg-slate-800
                  rounded-xl
                  p-6
                  text-center
                  font-semibold
                  border
                  border-slate-700
                  hover:bg-cyan-600
                  hover:border-cyan-400
                  transition
                  "

                >

                  {company}


                </motion.div>


              ))
            }


          </div>


        </motion.div>


      </div>

    </div>

  );
}


export default CProgramming;