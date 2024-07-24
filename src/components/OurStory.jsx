import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import card1 from '/card1.jpg';
import card2 from '/card2.jpg';
import card3 from '/card3.jpg';
import png from '/png2.png'
import { motion } from 'framer-motion';
import { BsPersonStanding } from "react-icons/bs";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { FaPersonPraying } from "react-icons/fa6";
import Card from './Card';

const OurStory = () => {
    const cardData = [
        {
            picture: card2,
            price: '$29',
            title: "Gym and fitness",
            Icon: FaArrowRightLong
        },
        {
            picture: card1,
            price: '$29',
            title: "Gym and fitness",
            Icon: FaArrowRightLong
        },
        {
            picture: card3,
            price: '$29',
            title: "Gym and fitness",
            Icon: FaArrowRightLong
        }
    ];

    return (
        <>

            <div className='story bg-slate-950 p-10'>
                <div className='flex  flex-wrap gap-1 justify-center '>
                    {cardData.map((data, index) => (
                        <Card
                            key={index}
                            picture={data.picture}
                            price={data.price}
                            title={data.title}
                            Icon={data.Icon}
                        />
                    ))}
                </div>

                <h1 className='text-center text-[#E52222] text-5xl font-bold italic mt-20'>OUR <span className='border-b border-gray-600'>S</span>TORY</h1>


                <div className="data flex">


                    <div className="left md:w-1/2 ">

                        <div className="parah md:ml-10 mt-10">
                            <p className='text-white text-center'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur facilis similique tempore, sint consequuntur fugit possimus eum illum.
                            </p>
                            <p className='text-white mt-5 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto necessitatibus, ut modi dolorum obcaecati dolorem cumque autem exercitationem quos adipisci veritatis repellat. Eaque accusamus minima molestias porro! Totam, itaque voluptate.</p>
                        </div>
                        <motion.div
                        initial={{y:100,opacity:0}}
                        whileInView={{y:0,opacity:100}}
                        transition={{duration:1,delay:0.2}}
                        className='first flex gap-3 text-xl font-bold mt-16 ml-10 text-[#E52222]'>
                            <BsPersonStanding className='text-7xl'/>
                            <h2 className='flex items-center'>OPEN DOOR POLICY</h2>
                        </motion.div>
                        <motion.div
                        initial={{y:100,opacity:0}}
                        whileInView={{y:0,opacity:100}}
                        transition={{duration:1,delay:0.2}}
                        className="second flex gap-3 text-xl font-bold mt-16 ml-10 text-[#E52222]">
                        <AiOutlineMedicineBox className='text-7xl'/>
                        <h2 className='flex items-center' >Fully INSURED</h2>
                        </motion.div>
                        <motion.div
                        initial={{y:100,opacity:0}}
                        whileInView={{y:0,opacity:100}}
                        transition={{duration:1,delay:0.2}}
                        className="third flex gap-3 text-xl font-bold mt-16 ml-10 text-[#E52222]">
                        <FaPersonPraying className='text-7xl'/>
                        <h2 className='flex items-center'>PERSONAL TRAINER</h2>
                        </motion.div>
                    </div>

                    <div className="hidden md:block right md:ml-10 w-1/2">
                        <img className='w-[70%] mt-10 ml-16 md:ml-32' src={png} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurStory;
