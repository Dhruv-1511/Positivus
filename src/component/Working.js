import React, { useState } from 'react';
import process from '../assets/Assets';

const Working = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className='mt-40 px-20 md:px-8 md:mt-28'>
      <div className='flex md:flex-col'>
        <p className='bg-lime-300 text-5xl p-2 rounded-lg font-medium md:text-xl md:text-center'>Our Working Process </p>
        <p className='max-w-md text-xl px-9 md:text-sm md:mt-4 md:text-center'>Step-by-Step Guide to Achieving Your Business Goals</p>
      </div>

      <div className='mt-20 md:mt-16'>
        {process.map((val, index) => (
          <div className={` rounded-3xl p-12 mt-10 overflow-hidden transition-all duration-300 ${expanded === index ? 'bg-lime-300 h-auto' : 'bg-gray-300 h-32 md:h-auto'}`}
            key={index}>
            <div className='flex justify-between items-center'>
              <div className='flex'>
                <p className='text-5xl md:text-xl'>{val.no}</p>
                <p className='text-4xl ml-5 md:text-xl'>{val.title}</p>
              </div>
              <img src={expanded === index ? 'minus.png' : 'plus.png'} alt='Toggle' className='h-10 cursor-pointer'
                onClick={() => toggleExpand(index)}
              />
            </div>
            <div className={`h-px my-10 bg-black ${expanded === index ? 'block' : 'hidden'}`}></div>
            {expanded === index && <p className='text-xl'>{val.content}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Working;
