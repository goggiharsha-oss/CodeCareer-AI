import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";


function Footer() {

  const { darkMode } = useTheme();


  return (

    <footer
      className={`
      relative overflow-hidden
      py-14 px-6
      border-t
      transition-all duration-500

      ${
        darkMode
          ? "bg-slate-950 border-slate-800"
          : "bg-gradient-to-b from-white to-cyan-50 border-cyan-100"
      }

      `}
    >


      <motion.div

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
          duration:0.6
        }}

        className="max-w-7xl mx-auto text-center"

      >



        <motion.h2

          whileHover={{
            scale:1.08
          }}

          className="
          text-4xl
          font-extrabold

          bg-gradient-to-r
          from-cyan-400
          to-blue-600

          bg-clip-text
          text-transparent
          "

        >

          CodeCareer AI

        </motion.h2>





        <p

          className={`
          mt-4 max-w-2xl mx-auto

          ${
            darkMode
              ? "text-gray-400"
              : "text-slate-600"
          }

          `}
        >

          Explore programming languages, career paths, skills and salary insights.

        </p>







        <div

          className={`
          flex flex-wrap
          justify-center
          gap-8
          mt-8

          ${
            darkMode
              ? "text-gray-400"
              : "text-slate-600"
          }

          `}
        >


          {
            [
              ["Languages","#languages"],
              ["Careers","#careers"],
              ["Salary","#salary"],
              ["AI Assistant","#ai"]
            ].map((item,index)=>(


              <motion.a

                key={index}

                href={item[1]}

                whileHover={{
                  y:-5
                }}

                className="
                font-semibold
                hover:text-cyan-500
                transition
                "

              >

                {item[0]}

              </motion.a>


            ))
          }


        </div>








        <div

          className={`
          flex
          justify-center
          gap-6
          mt-8

          text-2xl

          ${
            darkMode
              ? "text-gray-400"
              : "text-slate-600"
          }

          `}
        >

          <motion.span
            whileHover={{
              scale:1.2
            }}
            className="cursor-pointer hover:text-cyan-500"
          >
            🌐
          </motion.span>



          <motion.span
            whileHover={{
              scale:1.2
            }}
            className="cursor-pointer hover:text-cyan-500"
          >
            💼
          </motion.span>



          <motion.span
            whileHover={{
              scale:1.2
            }}
            className="cursor-pointer hover:text-cyan-500"
          >
            ✉️
          </motion.span>


        </div>







        <div

          className={`
          mt-10
          pt-6
          border-t

          ${
            darkMode
              ? "border-slate-800"
              : "border-gray-200"
          }

          `}
        >


          <p

            className={
              darkMode
              ? "text-gray-500"
              : "text-slate-500"
            }

          >

            © 2026 CodeCareer AI. All Rights Reserved.

          </p>



          <p

            className={`
            mt-2

            ${
              darkMode
                ? "text-gray-500"
                : "text-slate-500"
            }

            `}
          >

            Built with React + Tailwind CSS 🚀

          </p>


        </div>




      </motion.div>


    </footer>

  );

}


export default Footer;