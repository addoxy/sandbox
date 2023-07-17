import swibble from "@/../public/svg/swibble.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="flex h-60 flex-col items-center justify-center border-t border-neutral-200">
        <Link href="/" className="mb-4 flex items-center">
          <Image src={swibble} alt="swibble" className="mr-2" />
          <span className="text-xl font-medium text-blue-500">Learnex</span>
        </Link>
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
            href="/browse"
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
