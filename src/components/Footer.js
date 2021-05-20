import React from 'react'
import './css/Footer.css'

function Footer() {
    return (
        <footer>
            <div className = 'about'>
                <h4>Visudh Ajivam</h4>
                <br />
                Surya nagar road no-3 Bijulia talab road ward no -8
Ramgarh canttRamgarh Jharkhand 829122
India
            </div>
            <div className = 'links'>
                <h4>Reach US</h4>
                <br/>
                <p><h5>Github:</h5> <a href= '#'>Click it to se my profile</a>  </p>
                <p><h5>LinkedIn:</h5> <a href= '#'>Click it to se my profile</a>  </p>
            </div>
            <div className = 'contact'>
                <h4>Contact</h4>
                <br/>
                <p><h5>Email:</h5> visudhajivam@example.com</p>
                <p><h5>Call:</h5>9999999999  </p>
            </div>
        </footer>
    )
}

export default Footer
