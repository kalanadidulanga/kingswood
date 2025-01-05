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
                    {props.content.map((content, index) => (
                        <div className='slider-item ' key={index}>
                            <div className=' slider-text flex flex-col justify-center items-center gap-5 p-5 z-50'>
                                <h1 className=' text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-3xl md:text-4xl lg:text-5xl tracking-wide capitalize font-bold text-center'>{content.h1}</h1>
                                <p className=' text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-sm md:text-md lg:text-lg tracking-wide font-semibold text-center'>{content.p}</p>
                            </div>
                            <div className=" slider-background w-full min-h-full object-cover object-center">
                                <img src={content.image} alt={`Slide ${index + 1}`} className=" h-full w-full object-cover object-center" />
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>
        </>
    )
}
