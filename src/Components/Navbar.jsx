import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import Blacklogo from "../assets/images/blacklogostrip.png";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const toggleMobileNavOn = () => {
    setNavbar(true);
    console.log(navbar);
  };
  const toggleMobileNavOff = () => {
    setNavbar(false);
    console.log(navbar);
  };
  return (
    <div>
      <nav className="flex justify-between md:px-20 uppercase items-center mb-4 fixed top-0 bg-[#FFD700] w-full h-20 z-50 pr-5">
        <img src={Blacklogo} alt="logo" className="w-[150px]" />
        <ul className="md:flex space-x-12 font-semibold hidden">
          <li className="hover:cursor-pointer hover:text-gray-400">
            <a href="#">CATEGORIES</a>
          </li>
          <li className="hover:cursor-pointer hover:text-gray-400">
            <a href="#">ABOUT US</a>
          </li>
          <li className="hover:cursor-pointer hover:text-gray-400">
            <a href="#">TEAM</a>
          </li>
        </ul>
        <div className="md:flex items-center relative hidden">
          <input
            type="text"
            placeholder="Enter your search term"
            className="border-2 px-8 py-1  outline-[#FFD700] rounded-2xl"
          />
          <i className="text-xl font-bold hover:cursor-pointer hover:text-gray-400 absolute right-3 text-[#FFD700]">
            <AiOutlineSearch />
          </i>
        </div>
        <div onClick={!navbar ? toggleMobileNavOn : ""}>
            <i className="text-3xl">
            <AiOutlineMenu />
            </i>
          
          {navbar && (
            <div className="absolute top-0 p-10 bg-[#FFD700] h-[100vh] w-[100vw] right-0">
                <div className="flex items-center  justify-between mb-10">
                <div className="h-1 w-1"></div>
                <i className="text-2xl" onClick={toggleMobileNavOff}>
                <AiOutlineClose />
                </i>
                </div>
              
              <ul className="md:flex space-y-4 font-semibold">
                <li className="hover:cursor-pointer hover:text-gray-400">
                  <a href="#">CATEGORIES</a>
                </li>
                <li className="hover:cursor-pointer hover:text-gray-400">
                  <a href="#">ABOUT US</a>
                </li>
                <li className="hover:cursor-pointer hover:text-gray-400">
                  <a href="#">TEAM</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
