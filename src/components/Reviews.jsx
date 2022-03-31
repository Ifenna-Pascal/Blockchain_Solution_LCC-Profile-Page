import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Review ({img, title, reviewer, content}) {
    return (
        <div className='w-full flex-col lg:flex-row flex px-4'>
            <div className='lg:basis-[40%] p-3'>
                <img src={img} className='' />
            </div> 
            <div className='flex-1 flex flex-col mt-2 justify-center lg:p-3'>
            <div className="flex capitalize gap-x-2 pb-4  lg:text-center items-center">
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

function Reviews() {
const settings = {
    dots: true,
    autoplay:true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};
  return (
    <Slider {...settings}>
        <Review img="/Imgs/meta.jpeg" title="Review 1" reviewer ="Mike Becker"  content="David optimized our smart contract, saving Black Meta a small fortune. Even our users raved about the low gas costs." />
        <Review img="/Imgs/review_2.png" title="Review 2" reviewer ="Anonymous" content="Blockchain Solutions LLC understood my concept and brought it to a whole new level… " />
        <Review img="/Imgs/review_3.png"  title="Review 3" reviewer= "Anonymous" content="For me, blockchain is about paving the way toward equality. From the moment I spoke with [Blockchain Solutions LLC], I felt understood and appreciated. I knew this was a company I could trust."/>
    </Slider>
  )
}

export default Reviews