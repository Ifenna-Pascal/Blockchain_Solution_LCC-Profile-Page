import React from 'react';
import bg from "../images/header.jpg";
import { animateScroll as scroll } from "react-scroll";
import { Zoom } from 'react-reveal';

function Hero() {
  return (
    <div className='hero lg:container mx-auto' style={{ height: "calc(100vh - 7rem)"}}>
             <div style={{backgroundImage: `url(${bg})`}} className='mb-6 w-[100%] h-full md:container mx-auto bg-no-repeat bg-cover'>
          <div className='py-12 mx-auto items-center w-full justify-center h-full  md:justify-between flex'>
            <Zoom delay={1000}>
            <div className='flex md:text-left text-center flex-col mb-10 md:mb-0 items-center md:items-start  flex-1 gap-y-4'>
                <div className="flex uppercase gap-x-2 items-center">
                    <div className="w-8 h-[3px] bg-white"></div>
                    <span className="text-white font-thin uppercase tracking-wider text-xl font-normal uppercase font-Catamaran">
                        our mission   
                    </span>
                </div>
                    <h1 className='font-Poppins uppercase text-[#BE173F] text-center md:ml-0  md:text-left font-[1000] text-5xl md:text-7xl lg:text- ' >Connecting<span className='text-white'> You</span></h1>
                    <h1 className='font-Poppins text-white font-normal text-4xl md:text-6xl lowercase text-left'>to the <span className='uppercase text-[#BE173F]'>future</span> </h1>
                    <p className='font-normal -mt-1 capitalize text-white font-Poppins text-xl text-left md:w-[50%]'>Web and Blockchain Solution</p>
                    <div className='flex flex-col items-start justify-start mt-6'><button className='bg-[#BE173F] w-full text-white text-lg font-Poppins px-16 py-4 rounded-lg'  onClick={() => scroll.scrollToBottom()}>Contact us</button></div>
            </div>
            </Zoom>
      </div>
     </div>
    </div>
  );
}

export default Hero;
