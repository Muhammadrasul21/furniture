import React from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { brendImages } from "../stock";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import arte from "../assets/arte.png"
import divinare from "../assets/divinare.png"
import odeon from "../assets/odeon.png"

const Brend = () => {
  return (
    <div className="container max-w-[1332px] mx-auto px-4">
      <div className="flex justify-between mb-8 pt-16">
        <h4 className="font-bold text-[40px]">Только проверенные бренды</h4>
        <div className="flex gap-4">
          <button className="hidden sm:flex items-center justify-center mb-[40px] p-3 px-6 border border-black opacity-50 rounded-[100px] hover:opacity-100 transition duration-300 ease-in-out">
            <FaArrowLeftLong />
          </button>
          <button className="hidden sm:flex items-center justify-center mb-[40px] p-3 px-6 border border-black opacity-50 rounded-[100px] hover:opacity-100 transition duration-300 ease-in-out">
            <FaArrowRightLong />
          </button>
        </div>
      </div>
      <div className="hidden place-items-center gap-5 mt-[72px] sm:grid mb-[100px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {brendImages.map((image, index) => (
          <div key={index} className="hover:shadow-2xl transition duration-300 ease-in-out">
            <img src={image} alt={`Brend ${index + 1}`} />
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
        <SwiperSlide>
          <img src={arte} alt="#" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={divinare}  alt="#" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={odeon} alt="#" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={arte} alt="#" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={divinare}  alt="#" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={odeon} alt="#" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={divinare}  alt="#" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={odeon} alt="#" />
        </SwiperSlide>  
      </Swiper>
    </div>
  );
};

export default Brend;
