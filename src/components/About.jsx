import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { aboutItems } from "../stock";

const About = () => {
  return (
    <div className="container max-w-[1332px] mx-auto px-4">
      <div className="flex justify-between mb-8">
        <h4 className="font-bold text-[40px]">Почему NORNLIGHT?</h4>
        <button className=" hidden sm:flex items-center justify-center mb-[40px] gap-3  p-3 px-12 border border-black rounded-[100px] hover:bg-black hover:text-white transition duration-300 ease-in-out">
          O компании
          <FaArrowRight />
        </button>
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {aboutItems.map((about) => (
          <div
            key={about.id}
            className="flex flex-col-reverse justify-between group border p-10 h-[360px] hover:bg-black hover:text-white transition duration-700 ease-in-out"
          >
            <div className="flex flex-col justify-between gap-4 h-[30%]">
              <h3 className="text-xl font-bold  group-hover:text-white">
                {about.title}
              </h3>
              <p className="text-[#454545] group-hover:text-gray-300">
                {about.info}
              </p>
            </div>

            <div className="flex justify-start items-center mt-4 bg-black w-20 h-20 rounded-xl p-3">
              <img
                src={about.image}
                alt="#"
                className="w-[120px] h-[120px] object-contain"
              />
            </div>
          </div>
        ))}
      </div>
      <button className=" flex sm:hidden items-center justify-center mb-[40px] gap-3 w-full p-3 border border-black rounded-[100px] hover:bg-black hover:text-white transition duration-300 ease-in-out">
        O компании
        <FaArrowRight />
      </button>
    </div>
  );
};

export default About;
