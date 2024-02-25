"use client";

import { Icon } from "@iconify/react";
import { cn } from "@/utils/utils";

interface IconifyIconProps {
  icon: string;
  className?: string;
}

const IconifyIcon = (props: IconifyIconProps) => {
  const { icon, className } = props;
  return <Icon icon={icon} className={cn(className)} />;
};

export default IconifyIcon;
