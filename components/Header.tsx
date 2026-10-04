import Link from "next/link";
import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <i className="ri-remix-fill  text-black  text-3xl"></i>
            <span className="ml-3 text-xl">
              <Link href="/">MSB</Link>
            </span>
          </div>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link href="/about" className="mr-5 hover:text-gray-900">
              {"About"}
            </Link>
            <Link href="/users" className="mr-5 hover:text-gray-900">
              {"Users"}
            </Link>
            <Link href="/contact" className="mr-5 hover:text-gray-900">
              {"Contact"}
            </Link>
          </nav>
          <Button />
        </div>
      </header>
    </>
  );
};

export default Header;
