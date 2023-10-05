import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"
import Blacklogo from "../assets/images/blacklogostrip.png"

const Navbar = () => {
  return (
    <div>
        <nav className='flex justify-between md:px-20 uppercase items-center mb-4 fixed top-0 bg-[#FFD700] w-full h-20 z-50'>
            <img src={Blacklogo} alt="logo" className='w-[150px]' />
            <ul className='md:flex space-x-12 font-semibold hidden'>
                <li className='hover:cursor-pointer hover:text-gray-400'><a href="#">CATEGORIES</a></li>
                <li className='hover:cursor-pointer hover:text-gray-400'><a href="#">ABOUT US</a></li>
                <li className='hover:cursor-pointer hover:text-gray-400'><a href="#">TEAM</a></li>
            </ul>
            <div className='md:flex items-center relative hidden'>
            <input type="text" placeholder='Enter your search term' className='border-2 px-8 py-1  outline-[#FFD700] rounded-2xl' />
            <i className='text-xl font-bold hover:cursor-pointer hover:text-gray-400 absolute right-3 text-[#FFD700]'>
                <AiOutlineSearch />
            </i>
            </div>
            
            
        </nav>
    </div>
  )
}

export default Navbar