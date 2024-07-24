import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import './styles.css'; // Ensure this file exists and contains Swiper styles

// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';

import pic from '/successpic.png'; // Correct path for the local asset

const Success = () => {
    return (
        <div className='bg-gray-950'>
            <div>
                <h1 className='text-[#E52222] text-center uppercase text-3xl md:text-5xl italic p-10 font-bold'>
                    SUCCES<span className='border-b border-gray-7600'>S S</span>TORIES
                </h1>
            </div>
            <Swiper
                slidesPerView={2.5} // Show 2 slides fully and part of the 3rd slide
                spaceBetween={30} // Space between slides
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500, // Slide change delay in milliseconds
                    disableOnInteraction: false, // Continue autoplay even after user interactions
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide className='md:w-[30%] mb-20 mx-10 mt-10 h-[30%]  md:h-[50%]'>
                    <div className='bg-gray-900 w-full flex flex-col h:[10%] justify-center items-center'>
                        <div className='mt-10 w-[100px] md:w-[150px] mb-7'>
                            <img src={pic} alt="Success" className='rounded-full md:w-[200px]' />
                        </div>
                        <h1 className='text-gray-600 hidden md:block text-sm md:text-xl p-4 mb-5'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima minus quo accusamus mollitia ipsa.
                        </h1>
                        <h1 className='text-white mb-2 font-bold italic'>NAME</h1>
                        <h2 className='text-[#E52222] mb-4'>Location</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[30%] mb-20 mx-5 mt-10 h-[50%]'>
                    <div className='bg-gray-900 w-full flex flex-col justify-center items-center'>
                        <div className='mt-10 w-[100px] md:w-[150px] mb-7'>
                            <img src="sucess.png" alt="Success" className='rounded-full w-[200px]' />
                        </div>
                        <h1 className='text-gray-600 hidden md:block text-sm md:text-xl p-4 mb-5'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima minus quo accusamus mollitia ipsa.
                        </h1>
                        <h1 className='text-white mb-2 font-bold italic'>NAME</h1>
                        <h2 className='text-[#E52222] mb-4'>Location</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[30%] mb-20 mx-5 mt-10 h-[50%]'>
                    <div className='bg-gray-900 w-full  flex flex-col justify-center items-center'>
                        <div className='mt-10 w-[100px] md:w-[150px] mb-7'>
                            <img src={pic} alt="Success" className='rounded-full w-[200px]' />
                        </div>
                        <h1 className='text-gray-600 hidden md:block text-sm md:text-xl p-4 mb-5'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima minus quo accusamus mollitia ipsa.
                        </h1>
                        <h1 className='text-white mb-2 font-bold italic'>NAME</h1>
                        <h2 className='text-[#E52222] mb-4'>Location</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[30%] mb-20 mx-5 mt-10 h-[50%]'>
                    <div className='bg-gray-900 w-full flex flex-col justify-center items-center'>
                        <div className='mt-10 w-[100px] md:w-[150px] mb-7'>
                            <img src="/sucess.png" alt="Success" className='rounded-full ' />
                        </div>
                        <h1 className='text-gray-600 hidden md:block text-sm md:text-xl p-4 mb-5'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima minus quo accusamus mollitia ipsa.
                        </h1>
                        <h1 className='text-white mb-2 font-bold italic'>NAME</h1>
                        <h2 className='text-[#E52222] mb-4'>Location</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[30%] mb-20 mx-5 mt-10 h-[50%]'>
                    <div className='bg-gray-900 w-full  flex flex-col justify-center items-center'>
                        <div className='mt-10 w-[100px] md:w-[150px] mb-7'>
                            <img src={pic} alt="Success" className='rounded-full w-[200px]' />
                        </div>
                        <h1 className='text-gray-600 hidden md:block text-sm md:text-xl p-4 mb-5'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima minus quo accusamus mollitia ipsa.
                        </h1>
                        <h1 className='text-white mb-2 font-bold italic'>NAME</h1>
                        <h2 className='text-[#E52222] mb-4'>Location</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[30%] mb-20 mx-5 mt-10 h-[50%]'>
                    <div className='bg-gray-900 w-full flex flex-col justify-center items-center'>
                        <div className='mt-10 w-[100px] md:w-[150px] mb-7'>
                            <img src="/sucess.png" alt="Success" className='rounded-full ' />
                        </div>
                        <h1 className='text-gray-600 hidden md:block text-sm md:text-xl p-4 mb-5'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima minus quo accusamus mollitia ipsa.
                        </h1>
                        <h1 className='text-white mb-2 font-bold italic'>NAME</h1>
                        <h2 className='text-[#E52222] mb-4'>Location</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[30%] mb-20 mx-5 mt-10 h-[50%]'>
                    <div className='bg-gray-900 w-full  flex flex-col justify-center items-center'>
                        <div className='mt-10 w-[100px] md:w-[150px] mb-7'>
                            <img src={pic} alt="Success" className='rounded-full w-[200px]' />
                        </div>
                        <h1 className='text-gray-600 hidden md:block text-sm md:text-xl p-4 mb-5'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima minus quo accusamus mollitia ipsa.
                        </h1>
                        <h1 className='text-white mb-2 font-bold italic'>NAME</h1>
                        <h2 className='text-[#E52222] mb-4'>Location</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[30%] mb-20 mx-5 mt-10 h-[50%]'>
                    <div className='bg-gray-900 w-full flex flex-col justify-center items-center'>
                        <div className='mt-10 w-[100px] md:w-[150px] mb-7'>
                            <img src="/sucess.png" alt="Success" className='rounded-full ' />
                        </div>
                        <h1 className='text-gray-600 hidden md:block text-sm md:text-xl p-4 mb-5'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima minus quo accusamus mollitia ipsa.
                        </h1>
                        <h1 className='text-white mb-2 font-bold italic'>NAME</h1>
                        <h2 className='text-[#E52222] mb-4'>Location</h2>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Success;
