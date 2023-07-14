import IconContainer from "./IconContainer";
import { Balancer } from "react-wrap-balancer";

const FeaturesCard = () => {
  return (
    <div className="flex justify-center">
      <div className="grid max-w-md grid-cols-none grid-rows-3 rounded-2xl border border-neutral-200 md:w-fit lg:h-fit lg:w-full lg:max-w-none lg:grid-cols-3 lg:grid-rows-none">
        <div className="flex h-full flex-col items-center justify-center border-b border-neutral-200 lg:border-b-0 lg:border-r">
          <div className="flex p-8">
            <IconContainer icon="bi:laptop-fill" className="mr-6" />
            <div className="flex flex-col">
              <span className="mb-2 text-lg font-semibold text-neutral-700">
                Best Courses
              </span>
              <p className="text-sm text-gray-500">
                <Balancer>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </Balancer>
              </p>
            </div>
          </div>
          <div className="flex p-8">
            <IconContainer icon="tabler:cloud-filled" className="mr-6" />
            <div className="flex flex-col">
              <span className="mb-2 text-lg font-semibold text-neutral-700">
                On The Cloud
              </span>
              <p className="text-sm text-gray-500">
                <Balancer>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Balancer>
              </p>
            </div>
          </div>
        </div>
        <div className="flex h-full flex-col items-center justify-center border-b border-neutral-200 lg:border-b-0 lg:border-r">
          <div className="flex p-8">
            <IconContainer icon="fa6-solid:user-graduate" className="mr-6" />
            <div className="flex flex-col">
              <span className="mb-2 text-lg font-semibold text-neutral-700">
                Graduate-Level
              </span>
              <p className="text-sm text-gray-500">
                <Balancer>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </Balancer>
              </p>
            </div>
          </div>
          <div className="flex p-8">
            <IconContainer icon="fa6-solid:question" className="mr-6" />
            <div className="flex flex-col">
              <span className="mb-2 text-lg font-semibold text-neutral-700">
                Doubt Sessions
              </span>
              <p className="text-sm text-gray-500">
                <Balancer>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Balancer>
              </p>
            </div>
          </div>
        </div>
        <div className="flex h-full flex-col items-center justify-center border-neutral-200 ">
          <div className="flex p-8">
            <IconContainer
              icon="fa-solid:chalkboard-teacher"
              className="mr-6"
            />
            <div className="flex flex-col">
              <span className="mb-2 text-lg font-semibold text-neutral-700">
                Top Teachers
              </span>
              <p className="text-sm text-gray-500">
                <Balancer>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </Balancer>
              </p>
            </div>
          </div>
          <div className="flex p-8">
            <IconContainer icon="bxs:dashboard" className="mr-6" />
            <div className="flex flex-col">
              <span className="mb-2 text-lg font-semibold text-neutral-700">
                Dashboard
              </span>
              <p className="text-sm text-gray-500">
                <Balancer>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Balancer>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
