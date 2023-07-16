import Hero from "@/components/Sections/Hero";
import Testimonials from "@/components/Sections/Testimonials";
import { PoweredBlock } from "@/components/Blocks/Blocks";
import { StartedBlock } from "@/components/Blocks/Blocks";
import Features from "@/components/Cards/Features/Features";

export default function Home() {
  return (
    <>
      <div className="h-10 lg:h-36"></div>
      <Hero />
      <div className="h-30 w-full sm:h-50"></div>
      <PoweredBlock />
      <div className="h-30 w-full sm:h-50"></div>
      <span
        className="mb-12 block text-3xl font-semibold text-neutral-700 sm:mb-18 sm:text-4xl lg:text-5xl"
        id="features"
      >
        Features that make us <span className="text-gradient"> stand out</span>
      </span>
      <Features />
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
      <Testimonials />
    </>
  );
}
