import React from 'react'
import Servicecard from '../Servicecard'

const Serviceblok = () => {
  return (
    <div className='mt-40 px-20 md:px-8 md:mt-28'>
            <div className='flex md:flex-col md:items-center'>
                <p className='bg-customLime text-5xl p-2 rounded-lg font-medium md:text-xl md:text-center'>Services</p>
                <p className='max-w-2xl text-lg px-9 md:text-sm md:mt-4 md:text-center'>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
            </div>

            <Servicecard />

            <div className="relative mt-32 bg-gray-100 rounded-3xl z-10 md:mt-28">
                <img src='frame.png' alt='' className='absolute object-cover rounded-3xl z-0 lg:hidden ' style={{
                    transform: 'translateY(-25px)',
                    height: '425px',
                    right: 0
                }} />
                <div className="relative p-16 flex flex-col w-5/12 z-10 lg:w-auto">
                    <p className="text-3xl font-medium">Let’s make things happen</p>
                    <p className="mt-8 text-lg">
                        Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
                    </p>
                    <button className="mt-8 bg-black text-white border-2 border-black text-xl w-64 h-16 rounded-xl hover:bg-white hover:text-black lg:text-base lg:w-52 lg:h-12">
                        Get Your free proposal
                    </button>
                </div>
            </div>
        </div>
  )
}

export default Serviceblok