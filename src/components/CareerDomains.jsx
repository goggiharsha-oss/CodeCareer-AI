import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { playClick } from "../utils/playClick";
import { ArrowRight } from "lucide-react";


function CareerDomains({ search = "" }) {

  const navigate = useNavigate();
  const { darkMode } = useTheme();


  const domains = [

    {
      icon:"🌐",
      name:"Web Development",
      skills:"HTML, CSS, JavaScript, React, Node.js",
      route:"/web-development",
    },

    {
      icon:"🔐",
      name:"Cyber Security",
      skills:"Networking, Linux, Ethical Hacking, Security",
      route:"/cyber-security",
    },

    {
      icon:"🤖",
      name:"Artificial Intelligence",
      skills:"Python, Machine Learning, Deep Learning",
      route:"/artificial-intelligence",
    },

    {
      icon:"📊",
      name:"Data Science",
      skills:"Python, SQL, Statistics, Analytics",
      route:"/data-science",
    },

    {
      icon:"☁️",
      name:"Cloud Computing",
      skills:"AWS, Azure, DevOps, Docker",
      route:"/cloud-computing",
    },

    {
      icon:"📱",
      name:"Mobile Development",
      skills:"Android, Flutter, React Native",
      route:"/mobile-development",
    },

  ];



  const filteredDomains = domains.filter(
    (domain)=>
      domain.name.toLowerCase().includes(search.toLowerCase()) ||
      domain.skills.toLowerCase().includes(search.toLowerCase()) ||
      (
        search.toLowerCase()==="ai" &&
        domain.name==="Artificial Intelligence"
      )
  );



  return (

    <section
      id="careers"
      className={`
      py-24 px-6 transition-all duration-500

      ${
        darkMode
        ?
        "bg-slate-950"
        :
        "bg-gradient-to-b from-white via-cyan-50 to-slate-100"
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
          🚀 Trending Career Paths
        </motion.h2>





        <div className="
        grid md:grid-cols-3 gap-8
        ">



        {
          filteredDomains.map((domain,index)=>(


            <motion.div

              key={domain.name}

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
                y:-10,
                scale:1.03
              }}


              className={`
              relative overflow-hidden
              rounded-3xl p-7
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



              {/* Icon */}

              <motion.div

                whileHover={{
                  rotate:10,
                  scale:1.1
                }}

                className="
                w-16 h-16
                rounded-2xl
                flex items-center justify-center
                text-4xl

                bg-gradient-to-r
                from-cyan-400
                to-blue-600

                shadow-lg
                "

              >
                {domain.icon}

              </motion.div>






              <h3
                className={`
                text-2xl font-bold mt-6

                ${
                  darkMode
                  ?
                  "text-white"
                  :
                  "text-slate-900"
                }
                `}
              >

                {domain.name}

              </h3>






              <p
                className={`
                mt-4 leading-relaxed

                ${
                  darkMode
                  ?
                  "text-gray-400"
                  :
                  "text-gray-600"
                }
                `}
              >

                {domain.skills}

              </p>







              <button

                onClick={()=>{

                  playClick();
                  navigate(domain.route);

                }}

                className="
                mt-7 w-full

                flex items-center justify-center gap-2

                rounded-xl

                py-3

                font-semibold
                text-white

                bg-gradient-to-r
                from-cyan-500
                to-blue-600

                hover:scale-105

                transition
                "

              >

                Explore Career

                <ArrowRight size={18}/>


              </button>




            </motion.div>


          ))
        }



        </div>


      </div>


    </section>

  );

}


export default CareerDomains;