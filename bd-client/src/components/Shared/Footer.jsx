import React from "react";
import Container from "./Container";
import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Container>
        <footer className="bg-blue-100/80 font-sans dark:bg-gray-900">
          <div className="container px-8 py-10 mx-auto">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
              <div>
                <div>
                  <h1 className="h-16 w-32 font-bold text-blue-800 text-2xl xl:lg:md:pt-4">
                    Paradigmitsolutions
                  </h1>
                </div>

                <div className="flex flex-col items-start mt-5 space-y-2">
                  <div className="flex justify-center items-center gap-3 text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                    <div>
                      <FaPhone />
                    </div>
                    <div>+1 (713) 589-789045</div>
                  </div>
                  <div className="flex justify-center items-center gap-3 text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                    <div>
                      <FaEnvelope />
                    </div>
                    <div>bdsolution@it.com</div>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">
                  Quick Links
                </p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                  <Link
                    to={`/`}
                    className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"
                  >
                    Home
                  </Link>
                  <Link
                    to={`/about`}
                    className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"
                  >
                    About
                  </Link>
                  <Link
                    to={`/about`}
                    className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"
                  >
                    Blog
                  </Link>
                  <Link
                    to={`/contact`}
                    className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              <div>
                <p className="font-semibold text-gray-800 dark:text-white">
                  Usefull Links
                </p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                  <Link className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                    My Accounts
                  </Link>
                  <Link className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                    All Courses
                  </Link>
                  <Link
                    to={`/career`}
                    className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"
                  >
                    Careers
                  </Link>
                  <Link className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                    Terms & Policy
                  </Link>
                </div>
              </div>

              <div className="sm:col-span-1.5">
                <h1 className="max-w-lg text-md font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
                  Subscribe our newsletter to get an update.
                </h1>

                <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 ">
                  <input
                    id="email"
                    type="text"
                    className="px-4 py-2 mb-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                    placeholder="Email Address"
                  />

                  <button className="w-full  px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            <hr className="my-4 border-gray-200 md:my-8 dark:border-gray-700 h-2" />

            <div className="sm:flex sm:items-center sm:justify-between md:lg:justify-end mb-8 pr-2">
              {/* <div className="flex flex-1 gap-4 hover:cursor-pointer">
                <img
                  src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg"
                  width="130"
                  height="110"
                  alt=""
                />
                <img
                  src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
                  width="130"
                  height="110"
                  alt=""
                />
              </div> */}

              <div className="flex gap-4 hover:cursor-pointer">
                <FaFacebook style={{ width: "30", height: "30" }} />
                <FaTwitter style={{ width: "30", height: "30" }} />
                <FaYoutube style={{ width: "30", height: "30" }} />
                <FaLinkedin style={{ width: "30", height: "30" }} />
              </div>
            </div>
            <p className="font-sans px-8 text-start md:text-center md:text-lg md:px-4">
              © 2024 BD-IT-SOLUTION Inc. All rights reserved.
            </p>
          </div>
        </footer>
      </Container>
    </>
  );
};

export default Footer;
