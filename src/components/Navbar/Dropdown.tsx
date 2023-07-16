"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

const Dropdown = () => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Browse", link: "/browse" },
    { name: "Features", link: "/#features" },
    { name: "Testimonials", link: "/#testimonials" },
  ];

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="outline-none">
        <Icon icon="ci:hamburger-md" className="h-10 w-10 text-neutral-700" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="mr-4 mt-4 rounded-lg bg-neutral-800 px-6 py-5 shadow-xl">
        {navItems.map((navItem) => (
          <Link href={navItem.link} key={uuidv4()}>
            <DropdownMenu.Item className="cursor-pointer list-none rounded-lg px-3 py-2 font-medium text-white outline-none hover:bg-neutral-700">
              {navItem.name}
            </DropdownMenu.Item>
          </Link>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
