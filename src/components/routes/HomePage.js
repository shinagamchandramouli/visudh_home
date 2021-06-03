import React from 'react'
import AboutUs from '../AboutUs'
import AppointmentForm from '../AppointmentForm'
import Contact from '../Contact'
import Counts from '../Counts'
import Departments from '../Departments'
import Footer from '../Footer'
import Gallery from '../Gallery'
import GoogleMap from '../GoogleMap'
import Header from '../Header'
import Hero from '../Hero'
import Services from '../Services'
import SwiperTestimonal from '../SwiperTestimonal'
import Testimonal from '../Testimonal'
import WhyUs from '../WhyUs'

function HomePage() {
    return (
        <React.Fragment>
            <Header />
            <Hero />
            <WhyUs />
            <AboutUs />
            <Counts />
            <Services />
            <AppointmentForm  />
            <Departments />
            {/* <Testimonal /> */}
            <SwiperTestimonal />
            <Gallery />
            <Contact />
            <Footer />
        </React.Fragment>
    )
}

export default HomePage
