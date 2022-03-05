import React from 'react';
import Logo from './Logo';
import { AiFillGithub } from 'react-icons/ai';

function Footer() {
  return (
      <div className=' mx-auto' id='footer'>
        <div className='bg-[#333333] flex flex-col lg:flex-row gap-y-10 lg:gap-y-0 justify-start lg:items-end lg:justify-between py-8 lg:py-5 px-4 lg:px-10'>
            <Logo footer={true} />
            <span className='text-white text-left lg:text-center text-base font-Poppins'>Copyright © 2021 Blockchain Solutions LLC. All Rights Reserved</span>
            <div className='flex gap-x-3'>
            <div className='flex bg-white items-center p-2 w-12 h-12 hover:cursor-pointer  rounded-lg'> <a href='https://github.com/Blockchain-Solutions-LLC' target="_blank"> <AiFillGithub className='text-4xl' /> </a> </div>
            <div className='flex bg-white items-center p-2 w-12 h-12  hover:cursor-pointer   rounded-lg'> <a href='https://twitter.com/AuthorDJR3' target="_blank"><img src='/Imgs/twitter.png' alt='logo'/></a></div>
            <div className='flex bg-white items-center p-2 w-12 h-12  hover:cursor-pointer   rounded-lg'><a href=' https://www.linkedin.com/in/djrthree/' target="_blank"><img src='/Imgs/linkedin.png' alt='logo'/></a></div>
            </div>
        </div>
      </div>
  );
}

export default Footer;
