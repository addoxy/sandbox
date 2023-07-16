import Course from "@/components/Cards/Course/Course";
import os from "@/../public/images/os.jpg";
import webdev from "@/../public/images/webdev.jpg";
import design from "@/../public/images/design.jpg";

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
      <div className="grid grid-cols-3 gap-x-10">
        {courses.map((course) => (
          <Course
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
