import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { TrendingUp } from "lucide-react";

function SalaryComparison() {
  const { darkMode } = useTheme();

  const salaries = [
    {
      name: "JavaScript",
      icon: "🟨",
      salary: "₹4–9 LPA",
      width: "95%",
      rank: "1",
    },
    {
      name: "C++",
      icon: "⚙️",
      salary: "₹4–8 LPA",
      width: "90%",
      rank: "2",
    },
    {
      name: "Java",
      icon: "☕",
      salary: "₹4–7 LPA",
      width: "85%",
      rank: "3",
    },
    {
      name: "Python",
      icon: "🐍",
      salary: "₹3–6 LPA",
      width: "75%",
      rank: "4",
    },
  ];


  return (
    <section
      id="salary"
      className={`py-24 px-6 transition-all duration-500 ${
        darkMode
          ? "bg-slate-950"
          : "bg-gradient-to-b from-cyan-50 via-white to-slate-100"
      }`}
    >

      <div className="max-w-6xl mx-auto">


        <motion.div
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="text-center mb-14"
        >

          <div className="flex justify-center mb-4">
            <TrendingUp
              size={45}
              className="text-cyan-500"
            />
          </div>


          <h2
            className={`text-4xl font-bold ${
              darkMode
              ? "text-white"
              : "text-slate-900"
            }`}
          >
            Salary Comparison
          </h2>


          <p
            className={`mt-3 ${
              darkMode
              ? "text-gray-400"
              : "text-slate-600"
            }`}
          >
            Average fresher salary comparison across programming languages
          </p>

        </motion.div>




        <div className="grid md:grid-cols-2 gap-8">


        {salaries.map((item,index)=>(


          <motion.div
            key={item.name}
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
              y:-8,
              scale:1.03
            }}

            className={`
            relative overflow-hidden
            rounded-3xl p-7
            backdrop-blur-xl
            border
            transition-all

            ${
              darkMode
              ?
              "bg-white/5 border-white/10 hover:shadow-cyan-500/20"
              :
              "bg-white/70 border-cyan-100 shadow-xl hover:shadow-cyan-200"
            }
            `}
          >
{/* Floating Background Icon */}

<motion.div

  animate={{
    y:[0,-20,0],
    rotate:[0,15,-15,0],
    opacity:[0.08,0.16,0.08]
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
  text-8xl
  pointer-events-none
  "

>

  {item.icon}

</motion.div>

            {/* Rank */}
            <div
              className="
              absolute top-4 right-5
              w-9 h-9 rounded-full
              bg-gradient-to-r from-cyan-400 to-blue-600
              text-white
              flex items-center justify-center
              font-bold
              "
            >
              {item.rank}
            </div>



            <div className="flex items-center gap-4 mb-6">

             <motion.span

  whileHover={{
    scale:1.2,
    rotate:12
  }}

  className="text-5xl"

>

  {item.icon}

</motion.span>


              <div>

                <h3
                  className={`text-2xl font-bold ${
                    darkMode
                    ?"text-white"
                    :"text-slate-900"
                  }`}
                >
                  {item.name}
                </h3>


                <p className="text-cyan-500 font-bold text-lg drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]">
                  {item.salary}
                </p>

              </div>

            </div>



            <div
              className={`h-4 rounded-full ${
                darkMode
                ?"bg-slate-700"
                :"bg-gray-200"
              }`}
            >

              <motion.div
                initial={{
                  width:0
                }}
                whileInView={{
                  width:item.width
                }}
                viewport={{
                  once:true
                }}
                transition={{
                  duration:1
                }}
                className="
                h-full rounded-full
                bg-gradient-to-r
                from-cyan-400
                via-blue-500
                to-purple-600
                "
              />

            </div>


          </motion.div>


        ))}


        </div>

      </div>


    </section>
  );
}


export default SalaryComparison;