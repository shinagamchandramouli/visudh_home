import React from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonalCard from './TestimonalCard';

import 'swiper/swiper-bundle.css';
import './css/Testimonal.css'

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

function SwiperTestimonal() {

    const doctor_data = [
        {
            doctor_name: 'Dr.Jhon',
            doctor_field: 'Neurologist',
            doctor_description: '10 years experience',
            doctor_facebook: '',
            doctor_twitter: '',
            doctor_github: '',
            doctor_linkedin: '',
            imgPath: require('../images/doctors/doctors-1.jpg')
        },
        {
            doctor_name: 'Dr.Sarah',
            doctor_field: 'Anesthologist',
            doctor_description: 'Best Doctor',
            doctor_facebook: '',
            doctor_twitter: '',
            doctor_github: '',
            doctor_linkedin: '',
            imgPath: require('../images/doctors/doctors-2.jpg')
        },
        {
            doctor_name: 'Dr.Sandeep',
            doctor_field: 'Cardiology',
            doctor_description: 'Best experienced doctor',
            doctor_facebook: '',
            doctor_twitter: '',
            doctor_github: '',
            doctor_linkedin: '',
            imgPath: require('../images/doctors/doctors-3.jpg')
        },
        {
            doctor_name: 'Dr.Hema',
            doctor_field: 'Neurosurgeon',
            doctor_description: 'Experienced doctor',
            doctor_facebook: '',
            doctor_twitter: '',
            doctor_github: '',
            doctor_linkedin: '',
            imgPath: require('../images/doctors/doctors-4.jpg')
        },
        {
            doctor_name: 'Dr.Sarah',
            doctor_field: 'Anesthologist',
            doctor_description: 'Best Doctor',
            doctor_facebook: '',
            doctor_twitter: '',
            doctor_github: '',
            doctor_linkedin: '',
            imgPath: require('../images/doctors/doctors-2.jpg')
        },
        {
            doctor_name: 'Dr.Sandeep',
            doctor_field: 'Cardiology',
            doctor_description: 'Best experienced doctor',
            doctor_facebook: '',
            doctor_twitter: '',
            doctor_github: '',
            doctor_linkedin: '',
            imgPath: require('../images/doctors/doctors-3.jpg')
        },
        {
            doctor_name: 'Dr.Hema',
            doctor_field: 'Neurosurgeon',
            doctor_description: 'Experienced doctor',
            doctor_facebook: '',
            doctor_twitter: '',
            doctor_github: '',
            doctor_linkedin: '',
            imgPath: require('../images/doctors/doctors-4.jpg')
        }
    ];

    return (
        <div className = 'doctor-testimonal' style = {{padding: '20px', overflow:'visible'}}>
            <div className = 'section-title' style = {{paddingBottom:'0px'}}>
                <h2>Testimonials</h2>
            </div>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                  }}
                pagination={{ clickable: true }}
                breakpoints={{
                    "0": {
                      "slidesPerView": 1,
                      "spaceBetween": 100
                    },
                    "600": {
                      "slidesPerView": 2,
                      "spaceBetween": 60
                    },
                    "968": {
                      "slidesPerView": 3,
                      "spaceBetween": 60
                    },
                    "1200": {
                        "slidesPerView": 4,
                      "spaceBetween": 40
                    }
                  }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {
                    doctor_data.map((data)=><SwiperSlide>{<TestimonalCard data = {data} />}</SwiperSlide>)
                }
                {/* <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide> */}
            </Swiper>
        </div>
    )
}

export default SwiperTestimonal
