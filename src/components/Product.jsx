import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { productCards } from "../stock";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const Product = () => {
  return (
    <div className="container max-w-[1332px] mx-auto px-4">
      <div className="flex justify-between mb-8 pt-16">
        <h4 className="font-bold text-[40px]">Популярные товары?</h4>
        <button className="hidden sm:flex items-center justify-center mb-[40px] gap-3 p-3 px-12 border border-black rounded-[100px] hover:bg-black hover:text-white transition duration-300 ease-in-out">
        Bce товары
          <FaArrowRight />
        </button>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {productCards.map((card) => (     
          <div key={card.id} className="grid gap-5 p-4 relative hover:shadow-xl transition duration-300 ease-in-out">
            <FaRegHeart className="absolute right-4 top-4" />
            <div className="w-full h-auto flex items-center justify-center">
              <img src={card.image || "https://via.placeholder.com/150"} alt={card.title || "Product"} className="w-auto h-auto max-w-full" />
            </div>
            <div>
              <span className="flex w-[180px]">{card.title || "No title"}</span>
              <div className="flex items-center justify-between">
                <div className="flex flex-col mt-4">
                  <del className="opacity-55 text-xs">{card.lastprice || ""}</del>
                  <b>{card.price || "Price not available"}</b>
                </div>
                <div className="bg-[#454545] text-white p-1 px-3 rounded-[100px] hover:bg-black transition duration-300">
                  <MdOutlineShoppingCart />
                </div>
              </div>
            </div>
          </div>          
        ))}
      </div>
      <button className=" flex sm:hidden items-center justify-center my-[40px] gap-3 w-full p-3 border border-black rounded-[100px] hover:bg-black hover:text-white transition duration-300 ease-in-out">
      Bce товары
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Product;
