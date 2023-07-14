import CourseCard from "../Cards/CourseCard";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex w-140 flex-col">
          <p className="mb-8 text-5xl font-bold text-neutral-700">
            The best courses at the most
            <span className="text-gradient"> affordable prices</span>
          </p>
          <p className="mb-26 text-lg font-normal text-neutral-500">
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
        <CourseCard />
      </div>
    </>
  );
};

export default HeroSection;
