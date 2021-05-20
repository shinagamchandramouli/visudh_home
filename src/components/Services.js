import React from 'react'
import CardsHolder from './CardsHolder'
import './css/Services.css'

function Services() {

    const services = [
        {
            title: 'Diagnosis',
            description: 'We are expert in the diagnosis and treatment, Set up an appointment, Call or Mail us.',
            img: 'images/diagnosis.jpg',
            btn: "Click",
            first: false
        },
        {
            title: 'Lab Test',
            description: 'Set an appointment,call or mail us',
            img: 'images/labtest.jpg',
            btn: "Click",
            first: false
        },
        {
            title: 'Dcotor Appointment',
            description: 'Set up an appintment',
            img: 'images/appointment.jpg',
            btn: "Click",
            first: false
        },
        {
            title: 'Order medicine',
            description: 'All our medicines undergo a three-step quality check process to ensure they are of high quality, Call or Mail us.',
            img: 'images/medicine.jpg',
            btn: "Click",
            first: false
        },
        {
            title: 'Customer Support',
            description: 'We have 24*7 excellent customer support,Call or Mail us.',
            img: 'images/customer.jpg',
            btn: "Click",
            first: false
        },
        {
            title: 'Medical Stores Near me',
            description: "Visudhajivam is India's Largest Online medical store where you can shop for quality online and offline medicines, wellness products.",
            img: 'images/store.jpg',
            btn: "Click",
            first: false
        }
    ];


    return (
        <div className = 'services'>
            <div style = {{textAlign : 'center'}}><h4>Services</h4></div>
            <CardsHolder details = {services} id= 'service-1'/>
        </div>
    )
}

export default Services
