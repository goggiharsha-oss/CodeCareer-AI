import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
function MobileDevelopment() {
const [activeQuestion,setActiveQuestion] = useState(null);
const [selectedProject,setSelectedProject] = useState(null);

  const skills = [
    "Java",
    "Kotlin",
    "Swift",
    "Flutter",
    "React Native",
    "Android Development",
    "iOS Development",
    "UI/UX Design",
    "APIs Integration",
    "Database Management",
  ];

const skillProgress = [
 {
  name:"Android Development",
  level:90
 },
 {
  name:"Flutter",
  level:85
 },
 {
  name:"React Native",
  level:80
 },
 {
  name:"Swift",
  level:75
 },
 {
  name:"Firebase",
  level:80
 }
];

  const roadmap = [
    "Learn Programming Fundamentals",
    "Learn Java/Kotlin for Android",
    "Learn Swift for iOS",
    "Understand Mobile UI Design",
    "Learn Flutter or React Native",
    "Work with APIs",
    "Learn Databases",
    "Build Mobile Applications",
    "Publish Apps on Stores",
    "Prepare for Mobile Developer Jobs",
  ];



  const certifications = [
    "Google Associate Android Developer",
    "Meta React Native Certificate",
    "Flutter Development Certification",
    "Apple iOS Development Certification",
  ];



  const tools = [
    "Android Studio",
    "Xcode",
    "Flutter",
    "React Native",
    "Firebase",
    "Git",
  ];



 const projects = [

{
name:"Food Delivery App",
icon:"🍔",
difficulty:"Beginner",
skills:["Flutter","Firebase","UI Design"],
desc:"Build a complete food delivery application with restaurant listing, cart and order management."
},

{
name:"Fitness Tracking App",
icon:"🏋️",
difficulty:"Intermediate",
skills:["React Native","APIs","Database"],
desc:"Create a fitness app to track workouts, calories and user progress."
},

{
name:"Chat Application",
icon:"💬",
difficulty:"Intermediate",
skills:["Firebase","Real-time Database","Authentication"],
desc:"Develop a real-time chat application with secure user messaging."
},

{
name:"E-Commerce Mobile App",
icon:"🛒",
difficulty:"Advanced",
skills:["Flutter","Payment Gateway","API Integration"],
desc:"Build a complete shopping application with products, payments and orders."
},

{
name:"Weather Application",
icon:"🌦️",
difficulty:"Beginner",
skills:["API","Android Studio","JSON"],
desc:"Create a weather app that displays real-time weather information."
}

];



  const companies = [
    "Google",
    "Apple",
    "Microsoft",
    "Amazon",
    "Meta",
    "Samsung",
    "Infosys",
    "Accenture",
  ];



  const jobRoles = [
    {
      role:"Android Developer",
      salary:"₹4–12 LPA",
      desc:"Develop Android applications using Java and Kotlin."
    },
    {
      role:"iOS Developer",
      salary:"₹5–15 LPA",
      desc:"Create iPhone applications using Swift and iOS technologies."
    },
    {
      role:"Flutter Developer",
      salary:"₹4–12 LPA",
      desc:"Build cross-platform mobile applications using Flutter."
    },
    {
      role:"Mobile App Developer",
      salary:"₹5–14 LPA",
      desc:"Design and develop modern mobile applications."
    }
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

                📱 Mobile Development

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

                Build powerful Android and iOS applications
                using modern mobile technologies and frameworks
                used by top companies worldwide.

              </motion.p>



            </div>






            {/* MOBILE CARD */}


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

              📱

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
            💰 Mobile Developer Salary
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
            🛠 Mobile Development Skills
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
                    📱
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

<h2 className="
text-3xl
font-bold
text-cyan-400
mb-8
">

🎯 Mobile Development Skill Progress

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
from-green-500
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
            ⚙️ Mobile Development Tools & Technologies
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
               {/* MOBILE DEVELOPMENT PROJECTS */}


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
🚀 Mobile Development Projects To Build
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
bg-green-500/20
text-green-400
text-sm
"
>

Mobile

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

onClick={()=>
setSelectedProject(project)
}

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
from-green-600
via-cyan-600
to-blue-600
shadow-2xl
"

>


<h2 className="text-4xl font-bold">
📱 Ready to Become a Mobile Developer?
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

Learn Android, iOS and cross-platform development,
build real mobile applications and prepare for developer jobs.

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
text-green-600
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
hover:text-green-600
transition
"

>

🎤 Practice Interview

</button>



</div>


</motion.div>



        {/* ROADMAP */}



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
            🗺 Mobile Development Learning Roadmap
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
            🎓 Mobile Development Certifications
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
            💼 Mobile Development Career Opportunities
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



<h2 className="
text-3xl
font-bold
text-cyan-400
mt-5
">

{selectedProject.name}

</h2>



<p className="text-gray-300 mt-4">

{selectedProject.desc}

</p>




<h3 className="font-bold mt-6">

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

🎤 Mobile Development Interview Preparation

</h2>



<div className="grid md:grid-cols-2 gap-6">


{
[
{
question:"What is Android Development?",
answer:"Android Development is the process of creating applications for Android devices using languages like Java and Kotlin.",
level:"Beginner"
},

{
question:"What is Flutter?",
answer:"Flutter is a UI framework by Google used to build cross-platform mobile applications.",
level:"Beginner"
},

{
question:"What is React Native?",
answer:"React Native is a framework used to create mobile apps for Android and iOS using JavaScript.",
level:"Intermediate"
},

{
question:"What is API Integration in Mobile Apps?",
answer:"API Integration allows mobile applications to communicate with servers and external services.",
level:"Intermediate"
},

{
question:"What is App Store Deployment?",
answer:"App Store Deployment is the process of publishing mobile applications on Google Play Store and Apple App Store.",
level:"Advanced"
}

].map((item,index)=>(


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
            🏢 Top Mobile Development Companies
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


export default MobileDevelopment;