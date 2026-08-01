import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
function CloudComputing() {
const [selectedProject,setSelectedProject] = useState(null);
const [activeQuestion,setActiveQuestion] = useState(null);
  const skills = [
    "AWS",
    "Microsoft Azure",
    "Google Cloud",
    "Docker",
    "Kubernetes",
    "Linux",
    "DevOps",
    "Terraform",
    "Networking",
    "Python",
  ];

const skillProgress = [
 {
  name:"AWS",
  level:90
 },
 {
  name:"Docker",
  level:85
 },
 {
  name:"Kubernetes",
  level:80
 },
 {
  name:"DevOps",
  level:85
 },
 {
  name:"Linux",
  level:75
 }
];
  const roadmap = [
    "Learn Linux Fundamentals",
    "Understand Networking",
    "Learn AWS / Azure / Google Cloud",
    "Master Docker",
    "Learn Kubernetes",
    "Understand DevOps Tools",
    "Practice Cloud Deployment",
    "Complete Cloud Certifications",
    "Build Cloud Projects",
    "Apply for Cloud Jobs",
  ];


  const certifications = [
    "AWS Certified Solutions Architect",
    "Microsoft Azure Fundamentals",
    "Google Cloud Associate Engineer",
    "Kubernetes Administrator",
  ];


  const cloudServices = [
    "Compute Services",
    "Cloud Storage",
    "Cloud Databases",
    "Networking",
    "Security",
    "Serverless Computing",
  ];


  const tools = [
    "Docker",
    "Kubernetes",
    "Terraform",
    "Jenkins",
    "GitHub Actions",
    "Ansible",
  ];

const projects = [

{
name:"Cloud Storage System",
icon:"☁️",
difficulty:"Beginner",
skills:["AWS S3","Cloud Storage","Linux"],
desc:"Build a secure cloud storage solution to store and manage files."
},

{
name:"AWS Web Deployment",
icon:"🚀",
difficulty:"Intermediate",
skills:["AWS EC2","Docker","Networking"],
desc:"Deploy scalable web applications on cloud infrastructure."
},

{
name:"Serverless Application",
icon:"⚡",
difficulty:"Advanced",
skills:["AWS Lambda","API Gateway","Cloud Functions"],
desc:"Create applications without managing physical servers."
},

{
name:"CI/CD Pipeline",
icon:"🔄",
difficulty:"Advanced",
skills:["Jenkins","GitHub Actions","DevOps"],
desc:"Automate application build, testing and deployment processes."
},

{
name:"Cloud Monitoring System",
icon:"📊",
difficulty:"Intermediate",
skills:["CloudWatch","Monitoring","Security"],
desc:"Monitor cloud resources and detect system issues."
}

];
  const companies = [
    "Amazon AWS",
    "Microsoft",
    "Google",
    "Oracle",
    "IBM",
    "Infosys",
    "TCS",
    "Accenture",
  ];


  const jobRoles = [
    {
      role:"Cloud Engineer",
      salary:"₹5–12 LPA",
      desc:"Design and manage cloud infrastructure."
    },
    {
      role:"Cloud Architect",
      salary:"₹15–35 LPA",
      desc:"Create scalable cloud solutions."
    },
    {
      role:"DevOps Engineer",
      salary:"₹8–20 LPA",
      desc:"Automate deployment and cloud operations."
    },
    {
      role:"Site Reliability Engineer",
      salary:"₹10–25 LPA",
      desc:"Maintain reliable cloud systems."
    }
  ];


  return (

    <div className="min-h-screen bg-slate-950 text-white">


      {/* HERO */}

      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 border-b border-slate-800">

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
                initial={{opacity:0,x:-50}}
                animate={{opacity:1,x:0}}
                transition={{duration:0.7}}
                className="text-5xl font-bold"
              >
                ☁️ Cloud Computing
              </motion.h1>



              <motion.p
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:0.4}}
                className="text-gray-400 text-lg mt-6"
              >
                Learn cloud platforms, DevOps tools and scalable
                infrastructure technologies used by modern companies.
              </motion.p>


            </div>



            {/* 3D Cloud Card */}

            <motion.div
              animate={{
                y:[0,-20,0],
                rotate:[0,5,-5,0]
              }}
              transition={{
                duration:4,
                repeat:Infinity
              }}

              className="
              h-72
              rounded-3xl
              bg-gradient-to-br
              from-cyan-500
              to-blue-700
              flex
              items-center
              justify-center
              text-8xl
              shadow-2xl
              shadow-cyan-500/30
              "
            >

              ☁️

            </motion.div>


          </div>


        </div>

      </div>





      {/* SALARY */}


      <div className="max-w-7xl mx-auto px-6 py-12">


        <motion.div
          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}
          className="bg-slate-900 rounded-3xl p-8"
        >


          <h2 className="text-3xl font-bold text-cyan-400">
            💰 Cloud Engineer Salary
          </h2>



          <div className="grid md:grid-cols-3 gap-6 mt-8">


            {
              [
                ["Fresher","₹5–9 LPA","green"],
                ["Experienced","₹12–22 LPA","yellow"],
                ["Senior","₹35+ LPA","cyan"]
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


                  <p className={`text-4xl mt-4 text-${item[2]}-400`}>
                    {item[1]}
                  </p>


                </motion.div>


              ))
            }


          </div>


        </motion.div>
                {/* SKILLS */}

        <motion.div
          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}
          className="bg-slate-900 rounded-3xl p-8 mt-8"
        >

          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            🛠 Skills Required
          </h2>


          <div className="grid md:grid-cols-3 gap-6">


            {skills.map((skill,index)=>(

              <motion.div

                key={index}

                whileHover={{
                  scale:1.08,
                  y:-10
                }}

                className="
                bg-slate-800
                p-6
                rounded-2xl
                border
                border-slate-700
                hover:border-cyan-400
                transition
                "
              >

                <div className="text-3xl">
                  ☁️
                </div>


                <h3 className="mt-4 font-semibold text-lg">
                  {skill}
                </h3>


              </motion.div>


            ))}


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
🎯 Cloud Computing Skill Progress
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
from-cyan-500
to-blue-500
rounded-full
"

