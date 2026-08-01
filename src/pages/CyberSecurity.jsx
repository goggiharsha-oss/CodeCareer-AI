import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

function CyberSecurity() {
const [selectedProject,setSelectedProject] = useState(null);
const [activeQuestion,setActiveQuestion] = useState(null);


  const skills = [
    "Networking",
    "Linux",
    "Ethical Hacking",
    "Penetration Testing",
    "Python",
    "Cryptography",
    "Cyber Laws",
    "Wireshark",
    "Nmap",
    "Kali Linux",
  ];

const skillProgress = [
 {
  name:"Networking",
  level:90
 },
 {
  name:"Linux",
  level:85
 },
 {
  name:"Ethical Hacking",
  level:80
 },
 {
  name:"Penetration Testing",
  level:75
 },
 {
  name:"Cryptography",
  level:70
 }
];

  const roadmap = [
    "Learn Computer Networks",
    "Master Linux Fundamentals",
    "Understand Cyber Security Basics",
    "Learn Ethical Hacking",
    "Practice Penetration Testing",
    "Learn Security Tools",
    "Study Cryptography",
    "Practice CTF Challenges",
    "Build Security Projects",
    "Apply for Cyber Security Jobs",
  ];



  const certifications = [
    "CompTIA Security+",
    "Certified Ethical Hacker (CEH)",
    "Cisco CyberOps Certification",
    "AWS Security Certification",
  ];



  const tools = [
    "Kali Linux",
    "Wireshark",
    "Nmap",
    "Metasploit",
    "Burp Suite",
    "Splunk",
  ];



 const projects = [

{
 name:"Network Scanner",
 icon:"🌐",
 difficulty:"Intermediate",
 skills:["Python","Nmap","Networking"],
 desc:"Scan networks and identify connected devices and open ports."
},

{
 name:"Vulnerability Scanner",
 icon:"🔍",
 difficulty:"Advanced",
 skills:["Python","Security","Scanning"],
 desc:"Find security vulnerabilities in systems and applications."
},

{
 name:"Password Security Analyzer",
 icon:"🔐",
 difficulty:"Beginner",
 skills:["Python","Cryptography"],
 desc:"Analyze password strength and improve security practices."
},

{
 name:"Security Monitoring System",
 icon:"📊",
 difficulty:"Advanced",
 skills:["SIEM","Python","Logs"],
 desc:"Monitor security events and detect suspicious activities."
},

{
 name:"Phishing Detection System",
 icon:"🎣",
 difficulty:"Advanced",
 skills:["Machine Learning","Python","Cyber Security"],
 desc:"Detect phishing websites and suspicious messages."
}

];



  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Cisco",
    "IBM",
    "Palo Alto Networks",
    "TCS",
    "Accenture",
  ];



  const jobRoles = [
    {
      role:"Cyber Security Analyst",
      salary:"₹4–10 LPA",
      desc:"Monitor systems and protect organizations from cyber threats."
    },
    {
      role:"Ethical Hacker",
      salary:"₹5–15 LPA",
      desc:"Find security vulnerabilities and improve system protection."
    },
    {
      role:"Security Engineer",
      salary:"₹8–20 LPA",
      desc:"Design and implement secure network solutions."
    },
    {
      role:"SOC Analyst",
      salary:"₹5–12 LPA",
      desc:"Analyze security alerts and respond to cyber incidents."
    }
  ];


const interviewQuestions = [

{
 question:"What is Cyber Security?",
 answer:"Cyber Security is the practice of protecting computers, networks and data from unauthorized access and cyber attacks.",
 level:"Beginner"
},

{
 question:"What is a Firewall?",
 answer:"A Firewall is a security system that monitors and controls incoming and outgoing network traffic based on security rules.",
 level:"Beginner"
},

{
 question:"What is Ethical Hacking?",
 answer:"Ethical Hacking is authorized security testing performed to find and fix vulnerabilities in systems.",
 level:"Intermediate"
},

{
 question:"What is Penetration Testing?",
 answer:"Penetration Testing is a security assessment method used to identify weaknesses in applications and networks.",
 level:"Intermediate"
},

{
 question:"What is SIEM?",
 answer:"SIEM (Security Information and Event Management) is a system used to collect and analyze security logs and detect threats.",
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

                🔐 Cyber Security

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

                Protect computer systems, networks and applications
                from cyber attacks using ethical hacking,
                security tools and modern technologies.

              </motion.p>



            </div>





            {/* CYBER CARD */}


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
              to-cyan-600
              flex
              items-center
              justify-center
              text-8xl
              shadow-2xl
              shadow-red-500/30
              "

            >

              🛡️

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
            💰 Cyber Security Salary
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


                <p
                className="
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
            🛠 Cyber Security Skills Required
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
                    🔐
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
🎯 Cyber Security Skill Progress
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
from-red-500
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



        {/* SECURITY TOOLS */}



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
            ⚙️ Security Tools & Technologies
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

                  🛡️ {tool}


                </motion.div>


              ))
            }


          </div>


        </motion.div>
        {/* SECURITY PROJECTS */}



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
            🚀 Cyber Security Projects To Build
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
bg-gray-900
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
Cyber Security
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
from-red-600
via-purple-600
to-cyan-600
shadow-2xl
"

>


<h2 className="text-4xl font-bold">
🔐 Ready to Become a Cyber Security Professional?
</h2>


<p className="
mt-4
text-lg
text-white/90
max-w-2xl
mx-auto
">

Start learning security concepts, practice ethical hacking,
build security projects and prepare for cybersecurity jobs.

</p>



<div className="
flex
flex-wrap
justify-center
gap-4
mt-8
">


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
text-red-600
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
hover:text-red-600
transition
"

>

🎤 Practice Interview

</button>



</div>


</motion.div>


        {/* CYBER ROADMAP */}



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
            🗺 Cyber Security Learning Roadmap
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

🎤 Cyber Security Interview Preparation

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
            🎓 Cyber Security Certifications
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
            💼 Cyber Security Career Opportunities
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
            🏢 Top Cyber Security Companies
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


export default CyberSecurity;