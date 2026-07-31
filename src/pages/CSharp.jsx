import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PremiumCard from "../components/PremiumCard";


function CSharp() {

  const skills = [
    "C# Basics",
    "Object-Oriented Programming",
    ".NET Framework",
    ".NET Core",
    "ASP.NET",
    "LINQ",
    "Entity Framework",
    "SQL Server",
    "API Development",
    "Git & GitHub",
  ];


  const roadmap = [
    "Learn C# Fundamentals",
    "Understand OOP Concepts",
    "Learn Classes & Objects",
    "Practice Collections",
    "Learn Exception Handling",
    "Study .NET Framework",
    "Learn ASP.NET Core",
    "Work with Databases",
    "Build Web Applications",
    "Prepare for Interviews",
  ];


  const companies = [
    "Microsoft",
    "Google",
    "Amazon",
    "Accenture",
    "TCS",
    "Infosys",
    "Wipro",
    "Capgemini",
  ];


  const careers = [
    {
      role:"C# Developer",
      salary:"₹4–10 LPA",
      desc:"Develop software applications using C# and .NET technologies.",
    },

    {
      role:".NET Developer",
      salary:"₹5–12 LPA",
      desc:"Build enterprise web applications using ASP.NET and .NET Core.",
    },

    {
      role:"Backend Developer",
      salary:"₹6–15 LPA",
      desc:"Create APIs and server-side applications using C#.",
    },

    {
      role:"Game Developer",
      salary:"₹4–12 LPA",
      desc:"Develop games using C# and Unity game engine.",
    },
  ];



  return (

    <motion.div

      initial={{
        opacity:0
      }}

      animate={{
        opacity:1
      }}

      transition={{
        duration:0.8
      }}

      className="min-h-screen bg-slate-950 text-white"

    >



      {/* Header */}

      <div className="bg-slate-900 border-b border-slate-800">


        <div className="max-w-7xl mx-auto px-6 py-8">


          <Link
            to="/"
            className="text-cyan-400 hover:text-cyan-300"
          >

            ← Back to Home

          </Link>




          <motion.h1

            initial={{
              opacity:0,
              y:50
            }}

            animate={{
              opacity:1,
              y:0
            }}

            transition={{
              duration:0.8
            }}

            className="text-5xl font-bold mt-6"

          >

            🟣 C# Programming

          </motion.h1>




          <p className="text-gray-400 mt-4 text-lg">

            C# is a modern programming language developed by Microsoft
            used for web applications, desktop software, cloud solutions
            and game development.

          </p>



        </div>

      </div>





      <div className="max-w-7xl mx-auto px-6 py-12">



        {/* Salary */}


        <section className="bg-slate-900 rounded-3xl p-8 mb-8">


          <h2 className="text-3xl font-bold text-cyan-400">

            💰 Salary

          </h2>




          <div className="grid md:grid-cols-3 gap-6 mt-8">



            <PremiumCard className="p-6">

              <h3 className="font-bold">
                Fresher
              </h3>

              <p className="text-3xl text-green-400 mt-3">
                ₹4–8 LPA
              </p>

            </PremiumCard>




            <PremiumCard className="p-6">

              <h3 className="font-bold">
                Experienced
              </h3>

              <p className="text-3xl text-yellow-400 mt-3">
                ₹8–18 LPA
              </p>

            </PremiumCard>




            <PremiumCard className="p-6">

              <h3 className="font-bold">
                Senior
              </h3>

              <p className="text-3xl text-cyan-400 mt-3">
                ₹20+ LPA
              </p>

            </PremiumCard>



          </div>


        </section>
                {/* Skills */}


        <section className="bg-slate-900 rounded-3xl p-8 mb-8">


          <h2 className="text-3xl font-bold text-cyan-400">

            🛠 Skills Required

          </h2>




          <div className="flex flex-wrap gap-4 mt-8">


            {skills.map((skill,index)=>(


              <motion.div


                key={skill}


                initial={{
                  opacity:0,
                  scale:0.5
                }}


                whileInView={{
                  opacity:1,
                  scale:1
                }}


                viewport={{
                  once:true
                }}


                transition={{
                  delay:index*0.05
                }}


                whileHover={{
                  scale:1.15,
                  rotateZ:3
                }}


                className="
                bg-cyan-500/20
                border
                border-cyan-400/30
                text-cyan-300
                px-5
                py-3
                rounded-full
                cursor-pointer
                shadow-lg
                hover:shadow-cyan-500/40
                "

              >

                {skill}


              </motion.div>


            ))}


          </div>


        </section>







        {/* Roadmap */}



        <section className="bg-slate-900 rounded-3xl p-8 mb-8">


          <h2 className="text-3xl font-bold text-cyan-400">

            🗺 Learning Roadmap

          </h2>




          <div className="mt-10 space-y-6">



            {roadmap.map((step,index)=>(


              <motion.div


                key={index}


                initial={{
                  opacity:0,
                  x:-80
                }}


                whileInView={{
                  opacity:1,
                  x:0
                }}


                viewport={{
                  once:true
                }}


                transition={{
                  duration:0.5,
                  delay:index*0.1
                }}


              >



                <PremiumCard className="p-5 flex items-center gap-5">



                  <motion.div


                    whileHover={{
                      rotate:360,
                      scale:1.1
                    }}


                    transition={{
                      duration:0.5
                    }}


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


                  </motion.div>




                  <p className="text-lg">

                    {step}

                  </p>



                </PremiumCard>



              </motion.div>


            ))}


          </div>


        </section>
                {/* Career Opportunities */}


        <section className="bg-slate-900 rounded-3xl p-8 mb-8">


          <h2 className="text-3xl font-bold text-cyan-400">

            💼 Career Opportunities

          </h2>




          <div className="grid md:grid-cols-2 gap-8 mt-8">


            {careers.map((career,index)=>(


              <motion.div


                key={career.role}


                initial={{
                  opacity:0,
                  y:50
                }}


                whileInView={{
                  opacity:1,
                  y:0
                }}


                viewport={{
                  once:true
                }}


                transition={{
                  delay:index*0.15
                }}


              >



                <PremiumCard className="p-7 h-full">


                  <motion.h3


                    whileHover={{
                      x:8
                    }}


                    className="text-2xl font-bold"

                  >

                    {career.role}


                  </motion.h3>




                  <p className="text-gray-400 mt-4">

                    {career.desc}

                  </p>




                  <motion.p


                    whileHover={{
                      scale:1.1
                    }}


                    className="text-green-400 font-bold text-xl mt-5"

                  >

                    {career.salary}


                  </motion.p>



                </PremiumCard>



              </motion.div>


            ))}


          </div>


        </section>







        {/* Companies */}



        <section className="bg-slate-900 rounded-3xl p-8">


          <h2 className="text-3xl font-bold text-cyan-400">

            🏢 Top Companies

          </h2>




          <div className="grid md:grid-cols-4 gap-6 mt-8">


            {companies.map((company,index)=>(


              <motion.div


                key={company}


                initial={{
                  opacity:0,
                  scale:0.7
                }}


                whileInView={{
                  opacity:1,
                  scale:1
                }}


                viewport={{
                  once:true
                }}


                transition={{
                  delay:index*0.1
                }}


              >



                <PremiumCard className="p-6 text-center">


                  <motion.div


                    animate={{
                      y:[0,-6,0]
                    }}


                    transition={{
                      duration:2,
                      repeat:Infinity,
                      delay:index*0.2
                    }}


                    className="font-bold text-lg"

                  >

                    {company}


                  </motion.div>



                </PremiumCard>



              </motion.div>


            ))}


          </div>


        </section>



      </div>


    </motion.div>


  );

}


export default CSharp;