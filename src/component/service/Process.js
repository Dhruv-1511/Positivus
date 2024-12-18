import React from 'react'
import Processes from '../../assets/Processes'

const Process = () => {
    return (
        <div className='px-28 lg:px-8'>
            <div className='flex mt-20 md:flex-col md:items-center'>
                <p className='bg-customLime text-3xl p-2 rounded-lg font-medium h-fit md:text-lg md:text-center'>How We Work: SEO Process</p>
                <p className='max-w-2xl text-xl px-9 md:text-sm md:mt-4 md:text-center'>Our step-by-step SEO process ensures your website ranks higher, attracts more traffic, and drives lasting results.</p>
            </div>

            <div className='mt-28 flex flex-col gap-10 '>
                {Processes.map((val, index) => (
                    <div key={index} className='bg-gray-100 flex p-10 rounded-3xl gap-20 sm:gap-5'>
                        <div className='relative flex-shrink-0 h-[100px] w-[100px] sm:h-[50px] sm:w-[50px]'>
                            <img src='logo.png' alt='' className='h-full w-full' />
                            <p className=' absolute top-7 left-9 text-lime-300 text-5xl font-bold z-20 sm:text-3xl sm:top-2 sm:left-4'>{val.id}</p>
                        </div>
                        <div>
                            <p className='text-3xl font-semibold'>{val.title}</p>
                            <p className='mt-5 text-xl'>{val.message}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Process
