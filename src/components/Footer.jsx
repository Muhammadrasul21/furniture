import React from "react";
import logo from "../assets/logo.svg";
import visa from "../assets/visa.png";
import { navItems, socialMedia, footerInfo, ulInfo } from "../stock/index";

const Footer = () => {
  return (
    <footer className="bg-[#F2F2F2] p-20">
      <div className="container max-w-[1332px] mx-auto px-4">
        <div className="flex flex-wrap justify-between sm:flex gap-10">
          <div className="flex flex-col gap-9">
            <div className="flex gap-[15px]">
              <img src={logo} alt="" />
              <p className="text-2xl leading-9">NORLIGHT</p>
            </div>
            <p>8 (800) 890-46-56</p>
            <img src={visa} alt="#" className="w-[222px] h-10" />
            <a href="#" className="opacity-40 decoration-auto underline block">
              конфидециальности
            </a>
            <a href="#" className="opacity-40 decoration-auto underline">
              Пользовательское соглашение
            </a>
            <div className="flex gap-3">
              {socialMedia.map((item, index) => (
                <div
                  key={index}
                  className="w-9 h-9 border border-black rounded-full flex items-center justify-center"
                >
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <ul className="flex flex-col gap-7">
            <p>Покупателям</p>
            {footerInfo.map((item, index) => (
              <li className="opacity-50" key={index}>
                {item}
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-7">
            <p>Товары</p>
            {navItems.map((item, index) => (
              <li className="opacity-50" key={index}>
                {item}
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-7">
            {ulInfo.map((item, index) => (
              <li className="opacity-50" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
