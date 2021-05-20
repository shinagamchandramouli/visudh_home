import React, { useEffect } from 'react'
import $ from 'jquery'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './css/TestimonalSlider.css'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function TestimonalSlider() {

    



    return (
        <div className = 'testimonal-slider'>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className = 'testimonal'>
                    <div className="user-image">
                        <div>
                        <p>Dr. Smith</p>
                        <p>Neuro Surgeon</p>
                        <p>he is expert in his field</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className = 'testimonal'>
                    <div className="user-image">
                        <div>
                        <p>Dr. Smith</p>
                        <p>Neuro Surgeon</p>
                        <p>he is expert in his field</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className = 'testimonal'>
                    <div className="user-image">
                        <div>
                        <p>Dr. Smith</p>
                        <p>Neuro Surgeon</p>
                        <p>he is expert in his field</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className = 'testimonal'>
                    <div className="user-image">
                        <div>
                        <p>Dr. Smith</p>
                        <p>Neuro Surgeon</p>
                        <p>he is expert in his field</p>
                        </div>
                    </div>
                </SwiperSlide>
                </Swiper>
        </div>
    )
}

export default TestimonalSlider
