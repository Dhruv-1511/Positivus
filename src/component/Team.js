import React from 'react';
import employee from '../assets/Employee';

const Team = () => {
    return (
        <div className='mt-40 px-20 md:px-8 md:mt-28'>
            <div className='flex  md:flex-col'>
                <p className='bg-lime-300 text-5xl p-2 rounded-lg font-medium md:text-xl md:text-center'>Team </p>
                <p className='max-w-xl text-xl px-9 md:text-sm md:mt-4 md:text-center'>Meet the skilled and experienced team behind our successful digital marketing strategies</p>
            </div>

            <div className="grid grid-cols-3 gap-1 mt-10 lg:grid-cols-2 md:flex flex-col ">
                {employee.map((val, index) => (
                    <div key={index} className="flex flex-col items-center mt-10 max-w-[415px] p-9 border-2 rounded-3xl border-black shadow-[0px_7px_5px_0px]">
                        <div className="flex justify-between w-full ">
                            <img src={val.imag} alt={val.name} className="h-[105px] md:h-[60px]" />
                            <div className="flex flex-col-reverse ">
                                <p className="text-xl md:text-base">{val.position}</p>
                                <p className="font-semibold text-2xl md:text-lg">{val.name}</p>
                            </div>
                            <img src="linkedin.png" alt="LinkedIn" className="h-10 md:h-7" />
                        </div>
                        <div className="h-px my-10 bg-black w-full md:my-5 "></div>
                        <p className="text-xl md:text-base">{val.info}</p>
                    </div>
                ))}
            </div>

            <div className='flex justify-end'>
                <button className="mt-8  bg-black text-white text-xl w-64 h-16 rounded-xl hover:bg-white hover:text-black hover:border-2 black lg:text-sm lg:w-48 lg:h-12">See all team</button>
            </div>
        </div>
    );
};

export default Team;
