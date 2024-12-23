import React from 'react';
import jour from '../../assets/Journeys';

const Journey = () => {
    return (
        <div className='px-28 lg:px-8'>
            <div className='flex mt-20 md:flex-col md:items-center'>
                <p className='bg-customLime text-3xl p-2 rounded-lg font-medium md:text-lg md:text-center md:w-fit '>Our Journey</p>
                <p className='max-w-3xl text-xl px-9 md:text-sm md:mt-4 md:text-center'>From humble beginnings to industry leaders, discover how Positivus has evolved to drive success for businesses worldwide.</p>
            </div>

            <div className='mt-28 flex flex-col gap-20 sm:gap-7'>
                {jour.map((val, index) => (
                    <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} sm:flex-col` } key={index}>
                        <p className='text-5xl font-semibold'>{val.year}</p>
                        <div className='flex bg-customDark ml-8 py-10 pr-32 pl-16 rounded-3xl gap-10 sm:ml-0 sm:mt-5 sm:pl-8 sm:pr-10 sm:gap-5'>
                            <img src='star.png' alt='' className='h-7' />
                            <div>
                                <p className='text-white text-2xl'>{val.title}</p>
                                <p className='text-white max-w-[260px] mt-5'>{val.message}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default Journey;
