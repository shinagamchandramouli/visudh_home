import React from 'react'

function ServiceCard(props) {
    const data = props.data;
    return (
        <div class="col-lg-4 col-md-6 col-sm-9 mx-sm-auto d-flex align-items-stretch mt-5">
            <div class="icon-box">
                <div class="icon"><i class={`fas ${data.icon_class}`}></i></div>
                <h4><a href="">{data.title}</a></h4>
                <p>{data.description}</p>
            </div>
        </div>
    )
}

export default ServiceCard
