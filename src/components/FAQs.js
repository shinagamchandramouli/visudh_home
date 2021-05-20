import React from 'react'
import { Accordion, Button, Card } from 'react-bootstrap'

import './css/FAQs.css'

function FAQs() {
    return (
        <div className='faqs'>
            <div style={{ textAlign: 'center' }}><h4>FAQs</h4></div>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="5" style= {{width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center', cursor:'pointer'}}>
                        <span>Do we have online cunsulting doctors?</span>
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                        <Card.Body>Yes we do have online consulting dwith our experts</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" style= {{width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center', cursor:'pointer'}}>
                        <span>Do you delever medicine to home?</span>
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>Yes we have a big contacts with medicine delevery service</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1" style= {{width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center', cursor:'pointer'}}>
                        <span>Is there child special treatment available?</span>
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>Yes! Of course.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2" style= {{width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center', cursor:'pointer'}}>
                        <span>Can we take a doctor appointment online?</span>
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>yes ofcourse we have the booking service too</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}

export default FAQs
