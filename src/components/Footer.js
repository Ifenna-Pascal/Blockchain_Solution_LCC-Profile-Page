import React from 'react';
import Logo from './Logo';

function Footer() {
  return (
      <div className='container mx-auto' id='contact'>
        <div className='bg-[#BE173F] flex items-center justify-between py-20  px-20'>
            <Logo footer={true} />
            <span className='text-white tet-base font-Poppins'>Copyright © 2021 Blockchain Solutions LLC. All Rights Reserved</span>
            <div className='flex gap-x-3'>
            <div className='flex bg-white items-center p-2 w-12 h-12  rounded-md'><img src='/Imgs/github.png' alt='logo'/></div>
            <div className='flex bg-white items-center p-2 w-12 h-12  rounded-md'><img src='/Imgs/twitter.png' alt='logo'/></div>
            <div className='flex bg-white items-center p-2 w-12 h-12  rounded-md'><img src='/Imgs/linkedin.png' alt='logo'/></div>
            </div>
        </div>
      </div>
  );
}

export default Footer;
