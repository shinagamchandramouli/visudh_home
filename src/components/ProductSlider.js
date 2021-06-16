import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import Product from './Product'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const ProductSlider = ({productsToShow})=> {

    console.log(productsToShow.length)

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1220,
              settings: {
                slidesToShow: 4
              }
            },
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3
                }
            },
            {
                breakpoint: 700,
                settings: {
                  slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                slidesToShow: 1,
                  dots: false
                }
            }
        ]
      };


    return(
        <Wrapper>
            {/* <div className = 'categories'> */}
                <Slider {...settings}>
                {
                    productsToShow.map((product) =>{
                        return (
                            <div className = 'product-wrapper'>
                                <Product key={product.id} {...product} />
                            </div>
                        )
                    })
                }
                </Slider>
            {/* </div> */}
        </Wrapper>
    )
}

const Wrapper = styled.section`

    .product-wrapper {
        padding: 10px;
    }

    .slick-next:before, .slick-prev:before {
        color: #000;
    }

    img {
        height: 225px;
    }

    @media (min-width: 1200px) {
        img {
            height: 180px;
        }
    }
    
    @media (min-width: 992px) and (max-width: 1200px) {
        img {
            height: 180px;
        }
    }

    @media (min-width: 700px) and (max-width: 992px) {
        img {
            height: 160px;
        }
    }
    
    @media (min-width: 450px) and (max-width: 700px) {
        img {
            height: 170px;
        }
    }
    
    @media (max-width: 450px) {
        img {
            height: 150px;
        }

        .product-wrapper {
            padding: 10px 30px;
        }
    }

`

export default ProductSlider