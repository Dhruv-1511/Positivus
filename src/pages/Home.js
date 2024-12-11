import React from 'react'
import Landing from '../component/Landing'
import Serviceblok from '../component/Serviceblok'
import Casestudy from '../component/Casestudy'
import Working from '../component/Working'
import Team from '../component/Team'
import Testimonial from '../component/Testimonial'
import Contactus from '../component/Contactus'
import Footer from '../component/Footer'

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
            <Footer />
        </>

    )
}

export default Home