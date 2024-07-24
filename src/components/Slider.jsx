import React, { useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import './Slider.css';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CustomNextButton = () => (
  <div className="custom-swiper-button-next absolute right-7 top-[70%] md:top-1/2 transform -translate-y-1/2 z-10">
    <BiRightArrow size={30} className="text-white" />
  </div>
);

const CustomPrevButton = () => (
  <div className="custom-swiper-button-prev absolute left-4 top-[70%] md:top-1/2 transform -translate-y-1/2 z-10">
    <BiLeftArrow size={30} className="text-white" />
  </div>
);

export default function SwiperComponent() {
  useEffect(() => {
    const nextButton = document.querySelector('.custom-swiper-button-next');
    const prevButton = document.querySelector('.custom-swiper-button-prev');
    
    if (nextButton && prevButton) {
      nextButton.addEventListener('click', () => {
        document.querySelector('.swiper-button-next').click();
      });

      prevButton.addEventListener('click', () => {
        document.querySelector('.swiper-button-prev').click();
      });
    }
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <motion.div
         initial={{x:-100,opacity:0}}
         whileInView={{x:0,opacity:100}}
         transition={{duration:1, delay:1.5}}
      className='absolute text-white flex flex-col justify-center items-center mt-20 md:w-[80%] w-[32] md:ml-28 z-20 p-4'>
        <h2 id='font' className='font-bold text-[20px] md:text-[30px]'>Gym, Dancing & Yoga</h2>
        <h1 id='shape' className='font-bold  text-[40px] md:text-[80px]'>Shape Yourself</h1>
        <p className='text-center text-[17px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore doloremque nam a amet!</p>
        <h2 id='font' className='font-bold  text-[20px] mt-5 md:text-[30px]'>Starting from $29/mp</h2>
        <div className='flex gap-2'>
          <button className='bg-transparent font-bold mt-6 md:text-lg p-3 border-2 border-white'>Contact us now</button>
          <button className='bg-transparent font-bold mt-6 md:text-lg p-3 border-2 border-white'>Purchase now</button>
        </div>
      </motion.div>
      <Swiper
        className='w-screen h-full'
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.custom-swiper-button-next',
          prevEl: '.custom-swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log('Swiper initialized:', swiper)}
        onSlideChange={() => console.log('Slide changed')}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={800}
      >
        <SwiperSlide className='flex items-center justify-center'>
          <img className='w-screen h-full object-cover opacity-90' src="/one.jpg" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center'>
          <img className='w-full h-full object-cover opacity-90' src="/two.jpg" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center'>
          <img className='w-full h-full object-cover opacity-90' src="/three.jpg" alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center'>
          <img className='w-full h-full object-cover opacity-90' src="/four.jpg" alt="Slide 4" />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center'>
          <img className='w-full h-full object-cover opacity-90' src="/five.jpg" alt="Slide 5" />
        </SwiperSlide>
      </Swiper>

      <CustomNextButton />
      <CustomPrevButton />
    </div>
  );
}
