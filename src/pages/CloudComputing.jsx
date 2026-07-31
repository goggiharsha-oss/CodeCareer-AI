import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function CloudComputing() {

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





        {/* CLOUD SERVICES */}


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
            ☁️ Cloud Services
          </h2>



          <div className="grid md:grid-cols-3 gap-6">


            {
              cloudServices.map((service,index)=>(


                <motion.div

                  key={index}

                  whileHover={{
                    rotateY:12,
                    scale:1.05
                  }}

                  className="
                  bg-gradient-to-br
                  from-slate-800
                  to-slate-700
                  rounded-2xl
                  p-6
                  text-center
                  border
                  border-slate-600
                  "

                >

                  <div className="text-4xl">
                    🚀
                  </div>


                  <h3 className="font-bold mt-4">
                    {service}
                  </h3>


                </motion.div>


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
                {/* LEARNING ROADMAP */}

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