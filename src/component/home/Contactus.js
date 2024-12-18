import React from 'react'

const Contactus = () => {
    return (
        <div className='mt-40 px-20 md:px-8 md:mt-28'>
            <div className='flex  md:flex-col md:items-center'>
                <p className='bg-customLime text-5xl p-2 rounded-lg font-medium md:text-xl md:text-center '>Contact Us </p>
                <p className='max-w-md text-xl px-9 md:text-sm md:mt-4 md:text-center'>Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
            </div>

            <div className='flex bg-gray-200 pl-24 py-16 mt-20 rounded-3xl justify-between md:py-10 md:px-12'>
                <form className='flex flex-col w-3/6 md:w-full'>
                    <div className='flex items-center'>
                        <input type="radio" value="option1" className="mr-2 w-6 h-6" /><p>Say Hi</p>
                        <input type="radio" value="option2" className="mr-2 w-6 h-6 ml-8" /><p>Get a Quote</p>
                    </div>
                    <div>
                        <p className='mt-9'>Name</p>
                        <input type='text' placeholder='Name' className='rounded-md p-3 border border-1 border-black w-full' />
                    </div>
                    <div>
                        <p className='mt-9'>Email*</p>
                        <input type='text' placeholder='Email' className='rounded-md p-3 border border-1 border-black w-full' />
                    </div>
                    <div>
                        <p className='mt-9'>Message*</p>
                        <textarea placeholder='Message' rows="10" className='rounded-md p-3 border border-1 border-black w-full' />
                    </div>
                    <button className='mt-8  bg-black text-white hover:bg-white hover:text-black hover:border border-black text-xl h-16 rounded-xl'>Send Message</button>

                </form>

                <img src='contactimg.png' alt='' className='h-[600px] md:hidden' />
            </div>
        </div>
    )
}

export default Contactus