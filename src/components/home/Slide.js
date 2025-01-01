import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Slide.css'

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className='slider-arrow slider-left-arrow'>
            <div className='slider-content'>
                <button onClick={onClick}>
                    <i class="ri-arrow-left-s-fill"></i>
                </button>
            </div>
        </div>
    );
};

const NextArrow = (props) => {
    const { onClick } = props;
    return (

        <div className='slider-arrow slider-right-arrow'>
            <div className='slider-content'>
                <button onClick={onClick}>
                    <i class="ri-arrow-right-s-fill"></i>
                </button>
            </div>
        </div>
    );
};

export default function Slide(props) {

    const sliderSettings = {
        dots: true, // Enable dots for navigation
        infinite: true, // Enable infinite looping
        speed: 500, // Transition speed in milliseconds
        slidesToShow: 1, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll at once
        autoplay: true, // Enable auto-play
        autoplaySpeed: 5000, // Auto-play speed in milliseconds
        nextArrow: <NextArrow />, // Custom next arrow
        prevArrow: <PrevArrow />, // Custom previous arrow
    };

    return (
        <>
            <section className='slider'>
                <Slider {...sliderSettings}>
                    {props.image.map((img, index) => (
                        <div className='slider-item' key={index}>
                            <div className=' slider-text'>
                                <h1 className=' text-red-500 text-center'>Education is the key to success in life.</h1>
                                <p>Our school is a place where students are encouraged to say, “I see it, I get it, I can do it.”</p>
                            </div>
                            <div className="slider-background">
                                <img src={img} alt={`Slide ${index + 1}`} />
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>
        </>
    )
}
