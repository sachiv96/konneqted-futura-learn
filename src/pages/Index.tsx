import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MissionSection } from "@/components/MissionSection";
import { CoursesSection } from "@/components/CoursesSection";
import { ComingSoonSection } from "@/components/ComingSoonSection";
import { ContestSection } from "@/components/ContestSection";
import { CommunitySection } from "@/components/CommunitySection";
import { CertificationSection } from "@/components/CertificationSection";
import { AIBotSection } from "@/components/AIBotSection";
import { PricingSection } from "@/components/PricingSection";
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
      <AIBotSection />
      <PricingSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
