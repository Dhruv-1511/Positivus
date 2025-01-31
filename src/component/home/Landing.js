import React from 'react';

const Landing = () => {
  return (
    <div id='home' className="px-28 lg:px-8">
      <div className="flex justify-between mt-16 gap-10 md:flex-col-reverse md:items-center">
        <div className="flex flex-col max-w-xl lg:max-w-sm">
          <p className="text-6xl font-medium leading-snug lg:text-4xl">
            Navigating the digital landscape for success
          </p>
          <p className="mt-8 text-2xl lg:text-base">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </p>
          <button className="mt-8  bg-black text-white text-xl border-2 border-black w-64 h-16 rounded-xl hover:bg-white hover:text-black lg:text-sm lg:w-48 lg:h-12">
            Book a consultation
          </button>
        </div>
        <div className="w-5/6">
          <img src="Illustration.png" alt="Illustration" className="w-full" />
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-10 h-auto mt-16 sm:grid sm:grid-cols-2">
        <img src="amazon.png" alt="Amazon" className="h-12 grayscale-[100%] hover:grayscale-0 cursor-pointer" />
        <img src="dribble.png" alt="Dribble" className="h-12 grayscale-[100%] hover:grayscale-0 cursor-pointer" />
        <img src="hubspot.png" alt="Hubspot" className="h-12 grayscale-[100%] hover:grayscale-0 cursor-pointer" />
        <img src="notion.png" alt="Notion" className="h-12 grayscale-[100%] hover:grayscale-0 cursor-pointer" />
        <img src="netflix.png" alt="Netflix" className="h-12 grayscale-[100%] hover:grayscale-0 cursor-pointer" />
        <img src="zoom.png" alt="Zoom" className="h-12 grayscale-[100%] hover:grayscale-0 cursor-pointer" />
      </div>
    </div>
  );
};

export default Landing;