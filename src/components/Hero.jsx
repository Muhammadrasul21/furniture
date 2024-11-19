import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import lamp from "../assets/lamp.svg";

const Hero = () => {
  return (
    <div className="container max-w-[1332px] mx-auto px-4 py-6 mt-[50px]">
      <div className="flex justify-between items-center bg-[#F2F2F2] rounded-[50px] p-6">
        <div className="flex flex-col gap-4">
          <h4 className="text-xl font-semibold">
            Скидка 15% на все подвесные светильники
          </h4>
          <button className="w-[200px] py-2 px-4 bg-[#454545] text-white rounded-3xl hover:bg-black transition duration-300">
            до 5 февраля
          </button>
        </div>
        <div className="flex justify-center items-center w-[400px]">
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
