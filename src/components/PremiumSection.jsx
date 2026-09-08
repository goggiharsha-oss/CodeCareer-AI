import { motion } from "framer-motion";
import { Crown, Sparkles } from "lucide-react";

/**
 * PremiumSection
 * A visual "premium" frame for a detail section — fully visible and
 * interactive content, dressed up with a glowing gradient border,
 * shimmer sweep, ambient light blobs, corner accents, a premium
 * badge, and a smooth entrance animation. No locking, no blur, no
 * paywall — purely a richer, more premium-feeling presentation.
 *
 * Usage:
 *   <PremiumSection title="Salary Insights" icon="💰">
 *     ...original section JSX...
 *   </PremiumSection>
 */
function PremiumSection({ title = "Premium", icon = "✨", children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative mt-10 rounded-[28px] p-[1.5px] overflow-hidden"
    >
      {/* Slowly rotating gradient border */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -inset-[65%] opacity-80 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0%, rgba(245,158,11,1) 8%, rgba(251,191,36,0.4) 16%, transparent 26%, transparent 48%, rgba(168,85,247,0.9) 60%, rgba(216,180,254,0.35) 68%, transparent 78%)",
        }}
      />

      {/* Static soft ambient glow beneath the whole card (outer bloom) */}
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[36px] bg-gradient-to-br from-amber-500/10 via-transparent to-purple-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Inner surface (sits on top of the rotating border, leaving a thin glowing edge) */}
      <div className="relative rounded-[27px] bg-slate-950/95 overflow-hidden">
        {/* Faint corner accents */}
        <div className="pointer-events-none absolute top-0 left-0 h-16 w-16 rounded-tl-[27px] border-t-2 border-l-2 border-amber-400/25" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-16 w-16 rounded-br-[27px] border-b-2 border-r-2 border-purple-400/25" />

        {/* Subtle grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Ambient glow blobs */}
        <motion.div
          animate={{ opacity: [0.25, 0.55, 0.25], scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.45, 0.2], scale: [1.15, 1, 1.15] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-purple-500/10 blur-3xl"
        />

        {/* Diagonal shimmer sweep on hover */}
        <motion.div
          initial={{ x: "-120%" }}
          whileHover={{ x: "220%" }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
        />

        {/* Premium header bar */}
        <div className="relative flex flex-wrap items-center justify-between gap-3 px-6 pt-6 pb-1">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400/20 to-purple-400/10 border border-white/10 text-lg shadow-inner">
              {icon}
            </span>
            <span className="bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-base font-bold text-transparent">
              {title}
            </span>
          </div>

          <motion.span
            animate={{ boxShadow: ["0 0 10px rgba(245,158,11,0.15)", "0 0 22px rgba(245,158,11,0.35)", "0 0 10px rgba(245,158,11,0.15)"] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-400/15 via-orange-500/15 to-amber-400/15 border border-amber-400/30 px-3 py-1 text-[11px] font-bold tracking-wider text-amber-300"
          >
            <Crown className="h-3 w-3" />
            PREMIUM
            <Sparkles className="h-3 w-3" />
          </motion.span>
        </div>

        <div className="relative mx-6 mt-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Real, fully visible & interactive content */}
        <div className="relative">{children}</div>
      </div>
    </motion.div>
  );
}

export default PremiumSection;
