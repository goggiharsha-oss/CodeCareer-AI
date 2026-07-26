import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className="w-full bg-slate-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
      <a
  href="#top"
  className="flex items-center gap-3 text-2xl font-bold text-cyan-400"
>

  CodeCareer AI
</a>


        {/* Menu */}
        <ul className="flex items-center gap-8 text-lg">

          <li>
            <a
              href="#top"
              className="relative hover:text-cyan-400 transition after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-cyan-400 hover:after:w-full after:transition-all"
            >
              Home
            </a>
          </li>


          <li>
            <a
              href="#languages"
              className="relative hover:text-cyan-400 transition after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-cyan-400 hover:after:w-full after:transition-all"
            >
              Languages
            </a>
          </li>


          <li>
            <a
              href="#careers"
              className="relative hover:text-cyan-400 transition after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-cyan-400 hover:after:w-full after:transition-all"
            >
              Career Paths
            </a>
          </li>


          <li>
            <a
              href="#salary"
              className="relative hover:text-cyan-400 transition after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-cyan-400 hover:after:w-full after:transition-all"
            >
              Salary
            </a>
          </li>


          <li>
            <a
              href="#salary"
              className="relative hover:text-cyan-400 transition after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-cyan-400 hover:after:w-full after:transition-all"
            >
              Compare
            </a>
          </li>


          {/* Theme Button */}
          <li>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition hover:scale-110"
            >
              {darkMode ? (
                <Sun
                  size={22}
                  className="text-yellow-400"
                />
              ) : (
                <Moon
                  size={22}
                  className="text-cyan-400"
                />
              )}
            </button>
          </li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;