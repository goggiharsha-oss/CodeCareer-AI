import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
function WebDevelopment() {
const [selectedProject, setSelectedProject] = useState(null);
const [activeQuestion, setActiveQuestion] = useState(null);

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "Git & GitHub",
    "Responsive Design",
  ];

const skillProgress = [
  {
    name: "HTML",
    level: 95,
  },
  {
    name: "CSS",
    level: 90,
  },
  {
    name: "JavaScript",
    level: 85,
  },
  {
    name: "React.js",
    level: 75,
  },
  {
    name: "Node.js",
    level: 65,
  },
];

  const roadmap = [
    "Learn HTML Fundamentals",
    "Master CSS & Responsive Design",
    "Learn JavaScript Basics",
    "Understand DOM Manipulation",
    "Learn React.js",
    "Learn Backend Development",
    "Work with Databases",
    "Build Full Stack Projects",
    "Deploy Applications",
    "Prepare for Web Developer Jobs",
  ];



  const certifications = [
    "Meta Front-End Developer Certificate",
    "Google UX Design Certificate",
    "AWS Developer Certification",
    "Microsoft Web Development Certification",
  ];



  const tools = [
    "VS Code",
    "React.js",
    "Node.js",
    "Git",
    "MongoDB",
    "Figma",
  ];



  const projects = [
  {
    name: "Portfolio Website",
    category: "Frontend",
    difficulty: "Beginner",
    skills: ["HTML", "CSS", "JavaScript"],
    desc: "Create your personal portfolio website with responsive design.",
    icon: "🌐",
  },
  {
    name: "E-Commerce Website",
    category: "Full Stack",
    difficulty: "Advanced",
    skills: ["React", "Node.js", "MongoDB"],
    desc: "Build a complete online shopping website with authentication.",
    icon: "🛒",
  },
  {
    name: "Blog Application",
    category: "CRUD App",
    difficulty: "Intermediate",
    skills: ["React", "Express", "MongoDB"],
    desc: "Develop a blogging platform with create, edit and delete features.",
    icon: "📝",
  },
  {
    name: "Social Media App",
    category: "Full Stack",
    difficulty: "Advanced",
    skills: ["React", "Node.js", "REST API"],
    desc: "Build a social networking application with posts and profiles.",
    icon: "📱",
  },
  {
    name: "Full Stack Web Application",
    category: "Enterprise",
    difficulty: "Advanced",
    skills: ["MERN Stack", "JWT", "MongoDB"],
    desc: "Create a complete production-ready MERN stack application.",
    icon: "💻",
  },
];



  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Meta",
    "Netflix",
    "Infosys",
    "TCS",
    "Accenture",
  ];



  const jobRoles = [
    {
      role:"Frontend Developer",
      salary:"₹4–10 LPA",
      desc:"Create interactive user interfaces using HTML, CSS, JavaScript and React."
    },
    {
      role:"Backend Developer",
      salary:"₹5–12 LPA",
      desc:"Develop server-side applications and APIs using backend technologies."
    },
    {
      role:"Full Stack Developer",
      salary:"₹6–15 LPA",
      desc:"Build complete web applications with frontend and backend technologies."
    },
    {
      role:"Web Application Developer",
      salary:"₹4–10 LPA",
      desc:"Develop modern and scalable web applications."
    }
  ];


