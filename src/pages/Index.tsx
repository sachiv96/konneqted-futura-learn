import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MissionSection } from "@/components/MissionSection";
import { CoursesSection } from "@/components/CoursesSection";
import { ComingSoonSection } from "@/components/ComingSoonSection";
import { ContestSection } from "@/components/ContestSection";
import { CommunitySection } from "@/components/CommunitySection";
import { CertificationSection } from "@/components/CertificationSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { TrustedSection } from "@/components/TrustedSection";
import { PricingSection } from "@/components/PricingSection";
import { TerminalSection } from "@/components/TerminalSection";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <MissionSection />
      <CoursesSection />
      <ComingSoonSection />
      <ContestSection />
      <CommunitySection />
      <CertificationSection />
      <TestimonialsSection />
      <TrustedSection />
      <PricingSection />
      <TerminalSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
