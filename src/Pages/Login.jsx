import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div
        data-aos="fade-in"
        className="w-full h-[100vh] flex flex-col justify-center items-center"
        style={{ backgroundImage: "url('public/assets/contact-bg.jpg')" }}
      >
        <div
          className=" py-[20px] w-[500px] lg:w-[50%] rounded-[30px] p-[20px flex justify-center items-center flex-col gap-10"
          style={{
            backgroundImage: "url('public/assets/contact-bg.jpg')",
            backgroundSize: "cover",
          }}
        >
          <h1 className="font-bold text-center text-[50px] ">Login</h1>
          <form className="flex flex-col justify-center items-center">
            <div>
              <label
                htmlFor="name"
                className="inline-block w-[120px] text-[25px]"
              >
                Name :
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Enter name"
                className="p-[10px] rounded-[25px] border-none outline-none w-[250px]"
              />
            </div>
            <br />
            <div>
              <label
                htmlFor="password"
                className="inline-block w-[120px] text-[25px]"
              >
                Password :
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter name"
                className="p-[10px] rounded-[25px] border-none outline-none w-[250px]"
                required
              />
            </div>
            <br />
            <div>
              <label
                htmlFor="email"
                className="inline-block w-[120px] text-[25px]"
              >
                Email :
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter name"
                className="p-[10px] rounded-[25px] border-none outline-none w-[250px]"
                required
              />
            </div>
            <br />

            <button
              type="submit"
              className="bg-yellow-500 px-[30px] py-[10px] rounded-[30px] border-[2px] border-yellow-500 hover:border-blue-500 hover:bg-blue-400 hover:text-white"
            >
              <Link to={"/"}>Log in</Link>
            </button>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Login;
