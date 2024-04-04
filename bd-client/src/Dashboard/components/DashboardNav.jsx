import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { FaAngleDown } from "react-icons/fa";

const DashboardNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex flex-wrap items-center justify-around  bg-gradient-to-r from-indigo-900 to-blue-800 ">
        {/* <img
          src="/public/bd it.png"
          className="h-16 w-32"
          alt="ACME"
          width="120"
        /> */}
        <h1 className="h-16 w-32 font-bold text-2xl pt-4 text-white">
          Paradigmitsolutions
        </h1>
        <div className="flex md:hidden">
          <button id="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? (
              <img
                className="block"
                src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
                width="40"
                height="40"
              />
            ) : (
              <img
                className="block"
                src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
                width="40"
                height="40"
              />
            )}
          </button>
        </div>
        <div
          className={`toggle ${
            isMenuOpen ? "w-full md:w-auto" : "hidden md:w-auto md:flex"
          } text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none`}
        >
          <Link
            to={`/`}
            href="#"
            className="w-full md:w-auto px-4 py-1 text-right bg-green-900 hover:bg-green-500 text-white rounded-md"
          >
            View website
          </Link>
        </div>
      </nav>
    </>
  );
};

export default DashboardNav;
