import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


function Python() {


  const [selectedProject, setSelectedProject] = useState(null);



  const skills = [
    "Python Basics",
    "Object-Oriented Programming",
    "Data Structures",
    "File Handling",
    "Exception Handling",
    "SQL",
    "APIs",
    "Git & GitHub",
    "Testing",
    "Problem Solving",
  ];



  const skillProgress = [
    {
      name: "Python Basics",
      level: 95,
    },
    {
      name: "Object-Oriented Programming",
      level: 85,
    },
    {
      name: "Data Structures",
      level: 75,
    },
    {
      name: "Django / Flask",
      level: 60,
    },
    {
      name: "Machine Learning",
      level: 40,
    },
  ];



  const roadmap = [
    "Learn Python Fundamentals",
    "Understand Variables & Data Types",
    "Learn Functions",
    "Master OOP Concepts",
    "Practice Data Structures",
    "Learn Libraries",
    "Build Python Projects",
    "Learn Backend Development",
    "Create Portfolio",
    "Apply for Python Jobs",
  ];



  const interviewQuestions = [
    {
      question: "What is Python and why is it popular?",
      level: "Beginner",
    },
    {
      question: "Difference between list and tuple?",
      level: "Intermediate",
    },
    {
      question: "Explain Object-Oriented Programming in Python.",
      level: "Intermediate",
    },
    {
      question: "What are Python decorators?",
      level: "Advanced",
    },
    {
      question: "How does memory management work in Python?",
      level: "Advanced",
    },
  ];



  const certifications = [
    "Python Institute PCAP Certification",
    "Google Python Automation Certificate",
    "Microsoft Python Certification",
    "Udemy Python Masterclass",
  ];



  const tools = [
    "Python",
    "PyCharm",
    "VS Code",
    "Jupyter Notebook",
    "Django",
    "Flask",
  ];



  const projects = [
    {
      name: "AI Chatbot",
      category: "Artificial Intelligence",
      difficulty: "Advanced",
      skills: ["Python", "AI", "NLP"],
      desc: "Build an intelligent chatbot using Python and AI concepts.",
      icon: "🤖",
    },

    {
      name: "Web Application",
      category: "Web Development",
      difficulty: "Intermediate",
      skills: ["Python", "Django", "Database"],
      desc: "Create a complete backend web application.",
      icon: "🌐",
    },

    {
      name: "Automation Scripts",
      category: "Automation",
      difficulty: "Beginner",
      skills: ["Python", "Scripts", "APIs"],
      desc: "Automate daily tasks using Python scripts.",
      icon: "⚡",
    },

    {
      name: "Data Analysis Project",
      category: "Data Science",
      difficulty: "Intermediate",
      skills: ["Python", "Pandas", "NumPy"],
      desc: "Analyze and visualize real-world datasets.",
      icon: "📊",
    },

    {
      name: "API Development",
      category: "Backend",
      difficulty: "Advanced",
      skills: ["Python", "Flask", "REST API"],
      desc: "Develop professional backend APIs.",
      icon: "🚀",
    },
  ];
    return (

    <div className="min-h-screen bg-slate-950 text-white">


      {/* HERO SECTION */}


      <div
        className="
        bg-gradient-to-br
        from-slate-900
        via-green-950
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

                🐍 Python Programming

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

                Learn Python programming language used in web development,
                automation, artificial intelligence and data science.

              </motion.p>


            </div>




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
              from-green-500
              to-cyan-600
              flex
              items-center
              justify-center
              text-8xl
              shadow-2xl
              shadow-green-500/30
              "

            >

              🐍

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
            💰 Python Developer Salary
          </h2>




          <div className="grid md:grid-cols-3 gap-6 mt-8">


          {
            [
              ["Fresher","₹4–8 LPA"],
              ["Experienced","₹10–18 LPA"],
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
            🛠 Python Skills Required
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
                  🐍
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
            🎯 Python Skill Progress
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
                    to-green-400
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
            ⚙️ Python Tools & Technologies
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
            🚀 Python Projects Portfolio
          </h2>




          <div className="grid md:grid-cols-3 gap-6">


          {
            projects.map((project,index)=>(


              <motion.div

                key={index}

                whileHover={{
                  scale:1.05,
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



                <h3 className="text-xl font-bold">
                  {project.icon} {project.name}
                </h3>



                <p className="text-cyan-400 mt-2">
                  {project.category}
                </p>



                <span
                  className="
                  inline-block
                  mt-4
                  px-3
                  py-1
                  rounded-full
                  bg-cyan-500
                  text-black
                  text-sm
                  font-semibold
                  "
                >

                  {project.difficulty}

                </span>



                <p className="text-gray-300 mt-4">
                  {project.desc}
                </p>



                <div className="flex flex-wrap gap-2 mt-4">


                {
                  project.skills.map((skill,index)=>(


                    <span

                      key={index}

                      className="
                      px-3
                      py-1
                      rounded-full
                      bg-cyan-500/20
                      text-cyan-300
                      text-sm
                      "

                    >

                      {skill}

                    </span>


                  ))
                }


                </div>



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


                <div className="flex flex-wrap gap-2 mt-4">

                {
                  selectedProject.skills.map((skill,index)=>(

                    <span
                      key={index}
                      className="
                      px-3
                      py-1
                      bg-cyan-500/20
                      rounded-full
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
          from-cyan-900
          to-green-900
          rounded-3xl
          p-10
          mt-8
          text-center
          "

        >


          <h2 className="text-3xl font-bold">
            🚀 Ready to Become a Python Developer?
          </h2>


          <p className="text-gray-300 mt-4">
            Follow the roadmap, build projects and prepare for your dream job.
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


          <h2 className="text-3xl font-bold text-cyan-400 mb-10">
            🛣️ Python Learning Journey
          </h2>



          <div className="relative border-l-4 border-cyan-500 ml-5">


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
                  delay:index*0.15
                }}

                className="
                relative
                mb-10
                ml-8
                "

              >


                <div
                  className="
                  absolute
                  -left-[45px]
                  top-2
                  w-10
                  h-10
                  rounded-full
                  bg-cyan-500
                  text-black
                  font-bold
                  flex
                  items-center
                  justify-center
                  "
                >

                  {index+1}

                </div>



                <div
                  className="
                  bg-slate-800
                  rounded-2xl
                  p-6
                  border
                  border-slate-700
                  "

                >

                  {step}

                </div>


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
            🎤 Python Interview Preparation
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
                hover:border-cyan-400
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

                  Practice →

                </button>



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
            🎓 Python Certifications
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
            💼 Python Career Opportunities
          </h2>



          <div className="grid md:grid-cols-2 gap-6">


          {
            [
              {
                role:"Python Developer",
                salary:"₹4–12 LPA",
                desc:"Develop applications and backend systems using Python."
              },
              {
                role:"Backend Developer",
                salary:"₹6–15 LPA",
                desc:"Build APIs and server-side applications."
              },
              {
                role:"Data Analyst",
                salary:"₹5–12 LPA",
                desc:"Analyze data using Python libraries."
              },
              {
                role:"Machine Learning Engineer",
                salary:"₹8–20 LPA",
                desc:"Create machine learning solutions using Python."
              }
            ].map((job,index)=>(


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
            🏢 Top Python Companies
          </h2>



          <div className="grid md:grid-cols-4 gap-5">


          {
            [
              "Google",
              "Microsoft",
              "Amazon",
              "Meta",
              "Netflix",
              "Infosys",
              "TCS",
              "Accenture",
            ].map((company,index)=>(


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


export default Python;