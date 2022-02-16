import React, { useState } from 'react';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Nav from '../components/Nav';
import Services from '../components/Services';
import Teams from '../components/Teams';
import { AiOutlineArrowUp } from "react-icons/ai";

function Home() {
  const [scroll, setScroll] = useState(false);
  const showScroll = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
          setScroll(true);
      } else if (scrolled <= 300) {
          setScroll(false);
      }
  };
  const scrollToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth',
          /* you can also use 'auto' behaviour
           in place of 'smooth' */
      });
  };

  window.addEventListener('scroll', showScroll);
  return (
      <div className='bg-black w-full'>
          <Nav />
          <div className={`fixed bottom-28 ${scroll ? "flex" : "hidden"} z-20 hover:cursor-pointer items-center rounded-full bg-[#BE173F] p-3 md:p-4 right-4 md:right-6`}>
              <AiOutlineArrowUp onClick={scrollToTop} className='text-white font-bold text-xl' />
          </div>
         <div className='overflow-hidden'>
            <Hero />
            <Services />
            <Teams />
            <Contact />
            <Footer />
        </div>
      </div>
  );
}

export default Home;
