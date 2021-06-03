import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "../images/gallery/gallery-1.jpg"
import img2 from "../images/gallery/gallery-2.jpg"
import img3 from "../images/gallery/gallery-3.jpg"
import img4 from "../images/gallery/gallery-4.jpg"
import img5 from "../images/gallery/gallery-5.jpg"
import img6 from "../images/gallery/gallery-6.jpg"
import img7 from "../images/gallery/gallery-7.jpg"
import img8 from "../images/gallery/gallery-8.jpg"
import './css/Gallery.css'


class Gallery extends React.Component {
    render() {
        return (
            <div className="carousel-bg" id = 'gallery'>
                <header className="section-title">
                <h2>Gallery</h2>
                </header>
                <div className="carousel">
                <Carousel autoPlay interval="3000" transitionTime="800">
                    <div>
                        <img src={img1}/>
                        </div>
                    <div>
                        <img src={img2} />
                    </div>
                    <div>
                        <img src={img3} />
                    </div>
                    <div>
                        <img src={img4} />
                    </div>
                    <div>
                        <img src={img5} />
                    </div>
                    <div>
                        <img src={img6} />
                    </div>
                    <div>
                        <img src={img7} />
                    </div>
                    <div>
                        <img src={img8} />
                    </div>

                </Carousel>
                </div>
            </div>
        )
    };
}

export default Gallery;