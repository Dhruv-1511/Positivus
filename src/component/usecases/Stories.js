import React from 'react'
import Testimonial from '../Testimonial'

const Stories = () => {
    return (
        <>
            <div className='mt-40 px-20 md:px-8 md:mt-28 flex md:flex-col md:items-center'>
                <p className='bg-customLime text-5xl p-2 rounded-lg font-medium md:text-xl md:text-center'>All Success Stories</p>
                <p className='max-w-2xl text-xl px-9 md:text-sm md:mt-4 md:text-center'>Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
            </div>

            <div className='mt-28 mx-20 p-10 border border-black rounded-3xl grid grid-cols-3 shadow-[0px_5px_1px_-1px] md:grid-cols-2 md:px-5 md:py-5 md:mx-8'>
                <div className='px-10 pb-10 border-r border-b border-black md:pr-5 md:pl-0 md:pb-5'>
                    <p className='text-2xl font-semibold md:text-xl'>E-commerce Fashion Brand</p>
                    <p className='mt-5 md:text-xs'>We implemented a tailored SEO strategy that boosted organic search rankings, leading to a 150% increase in website traffic and a 50% rise in online sales within six months.</p>
                    <div className='flex items-center mt-5 gap-3'>
                        <img src='arrow.png' alt='' className='h-8' />
                        <p>Learn more</p>
                    </div>
                </div>
                <div className='px-10 pb-10 border-r border-b border-black md:pl-5 md:pr-0 md:pb-5 md:border-r-0'>
                    <p className='text-2xl font-semibold md:text-xl'>Local Restaurant Chain</p>
                    <p className='mt-5 md:text-xs'>By optimizing local SEO and enhancing Google My Business profiles, we increased visibility. driving a 300% boost in online reservations and foot traffic.</p>
                    <div className='flex items-center mt-5 gap-3'>
                        <img src='arrow.png' alt='' className='h-8' />
                        <p>Learn more</p>
                    </div>
                </div>
                <div className='px-10 pb-10 border-b border-black md:pr-5 md:pl-0 md:py-5 md:border-r '>
                    <p className='text-2xl font-semibold md:text-xl'>Healthcare Provider</p>
                    <p className='mt-5 md:text-xs'>Through content optimization and targeted keyword strategy. we helped a healthcare provider rank on the first page for critical services, resulting in a 180% Increase in inquiries and patient bookings.</p>
                    <div className='flex items-center mt-5 gap-3'>
                        <img src='arrow.png' alt='' className='h-8' />
                        <p>Learn more</p>
                    </div>
                </div>
                <div className='px-10 pt-10 border-r border-black md:pl-5 md:pr-0 md:py-5 md:border-r-0 md:border-b'>
                    <p className='text-2xl font-semibold md:text-xl'>E-commerce Fashion Brand</p>
                    <p className='mt-5 md:text-xs'>We implemented a tailored SEO strategy that boosted organic search rankings, leading to a 150% increase in website traffic and a 50% rise in online sales within six months.</p>
                    <div className='flex items-center mt-5 gap-3'>
                        <img src='arrow.png' alt='' className='h-8' />
                        <p>Learn more</p>
                    </div>
                </div>
                <div className='px-10 pt-10 border-r border-black md:pr-5 md:pl-0 md:pt-5'>
                    <p className='text-2xl font-semibold md:text-xl'>Local Restaurant Chain</p>
                    <p className='mt-5 md:text-xs'>By optimizing local SEO and enhancing Google My Business profiles, we increased visibility. driving a 300% boost in online reservations and foot traffic.</p>
                    <div className='flex items-center mt-5 gap-3'>
                        <img src='arrow.png' alt='' className='h-8' />
                        <p>Learn more</p>
                    </div>
                </div>
                <div className='px-10 pt-10 md:pl-5 md:pr-0 md:py-5'>
                    <p className='text-2xl font-semibold md:text-xl'>Healthcare Provider</p>
                    <p className='mt-5 md:text-xs'>Through content optimization and targeted keyword strategy. we helped a healthcare provider rank on the first page for critical services, resulting in a 180% Increase in inquiries and patient bookings.</p>
                    <div className='flex items-center mt-5 gap-3'>
                        <img src='arrow.png' alt='' className='h-8' />
                        <p>Learn more</p>
                    </div>
                </div>
            </div>

            <Testimonial />

            <div className="relative mt-32 mx-20 bg-customLime rounded-3xl z-10 md:mt-28 md:mx-8">
                <img src='frame2.png' alt='' className='absolute object-cover rounded-3xl z-0 lg:hidden ' style={{
                    transform: 'translateY(-25px)',
                    height: '425px',
                    right: 0
                }} />
                <div className="relative p-16 flex flex-col w-6/12 z-10 lg:w-auto lg:p-8 lg:items-center">
                    <p className="text-3xl font-medium">Let's Create Your Next Success Story</p>
                    <p className="mt-8 text-lg">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                    <button className="mt-8 bg-black text-white text-xl w-64 h-16 rounded-xl hover:bg-white hover:text-black hover:border-2 black lg:text-base lg:w-52 lg:h-12">
                        Get Your free proposal
                    </button>
                </div>
            </div>
        </>
    )
}

export default Stories