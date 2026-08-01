import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

function Java() {
  const [selectedProject, setSelectedProject] = useState(null);
const [activeQuestion,setActiveQuestion] = useState(null);
const interviewQuestions = [
  {
    question:"What are the main features of Java?",
    answer:"Java is object-oriented, platform independent, secure and supports multithreading.",
    level:"Beginner"
  },

  {
    question:"Difference between JDK, JRE and JVM?",
    answer:"JVM runs Java programs, JRE provides runtime environment, JDK contains tools for development.",
    level:"Beginner"
  },

  {
    question:"What is OOP in Java?",
    answer:"OOP is a programming approach based on classes and objects. Main concepts are inheritance, encapsulation, polymorphism and abstraction.",
    level:"Intermediate"
  },

  {
    question:"What is Spring Boot?",
    answer:"Spring Boot is a Java framework used to create production-ready backend applications and APIs.",
    level:"Advanced"
  }
];

  const skills = [
    "Java Basics",
    "Object-Oriented Programming",
    "Classes & Objects",
    "Collections Framework",
    "Exception Handling",
    "Multithreading",
    "JDBC",
    "SQL",
    "Spring Boot",
    "Problem Solving",
  ];



  const roadmap = [
    "Learn Java Fundamentals",
    "Understand Variables & Data Types",
    "Master OOP Concepts",
    "Learn Collections Framework",
    "Study Exception Handling",
    "Learn Multithreading",
    "Learn JDBC & Databases",
    "Master Spring Boot",
    "Build Java Projects",
    "Apply for Java Jobs",
  ];



  const certifications = [
    "Oracle Java SE Certification",
    "Java Programming Certification",
    "Spring Boot Certification",
    "AWS Java Developer Certification",
  ];



  const tools = [
    "Java",
    "IntelliJ IDEA",
    "Eclipse",
    "Spring Boot",
    "Maven",
    "Hibernate",
  ];



 const projects = [

{
  name:"Bank Management System",
  icon:"🏦",
  difficulty:"Intermediate",
  tech:["Java","JDBC","MySQL"],
  desc:"A banking application to manage accounts, transactions and customer details."
},

{
  name:"E-Commerce Application",
  icon:"🛒",
  difficulty:"Advanced",
  tech:["Java","Spring Boot","SQL"],
  desc:"Online shopping backend application with APIs and database."
},

{
  name:"Chat Application",
  icon:"💬",
  difficulty:"Advanced",
  tech:["Java","Socket Programming"],
  desc:"Real-time messaging application using Java networking."
},

{
  name:"Employee Management System",
  icon:"👨‍💼",
  difficulty:"Beginner",
  tech:["Java","JDBC"],
  desc:"Application to manage employee records and information."
},

{
  name:"REST API Development",
  icon:"🚀",
  difficulty:"Advanced",
  tech:["Java","Spring Boot","REST"],
  desc:"Build scalable backend APIs using Java frameworks."
}

];


  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Oracle",
    "IBM",
    "Infosys",
    "TCS",
    "Accenture",
  ];



  const jobRoles = [
    {
      role:"Java Developer",
      salary:"₹4–12 LPA",
      desc:"Develop enterprise applications using Java."
    },
    {
      role:"Backend Developer",
      salary:"₹6–15 LPA",
      desc:"Build scalable backend systems using Java."
    },
    {
      role:"Spring Boot Developer",
      salary:"₹7–18 LPA",
      desc:"Create modern web applications and APIs."
    },
    {
      role:"Software Engineer",
      salary:"₹8–20 LPA",
      desc:"Design and develop software solutions."
    }
  ];





  return (

    <div className="min-h-screen bg-slate-950 text-white">



      {/* HERO SECTION */}


      <div
        className="
        bg-gradient-to-br
        from-slate-900
        via-red-950
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

                ☕ Java Programming

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

                Learn Java programming used for enterprise software,
                Android development, backend systems and large-scale applications.

              </motion.p>



            </div>







            {/* JAVA CARD */}


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
              from-red-500
              to-orange-600
              flex
              items-center
              justify-center
              text-8xl
              shadow-2xl
              shadow-red-500/30
              "

            >

              ☕

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
            💰 Java Developer Salary
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
            🛠 Java Skills Required
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
                    ☕
                  </div>



                  <h3 className="font-semibold text-lg mt-4">
                    {skill}
                  </h3>



                </motion.div>


              ))
            }


          </div>


        </motion.div>


