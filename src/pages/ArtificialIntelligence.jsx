import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PremiumCard from "../components/PremiumCard";


function ArtificialIntelligence() {


  const skills = [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "TensorFlow",
    "PyTorch",
    "NumPy",
    "Pandas",
    "Data Visualization",
    "Mathematics",
    "Problem Solving",
  ];


  const roadmap = [
    "Learn Python",
    "Master Mathematics & Statistics",
    "Learn Machine Learning",
    "Study Deep Learning",
    "Practice TensorFlow & PyTorch",
    "Build AI Projects",
    "Learn NLP & Computer Vision",
    "Create AI Portfolio",
    "Apply for AI Jobs",
  ];


  const companies = [
    "Google",
    "Microsoft",
    "OpenAI",
    "Amazon",
    "NVIDIA",
    "Infosys",
    "TCS",
    "Accenture",
  ];


  const jobRoles = [
    "AI Engineer",
    "Machine Learning Engineer",
    "Deep Learning Engineer",
    "NLP Engineer",
    "Computer Vision Engineer",
    "Research Engineer",
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

            🤖 Artificial Intelligence

          </motion.h1>




          <p className="text-gray-400 mt-4 text-lg">

            Build intelligent systems using Machine Learning and Deep Learning.

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



            <PremiumCard className="p-6 text-center">


              <h3 className="font-bold">

                Fresher

              </h3>


              <p className="text-3xl text-green-400 mt-3">

                ₹6–10 LPA

              </p>


            </PremiumCard>





            <PremiumCard className="p-6 text-center">


              <h3 className="font-bold">

                Experienced

              </h3>


              <p className="text-3xl text-yellow-400 mt-3">

                ₹15–25 LPA

              </p>


            </PremiumCard>





            <PremiumCard className="p-6 text-center">


              <h3 className="font-bold">

                Senior

              </h3>


              <p className="text-3xl text-cyan-400 mt-3">

                ₹35+ LPA

              </p>


            </PremiumCard>



          </div>


        </section>
        
        {/* Skills */}


        <section className="bg-slate-900 rounded-3xl p-8 mb-8">


          <h2 className="text-3xl font-bold text-cyan-400 mb-6">

            🛠 Skills Required

          </h2>




          <div className="grid md:grid-cols-2 gap-5">


            {skills.map((skill,index)=>(


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


                viewport={{
                  once:true
                }}


                transition={{
                  delay:index*0.1
                }}


                whileHover={{
                  scale:1.05,
                  rotateX:5,
                  rotateY:5
                }}


              >



                <PremiumCard className="p-5">


                  <motion.p


                    whileHover={{
                      x:10
                    }}


                    className="font-semibold"

                  >

                    ✅ {skill}

                  </motion.p>



                </PremiumCard>



              </motion.div>


            ))}



          </div>


        </section>







        {/* Roadmap */}



        <section className="bg-slate-900 rounded-3xl p-8 mb-8">


          <h2 className="text-3xl font-bold text-cyan-400 mb-6">

            🗺 Learning Roadmap

          </h2>




          <div className="space-y-5">


            {roadmap.map((step,index)=>(


              <motion.div


                key={index}


                initial={{
                  opacity:0,
                  y:40
                }}


                whileInView={{
                  opacity:1,
                  y:0
                }}


                viewport={{
                  once:true
                }}


                transition={{
                  delay:index*0.12
                }}


                whileHover={{
                  scale:1.03,
                  x:10
                }}


              >



                <PremiumCard className="p-5 flex items-center gap-4">



                  <motion.div


                    animate={{

                      y:[0,-8,0]

                    }}


                    transition={{

                      duration:2,

                      repeat:Infinity,

                      delay:index*0.2

                    }}


                    className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center font-bold"

                  >

                    {index+1}

                  </motion.div>




                  <p className="font-semibold">

                    {step}

                  </p>




                </PremiumCard>



              </motion.div>



            ))}



          </div>



        </section>
        

        {/* Job Roles */}


        <section className="bg-slate-900 rounded-3xl p-8 mb-8">


          <h2 className="text-3xl font-bold text-cyan-400 mb-6">

            💼 Job Roles

          </h2>




          <div className="grid md:grid-cols-2 gap-6">


            {jobRoles.map((role,index)=>(


              <motion.div


                key={index}


                initial={{
                  opacity:0,
                  scale:0.8
                }}


                whileInView={{
                  opacity:1,
                  scale:1
                }}


                viewport={{
                  once:true
                }}


                transition={{
                  delay:index*0.15
                }}


                whileHover={{
                  y:-10,
                  scale:1.05
                }}


              >



                <PremiumCard className="p-6">


                  <motion.h3


                    whileHover={{
                      x:10
                    }}


                    className="text-xl font-bold"

                  >

                    🚀 {role}

                  </motion.h3>



                </PremiumCard>



              </motion.div>


            ))}



          </div>


        </section>







        {/* Companies */}



        <section className="bg-slate-900 rounded-3xl p-8">


          <h2 className="text-3xl font-bold text-cyan-400 mb-6">

            🏢 Top Companies

          </h2>





          <div className="grid md:grid-cols-4 gap-6">


            {companies.map((company,index)=>(


              <motion.div


                key={index}


                initial={{
                  opacity:0,
                  rotateY:90
                }}


                whileInView={{
                  opacity:1,
                  rotateY:0
                }}


                viewport={{
                  once:true
                }}


                transition={{
                  delay:index*0.1,
                  duration:0.5
                }}


                whileHover={{
                  scale:1.1,
                  y:-8
                }}


              >



                <PremiumCard className="p-6 text-center">


                  <motion.div


                    animate={{

                      y:[0,-5,0]

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


export default ArtificialIntelligence;