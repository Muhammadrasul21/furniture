import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { catalogCards } from "../stock";

const Catalog = () => {
  return (
    <div>
      <div className="container max-w-[1332px] mx-auto px-4 mt-[20px] sm:mt-[50px] py-[97px]">
        <div className="flex justify-between mb-8">
          <h4 className="font-bold text-[40px]">Каталог</h4>
          <button className=" hidden sm:flex items-center justify-center mb-[40px] gap-3 p-3 px-12  border border-black rounded-[100px] hover:bg-black hover:text-white transition duration-300 ease-in-out">
            Весь каталог
            <FaArrowRight />
          </button>
        </div>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {catalogCards.map((card) => (
            <div
              key={card.id}
              className="group border bg-[#F2F2F2] flex justify-between rounded-3xl p-8 hover:bg-black hover:text-white transition duration-700 ease-linear"
            >
              <div className="flex flex-col justify-between">
                <h3 className="text-xl font-bold">{card.title}</h3>
                <p className="text-gray-500 flex items-center gap-3 group-hover:text-white">
                  {card.price} <FaArrowRight />
                </p>
              </div>
              <div>
                <img
                  src={card.image}
                  alt="#"
                  className="w-auto h-auto max-w-full"
                />
              </div>
            </div>
          ))}
        </div>
        <button className="sm:hidden flex items-center justify-center mb-[40px] mt-8 gap-3 w-full h-[50px] border border-black rounded-[100px] hover:bg-black hover:text-white transition duration-300 ease-in-out">
          Весь каталог
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Catalog;
