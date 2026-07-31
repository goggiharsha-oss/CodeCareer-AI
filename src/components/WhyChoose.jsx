import { Briefcase, TrendingUp, Map, Scale } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";


function WhyChoose() {

  const { darkMode } = useTheme();


  const features = [

    {
      icon:<TrendingUp size={38}/>,
      title:"Salary Insights",
      desc:"Know fresher and experienced salary packages."
    },

    {
      icon:<Briefcase size={38}/>,
      title:"Job Roles",
      desc:"Explore career opportunities for every language."
    },

    {
      icon:<Map size={38}/>,
      title:"Learning Roadmaps",
      desc:"Follow a step-by-step learning path."
    },

    {
      icon:<Scale size={38}/>,
      title:"Compare Languages",
      desc:"Compare languages and choose the best one."
    }

  ];



  return (

    <section

      id="whychoose"

      className={`
      py-24 px-6 transition-all duration-500

      ${
        darkMode
        ?
        "bg-slate-950"
        :
        "bg-gradient-to-b from-slate-50 via-white to-cyan-50"
      }

      `}
    >


      <div className="max-w-7xl mx-auto">



        <motion.h2

          initial={{
            opacity:0,
            y:-30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:0.6
          }}

          className={`
          text-4xl font-bold text-center mb-14

          ${
            darkMode
            ?
            "text-white"
            :
            "text-slate-900"
          }

          `}
        >

          Why Choose CodeCareer AI?

        </motion.h2>





        <div className="
        grid md:grid-cols-2 lg:grid-cols-4 gap-8
        ">



        {
          features.map((item,index)=>(


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
                delay:index*0.15
              }}

              whileHover={{
                y:-10,
                scale:1.03
              }}


              className={`
                relative overflow-hidden
                rounded-3xl
              p-8
              border
              backdrop-blur-xl
              transition-all


              ${
                darkMode
                ?
                "bg-white/5 border-white/10 hover:shadow-cyan-500/30"
                :
                "bg-white/80 border-cyan-100 shadow-xl hover:shadow-cyan-200"
              }

              `}
            >


{/* Floating Background Icon */}

<motion.div

  animate={{
    y:[0,-18,0],
    rotate:[0,15,-15,0],
    opacity:[0.06,0.15,0.06]
  }}

  transition={{
    duration:6,
    repeat:Infinity,
    delay:index*0.4
  }}

  className="
  absolute
  -right-6
  top-8
  w-28
  h-28
  rounded-full
  bg-gradient-to-br
  from-cyan-500/20
  to-blue-500/10
  blur-2xl
  pointer-events-none
  "

/>


              <motion.div

                whileHover={{
                  rotate:10,
                  scale:1.1
                }}

                className="
                w-16 h-16
                shadow-[0_0_25px_rgba(34,211,238,0.35)]
                rounded-2xl
                flex items-center justify-center

                text-white

                bg-gradient-to-r
                from-cyan-400
                to-blue-600

                shadow-lg
                "

              >

                {item.icon}

              </motion.div>






              <h3

                className={`
                text-xl font-bold mt-6

                ${
                  darkMode
                  ?
                  "text-white"
                  :
                  "text-slate-900"
                }

                `}

              >

                {item.title}

              </h3>





              <p

                className={`
                mt-3 leading-relaxed

                ${
                  darkMode
                  ?
                  "text-gray-400"
                  :
                  "text-gray-600"
                }

                `}

              >

                {item.desc}

              </p>




            </motion.div>


          ))
        }


        </div>



      </div>


    </section>

  );

}


export default WhyChoose;