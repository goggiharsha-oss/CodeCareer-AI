import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, Sparkles } from "lucide-react";
import {
  PlusIcon,
  LayoutTemplateIcon,
  FileTextIcon,
  WalletIcon,
  SettingsIcon,
  MessageQuestionIcon,
  MailIcon,
  ArrowUpRightIcon,
} from "./icons/CustomIcons";

// ================= FAQ DATA =================

const CATEGORIES = [
  { id: "all", label: "All Questions", icon: Sparkles },
  { id: "builder", label: "Portfolio Builder", icon: SettingsIcon },
  { id: "templates", label: "Templates & Design", icon: LayoutTemplateIcon },
  { id: "resume", label: "Resume", icon: FileTextIcon },
  { id: "billing", label: "Account & Billing", icon: WalletIcon },
];

const FAQS = [
  {
    id: "f1",
    category: "builder",
    question: "Is Portfolio Builder free to use?",
    answer:
      "Yes. You can create, customize and publish your portfolio without any coding experience — completely free, with no hidden charges.",
  },
  {
    id: "f2",
    category: "builder",
    question: "Do I need coding knowledge to build my portfolio?",
    answer:
      "Not at all. Just fill out the guided form with your details, projects and skills, and the builder generates a fully designed portfolio for you automatically.",
  },
  {
    id: "f3",
    category: "builder",
    question: "Can I edit my portfolio after creating it?",
    answer:
      "Absolutely. You can come back anytime and update your information, swap sections, or refresh your projects — changes reflect instantly in the preview.",
  },
  {
    id: "f4",
    category: "templates",
    question: "How many templates can I choose from?",
    answer:
      "There are multiple role-based templates — Frontend, Full Stack, AI/ML, Cyber Security, Cloud and Mobile — each with its own color theme and layout style.",
  },
  {
    id: "f5",
    category: "templates",
    question: "Can I change the template after starting?",
    answer:
      "Yes. You can switch templates at any point and your entered data carries over, so you don't have to re-type anything.",
  },
  {
    id: "f6",
    category: "templates",
    question: "Will my portfolio look good on mobile devices?",
    answer:
      "Every template is fully responsive by design, so your portfolio automatically adapts and looks polished on phones, tablets and desktops.",
  },
  {
    id: "f7",
    category: "resume",
    question: "Can I upload my resume to my portfolio?",
    answer:
      "Yes. You can upload your resume file and showcase it directly inside your portfolio, along with a downloadable link for recruiters.",
  },
  {
    id: "f8",
    category: "resume",
    question: "Can I add my GitHub projects and live links?",
    answer:
      "Yes. Each project card supports a GitHub repository link and a live demo link, so visitors can explore your work in one click.",
  },
  {
    id: "f9",
    category: "resume",
    question: "Does the resume update automatically with my portfolio?",
    answer:
      "Your resume upload and portfolio content are linked to the same profile, so updating your details keeps everything in sync.",
  },
  {
    id: "f10",
    category: "billing",
    question: "Do I need an account to save my portfolio?",
    answer:
      "You can build and preview instantly without signing up. Creating a free account lets you save your progress and access it later from any device.",
  },
  {
    id: "f11",
    category: "billing",
    question: "Is my personal data safe?",
    answer:
      "Your information is stored securely and is never shared with third parties. You stay in full control of what appears on your public portfolio.",
  },
  {
    id: "f12",
    category: "billing",
    question: "Are there any premium plans available?",
    answer:
      "Core portfolio building is free for everyone. Optional premium features like custom domains and advanced analytics are on our roadmap.",
  },
];

// ================= ACCORDION ITEM =================

function FAQItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`
        group relative overflow-hidden rounded-[24px] border
        bg-white/[0.035] backdrop-blur-2xl transition-colors duration-500
        ${
          isOpen
            ? "border-cyan-400/40 bg-white/[0.06] shadow-[0_15px_60px_rgba(34,211,238,0.12)]"
            : "border-white/10 hover:border-cyan-400/25 hover:bg-white/[0.05]"
        }
      `}
    >
      {/* animated gradient sheen sweep on hover */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(115deg, transparent 20%, rgba(34,211,238,0.06) 45%, transparent 70%)",
        }}
        animate={{ backgroundPositionX: ["-200%", "200%"] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
      />

      {/* glowing left accent when open */}
      <AnimatePresence>
        {isOpen && (
          <motion.span
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 top-0 h-full w-[3px] origin-top bg-gradient-to-b from-cyan-400 via-cyan-400/70 to-transparent"
          />
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={onToggle}
        className="relative z-10 flex w-full items-center justify-between gap-5 px-6 py-6 text-left md:px-8 md:py-7"
      >
        <div className="flex items-center gap-4">
          <motion.span
            animate={{
              scale: isOpen ? 1.08 : 1,
              borderColor: isOpen
                ? "rgba(34,211,238,0.6)"
                : "rgba(34,211,238,0.2)",
            }}
            transition={{ duration: 0.3 }}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-cyan-400/10 text-sm font-bold text-cyan-400"
          >
            {String(index + 1).padStart(2, "0")}
          </motion.span>

          <h3 className="text-base font-bold text-white md:text-lg">
            {item.question}
          </h3>
        </div>

        <motion.span
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className={`
            flex h-9 w-9 shrink-0 items-center justify-center rounded-full border
            ${
              isOpen
                ? "border-cyan-400/60 bg-cyan-400/20 text-cyan-300"
                : "border-white/15 text-cyan-400"
            }
          `}
        >
          <PlusIcon size={18} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="relative z-10 overflow-hidden"
          >
            <div className="border-t border-white/10 px-6 pb-6 pt-5 md:px-8 md:pb-7 md:pl-[88px]">
              <motion.p
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.08 }}
                className="max-w-4xl leading-7 text-gray-400"
              >
                {item.answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ================= MAIN SECTION =================

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState("f1");

  const filtered = useMemo(() => {
    return FAQS.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;

      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <section
      id="faq"
      className="relative mx-auto max-w-6xl overflow-hidden px-6 py-28"
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <motion.div
        animate={{ x: [0, 100, 0], y: [0, -60, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-40 -top-32 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[130px]"
      />

      <motion.div
        animate={{ x: [0, -80, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-purple-600/10 blur-[130px]"
      />

      {/* floating question-mark particles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="pointer-events-none absolute text-cyan-400/10"
          style={{
            left: `${10 + i * 15}%`,
            top: `${(i % 3) * 30 + 5}%`,
            fontSize: 28 + (i % 3) * 10,
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        >
          ?
        </motion.span>
      ))}

      {/* ================= HEADING ================= */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-1.5 text-sm font-semibold tracking-widest text-cyan-400"
        >
          <MessageQuestionIcon size={16} />
          FAQ
        </motion.span>

        <h2 className="mt-5 text-4xl font-black md:text-5xl">
          Frequently Asked
          <span className="text-cyan-400"> Questions</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
          Everything you need to know about creating your professional
          portfolio.
        </p>
      </motion.div>

      {/* ================= SEARCH ================= */}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-10 mx-auto mt-10 max-w-xl"
      >
        <Search
          size={18}
          className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-cyan-400/70"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search a question..."
          className="
            w-full rounded-2xl border border-white/10 bg-white/[0.04] py-4 pl-12 pr-5
            text-white placeholder-gray-500 backdrop-blur-xl transition
            focus:border-cyan-400/50 focus:bg-white/[0.06] focus:outline-none focus:ring-4 focus:ring-cyan-400/10
          "
        />
      </motion.div>

      {/* ================= CATEGORY TABS ================= */}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative z-10 mt-8 flex flex-wrap justify-center gap-3"
      >
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          const active = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`
                relative flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold
                transition-colors duration-300
                ${
                  active
                    ? "border-transparent text-white"
                    : "border-white/10 text-gray-400 hover:border-cyan-400/30 hover:text-cyan-300"
                }
              `}
            >
              {active && (
                <motion.span
                  layoutId="faq-tab-pill"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
                />
              )}
              <Icon size={15} className="relative z-10" />
              <span className="relative z-10">{cat.label}</span>
            </button>
          );
        })}
      </motion.div>

      {/* ================= FAQ LIST ================= */}

      <div className="relative z-10 mt-14 space-y-5">
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            filtered.map((item, index) => (
              <FAQItem
                key={item.id}
                item={item}
                index={index}
                isOpen={openId === item.id}
                onToggle={() =>
                  setOpenId((prev) => (prev === item.id ? null : item.id))
                }
              />
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-[24px] border border-white/10 bg-white/[0.03] px-8 py-14 text-center text-gray-400"
            >
              No questions match “{query}”. Try a different search.
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ================= STILL HAVE QUESTIONS CTA ================= */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mt-16 overflow-hidden rounded-[28px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-purple-600/10 p-10 text-center backdrop-blur-2xl md:p-14"
      >
        <motion.div
          animate={{ x: ["-20%", "20%", "-20%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/15 blur-[100px]"
        />

        <div className="relative z-10">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10"
          >
            <MailIcon size={24} className="text-cyan-400" />
          </motion.div>

          <h3 className="text-2xl font-black md:text-3xl">
            Still have questions?
          </h3>

          <p className="mx-auto mt-3 max-w-md text-gray-400">
            Can't find the answer you're looking for? Our team is happy to
            help you out.
          </p>

          <motion.a
            href="mailto:support@codecareerai.com"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3.5 font-bold text-white shadow-xl transition hover:shadow-2xl"
          >
            Contact Support
            <ArrowUpRightIcon size={18} />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
