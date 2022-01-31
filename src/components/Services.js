import React from 'react';
import bg from "../images/blue_bg.svg";
import { services } from '../utitlities/revolution_util';
import Benefits from './Benefits';
import Contact_us from './Contact_us';
import Revolution from './Revolution';

function EachService ({pos, title, content, img, color}) {
    return (
        <div className={`${pos ? "mb-8 rounded-b-lg" : "rounded-b-none"}`} >
            <div className={`flex flex-col px-3 py-12  bg-[#0A0000] shadow-md rounded-xl ${pos ? "rounded-b-lg" : "rounded-b-none"}`}>
            <div className={` rounded-lg   mx-auto mb-5 p-3 flex flex-col items-center`}style={{backgroundColor:color}} > <img src={img} className='bg-cover w-9 h-9' /> </div>
            <span className='text-[#BE173F] w-[90%] mx-auto mb-5 text-center font-Inter font-semibold text-xl'>{title}</span>
            <p className='text-white font-Poppins px-4 text-base'>{content}</p>
        </div>
        </div>
    )
}


function Services() {
  return (
      <div className=" container mx-auto w-full" id='services'>
          <div className='mx-auto pt-10   lex flex-col items-center justify-center' style={{backgroundImage: `url(${bg})`}}>
                <div className='flex flex-col gap-y-4'>
                    <div className="flex uppercase gap-x-2 text-center items-center justify-center">
                    <div className="w-10 h-[4px] bg-[#eb6282]"></div>
                        <span className="text-white  capitalize text-[#BE173F] text-lg font-normal text-center  font-Poppins">
                            Inteligent, One Crop Solution
                        </span>
                    </div>
                    <h1 className='text-4xl font-Poppins text-center font-bold tracking-wider text-white leading-10'>Our Services </h1>
                    <p className='text-base font-Poppins text-center tracking-wide text-white'>We provide full-package solution to get your business up and running on the blockchain</p>
                </div>
                <div className='grid relative items-end grid-cols-1 mt-24 px-8 gap-x-8 lg:grid-cols-5 md:grid-cols-2'>
                    {
                        services.map((service, index) => (
                            <EachService key={index} color={service.color} pos={service.pos} img={service.img} title={service.title} content={service.content} />
                        ))
                    }
                </div>
            </div>
            <div>
            </div>
            <div className='mx-auto py-20 gap-y-12 flex flex-col items-center  justify-center'>
                <Revolution />
                <Benefits />
                <Contact_us />
            </div>
      </div>
  );
}

export default Services;
