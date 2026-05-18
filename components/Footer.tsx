"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-navy py-12 sm:py-16 px-4 sm:px-8 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {/* Left Column */}
          <div>
            <h2 className="font-display font-black tracking-widest text-2xl sm:text-3xl mb-3">
              TACKLE
            </h2>
            <p className="text-white/70 text-base sm:text-lg mb-4 sm:mb-6">
              {t("tagline")}
            </p>
            <p className="text-white/50 text-xs sm:text-sm">
              {t("copyright")}
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-24 sm:h-32 bg-white/10" />

          {/* Right Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📞</span>
              <a href={`tel:${t("contact.phone")}`} className="text-lg hover:text-sky transition-colors">
                {t("contact.phone")}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">✉</span>
              <a href={`mailto:${t("contact.email")}`} className="text-lg hover:text-sky transition-colors">
                {t("contact.email")}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📍</span>
              <p className="text-lg leading-relaxed">
                {t("contact.address")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
