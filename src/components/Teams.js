import React from 'react';
// import Twos from '../utitlities/Twos';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

function Team_Content () {
    return (
        <div className='flex items-center flex-col px-8 gap-y-2 justify-center'>
             <div className="flex capitalize gap-x-2 text-center items-center justify-center">
                    <div className="w-8 h-[4px] bg-[#eb6282]"></div>
                        <span className="text-white  text-[#BE173F] text-base font-normal text-center  font-Poppins">
                            Collaboration
                        </span>
                    </div>
                    <h1 className='text-4xl font-Inter text-center font-bold mb-6 tracking-wider text-white leading-10'>The Team</h1>
                    <p className='text-base font-Poppins mb-6 text-cente tracking-wide text-white'>There is a reason why cryptocurrencies are in the trillions of dollars. With the emergence of a global, decentralized ledger and computing system—which continues to grow faster and more powerful—business is being disrupted. Trillions of dollars in transaction fees from traditional banking are being threatened by blockchain technology. Countless industries are at risk of being undercut by less-expensive, faster, and more secure solutions. Whether you are an established business looking to secure your company’s foothold or an upcoming organization looking to break into the market, we have the solution for you.</p>
                    <button className='bg-[#BE173F] w-[60%] mb-6 text-white text-lg font-Poppins px-10 py-4 rounded-lg' >Know more about our team </button>
                    <div className='w-[100%] justify-start mt-8 items-start flex py-2'>
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
            className={`p-10 flex ${
              pos ? 'md:justify-start' : 'md:justify-center'
            } justify-center items-center`}
          >
            <img src={img} alt="image" className="bg-cover w-[65%]" />
          </div>
          <div className="basis-[80%] items-start justify-start  text-left">{content}</div>
        </div>
      </div>
    );
  }

function Review () {
    return (
        <div className='w-full  flex justify-between bg-[#22223A] px-12 py-16'>
            <div className='basis-[32%] mr-10'>
                <img src='/Imgs/lady.png' className='bg-cover w-full' />
            </div> 
            <div className='flex-1 p-3'>
            <div className="flex capitalize gap-x-2 mb-2  text-center items-center justify-center">
                    <div className="w-10 h-[4px] bg-[#eb6282]"></div>
                        <span className="text-white  text-[#BE173F] text-lg font-normal text-center  font-Poppins">
                            Result based on deliverables
                        </span>
                    </div>
                    <h1 className='text-4xl font-Poppins text-center font-bold mb-6 tracking-wider text-white leading-10'>Client Review</h1>
                    <p className='text-base font-Poppins mb-6 text-left tracking-wide text-white'>There is a reason why cryptocurrencies are in the trillions of dollars. With the emergence of a global, decentralized ledger and computing system—which continues to grow faster and more powerful—business is being disrupted. Trillions of dollars in transaction fees from traditional banking are being threatened by blockchain technology. Countless industries are at risk of being undercut by less-expensive, faster, and more secure solutions. Whether you are an established business looking to secure your company’s foothold or an upcoming organization looking to break into the market, we have the solution for you.</p>
            </div>     
        </div>
    )
}

function Teams() {
  return (
      <div className='bg-black mb-20 w-full' id='team'>
          <div className='container  mx-auto'>
                <Twos pos={false} img="/Imgs/team.png" content={<Team_Content/>} />
          </div> 
        <div className='max-w-[65%] mx-auto mt-12 mb-40'>
        <Carousel axis='horizontal' autoFocus={true} infiniteLoop={true} interval={3000} showArrows={false} showThumbs={false} autoPlay={true} showIndicators={true}>
            <Review />
            <Review />
            <Review />
        </Carousel>
        </div>
      </div>
  );
}

export default Teams;
