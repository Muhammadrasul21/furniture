import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import lamp from "../assets/lamp.svg";
 
const Hero = () => {
  return (
    <div className="container max-w-[1332px] mx-auto px-4 py-6 mt-[50px]">
      <div className="flex flex-col-reverse justify-center items-center text-center md:flex-row  bg-[#F2F2F2] rounded-[50px] p-6 gap-8 ">
        <div className="flex flex-col gap-4  mt-4">
          <h4 className="font-bold font sm:w-[599px] text-4xl mb-5  sm:text-6xl w-[250px] leading-tight text-start">
            Скидка 15% на все подвесные светильники
          </h4>
          <button className="w-[200px] h-10 text-md sm:w-[495px] sm:h-[86px] sm:text-6xl flex justify-center items-center text-white rounded-[100px] bg-black transition duration-300 hover:bg-[#454545]">
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
            <SwiperSlide>
              <img src={lamp} alt="Lamp 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={lamp} alt="Lamp 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={lamp} alt="Lamp 3" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
