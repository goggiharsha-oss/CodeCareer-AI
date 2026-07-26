import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useTheme } from "../context/ThemeContext";


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


  const filteredSuggestions = suggestions.filter((item) =>
    item.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );


  return (
    <section
      className={`relative overflow-hidden py-24 px-6 transition-all duration-500 ${
        darkMode
          ? "bg-slate-950 text-white"
          : "bg-white text-slate-900"
      }`}
    >


      <div
        className={`absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full blur-3xl ${
          darkMode
            ? "bg-cyan-500/20"
            : "bg-cyan-300/30"
        }`}
      />


      <div
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
          className={`absolute hidden md:block rounded-full px-4 py-2 backdrop-blur-lg shadow-lg ${
            darkMode
              ? "bg-slate-800/80"
              : "bg-white border border-gray-200"
          } ${pill.className}`}
        >
          {pill.text}
        </motion.div>
      ))}



      <motion.div
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


        <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-sm text-cyan-400">
          🚀 Programming Career Guide
        </span>


        <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
          Discover Your{" "}
          <span className="text-cyan-400">
            Dream Tech Career
          </span>
        </h1>


        <p
          className={`mx-auto mt-6 max-w-3xl text-lg md:text-xl ${
            darkMode
              ? "text-gray-400"
              : "text-gray-600"
          }`}
        >
          Explore programming languages, career roadmaps,
          salaries, interview preparation and choose the
          perfect technology career with CodeCareer AI.
        </p>



        {/* Search Box */}

        <div className="mx-auto mt-10 max-w-2xl">

          <div
            className={`flex items-center rounded-2xl px-5 py-4 shadow-xl ${
              darkMode
                ? "bg-slate-800/80 border border-slate-700"
                : "bg-white border border-gray-200"
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
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95}}
            className="rounded-xl bg-cyan-500 px-7 py-3 font-semibold text-white shadow-lg hover:bg-cyan-600"
          >
            Explore Languages
          </motion.a>


          <motion.a
            href="#salary"
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95}}
            className={`rounded-xl border px-7 py-3 font-semibold ${
              darkMode
                ? "border-cyan-500 text-cyan-400"
                : "border-cyan-500 text-cyan-600"
            }`}
          >
            Compare Salaries
          </motion.a>

        </div>


      </motion.div>

    </section>
  );
}