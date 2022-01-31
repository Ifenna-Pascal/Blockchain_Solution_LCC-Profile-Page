import React from 'react';

function Twos({ img, content, pos }) {
  return (
    <div className="w-full my-2">
      <div
        className={`flex ${
          pos ? 'md:flex-row' : 'md:flex-row-reverse'
        } flex-col items-center justify-center md:justify-between `}
      >
        <div
          className={`p-6 flex ${
            pos ? 'md:justify-start' : 'md:justify-center'
          } justify-center items-center mr-8`}
        >
          <img src={img} alt="image" className="bg-cover w-full" />
        </div>
        <div className="flex-1 items-start justify-start  text-left">{content}</div>
      </div>
    </div>
  );
}

export default Twos;
