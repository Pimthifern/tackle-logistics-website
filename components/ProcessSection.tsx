"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ProcessSection() {
  const t = useTranslations("process");

  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <p className="text-corp-blue font-display font-black tracking-widest uppercase text-xs mb-4">
            {t("label")}
          </p>
          <h2 className="font-display font-black tracking-tight" style={{ fontSize: "clamp(28px, 5vw, 56px)" }}>
            {t("title")}
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Desktop: Horizontal layout */}
          <div className="hidden md:block">
            {/* Animated Connector Line */}
            <motion.svg
              className="absolute top-12 left-0 w-full"
              height="4"
              viewBox="0 0 1000 4"
              preserveAspectRatio="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <motion.path
                d="M 0 2 L 1000 2"
                stroke="#D8E8F4"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="8 8"
                fill="none"
              />
            </motion.svg>

            {/* Steps Grid */}
            <div className="grid grid-cols-6 gap-4 relative z-10">
              {t.raw("steps").map((step: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-24 h-24 rounded-full bg-navy flex items-center justify-center mb-4">
                    <span className="font-display font-black text-white text-2xl">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile: Vertical layout */}
          <div className="md:hidden space-y-8">
            {t.raw("steps").map((step: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-6"
              >
                <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-black text-white text-xl">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
