import AboutUsSection from "@/sections/AboutUsSection";
import AlertSection from "@/sections/AlertSection";
import CTASection from "@/sections/CTASection";
import HeroSection from "@/sections/HeroSection";
import SolutionSection from "@/sections/SolutionSection";
import TestimonialSection from "@/sections/TestimonialSection";
export default function Home() {
  return (
    <main>
      <AlertSection />
      <div className="2xl:block hidden">
        <HeroSection />
        <AboutUsSection />
        <SolutionSection />
        <TestimonialSection />
        <CTASection />
      </div>
    </main>
  );
}
