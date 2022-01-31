import React from 'react';

function Twos({ img, content, pos }) {
  return (
    <div className="w-full my-2">
      <div
        className={`flex ${
          pos ? 'lg:flex-row' : 'lg:flex-row-reverse'
        } flex-col items-center justify-center lg:justify-between `}
      >
        <div
          className={`lg:p-6 py-8 flex ${
            pos ? 'lg:justify-start' : 'lg:justify-center'
          } justify-center items-center lg:mr-8`}
        >
          <img src={img} alt="image" className="bg-cover w-full" />
        </div>
        <div className="lg:flex-1 items-start justify-start  text-left">{content}</div>
      </div>
    </div>
  );
}

export default Twos;
