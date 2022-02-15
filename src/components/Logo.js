import React from 'react';
import { animateScroll as scroll } from "react-scroll";

function Logo({footer}) {
  return (
      <div onClick={() => scroll.scrollToTop()} className='flex px-3 items-start hover:cursor-pointer gap-x-1  md:justify-start'>
          <div>
              <img src='/Imgs/company_logo.png' alt='Logo'  />
          </div>
          <div className='flex flex-col items-start justify-start'>
              <span className={`uppercase text-white font-Inter ${footer ? "text-xl md:text-2xl lg:text-3xl" : "text-lg"} font-bold tracking-wider`}>Blockchain</span>
              <span className={`${footer ? "font-semibold font-Inter tracking-wider text-base lg:text-lg" : "font-semibold text-base" } text-white -mt-1`}>Solution LLC</span>
          </div>
      </div>
  );
}

export default Logo;
