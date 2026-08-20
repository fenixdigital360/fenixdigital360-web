import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import AIAgentsSection from "@/components/AIAgentsSection";
import StackMarquee from "@/components/StackMarquee";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import MethodSection from "@/components/MethodSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import type { Lang } from "@/lib/i18n";

export default function HomeContent({ lang }: { lang: Lang }) {
  return (
    <>
      <Navbar lang={lang} />
      <main className="flex-1">
        <Hero lang={lang} />
        <ProblemSection lang={lang} />
        <ServicesSection lang={lang} />
        <AIAgentsSection lang={lang} />
        <StackMarquee lang={lang} />
        <DifferentiatorsSection lang={lang} />
        <MethodSection lang={lang} />
        <FAQSection lang={lang} />
        <CTASection lang={lang} />
      </main>
      <Footer lang={lang} />
      <FloatingWhatsApp lang={lang} />
    </>
  );
}
