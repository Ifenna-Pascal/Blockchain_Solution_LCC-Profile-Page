import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import { Link } from 'react-scroll';
import { Transition } from "@headlessui/react";

function Nav() {
    const [show, setShow] = useState(false)
    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
        if (window.scrollY >= 120) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);
  return (
    <nav className= {`sticky top-0 h-[6rem] ${scrollNav ? "bg-black" : "bg-transparent"} z-10 `}>
        <div className='md:max-w-[87%] max-w-[90%] h-full mx-auto flex justify-between'>
            <div className='flex py-5 items-center'>
                <Logo />
            </div>
            <div className='hidden md:flex gap-x-8 items-center'>
                <Link to="services" smooth={true} duration={500} offset={-84} spy={true} exact="true" className="py-5 hover:cursor-pointer text-white text-base hover:text-[#eb6282] hover:font-semibold tracking-wider font-Poppins md:bg-transparent dark:text-white" > Services </Link>
                <Link  to="team" smooth={true} duration={500} offset={-84} spy={true} exact="true" className="py-5 hover:cursor-pointer text-white text-base  hover:text-[#eb6282] hover:font-semibold tracking-wider font-Poppins md:bg-transparent dark:text-white"> Team </Link>
                <a href='https://www.linkedin.com/company/75016127' target="_blank" smooth={true} duration={500} offset={-84} spy={true} exact="true" className="py-5 hover:cursor-pointer text-white text-base hover:text-[#eb6282] hover:font-semibold tracking-wider font-Poppins md:bg-transparent dark:text-white">Blog </a>
                <Link to="contact" smooth={true} duration={500} offset={-84} spy={true} exact="true" className="py-5 hover:cursor-pointer text-white text-base hover:text-[#eb6282] hover:font-semibold tracking-wider font-Poppins md:bg-transparent dark:text-white"> Contact us </Link>
            </div>
            <div className='md:hidden flex items-center'>
               <button onClick={() => setShow(!show)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 text-white w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
               </button>
            </div>
        </div>
        <Transition
          show={show}
          enter="transition ease-in-out duration-1000 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-1000 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
              {(ref) => (
                <div className='md:hidden transition flex flex-col space-y-4 ease-out w-[50%] h-screen delay-700 bg-black'>
                <Link to="services" onClick={()=> setShow(false)} smooth={true} duration={500} offset={-84} spy={true} exact="true" className="block ml-10 py-3 text-left hover:cursor-pointer text-white text-base transition duration-300 hover:text-[#eb6282] hover:font-semibold tracking-wider font-Poppins md:bg-transparent"> Services </Link>
                <Link  to="team" onClick={()=> setShow(false)}  smooth={true} duration={500} offset={-84} spy={true} exact="true" className="block ml-10 text-left py-3 hover:cursor-pointer text-white text-base transition duration-300 hover:text-[#eb6282] hover:font-semibold tracking-wider font-Poppins md:bg-transparent"> Team </Link>
                <a href='https://www.linkedin.com/company/75016127' target="_blank" smooth={true} duration={500} offset={-84} spy={true} exact="true"  className="block ml-10 text-left py-3 hover:cursor-pointer text-white text-base transition duration-300 hover:text-[#eb6282] hover:font-semibold tracking-wider font-Poppins md:bg-transparent" >Blog </a>
                <Link to="contact" onClick={()=> setShow(false)}  smooth={true} duration={500} offset={-84} spy={true} exact="true" className="block ml-10 text-left pt-3 pb-5 hover:cursor-pointer text-white text-base transition duration-300 hover:text-[#eb6282] hover:font-semibold tracking-wider font-Poppins md:bg-transparent"> Contact us </Link>
                </div>
            )
        }
        </Transition>
    </nav>
  );
}

export default Nav;
