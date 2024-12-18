import React from 'react'

const Aboutlanding = () => {
    return (
        <div className=' px-28 lg:px-8 mt-28'>
            <div className='bg-gray-200 flex p-20 rounded-3xl justify-between md:flex-col sm:p-16'>
                <img src='aboutbox.png' alt='' className='h-96 lg:h-64, sm:h-auto' />
                <div className='max-w-[450px] mr-16 lg:mr-0 lg:max-w-[300px],sm:max-w-auto sm:mt-10'>
                    <p className='text-7xl font-semibold lg:text-3xl'>Together for Success</p>
                    <p className='text-xl mt-10 lg:text-base sm:text-xs'>At Positivus, we help businesses grow by combining creativity, innovation, and data- driven strategies. Together, we build a future of shared success.</p>
                </div>
            </div>

            <div>
                <div className='flex mt-20 md:flex-col md:items-center'>
                    <p className='bg-customLime text-3xl p-2 rounded-lg font-medium md:text-lg md:text-center'>Our Impact in Numbers</p>
                    <p className='max-w-xl text-xl px-9 md:text-sm md:mt-4 md:text-center'>A snapshot of the milestones and achievements that drive our success</p>
                </div>
                
                <div className='mt-20 grid grid-cols-5 sm:grid-cols-2'>
                    <div className='border-t-2 border-black p-10 rounded-r-3xl sm:rounded-3xl'>
                        <p className='text-3xl font-semibold'>8+</p>
                        <p className='text-lg sm:text-base'>Years of Experience</p>
                    </div>
                    <div className='border-t-2 border-black p-10 rounded-3xl'>
                        <p className='text-3xl font-semibold'>50+</p>
                        <p className='text-lg'>Experts</p>
                    </div>
                    <div className='border-t-2 border-black p-10 rounded-3xl'>
                        <p className='text-3xl font-semibold'>100+</p>
                        <p className='text-lg'>Successful Campaigns</p>
                    </div>
                    <div className='border-t-2 border-black p-10 rounded-3xl'>
                        <p className='text-3xl font-semibold'>20+</p>
                        <p className='text-lg'>Industry Awards</p>
                    </div>
                    <div className='border-t-2 border-black p-10 rounded-l-3xl sm:rounded-3xl'>
                        <p className='text-3xl font-semibold'>500%</p>
                        <p className='text-lg'>Industry Awards</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutlanding