import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <i className="ri-remix-fill  text-black  text-3xl"></i>
            <span className="ml-3 text-xl">MSB</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link href="/about" className="mr-5 hover:text-gray-900">
              {"About"}
            </Link>
            <Link href="/contact" className="mr-5 hover:text-gray-900">
              {"Contact"}
            </Link>
          </nav>
          <button className="inline-flex  bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 justify-between">
            Click Me
            <i className="ri-arrow-right-fill w-4 h-4 "></i>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
