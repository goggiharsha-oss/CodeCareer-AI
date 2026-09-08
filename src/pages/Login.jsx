import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  ArrowRight,
  Sparkles,
  Code2,
  Globe,
  Terminal,
  ShieldCheck,
  Loader2,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { darkMode } = useTheme();
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const [mode, setMode] = useState("login"); // "login" | "signup"
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password || (mode === "signup" && !form.name)) {
      setError("Please fill in all fields to continue.");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setError("");
    setLoading(true);

    // Small delay just so the loading state is visible, then run real auth
    setTimeout(() => {
      const result =
        mode === "signup"
          ? signup(form.name, form.email, form.password)
          : login(form.email, form.password);

      setLoading(false);

      if (!result.success) {
        setError(result.error);
        return;
      }

      setSuccess(true);
      setTimeout(() => navigate("/"), 1400);
    }, 900);
  };

  return (
    <div
      className={`relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4 py-16 transition-colors duration-500 ${
        darkMode ? "bg-[#020617]" : "bg-slate-50"
      }`}
    >
      {/* ================= BACKGROUND FX ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [-120, 120, -120],
            y: [-60, 40, -60],
            opacity: darkMode ? [0.15, 0.3, 0.15] : [0.08, 0.18, 0.08],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full blur-[120px] ${
            darkMode ? "bg-cyan-400" : "bg-cyan-300"
          }`}
        />
        <motion.div
          animate={{
            x: [100, -100, 100],
            y: [50, -30, 50],
            opacity: darkMode ? [0.12, 0.25, 0.12] : [0.06, 0.15, 0.06],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute -bottom-32 -right-20 w-[30rem] h-[30rem] rounded-full blur-[130px] ${
            darkMode ? "bg-violet-500" : "bg-blue-300"
          }`}
        />

        {/* subtle grid */}
        <div
          className={`absolute inset-0 opacity-[0.04] ${
            darkMode ? "bg-white" : "bg-slate-900"
          }`}
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* floating particles */}
        {[...Array(10)].map((_, i) => (
          <motion.span
            key={i}
            className={`absolute rounded-full ${
              darkMode ? "bg-cyan-300/40" : "bg-cyan-500/30"
            }`}
            style={{
              width: 4 + (i % 3) * 2,
              height: 4 + (i % 3) * 2,
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + (i % 5),
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* ================= CARD ================= */}

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-md"
      >
        {/* glow ring behind card */}
        <div
          className={`absolute -inset-[1px] rounded-3xl blur-sm opacity-70 ${
            darkMode
              ? "bg-gradient-to-br from-cyan-400/40 via-blue-500/30 to-violet-500/40"
              : "bg-gradient-to-br from-cyan-300/50 via-blue-300/40 to-violet-300/50"
          }`}
        />

        <div
          className={`relative rounded-3xl border backdrop-blur-2xl px-8 py-10 sm:px-10 sm:py-12 transition-colors duration-500 ${
            darkMode
              ? "bg-[#020817]/90 border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.55)]"
              : "bg-white/90 border-slate-200 shadow-[0_20px_80px_rgba(15,23,42,0.15)]"
          }`}
        >
          {/* back button */}
          <motion.button
            type="button"
            onClick={() => navigate(-1)}
            whileHover={{ x: -3 }}
            whileTap={{ scale: 0.94 }}
            className={`absolute top-5 left-5 flex items-center justify-center w-9 h-9 rounded-full border transition-colors ${
              darkMode
                ? "bg-white/5 border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-400/30"
                : "bg-slate-50 border-slate-200 text-slate-600 hover:text-cyan-600 hover:border-cyan-300"
            }`}
            aria-label="Go back"
          >
            <ArrowLeft size={18} />
          </motion.button>

          {/* logo */}
          <Link
            to="/"
            className="flex items-center justify-center gap-3 mb-8 group w-fit mx-auto"
          >
            <motion.div
              whileHover={{ rotate: 8, scale: 1.08 }}
              transition={{ duration: 0.25 }}
              className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_25px_rgba(34,211,238,0.45)] border border-cyan-300/30"
            >
              <Code2 className="text-white" size={24} strokeWidth={2.5} />
            </motion.div>
            <span
              className={`text-xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent`}
            >
              CodeCareer AI
            </span>
          </Link>

          <AnimatePresence mode="wait">
            {success ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 14 }}
                  className="mb-4 p-4 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 shadow-[0_0_35px_rgba(52,211,153,0.5)]"
                >
                  <CheckCircle2 size={36} className="text-white" />
                </motion.div>
                <h2
                  className={`text-2xl font-bold mb-2 ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  {mode === "login" ? "Welcome back!" : "Account created!"}
                </h2>
                <p className={darkMode ? "text-gray-400" : "text-slate-500"}>
                  Redirecting you to the dashboard...
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* heading */}
                <div className="text-center mb-8">
                  <h1
                    className={`text-3xl font-extrabold tracking-tight mb-2 ${
                      darkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {mode === "login" ? "Welcome back" : "Create your account"}
                  </h1>
                  <p
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-slate-500"
                    }`}
                  >
                    {mode === "login"
                      ? "Sign in to continue your career journey"
                      : "Start building your future with CodeCareer AI"}
                  </p>
                </div>

                {/* mode toggle */}
                <div
                  className={`relative flex mb-8 rounded-full p-1 border ${
                    darkMode
                      ? "bg-white/5 border-white/10"
                      : "bg-slate-100 border-slate-200"
                  }`}
                >
                  {["login", "signup"].map((m) => (
                    <button
                      key={m}
                      onClick={() => {
                        setMode(m);
                        setError("");
                      }}
                      className={`relative flex-1 py-2.5 text-sm font-semibold rounded-full z-10 transition-colors duration-300 ${
                        mode === m
                          ? "text-white"
                          : darkMode
                          ? "text-gray-400"
                          : "text-slate-500"
                      }`}
                    >
                      {mode === m && (
                        <motion.span
                          layoutId="mode-pill"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                          className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 shadow-[0_0_18px_rgba(34,211,238,0.4)]"
                        />
                      )}
                      {m === "login" ? "Log In" : "Sign Up"}
                    </button>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <AnimatePresence>
                    {mode === "signup" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <FieldWrap darkMode={darkMode}>
                          <User
                            size={18}
                            className={
                              darkMode ? "text-cyan-400" : "text-cyan-600"
                            }
                          />
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Full name"
                            className={`w-full bg-transparent outline-none text-sm ${
                              darkMode
                                ? "text-white placeholder:text-gray-500"
                                : "text-slate-900 placeholder:text-slate-400"
                            }`}
                          />
                        </FieldWrap>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <FieldWrap darkMode={darkMode}>
                    <Mail
                      size={18}
                      className={darkMode ? "text-cyan-400" : "text-cyan-600"}
                    />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email address"
                      className={`w-full bg-transparent outline-none text-sm ${
                        darkMode
                          ? "text-white placeholder:text-gray-500"
                          : "text-slate-900 placeholder:text-slate-400"
                      }`}
                    />
                  </FieldWrap>

                  <FieldWrap darkMode={darkMode}>
                    <Lock
                      size={18}
                      className={darkMode ? "text-cyan-400" : "text-cyan-600"}
                    />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="Password"
                      className={`w-full bg-transparent outline-none text-sm ${
                        darkMode
                          ? "text-white placeholder:text-gray-500"
                          : "text-slate-900 placeholder:text-slate-400"
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      className={`shrink-0 ${
                        darkMode
                          ? "text-gray-500 hover:text-cyan-400"
                          : "text-slate-400 hover:text-cyan-600"
                      } transition-colors`}
                    >
                      {showPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </FieldWrap>

                  <AnimatePresence>
                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-xs font-medium text-rose-400 pl-1"
                      >
                        {error}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  {mode === "login" && (
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className={`text-xs font-semibold transition-colors ${
                          darkMode
                            ? "text-cyan-400 hover:text-cyan-300"
                            : "text-cyan-600 hover:text-cyan-700"
                        }`}
                      >
                        Forgot password?
                      </button>
                    </div>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    className="relative w-full flex items-center justify-center gap-2 rounded-xl py-3.5 font-bold text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 shadow-[0_10px_30px_rgba(34,211,238,0.35)] overflow-hidden disabled:opacity-80"
                  >
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                      animate={{ x: ["-120%", "220%"] }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    {loading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Please wait...
                      </>
                    ) : (
                      <>
                        {mode === "login" ? "Log In" : "Create Account"}
                        <ArrowRight size={18} />
                      </>
                    )}
                  </motion.button>
                </form>

                {/* divider */}
                <div className="flex items-center gap-3 my-7">
                  <span
                    className={`h-px flex-1 ${
                      darkMode ? "bg-white/10" : "bg-slate-200"
                    }`}
                  />
                  <span
                    className={`text-xs font-medium ${
                      darkMode ? "text-gray-500" : "text-slate-400"
                    }`}
                  >
                    or continue with
                  </span>
                  <span
                    className={`h-px flex-1 ${
                      darkMode ? "bg-white/10" : "bg-slate-200"
                    }`}
                  />
                </div>

                {/* social buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className={`flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold border transition-colors ${
                      darkMode
                        ? "bg-white/5 border-white/10 text-gray-200 hover:bg-white/10"
                        : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <Globe size={17} />
                    Google
                  </motion.button>
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className={`flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold border transition-colors ${
                      darkMode
                        ? "bg-white/5 border-white/10 text-gray-200 hover:bg-white/10"
                        : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <Terminal size={17} />
                    GitHub
                  </motion.button>
                </div>

                {/* switch mode */}
                <p
                  className={`text-center text-sm mt-8 ${
                    darkMode ? "text-gray-400" : "text-slate-500"
                  }`}
                >
                  {mode === "login" ? (
                    <>
                      Don&apos;t have an account?{" "}
                      <button
                        onClick={() => setMode("signup")}
                        className={`font-semibold ${
                          darkMode ? "text-cyan-400" : "text-cyan-600"
                        } hover:underline`}
                      >
                        Sign up free
                      </button>
                    </>
                  ) : (
                    <>
                      Already have an account?{" "}
                      <button
                        onClick={() => setMode("login")}
                        className={`font-semibold ${
                          darkMode ? "text-cyan-400" : "text-cyan-600"
                        } hover:underline`}
                      >
                        Log in
                      </button>
                    </>
                  )}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* trust badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className={`flex items-center justify-center gap-2 mt-6 text-xs ${
            darkMode ? "text-gray-500" : "text-slate-400"
          }`}
        >
          <ShieldCheck size={14} />
          Your data is encrypted and never shared
        </motion.div>
      </motion.div>
    </div>
  );
}

function FieldWrap({ children, darkMode }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-xl border px-4 py-3 transition-all duration-300 focus-within:border-cyan-400 focus-within:shadow-[0_0_0_3px_rgba(34,211,238,0.15)] ${
        darkMode
          ? "bg-white/5 border-white/10"
          : "bg-slate-50 border-slate-200"
      }`}
    >
      {children}
    </div>
  );
}

export default Login;
