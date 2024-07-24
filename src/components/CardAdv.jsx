import React from 'react'
import { motion } from 'framer-motion'
const CardAdv = ({Icon,title,text}) => {
  return (
    <motion.div
    initial={{y:100,opacity:0}}
    whileInView={{y:0,opacity:100}}
    transition={{duration:1,delay:0.2}}
    className='md:w-[30%] md:mt-10 md:ml-32 mt-2 ml-10 md:h-full h-[10vh] flex gap-4 justify-start items-center'>
        <div className='left_icon'>
            {Icon && <Icon className="text-[#E52222] text-3xl md:text-5xl"/>}
        </div>
        <div className="right ml-3 flex flex-col gap-3">
            <h1 className='text-white md:text-3xl font-bold italic'>{title}</h1>
            <p className='text-gray-400'>{text}</p>
        </div>
    </motion.div>
  )
}

export default CardAdv