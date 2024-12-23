import React from 'react'

const Usecaselanding = () => {
  return (
    <div className='px-20 lg:px-8 mt-28 '>
        <div className='flex bg-gray-200 rounded-3xl p-16 gap-16 lg:flex-col lg:p-10'>
            <img src='usecasebox.png' alt='' className='h-auto w-auto' />
            <div className='mt-10 lg:mt-5'>
                <p className='text-6xl font-semibold lg:text-3xl'>Proven Success Stories</p>
                <p className='text-xl mt-20 lg:mt-5'>See how our innovative digital marketing strategies have transformed businesses. Whether through SEO, PPC, social media, or web design, these use cases highlight the tangible impact of our work. Explore the successes and envision what we can achieve together.</p>
            </div>
        </div>

        <div className='flex p-16 bg-customDark rounded-3xl mt-28 gap-10 justify-between md:flex-col md:items-center'>
            <div className='flex flex-col justify-between max-w-[635px]'>
                <p className='bg-customLime text-5xl w-fit rounded-lg p-1 lg:text-2xl'>Featured Success Story</p>
                <p className='text-white text-5xl mt-5 lg:text-xl '>Scaling Success for a Leading E-Commerce Brand</p>
                <p className='text-white mt-5 '>Through a comprehensive SEO and PPC strategy, we helped this e-commerce brand increase visibility, drive traffic, and boost sales.</p>
                <div className='flex gap-3 items-center cursor-pointer mt-5'>
                    <img src='arrow4.png' alt='' className='h-10 p-2 bg-customLime rounded-full md:h-5 md:p-1'  />
                    <p className='text-lime-300 text-lg md:text-base'>Read</p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-10 max-w-[380px] md:gap-5'>
                <div className='bg-white p-5 rounded-xl text-center md:p-3'>
                    <p className='text-3xl font-semibold md:text-2xl'>200%</p>
                    <p className='mt-3'>increase in organic traffic</p>
                </div>
                <div className='bg-white p-5 rounded-xl text-center md:p-3'>
                    <p className='text-3xl font-semibold md:text-2xl'>150%</p>
                    <p className='mt-3'>rise in online sales</p>
                </div>
                <div className='bg-white p-5 rounded-xl text-center md:p-3'>
                    <p className='text-3xl font-semibold md:text-2xl'>75%</p>
                    <p className='mt-3'>reduction in cost-per-click (CPC)</p>
                </div>
                <div className='bg-white p-5 rounded-xl text-center md:p-3'>
                    <p className='text-3xl font-semibold md:text-2xl'>300%</p>
                    <p className='mt-3'>improvement in conversion rate</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Usecaselanding