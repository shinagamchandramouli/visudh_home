import React, { useEffect, useState } from 'react'
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

import {UserAuthHome} from '../../ContextProviders'
import jwt_decode from "jwt-decode";


function HomePage() {

    const [auth, setAuth] = useState(false);

    useEffect (()=>{
        const token = localStorage.getItem('jwt');
        if(token && jwt_decode(token).email) {
            setAuth(true);
        } else {
          setAuth(false);
        }
      },[])

    return (
        <React.Fragment>
            <UserAuthHome.Provider value = {[auth,setAuth]}>
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
                {/* <Contact /> */}
                <Footer />
            </UserAuthHome.Provider>
        </React.Fragment>
    )
}

export default HomePage
