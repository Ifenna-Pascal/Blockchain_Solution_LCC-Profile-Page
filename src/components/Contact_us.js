import React from "react";
import Twos from "../utitlities/Twos";
import bg from "../images/section5.png";
import { Link } from "react-scroll";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { Fade } from "react-reveal";

function Team_Content() {
  return (
    <>
      <div className="flex items-start  lg:items-center flex-col   gap-y-2 lg:justify-center">
        <div className="flex capitalize gap-x-2 text-center items-center justify-center">
          <div className="w-8 h-[4px] bg-[#eb6282]"></div>
          <span className="text-white  text-[#BE173F] text-base font-normal text-center  font-Poppins">
            Quick and Easy Access
          </span>
        </div>
        <h1 className="lg:text-4xl text-2xl font-Inter font-bold mb-4 lg:mb-6 tracking-wider text-white leading-10">
          The Path Forward{" "}
        </h1>
        <p className="text-base font-Poppins w-full mb-6 tracking-wide text-white">
          There is a reason why cryptocurrencies are in the trillions of
          dollars. With the emergence of a global, decentralized ledger and
          computing system which continues to grow faster and more powerful,
          business is being disrupted. Trillions of dollars in transaction fees
          from traditional banking are being threatened by blockchain
          technology. Countless industries are at risk of being undercut by
          less-expensive, faster, and more secure solutions. Whether you are an
          established business looking to secure your company’s foothold or an
          upcoming organization looking to break into the market, we have the
          solution for you.
        </p>
        <button className="bg-[#BE173F]  lg:mx-0 lg:w-[40%] mb-6 text-white text-base lg:text-lg tracking-wider font-Inter lg:font-bold px-10 py-3 lg:py-4 rounded-lg">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-84}
            spy={true}
            exact="true"
          >
            {" "}
            Contact{" "}
          </Link>
        </button>
      </div>
      <div className="flex-col flex lg:flex-row gap-y-5 justify-start lg:mt-8 items-start">
        <Fade left={true}>
          <div className="flex items-center lg:mr-20">
            <div className="flex bg-white items-center mr-2 p-2 w-12 h-12 rounded-lg">
              <AiOutlineMail className="lg:w-12 w-8 h-8 lg:h-12" />
            </div>
            <div className="">
              <span className="font-Poppins text-base  text-white font-semibold">
                Email
              </span>
              <br></br>
              <span className="font-Poppins text-base xs:text-xs  text-white font-bold">
                inquiries@blockchainslc.com
              </span>
            </div>
          </div>
        </Fade>
        <Fade delay={500} right={true}>
          <div className="flex items-center">
            <div className="flex bg-white items-center p-2 w-12 h-12 mr-2 rounded-lg">
              <BsTelephone className="lg:w-12 w-8 h-8 lg:h-12" />
            </div>
            <div>
              <span className="font-Poppins text-base text-white block font-semibold">
                Phone
              </span>
              <span className="font-Poppins text-base xs:text-xs  text-white font-semibold">
                (801) 960-2447{" "}
              </span>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
}

function Contact_us() {
  return (
    <div
      className=" mx-auto py-5 dark px-6 bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex w-full flex-col justify-center items-center">
        <Twos img="/Imgs/phone.svg" pos={true} content={<Team_Content />} />
      </div>
    </div>
  );
}

export default Contact_us;
