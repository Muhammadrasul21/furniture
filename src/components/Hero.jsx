import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import lamp from "../assets/lamp.svg";
import "./Hero.css";


const Hero = () => {
  return (
    <div className="container max-w-[1332px] mx-auto px-4 py-6 sm:mt-[50px]">
      <div className="flex flex-col-reverse justify-center items-center text-center md:flex-row  bg-[#F2F2F2] rounded-[50px] pb-4 gap-8  relative">
        <div className="flex flex-col items-start gap-4  mt-4">
          <h4 className="font-bold font sm:w-[599px] text-4xl mb-5  sm:text-6xl w-[250px] leading-tight text-start">
            Скидка 15% на все подвесные светильники
          </h4>
          <button className="text-xl w-auto sm:text-5xl pb-3 px-5 flex justify-center items-center text-white rounded-[100px] bg-black transition duration-300 hover:bg-[#454545]">
            до 5 февраля
          </button>
        </div>
        <div className="flex justify-center items-center w-[400px] max-w-full">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide className="mb-12">
              <img src={lamp} alt="#" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={lamp} alt="#" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={lamp} alt="#" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
