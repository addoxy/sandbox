import HeroSection from "@/components/HeroSection/HeroSection";
import Block from "@/components/Blocks/Block";
import FeaturesCard from "@/components/Cards/FeaturesCard/FeaturesCard";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="h-50 w-full"></div>
      <Block />
      <div className="h-50 w-full"></div>
      <FeaturesCard />
      <div className="h-50 w-full"></div>
    </>
  );
}
