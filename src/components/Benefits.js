import React from 'react';
import { Fade, Zoom } from 'react-reveal';
import bg from "../images/section3.png";
import { Benefit_util as utils1, Benefit_util2 as utils2 } from '../utitlities/benefit_list';


function Benefit_content () {
    return (
        <div>
            <div className='grid gap-x-1  md:px-15 lg:ml-5 item-start md:mt-6 grid-cols-1 md:grid-cols-2'>
                <div className='mb-5 lg:mb-0 flex flex-col '>
                    {
                        utils1.map( (util, index) => {
                            const dat = `${util.color}`
                            return (
                               <Fade delay={500} bottom={true}>
                                  <div key={index} className='flex items-center gap-x-4 mb-9'>
                                <div className={`flex p-3 w-14 h-14 rounded-lg`} style={{backgroundColor:dat}}><img src={util.img} className='w-full' alt='logo'/></div>
                                <span className={`font-Inter text-lg capitalize tracking-wider text-white font-normal`}>{util.name}</span>
                                </div>  
                               </Fade>
                            )
                        })
                    }                    
                </div>
                <div className='flex md:ml-8 md:mt-0 -mt-1 flex-col '>
                {
                        utils2.map( (util, index) => {
                            const dat = `${util.color}`
                            return (
                                <Fade delay={500} bottom={true}>
                                  <div key={index} className='flex items-center gap-x-4 mb-9'>
                                  <div className={`flex p-3 w-14 h-14 rounded-lg`} style={{backgroundColor:dat}}><img src={util.img} className='w-full' alt='logo'/></div>
                                  <span className={`font-Inter text-lg capitalize tracking-wider text-white font-normal`}>{util.name}</span>
                                </div>  
                                </Fade>
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
      <div className="lg:py-4 w-full my-5 lg:my-2">
        <div
          className={`flex ${
            pos ? 'lg:flex-row' : 'lg:flex-row-reverse'
          } flex-col lg:items-center lg:justify-center lg:justify-between `}
        >
          <div
            className={`flex-1 lg:p-5 mb-8 lg:mb-5 -ml-4 lg:-ml-0 lg:mb-0 lg:p-10 flex ${
              pos ? 'justify-start' : 'lg:justify-center'
            } lg:justify-center lg:items-center`}
          >
           <Zoom delay={500}>  <img src={img} alt="image" className="bg-cover  lg:w-[87%]" /> </Zoom>
          </div>
          <div className="flex-1 items-start justify-start  text-left">{content}</div>
        </div>
      </div>
    );
  }
  

function Benefits() {
  return (
    <div className='lg:container w-full flex  lg:items-center lg:px-12 px-6 py-5 lg:py-12 lg:justify-center flex-col mx-auto bg-no-repeat bg-cover' style={{backgroundImage: `url(${bg})`}}>
    <div className='flex lg:mb-2 mb-8 flex-col gap-y-1'>
        <div className="flex gap-x-4 text-center items-center md:justify-center">
            <div className="w-10 h-[4px] bg-[#eb6282]"></div>
            <span className="text-white capitalize text-[#BE173F] text-lg font-normal  text-center  font-Inter">
                Commitment to you
            </span>
        </div>
        <h1 className='lg:text-4xl text-3xl font-Inter text-left md:mb-4 md:text-center font-bold tracking-wider font-Inter text-white'>Benefits</h1>
    </div>
    <Twos img="/Imgs/benefits_img.svg" content={<Benefit_content />} pos={false} />
    </div>
  );
}

export default Benefits;
