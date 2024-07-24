// Card.jsx
import React from 'react';

const Card = ({ picture, price, title, Icon }) => {
  return (
    <div className='w-[30%] hover:border-b-2 ease-in-out  border-[#E52222] overflow-hidden bg-white '>
      <div className='relative h-[250px] md:h-[350px]'> {/* Corrected height for the image */}
        <img className='w-full h-full object-cover' src={picture} alt={title} />
      </div>

      <div className='bg-[#E52222] text-center p-4 text-white flex flex-col items-center'>
        <h2 className='text-lg text-center italic font-semibold'>{price}</h2>
        <h1 className='md:text-xl text-center italic font-semibold my-2'>{title}</h1>
        {Icon && <Icon className='text-2xl mt-2' />} 
      </div>
    </div>
  );
};

export default Card;
