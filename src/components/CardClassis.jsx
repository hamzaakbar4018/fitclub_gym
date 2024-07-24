import React from 'react';

const CardClassis = ({ picture, money, title, time, details }) => {
  return (
    <div className='w-[25%] md:w-[30%] bg-gray-950 overflow-hidden m-2'>
      <div className="img h-[200px] md:h-[400px]">
        <img className='w-full h-full object-cover' src={picture} alt={title} />
      </div>
      <div className="text-white flex flex-col justify-center gap-4 items-center mt-2">
        <h2 className='text-[#E52222] mt-4'>{money}</h2>
        <h1 className='text-white text-center md:text-3xl font-bold italic'>{title}</h1>
        <hr className='w-full border-t border-gray-500' />
        <p className='text-gray-600 md:mb-0 mb-4'>{time}</p>
        <hr className='w-full hidden md:block border-t border-gray-500' />
        <p className='hidden md:block text-center text-[8px] md:text-[15px] p-3'>{details}</p>
      </div>
    </div>
  );
};

export default CardClassis;
