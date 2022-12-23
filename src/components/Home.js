import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-yellow-600">Hi my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Yavuz Mollahamzaoğlu
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I am Front-end Developer
        </h2>
        <p className="text-[red] py-4 max-w-[700px] ">
          I am Front end Developer which is work on TUBITAK scholarship project
          and TFF referre my main goal is build responsive web applications
        </p>
        <div>
          <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600 ">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 hover:" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
