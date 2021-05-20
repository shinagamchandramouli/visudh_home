import React from 'react'
import { Col, Nav, Row, Tab } from 'react-bootstrap'
import './css/Departments.css'

function Departments() {
    return (
        <div className='departments'>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Cardiology</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Neurology</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Hepatology</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth">Eye Care</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                Cardiology is the study and treatment of disorders of the heart and the blood vessels. A person with heart disease or cardiovascular disease may be referred to a cardiologist. Cardiology is a branch of internal medicine. A cardiologist is not the same as a cardiac surgeon.
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                Neurology is the branch of medicine concerned with the study and treatment of disorders of the nervous system.
                            {/* <br/> */}
                            The nervous system is a complex, sophisticated system that regulates and coordinates body activities. It has two major divisions: Central nervous system: the brain and spinal cord.
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                Hepatologist. This is a doctor who diagnoses and treats diseases associated with the gallbladder, pancreas and liver.
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                But there are other eye problems with liver disease. Dry, itchy eyes and xanthelasma—small collections of fat on the eyelids—can occur with cirrhosis. And congenital liver disorders can affect just about any part of the eye, including the cornea and lens.
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

export default Departments
