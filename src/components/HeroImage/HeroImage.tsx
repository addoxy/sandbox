import Link from "next/link";
import LockIcon from "@/utils/icons/tsx/LockIcon";
import man from "@/../public/images/man.jpg";
import Image from "next/image";
import SelectMenu from "./SelectMenu";
import { Balancer } from "react-wrap-balancer";

const CourseCard = (props: { className: string }) => {
  return (
    <>
      <div
        className={`card-gradient-1 flex h-96 w-108 scale-[0.75] justify-center rounded-3xl bg-black sm:scale-[0.95] xl:scale-[1] ${props.className}`}
      >
        <div className="relative top-14 flex h-96 w-80 flex-col items-center rounded-3xl bg-white px-6 py-6 drop-shadow-2xl">
          <div className="flex h-full flex-col justify-between">
            <div>
              <div className="mb-7 flex h-9 w-70 items-center rounded-lg bg-neutral-100 px-4 text-sm font-normal text-neutral-400">
                <LockIcon className="mr-3" />
                <Link href="https://sandbox.addoxy.me" target="_blank">
                  https://sandbox.addoxy.me
                </Link>
              </div>
              <div className="mb-12 flex">
                <Image
                  src={man}
                  alt="John Doe"
                  className="mr-6 h-16 w-16 rounded-full"
                />
                <div className="flex flex-col">
                  <span className="mb-1 text-lg font-medium text-neutral-500">
                    Anthony Hill
                  </span>
                  <p className="w-40 text-sm text-neutral-400">
                    <Balancer>
                      Hello I&apos;m Anthony and I am a placement expert.
                    </Balancer>
                  </p>
                </div>
              </div>
              <SelectMenu />
            </div>
            <Link href="/">
              <button className="flex h-11 w-full items-center justify-center rounded-lg bg-blue-400 text-white shadow-lg hover:bg-blue-600">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
