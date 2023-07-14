"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Icon } from "@iconify/react";

const Dropdown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="outline-none">
        <Icon icon="ci:hamburger-md" className="h-10 w-10 text-neutral-700" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="mr-4 mt-4 rounded-lg bg-neutral-800 px-6 py-5 shadow-xl">
        <DropdownMenu.Item className="cursor-pointer list-none rounded-lg px-3 py-2 font-medium text-white outline-none hover:bg-neutral-700">
          Home
        </DropdownMenu.Item>
        <DropdownMenu.Item className="cursor-pointer list-none rounded-lg px-3 py-2 font-medium text-white outline-none hover:bg-neutral-700">
          Features
        </DropdownMenu.Item>
        <DropdownMenu.Item className="cursor-pointer list-none rounded-lg px-3 py-2 font-medium text-white outline-none hover:bg-neutral-700">
          Pricing
        </DropdownMenu.Item>
        <DropdownMenu.Item className="cursor-pointer list-none rounded-lg px-3 py-2 font-medium text-white outline-none hover:bg-neutral-700">
          FAQ
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
