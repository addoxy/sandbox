import Image from "next/image";
import woman from "@/../public/images/jpegs/woman.jpeg";

const Testimonial = (props: { content: string }) => {
  return (
    <>
      <div className="flex w-100 flex-col rounded-3xl border px-8 py-8 shadow-sm md:w-auto">
        <p className="mb-6 text-neutral-600">{props.content}</p>
        <div className="flex">
          <Image
            src={woman}
            alt="man"
            className="mr-4 h-10 w-10 rounded-full"
          />
          <div className="flex flex-col text-sm">
            <span className="font-semibold text-neutral-800">
              Leslie Alexander
            </span>
            <span className="text-neutral-600">@lesliealexander</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
