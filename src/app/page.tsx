import HeroSection from "@/components/Sections/HeroSection";
import TestimonialSection from "@/components/Sections/TestimonialSection";
import Block from "@/components/Blocks/Block";
import FeaturesCard from "@/components/Cards/FeaturesCard/FeaturesCard";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="h-30 w-full sm:h-50"></div>
      <Block />
      <div className="h-30 w-full sm:h-50"></div>
      <span className="mb-12 block text-3xl font-semibold text-neutral-700 sm:mb-18 sm:text-4xl lg:text-5xl">
        Features that make us <span className="text-gradient"> stand out</span>
      </span>
      <FeaturesCard />
      <div className="h-30 w-full sm:h-50"></div>
      <span className="mb-12 block text-3xl font-semibold text-neutral-700 sm:mb-18 sm:text-4xl lg:text-5xl">
        Testimonials from people who{" "}
        <span className="text-gradient"> love us</span>
      </span>
      <TestimonialSection />
      <div className="h-30 w-full sm:h-50"></div>
    </>
  );
}
