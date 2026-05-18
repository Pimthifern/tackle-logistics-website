"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "✈",
    title: "Air Freight",
    desc: "Urgent, sensitive, DGR, medical and temperature-controlled cargo."
  },
  {
    icon: "🚢",
    title: "Sea Freight",
    desc: "FCL/LCL ocean freight for import, export, machinery and bulk cargo."
  },
  {
    icon: "🗺",
    title: "Cross Border",
    desc: "Door-to-door routes across Malaysia, Singapore, Vietnam, Laos and Cambodia."
  },
  {
    icon: "📋",
    title: "Customs Broker",
    desc: "Clearance and document support for import and export operations."
  },
  {
    icon: "🚛",
    title: "Land Transport",
    desc: "Domestic transportation 24/7 with strategic hubs and multiple truck types."
  },
  {
    icon: "📦",
    title: "Packing & Repacking",
    desc: "UN Box, IPPC wooden crate, lashing, chocking and dry ice support."
  }
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

export default function ServicesSection() {
  return (
    <section className="bg-white py-[86px] px-[48px]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-corp-blue font-display font-black tracking-widest uppercase text-xs mb-4">
            OUR SERVICES
          </p>
          <h2 className="font-display font-black tracking-tight mb-4" style={{ fontSize: "clamp(36px, 5vw, 72px)" }}>
            Everything your cargo needs.
          </h2>
          <p className="text-muted text-lg">
            Six core services. One reliable partner.
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white border border-sky rounded-[32px] p-[30px] shadow-[0_16px_45px_rgba(15,45,80,0.06)]"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="font-display font-bold text-2xl tracking-tight mb-3">
                {service.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
