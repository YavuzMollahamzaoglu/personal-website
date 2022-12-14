import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import javascript from "../assets/javascript.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import ReactImg from "../assets/react.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300 w-full h-screen">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className=" text text-4xl border-b-4 border-pink-600 font-bold inline ">
            Skills
          </p>
          <p className="text-gray-300 py-6">
            These are the technologies I am learning and worked with{" "}
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto p-4 flex flex-col justify-center w-full h-full"
              src={GitHub}
              alt="HTML"
            />
            <p className="my-4">GITHUB</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto p-4 flex flex-col justify-center w-full h-full"
              src={CSS}
              alt="HTML"
            />
            <p className="my-4">CSS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto p-4 flex flex-col justify-center w-full h-full"
              src={HTML}
              alt="HTML"
            />
            <p className="my-4">HTML</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto p-4 flex flex-col justify-center w-full h-full"
              src={javascript}
              alt="HTML"
            />
            <p className="my-4">JAVASCRIPT</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto p-4 flex flex-col justify-center w-full h-full"
              src={Node}
              alt="HTML"
            />
            <p className="my-4">NODE</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto p-4 flex flex-col justify-center w-full h-full"
              src={ReactImg}
              alt="HTML"
            />
            <p className="my-4">REACT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
