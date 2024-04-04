import React, { useEffect, useState } from "react";
import Container from "./Container";
import { Link, useNavigate } from "react-router-dom";

import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Container>
        <nav className="flex flex-wrap items-center justify-around ">
          {/* <img
            src="/public/bd it.png"
            className="h-16 w-32"
            alt="ACME"
            width="120"
          /> */}
          <h1 className="h-16 w-32 font-bold text-blue-800 text-2xl xl:lg:md:pt-4">
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
              className="block md:inline-block text-blue-900 hover:text-slate-200 px-3 py-1 border-b-2 border-blue-900 md:border-none text-xl font-semibold"
            >
              Home
            </Link>

            <div className="group relative cursor-pointer">
              <div className="flex items-center   bg-white px-4">
                <div className="menu-hover my-1  block md:inline-block text-blue-900 hover:text-slate-200 px-3 border-b-2 border-blue-900 md:border-none text-xl font-semibold">
                  About
                </div>
                <FaAngleDown className="text-xl ml-[-3px]" />
              </div>

              <div className="invisible absolute z-50 flex w-full flex-col bg-blue-600 py-1 px-3 text-gray-800 shadow-xl group-hover:visible">
                <Link
                  to={`/about`}
                  className="my-2 text-xl  block text-center  py-1 font-semibold text-white hover:text-black md:mx-2 "
                >
                  Blog
                </Link>
              </div>
            </div>
            <div className="group relative cursor-pointer">
              <div className="flex items-center   bg-white px-4">
                <div className="menu-hover my-1  block md:inline-block text-blue-900 hover:text-slate-200 px-3 border-b-2 border-blue-900 md:border-none text-xl font-semibold">
                  Our Services
                </div>
                <FaAngleDown className="text-xl ml-[-3px]" />
              </div>

              <div className="invisible absolute z-50 flex w-full flex-col bg-blue-600 py-1 px-3 text-gray-800 shadow-xl group-hover:visible">
                <Link
                  to={`/consult`}
                  className="my-2 text-xl  block text-center  py-1 font-semibold text-white hover:text-black md:mx-2 "
                >
                  Consulting
                </Link>
                <Link
                  to={`/career`}
                  className="my-2 text-xl  block text-center  py-1 font-semibold text-white hover:text-black md:mx-2 "
                >
                  Careers
                </Link>
              </div>
            </div>
            <div className="group relative cursor-pointer">
              <div className="flex items-center   bg-white px-4">
                <div className="menu-hover my-1  block md:inline-block text-blue-900 hover:text-slate-200 px-3 border-b-2 border-blue-900 md:border-none text-xl font-semibold">
                  Courses
                </div>
                <FaAngleDown className="text-xl ml-[-3px]" />
              </div>

              <div className="invisible absolute z-50 flex w-full flex-col bg-blue-600 py-1 px-3 text-gray-800 shadow-xl group-hover:visible">
                <Link
                  to={`/courses`}
                  className="my-2 text-md block text-center  py-1 font-semibold text-white hover:text-black md:mx-6 "
                >
                  ZoomMeeting
                </Link>
              </div>
            </div>

            <Link
              to={`/contact`}
              href="#"
              className="block md:inline-block text-blue-900 hover:text-slate-200 px-3 py-1 border-b-2 border-blue-900 md:border-none text-xl font-semibold"
            >
              Contact
            </Link>
          </div>
        </nav>
      </Container>
    </>
  );
};

export default Navbar;
