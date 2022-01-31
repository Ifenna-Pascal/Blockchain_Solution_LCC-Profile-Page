import React, { useEffect, useState } from 'react';
import bg from "../images/hero_bgg.svg";
import { Revolution_util as utils} from "../utitlities/revolution_util";


function OneService ({title, content, img, dat}) {
    return (
        <div className={`flex flex-col my-10  gap-y-3 bg-transparent rounded-md`}>
        <div className='rounded-md mx-auto p-3  flex flex-col items-center' style={{backgroundColor:dat}} > <img src={img} className='bg-cover w-8 h-8' /> </div>
        <span className='text-[#BE173F] w-[76%] mx-auto text-center font-Inter font-semibold text-2xl mb-2 tracking-wider'>{title}</span>
        <p className='text-white font-Poppins px-4 text-base'>{content}</p>
        </div>
    )
}

function Revolution() {
    // const [show, setShow] = useState(false);
    // const [array, setArray] = useState([])
    // useEffect(()=> {
    //     const newArray = []
    //     for ( var i = 0; i = show ? utils.length : 7 ; i++) {
    //         newArray.push(utils[i]);
    //         setArray(newArray)
    //     }
    // }, [show])
  return (
      <div className='bg-cover bg-no-repeat' style={{backgroundImage: `url(${bg})`}}>
        <div className='flex mt-10 mb-2 flex-col gap-y-4' style={{backgroundImage: `url(${bg})`}}>
                <div className="flex uppercase gap-x-2 text-center items-center justify-center">
                <div className="w-10 h-[4px] bg-[#eb6282]"></div>
                    <span className="text-white  capitalize text-[#BE173F] text-lg font-normal text-center  font-Poppins">
                        The Revolution
                    </span>
                </div>
                <h1 className='text-4xl font-Inter text-center font-bold tracking-wider text-white leading-10'>Blockchain is the future </h1>
                <p className='text-base w-[60%] mx-auto mt-4 font-Poppins text-center tracking-wide text-white'>Blockchain is revolutionalizing business, reducing operational cost, increasing secuirity and distrupting top heavy organizations</p>
            </div>
            <div className='grid relative  grid-cols-1 mt-12 mb-8 gap-x-8 lg:grid-cols-4 md:grid-cols-2'>
                 {
                     utils.map((util, index) => {
                         return (
                             <OneService key={index} title={util.title} img={util.img} dat={util.color} content={util.content} />
                         )
                     })
                     
                 }  
                  <div className={`flex flex-col my-10  gap-y-3 bg-transparent rounded-md`}>
                        <div className='rounded-md mx-auto p-4  bg-[#BE173F] flex flex-col hover:cursor-pointer items-center'> <span className='text-white font-bold text-2xl font-Poppins'>+3</span></div>
                        <span className='text-white w-[76%] mx-auto text-center font-Poppins font-semibold text-2xl mb-2 tracking-wider'>see more</span>
                    </div>
                {/* {
                    show ? (
                        <div>
                             {
                     extra_util.map((util, index) => {
                         return (
                             <OneService key={index} title={util.title} img={util.img} dat={util.color} content={util.content} />
                         )
                     })
                 }  
                        </div>
                    ):(
                       
                    )
                }
             */}
            </div>
      </div>
  );
}

export default Revolution;
