export default function Footer() {
  return (
    <footer className="bg-navy py-16 px-[48px] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h2 className="font-display font-black tracking-widest text-3xl mb-3">
              TACKLE
            </h2>
            <p className="text-white/70 text-lg mb-6">
              Premium Logistics Partner
            </p>
            <p className="text-white/50 text-sm">
              © 2025 TACKLE Logistics Co., Ltd.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-32 bg-white/10" />

          {/* Right Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📞</span>
              <a href="tel:0808264865" className="text-lg hover:text-sky transition-colors">
                080-826-4865
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">✉</span>
              <a href="mailto:Chartsiam@tacklelog.com" className="text-lg hover:text-sky transition-colors">
                Chartsiam@tacklelog.com
              </a>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📍</span>
              <p className="text-lg leading-relaxed">
                883/318 Moo2, Banklangsuan,<br />
                Prasamutchedi, Samutprakarn 10290
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
