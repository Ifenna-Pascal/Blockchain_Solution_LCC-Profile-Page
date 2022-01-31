import React from 'react';

function Contact() {
  return (
      <div className='bg-black container my-20 w-full'>
          <div className='w-[85%] mx-auto'>
            <div className='flex items-center justify-between'>
                <div className='w-[42%] mr-16 '> 
                    <img src="/Imgs/contact.svg" className='w-full bg-cover' />
                </div>
               <div className='flex-1'>
               <div className="flex capitalize mb-16 gap-x-2 text-center items-center justify-center">
                    <div className="w-10 h-[4px] bg-[#eb6282]"></div>
                        <span className="text-white  text-[#BE173F] text-lg font-normal text-center  font-Poppins">
                            Get Help
                        </span>
                    </div>
                   <form>
                   <div className='grid gap-x-7 md:grid-cols-2 grid-cols-1 gap-y-7'>
                    <input type="text" className='py-5 rounded-md px-5 text-lg tracking-wide text-gray-700 font-semibold font-Poppins' placeholder="Name" />
                    <input type="text" className='py-5 rounded-md px-5 text-lg tracking-wide text-gray-700 font-semibold font-Poppins'  placeholder="Email" />
                    <div className='col-span-2'>
                        <textarea placeholder="Message"  className='py-5 h-[14rem] rounded-md px-5 text-lg tracking-wide text-gray-700 font-semibold font-Poppins w-full' ></textarea>
                    </div>
                   <div className=' col-span-2 w-[70%] mx-auto'>
                    <button className='bg-[#BE173F] justify-self-center w-[60%] mb-6 text-white text-lg font-Poppins px-10 py-4 rounded-lg'>Contact us</button>
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
