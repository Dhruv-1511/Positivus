import React from 'react'
import Landing from '../component/home/Landing'
import Serviceblok from '../component/home/Serviceblok'
import Casestudy from '../component/home/Casestudy'
import Working from '../component/home/Working'
import Team from '../component/home/Team'
import Testimonial from '../component/Testimonial'
import Contactus from '../component/home/Contactus'

const Home = () => {
    return (
        <>
            <Landing />
            <Serviceblok />
            <Casestudy />
            <Working />
            <Team />
            <Testimonial />
            <Contactus />
        </>

    )
}

export default Home