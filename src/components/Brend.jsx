import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";



const Brend = () => {
  return (
    <div  className="container max-w-[1332px] mx-auto px-4">
         <div className="flex justify-between mb-8 pt-16">
        <h4 className="font-bold text-[40px]">Только проверенные бренды</h4>
        <div className='flex gap-4'>
        <button className="hidden sm:flex items-center justify-center mb-[40px] p-3 px-6 border border-black opacity-50 rounded-[100px] hover:opacity-100 transition duration-300 ease-in-out">
          <FaArrowLeftLong/>
        </button>
        <button className="hidden sm:flex items-center justify-center mb-[40px] p-3 px-6 border border-black opacity-50 rounded-[100px] hover:opacity-100 transition duration-300 ease-in-out">
          <FaArrowRightLong/>
        </button>
      
        </div>
      </div>
    </div>
  )
}

export default Brend