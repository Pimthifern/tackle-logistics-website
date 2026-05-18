"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroModes = {
  air: {
    eyebrow: "AIR FREIGHT",
    title: "Critical cargo.\nAirborne with confidence.",
    subtitle: "Fast import/export solutions with temperature-controlled handling and end-to-end care.",
    cue: "AIR FREIGHT • IMPORT / EXPORT • DGR • MEDICAL CARGO • TEMPERATURE CONTROLLED",
    icon: "❄",
    image: "/images/air-hero.png",
    route: "M 80 560 C 360 360, 780 470, 1130 250 S 1450 120, 1660 260"
  },
  sea: {
    eyebrow: "SEA FREIGHT",
    title: "Volume cargo.\nAcross oceans with confidence.",
    subtitle: "FCL and LCL import-export solutions with reliable ocean freight and end-to-end care.",
    cue: "SEA FREIGHT • FCL / LCL • IMPORT / EXPORT • MACHINERY CARGO • BULK CARGO",
    icon: "⚓",
    image: "/images/sea-hero.png",
    route: "M 40 590 C 340 590, 520 500, 760 535 S 1190 650, 1640 420"
  },
  land: {
    eyebrow: "LAND TRANSPORT",
    title: "Domestic cargo.\nOn the road with confidence.",
    subtitle: "24/7 domestic transportation with strategic hubs and end-to-end delivery care.",
    cue: "LAND TRANSPORT • DOMESTIC 24/7 • 4W / 6W / 10W • HAULAGE • HIAB TRUCK",
    icon: "⌁",
    image: "/images/land-hero.png",
    route: "M 30 650 C 320 520, 630 610, 875 470 S 1290 260, 1650 350"
  }
};

export default function MotionHero() {
  const [activeMode, setActiveMode] = useState<keyof typeof heroModes>("air");
  const current = heroModes[activeMode];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0f172a]">

      {/* LAYER 1 — Full bleed background image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeMode + "-bg"}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${current.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center right",
            backgroundRepeat: "no-repeat"
          }}
        />
      </AnimatePresence>

      {/* LAYER 2 — Gradient overlay for text readability */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: "linear-gradient(to top, rgba(6,47,102,0.85) 0%, rgba(6,47,102,0.35) 45%, transparent 70%)"
        }}
      />

      {/* LAYER 3 — Dot grid */}
      <div
        className="absolute inset-0 z-[2] opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "28px 28px"
        }}
      />

      {/* LAYER 4 — Route SVG */}
      <svg
        className="absolute inset-0 w-full h-full z-[3] pointer-events-none"
        viewBox="0 0 1700 900"
        preserveAspectRatio="none"
      >
        <motion.path
          key={activeMode}
          d={current.route}
          stroke="white"
          strokeOpacity="0.5"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="8 6"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
      </svg>

      {/* LAYER 5 — Topbar */}
      <div className="absolute top-0 left-0 right-0 z-[10] px-4 sm:px-8 md:px-12 py-5 sm:py-6 md:py-7 flex justify-between items-center">
        <div className="font-display font-black text-2xl sm:text-3xl tracking-widest text-white">
          TACKLE
        </div>
        <button className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/40 text-white font-black text-xs sm:text-sm tracking-wider backdrop-blur-[20px] bg-white/10 hover:bg-white/20 transition-all hover:-translate-y-0.5">
          Request Quote →
        </button>
      </div>

      {/* LAYER 6 — Mode Tabs */}
      <div className="absolute top-[70px] sm:top-[80px] md:top-[88px] left-4 sm:left-8 md:left-12 z-[10]">
        <div className="inline-flex p-1.5 rounded-full border border-white/30 backdrop-blur-[22px] bg-white/10 gap-1">
          {(["air", "sea", "land"] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setActiveMode(mode)}
              className="relative px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full font-display font-black tracking-wider text-xs sm:text-sm transition-colors duration-200"
            >
              {activeMode === mode && (
                <motion.div
                  layoutId="active-tab-pill"
                  className="absolute inset-0 bg-white rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className={`relative z-10 ${activeMode === mode ? "text-navy" : "text-white"}`}>
                {mode === "air" && "✈ AIR"}
                {mode === "sea" && "⚓ SEA"}
                {mode === "land" && "▰ LAND"}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* LAYER 7 — Copy block (bottom left) */}
      <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-4 sm:left-8 md:left-12 right-4 sm:right-8 md:right-12 z-[10] max-w-full sm:max-w-[640px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMode}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4 sm:space-y-5"
          >
            {/* Eyebrow */}
            <div className="inline-flex px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/40 backdrop-blur-[16px] bg-white/10">
              <span className="font-display font-black tracking-widest text-[10px] sm:text-xs uppercase text-white">
                {current.eyebrow}
              </span>
            </div>

            {/* H1 */}
            <h1
              className="font-display font-black text-white leading-[0.95] tracking-tight"
              style={{
                fontSize: "clamp(32px, 5vw, 64px)",
                whiteSpace: "pre-line"
              }}
            >
              {current.title}
            </h1>

            {/* Subtitle */}
            <p className="text-white/80 text-base sm:text-lg font-medium leading-relaxed max-w-full sm:max-w-[520px]">
              {current.subtitle}
            </p>

            {/* Cue */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 rounded-full border border-white/40 backdrop-blur-[16px] bg-white/10 flex items-center justify-center">
                <span className="text-white text-sm sm:text-base">{current.icon}</span>
              </div>
              <p className="text-white/70 font-display font-black tracking-widest uppercase text-[10px] sm:text-xs">
                {current.cue}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  );
}
