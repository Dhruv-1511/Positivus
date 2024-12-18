import React from 'react'

const Insights = () => {
    return (
        <div className='mt-40 px-20 md:px-0 md:mt-28'>
            <div className='flex md:flex-col md:items-center'>
                <p className='bg-customLime text-5xl p-2 rounded-lg font-medium md:text-xl md:text-center'>Explore More Insights</p>
                <p className='max-w-2xl text-xl px-9 md:text-sm md:mt-4 md:text-center'>Discover expert tips, strategies, and stories to keep you ahead in the digital landscape.</p>
            </div>

            <div className='mt-28 mx-20 p-10 border border-black rounded-3xl grid grid-cols-3 shadow-[0px_5px_1px_-1px] md:grid-cols-2 md:px-5 md:py-5 md:mx-8'>
                <div className='px-10 pb-10 border-r border-b border-black md:pr-5 md:pl-0 md:pb-5'>
                    <p className='text-2xl font-semibold md:text-xl'>10 SEO Myths You Need to Stop Believing</p>
                    <p className='mt-5 md:text-xs'>Think keyword stuffing and meta tags are the secret to ranking? Discover the truth behind common SEO misconceptions and learn what really drives results.</p>
                    <div className='flex items-center mt-5 gap-3'>
                        <img src='arrow.png' alt='' className='h-8' />
                        <p>Read article</p>
                    </div>
                </div>
                <div className='px-10 pb-10 border-r border-b border-black md:pl-5 md:pr-0 md:pb-5 md:border-r-0'>
                    <p className='text-2xl font-semibold md:text-xl'>Maximizing ROI with Social Media Advertising</p>
                    <p className='mt-5 md:text-xs'>Social media ads are more than just boosted posts. Explore proven strategies for crafting campaigns that engage audiences and deliver. measurable returns.</p>
                    <div className='flex items-center mt-5 gap-3'>
                        <img src='arrow.png' alt='' className='h-8' />
                        <p>Read article</p>
                    </div>
                </div>
                <div className='px-10 pb-10 border-b border-black md:pr-5 md:pl-0 md:py-5 md:border-r '>
                    <p className='text-2xl font-semibold md:text-xl'>How Content Marketing Fuels Long-Term Growth</p>
                    <p className='mt-5 md:text-xs'>Content isn't just king-it's the foundation of sustainable business growth. Find out how blogs, videos, and more can build trust and drive conversions.</p>
                    <div className='flex items-center mt-5 gap-3'>
                        <img src='arrow.png' alt='' className='h-8' />
                        <p>Read article</p>
                    </div>
                </div>
                <div className='px-10 pt-10 border-r border-black md:pl-5 md:pr-0 md:py-5 md:border-r-0 md:border-b'>
                    <p className='text-2xl font-semibold md:text-xl'>The Art of A/B Testing: Perfecting Your Campaigns</p>
                    <p className='mt-5 md:text-xs'>From headlines to call-to- actions, small tweaks can make a big difference. Learn how to use A/B testing to refine your marketing strategies</p>
                    <div className='flex items-center mt-5 gap-3'>
                        <img src='arrow.png' alt='' className='h-8' />
                        <p>Read article</p>
                    </div>
                </div>
                <div className='px-10 pt-10 border-r border-black md:pr-5 md:pl-0 md:pt-5'>
                    <p className='text-2xl font-semibold md:text-xl'>Understanding Google's Latest Algorithm Update</p>
                    <p className='mt-5 md:text-xs'>Search rankings change constantly-stay ahead by learning about the latest Google update and its impact on your SEO strategy.</p>
                    <div className='flex items-center mt-5 gap-3'>
                        <img src='arrow.png' alt='' className='h-8' />
                        <p>Read article</p>
                    </div>
                </div>
                <div className='px-10 pt-10 md:pl-5 md:pr-0 md:py-5'>
                    <p className='text-2xl font-semibold md:text-xl'>5 Ways Al is Changing Digital Marketing</p>
                    <p className='mt-5 md:text-xs'>Artificial intelligence is transforming the way we target, analyze, and engage audiences. Discover how to leverage Al to stay competitive.</p>
                    <div className='flex items-center mt-5 gap-3'>
                        <img src='arrow.png' alt='' className='h-8' />
                        <p>Read article</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Insights