import HeroSection from "@/components/Sections/HeroSection";
import TestimonialSection from "@/components/Sections/TestimonialSection";
import { PoweredBlock } from "@/components/Blocks/Blocks";
import { StartedBlock } from "@/components/Blocks/Blocks";
import FeaturesCard from "@/components/Cards/FeaturesCard/FeaturesCard";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="h-30 w-full sm:h-50"></div>
      <PoweredBlock />
      <div className="h-30 w-full sm:h-50"></div>
      <span
        className="mb-12 block text-3xl font-semibold text-neutral-700 sm:mb-18 sm:text-4xl lg:text-5xl"
        id="features"
      >
        Features that make us <span className="text-gradient"> stand out</span>
      </span>
      <FeaturesCard />
      <div className="h-30 w-full sm:h-50"></div>
      <StartedBlock />
      <div className="h-30 w-full sm:h-50"></div>
      <span
        className="mb-12 block text-3xl font-semibold text-neutral-700 sm:mb-18 sm:text-4xl lg:text-5xl"
        id="testimonials"
      >
        Testimonials from people who{" "}
        <span className="text-gradient"> love us</span>
      </span>
      <TestimonialSection />
    </>
  );
}
