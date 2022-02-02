import React from 'react';
import { Fade } from 'react-reveal';

function Contact() {
  return (
      <div className='bg-black md:container my-24 w-full'>
          <div className='md:w-[85%] mx-auto'>
            <div className='flex flex-col lg:flex-row items-center justify-between'>
                <div className='lg:w-[42%] md:w-[90%] w-full px-4 md:px-0 mx-5 lg:mx-0 mb-10  mr-16 '> 
                   <Fade bottom={true}> <img src="/Imgs/contact.svg" className='w-full bg-cover' /></Fade>
                </div>
               <div className='md:flex-1 w-[90%] mx-auto md:w-full justify-items-start md:justify-start justify-center justify-self-start'>
               <div className="flex capitalize mb-8 md:mb-16 gap-x-2 text-center items-center md:justify-center">
                    <div className="w-10 h-[4px] bg-[#eb6282]"></div>
                        <span className="text-white  text-[#BE173F] text-lg font-normal text-center  font-Poppins">
                            Get Help
                        </span>
                    </div>
                   <form>
                   <div className='grid gap-x-7  md:grid-cols-2 grid-cols-1 gap-y-4 md:gap-y-7'>
                    <input type="text" className='py-5 col-span-2 md:col-span-1 rounded-md px-5 md:text-lg tracking-wide text-gray-700 font-semibold font-Poppins' placeholder="Name" />
                    <input type="text" className='py-5 rounded-md px-5 md:text-lg col-span-2 md:col-span-1 tracking-wide text-gray-700 font-semibold font-Poppins'  placeholder="Email" />
                    <div className='col-span-2'>
                        <textarea placeholder="Message"  className='py-5 md:h-[14rem] h-[8rem] rounded-md px-5 text-lg tracking-wide text-gray-700 font-semibold font-Poppins w-full' ></textarea>
                    </div>
                   <div className='col-span-2 md:w-[70%] justify-self-start  mx-auto'>
                    <button className='bg-[#BE173F] md:justify-self-center -ml-40 md:-ml-0   md:w-[60%] mb-6 text-white text-lg font-Poppins px-10 py-4 rounded-lg'>Contact us</button>
                   </div>
                </div>
                   </form>
               </div>
            </div>
          </div>
      </div>
  );
}

export default Contact;
