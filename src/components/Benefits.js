import React from 'react';
import bg from "../images/hero_bgg.svg";
import { Benefit_util as utils1, Benefit_util2 as utils2 } from '../utitlities/benefit_list';

function Benefit_content () {
    return (
        <div>
            <div className='grid gap-x-1 px-15 ml-5 item-start grid-cols-2'>
                <div className='flex flex-col gap-y-6'>
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
      <div className="py-4 w-full my-2">
        <div
          className={`flex ${
            pos ? 'md:flex-row' : 'md:flex-row-reverse'
          } flex-col items-center justify-center md:justify-between `}
        >
          <div
            className={`flex-1  p-10 flex ${
              pos ? 'md:justify-start' : 'md:justify-center'
            } justify-center items-center`}
          >
            <img src={img} alt="image" className="bg-cover w-[87%]" />
          </div>
          <div className="flex-1 items-start justify-start  text-left">{content}</div>
        </div>
      </div>
    );
  }
  

function Benefits() {
  return (
    <div className='container flex items-center px-12 py-12 justify-center  flex-col mx-auto bg-no-repeat bg-cover' style={{backgroundImage: `url(${bg})`}}>
    <div className='flex mb-2 flex-col gap-y-1'>
        <div className="flex uppercase gap-x-4 text-center items-center justify-center">
            <div className="w-10 h-[4px] bg-[#eb6282]"></div>
            <span className="text-white  capitalize text-[#BE173F] text-lg font-normal text-center  font-Inter">
                Commitment to you
            </span>
        </div>
        <h1 className='text-4xl font-Inter text-center font-bold tracking-wider font-Inter text-white'>Benefits</h1>
    </div>
    <Twos img="/Imgs/benefits_img.svg" content={<Benefit_content />} pos={false} />
    </div>
  );
}

export default Benefits;
