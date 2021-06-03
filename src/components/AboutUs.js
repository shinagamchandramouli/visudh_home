import React from 'react'
import './css/AboutUs.css'

function AboutUs() {
    return (
        <section id="about" class="about">
            <div class="container-fluid">

                <div class="row">
                    <div class="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch">
                        <a href="#" class="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
                    </div>

                    <div class="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                        <h3>About Us</h3>
                        <p>VISUDH AJIVAM PVT LTD is one of the best digital platform for health care services integrated with pharmacies, doctors, labtests, diagnosis centres across India to provide world class Healthcare facilities to individuals across the country</p>

                        <div class="icon-box">
                            <div class="icon"><i class="fas fa-flask"></i></div>
                            <h4 class="title"><a href="">Labtest </a></h4>
                            <p class="description">We make sure that the quality of service you are getting is world class we give you this gurranty with every service you opt for online as well as offline.We are one stop solution for your problems.We are covering a wide range of products, test and doctors with speciality in different feilds to make the service wide and safest.</p>
                        </div>

                        <div class="icon-box">
                            <div class="icon"><i class="fas fa-user-md"></i></div>
                            <h4 class="title"><a href="">Doctors Availability</a></h4>
                            <p class="description">We make sure that the quality of service you are getting is world class we give you this gurranty with every service you opt for online as well as offline.We are one stop solution for your problems.We are covering a wide range of products, test and doctors with speciality in different feilds to make the service wide and safest.</p>
                        </div>

                        <div class="icon-box">
                            <div class="icon"><i class="fas fa-pills"></i></div>
                            <h4 class="title"><a href=""> Medicine</a></h4>
                            <p class="description">We make sure that the quality of service you are getting is world class we give you this gurranty with every service you opt for online as well as offline.We are one stop solution for your problems.We are covering a wide range of products, test and doctors with speciality in different feilds to make the service wide and safest.</p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutUs
