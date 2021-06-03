import React from 'react'
import './css/WhyUs.css'

function WhyUs() {
    return (
        <section id="why-us" class="why-us">
            <div class="container">

                <div class="row">
                    <div class="col-lg-4 d-flex align-items-stretch">
                        <div class="content">
                            <h3>Why Choose Medilab?</h3>
                            <p>
                                VISUDH AJIVAM PVT LTD is one of the best digital platform for health care services integrated with pharmacies, doctors, labtests, diagnosis centres across India to provide world class Healthcare facilities to individuals across the country.
                            </p>
                            <div class="text-center">
                                <a href="#" class="more-btn">Learn More <i class="bx bx-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8 d-flex align-items-stretch">
                        <div class="icon-boxes d-flex flex-column justify-content-center">
                            <div class="row">
                                <div class="col-xl-4 d-flex align-items-stretch">
                                    <div class="icon-box mt-4 mt-xl-0">
                                        <i class="fas fa-stethoscope"></i>
                                        <h4>DIAGNOSIS</h4>
                                        <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                        <a href="#appointment" class="appointment-btn scrollto">Book Now</a>
                                    </div>
                                </div>
                                <div class="col-xl-4 d-flex align-items-stretch">
                                    <div class="icon-box mt-4 mt-xl-0">
                                        <i class="fas fa-vials"></i>
                                        <h4>BOOK LAB TEST</h4>
                                        <p>Set up an appointment, Call or Mail us.</p>
                                        <a href="#appointment" class="appointment-btn scrollto">Book Now</a>
                                    </div>
                                </div>
                                <div class="col-xl-4 d-flex align-items-stretch">
                                    <div class="icon-box mt-4 mt-xl-0">
                                        <i class="fas fa-store"></i>
                                        <h4>MEDICAL STORE NEAR ME</h4>
                                        <p>Visudhajivam is India's Largest Online medical store where you can shop for quality online and offline medicines, wellness products.</p>
                                        <a href="#"> <button class="btn btn-primary">Find Now</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default WhyUs
