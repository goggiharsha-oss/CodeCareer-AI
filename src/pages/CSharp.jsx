import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
function CSharp() {
const [selectedProject, setSelectedProject] = useState(null);
const [activeQuestion, setActiveQuestion] = useState(null);
const [completedTopics, setCompletedTopics] = useState([]);


  const skills = [
    "C# Basics",
    "Object-Oriented Programming",
    "Classes & Objects",
    "Inheritance",
    "Interfaces",
    "Exception Handling",
    "LINQ",
    "Collections",
    "Database Connectivity",
    "Problem Solving",
  ];

const skillProgress = [
  {
    name: "C# Basics",
    level: 95,
  },
  {
    name: "Object-Oriented Programming",
    level: 90,
  },
  {
    name: ".NET Framework",
    level: 80,
  },
  {
    name: "ASP.NET",
    level: 70,
  },
  {
    name: "Database Connectivity",
    level: 65,
  },
];

  const roadmap = [
    "Learn C# Fundamentals",
    "Understand Variables & Data Types",
    "Learn OOP Concepts",
    "Master Classes & Interfaces",
    "Learn .NET Framework",
    "Practice Database Integration",
    "Build C# Applications",
    "Learn ASP.NET Development",
    "Create Portfolio Projects",
    "Apply for C# Jobs",
  ];



  const certifications = [
    "Microsoft C# Certification",
    "Microsoft Azure Developer Certificate",
    ".NET Developer Certification",
    "Udemy C# Masterclass",
  ];



  const tools = [
    "C#",
    "Visual Studio",
    "Visual Studio Code",
    ".NET",
    "ASP.NET",
    "SQL Server",
  ];



 const projects = [
  {
    name: "Bank Management System",
    category: "Desktop Application",
    difficulty: "Intermediate",
    skills: [".NET", "SQL Server", "Classes"],
    desc: "Build a banking system with account management and transactions using C#.",
    icon: "🏦",
  },
  {
    name: "Desktop Application",
    category: "Windows Forms",
    difficulty: "Beginner",
    skills: ["C#", ".NET", "Visual Studio"],
    desc: "Create a desktop application using Windows Forms and C#.",
    icon: "💻",
  },
  {
    name: "E-Commerce Application",
    category: "Web Application",
    difficulty: "Advanced",
    skills: ["ASP.NET", "SQL Server", "Authentication"],
    desc: "Develop a complete online shopping application with login and payment modules.",
    icon: "🛒",
  },
  {
    name: "Student Management System",
    category: "Management System",
    difficulty: "Intermediate",
    skills: ["C#", "SQL", "CRUD"],
    desc: "Manage student records, attendance and marks using C#.",
    icon: "🎓",
  },
  {
    name: "Web API Project",
    category: "REST API",
    difficulty: "Advanced",
    skills: ["ASP.NET Core", "API", "JSON"],
    desc: "Build REST APIs using ASP.NET Core for frontend applications.",
    icon: "🌐",
  },
];



  const companies = [
    "Microsoft",
    "Google",
    "Amazon",
    "Accenture",
    "Infosys",
    "TCS",
    "Wipro",
    "IBM",
  ];



  const jobRoles = [
    {
      role:"C# Developer",
      salary:"₹5–15 LPA",
      desc:"Develop applications using C# and .NET technologies."
    },
    {
      role:".NET Developer",
      salary:"₹6–18 LPA",
      desc:"Build enterprise applications using .NET framework."
    },
    {
      role:"ASP.NET Developer",
      salary:"₹6–20 LPA",
      desc:"Create web applications and APIs using ASP.NET."
    },
    {
      role:"Software Engineer",
      salary:"₹8–25 LPA",
      desc:"Design and develop scalable software solutions."
    }
  ];

const interviewQuestions = [
  {
    question: "What is C#?",
    answer:
      "C# is an object-oriented programming language developed by Microsoft for the .NET platform.",
    level: "Beginner",
  },
  {
    question: "What is the difference between class and object?",
    answer:
      "A class is a blueprint, while an object is an instance of that class.",
    level: "Beginner",
  },
  {
    question: "What is LINQ?",
    answer:
      "LINQ allows querying collections, databases and XML using C# syntax.",
    level: "Intermediate",
  },
  {
    question: "What is ASP.NET?",
    answer:
      "ASP.NET is Microsoft's framework used to build web applications and APIs.",
    level: "Advanced",
  },
];



  return (

    <div className="min-h-screen bg-slate-950 text-white">



      {/* HERO SECTION */}


      <div
        className="
        bg-gradient-to-br
        from-slate-900
        via-purple-950
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

                💜 C# Programming

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

                Learn C# programming language used for
                .NET applications, web development,
                desktop software and game development.

              </motion.p>



            </div>







            {/* C# CARD */}


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
              from-purple-500
              to-blue-600
              flex
              items-center
              justify-center
              text-7xl
              font-bold
              shadow-2xl
              shadow-purple-500/30
              "

            >

              C#

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
            💰 C# Developer Salary
          </h2>




          <div className="grid md:grid-cols-3 gap-6 mt-8">


            {
              [
                ["Fresher","₹5–10 LPA"],
                ["Experienced","₹12–22 LPA"],
                ["Senior","₹30+ LPA"]
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
            🛠 C# Skills Required
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
                    💜
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
    opacity: 0,
    y: 50,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  className="
  bg-slate-900
  rounded-3xl
  p-8
  mt-8
  "
>
  <h2 className="text-3xl font-bold text-cyan-400 mb-8">
    🎯 C# Skill Progress
  </h2>

  <div className="space-y-6">
    {skillProgress.map((skill, index) => (
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
              width: 0,
            }}
            whileInView={{
              width: `${skill.level}%`,
            }}
            transition={{
              duration: 1,
              delay: index * 0.2,
            }}
            className="
            h-full
            bg-gradient-to-r
            from-cyan-400
            to-purple-500
            rounded-full
            "
          />
        </div>
      </div>
    ))}
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
            ⚙️ C# Tools & Technologies
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
            🚀 C# Projects To Build
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
cursor-pointer
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
    opacity: 0,
    y: 50,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  className="
  bg-gradient-to-r
  from-purple-900
  to-cyan-900
  rounded-3xl
  p-10
  mt-8
  text-center
  "
>
  <h2 className="text-3xl font-bold">
    🚀 Ready to Become a C# Developer?
  </h2>

  <p className="text-gray-300 mt-4">
    Follow the roadmap, build projects and prepare for interviews.
  </p>

  <div className="flex justify-center gap-5 mt-8 flex-wrap">
    <button
      onClick={() =>
        document
          .getElementById("roadmap")
          ?.scrollIntoView({ behavior: "smooth" })
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
        document
          .getElementById("interview")
          ?.scrollIntoView({ behavior: "smooth" })
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

<p className="mt-4">

🔥 Difficulty:
<span className="text-green-400">
{" "}{selectedProject.difficulty}
</span>

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
            🗺 C# Learning Roadmap
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
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  className="
  bg-slate-900
  rounded-3xl
  p-8
  mt-8
  "
>
  <h2 className="text-3xl font-bold text-cyan-400 mb-8">
    🎤 C# Interview Preparation
  </h2>

  <div className="grid md:grid-cols-2 gap-6">
    {interviewQuestions.map((item, index) => (
      <motion.div
        key={index}
        whileHover={{
          scale: 1.05,
          y: -8,
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
            Question {index + 1}
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
          {activeQuestion === index
            ? "Hide Answer"
            : "Show Answer"}
        </button>

        {activeQuestion === index && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="
            mt-5
            text-green-400
            "
          >
            💡 {item.answer}
          </motion.p>
        )}
      </motion.div>
    ))}
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
            🎓 C# Certifications
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
            💼 C# Career Opportunities
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
            🏢 Top C# Companies
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


export default CSharp;