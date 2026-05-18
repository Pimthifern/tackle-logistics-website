"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ServicesSection() {
  const t = useTranslations("services");

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
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <p className="text-corp-blue font-display font-black tracking-widest uppercase text-xs mb-4">
            {t("label")}
          </p>
          <h2 className="font-display font-black tracking-tight mb-4" style={{ fontSize: "clamp(28px, 5vw, 56px)" }}>
            {t("title")}
          </h2>
          <p className="text-muted text-base sm:text-lg">
            {t("subtitle")}
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {t.raw("items").map((service: any, index: number) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white border border-sky rounded-2xl sm:rounded-[32px] p-5 sm:p-6 md:p-[30px] shadow-[0_16px_45px_rgba(15,45,80,0.06)]"
            >
              <div className="text-3xl mb-4">{["✈", "🚢", "🗺", "📋", "🚛", "📦"][index]}</div>
              <h3 className="font-display font-bold text-2xl tracking-tight mb-3">
                {service.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
