"use client";

import { Icon } from "@iconify/react";

const IconContainer = (props: { icon: string; className: string }) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
          <Icon icon={props.icon} className="h-6 w-6 text-blue-600" />
        </div>
      </div>
    </>
  );
};

export default IconContainer;
