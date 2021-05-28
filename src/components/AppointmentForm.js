import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import './css/AppointmentForm.css'

function AppointmentForm() {
    return (
        <div className='appointment-form'>
            <div class="container">

                <div class="section-title d-flex justify-content-center">
                    <h2>Make an Appointment</h2>
                </div>

                <form role="form" class="php-email-form">
                    <div class="form-row">
                        <div class="col-md-4 form-group">
                            <label>Full Name</label>
                            <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div class="validate"></div>
                        </div>
                        <div class="col-md-4 form-group">
                            <label>Email</label>
                            <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            <div class="validate"></div>
                        </div>
                        <div class="col-md-4 form-group">
                            <label>Contact</label>
                            <input type="tel" class="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter Your phone number" />
                            <div class="validate"></div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-4 form-group">
                            <label>Date</label>
                            <input type="datetime" name="date" class="form-control datepicker" id="date" placeholder="Appointment Date" data-rule="minlen:4" data-msg="Please Select a date" />
                            <div class="validate"></div>
                        </div>
                        <div class="col-md-4 form-group">
                            <label>Treatment</label>
                            <select name="department" id="department" class="form-control">
                                <option value="">Select Treetment</option>
                                <option value="Department 1">Cardiology</option>
                                <option value="Department 2">Neorology</option>
                                <option value="Department 3">Child-treetment</option>
                            </select>
                            <div class="validate"></div>
                        </div>
                        <div class="col-md-4 form-group">
                            <label>Test</label>
                            <select name="doctor" id="doctor" class="form-control">
                                <option value="">Select Test</option>
                                <option value="Doctor 1">Diagnosiss</option>
                                <option value="Doctor 2">Lab test</option>
                                <option value="Doctor 3">Op</option>
                            </select>
                            <div class="validate"></div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label>Aadhar</label>
                        <input type="number" class="form-control" name="aadhar" id = "aadhar" placeholder="Aadhar" data-rule="minlen:4" data-msg="Please enter Your phone number" />
                        <div class="validate"></div>
                    </div>
                    
                    <div class="form-group">
                        <label>Describe your problem</label>
                        <textarea class="form-control" name="message" rows="5" placeholder="Message (Optional)"></textarea>
                        <div class="validate"></div>
                    </div>
                    <div class="mb-3">
                        <div class="loading"></div>
                        <div class="error-message"></div>
                        <div class="sent-message"></div>
                    </div>
                    <div class="text-center"><button type="submit">Make an Appointment</button></div>
                </form>

            </div>
        </div>
    )
}

export default AppointmentForm

