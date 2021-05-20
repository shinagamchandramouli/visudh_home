import React from 'react'
import CardItem from './CardItem'
import './css/AboutUs.css'

function AboutUs() {

    const info_about = {
            title: 'Diagnosis',
            description: 'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip',
            btn: "Click"
        };

    return (
        <div className = 'about-us'>
            <div style = {{textAlign : 'center'}}><h2>About Us</h2></div>
            <p>VISUDH AJIVAM PVT LTD is one of the best digital platform for health care services integrated with pharmacies, doctors, labtests, diagnosis centres across India to provide world class Healthcare facilities to individuals across the country</p>
            <div className="facilities">
                <div>
                    <div style = {{textAlign : 'center'}}><h4>Lab Test</h4></div>
                    <p>We make sure that the quality of service you are getting is world class we give you this gurranty with every service you opt for online as well as offline.We are one stop solution for your problems.We are covering a wide range of products, test and doctors with speciality in different feilds to make the service wide and safest.</p>
                </div>
                <div>
                    <div style = {{textAlign : 'center'}}><h4>Doctors Availability</h4></div>
                    <p>We make sure that the quality of service you are getting is world class we give you this gurranty with every service you opt for online as well as offline.We are one stop solution for your problems.We are covering a wide range of products, test and doctors with speciality in different feilds to make the service wide and safest.</p>
                </div>
                <div>
                    <div style = {{textAlign : 'center'}}><h4>Medicine</h4></div>
                    <p>We make sure that the quality of service you are getting is world class we give you this gurranty with every service you opt for online as well as offline.We are one stop solution for your problems.We are covering a wide range of products, test and doctors with speciality in different feilds to make the service wide and safest.</p>
                </div>
            </div>
            <div className="goals">
            <div>
                    <div style = {{textAlign : 'center'}}><h4>Our Vision</h4></div>
                    <p>To revolutionise the Healthcare sector through this healthtech platform so that each and every citizen of India can get the best medical needs at there allowing budget.</p>
                </div>
                <div>
                    <div style = {{textAlign : 'center'}}><h4>Our Mission</h4></div>
                    <p>Visudh AJIVAM PVT LTD is on a mission to take hand in hand with public and help them across their medical needs with making the user friendly digital platform without any Hassel at right time.</p>
                </div>
                <div>
                    <div style = {{textAlign : 'center'}}><h4>Our Values</h4></div>
                    <p>VISUDH AJIVAM PVT LTD is one of the best digital platform for health care services integrated with pharmacies, doctors, labtests, diagnosis centres India world class facilities to individuals across the country.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
