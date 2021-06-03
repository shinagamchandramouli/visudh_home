import React from 'react'
import './css/Counts.css'

function Counts() {
    return (
        <section id="counts" class="counts">
            <div class="container">

                <div class="row">

                    <div class="col-lg-4 col-md-6 mt-5 ">
                        <div class="count-box">
                            <i class="fas fa-eye"></i>
                            <span class="text-primary">Our Vision</span>
                            <p>To revolutionise the Healthcare sector through this healthtech platform so that each and every citizen of India can get the best medical needs at there allowing budget.</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 mt-5 ">
                        <div class="count-box">
                            <i class="fas fa-bullseye"></i>
                            <span class="text-primary">Our Mission</span>
                            <p>Visudh AJIVAM PVT LTD is on a mission to take hand in hand with public and help them across their medical needs with making the user friendly digital platform without any Hassel at right time. </p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 mt-5 mx-auto">
                        <div class="count-box">
                            <i class="fas fa-medal"></i>
                            <span class="text-primary">Our Values</span>
                            <p>VISUDH AJIVAM PVT LTD is one of the best digital platform for health care services integrated with pharmacies, doctors, labtests, diagnosis centres India world class facilities to individuals across the country.</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Counts
