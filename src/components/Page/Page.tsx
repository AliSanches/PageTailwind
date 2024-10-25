import { Navbar } from "../Navbar";
import { HeroSection } from "../HeroSection";
import { FeatureSection } from "../FeatureSection";
import { GameFlowSection } from "../GameFlowSection";
import { Testimonials } from "../Testimonials";
import { Footer } from "../Footer";

export const Page = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <GameFlowSection />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};
