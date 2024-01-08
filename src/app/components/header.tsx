"use client";

import Image from "next/image";
import { navs } from "./constant";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 sm:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-dark-purple">
              devlinks
            </span>
          </a>
          <div className="flex items-center sm:order-2">
            <a
              href="#"
              className="text-white font-medium rounded-lg text-sm px-4 sm:px-5 py-2 sm:py-2.5 mr-2 bg-dark-purple"
            >
              Preview
            </a>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full sm:flex sm:w-auto sm:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium sm:flex-row sm:space-x-8 sm:mt-0">
              {navs.map(({ icon, name, href }) => (
                <li
                  className={`flex gap-2 hover:bg-light-purple rounded-lg sm:px-5 py-2 sm:py-2.5 text-dark-purple ${
                    pathname === href && "bg-light-purple"
                  }`}
                >
                  <Image src={icon} alt={name} />
                  <a
                    href={href}
                    className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 sm:hover:bg-transparent sm:border-0 sm:p-0 dark:text-gray-400 sm:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white sm:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
