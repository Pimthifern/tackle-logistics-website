"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function CoverageSection() {
  const t = useTranslations("coverage");

  return (
    <section className="bg-navy py-16 sm:py-20 px-4 sm:px-8 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <p className="font-display font-black tracking-widest uppercase text-xs text-white/50 mb-4">
            {t("label")}
          </p>
          <h2 className="font-display font-black tracking-tight" style={{ fontSize: "clamp(28px, 5vw, 56px)" }}>
            {t("title")}
          </h2>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
          {/* Hub Locations */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="font-display font-bold text-xl mb-6">{t("hubs.title")}</h3>
            <div className="space-y-4">
              {t.raw("hubs.items").map((hub: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-3"
                >
                  <span className="text-sky text-2xl">●</span>
                  <span className="text-lg">{hub}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Cross-Border Countries */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="font-display font-bold text-xl mb-6">{t("countries.title")}</h3>
            <div className="space-y-4">
              {t.raw("countries.items").map((country: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-3"
                >
                  <span className="text-corp-blue text-xl">→</span>
                  <span className="text-lg">{country}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Decorative Route Line */}
        <motion.svg
          className="w-full h-24 mt-16"
          viewBox="0 0 800 100"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.path
            d="M 50 50 Q 200 20, 400 50 T 750 50"
            stroke="#D8E8F4"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="10 10"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </motion.svg>
      </div>
    </section>
  );
}
