import React from 'react';
import { Fade } from 'react-reveal';
import bg from "../images/section2.png";
import { services } from '../utitlities/revolution_util';
import Benefits from './Benefits';
import Contact_us from './Contact_us';
import Revolution from './Revolution';

function EachService ({pos, title, count, content, img, color}) {
    return (
        <div className={`${pos ? "lg:mb-8 rounded-b-lg" : "rounded-b-lg lg:rounded-b-none"} md:mb-12  mb-8 lg:mb-0` } >
          <Fade delay={1000} right={ (count % 2 === 0) ? true : false  } left={ (count % 2 !== 0) ? true : false  }>
          <div className={`flex flex-col px-3 py-12  bg-[#0A0000] shadow-md rounded-xl ${pos ? "rounded-b-lg" : "rounded-b-none"}`}>
            <div className={` rounded-lg   mx-auto mb-5 p-3 flex flex-col items-center`}style={{backgroundColor:color}} > <img src={img} className='bg-cover w-9 h-9' /> </div>
            <span className='text-[#BE173F] w-[90%] mx-auto mb-5 text-center font-Inter font-semibold text-xl'>{title}</span>
            <p className='text-white font-Poppins px-4 text-base'>{content}</p>
        </div>
          </Fade>
        </div>
    )
}


function Services() {
  return (
      <div className="mx-auto w-full mt-12" id='services'>
          <div className='pt-10 flex flex-col items-center justify-center' style={{backgroundImage: `url(${bg})`}}>
                <div className='flex flex-col md:w-[90%] mx-auto gap-y-4'>
                    <div className="flex flex-col md:flex-row gap-y-3 uppercase gap-x-2 text-center items-center justify-center">
                    <div className="w-10 h-[4px] bg-[#eb6282]"></div>
                        <span className="text-white  capitalize text-[#BE173F] text-lg font-normal text-center  font-Poppins">
                            Intelligent, One Stop Solution
                        </span>
                    </div>
                    <h1 className='md:text-4xl text-3xl font-Poppins text-center font-bold tracking-wider text-white leading-10'>Our Services </h1>
                    <p className='text-base font-Poppins px-4 md:px-0 text-center tracking-wide text-white'>We provide full-package solution to get your business up and running on the blockchain</p>
                </div>
                <div className='grid relative md:w-[94%] mx-auto justify-center items-center md:items-end grid-cols-1 mt-12 md:mt-24 px-8 gap-x-8 lg:grid-cols-4 md:grid-cols-2'>
                    {
                        services.map((service, index) => (
                            <EachService key={index} count={index} color={service.color} pos={service.pos} img={service.img} title={service.title} content={service.content} />
                        ))
                    }
                </div>
            </div>
            <div>
            </div>
            <div className='mx-auto py-20 gap-y-12 flex flex-col items-center justify-center'>
                <Revolution />
                <Benefits />
                <Contact_us />
            </div>
      </div>
  );
}

export default Services;
