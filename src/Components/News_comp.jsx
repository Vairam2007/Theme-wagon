import React from 'react'

const News_comp = () => {
  return (
    <div className="w-full min-h-[100vh] p-0 lg:p-[50px] flex flex-col gap-10 overflow-x-hidden ">
      <div data-aos="fade-down" className=' flex flex-col justify-center items-center'>
        <h1 className='text-[30px] font-bold' >Letest News</h1>
        <p className='p-[10px]'>lorem Ipsum available, but the majority</p>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-10 justify-center items-center p-0 lg:p-[20px]">
        <div data-aos="fade-right" className="lg:w-[50%] w-[80%]">
            <img src="/assets/n-1.jpg" className='w-full' />
            <h3 className='font-semibold text-[25px]'>Teration in some form, by injected humour</h3>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
        </div>
        <div data-aos="fade-left" className="lg:w-[50%] w-[80%]">
            <img src="/assets/n-2.jpg" className='w-full' />
            <h3 className='font-semibold text-[25px]'>Teration in some form, by injected humour</h3>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
        </div>
      </div>
    </div>
  )
}

export default News_comp
