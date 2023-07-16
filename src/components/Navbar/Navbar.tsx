import logo from "@/../public/svg/logo.svg";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Browse", link: "/browse" },
    { name: "Features", link: "/#features" },
    { name: "Testimonials", link: "/#testimonials" },
  ];

  return (
    <>
      <div className="flex items-center justify-between px-4 pt-4 sm:px-5 md:px-6 lg:px-16">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="swibble" className="mr-2" />
          <span className="text-xl font-medium text-blue-500">Learnex</span>
        </Link>
        <nav className="hidden w-100 justify-between font-medium text-neutral-700 md:flex">
          {navItems.map((navItem) => (
            <Link
              href={navItem.link}
              className="pointer flex cursor-pointer items-center justify-center rounded-lg px-3 py-2 hover:bg-neutral-100"
            >
              {navItem.name}
            </Link>
          ))}
        </nav>
        <div className="flex">
          <Link href="/">
            <button className="mr-5 h-12 w-30 rounded-xl bg-blue-500 font-medium text-white shadow-xl hover:bg-blue-600 sm:h-12 sm:w-36">
              Login
            </button>
          </Link>
          <div className="z-50 flex items-center md:hidden">
            <Dropdown />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
