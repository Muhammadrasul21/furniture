import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { FiMenu } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { FaSignal } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { navItems } from "../stock/index";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="bg-white">
      <div className="container max-w-[1332px] mx-auto px-4">
        <div className="navbarTop hidden sm:flex justify-between py-4">
          <div className="flex gap-7">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="opacity-60 hover:opacity-100 transition duration-300 ease-in-out"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex gap-6 text-[#454545]">
            <p className="opacity-60 hover:opacity-100 transition duration-300 ease-in-out">
              8 (800) 890-46-56
            </p>
            <p className="opacity-60 hover:opacity-100 cursor-pointer transition duration-300 ease-in-out">
              Заказать звонок
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-6">
            <img src={logo} alt="logo" className="w-7 h-7" />
            <h2 className="text-2xl leading-9">NORLIGHT</h2>
          </div>

          <div className="hidden lg:flex items-center gap-6 ">
            <div className="w-[153px] h-[50px] flex items-center justify-center rounded-3xl gap-1 text-white bg-[#454545] px-[14px] py-[14px] hover:bg-black transition duration-300">
              <FiMenu className="text-xl" />
              <span>Каталог</span>
            </div>
            <div className="w-[625px] h-[50px] flex justify-between border border-black rounded-3xl p-4">
            <input
  type="text"
  placeholder="Поиск по товарам"
  className="h-[20px] border-none outline-none w-[500px]"
  aria-label="Search products"
/>

              <IoIosSearch className="w-5 h-5" />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col items-center gap-1">
              <CiHeart className="w-6 h-6" />
              <p className="text-xs">Избранное</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <FaSignal className="w-6 h-6 hidden md:block xl:hiden" />
              <p className="text-xs hidden md:block">Сравнение</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <FaCartShopping className="w-5 h-6" />
              <p className="text-xs">Корзина</p>
            </div>
          </div>
        </div>

        <div className="sm:hidden flex items-center" onClick={toggleMenu}>
          <FiMenu className="text-2xl" />
        </div>

        {isMenuOpen && (
          <div className="sm:hidden bg-white p-4 absolute top-0 right-0 w-full z-10">
            <div className="flex justify-between border-b-2 border-black-opacity-50">
              <div className="flex justify-between mb-[20px]">
                <RxCross2
                  className="w-6 h-6 cursor-pointer"
                  onClick={toggleMenu}
                />
              </div>
              <div className="flex gap-10 mb-[20px]">
                <CiHeart className="w-6 h-6" />
                <FaSignal className="w-6 h-6" />
                <FaCartShopping className="w-6 h-6" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-lg border-b-2 border-black-opacity-50 opacity-50 w-full text-center h-[50px] flex items-center justify-center"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="flex justify-center">
              <div className="w-[153px] h-[50px] mt-3 flex items-center justify-center rounded-3xl gap-1 text-white bg-[#454545] px-[14px] py-[14px] hover:bg-black transition duration-300">
                <FiMenu className="text-xl" />
                <span>Каталог</span>
              </div>
              <p>8 (800) 890-46-56</p>
              <span className="opacity-10">Заказать звонок</span>
            </div>
          </div>
        )}

        <div className="sm:hidden flex flex-col items-center gap-4 mt-4 ">
          <div className="w-full flex justify-center gap-4">
            <div className="w-[80%] h-[50px] flex justify-between border border-black rounded-3xl p-4 mb-4">
              <input
                type="text"
                placeholder="Поиск по товарам"
                className="h-[20px] w-[328px] border-none outline-none"
              />
              <IoIosSearch className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
