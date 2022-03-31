import React from 'react';
import bg1 from "../images/section5_1.png";
import Reviews from './Reviews';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style.css';

function Team_Content () {
    return (
        <div className='flex items-start  lg:items-center flex-col px-4 gap-y-2 lg:justify-center'>
             <div className="flex capitalize gap-x-2 text-center items-center justify-center">
                    <div className="w-8 h-[4px] bg-[#eb6282]"></div>
                        <span className="text-white  text-[#BE173F] text-base font-normal text-center  font-Poppins">
                            Collaboration
                        </span>
                    </div>
                    <h1 className='lg:text-4xl text-3xl font-Inter text-center font-bold mb-4 lg:mb-6 tracking-wider text-white leading-10'>The Team</h1>
                    <p className='text-base font-Poppins w-full mb-6 text-cente tracking-wide text-white'>We are a global team of experienced and personable developers, who are looking to use blockchain to bring equality and transformation to the world.</p>
                    <button className='bg-[#BE173F] hover:opacity-80 lg:w-[60%] lg:mb-6 text-white text-sm lg:text-lg font-Poppins px-6 lg:px-10 py-4 font-bold lg:py-4 rounded-lg'><a href=' https://www.linkedin.com/in/djrthree/' target="_blank">Know more about our team </a></button>
                    <div className='w-[100%] justify-start mt-8 items-start flex py-2'>
                    </div>
        </div>
    )
}

function Twos({ img, content, pos }) {
    return (
      <div className="lg:py-4 w-full lg:my-2">
        <div
          className={`flex ${
            pos ? 'lg:flex-row' : 'lg:flex-row-reverse'
          } flex-col items-start justify-center lg:justify-between `}
        >
          <div
            className={`md:py-8 md:px-4  px-4 lg:-ml-0 lg:p-5 flex flex-col  items-start lg:items-end`}
          >
          <img src={img} alt="image" className="bg-cover flex w-[70%] lg:w-[75%]"/>
           <div className='text-left lg:text-right py-2 text-lg md:text-xl font-Poppins'>
           <span className='text-white  block'>David Ring</span>
            <span className='text-[#BE173F] tracking-widest font-bold'>CEO</span>
           </div>
          </div>
          <div className="basis-[80%] items-start justify-start  text-left">{content}</div>
        </div>
      </div>
    );
  }

function Teams() {
  return (
      <div className='lg:mb-20 dark_top pt-10' id='team'>
          <div className='lg:container bg-no-repeat w-[95%]  mx-auto' style={{backgroundImage: `url(${bg1})`}}>
                <Twos  img="/Imgs/team.png" content={<Team_Content/>} />
          </div> 
        <div className='lg:max-w-[55%]  bg-transparent md:max-w-[80%]  mx-auto mt-5 lg:mt-12 mb-12 lg:mb-30'>
            <Reviews />
        </div>
      </div>
  );
}

export default Teams;
 