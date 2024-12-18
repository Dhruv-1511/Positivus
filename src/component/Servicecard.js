import React from 'react'

const Servicecard = () => {
    return (
        <div className='mt-20 flex flex-col gap-10'>
            <div className='flex gap-10 lg:flex-col'>
                <div className='flex p-10 h-80 w-full border-2 border-black rounded-3xl bg-gray-100 justify-between shadow-[0px_5px_1px_0px] sm:flex-col sm:h-auto'>
                    <div className='flex flex-col justify-between'>
                        <div>
                            <p className='bg-customLime w-fit text-3xl font-medium rounded-md p-2 sm:text-lg'>Search engine </p>
                            <p className='bg-customLime w-fit text-3xl font-medium rounded-md p-2 sm:text-lg'>optimization</p>
                        </div>
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <img src='arrow.png' alt='' className='h-12 sm:mt-3' />
                            <p className='text-2xl sm:hidden'>Learn more</p>
                        </div>
                    </div>
                    <div className='h-full w-fit'>
                        <img src='box1.png' alt='' className='h-full w-full' />
                    </div>
                </div>
                <div className='flex p-10 h-80 w-full border-2 border-black rounded-3xl bg-customLime justify-between shadow-[0px_5px_1px_-1px] sm:flex-col sm:h-auto'>
                    <div className='flex flex-col justify-between '>
                        <div>
                            <p className='bg-white w-fit text-3xl font-medium rounded-md p-2 sm:text-lg'>Pay-per-click </p>
                            <p className='bg-white w-fit text-3xl font-medium rounded-md p-2 sm:text-lg'>advertising</p>
                        </div>
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <img src='arrow.png' alt='' className='h-12 sm:mt-3' />
                            <p className='text-2xl sm:hidden'>Learn more</p>
                        </div>
                    </div>
                    <div className='h-full w-fit'>
                        <img src='box2.png' alt='' className='h-full w-full' />
                    </div>
                </div>
            </div>
            <div className='flex gap-10 lg:flex-col'>
                <div className='flex p-10 h-80 w-full border-2 border-black rounded-3xl bg-black justify-between shadow-[0px_5px_1px_-1px] sm:flex-col sm:h-auto'>
                    <div className='flex flex-col justify-between '>
                        <div>
                            <p className='bg-white w-fit text-3xl font-medium rounded-md p-2 sm:text-lg'>Social Media</p>
                            <p className='bg-white w-fit text-3xl font-medium rounded-md p-2 sm:text-lg'>Marketing</p>
                        </div>
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <img src='arrow2.png' alt='' className='h-12 sm:mt-3' />
                            <p className='text-2xl text-white sm:hidden'>Learn more</p>
                        </div>
                    </div>
                    <div className='h-full w-fit'>
                        <img src='box3.png' alt='' className='h-full w-full' />
                    </div>
                </div>
                <div className='flex p-10 h-80 w-full border-2 border-black rounded-3xl bg-gray-100 justify-between shadow-[0px_5px_1px_-1px] sm:flex-col sm:h-auto'>
                    <div className='flex flex-col justify-between '>
                        <div>
                            <p className='bg-customLime w-fit text-3xl font-medium rounded-md p-2 sm:text-lg'>Email </p>
                            <p className='bg-customLime w-fit text-3xl font-medium rounded-md p-2 sm:text-lg'>Marketing</p>
                        </div>
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <img src='arrow.png' alt='' className='h-12 sm:mt-3' />
                            <p className='text-2xl sm:hidden'>Learn more</p>
                        </div>
                    </div>
                    <div className='h-full w-fit'>
                        <img src='box4.png' alt='' className='h-full w-full' />
                    </div>
                </div>
            </div>
            <div className='flex gap-10 lg:flex-col'>
                <div className='flex p-10 h-80 w-full border-2 border-black rounded-3xl bg-customLime justify-between shadow-[0px_5px_1px_-1px] sm:flex-col sm:h-auto'>
                    <div className='flex flex-col justify-between '>
                        <div>
                            <p className='bg-white w-fit text-3xl font-medium rounded-md p-2 sm:text-lg'>Content </p>
                            <p className='bg-white w-fit text-3xl font-medium rounded-md p-2 sm:text-lg'>Creation</p>
                        </div>
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <img src='arrow.png' alt='' className='h-12 sm:mt-3' />
                            <p className='text-2xl sm:hidden'>Learn more</p>
                        </div>
                    </div>
                    <div className='h-full w-fit'>
                        <img src='box5.png' alt='' className='h-full w-full' />
                    </div>
                </div>
                <div className='flex p-10 h-80 w-full border-2 border-black rounded-3xl bg-black justify-between shadow-[0px_5px_1px_-1px] sm:flex-col sm:h-auto   '>
                    <div className='flex flex-col justify-between '>
                        <div>
                            <p className='bg-customLime w-fit text-3xl font-medium rounded-md p-2 sm:text-lg'>Analytics and</p>
                            <p className='bg-customLime w-fit text-3xl font-medium rounded-md p-2 sm:text-lg'>Tracking</p>
                        </div>
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <img src='arrow2.png' alt='' className='h-12 sm:mt-3' />
                            <p className='text-2xl text-white sm:hidden'>Learn more</p>
                        </div>
                    </div>
                    <div className='h-full w-fit'>
                        <img src='box6.png' alt='' className='h-full w-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Servicecard