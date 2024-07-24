import React from 'react'
import './Advantages.css'
import { FaPersonShelter } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";
import { BsAwardFill } from "react-icons/bs";
import { GiLaurelsTrophy } from "react-icons/gi";
import { PiBicycleFill } from "react-icons/pi";
import { MdOutlinePerson2 } from "react-icons/md";
import { GiGymBag } from "react-icons/gi";
import CardAdv from './CardAdv';
const Advantages = () => {
  const adv=[
    {
      icon:FaPersonShelter,
      title:"QUALIFIED TRAININGS",
      text:'Welcome to gym keep an eye on your fitness.'
    },
    {
      icon:MdHealthAndSafety,
      title:"FULLY INSURED",
      text:'Welcome to gym keep an eye on your fitness.'
    },{
      icon:BsAwardFill,
      title:"INDIVIDUAL TRAINING",
      text:'Welcome to gym keep an eye on your fitness.'
    },{
      icon:GiLaurelsTrophy,
      title:"TRAINED CHAMPS",
      text:'Welcome to gym keep an eye on your fitness.'
    },{
      icon:PiBicycleFill,
      title:"MULTIPLE CLASSIS",
      text:'Welcome to gym keep an eye on your fitness.'
    },{
      icon:MdOutlinePerson2,
      title:"OPENDOOR POLICY",
      text:'Welcome to gym keep an eye on your fitness.'
    },{
      icon:GiGymBag,
      title:"HIGHTECH GYM",
      text:'Welcome to gym keep an eye on your fitness.'
    },{
      icon:GiGymBag,
      title:"HITECH GYM",
      text:'Welcome to gym keep an eye on your fitness.'
    }
  ]
  return (
    <div className='back'>
        <div>
        <h1 className='text-[#E52222] text-center uppercase text-3xl md:text-5xl italic p-10 font-bold'>Our Adv<span className='border-b border-gray-7600'>a</span>ntages</h1>
        </div>

        <div className="md:flex flex-wrap">
          {adv.map((data,index)=>(
            <CardAdv key={index} Icon={data.icon} title={data.title} text={data.text}/>
          ))}
        </div>
    </div>
  )
}

export default Advantages