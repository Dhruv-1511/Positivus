import React from 'react'

const Bloglanding = () => {
    return (
        <div className='mt-16 mx-28  md:mx-8'>
            <div className="flex justify-between bg-gray-100 p-10 rounded-3xl  gap-10 md:flex-col-reverse ">
                <div className="w-[500px] md:w-auto flex items-center   ">
                    <img src="Illustration.png" alt="Illustration" className="w-full" />
                </div>
                <div className="flex flex-col max-w-xl lg:max-w-sm">
                    <p className='bg-gray-200 px-4 py-2 w-fit rounded-xl'>Marketing Strategies</p>
                    <p className="text-4xl font-medium leading-snug mt-10 md:text-2xl md:mt-5">
                        PPC vs. Organic Marketing: Which One Is Right for Your Business?
                    </p>
                    <p className="mt-8 text-xl lg:text-xs md:mt-5">
                        PPC and organic marketing each offer unique benefits for driving traffic and growing your business. Discover which strategy aligns best with your goals and how to strike the perfect balance.
                    </p>
                </div>
            </div>

            <div className='mt-20 flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <img src='man6.png' alt='' className='h-20 sm:h-10' />
                    <div>
                        <p className='text-xl font-semibold sm:text-base'>Sarah Kim</p>
                        <p className='text-xl sm:text-base'>Content Creator</p>
                    </div>
                </div>
                <div className='flex items-end gap-2'>
                    <p className='text-3xl text-gray-300 sm:text-2xl'>A</p>
                    <p className='text-2xl sm:text-lg'>A</p>
                    <p className='text-xl text-gray-300 sm:text-base'>A</p>
                </div>

            </div>

            <div className='h-px w-full my-5 bg-black' />

            <div className='px-52 mt-16 text-justify lg:px-0 md:mt-10'>
                <p className='text-2xl font-medium md:text-lg'>In the ever-evolving digital landscape, businesses are faced with an important question: should they invest in pay-per-click (PPC) advertising or focus on organic marketing strategies? While both approaches have their merits, choosing the right one depends on your goals, budget, and timeline. Let's dive into the strengths, challenges, and real-world applications of PPC and organic marketing to help you make an informed decision.</p>
                <p className='text-[40px] font-semibold mt-16 md:text-[25px] md:mt-10'>The Challenge of Standing Out Online</p>
                <p className='mt-10 text-lg '>Every day, millions of businesses compete for visibility online, making it increasingly difficult to capture the attention of potential customers. Organic search results are highly sought after, but earning a top spot on Google takes time and consistent effort. Meanwhile, PPC ads promise instant visibility but can quickly drain your budget if not executed effectively.</p>
                <p className='mt-5 text-lg'>For small businesses with limited resources, this dilemma can feel like an impossible balancing act. Do you play the long game with organic strategies or opt for quick wins with PPC?</p>
                
                <p className='text-[40px] font-semibold mt-16 md:text-[25px] md:mt-10'>Comparing PPC and Organic Marketinge</p>
                <p className='mt-10 text-lg'>Pay-per-click (PPC) and organic marketing each offer distinct advantages and challenges, making them effective for different business needs. PPC is designed to deliver immediate results by securing top placements on search engines or social media platforms, providing businesses with instant visibility. It allows for precise targeting based on factors like demographics, behavior, and location, offering flexibility to start small and scale as needed. However, PPC can become expensive quickly, particularly in competitive industries, and its results are short-lived since traffic stops when the campaign ends.</p>
                <p className='mt-5 text-lg'>In contrast, organic marketing focuses on building a strong, sustainable presence through strategies like search engine optimization (SEO) and content creation. This approach builds trust and credibility over time, delivering consistent traffic without the need for ongoing ad spend. While the results can take longer to materialize and are less immediate than PPC, organic marketing provides long-term benefits that make it a valuable strategy for sustained growth.</p>
                
                <p className='text-[40px] font-semibold mt-16 md:text-[25px] md:mt-10'>Striking the Right Balance</p>
                <p className='mt-10 text-3xl pl-5 border-l-4 border-lime-200 md:text-xl'>"PPC and organic marketing aren't rivals-they're teammates. The best strategies combine both to create a holistic approach to growth," says a digital marketing expert.</p>
                <p className='mt-10 text-lg'>For instance, a business might use PPC to generate quick traffic for a new product launch while building long-term organic authority through SEO and blogging. Combining these strategies ensures you're reaching your audience now while laying the groundwork for future success.</p>
                <p className='mt-5 text-lg'>For small businesses with limited resources, this dilemma can feel like an impossible balancing act. Do you play the long game with organic strategies or opt for quick wins with PPC?</p>
            </div>
        </div>
    )
}

export default Bloglanding