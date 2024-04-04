import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="banner bg-opacity-30 h-full xl:lg:md:h-[423px]   mt-[2px]">
        <div className="bg-blue-600 bg-opacity-40 text-white h-full">
          <div className="xl:lg:md:w-[60%]  xl:lg:md:ml-[40px]">
            <h1 className="Sans-serif font-normal text-[22px] xl:lg:md:text-[30px] font-Livvic">
              Put Your Company In The Cloud And Get A Step Ahead Of The
              Competition
            </h1>
            <h2 className="font-bold text-[30px] xl:lg:md:text-[60px] font-Livvic">
              Optimize Your Team & Save Cost
            </h2>
            <h3 className="font-normal text-[16px]">
              We're Cloud Focus and Automation ready to help your team through
              Data Modernization and Migration projects.
            </h3>
            <Link
              to={`/about`}
              className="pb button text-[16px] font-Livvic border  border-white mt-[40px] bg-white text-blue-700"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
