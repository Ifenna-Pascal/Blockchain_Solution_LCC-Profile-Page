import React from 'react';
import Logo from './Logo';

function Footer() {
  return (
      <div className='lg:container mx-auto' id='contact'>
        <div className='bg-[#BE173F] flex flex-col lg:flex-row gap-y-10 lg:gap-y-0 justify-start lg:items-center lg:justify-between py-10 lg:py-20 px-8 lg:px-20'>
            <Logo footer={true} />
            <span className='text-white text-left lg:text-center text-base font-Poppins'>Copyright © 2021 Blockchain Solutions LLC. All Rights Reserved</span>
            <div className='flex gap-x-3'>
            <div className='flex bg-white items-center p-2 w-12 h-12  rounded-lg'><img src='/Imgs/github.png' alt='logo'/></div>
            <div className='flex bg-white items-center p-2 w-12 h-12  rounded-lg'><img src='/Imgs/twitter.png' alt='logo'/></div>
            <div className='flex bg-white items-center p-2 w-12 h-12  rounded-lg'><img src='/Imgs/linkedin.png' alt='logo'/></div>
            </div>
        </div>
      </div>
  );
}

export default Footer;
