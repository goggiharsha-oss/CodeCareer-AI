import { useState } from "react";
import { Menu, X, Code2, Bot, Sparkles, LogIn, LogOut, UserCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [showLogoutToast, setShowLogoutToast] = useState(false);
  const { darkMode } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setOpen(false);
    setShowLogoutToast(true);
    setTimeout(() => navigate("/"), 1400);
  };

  const navItems = [
    { name: "Home", path: "#top" },
    { name: "Portfolio", path: "/portfolio-builder", isRoute: true },
    { name: "AI Assistant", path: "/ai-chat", isRoute: true, isAI: true },
    { name: "Languages", path: "#languages" },
    { name: "Careers", path: "#careers" },
    { name: "Salary", path: "#salary" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50
        backdrop-blur-2xl
        border-b
        overflow-hidden
        transition-all duration-500
        ${
          darkMode
            ? "bg-[#020817]/90 border-cyan-400/10 shadow-[0_8px_35px_rgba(0,0,0,0.35)]"
            : "bg-white/90 border-slate-200 shadow-[0_8px_35px_rgba(0,0,0,0.08)]"
        }
      `}
      >
      {/* ================= NAVBAR GLOW ================= */}

      <motion.div
        animate={{
          x: [-180, 180, -180],
          opacity: darkMode ? [0.08, 0.18, 0.08] : [0.04, 0.1, 0.04],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className={`absolute
          -top-32
          left-1/2
          -translate-x-1/2
          w-96
          h-64
          blur-[100px]
          rounded-full
          pointer-events-none
          ${darkMode ? "bg-cyan-400" : "bg-cyan-300"}
        `}
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
            item.isAI ? (
              <Link key={item.name} to={item.path} className="relative group">
                <motion.span
                  animate={{
                    boxShadow: darkMode
                      ? [
                          "0 0 10px rgba(34,211,238,0.25)",
                          "0 0 22px rgba(167,139,250,0.45)",
                          "0 0 10px rgba(34,211,238,0.25)",
                        ]
                      : [
                          "0 0 8px rgba(34,211,238,0.18)",
                          "0 0 16px rgba(139,92,246,0.28)",
                          "0 0 8px rgba(34,211,238,0.18)",
                        ],
                  }}
                  transition={{ duration: 2.4, repeat: Infinity }}
                  whileHover={{ scale: 1.06 }}
                  className="
                    relative
                    flex
                    items-center
                    gap-2
                    rounded-full
                    px-4
                    py-2
                    text-[14px]
                    font-bold
                    text-white
                    bg-gradient-to-r
                    from-cyan-400
                    via-blue-500
                    to-violet-500
                    border
                    border-white/20
                  "
                >
                  <Bot size={16} />
                  {item.name}
                  <Sparkles size={12} className="text-yellow-200" />
                </motion.span>
              </Link>
            ) : item.isRoute ? (
              <Link
                key={item.name}
                to={item.path}
                className={`relative
                  font-semibold
                  text-[15px]
                  tracking-wide
                  py-2
                  transition-all
                  duration-300
                  group
                  ${
                    darkMode
                      ? "text-gray-300 hover:text-cyan-400"
                      : "text-slate-700 hover:text-cyan-600"
                  }
                `}
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
                className={`relative
                  font-semibold
                  text-[15px]
                  tracking-wide
                  py-2
                  transition-all
                  duration-300
                  group
                  ${
                    darkMode
                      ? "text-gray-300 hover:text-cyan-400"
                      : "text-slate-700 hover:text-cyan-600"
                  }
                `}
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

          {/* ================= LOGIN / USER BUTTON ================= */}

          {user ? (
            <div className="ml-2 flex items-center gap-2.5">
              <motion.span
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className={`relative flex items-center gap-2 rounded-full pl-2 pr-4 py-1.5 text-[14px] font-semibold border overflow-hidden ${
                  darkMode
                    ? "bg-white/5 border-cyan-400/20 text-gray-100"
                    : "bg-slate-100 border-slate-200 text-slate-700"
                }`}
                style={{
                  boxShadow: "0 0 16px rgba(34,211,238,0.15)",
                }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
                  animate={{ x: ["-120%", "220%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                <span className="relative flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 text-[12px] font-black text-white shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                  {user.name?.charAt(0)?.toUpperCase() || (
                    <UserCircle2 size={16} />
                  )}
                  <motion.span
                    className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0a0e1a]"
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                  />
                </span>
                <span className="relative">{user.name}</span>
              </motion.span>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 18px rgba(248,113,113,0.4)",
                }}
                whileTap={{ scale: 0.94 }}
                onClick={handleLogout}
                className={`group flex items-center gap-2 rounded-full px-4 py-2.5 text-[14px] font-bold border transition-colors ${
                  darkMode
                    ? "bg-white/5 border-white/10 text-gray-300 hover:border-red-400/40 hover:text-red-300"
                    : "bg-white border-slate-200 text-slate-700 hover:bg-red-50 hover:text-red-500"
                }`}
              >
                <motion.span
                  className="inline-flex"
                  whileHover={{ x: 2, rotate: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <LogOut size={16} />
                </motion.span>
                Logout
              </motion.button>
            </div>
          ) : (
            <Link to="/login">
              <motion.span
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 24px rgba(34,211,238,0.45)",
                }}
                whileTap={{ scale: 0.96 }}
                className="
                  relative
                  ml-2
                  flex
                  items-center
                  gap-2
                  rounded-full
                  px-5
                  py-2.5
                  text-[14px]
                  font-bold
                  text-white
                  bg-gradient-to-r
                  from-cyan-400
                  via-blue-500
                  to-violet-500
                  shadow-[0_0_18px_rgba(34,211,238,0.35)]
                  border
                  border-white/20
                  overflow-hidden
                "
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ["-120%", "220%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <LogIn size={16} />
                Login
              </motion.span>
            </Link>
          )}
        </div>

        {/* ================= MOBILE BUTTON ================= */}

        <motion.button
          whileTap={{ scale: 0.9 }}
          className={`md:hidden
            w-11
            h-11
            rounded-xl
            flex
            items-center
            justify-center
            transition-all
            ${
              darkMode
                ? "bg-white/5 border border-white/10 text-cyan-300 hover:bg-cyan-400/10"
                : "bg-slate-100 border border-slate-200 text-cyan-600 hover:bg-cyan-50"
            }
          `}
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
          className={`md:hidden
            relative
            px-6
            pb-6
            pt-2
            flex
            flex-col
            gap-2
            backdrop-blur-2xl
            border-t
            ${
              darkMode
                ? "bg-[#020817]/95 border-cyan-400/10"
                : "bg-white/95 border-slate-200"
            }
          `}
        >
          {navItems.map((item) =>
            item.isAI ? (
              <motion.div key={item.name} whileHover={{ x: 5 }}>
                <Link
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="
                    flex
                    items-center
                    justify-between
                    gap-2
                    rounded-xl
                    px-4
                    py-3
                    font-bold
                    text-white
                    bg-gradient-to-r
                    from-cyan-400
                    via-blue-500
                    to-violet-500
                    shadow-[0_0_18px_rgba(34,211,238,0.3)]
                  "
                >
                  <span className="flex items-center gap-2">
                    <Bot size={17} />
                    {item.name}
                  </span>
                  <span className="flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-[10px] tracking-wide">
                    <Sparkles size={11} />
                    NEW
                  </span>
                </Link>
              </motion.div>
            ) : item.isRoute ? (
              <motion.div
                key={item.name}
                whileHover={{
                  x: 5,
                }}
              >
                <Link
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`block
                    px-4
                    py-3
                    rounded-xl
                    font-semibold
                    transition-all
                    ${
                      darkMode
                        ? "text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5"
                        : "text-slate-700 hover:text-cyan-600 hover:bg-cyan-50"
                    }
                  `}
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
                className={`block
                  px-4
                  py-3
                  rounded-xl
                  font-semibold
                  transition-all
                  ${
                    darkMode
                      ? "text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5"
                      : "text-slate-700 hover:text-cyan-600 hover:bg-cyan-50"
                  }
                `}
              >
                {item.name}
              </motion.a>
            ),
          )}

          {/* ================= MOBILE LOGIN / USER ================= */}

          {user ? (
            <>
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className={`relative flex items-center justify-center gap-2.5 mt-1 rounded-xl px-4 py-3 font-semibold border overflow-hidden ${
                  darkMode
                    ? "bg-white/5 border-cyan-400/20 text-gray-100"
                    : "bg-slate-100 border-slate-200 text-slate-700"
                }`}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
                  animate={{ x: ["-120%", "220%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                <span className="relative flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 text-[12px] font-black text-white shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                  {user.name?.charAt(0)?.toUpperCase() || (
                    <UserCircle2 size={16} />
                  )}
                  <motion.span
                    className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0a0e1a]"
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                  />
                </span>
                <span className="relative">{user.name}</span>
              </motion.div>
              <motion.button
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleLogout}
                className={`group flex items-center justify-center gap-2 mt-1 rounded-xl px-4 py-3 font-bold border transition-colors ${
                  darkMode
                    ? "bg-white/5 border-white/10 text-gray-300 hover:border-red-400/40 hover:text-red-300"
                    : "bg-white border-slate-200 text-slate-700 hover:bg-red-50 hover:text-red-500"
                }`}
              >
                <motion.span
                  className="inline-flex"
                  whileHover={{ x: 2, rotate: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <LogOut size={17} />
                </motion.span>
                Logout
              </motion.button>
            </>
          ) : (
            <motion.div whileHover={{ x: 5 }}>
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  mt-1
                  rounded-xl
                  px-4
                  py-3
                  font-bold
                  text-white
                  bg-gradient-to-r
                  from-cyan-400
                  via-blue-500
                  to-violet-500
                  shadow-[0_0_18px_rgba(34,211,238,0.3)]
                "
              >
                <LogIn size={17} />
                Login
              </Link>
            </motion.div>
          )}
        </motion.div>
      )}
    </motion.nav>

    {/* ================= LOGOUT TOAST ================= */}

    <AnimatePresence>
      {showLogoutToast && (
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 rounded-2xl px-5 py-3.5 border border-emerald-400/30 bg-[#0a0e1a]/95 backdrop-blur-xl shadow-[0_10px_40px_rgba(16,185,129,0.25)]"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-400/15">
            <LogOut size={16} className="text-emerald-400" />
          </span>
          <span className="text-[14px] font-semibold text-gray-100">
            Logged out successfully
          </span>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}

export default Navbar;