/>


</div>


</div>


))
}


</div>


</motion.div>


        
        {/* TOOLS */}


        <motion.div

          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}

          className="
          bg-slate-900
          rounded-3xl
          p-8
          mt-8
          "

        >


          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            ⚙️ Cloud Tools
          </h2>



          <div className="grid md:grid-cols-3 gap-5">


            {
              tools.map((tool,index)=>(


                <motion.div

                  key={index}

                  whileHover={{
                    scale:1.1
                  }}

                  className="
                  bg-slate-800
                  rounded-xl
                  p-5
                  text-center
                  font-semibold
                  hover:bg-cyan-600
                  transition
                  "

                >

                  🛠 {tool}


                </motion.div>


              ))
            }


          </div>


        </motion.div>

{/* CLOUD PROJECTS */}


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
🚀 Cloud Computing Projects To Build
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
Cloud
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
from-cyan-600
via-blue-600
to-purple-600
shadow-2xl
"

>


<h2 className="text-4xl font-bold">
☁️ Ready to Become a Cloud Computing Professional?
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

Start learning cloud platforms, DevOps tools,
build cloud projects and prepare for cloud engineering jobs.

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
text-blue-600
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
hover:text-blue-600
transition
"

>

🎤 Practice Interview

</button>



</div>


</motion.div>



                {/* LEARNING ROADMAP */}

        <motion.div
id="roadmap"
          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}

          className="
          bg-slate-900
          rounded-3xl
          p-8
          mt-8
          "

        >

          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            🗺 Learning Roadmap
          </h2>


          <div className="space-y-5">


            {
              roadmap.map((step,index)=>(


                <motion.div

                  key={index}

                  initial={{opacity:0,x:-40}}
                  whileInView={{opacity:1,x:0}}
                  transition={{delay:index*0.1}}

                  className="
                  flex
                  items-center
                  gap-5
                  bg-slate-800
                  p-5
                  rounded-2xl
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

          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}

          className="
          bg-slate-900
          rounded-3xl
          p-8
          mt-8
          "

        >

          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            🎓 Cloud Certifications
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
                  p-6
                  rounded-2xl
                  border
                  border-slate-700
                  "

                >

                  <h3 className="font-bold text-lg">
                    🏆 {cert}
                  </h3>


                </motion.div>


              ))
            }


          </div>


        </motion.div>







        {/* JOB ROLES */}


        <motion.div

          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}

          className="
          bg-slate-900
          rounded-3xl
          p-8
          mt-8
          "

        >

          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            💼 Career Opportunities
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


                  <p className="text-green-400 font-bold mt-4 text-lg">
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



<p className="text-gray-300 mt-4">

{selectedProject.desc}

</p>




<h3 className="font-bold mt-6">

Skills Required

</h3>




<div

className="
flex
flex-wrap
gap-3
mt-3
"

>


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

🎤 Cloud Computing Interview Preparation

</h2>



<div className="grid md:grid-cols-2 gap-6">


{
[
{
question:"What is Cloud Computing?",
answer:"Cloud Computing is the delivery of computing services like servers, storage, databases and networking through the internet.",
level:"Beginner"
},

{
question:"What is AWS?",
answer:"AWS (Amazon Web Services) is a cloud platform that provides computing, storage and many other cloud services.",
level:"Beginner"
},

{
question:"What is Docker?",
answer:"Docker is a platform used to create, deploy and manage applications using containers.",
level:"Intermediate"
},

{
question:"What is Kubernetes?",
answer:"Kubernetes is a container orchestration tool used to manage and scale containerized applications.",
level:"Intermediate"
},

{
question:"What is DevOps?",
answer:"DevOps is a practice that combines development and operations to automate software delivery and deployment.",
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
activeQuestion === index ? null : index
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

          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}

          className="
          bg-slate-900
          rounded-3xl
          p-8
          mt-8
          "

        >

          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            🏢 Top Cloud Companies
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
                  hover:border-cyan-400
                  hover:bg-cyan-600
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


export default CloudComputing;