import { useReveal } from "@/hooks/useReveal";
import { useScrollHeader } from "@/hooks/useScrollHeader";
import { useI18n } from "@/i18n/I18nProvider";
import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { AboutSection } from "@/components/sections/AboutSection";
import { IdentitySection } from "@/components/sections/IdentitySection";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { CertificationSection } from "@/components/sections/CertificationSection";
import { TrajectorySection } from "@/components/sections/TrajectorySection";
import { TeamSection } from "@/components/sections/TeamSection";
import { ClosingQuote } from "@/components/sections/ClosingQuote";
import { FooterSection } from "@/components/sections/FooterSection";
import { WhatsAppButton } from "@/components/sections/WhatsAppButton";

const Index = () => {
  useReveal();
  const { lang } = useI18n();
  const { headerRef, ornamentRef } = useScrollHeader();

  return (
    <div key={lang} className="min-h-screen bg-ivory text-foreground overflow-x-hidden animate-[fadeIn_0.5s_ease-out]">
      <Header headerRef={headerRef} />
      <HeroSection ornamentRef={ornamentRef} />
      <LogoStrip />
      <AboutSection />
      <IdentitySection />
      <MethodologySection />
      <CertificationSection />
      <TrajectorySection />
      <TeamSection />
      <ClosingQuote />
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Index;