const interviewQuestions = [
  {
    question: "What is the difference between HTML and HTML5?",
    answer: "HTML5 introduces semantic elements, multimedia support, local storage, canvas, and improved APIs.",
    level: "Beginner",
  },
  {
    question: "What is React Virtual DOM?",
    answer: "Virtual DOM is a lightweight copy of the real DOM that improves rendering performance.",
    level: "Intermediate",
  },
  {
    question: "What is REST API?",
    answer: "REST API is an architectural style that allows communication between client and server using HTTP methods.",
    level: "Intermediate",
  },
  {
    question: "Explain JWT Authentication.",
    answer: "JWT is a token-based authentication mechanism used to securely identify users in web applications.",
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

                🌐 Web Development

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

                Build modern websites and web applications using
                frontend, backend and full stack technologies
                used by companies worldwide.

              </motion.p>



            </div>






            {/* WEB CARD */}


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

              💻

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
            💰 Web Developer Salary
          </h2>




          <div className="grid md:grid-cols-3 gap-6 mt-8">


          {
            [
              ["Fresher","₹4–8 LPA"],
              ["Experienced","₹10–20 LPA"],
              ["Senior","₹25+ LPA"]
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


                <p className="
                text-4xl
                text-cyan-400
                mt-4
                ">
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
            🛠 Web Development Skills Required
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
                    🌐
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
    🎯 Web Development Skill Progress
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
            to-blue-500
            rounded-full
            "
          />
        </div>
      </div>
    ))}
  </div>
</motion.div>



        {/* WEB TOOLS */}



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
            ⚙️ Web Development Tools & Technologies
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
                {/* WEB PROJECTS */}


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
            🚀 Web Development Projects To Build
          </h2>




          <div className="grid md:grid-cols-3 gap-6">


            
             {projects.map((project, index) => (
  <motion.div
    key={index}
    whileHover={{
      scale: 1.05,
      y: -10,
    }}
    className="
    bg-slate-800
    rounded-2xl
    p-6
    border
    border-slate-700
    hover:border-cyan-400
    transition-all
    duration-300
    "
  >
    <div className="text-5xl">
      {project.icon}
    </div>

    <h3 className="font-bold text-xl mt-4">
      {project.name}
    </h3>

    <div className="flex gap-2 mt-3 flex-wrap">
      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
        {project.category}
      </span>

      <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">
        {project.difficulty}
      </span>
    </div>

    <p className="text-gray-400 mt-4">
      {project.desc}
    </p>

    <button
      onClick={() => setSelectedProject(project)}
      className="
      mt-5
      w-full
      bg-cyan-500
      hover:bg-cyan-400
      text-black
      font-semibold
      py-2
      rounded-xl
      transition
      "
    >
      View Details
    </button>
  </motion.div>
))}

          </div>


        </motion.div>

{selectedProject && (
  <div
    className="
    fixed
    inset-0
    bg-black/70
    flex
    items-center
    justify-center
    z-50
    px-4
    "
  >
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="
      bg-slate-900
      rounded-3xl
      p-8
      max-w-lg
      w-full
      border
      border-cyan-500
      "
    >
      <div className="text-6xl text-center">
        {selectedProject.icon}
      </div>

      <h2 className="text-3xl font-bold text-cyan-400 mt-4">
        {selectedProject.name}
      </h2>

      <p className="text-gray-300 mt-4">
        {selectedProject.desc}
      </p>

      <h3 className="font-bold mt-6 mb-3">
        Skills Required
      </h3>

      <div className="flex flex-wrap gap-2">
        {selectedProject.skills.map((skill, i) => (
          <span
            key={i}
            className="
            bg-cyan-500/20
            text-cyan-400
            px-3
            py-1
            rounded-full
            "
          >
            {skill}
          </span>
        ))}
      </div>

      <button
        onClick={() => setSelectedProject(null)}
        className="
        mt-8
        w-full
        bg-red-500
        hover:bg-red-600
        py-3
        rounded-xl
        font-bold
        "
      >
        Close
      </button>
    </motion.div>
  </div>
)}



{/* CTA SECTION */}

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  className="
  mt-10
  rounded-3xl
  p-10
  text-center
  bg-gradient-to-r
  from-cyan-600
  via-blue-600
  to-indigo-700
  shadow-2xl
  "
>
  <h2 className="text-4xl font-bold">
    🚀 Ready to Become a Web Developer?
  </h2>

  <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
    Start your journey today by following the complete roadmap,
    building real-world projects, and mastering modern web technologies.
  </p>

  <div className="flex flex-wrap justify-center gap-4 mt-8">
    <a
      href="#roadmap"
      className="
      px-8
      py-3
      rounded-xl
      bg-white
      text-blue-700
      font-bold
      hover:scale-105
      transition
      "
    >
      🛣️ Start Roadmap
    </a>

    <button
onClick={() =>
document.getElementById("interview")
.scrollIntoView({
behavior:"smooth"
})
}
className="
px-8
py-3
rounded-xl
border-2
border-white
text-white
font-bold
hover:bg-white
hover:text-blue-700
transition
"
>
🎤 Practice Interview
</button>
  </div>
</motion.div>


        {/* WEB ROADMAP */}



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
            🗺 Web Development Learning Roadmap
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
    🎤 Web Development Interview Preparation
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
            🎓 Web Development Certifications
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








        {/* JOB ROLES */}



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
            💼 Web Development Career Opportunities
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
            🏢 Top Web Development Companies
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


export default WebDevelopment;