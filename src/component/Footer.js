import React from 'react'

const Footer = () => {
    return (
        <div className='mt-40 p-12 mx-20 md:mx-8 md:mt-28 rounded-tl-3xl rounded-tr-3xl bg-customDark md:p-8'>
            <div className='flex justify-between lg:flex-col lg:item-center'>
                <div className="flex items-center gap-2 lg:justify-center">
                    <img src="logo2.png" alt="logo" className="w-8 h-8 lg:w-6 lg:h-6" />
                    <a href='/'><p className="text-4xl text-white lg:text-2xl">Positivus</p></a>
                </div>
                <nav className='flex gap-8 md:flex-col lg:mt-5 md:gap-4 lg:text-center'>
                    <a href='/about' className='text-white text-lg underline'>About us</a>
                    <a href='/service' className='text-white text-lg underline'>Services</a>
                    <a href='/usecase' className='text-white text-lg underline'>Use Cases</a>
                    <a href='/pric' className='text-white text-lg underline'>Pricing</a>
                    <a href='/blog' className='text-white text-lg underline'>Blog</a>
                </nav>
                <div className='flex gap-4 lg:mt-5 lg:justify-center'>
                    <img src='linkedin1.png' alt='' className='h-8 cursor-pointer' />
                    <img src='facebook.png' alt='' className='h-8 cursor-pointer' />
                    <img src='twitter.png' alt='' className='h-8 cursor-pointer' />
                </div>
            </div>

            <div className='flex mt-16 justify-between md:flex-col md:mt-8'>
                <div className=' flex flex-col md:items-center md:text-center'>
                    <p className='bg-lime-400 w-fit p-1 rounded-md text-xl font-medium'>Contact us:</p>
                    <p className='text-white mt-7 text-lg md:text-base md:mt-4'>Email: info@positivus.com</p>
                    <p className='text-white mt-7 text-lg md:text-base md:mt-4'>Phone: 555-567-8901</p>
                    <p className='text-white mt-7 text-lg md:text-base md:mt-4'>Address: 1234 Main St</p>
                    <p className='text-white text-lg md:text-base'>Moonstone City, Stardust State 12345</p>
                </div>
                <div className='bg-customGrey h-fit p-20 rounded-xl flex gap-3 lg:p-8 lg:flex-col md:mt-5'>
                    <input type='text' placeholder='Email' className='bg-transparent p-5 border border-white text-white rounded-xl text-xl lg:text-base' />
                    <button className='bg-customLime p-5 rounded-xl text-xl hover:bg-white lg:text-sm'>Subscribe to news</button>
                </div>
            </div>

            <div className="h-px my-12 bg-white w-full md:my-8"></div>

            <div className='flex md:flex-col md:items-center'>
                <p className='text-white text-lg md:text-base'>© 2023 Positivus. All Rights Reserved.</p>
                <p className='text-white text-lg underline ml-24 md:ml-0 md:text-base'>Privacy Policy</p>
            </div>
        </div>
    )
}

export default Footer