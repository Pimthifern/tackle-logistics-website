"use client";

import { motion } from "framer-motion";

const points = [
  { num: "01", title: "10+ Years Experience", desc: "A seasoned team with deep expertise in international and domestic logistics." },
  { num: "02", title: "End-to-End Service", desc: "From pickup to final delivery — we manage every step of the journey." },
  { num: "03", title: "Special Cargo Handling", desc: "DGR, temperature-controlled, oversized, and high-value cargo handled with precision." },
  { num: "04", title: "24/7 Domestic Transport", desc: "Round-the-clock truck operations with strategic hub coverage nationwide." },
  { num: "05", title: "Cross-Border Routes", desc: "Established lanes into Malaysia, Singapore, Vietnam, Laos, and Cambodia." },
  { num: "06", title: "Premium Customer Care", desc: "Dedicated support and transparent communication throughout every shipment." }
];

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

export default function WhyChooseSection() {
  return (
    <section className="bg-page-bg py-[86px] px-[48px]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-corp-blue font-display font-black tracking-widest uppercase text-xs mb-4">
            WHY TACKLE
          </p>
          <h2 className="font-display font-black tracking-tight" style={{ fontSize: "clamp(36px, 5vw, 72px)" }}>
            Built for cargo that matters.
          </h2>
        </div>

        {/* 2-Column Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12"
        >
          {points.map((point, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex gap-6"
            >
              <span className="font-display font-black text-5xl text-navy opacity-20 flex-shrink-0">
                {point.num}
              </span>
              <div>
                <h3 className="font-display font-bold text-xl mb-2">
                  {point.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
