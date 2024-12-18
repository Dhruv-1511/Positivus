import React from 'react'
import Servicecard from '../Servicecard'

const Usecase = () => {
    return (
        <div className='px-28 lg:px-8'>
            <div className='flex mt-20 md:flex-col md:items-center'>
                <p className='bg-customLime text-3xl p-2 rounded-lg font-medium h-fit md:text-lg md:text-center'>Use Cases</p>
                <p className='max-w-2xl text-xl px-9 md:text-sm md:mt-4 md:text-center'>Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
            </div>

            <div className='flex mt-20 bg-black rounded-3xl p-10 sm:flex-col '>
                <div className='w-4/6 sm:w-full'>
                    <p className='text-white text-3xl'>E-commerce Fashion Brand</p>
                    <p className='text-white mt-5 lg:text-sm'>We implemented a tailored SEO strategy that boosted organic search rankings, leading to a 150% increase in website traffic and a 50% rise in online sales within six months.</p>
                    <div className='flex items-center cursor-pointer mt-5'>
                        <p className='text-lime-200'>Learn more</p>
                        <img src='arrow3.png' alt='' className='h-4 ml-3 ' />
                    </div>
                </div>
                <div>
                    <div className='w-px h-full bg-white mx-5'></div>
                    <div className='hidden sm:flex sm:w-full sm:h-px sm:bg-white sm:my-5'></div>

                </div>
                <div className='w-4/6 sm:w-full'>
                    <p className='text-white text-3xl'>Local Restaurant Chain</p>
                    <p className='text-white mt-5 lg:text-sm'>By optimizing local SEO and enhancing Google My Business profiles, we increased visibility. driving a 300% boost in online reservations and foot traffic.</p>
                    <div className='flex items-center mt-10 cursor-pointer sm:mt-5'>
                        <p className='text-lime-200 '>Learn more</p>
                        <img src='arrow3.png' alt='' className='h-4 ml-3 ' />
                    </div>
                </div>
                <div>
                    <div className='w-px h-full bg-white mx-5'></div>
                    <div className='hidden sm:flex sm:w-full sm:h-px sm:bg-white sm:my-5'></div>
                </div>
                <div className='w-4/6 sm:w-full'>
                    <p className='text-white text-3xl'>Healthcare Provider</p>
                    <p className='text-white mt-5 lg:text-sm'>Through content optimization and targeted keyword strategy. we helped a healthcare provider rank on the first page for critical services, resulting in a 180% increase in inquiries and patient bookings.</p>
                    <div className='flex items-center cursor-pointer mt-10 sm:mt-5'>
                        <p className='text-lime-200'>Learn more</p>
                        <img src='arrow3.png' alt='' className='h-4 ml-3 ' />
                    </div>
                </div>
            </div>

            <div className='flex mt-20 md:flex-col md:items-center'>
                <p className='bg-customLime text-3xl p-2 rounded-lg font-medium h-fit md:text-lg md:text-center'>Our Other Services</p>
                <p className='max-w-3xl text-xl px-9 md:text-sm md:mt-4 md:text-center'>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
            </div>
            <Servicecard />

            <div className='mt-28 flex p-12 border-2 border-black rounded-3xl justify-between shadow-[0px_5px_1px_-1px] lg:flex-col'>
                <div className='flex flex-col justify-between max-w-[600px]'>
                    <p className='text-3xl font-semibold'>Ready to Elevate Your Search Rankings?</p>
                    <div className='bg-black w-auto h-px lg:my-5'></div>
                    <p className='text-lg'>Our proven SEO strategies are designed to help your business achieve long-lasting success in search engines. Whether you want to boost organic traffic, improve keyword rankings, or increase conversions, we're here to make it happen.</p>
                    <p className='font-semibold lg:mt-5'>Let's work together to grow your online presence.</p>
                    <button className='bg-customLime p-5 rounded-xl lg:mt-5 hover:bg-transparent hover:border hover:border-black'>Start My SEO Journey</button>
                </div>
                <img src='aboutbox2.png' alt='' className='h-96 lg:max-w-96 lg:h-auto' />
            </div>
        </div>
    )
}

export default Usecase