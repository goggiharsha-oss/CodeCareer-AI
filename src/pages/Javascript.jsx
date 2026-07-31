import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function JavaScript() {


  const skills = [
    "JavaScript Basics",
    "Variables & Data Types",
    "Functions",
    "ES6 Features",
    "DOM Manipulation",
    "Async JavaScript",
    "Promises",
    "APIs",
    "Object-Oriented JavaScript",
    "Problem Solving",
  ];



  const roadmap = [
    "Learn JavaScript Fundamentals",
    "Understand Variables & Operators",
    "Learn Functions",
    "Master ES6 Concepts",
    "Learn DOM Manipulation",
    "Practice Async JavaScript",
    "Learn Frontend Frameworks",
    "Build JavaScript Projects",
    "Create Portfolio",
    "Apply for JavaScript Jobs",
  ];



  const certifications = [
    "JavaScript Algorithms Certification",
    "Meta JavaScript Certificate",
    "freeCodeCamp JavaScript Certification",
    "Udemy JavaScript Masterclass",
  ];



  const tools = [
    "JavaScript",
    "VS Code",
    "Node.js",
    "React",
    "Git & GitHub",
    "Chrome DevTools",
  ];



  const projects = [
    "Weather Application",
    "To Do List App",
    "Portfolio Website",
    "Chat Application",
    "E-Commerce Website",
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
      role:"JavaScript Developer",
      salary:"₹4–12 LPA",
      desc:"Develop interactive web applications using JavaScript."
    },
    {
      role:"Frontend Developer",
      salary:"₹5–15 LPA",
      desc:"Build modern user interfaces and web experiences."
    },
    {
      role:"React Developer",
      salary:"₹6–18 LPA",
      desc:"Create scalable frontend applications using React."
    },
    {
      role:"Full Stack Developer",
      salary:"₹8–25 LPA",
      desc:"Develop complete web applications using JavaScript technologies."
    }
  ];





  return (

    <div className="min-h-screen bg-slate-950 text-white">



      {/* HERO SECTION */}


      <div
        className="
        bg-gradient-to-br
        from-slate-900
        via-yellow-950
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

                🟨 JavaScript

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

                Learn JavaScript programming language used for
                modern web development, frontend applications,
                backend services and interactive websites.

              </motion.p>



            </div>







            {/* JAVASCRIPT CARD */}


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
              from-yellow-400
              to-orange-500
              flex
              items-center
              justify-center
              text-7xl
              font-bold
              text-black
              shadow-2xl
              shadow-yellow-500/30
              "

            >

              JS

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
            💰 JavaScript Developer Salary
          </h2>




          <div className="grid md:grid-cols-3 gap-6 mt-8">


            {
              [
                ["Fresher","₹4–8 LPA"],
                ["Experienced","₹10–20 LPA"],
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








        {/* SKILLS SECTION */



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
            🛠 JavaScript Skills Required
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
                    🟨
                  </div>



                  <h3 className="font-semibold text-lg mt-4">
                    {skill}
                  </h3>



                </motion.div>


              ))
            }


          </div>


        </motion.div>





          }


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
            ⚙️ JavaScript Tools & Technologies
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
            🚀 JavaScript Projects To Build
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
                  "

                >


                  <h3 className="font-bold text-lg">
                    🟨 {project}
                  </h3>


                  <p className="text-gray-400 mt-3">
                    Build this project to improve practical JavaScript skills.
                  </p>


                </motion.div>


              ))
            }


          </div>


        </motion.div>








        {/* ROADMAP SECTION */}



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
            🗺 JavaScript Learning Roadmap
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
            🎓 JavaScript Certifications
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
            💼 JavaScript Career Opportunities
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
            🏢 Top JavaScript Companies
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


export default JavaScript;