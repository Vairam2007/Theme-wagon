import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <>
      <div className="w-full flex justify-evenly h-[10vh] bg-gray-200">
        <div className="flex h-[10vh] items-center">
          <img
            src="/assets/logo-black.png"
            alt="logo"
            className="w-[150px] h-[40%]"
          />
        </div>
        <div className="flex text-white justify-center items-center">
          <div className="block md:hidden cursor-pointer">
            <img
              src="/assets/menu.png"
              className="h-10"
              onClick={handleOpen}
            />
          </div>

          <ul className="hidden md:flex ">
            
          <NavLink to={"/"} className={({ isActive }) =>
    isActive ? "bg-yellow-500 mx-[10px]" : "bg-white hover:bg-yellow-500 mx-[10px]"
  } >
            <li className="list-none px-[20px] py-[10px]  text-black  cursor-pointer">
               Home
            </li>
            </NavLink>

            <NavLink to={"/About"} className={({ isActive }) =>
    isActive ? "bg-yellow-500 mx-[10px]" : "bg-white hover:bg-yellow-500 mx-[10px]"
  }>
            <li className="list-none px-[20px] py-[10px]  text-black  cursor-pointer">
               About
            </li>
            </NavLink>

            <NavLink to={"/News"} className={({ isActive }) =>
    isActive ? "bg-yellow-500 mx-[10px]" : "bg-white hover:bg-yellow-500 mx-[10px]"
  }>
            <li className="list-none px-[20px] py-[10px] text-black  cursor-pointer">
               News
            </li>
            </NavLink>

            <NavLink to={"/Contact"} className={({ isActive }) =>
    isActive ? "bg-yellow-500 mx-[10px]" : "bg-white hover:bg-yellow-500 mx-[10px]"
  }> 
            <li className="list-none px-[20px] py-[10px] text-black  cursor-pointer">
              Contact
            </li>
            </NavLink>

            <NavLink to={"/Login"} className={({ isActive }) =>
    isActive ? "bg-yellow-500 mx-[10px]" : "bg-white hover:bg-yellow-500 mx-[10px]"
  }> 
            <li className="list-none px-[20px] py-[10px] text-black  cursor-pointer">
               Login
            </li>
            </NavLink>
            
            <li className="list-none px-[20px] py-[10px]  hover:bg-yellow-500 rounded-[15px] text-black bg-white cursor-pointer duration-500 hover:text-black">
              <a>
                <img src="/assets/search-icon.png" alt="seacrch" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {open && (
        <div className="w-full min-h-[300px] p-[10px]  md:hidden flex flex-col justify-center items-center text-center">
          <NavLink to={"/"} className={({ isActive }) =>
    isActive ? "bg-yellow-500 my-[10px]" : "bg-white hover:bg-yellow-500 my-[10px]"
  } >
            <li className="list-none px-[20px] py-[10px] w-[100px]  text-black  cursor-pointer duration-500 hover:text-black">
               Home
            </li>
            </NavLink>

            <NavLink to={"/About"} className={({ isActive }) =>
    isActive ? "bg-yellow-500 my-[10px]" : "bg-white hover:bg-yellow-500 my-[10px]"
  }>
            <li className="list-none px-[20px] py-[10px] w-[100px] text-black  cursor-pointer duration-500 hover:text-black">
               About
            </li>
            </NavLink>

            <NavLink to={"/News"} className={({ isActive }) =>
    isActive ? "bg-yellow-500 my-[10px]" : "bg-white hover:bg-yellow-500 my-[10px]"
  }>
            <li className="list-none px-[20px] py-[10px] w-[100px]  hover:bg-yellow-500 text-black  cursor-pointer duration-500 hover:text-black">
               News
            </li>
            </NavLink>

            <NavLink to={"/Contact"} className={({ isActive }) =>
    isActive ? "bg-yellow-500 my-[10px]" : "bg-white hover:bg-yellow-500 my-[10px]"
  }> 
            <li className="list-none px-[20px] py-[10px] w-[100px]  hover:bg-yellow-500 text-black  cursor-pointer duration-500 hover:text-black">
              Contact
            </li>
            </NavLink>

            <NavLink to={"/Login"} className={({ isActive }) =>
    isActive ? "bg-yellow-500 my-[10px]" : "bg-white hover:bg-yellow-500 my-[10px]"
  }> 
            <li className="list-none px-[20px] py-[10px] w-[100px]   hover:bg-yellow-500  text-black  cursor-pointer duration-500 hover:text-black">
               Login
            </li>
            </NavLink>
          <li className="flex justify-center cursor-pointer duration-500 hover:text-black border-[2px] border-yellow-500 list-none px-[20px] py-[10px] mx-[10px] hover:bg-yellow-500 rounded-[15px]">
            <img src="public/assets/search-icon.png" alt="seacrch" />
          </li>
        </div>
      )}
    </>
  );
};

export default Navbar;
