import React from 'react'
import { FaArrowRight } from "react-icons/fa";


const Product = () => {
  return (
    <div  className="container max-w-[1332px] mx-auto px-4">
          <div className="flex justify-between mb-8 pt-16">
        <h4 className="font-bold text-[40px]">Популярные товары?</h4>
        <button className=" hidden sm:flex items-center justify-center mb-[40px] gap-3  p-3 px-12 border border-black rounded-[100px] hover:bg-black hover:text-white transition duration-300 ease-in-out">
          Bce товары
          <FaArrowRight />
        </button>
      </div>
    </div>
  )
}

export default Product