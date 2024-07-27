import React from 'react'
import { GoDotFill } from "react-icons/go";
import { FaCamera } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdMail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import { NavLink } from 'react-router-dom';

const Footer = () => {

  const ScrollTop = () => {
    window.scroll({
      top:0,
      behavior: "smooth"
    })
  }
  return (

    <div className='w-full min-h-[70vh] '>
      <div className="w-full min-h-[55vh] bg-gray-900 text-white flex flex-col gap-5">
        <div className='flex flex-col lg:flex-row lg:justify-evenly'>
        <div className="text-center lg:w-[30%]">
          <h1 className='flex justify-center items-center gap-3 font-bold text-[50px]' >A <span><FaCamera /></span> ce</h1>
          <p className='p-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias itaque ad reprehenderit eligendi quos praesentium rem cum, ex et rerum repellat pariatur laborum mollitia vero iste, fugiat non neque perferendis!</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <h1>NAVIGATION</h1>
          <ul >
            <NavLink to={"/"} onClick={ScrollTop()}  className={({ isActive }) =>
            isActive ? "text-yellow-500" : "bg-white hover:bg-yellow-500"}>
            <li className='flex items-center gap-4 hover:cursor-pointer'><GoDotFill className='hover:text-yellow-500'/> <span>Home</span></li>
            </NavLink>
            
            
            <NavLink to={"/About"}  className={({ isActive }) =>
            isActive ? "text-yellow-500" : "bg-white hover:bg-yellow-500 "}
            ><li className='flex items-center gap-4 hover:cursor-pointer'><GoDotFill        className='hover:text-yellow-500'/> <span>About</span></li></NavLink>


            <NavLink  to={"/News"} className={({ isActive }) =>
            isActive ? "text-yellow-500" : "bg-white hover:bg-yellow-500 "}>
            <li className='flex items-center gap-4 hover:cursor-pointer'><GoDotFill className='hover:text-yellow-500'/> <span>News</span></li></NavLink>


            <NavLink to={"/Contact"} className={({ isActive }) =>
            isActive ? "text-yellow-500" : "bg-white hover:bg-yellow-500 "}>
            <li className='flex items-center gap-4 hover:cursor-pointer'><GoDotFill className='hover:text-yellow-500'/> <span>Contact Us</span></li></NavLink>

            <NavLink to={"/Login"} className={({ isActive }) =>
            isActive ? "text-yellow-500" : "bg-white hover:bg-yellow-500 "}>
            <li className='flex items-center gap-4 hover:cursor-pointer'><GoDotFill className='hover:text-yellow-500'/> <span>Login</span></li></NavLink>
          </ul>
        </div>
        <div className="flex justify-center items-center flex-col gap-5">
          <h1>CONTACT INFO</h1>
          <div className="flex justify-center items-center flex-col">
            <p className='text-yellow-500'>manintain Office Address:</p>
            <p className='flex justify-center items-center gap-2'><span><FaMapMarkerAlt /></span> Lorem ipusm New York, NY 36524</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <p className='text-yellow-500'>Customer Service:</p>
            <p className='flex justify-center items-center gap-2'><span><FiPhoneCall /></span> ( +01 1234567890 )</p>
            <p className='flex justify-center items-center gap-2'><span><MdMail /></span> </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-[25px]">DISCOVER</div>
          <div className="text-center flex flex-col gap-1">
            <p>Help</p>
            <p>How it Works</p>
            <p>Subscribe</p>
            <p>Contact Us</p>
            <p className=' flex justify-center items-center gap-5'>
              <a className='text-blue-500 cursor-pointer'><span><FaFacebookSquare /></span></a>
              <a className='text-blue-400 cursor-pointer'><span><FaSquareTwitter /></span></a>
              <a className='text-pink-600 cursor-pointer'><span><FaSquareInstagram /></span></a>
              <a className='text-blue-600 cursor-pointer'><span><FaLinkedin /></span></a>
            </p>
          </div>
        </div>
        </div>
        
        <div className=" flex flex-col px-[20px] py-[5px] lg:justify-center lg:items-center lg:gap-10">
          <h1 className='text-[25px]'>SUBSCRIBE</h1>
          <div className="flex w-[100%] items-center lg:w-[70%] lg:justify-center">
            <input type="text" placeholder='Enter your email ...' className='text-[25px] text-black border-none outline-none h-[50px] p-[10px] w-[100%]' />
            <button > <FaArrowRight className='bg-yellow-500 h-[50px] w-[50px] p-[10px]' /></button>
          </div>
        </div>

        
      </div>
      <div className="w-full min-h-[15vh] bg-yellow-500 text-white">
        <p className='p-[30px] text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut non nihil, saepe maiores, praesentium labore quibusdam molestiae vitae quae nemo fugit modi nam dicta obcaecati nostrum? Minus et dignissimos impedit!</p>
      </div>

      <div className='h-[100px] break-words text-white bg-gray-900 flex justify-center items-center font-bold text-lg' >
          Copyright <span className='text-yellow-500 underline px-3'>&copy</span>By <span className='text-yellow-500 px-3'>Creater</span> 
      </div>
    </div>
  )
}

export default Footer
