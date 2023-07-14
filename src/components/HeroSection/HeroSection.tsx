import CourseCard from "../Cards/CourseCard";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="order-2 mt-4 flex flex-col sm:w-120 lg:order-1 lg:w-108 lg:px-0 lg:text-left xl:w-140">
          <p className="mb-8 text-2xl font-bold text-neutral-700 sm:text-3xl lg:text-4xl xl:text-5xl">
            The best courses at the most
            <span className="text-gradient"> affordable prices</span>
          </p>
          <p className="mb-22 text-base font-normal text-neutral-500 sm:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            sint dicta aliquam ab! Vero laborum, perspiciatis minus illo eum
            consequatur
          </p>
          <div>
            <button className="mr-12 rounded-lg bg-blue-500 px-18 py-4 text-lg font-medium text-white shadow-xl hover:bg-blue-600">
              Sign Up
            </button>
            <Link
              href="/"
              className="text-lg font-semibold text-neutral-600 hover:text-blue-400"
            >
              Browse -&gt;
            </Link>
          </div>
        </div>
        <div className="order-1 mb-30 lg:order-2 lg:mb-0">
          <CourseCard />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
