import React from 'react'

const Values = () => {
    return (
        <div className='px-28 lg:px-8'>
            <div className='flex mt-20 md:flex-col'>
                <p className='bg-lime-300 text-3xl p-2 rounded-lg font-medium md:text-lg md:text-center'>Core Values</p>
                <p className='max-w-md text-xl px-9 md:text-sm md:mt-4 md:text-center'>At the heart of everything we do are our core values:</p>
            </div>

            <div className='mt-28 grid grid-cols-2 gap-10 lg:grid-cols-1'>
                <div className='flex flex-col rounded-3xl border border-black p-10 w-full'>
                    <p className='text-3xl font-semibold'>Client Success First</p>
                    <div className={'h-px my-10 bg-black'}></div>
                    <p className='text-xl'>We are dedicated to achieving measurable results for our clients. Each strategy is tailored to meet unique business goals and drive long-term success.</p>
                </div>
                <div className='flex rounded-3xl border border-black p-10 w-full sm:flex-col'>
                    <div className='flex-col'>
                    <p className='text-3xl font-semibold'>Innovation</p>
                    <div className={'h-px my-10 bg-black'}></div>
                    <p className='text-xl'>We constantly strive to stay ahead of industry trends.</p>
                    </div>
                    <img src='aboutbox2.png' alt='' />
                </div>
                <div className='flex rounded-3xl border border-black p-10 w-full sm:flex-col'>
                    <div className='flex-col'>
                    <p className='text-3xl font-semibold'>Collaboration</p>
                    <div className={'h-px my-10 bg-black'}></div>
                    <p className='text-xl'>We believe in the power of teamwork and partnership.
                    </p>
                    </div>
                    <img src='aboutbox3.png' alt='' />
                </div>
                <div className='flex flex-col rounded-3xl border border-black p-10 w-full'>
                    <p className='text-3xl font-semibold'>Transparency</p>
                    <div className={'h-px my-10 bg-black'}></div>
                    <p className='text-xl'>Open and honest communication is key to our success. We keep our clients informed every step of the way to ensure trust and clarity.</p>
                </div>                
            </div>

            <div className="relative mt-32 bg-customDark rounded-3xl z-10 md:mt-28 flex justify-end  ">
                <img src='aboutbox4.png' alt='' className='absolute rounded-3xl z-0 h-[420px] xl:h-[300px] , lg:hidden ' style={{
                    transform: 'translateY(-43px)',
                    left: 0
                }} />
                <div className="relative p-16 flex flex-col justify-end w-[600px] z-10 lg:w-auto ">
                    <p className="text-white text-4xl sm:text-xl">"At Positivus, we believe that success is build on innovation,collaboration, and relentless focus on delivering results."</p>
                    <p className="text-gray-300 mt-10 sm:text-xs">John Smith,Founder of Positivus</p>
                </div>
            </div>
        </div>
    )
}

export default Values