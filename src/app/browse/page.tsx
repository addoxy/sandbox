import Course from "@/components/Cards/Course/Course";
import { courses } from "./data";
import { v4 as uuidv4 } from "uuid";

const Browse = () => {
  return (
    <>
      <div className="h-10 w-full sm:h-20"></div>
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 md:gap-x-12 md:gap-y-0 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-0 xl:gap-y-10">
        {courses.map((course) => (
          <Course key={uuidv4()} {...course} />
        ))}
      </div>
      <div className="h-20"></div>
    </>
  );
};

export default Browse;
