import React from 'react'

function TestimonalCard(props) {
    const data = props.data;
    return (
        <div class="testimonal-card">
            <div class="member d-flex flex-column">
                <div class="pic d-flex align-self-center"><img src={data.imgPath.default} class="img-fluid" alt=""/></div>
                <h4 className = 'text-center mt-2'>{data.doctor_name}</h4>
                <div class="member-info">
                    <span > <i class="fas fa-circle"></i> <span>{data.doctor_field} </span> </span>
                    <p > <i class="fas fa-circle"></i> <span>{data.doctor_description}</span></p>
                    <div class="social">
                        <a href={data.doctor_twitter}><i class="fab fa-twitter"></i></a>
                        <a href={data.doctor_facebook}><i class="fab fa-facebook" aria-hidden="true"></i></a>
                        <a href={data.doctor_github}><i class="fab fa-github"></i></a>
                        <a href={data.doctor_linkedin}> <i class="fab fa-linkedin"></i> </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonalCard
