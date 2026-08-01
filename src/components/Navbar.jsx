import { useState } from "react";
import { Menu, X, Code2, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  const navItems = [
 { name: "Home", path: "#top" },
  { name: "Languages", path: "#languages" },
  { name: "Careers", path: "#careers" },
  { name: "Salary", path: "#salary" },
  { name: "Portfolio", path: "/portfolio-builder", isRoute: true },
];
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="
      fixed top-0 left-0 w-full z-50
      backdrop-blur-xl
      bg-white/20 dark:bg-black/30
      border-b border-white/20
     shadow-lg
overflow-hidden
"
    >
      {/* Animated Background Glow */}

<motion.div

  animate={{
    x:[-100,100,-100],
    opacity:[0.2,0.5,0.2]
  }}

  transition={{
    duration:8,
    repeat:Infinity
  }}

  className="
  absolute
  -top-20
  left-1/2
  w-72
  h-72
  bg-cyan-400
  blur-3xl
  rounded-full
  "
/>

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">


        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">

          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="
            p-2 rounded-xl
            bg-gradient-to-r from-cyan-400 to-blue-600
            shadow-lg shadow-cyan-400/40
            "
          >
            <Code2 className="text-white" size={28} />
          </motion.div>


          <h1
            className="
            text-2xl font-bold
            bg-gradient-to-r from-cyan-400 to-blue-600
            bg-clip-text text-transparent
            "
          >
            CodeCareer AI
          </h1>

        </a>



        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">


          {navItems.map((item) =>
  item.isRoute ? (
    <Link
      key={item.name}
      to={item.path}
      className="
      relative
      text-gray-700 dark:text-gray-200
      font-medium
      group
      "
    >
      {item.name}

      <span
        className="
        absolute left-0 -bottom-1
        w-0 h-[2px]
        bg-cyan-400
        transition-all
        duration-300
        group-hover:w-full
        "
      />
    </Link>
  ) : (
    <a
      key={item.name}
      href={item.path}
      className="
      relative
      text-gray-700 dark:text-gray-200
      font-medium
      group
      "
    >
      {item.name}

      <span
        className="
        absolute left-0 -bottom-1
        w-0 h-[2px]
        bg-cyan-400
        transition-all
        duration-300
        group-hover:w-full
        "
      />
    </a>
  )
)}
          



          {/* Theme Button */}
          <button
            onClick={toggleTheme}
            className="
            p-2 rounded-full
            bg-white/30 dark:bg-white/10
            hover:scale-110
            transition
            "
          >

            {darkMode ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} />
            )}

          </button>


        </div>




        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >

          {open ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}

        </button>


      </div>




      {/* Mobile Menu */}

      {open && (

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="
          md:hidden
          px-6 pb-5
          flex flex-col gap-5
          bg-white/80
          dark:bg-black/80
          backdrop-blur-xl
          "
        >


          {navItems.map((item) =>
  item.isRoute ? (
    <motion.div
      key={item.name}
      whileHover={{ y: -3, scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        to={item.path}
        onClick={() => setOpen(false)}
        className="
        relative
        text-gray-700 dark:text-gray-200
        font-medium
        "
      >
        {item.name}
      </Link>
    </motion.div>
  ) : (
    <motion.a
      key={item.name}
      href={item.path}
      whileHover={{ y: -3, scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="
      relative
      text-gray-700 dark:text-gray-200
      font-medium
      "
    >
      {item.name}
    </motion.a>
  )
)}

          <button
  onClick={toggleTheme}
  className="
  flex items-center gap-2
  text-gray-800
  dark:text-gray-200
  "
>

            {darkMode ? <Sun /> : <Moon />}
            Theme

          </button>


        </motion.div>

      )}


    </motion.nav>
  );
}


export default Navbar;