import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { catalogCards } from '../stock';

const Catalog = () => {
  return (
    <div>
        <div className="container max-w-[1332px] mx-auto px-4 mt-[50px] py-[97px]">
        <div className='flex justify-between'>
            <h4 className='font-bold text-[40px]'>Каталог</h4>
            <button className="flex items-center justify-center mb-[40px] gap-3 w-[220px] h-[50px] border border-black rounded-[100px] hover:bg-black hover:text-white ransition duration-300 ease-in-out">Весь каталог<FaArrowRight /></button>
        </div>
          <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
    {catalogCards.map((card)=> (
        <div key={card.id} className='border bg-[#F2F2F2] flex justify-between rounded-3xl p-8'>
          <di className='flex flex-col justify-between'>
               <h3 className='text-xl font-bold'> {card.title}</h3>
               <p className='text-gray-500 flex items-center gap-3'>{card.price} <FaArrowRight/></p>
          </di>
          <div>
         <img src={card.image} alt="#" className='w-auto h-auto max-w-full' />
          </div>
</div>
    ))}
          </div>
        </div>
    </div>
  )
}

export default Catalog