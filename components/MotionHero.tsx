"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";

export default function MotionHero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const [activeMode, setActiveMode] = useState<keyof typeof t.raw>("modes")>("air");

  const modes = t.raw("modes") as any;
  const current = modes[activeMode];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0f172a]">

      {/* LAYER 1 — Full bleed background image with responsive scaling */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeMode + "-bg"}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.01 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={`/images/${activeMode}-hero.png`}
            alt={current.eyebrow}
            fill
            className="object-cover object-right"
            priority
            sizes="100vw"
            quality={90}
          />
        </motion.div>
      </AnimatePresence>

      {/* LAYER 2 — Gradient overlay for text readability */}
      <div
        className="absolute inset-0 z-[10]"
        style={{
          background: "linear-gradient(to top, rgba(6,47,102,0.90) 0%, rgba(6,47,102,0.50) 40%, rgba(6,47,102,0.20) 60%, transparent 80%)"
        }}
      />

      {/* LAYER 3 — Dot grid */}
      <div
        className="absolute inset-0 z-[11] opacity-15 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "28px 28px"
        }}
      />

      {/* LAYER 4 — Route SVG */}
      <svg
        className="absolute inset-0 w-full h-full z-[12] pointer-events-none"
        viewBox="0 0 1700 900"
        preserveAspectRatio="none"
      >
        <motion.path
          key={activeMode}
          d={current.route}
          stroke="white"
          strokeOpacity="0.6"
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
      <div className="absolute top-0 left-0 right-0 z-[20] px-4 sm:px-8 md:px-12 py-5 sm:py-6 md:py-7 flex justify-between items-center">
        <div className="font-display font-black text-2xl sm:text-3xl tracking-widest text-white">
          {t("brand")}
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/"
            locale={locale === "en" ? "th" : "en"}
            className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-full border border-white/40 text-white font-black text-xs sm:text-sm tracking-wider backdrop-blur-[20px] bg-white/10 hover:bg-white/20 transition-all hover:-translate-y-0.5 whitespace-nowrap"
          >
            {locale === "en" ? "🇹🇭 ไทย" : "🇺🇸 EN"}
          </Link>
          <Link
            href="#quote"
            className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/40 text-white font-black text-xs sm:text-sm tracking-wider backdrop-blur-[20px] bg-white/10 hover:bg-white/20 transition-all hover:-translate-y-0.5 whitespace-nowrap"
          >
            {t("requestQuote")}
          </Link>
        </div>
      </div>

      {/* LAYER 6 — Mode Tabs */}
      <div className="absolute top-[70px] sm:top-[80px] md:top-[88px] left-4 sm:left-8 md:left-12 z-[20]">
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
                {mode === "air" && "✈ " + (locale === "en" ? "AIR" : "อากาศ")}
                {mode === "sea" && "⚓ " + (locale === "en" ? "SEA" : "เรือ")}
                {mode === "land" && "▰ " + (locale === "en" ? "LAND" : "บก")}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* LAYER 7 — Copy block (bottom left) */}
      <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-4 sm:left-8 md:left-12 right-4 sm:right-8 md:right-12 z-[20] max-w-full sm:max-w-[640px]">
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
                fontSize: "clamp(28px, 5vw, 64px)",
                whiteSpace: "pre-line"
              }}
            >
              {current.title}
            </h1>

            {/* Subtitle */}
            <p className="text-white/90 text-base sm:text-lg font-medium leading-relaxed max-w-full sm:max-w-[520px]">
              {current.subtitle}
            </p>

            {/* Cue */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 rounded-full border border-white/40 backdrop-blur-[16px] bg-white/10 flex items-center justify-center">
                <span className="text-white text-sm sm:text-base">{current.icon}</span>
              </div>
              <p className="text-white/80 font-display font-black tracking-widest uppercase text-[10px] sm:text-xs">
                {current.cue}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  );
}
