import swibble from "@/utils/icons/svg/swibble.svg";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between px-5 pt-4 md:px-6 lg:px-16">
        <Link href="/" className="flex items-center">
          <Image src={swibble} alt="swibble" className="mr-2" />
          <span className="text-xl font-medium text-blue-500">Learnex</span>
        </Link>
        <nav className="hidden w-100 justify-between font-medium text-neutral-700 md:flex">
          <Link
            href="/"
            className="pointer flex cursor-pointer items-center justify-center rounded-lg px-3 py-2 hover:bg-neutral-100"
          >
            Home
          </Link>
          <Link
            href="/"
            className="pointer flex cursor-pointer items-center justify-center rounded-lg px-3 py-2 hover:bg-neutral-100"
          >
            Browse
          </Link>
          <Link
            href="/"
            className="pointer flex cursor-pointer items-center justify-center rounded-lg px-3 py-2 hover:bg-neutral-100"
          >
            Features
          </Link>
          <Link
            href="/"
            className="pointer flex cursor-pointer items-center justify-center rounded-lg px-3 py-2 hover:bg-neutral-100"
          >
            Testimonials
          </Link>
        </nav>
        <div className="flex">
          <Link href="/">
            <button className="mr-5 h-12 w-36 rounded-xl bg-blue-500 font-medium text-white shadow-xl hover:bg-blue-600">
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
