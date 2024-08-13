import React from "react";

const Home_comp = () => {
  return (
    <div
      className="w-full min-h-[100vh] flex flex-col xl:flex-row justify-center gap-0 md:gap-10 items-center p-[20px] overflow-x-hidden"
      style={{ background: "url('/assets/hero-bg.jpg') no-repeat" ,backgroundSize: "cover" } } 
    >
      <div className="w-full lg:w-[50%] min-h-[50vh] gap-7 flex-col flex items-center justify-center p-5 md:gap-10" >
        <h1 className="md:text-[50px] text-[35px] font-bold text-center" data-aos="fade-up" >CREATEIVE PHOTOGRAPHY</h1>
        <p className="text-[20px] text-center" data-aos="fade-up"> 
          There are many variation of passages of Lorem ipsum
        </p>
        <div className="flex mb-[50px] sm:mb-0 flex-col sm:flex-row w-[90%] justify-center gap-10">
          <button className="bg-yellow-500 hover:shadow-md hover:shadow-yellow font-semibold px-[50px] py-[10px] rounded hover:bg-white border-[2px] border-yellow-500 hover:text-yellow-600" data-aos="fade-up-right" >
            Contact
          </button>
          <button className="bg-gray-950 border-gray-950 hover:shadow-md hover:shadow-black border-2 font-semibold hover:bg-white hover:text-black text-white px-[50px] py-[10px] rounded" data-aos='fade-up-left'>
            About Us
          </button>
        </div>
      </div>
      <div className="w-full lg:w-[50%] flex justify-center items-end gap-10" data-aos="fade-left">
        <div className="flex flex-col lg:flex-row xl:w-[90%] justify-center flex-wrap gap-8 p-[20px]">
          <img
            className="rounded w-[200px] h-[200px]"
            src="/assets/img-1.jpg"
            alt="img-1"
          />
          <img
            className="rounded w-[200px] h-[200px]"
            src="/assets/img-2.jpg"
            alt="img-2"
          />
          <img
            className="rounded w-[200px] h-[200px]"
            src="/assets/img-3.jpg"
            alt="img-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home_comp;
