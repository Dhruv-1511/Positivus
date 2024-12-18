import React, { useState } from 'react'
import Questions from '../../assets/Questions';


const Faq = () => {
    const [expanded, setExpanded] = useState(null);

    const toggleExpand = (index) => {
        setExpanded(expanded === index ? null : index);
    };
    return (

        <div className='px-28 lg:px-8 mt-28 '>
            <div className='md:flex md:flex-col md:items-center'>
                <p className='bg-customLime text-3xl p-2 rounded-lg font-medium w-fit md:text-xl'>Frequantly Asked</p>
                <p className='bg-customLime text-3xl p-2 rounded-lg font-medium w-fit md:text-xl'>Questions</p>
            </div>

            <div className='mt-20 md:mt-16'>
                {Questions.map((val, index) => (
                    <div className={` rounded-3xl p-12 mt-10 overflow-hidden transition-all duration-300 shadow-[0px_5px_1px_-1px] ${expanded === index ? 'bg-customLime h-auto' : 'bg-gray-300 h-32 md:h-auto'}`}
                        key={index}>
                        <div className='flex justify-between items-center'>
                            <p className='text-2xl font-semibold md:text-xl'>{val.title}</p>
                            <img src={expanded === index ? 'minus.png' : 'plus.png'} alt='Toggle' className='h-10 cursor-pointer'
                                onClick={() => toggleExpand(index)}/>
                        </div>
                        <div className={`h-px my-10 bg-black ${expanded === index ? 'block' : 'hidden'}`}></div>
                        {expanded === index && <p className='text-xl'>{val.messsage}</p>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faq