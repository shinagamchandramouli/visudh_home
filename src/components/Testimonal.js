import React, { useEffect, useState } from 'react'
import TestimonalCard from './TestimonalCard'
import './css/Testimonal.css'

function Testimonal() {

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

    const [slider, setSlider] = useState(2);

    const [canRight, setCanRight] = useState(true);
    const [canLeft, setCanLeft] = useState(true);

    const clickLeft = () => {

        if(canLeft && canLeft) {
            
            // document.getElementsByClassName('testimonal-center')[0].style.animation = 'slide_center_toRight 1s';
            
            // document.getElementsByClassName('testimonal-right')[0].style.animation = 'slide_right_toRight 1s';

            // document.getElementsByClassName('testimonal-left')[0].style.animation = 'slide_left_toRight 1s';

            // document.getElementsByClassName('testimonal-hidden-left')[0].style.animation = 'slide_hiddenleft_toRight 1s';


            // setInterval(() => {
                
            // }, 1000);

            // document.getElementsByClassName('testimonal-center')[0].style.animation = '';
            
            // document.getElementsByClassName('testimonal-right')[0].style.animation = '';

            // document.getElementsByClassName('testimonal-left')[0].style.animation = '';

            // document.getElementsByClassName('testimonal-hidden-left')[0].style.animation = '';

        }

        if(!canRight && canLeft)
        {   
            if(slider > 1)
            setSlider(slider-1);
        }
        else if(slider > 0) setSlider(slider-1)

    };
    const clickRight = () => {
        if(slider < doctor_data.length - 1)
        {
            setSlider(slider+1);
        }
    };

    useEffect(()=>{

        if(window.innerWidth >= 992) {
            setCanLeft(true);
            setCanRight(true);
        }
        else if(window.innerWidth >= 768) {
            setCanRight(false);
            setCanLeft(true);
        }
        else {
            setCanLeft(false);
            setCanRight(false);
        }

        // document.getElementsByClassName('testimonal-hidden-left')[0].style.left = '0px';

        // document.getElementsByClassName('testimonal-hidden-left')[0].style.transform = 'translate(-100%)';
        
        // document.getElementsByClassName('testimonal-hidden-right')[0].style.right = '-40%';

        // document.getElementsByClassName('testimonal-hidden-right')[0].style.transform = 'translate(200%)';

        window.addEventListener('resize',()=>{
            if(window.innerWidth >= 992) {
                setCanLeft(true);
                setCanRight(true);
            }
            else if(window.innerWidth >= 768) {
                setCanRight(false);
                setCanLeft(true);
                if(slider === 0) setSlider(1);
            }
            else {
                setCanLeft(false);
                setCanRight(false);
            }

            // document.getElementsByClassName('testimonal-hidden-left')[0].style.left = document.getElementsByClassName('testimonal-left')[0].offsetLeft;

            // document.getElementsByClassName('testimonal-hidden-left')[0].style.transform = 'translate(-100%)';
            
            // document.getElementsByClassName('testimonal-hidden-right')[0].style.right = document.getElementsByClassName('testimonal-right')[0].offsetLeft;

            // document.getElementsByClassName('testimonal-hidden-right')[0].style.transform = 'translate(200%)';

        })
    });

    return (
        <div className = "testimonal-slider mb-5">
            <div className="btn btn-left" onClick = {clickLeft}>
                <i class="fas fa-angle-left"></i>
            </div>
            <div className = 'testimonal-holder d-flex justify-content-around'>
                {/* <div className="testimonal-hidden-left col-lg-4 col-md-5">
                    {
                        slider > 1 ? <TestimonalCard data = {doctor_data[slider-2]}/> : ''
                    }
                </div> */}
                {
                    canLeft ?
                    <div className = 'testimonal-left testimonal-cards col-lg-4 col-md-5'>
                        {
                            (slider > 0 && canLeft) ? <TestimonalCard data = {doctor_data[slider-1]}/> : ''
                        }
                    </div> : ''
                }
                <div className = 'testimonal-center testimonal-cards col-lg-4 col-md-5 col-sm-8 col-8'>
                    <TestimonalCard data = {doctor_data[slider]}  />
                </div>
                {
                    canRight ? 
                    <div className = 'testimonal-right  testimonal-cards col-lg-4 col-md-5'>
                        {
                            (slider < doctor_data.length - 1) ? <TestimonalCard data = {doctor_data[slider+1]}/> : ''
                        }
                    </div> : ''
                }
                {/* <div className="testimonal-hidden-right col-lg-4 col-md-5">
                    {
                        slider < doctor_data.length-2 ? <TestimonalCard data = {doctor_data[slider+2]}/> : ''
                    }
                </div> */}
            </div>
            <div className="btn btn-left" onClick = {clickRight}>
                <i class="fas fa-angle-right"></i>
            </div>
        </div>
    )
}

export default Testimonal
