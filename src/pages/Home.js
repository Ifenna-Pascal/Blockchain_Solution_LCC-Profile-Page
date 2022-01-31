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
      <div className='bg-black'>
          <Nav />
          <div className={`fixed bottom-10 ${scroll ? "flex" : "hidden"} hover:cursor-pointer items-center rounded-full bg-[#BE173F]  p-5 right-14`}>
              <AiOutlineArrowUp onClick={scrollToTop} className='text-white font-bold text-2xl' />
          </div>
          <Hero />
          <Services />
          <Teams />
          <Contact />
          <Footer />
      </div>
  );
}

export default Home;
