"use client";

import { Icon } from "@iconify/react";
import { classicNameResolver } from "typescript";

const Sun = (props: { className: string }) => {
  return <Icon icon="ph:sun-fill" className={props.className} />;
};

export default Sun;
