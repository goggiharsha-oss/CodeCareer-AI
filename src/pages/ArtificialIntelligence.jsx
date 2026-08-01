import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
function ArtificialIntelligence() {
const [selectedProject,setSelectedProject] = useState(null);
const [activeQuestion,setActiveQuestion] = useState(null);

  const skills = [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "TensorFlow",
    "PyTorch",
    "NumPy",
    "Pandas",
    "Data Visualization",
    "Statistics",
    "Mathematics",
  ];

const skillProgress = [
 {
  name:"Machine Learning",
  level:90
 },
 {
  name:"Python",
  level:85
 },
 {
  name:"Deep Learning",
  level:80
 },
 {
  name:"Natural Language Processing",
  level:75
 },
 {
  name:"Computer Vision",
  level:70
 }
];
  const roadmap = [
    "Learn Python Fundamentals",
    "Master Mathematics & Statistics",
    "Learn Machine Learning Algorithms",
    "Study Deep Learning",
    "Practice TensorFlow & PyTorch",
    "Learn NLP & Computer Vision",
    "Build AI Projects",
    "Create AI Portfolio",
    "Deploy AI Models",
    "Apply for AI Jobs",
  ];



  const certifications = [
    "TensorFlow Developer Certificate",
    "AWS Machine Learning Certification",
    "Microsoft Azure AI Engineer",
    "Google Cloud AI Engineer",
  ];



  const tools = [
    "TensorFlow",
    "PyTorch",
    "Jupyter Notebook",
    "OpenCV",
    "Keras",
    "Scikit Learn",
  ];



 const projects = [

{
 name:"AI Chatbot",
 icon:"🤖",
 difficulty:"Beginner",
 skills:["Python","NLP","Machine Learning"],
 desc:"Build an intelligent chatbot using Natural Language Processing and AI models."
},

{
 name:"Image Recognition System",
 icon:"🖼️",
 difficulty:"Intermediate",
 skills:["Python","Computer Vision","OpenCV"],
 desc:"Create an AI system that identifies objects and images using deep learning."
},

{
 name:"Recommendation System",
 icon:"🎯",
 difficulty:"Advanced",
 skills:["Python","Machine Learning","Data Science"],
 desc:"Build personalized recommendation systems using AI algorithms."
},

{
 name:"Voice Assistant",
 icon:"🎙️",
 difficulty:"Advanced",
 skills:["Python","Speech Recognition","AI"],
 desc:"Develop a voice based assistant using speech processing and AI."
},

{
 name:"AI Prediction Model",
 icon:"📈",
 difficulty:"Intermediate",
 skills:["Python","ML Algorithms","Statistics"],
 desc:"Create predictive models using machine learning techniques."
}

];



  const companies = [
    "Google",
    "Microsoft",
    "OpenAI",
    "Amazon",
    "NVIDIA",
    "IBM",
    "Infosys",
    "Accenture",
  ];



  const jobRoles = [
    {
      role:"AI Engineer",
      salary:"₹6–15 LPA",
      desc:"Build intelligent applications using AI technologies."
    },
    {
      role:"Machine Learning Engineer",
      salary:"₹8–20 LPA",
      desc:"Develop and deploy machine learning models."
    },
    {
      role:"Deep Learning Engineer",
      salary:"₹10–25 LPA",
      desc:"Create neural network based solutions."
    },
    {
      role:"NLP Engineer",
      salary:"₹8–18 LPA",
      desc:"Build language processing AI systems."
    }
  ];


const interviewQuestions = [

{
 question:"What is Artificial Intelligence?",
 answer:"Artificial Intelligence is the field of computer science that enables machines to perform tasks that normally require human intelligence.",
 level:"Beginner"
},

{
 question:"What is Machine Learning?",
 answer:"Machine Learning is a branch of AI that allows systems to learn from data and improve performance without being explicitly programmed.",
 level:"Beginner"
},

{
 question:"Difference between AI and Machine Learning?",
 answer:"AI is the broader concept of creating intelligent machines, while Machine Learning is a technique used to achieve AI capabilities.",
 level:"Intermediate"
},

{
 question:"What is a Neural Network?",
 answer:"A Neural Network is a computing system inspired by the human brain that learns patterns from data.",
 level:"Intermediate"
},

{
 question:"What is Deep Learning?",
 answer:"Deep Learning is a subset of Machine Learning that uses multiple layers of neural networks to solve complex problems.",
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

                🤖 Artificial Intelligence

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

                Build intelligent systems using Machine Learning,
                Deep Learning and modern AI technologies used by
                top companies worldwide.

              </motion.p>



            </div>





            {/* 3D AI CARD */}


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
              to-cyan-600
              flex
              items-center
              justify-center
              text-8xl
              shadow-2xl
              shadow-purple-500/30
              "

            >

              🧠

            </motion.div>



          </div>



        </div>


      </div>







      {/* SALARY SECTION */}



      <div className="max-w-7xl mx-auto px-6 py-12">


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
            💰 AI Engineer Salary
          </h2>




          <div className="grid md:grid-cols-3 gap-6 mt-8">


          {
            [
              ["Fresher","₹6–10 LPA"],
              ["Experienced","₹15–25 LPA"],
              ["Senior","₹35+ LPA"]
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
            🛠 AI Skills Required
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
                    🧠
                  </div>


                  <h3 className="font-semibold text-lg mt-4">
                    {skill}
                  </h3>


                </motion.div>


              ))
            }


          </div>


        </motion.div>



{/* AI SKILL PROGRESS TRACKER */}

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
🎯 AI Skill Progress
</h2>


<div className="space-y-6">


{
skillProgress.map((skill,index)=>(


<div key={index}>


<div className="flex justify-between mb-2">

<span className="font-semibold">
{skill.name}
</span>


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
from-purple-500
to-cyan-500
rounded-full
"

/>


</div>


</div>


))
}


</div>


</motion.div>



        {/* AI TOOLS */}


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
            ⚙️ AI Tools & Technologies
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








        {/* AI PROJECTS */}



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
            🚀 AI Projects To Build
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


<div className="flex gap-2 mt-4">

<span
className="
px-3
py-1
rounded-full
bg-cyan-500/20
text-cyan-400
text-sm
"
>
AI Development
</span>


<span
className="
px-3
py-1
rounded-full
bg-purple-500/20
text-purple-400
text-sm
"
>
{project.difficulty}
</span>

</div>



<p className="text-gray-400 mt-5">
{project.desc}
</p>


<button

onClick={()=>setSelectedProject(project)}

className="
mt-6
w-full
py-3
rounded-xl
bg-cyan-500
text-black
font-bold
hover:scale-105
transition
"

>

View Details

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
mt-10
rounded-3xl
p-10
text-center
bg-gradient-to-r
from-purple-600
via-blue-600
to-cyan-600
shadow-2xl
"

>


<h2 className="text-4xl font-bold">
🤖 Ready to Become an AI Engineer?
</h2>


<p
className="
mt-4
text-lg
text-white/90
max-w-2xl
mx-auto
"
>

Start learning Artificial Intelligence,
build Machine Learning projects,
practice AI models and prepare for AI careers.

</p>



<div
className="
flex
flex-wrap
justify-center
gap-4
mt-8
"
>


<button

onClick={() =>
document.getElementById("roadmap")
.scrollIntoView({
behavior:"smooth"
})
}

className="
px-8
py-3
rounded-xl
bg-white
text-purple-600
font-bold
hover:scale-105
transition
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
px-8
py-3
rounded-xl
border-2
border-white
text-white
font-bold
hover:bg-white
hover:text-purple-600
transition
"

>

🎤 Practice Interview

</button>



</div>


</motion.div>



                {/* AI ROADMAP */}

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
            🗺 AI Learning Roadmap
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


<h2 className="
text-3xl
font-bold
text-cyan-400
mb-8
">

🎤 AI Interview Preparation

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

onClick={()=>
setActiveQuestion(
activeQuestion===index ? null : index
)
}

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
            🎓 AI Certifications
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
            💼 AI Career Opportunities
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
px-4
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


<div className="text-6xl text-center">
{selectedProject.icon}
</div>


<h2
className="
text-3xl
font-bold
text-cyan-400
mt-5
"
>

{selectedProject.name}

</h2>



<p className="
text-gray-300
mt-4
">

{selectedProject.desc}

</p>




<h3 className="
font-bold
mt-6
">

Skills Required

</h3>



<div className="
flex
flex-wrap
gap-3
mt-3
">


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

onClick={()=>setSelectedProject(null)}

className="
mt-8
w-full
py-3
rounded-xl
bg-red-500
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
            🏢 Top AI Companies
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


export default ArtificialIntelligence;