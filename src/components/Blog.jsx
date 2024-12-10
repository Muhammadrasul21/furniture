import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { blogImages, blogItems } from '../stock';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Blog = () => {
  return (
    <div  className="container max-w-[1332px] mx-auto px-4">
       <div className="flex justify-between mb-8">
          <h4 className="font-bold text-[40px]">Блог</h4>
          <button className=" hidden sm:flex items-center justify-center mb-[40px] gap-3 p-3 px-12  border border-black rounded-[100px] hover:bg-black hover:text-white transition duration-300 ease-in-out">
            Весь каталог
            <FaArrowRight />
          </button>
        </div>
        <div className="hidden sm:grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogItems.map((card) => (
            <div
              key={card.id}
              className=" flex justify-between p-4 border-b  sm:mb-[100px] hover:shadow-lg transition duration-300 ease-linear"
            >
              <div key={card.id} 
  className="flex justify-center ">
    <div className='flex flex-col gap-6'> 
      <div className='w-full'>
<img src={card.image} alt="#" className='max-w-full'/>
      </div>
      <div className='flex justify-between'>
        <div className='flex flex-col gap-6 w-[250px]'>
          <p className='font-bold text-sm'>{card.title}</p>
          <p className='text-[14px] font-medium'>{card.date}</p>
        </div>
        <MdArrowOutward className='w-6 h-6'/> 
      </div>
    </div>
  </div>
            </div>
          ))}
        </div>
        <Swiper
      className="brendSwiper"
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
      >
        {blogImages.map((image, index)=>(
 <SwiperSlide key={index}>
 <img src={image} alt="#" />
</SwiperSlide>
        ))}
      </Swiper>
      <button className="sm:hidden flex items-center justify-center mb-[40px] mt-8 gap-3 w-full h-[50px] border border-black rounded-[100px] hover:bg-black hover:text-white transition duration-300 ease-in-out">
          Весь каталог
          <FaArrowRight />
        </button>
        <div className='flex flex-col items-center text-center gap-10 my-[30px] sm:mb-[100px] sm:flex-row sm:justify-between sm:items-start sm:text-start'>
<span className='w-[330px] font-bold text-4xl'>Производство светильников</span>
<p className='w-[340px] max-w-full sm:w-[640px]'>
Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. y нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют. <br /><br />Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света c NORNLIGHT!
</p>
        </div>
    </div>
  )
}

export default Blog