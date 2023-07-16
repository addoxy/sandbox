import Testimonial from "../Cards/Testimonial/Testimonial";

const TestimonialSection = () => {
  const content: string[] = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam provident quae?",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit non molestias minus!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima excepturi amet, recusandae voluptate a deleniti.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus mollitia cum earum sequi, nam magnam quibusdam necessitatibus quaerat laboriosam atque odit totam",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, dignissimos.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nemo officia iusto velit aliquid temporibus totam facere veritatis.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt asperiores facilis quidem distinctio impedit?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quasi officiis ab.",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe quo temporibus beatae, molestiae debitis rerum?",
  ];

  return (
    <>
      <div className="grid items-start justify-center gap-8 md:grid-cols-2 lg:grid lg:grid-cols-3">
        <div className="inline-grid grid-cols-1 gap-8">
          <Testimonial content={content[0]} />
          <Testimonial content={content[1]} />
          <Testimonial content={content[2]} />
          <div className="block lg:hidden">
            <Testimonial content={content[6]} />
          </div>
          <div className="block lg:hidden ">
            <Testimonial content={content[8]} />
          </div>
        </div>
        <div className="inline-grid grid-cols-1 gap-8">
          <Testimonial content={content[3]} />
          <Testimonial content={content[4]} />
          <Testimonial content={content[5]} />
          <div className="block lg:hidden">
            <Testimonial content={content[7]} />
          </div>
        </div>
        <div className="inline-grid grid-cols-1 gap-8">
          <div className="hidden lg:block">
            <Testimonial content={content[6]} />
          </div>
          <div className="hidden lg:block">
            <Testimonial content={content[7]} />
          </div>
          <div className="hidden lg:block">
            <Testimonial content={content[8]} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSection;
