import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";


function Counter({ value }) {

  const [count,setCount] = useState(0);


  useEffect(()=>{

    let start = 0;

    const end = parseInt(value);

    const duration = 1200;

    const increment = end / (duration / 30);


    const timer = setInterval(()=>{

      start += increment;


      if(start >= end){

        start = end;

        clearInterval(timer);

      }


      setCount(Math.floor(start));


    },30);



    return ()=>clearInterval(timer);


  },[value]);



  return (
    <>
      {value.includes("₹") && "₹"}
      {count}
      {value.includes("L") && "L+"}
      {value.includes("+") && !value.includes("L") && "+"}
    </>
  );

}





function Statistics(){

  const {darkMode}=useTheme();



  const stats=[

    {
      number:"10+",
      title:"Programming Languages",
      icon:"💻"
    },

    {
      number:"50+",
      title:"Career Paths",
      icon:"🚀"
    },

    {
      number:"100+",
      title:"Job Roles",
      icon:"💼"
    },

    {
      number:"40L+",
      title:"Highest Salary",
      icon:"💰"
    }

  ];



  return(

    <section

      id="statistics"

      className={`
      py-24 px-6

      transition-all duration-500

      ${
        darkMode
        ?
        "bg-slate-950"
        :
        "bg-gradient-to-b from-cyan-50 via-white to-slate-100"
      }

      `}
    >



      <div className="max-w-7xl mx-auto">





        <motion.h2

          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          className={`
          text-4xl
          font-bold
          text-center

          ${
            darkMode
            ?
            "text-white"
            :
            "text-slate-900"
          }

          `}
        >

          Career Statistics

        </motion.h2>





        <p

          className={`
          text-center
          mt-4
          mb-14

          ${
            darkMode
            ?
            "text-gray-400"
            :
            "text-slate-600"
          }

          `}
        >

          Explore technology careers with salary insights and opportunities

        </p>








        <div className="
        grid
        grid-cols-2
        md:grid-cols-4
        gap-8
        ">



        {
          stats.map((item,index)=>(


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
                scale:1.05
              }}



              className={`
              rounded-3xl
              p-8
              text-center

              backdrop-blur-xl

              border

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





              <motion.div

                whileHover={{
                  scale:1.2,
                  rotate:10
                }}

                className="text-5xl mb-5"

              >

                {item.icon}

              </motion.div>







              <h3

                className="
                text-5xl
                font-extrabold

                bg-gradient-to-r
                from-cyan-400
                to-blue-600

                bg-clip-text
                text-transparent
                "

              >

                <Counter value={item.number}/>

              </h3>







              <p

                className={`
                mt-4

                ${
                  darkMode
                  ?
                  "text-gray-400"
                  :
                  "text-slate-600"
                }

                `}

              >

                {item.title}

              </p>




            </motion.div>


          ))
        }


        </div>


      </div>


    </section>


  );

}


export default Statistics;