import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react'
import Header from './components/Header';
import Banner from './components/Banner';
import CardsHolder from './components/CardsHolder';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Services from './components/Services';
import AppointmentForm from './components/AppointmentForm';
import Departments from './components/Departments';
import FAQs from './components/FAQs';
import TestimonalSlider from './components/TestimonalSlider';

function App() {

  const details = [
    {
        title: 'Diagnosis',
        description: 'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip',
        img: 'images/diagnosis.jpg',
        btn: "Click",
        first: true
    },
    {
        title: 'Book Lab Test',
        description: 'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip',
        img: 'images/labtest.jpg',
        btn: "Click",
        first: true
    },
    {
        title: 'Medical Store Near Me',
        description: 'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip',
        img: 'images/store.jpg',
        btn: "Click",
        first: true
    },
    {
        title: 'Appointment',
        description: 'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip',
        img: 'images/appointment.jpg',
        btn: "Click",
        first: true
    }
];
  
  return (
    <React.Fragment>
      <Header />
      <div className="separator"></div>
      <Banner />
      <div className = 'basic-info'>
      <CardsHolder details = {details}/>
      </div>
      <AboutUs />
      <Services />
      <AppointmentForm />
      <Departments/>
      <FAQs />
      <TestimonalSlider />
      <div style = {{height:'100px'}}></div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
