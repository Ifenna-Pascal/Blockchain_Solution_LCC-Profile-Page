import React from "react";
import bg from "../images/header_head.png";
import { Link } from "react-scroll";
import { Zoom } from "react-reveal";
import "./style.css";

function Hero() {
  return (
    <div className="mx-auto" style={{ height: "calc(90vh)" }}>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="dark_bg w-[100%] h-full  mx-auto bg-no-repeat bg-cover"
      >
        <div className="py-12 mx-auto items-center w-full justify-center md:w-[85%] h-full  md:justify-between flex">
          <Zoom delay={1000}>
            <div className="flex md:text-left text-center flex-col mb-10 md:mb-0 items-center md:items-start  flex-1 gap-y-4">
              <div className="flex uppercase gap-x-2 items-center">
                <div className="w-8 h-[3px] bg-white"></div>
                <span className="text-white font-thin uppercase tracking-wider xs:text-lg text-xl font-normal uppercase font-Catamaran">
                  our mission
                </span>
              </div>
              <h1 className="font-Poppins uppercase text-[#BE173F] text-center md:ml-0  md:text-left font-[1000] xs:text-2xl text-5xl md:text-7xl lg:text- ">
                Connecting<span className="text-white"> You</span>
              </h1>
              <h1 className="font-Poppins text-white font-normal xs:text-2xl text-4xl md:text-6xl lowercase text-left">
                to the <span className="uppercase text-[#BE173F]">future</span>{" "}
              </h1>
              <p className="font-normal -mt-1 capitalize text-white font-Poppins xs:text-base text-xl text-left md:w-[50%]">
                Web and Blockchain Solutions
              </p>
              <div className="flex flex-col items-start justify-start mt-6">
                <button className="bg-[#BE173F] w-full text-white xs:text-base text-lg font-Poppins px-16 py-4 rounded-lg">
                  {" "}
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-84}
                    spy={true}
                    exact="true"
                  >
                    {" "}
                    Contact Us{" "}
                  </Link>
                </button>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
}

export default Hero;
