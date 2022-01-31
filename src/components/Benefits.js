import React from 'react';
import bg from "../images/hero_bgg.svg";
import { Benefit_util as utils1, Benefit_util2 as utils2 } from '../utitlities/benefit_list';

function Benefit_content () {
    return (
        <div>
            <div className='grid gap-x-1  md:px-15 md:ml-5 item-start grid-cols-1 md:grid-cols-2'>
                <div className='mb-5 md:mb-0 flex flex-col gap-y-6'>
                    {
                        utils1.map( (util, index) => {
                            const dat = `${util.color}`
                            return (
                                <div key={index} className='flex items-center gap-x-4'>
                                <div className={`flex p-3 w-14 h-14 rounded-md`} style={{backgroundColor:dat}}><img src={util.img} className='w-full' alt='logo'/></div>
                                <span className={`font-Inter text-lg capitalize tracking-wider text-white font-normal`}>{util.name}</span>
                            </div>  
                            )
                        })
                    }                    
                </div>
                <div className='flex flex-col gap-y-6'>
                {
                        utils2.map( (util, index) => {
                            const dat = `${util.color}`
                            return (
                                <div key={index} className='flex items-center gap-x-4'>
                                <div className={`flex p-3 w-14 h-14 rounded-md`} style={{backgroundColor:dat}}><img src={util.img} className='w-full' alt='logo'/></div>
                                <span className={`font-Inter text-lg capitalize tracking-wider text-white font-normal`}>{util.name}</span>
                            </div>  
                            )
                        })
                    }     
                </div>
            </div>
        </div>
    )
}

function Twos({ img, content, pos }) {
    return (
      <div className="md:py-4 w-full my-5 md:my-2">
        <div
          className={`flex ${
            pos ? 'md:flex-row' : 'md:flex-row-reverse'
          } flex-col md:items-center md:justify-center md:justify-between `}
        >
          <div
            className={`flex-1 md:p-5 mb-8 md:mb-5 -ml-4 md:-ml-0 md:mb-0 md:p-10 flex ${
              pos ? 'justify-start' : 'md:justify-center'
            } md:justify-center md:items-center`}
          >
            <img src={img} alt="image" className="bg-cover  md:w-[87%]" />
          </div>
          <div className="flex-1 items-start justify-start  text-left">{content}</div>
        </div>
      </div>
    );
  }
  

function Benefits() {
  return (
    <div className='md:container w-full flex  md:items-center md:px-12 px-6 py-5 md:py-12 md:justify-center flex-col mx-auto bg-no-repeat bg-cover' style={{backgroundImage: `url(${bg})`}}>
    <div className='flex md:mb-2 mb-8 flex-col gap-y-1'>
        <div className="flex gap-x-4 text-center items-center md:justify-center">
            <div className="w-10 h-[4px] bg-[#eb6282]"></div>
            <span className="text-white capitalize text-[#BE173F] text-lg font-normal  text-center  font-Inter">
                Commitment to you
            </span>
        </div>
        <h1 className='md:text-4xl text-3xl font-Inter text-left md:text-center font-bold tracking-wider font-Inter text-white'>Benefits</h1>
    </div>
    <Twos img="/Imgs/benefits_img.svg" content={<Benefit_content />} pos={false} />
    </div>
  );
}

export default Benefits;
