import React from 'react'

const Servicelanding = () => {
    return (
        <div className=' px-28 lg:px-8 mt-28 lg:mt-10'>
            <div className='bg-gray-100 flex rounded-3xl p-20 gap-20 xl:gap-0 md:flex-col md:p-10 md:bg-transparent '>
                <img src='servlanding.png' alt='' className='h-96 lg:h-auto' />
                <div className='md:mt-10'>
                    <p className='text-6xl font-semibold xl:text-3xl '>Expert Digital Marketing Services</p>
                    <p className='mt-10 text-xl max-w-md xl:w-auto md:mt-4'>Unlock your business's full potential with tailored strategies designed to drive growth and deliver results.</p>
                </div>
            </div>

            <div className='bg-customDark p-10 rounded-3xl flex gap-20 mt-28 sm:flex-col sm:gap-10'>
                <div>
                    <div className='flex items-center'>
                        <img src='star.png' alt='' className='h-8' />
                        <p className='text-lime-300 text-xl ml-5'>FEATURED</p>
                    </div>
                    <div className='mt-10'>
                        <p className='bg-customLime w-fit text-3xl font-medium rounded-md p-1 sm:bg-transparent sm:text-white'>Search engine</p>
                        <p className='bg-customLime w-fit text-3xl font-medium rounded-md p-1 sm:bg-transparent sm:text-white'>optimization</p>
                    </div>
                </div>
                <div className='max-w-[800px]'>
                    <p className='text-white text-xl sm:text-lg'>SEO is the process of improving your website's visibility on search engines like Google. By optimizing your content and site structure, we help your business rank higher in search results, driving more organic traffic and potential customers.</p>
                    <button className='bg-white  rounded-2xl w-full h-16 mt-10 hover:bg-black hover:text-white hover:border border-white'>Boost My Rankings</button>
                </div>
            </div>
        </div>
    )
}

export default Servicelanding