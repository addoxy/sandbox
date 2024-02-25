"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import IconifyIcon from "./IconifyIcon";
import { cn } from "@/utils/utils";

const BoardDropdownMenu = () => {
  const options = [
    { icon: "ph:star-bold", title: "Favorite" },
    { icon: "ic:outline-delete", title: "Delete" },
  ];

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button>
          <IconifyIcon
            icon="ph:dots-three-outline-fill"
            className="h-5 w-5 text-zinc-100"
          />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          className="rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3 shadow-md"
        >
          <DropdownItem
            icon="ph:star-bold"
            title="Favorite"
            className="mb-2 text-yellow-400"
          />
          <DropdownItem
            icon="ic:outline-delete"
            title="Delete"
            className="text-red-500"
          />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

interface DropdownItemProps {
  icon: string;
  title: string;
  className?: string;
}

const DropdownItem = (props: DropdownItemProps) => {
  const { icon, title, className } = props;

  return (
    <DropdownMenu.Item
      className={cn("flex cursor-pointer items-center outline-none", className)}
    >
      <IconifyIcon icon={icon} className="mr-2 h-5 w-5" />
      {title}
    </DropdownMenu.Item>
  );
};

export default BoardDropdownMenu;
