import React, { useRef } from 'react'
import testasset from '../assets/Testimonialasset'

const Testimonial = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, offsetWidth } = scrollRef.current;
            const scrollAmount = offsetWidth * 1

            if (direction === 'left') {
                scrollRef.current.scrollTo({
                    left: scrollLeft - scrollAmount,
                    behavior: 'smooth',
                });
            } else {
                scrollRef.current.scrollTo({
                    left: scrollLeft + scrollAmount,
                    behavior: 'smooth',
                });
            }
        }
    };
    return (
        <div className='mt-40 px-20 md:px-8 md:mt-28'>
            <div className='flex  md:flex-col md:items-center'>
                <p className='bg-customLime text-5xl p-2 rounded-lg font-medium md:text-xl md:text-center'>Testimonials </p>
                <p className='max-w-2xl text-xl px-9 md:text-sm md:mt-4 md:text-center'>Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
            </div>

            <div className='bg-customDark mt-20 py-16 rounded-3xl md:py-8'>
                <div className='flex gap-16 overflow-hidden p-10 ' ref={scrollRef}>
                    {testasset.map((val, index) => (
                        <div key={index}  >
                            <p className='text-white w-[550px] text-lg p-10 border border-lime-300 rounded-3xl md:w-[300px] md:p-5'>{val.message}</p>
                            <div className='ml-10 mt-10'>
                                <p className='text-lime-300 text-xl'>{val.name}</p>
                                <p className='text-white text-lg'>{val.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center mt-16 gap-96 md:gap-24 md:mt-8'>
                    <img src='leftarrow.png' alt='' onClick={() => scroll('left')} className='cursor-pointer' />
                    <img src='rightarrow.png' alt='' onClick={() => scroll('right')} className='cursor-pointer' />
                </div>
            </div>
            
        </div>
    )
}

export default Testimonial