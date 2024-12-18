import React from 'react'
import awards from '../../assets/Awardasst'

const Award = () => {
    return (
        <div className='px-28 lg:px-8'>
            <div className='flex mt-20 md:flex-col md:items-center'>
                <p className='bg-customLime text-3xl p-2 rounded-lg font-medium md:text-lg md:text-center'>Awards & Recognition</p>
                <p className='max-w-3xl text-xl px-9 md:text-sm md:mt-4 md:text-center'>At Positivus, our commitment to excellence has been recognized by Industry leaders. Here are some of our proudest achievements</p>
            </div>

            <div className='grid grid-cols-4 mt-28 gap-10 lg:grid-cols-2 lg:gap-5'>
                {awards.map((val, index) => (
                    <div key={index} className='flex flex-col max-w-96 bg-gray-100 p-10 rounded-3xl md:p-5'>
                        <img src={val.img} alt='' />
                        <p className='text-lg font-semibold mt-10 sm:text-base sm:mt-5'>{val.title}</p>
                        <p className='mt-8 sm:text-xs sm:mt-4'>{val.message}</p>
                    </div>
                ))}
            </div>

            <div className='mt-28 flex bg-customLime rounded-3xl p-20 border border-black md:flex-col sm:p-10 sm:text-center shadow-[0px_5px_1px_-1px]'>
                <div className=''>
                    <p className='text-3xl font-semibold'>Join Our Team</p>
                    <p className='mt-10 text-xl'>At Positivus, we thrive on innovation and collaboration. We're always looking for passionate individuals to join our team and help businesses grow. Ready to make an impact?</p>
                    <button className='mt-10 text-white text-2xl bg-black p-5 rounded-xl hover:bg-white hover:text-black hover:border border-black'>Explore Careers</button>
                </div>
                <img src='awardbox.png' alt='' className='h-72 sm:h-auto sm:mt-4' />
            </div>

        </div>
    )
}

export default Award