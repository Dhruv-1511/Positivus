import React from 'react';
import Navbar from './Navbar';

const Landing = () => {
  return (
    <div className="px-28 lg:px-8">
      <Navbar />
      <div className="flex justify-between mt-16 gap-10 md:flex-col-reverse">
        <div className="flex flex-col max-w-xl lg:max-w-sm">
          <p className="text-6xl font-medium leading-snug lg:text-4xl">
            Navigating the digital landscape for success
          </p>
          <p className="mt-8 text-2xl lg:text-base">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </p>
          <button className="mt-8  bg-black text-white text-xl w-64 h-16 rounded-xl hover:bg-white hover:text-black hover:border-2 black lg:text-sm lg:w-48 lg:h-12">
            Book a consultation
          </button>
        </div>
        <div className="w-5/6">
          <img src="Illustration.png" alt="Illustration" className="w-full" />
        </div>
      </div>

      <div className="flex gap-24 h-auto mt-16 lg:grid grid-cols-3 lg:gap-10 md:grid-cols-2">
        <img src="amazon.png" alt="Amazon" className="h-12" />
        <img src="dribble.png" alt="Dribble" className="h-12" />
        <img src="hubspot.png" alt="Hubspot" className="h-12" />
        <img src="notion.png" alt="Notion" className="h-12" />
        <img src="netflix.png" alt="Netflix" className="h-12" />
        <img src="zoom.png" alt="Zoom" className="h-12" />
      </div>
    </div>
  );
};

export default Landing;