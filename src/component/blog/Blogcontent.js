import React from 'react'

const Blogcontent = () => {
    return (
        <div>
            <p className='text-[40px] font-semibold mt-16 px-52 mx-28 md:text-[25px] md:mt-10 md:px-0 md:mx-8'>By the Numbers: Facts About PPC and Organic Marketing</p>

            <div className='mt-16 mx-28 flex flex-col gap-10 md:mx-8 '>
                <div className='flex gap-10 md:flex-col'>
                    <div className='border border-black rounded-3xl p-10 w-3/6 shadow-[0px_5px_1px_-1px] md:w-full'>
                        <p className='text-lg md:text-base'>Businesses earn an average of</p>
                        <p className='text-3xl font-semibold mt-5 md:text-xl'>$2 for every $1 spent</p>
                        <p className='mt-5 text-lg md:text-base'>on PPC advertising.</p>
                    </div>
                    <div className='bg-customLime rounded-3xl p-10 flex flex-col justify-center '>
                        <p className='text-3xl font-semibold md:text-xl'>41% of clicks</p>
                        <p className='mt-5 text-lg md:text-base'>on search engines go to the top three organic results, showing the importance of ranking highly</p>
                    </div>
                </div>
                <div className='flex gap-10 md:flex-col '>
                    <div className='bg-gray-100 rounded-3xl p-10 flex flex-col justify-center w-full'>
                        <div className='flex gap-5 items-center md:flex-col md:gap-2 md:items-start'>
                            <p className='text-xl md:text-base'>Content marketing costs</p>
                            <p className='text-3xl font-semibold md:text-xl'>62% less than paid ads</p>
                        </div>
                        <div className='mt-5 flex gap-5 items-center md:flex-col md:gap-2 md:items-start'>
                            <p className='text-xl md:text-base'>but generates</p>
                            <p className='text-3xl font-semibold md:text-xl'>3x as many leads</p>
                        </div>
                    </div>
                    <div className='border border-black bg-black rounded-3xl p-10 w-4/6 md:w-full'>
                        <p className='text-lg text-white md:text-base'>Organic search drives</p>
                        <div className='mt-5 flex gap-2'>
                            <p className='text-3xl text-customLime md:text-xl'>53%</p>
                            <p className='text-3xl font-semibold text-white md:text-xl'>of all website traffic,</p>
                        </div>
                        <p className='mt-5 text-lg text-white md:text-base'>making it the largest single source of traffic</p>
                    </div>
                </div>
            </div>

            <div className='px-52 mx-28 mt-16 text-justify lg:px-0 md:mt-10 md:px-0 md:mx-8'>
                <p className='text-[40px] font-semibold mt-16 md:text-[25px] md:mt-10'>Real-World Examples</p>
                <p className='mt-10 text-lg '>PPC and organic marketing have proven effective in different scenarios, and real-world examples highlight their impact. A local restaurant, for instance, leveraged Google Ads to target the search term "best Italian food near me, which led to a remarkable 120% increase in reservations within just two weeks. Similarly, a B2B Saas company focused on organic marketing by investing in SEO and blog content. This strategic approach helped them rank for competitive keywords and boosted their website traffic by 200% over six months. Some businesses find success by combining both strategies, like an e-commerce retailer that launched a targeted PPC campaign for seasonal sales while simultaneously optimizing product pages for organic search. This hybrid approach resulted in a 30% higher return on investment compared to relying solely on PPC advertising.</p>

                <p className='text-[40px] font-semibold mt-16 md:text-[25px] md:mt-10'>Key Takeaways for Your Marketing Strategy</p>

                <div className='mt-10 text-justify'>
                    <div className='flex items-center gap-3'>
                        <div className='h-2 w-2 bg-black rounded-full' />
                        <p className='text-lg'>PPC is ideal for short-term goals, like promoting sales, events, or new products.</p>
                    </div>
                    <div className='mt-5 flex items-center gap-3'>
                        <div className='h-2 w-2 bg-black rounded-full' />
                        <p className='text-lg'>Organic marketing is better for long-term growth, building trust, and creating lasting customer relationships.</p>
                    </div>
                    <div className='mt-5 flex items-center gap-3'>
                        <div className='h-2 w-2 bg-black rounded-full' />
                        <p className='text-lg'>A hybrid approach offers the best of both worlds, balancing quick wins with sustainable development.</p>
                    </div>
                </div>

                <p className='text-[40px] font-semibold mt-16 md:text-[25px] md:mt-10'>Choosing the Best Strategy for Your Business</p>
                <p className='mt-10 text-lg'>Ultimately, the choice between PPC and organic marketing depends on your specific needs. If you're working with a tight deadline or launching a new service, PPC can deliver immediate results, On the other hand, if you're focused on building a loyal audience and maintaining a steady flow of leads, organic marketing is your best bet.</p>
                <p className='mt-5 text-lg'>By understanding the strengths and limitations of both strategies, you can create a marketing plan that aligns with your goals, budget, and target audience. Ready to take your next step? Start building a strategy that drives results today.</p>
            </div>
        </div>
    )
}

export default Blogcontent