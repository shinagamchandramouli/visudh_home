import React from 'react'
import './css/Hero.css'

function Hero() {
    return (
        <section id="hero" class="d-flex align-items-center">
            <div class="container">
                <h1 class="text-primary">Welcome to visudh <span class="text-danger">Ajivam</span></h1>
                <h2 class="text-light">We Provide You High
                    Quaility Services</h2>
                <a href="#about" class="btn-get-started scrollto">Order Medicine</a>
            </div>
        </section>
    )
}

export default Hero
