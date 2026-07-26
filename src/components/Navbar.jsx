import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <nav className="w-full bg-slate-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        <a
          href="#top"
          className="text-2xl font-bold text-cyan-400"
        >
          CodeCareer AI
        </a>


        <ul className="flex gap-8 text-lg">
<button
  onClick={toggleTheme}
  className="ml-6 p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition"
>
  {darkMode ? (
    <Sun size={22} className="text-yellow-400" />
  ) : (
    <Moon size={22} className="text-cyan-400" />
  )}
</button>
          <li>
            <a
              href="#top"
              className="hover:text-cyan-400 transition"
            >
              Home
            </a>
          </li>


          <li>
            <a
              href="#languages"
              className="hover:text-cyan-400 transition"
            >
              Languages
            </a>
          </li>


          <li>
            <a
              href="#careers"
              className="hover:text-cyan-400 transition"
            >
              Career Paths
            </a>
          </li>


          <li>
            <a
              href="#salary"
              className="hover:text-cyan-400 transition"
            >
              Salary
            </a>
          </li>


          <li>
            <a
              href="#salary"
              className="hover:text-cyan-400 transition"
            >
              Compare
            </a>
          </li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;