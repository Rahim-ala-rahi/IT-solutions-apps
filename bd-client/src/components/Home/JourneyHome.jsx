import React from "react";
import { Link } from "react-router-dom";

const JourneyHome = () => {
  return (
    <>
      <div className="footer_top bg-opacity-30 h-full xl:lg:md:h-[523px] text-center   mt-[20px]">
        <div className="bg-blue-600 bg-opacity-40 text-white h-full">
          <div className="xl:lg:md:w-[60%]  mx-auto">
            <h2 className="font-bold text-[30px] xl:lg:md:text-[60px] font-Livvic">
              Join Hundreds Of Happy Clients Today!
            </h2>
            <h3 className="font-normal text-[16px]">
              To start your journey to satisfactory results, click below to see
              our On-demand trainings today or get in touch with us on our
              Contact page.
            </h3>
            <Link
              to={`/career`}
              className="pb button text-[16px] font-Livvic border  border-white mt-[40px] bg-white text-blue-700"
            >
              START YOUR JOURNEY
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default JourneyHome;
