import React from "react";
import { Zoom } from "react-reveal";

function Twos({ img, content, pos }) {
  return (
    <div className="lg:w-[90%] mx-auto my-2">
      <div
        className={`flex w-full ${
          pos ? "lg:flex-row" : "lg:flex-row-reverse"
        } flex-col items-center justify-center lg:justify-between `}
      >
        <div
          className={`lg:p-6 py-8 w-[80%] lg:w-[40%] flex ${
            pos ? "lg:justify-start" : "lg:justify-center"
          }  items-center lg:mr-8`}
        >
          <Zoom delay={500} bottom={true}>
            {" "}
            <img src={img} alt="image" className="bg-cover w-full  " />
          </Zoom>
        </div>
        <div className="lg:flex-1 w-full lg:w-[60%] items-start justify-start  text-left">
          {content}
        </div>
      </div>
    </div>
  );
}

export default Twos;
