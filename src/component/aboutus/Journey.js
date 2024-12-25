import React from 'react';
import jour from '../../assets/Journeys';

const Journey = () => {
    return (
        <div className="px-28 lg:px-8">
            <div className="flex mt-20 md:flex-col md:items-center">
                <p className="bg-customLime text-3xl p-2 rounded-lg font-medium md:text-lg md:text-center md:w-fit">
                    Our Journey
                </p>
                <p className="max-w-3xl text-xl px-9 md:text-sm md:mt-4 md:text-center">
                    From humble beginnings to industry leaders, discover how Positivus has evolved to drive success for businesses worldwide.
                </p>
            </div>

            <div className="relative mt-28 flex flex-col gap-20 md:gap-7">
                <div className="absolute left-[13px] top-1 w-[2px] h-[78%] bg-customLime md:w-px md:h-[82%] md:left-[39px]"></div>

                {jour.map((val, index) => (
                    <div className="flex md:flex-col" key={index}>
                        <div className="relative flex">
                            <div className="relative z-10">
                                <img src="star.png" alt="" className="h-7 md:ml-[26px]" />
                            </div>
                            <p className="text-5xl font-semibold ml-5">
                                {val.year}
                            </p>
                        </div>
                        <div className="flex bg-customDark ml-8 py-10 pr-32 pl-16 rounded-3xl gap-10 md:ml-0 md:mt-5 md:pl-8 md:pr-10 md:gap-5">
                            <img src="star.png" alt="" className="mt-1 h-7 md:h-4" />
                            <div>
                                <p className="text-white text-2xl">{val.title}</p>
                                <p className="text-white max-w-[260px] mt-5">
                                    {val.message}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Journey;
