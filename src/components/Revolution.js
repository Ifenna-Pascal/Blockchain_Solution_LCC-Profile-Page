import React, { useEffect, useState } from 'react';
import { Fade } from 'react-reveal';
import bg from "../images/section.png";
import { Revolution_util as utils} from "../utitlities/revolution_util";
import './style.css';

function OneService ({title, content, count, img, dat}) {
    return (
       <Fade delay={500} bottom={true}>
            <div data-aos="fade-up" className={`flex flex-col my-5 md:my-10  gap-y-5 md:gap-y-3 bg-transparent rounded-md`}>
                <div className='rounded-md mx-auto p-3  flex flex-col items-center' style={{backgroundColor:dat}} > <img src={img} className='bg-cover w-8 h-8' /> </div>
                <span className='text-[#BE173F] w-[76%] mx-auto text-center font-Inter font-semibold text-2xl md:mb-2 tracking-wider'>{title}</span>
                <p className='text-white font-Poppins px-8 md:px-4 text-base'>{content}</p>
            </div>
       </Fade>
    )
}

function Revolution() {
  return (
      <div className='bg-cover bg-no-repeat dark pt-20' style={{backgroundImage: `url(${bg})`}}>
        <div className='flex lg:w-[80%] mx-auto md:mt-10 mb-2 flex-col gap-y-4'>
                <div className="flex flex-col md:flex-row gap-y-2 md:gap-y-0 uppercase gap-x-2 text-center items-center justify-center">
                <div className="w-10 h-[4px] bg-[#eb6282]"></div>
                    <span className="text-white  capitalize text-[#BE173F] text-lg font-normal text-center  font-Poppins">
                        The Revolution
                    </span>
                </div>
                <h1 className='text-3xl px-4 md:px-0 md:text-4xl font-Inter text-center font-bold tracking-wider text-white leading-10'>Blockchain is the future </h1>
                <p className='text-base px-4 md:px-0 md:w-[60%] mx-auto md:mt-4 font-Poppins text-center tracking-wide text-white'>Blockchain is revolutionizing business, reducing operational cost, increasing secuirity and distrupting top-heavy organizations</p>
            </div>
            <div className='grid relative grid-cols-1 mt-6 md:mt-12 mb-8 gap-x-8 lg:grid-cols-4 md:grid-cols-2'>
                 {
                     utils.map((util, index) => {
                         return (
                             <OneService count={index} key={index} title={util.title} img={util.img} dat={util.color} content={util.content} />
                         )
                     })
                     
                 }  
            </div>
      </div>
  );
}

export default Revolution;
