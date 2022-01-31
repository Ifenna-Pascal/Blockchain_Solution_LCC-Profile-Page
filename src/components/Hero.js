import React from 'react';
import bg from "../images/blue_bg.svg";
import { animateScroll as scroll } from "react-scroll";

function Hero() {
  return (
    <div className='md:container mx-auto'>
             <div style={{backgroundImage: `url(${bg})`}} className='h-[36rem] md:h-[42rem] mb-6 w-[100%] md:container mx-auto bg-no-repeat bg-cover'>
          <div className='py-12 mx-auto items-center w-full justify-center h-full  md:justify-between flex'>
            <div className='flex md:text-left text-center flex-col  items-center md:mx-0 md:items-start  md:justify-self-start  flex-1 gap-y-4'>
                <div className="flex uppercase gap-x-2 items-center  ">
                    <div className="w-8 h-[3px] bg-white"></div>
                    <span className="text-white font-thin uppercase tracking-wider text-lg font-normal uppercase font-Catamaran">
                        our company 
                    </span>
                </div>
                    <h1 className='font-Poppins uppercase text-[#BE173F] text-center md:ml-0  md:text-left font-[1000] text-5xl md:text-6xl ' >Block<span className='text-white'>Chain</span></h1>
                    <h1 className='font-Poppins text-white font-normal text-5xl lowercase text-left md:w-[70%]'>Solutions<span className='uppercase text-[#BE173F]'>LCC</span> </h1>
                    <p className='font-normal -mt-1 capitalize text-white font-Poppins text-xl text-left md:w-[50%]'>How it works</p>
                    <div className='w-[80%] flex flex-col items-start justify-start mt-6'><button className='bg-[#BE173F] w-full text-white font-base font-Poppins px-10 py-4 rounded-lg'  onClick={() => scroll.scrollToBottom()}>Contact us</button></div>
            </div>
            <div className='md:flex md:visible invisible items-center justify-center flex-1 p-6'>
                <img src='/Imgs/hero1.png' alt='hero image' className='w-full' />
            </div>
      </div>
     </div>
    </div>
  );
}

export default Hero;
