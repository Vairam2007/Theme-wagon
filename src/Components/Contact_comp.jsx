import React from 'react'

const Contact_comp = () => {
  return (
    <div className='w-full min-h-[100vh] flex justify-center items-center' style={{background:"url('public/assets/contact-bg.jpg')",backgroundSize:"cover"}}>
        <div className="w-[90%] min-h-[90vh] p-[20px] flex flex-col lg:flex-row gap-10 ">
            <div data-aos="fade-right" className="flex flex-col gap-10 w-full lg:w-[50%] h-[80vh]">
                <h1 className='text-white text-[30px] font-bold'>Get in Touch</h1>
                <form className='flex flex-col gap-10' >
                    <input type="text" placeholder='Name' className='w-full border-none outline-none rounded-[50px] px-[20px] py-[10px]'/>
                    <input type="text" placeholder='Email' className='w-full border-none outline-none rounded-[50px] px-[20px] py-[10px]'/>
                    <input type="text" placeholder='Phone Number' className='w-full border-none outline-none rounded-[50px] px-[20px] py-[10px]'/>
                    <input placeholder='Message' className='border-none outline-none p-[20px] rounded-[20px] h-[150px]'></input>
                </form>
                <div className="w-full flex justify-center items-center">
                    <button className='bg-yellow-500 py-[10px] px-[30px] rounded-[30px] shadow-md shadow-black hover:bg-yellow-400 '>Send</button>
                </div>
            </div>
            <div data-aos="fade-left" className="w-full lg:w-[50%] h-[60vh] relative lg:h-[60vh]  lg:translate-y-[25%] ">
                
                <img data-aos="fade-left" src="public/assets/p-1.jpg" className='w-[300px] h-[300px] absolute top-0 left-0 z-0' />
                <img data-aos="fade-right" src="public/assets/p-2.jpg" className='w-[300px] h-[300px] absolute bottom-0 right-0 z-1' />
                <div className='z-2 w-[300px] h-[300px] -translate-x-[50%] -translate-y-[50%] absolute top-[50%]  left-[50%] z-0 text-white font-bold flex flex-col justify-center items-center gap-5 text-[30px] bg-gray-900 bg-opacity-90'> <span>BEST</span> <span>PHOTO</span> <span>STUDIO</span> <span>Contact Us</span> </div>
            </div>
        </div>
    </div>
  )
}

export default Contact_comp
