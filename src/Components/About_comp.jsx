import React from 'react'

const About_comp = () => {
  return (
    <div className='w-full py-[50px] min-h-[100vh] flex flex-col lg:flex-row'>
      <div className="flex justify-center items-center flex-wrap w-full">
      <div className=" w-[80%] min-h-[60%]  flex flex-wrap justify-around items-center gap-5 flex-col ">
        <div data-aos="fade-down" className="w-[400px] h-[300px] flex justify-center md:justify-start">
            <div className="w-[300px] h-[300px] flex items-center bg-slate-300  md:items-start">
                <img className='max-w-[300px] max-h-[250px]' src="public/assets/a-1.jpg" alt="about-img-1" />
            </div>
        </div>
        <div data-aos="fade-up" className="w-[400px] h-[300px]  flex justify-center md:justify-end">
            <div className="w-[300px] h-[300px] flex items-center bg-slate-300  md:items-end">
                <img className='w-[300px] h-[250px]' src="public/assets/a-2.jpg" alt="about-img 2" />
            </div>
        </div>
      </div>
      </div>
      <div data-aos="fade-left" className='w-full min-h-[50%]  flex justify-center items-center ' >
        <div className="w-full h-[300px] gap-0 lg:gap-10 flex flex-col justify-start">
            <h1 className='text-[40px] font-bold px-[20px] '>About Our Studio</h1>
            <p className='text-[20px] p-[20px] lg:p-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatum enim, quibusdam rerum dignissimos nobis! Incidunt reprehenderit ea dolores! Odit porro libero at nemo nobis voluptas ea illum repellat aut.</p>
            <button className='w-[150px] h-[50px] border-2 rounded border-yellow-500 text-white hover:text-yellow-500 bg-yellow-500 hover:bg-white mx-[20px] lg:mx-0'> Read More</button>
        </div>
      </div>
    </div>
  )
}

export default About_comp
