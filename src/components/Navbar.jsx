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
    { name: "Portfolio", path: "/portfolio-builder", isRoute: true },
    { name: "Languages", path: "#languages" },
    { name: "Careers", path: "#careers" },
    { name: "Salary", path: "#salary" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        fixed top-0 left-0 w-full z-50
        bg-[#020817]/90
        backdrop-blur-2xl
        border-b border-cyan-400/10
        shadow-[0_8px_35px_rgba(0,0,0,0.35)]
        overflow-hidden
      "
    >
      {/* ================= NAVBAR GLOW ================= */}

      <motion.div
        animate={{
          x: [-180, 180, -180],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
          absolute
          -top-32
          left-1/2
          -translate-x-1/2
          w-96
          h-64
          bg-cyan-400
          blur-[100px]
          rounded-full
          pointer-events-none
        "
      />

      {/* ================= NAVBAR CONTENT ================= */}

      <div
        className="
          relative
          max-w-7xl
          mx-auto
          px-6
          py-4
          flex
          items-center
          justify-between
        "
      >
        {/* ================= LOGO ================= */}

        <a href="#home" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{
              rotate: 8,
              scale: 1.08,
            }}
            transition={{ duration: 0.25 }}
            className="
              relative
              p-2.5
              rounded-xl
              bg-gradient-to-br
              from-cyan-400
              to-blue-600
              shadow-[0_0_25px_rgba(34,211,238,0.45)]
              border
              border-cyan-300/30
            "
          >
            <Code2 className="text-white" size={27} strokeWidth={2.5} />
          </motion.div>

          <h1
            className="
              text-2xl
              font-extrabold
              tracking-tight
              bg-gradient-to-r
              from-cyan-300
              via-cyan-400
              to-blue-500
              bg-clip-text
              text-transparent
              group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.35)]
              transition-all
              duration-300
            "
          >
            CodeCareer AI
          </h1>
        </a>

        {/* ================= DESKTOP MENU ================= */}

        <div className="hidden md:flex items-center gap-9">
          {navItems.map((item) =>
            item.isRoute ? (
              <Link
                key={item.name}
                to={item.path}
                className="
                  relative
                  text-gray-300
                  font-semibold
                  text-[15px]
                  tracking-wide
                  py-2
                  transition-all
                  duration-300
                  hover:text-cyan-400
                  hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]
                  group
                "
              >
                {item.name}

                <span
                  className="
                    absolute
                    left-1/2
                    -translate-x-1/2
                    -bottom-1
                    w-0
                    h-[2px]
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-400
                    to-blue-500
                    shadow-[0_0_8px_rgba(34,211,238,0.7)]
                    group-hover:w-full
                    transition-all
                    duration-300
                  "
                />
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.path}
                className="
                  relative
                  text-gray-300
                  font-semibold
                  text-[15px]
                  tracking-wide
                  py-2
                  transition-all
                  duration-300
                  hover:text-cyan-400
                  hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]
                  group
                "
              >
                {item.name}

                <span
                  className="
                    absolute
                    left-1/2
                    -translate-x-1/2
                    -bottom-1
                    w-0
                    h-[2px]
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-400
                    to-blue-500
                    shadow-[0_0_8px_rgba(34,211,238,0.7)]
                    group-hover:w-full
                    transition-all
                    duration-300
                  "
                />
              </a>
            ),
          )}

          {/* ================= THEME BUTTON ================= */}

          <motion.button
            onClick={toggleTheme}
            whileHover={{
              scale: 1.1,
              rotate: 8,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="
              ml-2
              w-11
              h-11
              rounded-full
              flex
              items-center
              justify-center
              bg-white/10
              border
              border-white/10
              backdrop-blur-xl
              shadow-[0_0_18px_rgba(255,255,255,0.06)]
              hover:border-cyan-400/40
              hover:bg-cyan-400/10
              transition-all
              duration-300
            "
          >
            {darkMode ? (
              <Sun
                size={20}
                className="
                  text-yellow-400
                  drop-shadow-[0_0_8px_rgba(250,204,21,0.7)]
                "
              />
            ) : (
              <Moon size={20} className="text-cyan-300" />
            )}
          </motion.button>
        </div>

        {/* ================= MOBILE BUTTON ================= */}

        <motion.button
          whileTap={{ scale: 0.9 }}
          className="
            md:hidden
            w-11
            h-11
            rounded-xl
            flex
            items-center
            justify-center
            bg-white/5
            border
            border-white/10
            text-cyan-300
            hover:bg-cyan-400/10
            hover:border-cyan-400/30
            transition-all
          "
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </motion.button>
      </div>

      {/* ================= MOBILE MENU ================= */}

      {open && (
        <motion.div
          initial={{
            opacity: 0,
            height: 0,
          }}
          animate={{
            opacity: 1,
            height: "auto",
          }}
          className="
            md:hidden
            relative
            px-6
            pb-6
            pt-2
            flex
            flex-col
            gap-2
            bg-[#020817]/95
            backdrop-blur-2xl
            border-t
            border-cyan-400/10
          "
        >
          {navItems.map((item) =>
            item.isRoute ? (
              <motion.div
                key={item.name}
                whileHover={{
                  x: 5,
                }}
              >
                <Link
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="
                    block
                    px-4
                    py-3
                    rounded-xl
                    text-gray-300
                    font-semibold
                    hover:text-cyan-400
                    hover:bg-cyan-400/5
                    transition-all
                  "
                >
                  {item.name}
                </Link>
              </motion.div>
            ) : (
              <motion.a
                key={item.name}
                href={item.path}
                whileHover={{
                  x: 5,
                }}
                onClick={() => setOpen(false)}
                className="
                  block
                  px-4
                  py-3
                  rounded-xl
                  text-gray-300
                  font-semibold
                  hover:text-cyan-400
                  hover:bg-cyan-400/5
                  transition-all
                "
              >
                {item.name}
              </motion.a>
            ),
          )}

          {/* MOBILE THEME */}

          <button
            onClick={toggleTheme}
            className="
              mt-2
              flex
              items-center
              gap-3
              px-4
              py-3
              rounded-xl
              text-gray-300
              font-semibold
              hover:text-cyan-400
              hover:bg-cyan-400/5
              transition-all
            "
          >
            {darkMode ? (
              <Sun className="text-yellow-400" size={20} />
            ) : (
              <Moon className="text-cyan-300" size={20} />
            )}
            Theme
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;
