import React from 'react';
import { animateScroll as scroll } from "react-scroll";

function Logo({footer}) {
  return (
      <div onClick={() => scroll.scrollToTop()} className='flex items-start hover:cursor-pointer gap-x-1  md:justify-center'>
          <div>
              <img src='/Imgs/Blockchain 1.png' alt='Logo'  />
          </div>
          <div className='flex flex-col items-start justify-start'>
              <span className={`uppercase text-white font-Inter ${footer ? "text-xl md:text-3xl" : "text-lg"} font-bold tracking-wider`}>Blockchain</span>
              <span className={`${footer ? "font-semibold font-Inter tracking-wider text-base md:text-lg" : "font-thin text-base" } text-white -mt-1`}>Solution LLC</span>
          </div>
      </div>
  );
}

export default Logo;
