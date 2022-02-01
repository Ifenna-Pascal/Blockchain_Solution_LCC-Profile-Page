import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import { Link } from 'react-scroll';

function Nav() {
    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
        if (window.scrollY >= 30) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);
  return (
    <nav className={`sticky top-0 ${setScrollNav ? "bg-black shadow-lg" : "bg-transparent"}   container z-50 border-gray-200 px-2 sm:px-4 py-6`}>
        <div className=' w-[90%] md:container mx-auto'>
        <div className=" flex flex-wrap justify-between items-center">
         <Logo />
        <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-xl text-white rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
        <ul className="flex flex-col mt-4 md:flex-row md:space-x-14 md:mt-0 md:text-sm md:font-medium">
        <li>
        <Link to="services" smooth={true} duration={500} offset={-84} spy={true} exact="true" className="block py-4 hover:cursor-pointer pr-4 pl-3 text-white rounded text-base md:border-none border-b hover:text-[#eb6282] hover:font-semibold tracking-wider font-Poppins md:bg-transparent md:p-0 dark:text-white" aria-current="page"> Services </Link>
        </li>
        <li>
        <Link to="team" smooth={true} duration={500} offset={-84} spy={true} exact="true" className="block py-4 hover:cursor-pointer pr-4 pl-3 text-white text-base font-Poppins border-b border-gray-100 hover:text-[#eb6282]  md:hover:bg-transparent md:border-0 md:hover:text-[#eb6282] hover:font-semibold tracking-wider md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"> Team </Link>
        </li>
        <li>
        <a href='https://www.linkedin.com/company/75016127' target="_blank" smooth={true} duration={500} offset={-84} spy={true} exact="true" className="block py-4 hover:cursor-pointer pr-4 pl-3 text-white text-base font-Poppins border-b border-gray-100 hover:text-[#eb6282]  md:hover:bg-transparent md:border-0 md:hover:text-[#eb6282] hover:font-semibold tracking-wider md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog </a>
        </li>
        <li>
        <Link to="contact" smooth={true} duration={500} offset={-84} spy={true} exact="true" className="block py-4 hover:cursor-pointer pr-4 pl-3 text-white text-base font-Poppins border-b border-gray-100 hover:text-[#eb6282]  md:hover:bg-transparent md:border-0 md:hover:text-[#eb6282] hover:font-semibold tracking-wider md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact us </Link>
        </li>
        {/* <li>
        <Link className="block py-4 hover:cursor-pointer pr-4 pl-3 text-white text-base font-Poppins hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#eb6282] hover:font-semibold tracking-wider md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact </Link>
        </li> */}
        </ul>
        </div>
        </div>
        </div>
    </nav>

  );
}

export default Nav;
