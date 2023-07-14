import { Icon } from "@iconify/react";

const FeaturesCard = () => {
  return (
    <div className="grid h-80 w-full grid-cols-none grid-rows-3 rounded-2xl border border-neutral-200 lg:grid-cols-3 lg:grid-rows-none">
      <div className="h-full border-b border-neutral-200 lg:border-r">
        <div className="flex">
          <Icon icon="" />
          <div className="flex flex-col">
            <span></span>
            <p></p>
          </div>
        </div>
        <div className="flex">
          <Icon icon="" />
          <div className="flex flex-col">
            <span></span>
            <p></p>
          </div>
        </div>
      </div>
      <div className="h-full border-b border-neutral-200 lg:border-r">
        <div className="flex">
          <Icon icon="" />
          <div className="flex flex-col">
            <span></span>
            <p></p>
          </div>
        </div>
        <div className="flex">
          <Icon icon="" />
          <div className="flex flex-col">
            <span></span>
            <p></p>
          </div>
        </div>
      </div>
      <div className="h-full border-neutral-200">
        <div className="flex">
          <Icon icon="" />
          <div className="flex flex-col">
            <span></span>
            <p></p>
          </div>
        </div>
        <div className="flex">
          <Icon icon="" />
          <div className="flex flex-col">
            <span></span>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
