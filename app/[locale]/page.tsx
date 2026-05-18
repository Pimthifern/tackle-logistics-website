import MotionHero from "@/components/MotionHero";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import CoverageSection from "@/components/CoverageSection";
import ProcessSection from "@/components/ProcessSection";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full">
      <MotionHero />
      <ServicesSection />
      <WhyChooseSection />
      <CoverageSection />
      <ProcessSection />
      <QuoteForm />
      <Footer />
    </main>
  );
}
