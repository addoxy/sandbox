import Image, { StaticImageData } from "next/image";

const Course = (props: {
  src: string | StaticImageData;
  name: string;
  price: string;
  description: string;
}) => {
  return (
    <>
      <div className="h-125 w-88 rounded-3xl bg-white shadow-xl">
        <div className="h-2/5 w-full overflow-clip">
          <Image
            loading="lazy"
            src={props.src}
            alt=""
            className="rounded-t-3xl"
          />
        </div>
        <div className="flex h-3/5 flex-col justify-between px-8 py-8">
          <div>
            <p className="mb-1 text-xl font-semibold text-neutral-700">
              {props.name}
            </p>
            <p className="font-semibold text-neutral-500">{props.price}</p>
          </div>
          <p className="mb-4 text-neutral-500">{props.description}</p>
          <button className="h-11 w-full rounded-md bg-blue-500 font-medium text-white hover:bg-blue-600">
            Buy
          </button>
        </div>
      </div>
    </>
  );
};

export default Course;
