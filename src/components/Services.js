import React from 'react'
import './css/Services.css'
import ServiceCard from './ServiceCard';

function Services() {

    const service_data = [
        {
            title: 'DIAGNOSIS',
            description: 'We are expert in the diagnosis and treatment, Set up an appointment, Call or Mail us.',
            icon_class: 'fa-diagnoses'
        },
        {
            title: 'LAB TEST',
            description: 'Set up an appointment, Call or Mail us.',
            icon_class: 'fa-pills'
        },
        {
            title: 'DOCTOR APPOINTMENT',
            description: 'Set up an appointment, Call or Mail us.',
            icon_class: 'fa-calendar-check'
        },
        {
            title: 'ORDER MEDICINE',
            description: 'All our medicines undergo a three-step quality check process to ensure they are of high quality, Call or Mail us.',
            icon_class: 'fa-medkit'
        },
        {
            title: 'CUSTOMER SUPPORT',
            description: 'We have 24*7 excellent customer support,Call or Mail us.',
            icon_class: 'fa-headset'
        },
        {
            title: 'MEDICAL STORES NEAR ME',
            description: 'Visudhajivam is India\'s Largest Online medical store where you can shop for quality online and offline medicines, wellness products.',
            icon_class: 'fa-store'
        }
    ];



    return (
        <section id="services" class="services">
            <div class="container">

                <div class="section-title">
                    <h2>Services</h2>
                    <p>VISUDH AJIVAM PVT LTD is one of the best digital platform for health care services integrated with pharmacies, doctors, labtests, diagnosis centres across India to provide world class Healthcare facilities to individuals across the country.</p>
                </div>

                <div class="row">
                    {
                        service_data.map( (service)=> <ServiceCard data = {service} />)
                    }
                </div>

            </div>
        </section>
    )
}

export default Services
