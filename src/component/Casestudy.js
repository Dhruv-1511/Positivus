import React from 'react'

const Casestudy = () => {
  return (
    <div className='mt-40 px-20 md:px-12 md:mt-28'>
      <div className='flex md:flex-col'>
        <p className='bg-lime-300 text-5xl p-2 rounded-lg font-medium md:text-xl md:text-center'>Case Studies</p>
        <p className='max-w-2xl text-xl px-9 md:text-sm md:mt-4 md:text-center'>Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
      </div>

      <div className='flex mt-20 bg-black rounded-3xl p-10 sm:flex-col'>
        <div className='w-4/6 sm:w-full'>
          <p className='text-white lg:text-sm'>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
          <div className='flex items-center cursor-pointer mt-10 sm:mt-5 sm:mb-10'>
            <p className='text-lime-200'>Learn more</p>
            <img src='arrow3.png' alt='' className='h-4 ml-3 ' />
          </div>
        </div>
        <div>
          <img src='line.png' alt='' className='h-40 mx-3 lg:h-48 sm:hidden' />
        </div>
        <div className='w-4/6 sm:w-full'>
          <p className='text-white lg:text-sm'>For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
          <div className='flex items-center mt-10 cursor-pointer sm:mt-5 sm:mb-10'>
            <p className='text-lime-200 '>Learn more</p>
            <img src='arrow3.png' alt='' className='h-4 ml-3 ' />
          </div>
        </div>
        <div>
          <img src='line.png' alt='' className='h-40 mx-3 lg:h-48 sm:hidden' />
        </div>
        <div className='w-4/6 sm:w-full'>
          <p className='text-white lg:text-sm'>For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
          <div className='flex items-center cursor-pointer mt-10 sm:mt-5'>
            <p className='text-lime-200'>Learn more</p>
            <img src='arrow3.png' alt='' className='h-4 ml-3 ' />
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Casestudy