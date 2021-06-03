import React, { useState } from 'react'
import './css/Departments.css'
import DepartmentTab from './DepartmentTab';

function Departments() {

    const [active, setactive] = useState(1);

    const dept_data = [
        {
            title: 'Cardiology',
            description: 'Cardiology is the study and treatment of disorders of the heart and the blood vessels. A person with heart disease or cardiovascular disease may be referred to a cardiologist. Cardiology is a branch of internal medicine. A cardiologist is not the same as a cardiac surgeon.',
            imgPath: require('../images/departments-1.jpg')
        },
        {
            title: 'Neurology',
            description: 'className="font-italic">Neurology is the branch of medicine concerned with the study and treatment of disorders of the nervous system. The nervous system is a complex, sophisticated system that regulates and coordinates body activities. It has two major divisions: Central nervous system: the brain and spinal cord.',
            imgPath: require('../images/departments-2.jpg')
        },
        {
            title: 'Heptology',
            description: 'Hepatologist. This is a doctor who diagnoses and treats diseases associated with the gallbladder, pancreas and liver.',
            imgPath: require('../images/departments-3.jpg')
        },
        {
            title: 'Pediatric',
            description: 'Pediatrics (also spelled paediatrics or pædiatrics) is the branch of medicine that involves the medical care of infants, children, and adolescents. The American Academy of Pediatrics recommends people be under pediatric care through the age of 21 (though usually only minors are required to be under pediatric care).',
            imgPath: require('../images/departments-4.jpg')
        },
        {
            title: 'Eye Care',
            description: 'But there are other eye problems with liver disease. Dry, itchy eyes and xanthelasma—small collections of fat on the eyelids—can occur with cirrhosis. And congenital liver disorders can affect just about any part of the eye, including the cornea and lens.',
            tab_class: 'tab-pane',
            imgPath: require('../images/departments-5.jpg')
        }
    ];

    console.log(dept_data[0].imgPath)

    const nav_links = [
        'Cardiology',
        'Neurology',
        'Heptology',
        'Pediatrix',
        'Eye Care'
    ];

    const active_show = 'active show';

    return (
        <section id="departments" className="departments">
            <div className="container">

                <div className="section-title">
                    <h2>Departments</h2>
                    <p>We make sure that the quality of service you are getting is world className we give you this gurranty with every service you opt for online as well as offline.We are one stop solution for your problems.We are covering a wide range of products, test and doctors with speciality in different feilds to make the service wide and safest.</p>
                </div>

                <div className="row">
                    <div className="col-lg-3">
                        <ul className="nav nav-tabs flex-column">
                            {
                                nav_links.map((dept, index)=> 
                                <li className="nav-item" style = {{cursor : 'pointer'}}>
                                    <a className={`nav-link ${active === index+1 ? active_show : ''}`} onClick = {()=>setactive(index+1)} data-toggle="tab" >{dept}</a>
                                </li>
                                )
                            }
                        </ul>
                    </div>

                    <div className="col-lg-9 mt-4 mt-lg-0">
                        <div className="tab-content">

                            {
                                dept_data.map( (dept,index) => <DepartmentTab data = {dept} id = {index+1} 
                                state = {active}/>)
                            }

                            {/* <div className="tab-pane active show" id="tab-1">
                                <div className="row">
                                    <div className="col-lg-8 details order-2 order-lg-1">
                                        <h3>Cardiology</h3>

                                        <p>Cardiology is the study and treatment of disorders of the heart and the blood vessels. A person with heart disease or cardiovascular disease may be referred to a cardiologist. Cardiology is a branch of internal medicine. A cardiologist is not the same as a cardiac surgeon.</p>
                                    </div>
                                    <div className="col-lg-4 text-center order-1 order-lg-2">
                                        <img src="assets/img/departments-1.jpg" alt="" className="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="tab-2">
                                <div className="row">
                                    <div className="col-lg-8 details order-2 order-lg-1">
                                        <h3>Neorology</h3>
                                        <p className="font-italic">Neurology is the branch of medicine concerned with the study and treatment of disorders of the nervous system. </p>
                                        <p>The nervous system is a complex, sophisticated system that regulates and coordinates body activities. It has two major divisions: Central nervous system: the brain and spinal cord.</p>
                                    </div>
                                    <div className="col-lg-4 text-center order-1 order-lg-2">
                                        <img src="assets/img/departments-2.jpg" alt="" className="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="tab-3">
                                <div className="row">
                                    <div className="col-lg-8 details order-2 order-lg-1">
                                        <h3>Hepatology</h3>
                                        <p className="font-italic">Hepatologist. This is a doctor who diagnoses and treats diseases associated with the gallbladder, pancreas and liver.</p>

                                    </div>
                                    <div className="col-lg-4 text-center order-1 order-lg-2">
                                        <img src="assets/img/departments-3.jpg" alt="" className="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="tab-4">
                                <div className="row">
                                    <div className="col-lg-8 details order-2 order-lg-1">
                                        <h3>Pediatric</h3>

                                        <p>Pediatrics (also spelled paediatrics or pædiatrics) is the branch of medicine that involves the medical care of infants, children, and adolescents. The American Academy of Pediatrics recommends people be under pediatric care through the age of 21 (though usually only minors are required to be under pediatric care).</p>
                                    </div>
                                    <div className="col-lg-4 text-center order-1 order-lg-2">
                                        <img src="assets/img/departments-4.jpg" alt="" className="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="tab-5">
                                <div className="row">
                                    <div className="col-lg-8 details order-2 order-lg-1">
                                        <h3>Eye Care</h3>

                                        <p>But there are other eye problems with liver disease. Dry, itchy eyes and xanthelasma—small collections of fat on the eyelids—can occur with cirrhosis. And congenital liver disorders can affect just about any part of the eye, including the cornea and lens.</p>
                                    </div>
                                    <div className="col-lg-4 text-center order-1 order-lg-2">
                                        <img src="assets/img/departments-5.jpg" alt="" className="img-fluid"/>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Departments
