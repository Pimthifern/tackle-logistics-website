"use client";

import { motion } from "framer-motion";

const steps = [
  { num: 1, title: "Inquiry", desc: "Tell us your cargo details and requirements." },
  { num: 2, title: "Cargo Review", desc: "We assess your shipment and recommend the best solution." },
  { num: 3, title: "Quotation", desc: "Receive a clear, transparent quote with no hidden fees." },
  { num: 4, title: "Booking", desc: "Confirm and we handle all arrangements end-to-end." },
  { num: 5, title: "Transport", desc: "Your cargo moves — tracked and cared for throughout." },
  { num: 6, title: "Delivery Confirmation", desc: "Final delivery with documentation and confirmation." }
];

export default function ProcessSection() {
  return (
    <section className="bg-white py-[86px] px-[48px]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-corp-blue font-display font-black tracking-widest uppercase text-xs mb-4">
            HOW IT WORKS
          </p>
          <h2 className="font-display font-black tracking-tight" style={{ fontSize: "clamp(36px, 5vw, 72px)" }}>
            Simple process. Reliable results.
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
              {steps.map((step, index) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-24 h-24 rounded-full bg-navy flex items-center justify-center mb-4">
                    <span className="font-display font-black text-white text-2xl">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile: Vertical layout */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-6"
              >
                <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-black text-white text-xl">
                    {step.num}
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {step.desc}
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
