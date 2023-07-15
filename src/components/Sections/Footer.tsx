import logo from "@/../public/svg/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="flex h-60 flex-col items-center justify-center border-t border-neutral-200">
        <div className="mb-4 flex items-center">
          <Image src={logo} alt="logo" className="mr-2" />
          <span className="text-xl font-medium text-blue-500">Learnex</span>
        </div>
        <span className="mb-8 text-sm text-neutral-400">
          © 2023 Addoxy . All rights reserved.
        </span>
        <div className="flex w-56 justify-between">
          <Link
            href="/"
            className="rounded-md p-2 text-sm text-neutral-500 hover:bg-neutral-100"
          >
            Home
          </Link>
          <Link
            href="/"
            className="rounded-md p-2 text-sm text-neutral-500 hover:bg-neutral-100"
          >
            Browse
          </Link>
          <Link
            href="/"
            className="rounded-md p-2 text-sm text-neutral-500 hover:bg-neutral-100"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
