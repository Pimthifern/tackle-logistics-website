"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

interface FormData {
  companyName: string;
  contactPerson: string;
  phone: string;
  email: string;
  serviceType: string;
  origin: string;
  destination: string;
  cargoDetail: string;
  specialRequirement: string;
}

const serviceOptions = [
  "Air Freight",
  "Sea Freight",
  "Cross Border",
  "Customs Broker",
  "Land Transport",
  "Packing & Repacking"
];

export default function QuoteForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="bg-page-bg py-[86px] px-[48px]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[40px] shadow-[0_16px_45px_rgba(15,45,80,0.06)] p-[48px] text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
              className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-6"
            >
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>
            <h2 className="font-display font-black text-3xl mb-4">
              Thank you!
            </h2>
            <p className="text-muted text-lg">
              We'll be in touch within one business day.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-page-bg py-[86px] px-[48px]">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-corp-blue font-display font-black tracking-widest uppercase text-xs mb-4">
            GET A QUOTE
          </p>
          <h2 className="font-display font-black tracking-tight mb-4" style={{ fontSize: "clamp(36px, 5vw, 72px)" }}>
            Request a freight quote.
          </h2>
          <p className="text-muted text-lg">
            We'll get back to you within one business day.
          </p>
        </div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-[40px] shadow-[0_16px_45px_rgba(15,45,80,0.06)] p-[48px]"
        >
          {/* 2-Column Grid for Short Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Company Name */}
            <div>
              <label className="block font-display font-bold text-sm mb-2">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                {...register("companyName", { required: "This field is required." })}
                type="text"
                className="w-full px-4 py-3 rounded-2xl border-2 border-sky focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-all font-body"
                placeholder="Your company name"
              />
              {errors.companyName && (
                <p className="text-red-500 text-sm mt-1">{errors.companyName.message}</p>
              )}
            </div>

            {/* Contact Person */}
            <div>
              <label className="block font-display font-bold text-sm mb-2">
                Contact Person <span className="text-red-500">*</span>
              </label>
              <input
                {...register("contactPerson", { required: "This field is required." })}
                type="text"
                className="w-full px-4 py-3 rounded-2xl border-2 border-sky focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-all font-body"
                placeholder="Your name"
              />
              {errors.contactPerson && (
                <p className="text-red-500 text-sm mt-1">{errors.contactPerson.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block font-display font-bold text-sm mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                {...register("phone", { required: "This field is required." })}
                type="tel"
                className="w-full px-4 py-3 rounded-2xl border-2 border-sky focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-all font-body"
                placeholder="080-826-4865"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block font-display font-bold text-sm mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                {...register("email", {
                  required: "This field is required.",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address."
                  }
                })}
                type="email"
                className="w-full px-4 py-3 rounded-2xl border-2 border-sky focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-all font-body"
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Origin */}
            <div>
              <label className="block font-display font-bold text-sm mb-2">
                Origin <span className="text-red-500">*</span>
              </label>
              <input
                {...register("origin", { required: "This field is required." })}
                type="text"
                className="w-full px-4 py-3 rounded-2xl border-2 border-sky focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-all font-body"
                placeholder="Bangkok, Thailand"
              />
              {errors.origin && (
                <p className="text-red-500 text-sm mt-1">{errors.origin.message}</p>
              )}
            </div>

            {/* Destination */}
            <div>
              <label className="block font-display font-bold text-sm mb-2">
                Destination <span className="text-red-500">*</span>
              </label>
              <input
                {...register("destination", { required: "This field is required." })}
                type="text"
                className="w-full px-4 py-3 rounded-2xl border-2 border-sky focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-all font-body"
                placeholder="Singapore"
              />
              {errors.destination && (
                <p className="text-red-500 text-sm mt-1">{errors.destination.message}</p>
              )}
            </div>
          </div>

          {/* Service Type (Full Width) */}
          <div className="mb-6">
            <label className="block font-display font-bold text-sm mb-2">
              Service Type <span className="text-red-500">*</span>
            </label>
            <select
              {...register("serviceType", { required: "This field is required." })}
              className="w-full px-4 py-3 rounded-2xl border-2 border-sky focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-all font-body bg-white"
            >
              <option value="">Select a service</option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.serviceType && (
              <p className="text-red-500 text-sm mt-1">{errors.serviceType.message}</p>
            )}
          </div>

          {/* Cargo Detail (Full Width) */}
          <div className="mb-6">
            <label className="block font-display font-bold text-sm mb-2">
              Cargo Type / Detail <span className="text-red-500">*</span>
            </label>
            <textarea
              {...register("cargoDetail", { required: "This field is required." })}
              rows={4}
              className="w-full px-4 py-3 rounded-2xl border-2 border-sky focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-all font-body resize-none"
              placeholder="Describe your cargo (weight, dimensions, special handling requirements...)"
            />
            {errors.cargoDetail && (
              <p className="text-red-500 text-sm mt-1">{errors.cargoDetail.message}</p>
            )}
          </div>

          {/* Special Requirement (Optional, Full Width) */}
          <div className="mb-8">
            <label className="block font-display font-bold text-sm mb-2">
              Special Requirement
            </label>
            <textarea
              {...register("specialRequirement")}
              rows={3}
              className="w-full px-4 py-3 rounded-2xl border-2 border-sky focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-all font-body resize-none"
              placeholder="Any special requirements or notes (optional)"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileTap={{ scale: 0.98 }}
            className="w-full bg-navy text-white rounded-full font-display font-black text-base py-4 hover:bg-corp-blue transition-colors"
          >
            Submit Quote Request
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