{/* SKILL TRACKER */}

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
  🎯 Java Skill Tracker
</h2>


<div className="space-y-6">


{
[
  ["Java Basics",95],
  ["OOP Concepts",90],
  ["Collections",80],
  ["Spring Boot",70],
  ["Microservices",50]

].map((skill,index)=>(


<div key={index}>


<div className="flex justify-between mb-2">

<span>
{skill[0]}
</span>

<span className="text-cyan-400">
{skill[1]}%
</span>

</div>


<div className="
w-full
h-3
bg-slate-700
rounded-full
overflow-hidden
">


<motion.div

initial={{
width:0
}}

whileInView={{
width:`${skill[1]}%`
}}

transition={{
duration:1,
delay:index*0.2
}}

className="
h-full
bg-cyan-500
rounded-full
"

/>


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
            ⚙️ Java Tools & Technologies
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
            🚀 Java Projects To Build
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
font-bold
"
>

{project.difficulty}

</span>



<p className="text-gray-400 mt-4">

{project.desc}

</p>




<div className="flex flex-wrap gap-2 mt-4">


{
project.tech.map((item,index)=>(


<span

key={index}

className="
px-3
py-1
rounded-full
bg-slate-700
text-cyan-300
text-sm
"

>

{item}

</span>


))
}


</div>





<button

onClick={()=>setSelectedProject(project)}

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
from-red-900
to-orange-900
rounded-3xl
p-10
mt-8
text-center
"

>

<h2 className="text-3xl font-bold">
🚀 Ready to Become a Java Developer?
</h2>


<p className="text-gray-300 mt-4">
Follow the roadmap, build projects and prepare for your dream Java job.
</p>



<div className="
flex
justify-center
gap-5
mt-8
flex-wrap
">


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


          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            🗺 Java Learning Roadmap
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




{/* INTERVIEW SECTION */}


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
🎤 Java Interview Preparation
</h2>



<div className="grid md:grid-cols-2 gap-6">


{
interviewQuestions.map((item,index)=>(


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


<div className="flex justify-between">


<h3 className="font-bold">
Question {index+1}
</h3>


<span className="
bg-cyan-500
text-black
px-3
py-1
rounded-full
text-sm
">

{item.level}

</span>


</div>



<p className="mt-4 text-gray-300">

{item.question}

</p>




<button

onClick={()=>setActiveQuestion(
activeQuestion===index ? null : index
)}

className="
mt-5
px-5
py-2
bg-cyan-500
text-black
rounded-xl
font-bold
"

>

{
activeQuestion===index
?
"Hide Answer"
:
"Show Answer"
}

</button>




{
activeQuestion===index && (

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
bg-slate-950
p-4
rounded-xl
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
            🎓 Java Certifications
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
            💼 Java Career Opportunities
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



{/* PROJECT DETAILS POPUP */}


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



<p className="text-gray-300 mt-5">

{selectedProject.desc}

</p>



<h3 className="mt-5 font-bold">
Technologies:
</h3>



<div className="flex flex-wrap gap-3 mt-3">


{
selectedProject.tech.map((item,index)=>(


<span

key={index}

className="
px-3
py-1
bg-cyan-500/20
text-cyan-300
rounded-full
"

>

{item}

</span>


))
}


</div>




<button

onClick={()=>setSelectedProject(null)}

className="
mt-6
px-6
py-2
rounded-xl
bg-cyan-500
text-black
font-bold
"

>

Close

</button>



</motion.div>


</motion.div>


)
}




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
            🏢 Top Java Companies
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


export default Java;