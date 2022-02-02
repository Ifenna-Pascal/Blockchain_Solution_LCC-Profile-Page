import React from 'react';
// import Twos from '../utitlities/Twos';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

function Team_Content () {
    return (
        <div className='flex items-start lg:items-center flex-col px-8 gap-y-2 lg:justify-center'>
             <div className="flex capitalize gap-x-2 text-center items-center justify-center">
                    <div className="w-8 h-[4px] bg-[#eb6282]"></div>
                        <span className="text-white  text-[#BE173F] text-base font-normal text-center  font-Poppins">
                            Collaboration
                        </span>
                    </div>
                    <h1 className='lg:text-4xl text-3xl font-Inter text-center font-bold mb-4 lg:mb-6 tracking-wider text-white leading-10'>The Team</h1>
                    <p className='text-base font-Poppins w-full mb-6 text-cente tracking-wide text-white'>There is a reason why cryptocurrencies are in the trillions of dollars. With the emergence of a global, decentralized ledger and computing system—which continues to grow faster and more powerful—business is being disrupted. Trillions of dollars in transaction fees from traditional banking are being threatened by blockchain technology. Countless industries are at risk of being undercut by less-expensive, faster, and more secure solutions. Whether you are an established business looking to secure your company’s foothold or an upcoming organization looking to break into the market, we have the solution for you.</p>
                    <button className='bg-[#BE173F] lg:w-[60%] lg:mb-6 text-white text-sm lg:text-lg font-Poppins px-6 lg:px-10 py-4 font-bold lg:py-4 rounded-lg' >Know more about our team </button>
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
          } flex-col items-center justify-center lg:justify-between `}
        >
          <div
            className={`p-8 md:py-8 md:px-0  md:-ml-16 lg:-ml-0 lg:p-10 flex ${
              pos ? 'lg:justify-start' : 'lg:justify-center'
            } lg:justify-center lg:items-center`}
          >
            <img src={img} alt="image" className="bg-cover w-[70%] lg:w-[65%]" />
          </div>
          <div className="basis-[80%] items-start justify-start  text-left">{content}</div>
        </div>
      </div>
    );
  }

function Review ({img, title, reviewer, content}) {
    return (
        <div className='w-full flex-col lg:flex-row flex justify-between h-full bg-[#22223A] px-6 lg:px-12 py-12 lg:py-16'>
            <div className='lg:basis-[32%] flex justify-self-center items-center  mb-4 lg:mb-0 lg:mr-10'>
                <img src={img} className='bg-cover w-full' />
            </div> 
            <div className='flex-1 p-1 lg:ml-12 lg:p-3'>
            <div className="flex capitalize gap-x-2 mb-2  lg:text-center items-center justify-start lg:justify-start">
                    <div className="w-10 h-[4px] bg-[#eb6282]"></div>
                        <span className="text-white  text-[#BE173F] text-lg font-normal text-left font-Poppins">
                            {title}
                        </span>
                    </div>
                    <h1 className='lg:text-4xl text-left text-3xl font-Poppins lg:text-left font-bold mb-4 lg:mb-6 tracking-wider text-white leading-10'>{reviewer}</h1>
                    <p className='text-base font-Poppins mb-6 text-left tracking-wide text-white'>{content}</p>
            </div>     
        </div>
    )
}

function Teams() {
  return (
      <div className='bg-black lg:mb-20 w-full' id='team'>
          <div className='lg:container w-full  mx-auto'>
                <Twos pos={false} img="/Imgs/team.png" content={<Team_Content/>} />
          </div> 
        <div className='lg:max-w-[65%] md:max-w-[92%]  mx-auto mt-5 lg:mt-12 mb-12 lg:mb-30'>
        <Carousel axis='horizontal' autoFocus={true} infiniteLoop={true} interval={3000} showArrows={false} showThumbs={false} autoPlay={true} showIndicators={true}>
            <Review img="/Imgs/review_1.png" title="Review 1" reviewer ="Mike Becker"  content="' '" />
            <Review img="/Imgs/review_2.png" title="Review 2" reviewer ="Anonymous" content="Blockchain Solutions LLC understood my concept and brought it to a whole new level… " />
            <Review img="/Imgs/review_3.png"  title="Review 3" reviewer= "Anonymous" content="For me, blockchain is about paving the way toward equality. From the moment I spoke with [Blockchain Solutions LLC], I felt understood and appreciated. I knew this was a company I could trust."/>
        </Carousel>
        </div>
      </div>
  );
}

export default Teams;
 