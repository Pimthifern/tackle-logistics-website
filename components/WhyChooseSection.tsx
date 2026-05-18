"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function WhyChooseSection() {
  const t = useTranslations("whyChoose");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as any } }
  };

  return (
    <section className="bg-page-bg py-16 sm:py-20 px-4 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <p className="text-corp-blue font-display font-black tracking-widest uppercase text-xs mb-4">
            {t("label")}
          </p>
          <h2 className="font-display font-black tracking-tight" style={{ fontSize: "clamp(28px, 5vw, 56px)" }}>
            {t("title")}
          </h2>
        </div>

        {/* 2-Column Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 sm:gap-x-12 md:gap-x-16 gap-y-8 sm:gap-y-12"
        >
          {t.raw("items").map((point: any, index: number) => (
            <motion.div
              key={index}
              variants={item}
              className="flex gap-6"
            >
              <span className="font-display font-black text-5xl text-navy opacity-20 flex-shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display font-bold text-xl mb-2">
                  {point.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
