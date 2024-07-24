import React from 'react';
import './Classis.css';
import yoga from '/yoga.jpg';
import boxing from '/boxing.jpg';
import body from '/body.jpg';
import CardClassis from './CardClassis';

const Classis = () => {
  const data = [
    {
      picture: body,
      money: '$700$',
      title: 'Body Building',
      time: '9:00-10:00',
      details: 'Provident illo laborum, est nobis tempore necessitatibus natus vel consectetur dignissimos quisquam atque beatae, amet iste facere, rem nesciunt quo corrupti. Amet!'
    },
    {
      picture: yoga,
      money: '$600',
      title: 'YOGA',
      time: '9:00-10:00',
      details: 'Provident illo laborum, est nobis tempore necessitatibus natus vel consectetur.'
    },
    {
      picture: boxing,
      money: '$500',
      title: 'BOXING',
      time: '9:00-10:00',
      details: 'Provident illo laborum, est nobis tempore necessitatibus natus vel consectetur dignissimos quisquam atque beatae, amet iste facere, rem nesciunt quo corrupti. Amet!'
    },
  ];

  return (
    <div className='container'>
      <h1 className='text-5xl text-center flex-wrap flex justify-center items-center p-20 font-bold italic text-[#E52222]'>Popular Classis</h1>
      <div className='flex justify-center flex-wrap'>
        {data.map((item, index) => (
          <CardClassis
            key={index}
            picture={item.picture}
            money={item.money}
            title={item.title}
            time={item.time}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Classis;
