import { Search } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { playClick } from "../utils/playClick";
import { motion, useMotionValue, useTransform } from "framer-motion";


const pills = [
  {
    text: "🐍 Python",
    className: "top-20 left-10 text-cyan-400",
  },
  {
    text: "☕ Java",
    className: "top-24 right-10 text-yellow-400",
  },
  {
    text: "⚛️ React",
    className: "bottom-20 left-20 text-sky-400",
  },
  {
    text: "🟨 JavaScript",
    className: "top-8 left-1/2 -translate-x-1/2 text-yellow-300",
  },
  {
    text: "⚙️ C++",
    className: "bottom-8 right-20 text-orange-400",
  },
];
const floatingShapes = [
  {
    size: "w-44 h-44",
    color: "bg-cyan-500/20",
    position: "-top-16 -left-10",
    duration: 8,
  },
  {
    size: "w-32 h-32",
    color: "bg-purple-500/20",
    position: "top-40 right-10",
    duration: 6,
  },
  {
    size: "w-56 h-56",
    color: "bg-blue-500/10",
    position: "bottom-0 left-1/3",
    duration: 10,
  },
];

const suggestions = [
  {
    name: "Python",
    icon: "🐍",
    path: "/python",
  },
  {
    name: "Java",
    icon: "☕",
    path: "/java",
  },
  {
    name: "JavaScript",
    icon: "🟨",
    path: "/javascript",
  },
  {
    name: "Artificial Intelligence",
    icon: "🤖",
    path: "/artificial-intelligence",
  },
  {
    name: "Web Development",
    icon: "🌐",
    path: "/web-development",
  },
  {
    name: "Cyber Security",
    icon: "🔐",
    path: "/cyber-security",
  },
];


export default function Hero({ search, setSearch }) {

  const { darkMode } = useTheme();
const mouseX = useMotionValue(0);
const mouseY = useMotionValue(0);

const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const filteredSuggestions = suggestions.filter((item) =>
    item.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );


  return (
   <section
  onMouseMove={(e) => {
    const { innerWidth, innerHeight } = window;
    mouseX.set(e.clientX - innerWidth / 2);
    mouseY.set(e.clientY - innerHeight / 2);
  }}
      className={`relative overflow-hidden py-24 px-6 transition-all duration-500 ${
        darkMode
          ? "bg-slate-950 text-white"
          : "bg-white text-slate-900"
      }`}
    >
{floatingShapes.map((shape, index) => (
  <motion.div
    key={index}
    animate={{
      y: [0, -25, 0],
      x: [0, 15, 0],
      rotate: [0, 10, 0],
    }}
    transition={{
      duration: shape.duration,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className={`absolute ${shape.position} ${shape.size} ${shape.color} rounded-full blur-3xl`}
  />
))}

      <motion.div
  animate={{
    scale: [1, 1.15, 1],
    opacity: [0.5, 0.8, 0.5],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className={`absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full blur-3xl ${
    darkMode
      ? "bg-cyan-500/20"
      : "bg-cyan-300/30"
  }`}
/>
      <div
  className={`absolute inset-0 opacity-30 ${
    darkMode
      ? "bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]"
      : "bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)]"
  } bg-[size:40px_40px]`}
/>


     <motion.div
  animate={{
    scale: [1, 1.2, 1],
    opacity: [0.4, 0.7, 0.4],
  }}
  transition={{
    duration: 7,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className={`absolute bottom-0 right-0 h-80 w-80 rounded-full blur-3xl ${
    darkMode
      ? "bg-purple-500/20"
      : "bg-purple-300/30"
  }`}
/>


      {pills.map((pill,index)=>(
        <motion.div
          key={index}
          animate={{
            y:[0,-12,0]
          }}
          transition={{
            duration:3+index*0.3,
            repeat:Infinity,
            ease:"easeInOut"
          }}
          className={`absolute hidden md:block rounded-full px-5 py-2 backdrop-blur-xl shadow-xl transition-all duration-300 hover:scale-110 ${
  darkMode
    ? "bg-slate-800/70 border border-cyan-500/20 shadow-cyan-500/20"
    : "bg-white/80 border border-cyan-100 shadow-cyan-200/40"
} ${pill.className}`}
        >
          {pill.text}
        </motion.div>
      ))}



      <motion.div
      style={{
  rotateX,
  rotateY,
  transformPerspective: 1200,
}}
        initial={{
          opacity:0,
          y:40
        }}
        animate={{
          opacity:1,
          y:0
        }}
        transition={{
          duration:0.8
        }}
        className="relative z-10 mx-auto max-w-5xl text-center"
      >


        <span className="rounded-full bg-cyan-500/20 px-5 py-2 text-sm text-cyan-400 border border-cyan-400/30 shadow-lg shadow-cyan-500/20">
  🤖 AI Powered Career Discovery Platform
</span>

       <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">

  Discover Your{" "}

  <motion.span
    animate={{
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "linear",
    }}
    className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-[length:200%_200%] bg-clip-text text-transparent"
  >
    Dream Tech Career
  </motion.span>

</h1>


        <p
          className={`mx-auto mt-6 max-w-3xl text-lg md:text-xl ${
            darkMode
              ? "text-gray-400"
              : "text-gray-600"
          }`}
        >
          Discover the right programming path with AI-powered
career insights, technology roadmaps, salary trends,
and skills required for top software careers.
        </p>



        {/* Search Box */}

        <div className="mx-auto mt-10 max-w-2xl">

         <div
  className={`flex items-center rounded-2xl px-5 py-4 shadow-xl transition-all duration-300 hover:shadow-cyan-500/40 ${
    darkMode
      ? "bg-slate-800/80 border border-cyan-500/30"
      : "bg-white border border-cyan-200"
  }`}
>

            <Search
              size={22}
              className={
                darkMode
                  ? "text-gray-400"
                  : "text-gray-500"
              }
            />


           <input
  type="text"
  value={search}
  onChange={(e)=>setSearch(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      const result = filteredSuggestions[0];

      if (result) {
        window.location.href = result.path;
      }
    }
  }}
  placeholder="Search Programming Language..."
  className={`ml-3 w-full bg-transparent outline-none ${
    darkMode
      ? "text-white placeholder:text-gray-500"
      : "text-slate-900 placeholder:text-gray-400"
  }`}
/>

          </div>


          {search && filteredSuggestions.length > 0 && (

            <div
              className={`mt-2 rounded-xl shadow-lg overflow-hidden text-left ${
                darkMode
                  ? "bg-slate-800 text-white"
                  : "bg-white text-slate-900"
              }`}
            >

              {filteredSuggestions.map((item,index)=>(

                <a
                  key={index}
                  href={item.path}
                  className="block px-5 py-3 hover:bg-cyan-500/20"
                >
                  {item.icon} {item.name}
                </a>

              ))}

            </div>

          )}

        </div>



        {/* Buttons */}

        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <motion.a
  href="#languages"
  onClick={playClick}
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95}}
            className="rounded-xl bg-cyan-500 px-7 py-3 font-semibold text-white shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-105 hover:bg-cyan-600 hover:shadow-cyan-500/60"
          >
            Explore Languages
          </motion.a>


          <motion.a
  href="#salary"
  onClick={playClick}
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95}}
           className={`rounded-xl border px-7 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg ${
  darkMode
    ? "border-cyan-500 text-cyan-400 hover:shadow-cyan-500/40"
    : "border-cyan-500 text-cyan-600 hover:shadow-cyan-300/50"
}`}
          >
            Compare Salaries
          </motion.a>

        </div>


      </motion.div>

    </section>
  );
}