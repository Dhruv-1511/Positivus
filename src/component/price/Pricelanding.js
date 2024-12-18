import React from 'react'
import { basic, elite, pro } from '../../assets/Plans'

const Pricelanding = () => {
  return (
    <div className='px-28 lg:px-8 mt-28 '>
      <div>
        <p className='text-7xl font-semibold'>Pricing</p>
        <p className='mt-8 max-w-96'>Elevate Your Online Presence: Competitive Pricing for Exceptional Results</p>
      </div>

      <div className=' mt-20 flex gap-10 md:flex-col'>
        <div className='p-5 flex flex-col border border-black rounded-3xl'>
          <p className='text-3xl font-semibold'>Basic Plan</p>
          <div className='flex mt-5 gap-3 items-center'>
            <p className='text-4xl font-semibold '>$500</p>
            <p>/month</p>
          </div>
          <button className="mt-10 py-3 rounded-lg border-2 border-black bg-black text-white hover:bg-white hover:text-black lg:py-2">
            Get Started
          </button>
          <button className="mt-5 border-2 border-black py-3 rounded-lg hover:bg-black hover:text-white lg:py-2">
            Request a quote
          </button>
          <div className='h-[2px] bg-black my-10' />
          <div className='flex flex-col gap-3'>
            {basic.map((val) => (
              <div key={val.id} className='flex gap-3'>
                <img src='true.png' alt='' className='h-7' />
                <p>{val.message}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='p-5 flex flex-col border border-black bg-black rounded-3xl'>
          <div className='flex justify-between'>
            <p className='text-3xl font-semibold text-white'>Pro Plan</p>
            <p className='bg-customLime px-6 py-2 rounded-3xl'>Popular</p>
          </div>
          <div className='flex mt-5 gap-3 items-center'>
            <p className='text-4xl font-semibold text-white '>$1000</p>
            <p className='text-white'>/month</p>
          </div>
          <button className="mt-10 py-3 rounded-lg bg-customLime text-black hover:bg-white hover:text-black lg:py-2">
            Get Started
          </button>
          <button className="mt-5 border-2 border-white text-white py-3 rounded-lg hover:bg-customLime hover:text-black hover:border-hidden lg:py-2">
            Request a quote
          </button>
          <div className='h-[2px] bg-white my-10' />
          <div className='flex flex-col gap-3'>
            {pro.map((val) => (
              <div key={val.id} className='flex gap-3'>
                <img src='true.png' alt='' className='h-7' />
                <p className='text-white'>{val.message}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='p-5 flex flex-col border border-black rounded-3xl'>
          <p className='text-3xl font-semibold'>Elite Plan</p>
          <div className='flex mt-5 gap-3 items-center'>
            <p className='text-4xl font-semibold '>$2000</p>
            <p>/month</p>
          </div>
          <button className="mt-10 py-3 rounded-lg border-2 border-black bg-black text-white hover:bg-white hover:text-black lg:py-2">
            Get Started
          </button>
          <button className="mt-5 border-2 border-black py-3 rounded-lg hover:bg-black hover:text-white lg:py-2">
            Request a quote
          </button>
          <div className='h-[2px] bg-black my-10' />
          <div className='flex flex-col gap-3'>
            {elite.map((val) => (
              <div key={val.id} className='flex gap-3'>
                <img src='true.png' alt='' className='h-7' />
                <p>{val.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricelanding