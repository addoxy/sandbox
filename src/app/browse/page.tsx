import Course from "@/components/Cards/Course/Course";
import os from "@/../public/images/os.jpg";
import webdev from "@/../public/images/webdev.jpg";
import design from "@/../public/images/design.jpg";
import { v4 as uuidv4 } from "uuid";

const Browse = () => {
  const courses = [
    {
      src: os,
      name: "Operating Systems",
      price: "$100",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium harum dolorem error tempore.",
    },
    {
      src: webdev,
      name: "Web Development",
      price: "$500",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium harum dolorem error tempore repellendus molestiae.",
    },
    {
      src: design,
      name: "UI / UX",
      price: "$200",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, molestiae!",
    },
  ];

  return (
    <>
      <div className="w-ful h-20"></div>
      <div className="grid grid-flow-col">
        {courses.map((course) => (
          <Course
            key={uuidv4()}
            src={course.src}
            name={course.name}
            price={course.price}
            description={course.description}
          />
        ))}
      </div>
    </>
  );
};

export default Browse;