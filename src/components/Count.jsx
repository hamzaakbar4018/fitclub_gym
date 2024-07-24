import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

import './Count.css';

const Count = () => {
    const [counterOn, setCounterOn] = useState(false);

    return (
        <>
        <div className='main '>
            <div className='clr flex justify-center items-center gap-7 md:gap-48 w-full h-full'>



                <ScrollTrigger 
                    onEnter={() => setCounterOn(true)} 
                    onExit={() => setCounterOn(false)}>
                    <div className="one">
                        <h1 className='text-white italic font-bold text-xl md:text-6xl mb-4'>
                            {counterOn && <CountUp start={0} end={994} duration={6} />}
                            k
                        </h1>
                        <h2 className='text-white flex text-xs justify-center uppercase md:text-xl'>
                            Members
                        </h2>
                    </div>
                </ScrollTrigger>


                <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}>
                <div className="two">
                    <h1 className='text-white italic font-bold text-xl md:text-6xl mb-4'>
                        {counterOn && <CountUp start={0} end={48} duration={5} />}
                        k
                    </h1>
                    <h2 className='text-white uppercase text-xs md:text-xl'>
                        Trainers 
                    </h2>
                </div>
                </ScrollTrigger>



                <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}>
                <div className="two">
                    <h1 className='text-white italic text-xl font-bold md:text-6xl mb-4'>
                        {counterOn && <CountUp start={0} end={25} duration={5} />}
                        
                    </h1>
                    <h2 className='text-white uppercase text-xs md:text-xl'>
                        classis
                    </h2>
                </div>
                </ScrollTrigger>
                <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}>
                <div className="two">
                    <h1 className='text-white italic text-xl font-bold md:text-6xl mb-4'>
                        {counterOn && <CountUp start={0} end={10} duration={5} />}
                        +
                    </h1>
                    <h2 className='text-white uppercase text-xs md:text-xl'>
                        BEST awards
                    </h2>
                </div>
                </ScrollTrigger>
            </div>

        </div>
        <div className="end">
            <img src="/end.png" alt="" />
        </div>
        </>
    );
};

export default Count;
