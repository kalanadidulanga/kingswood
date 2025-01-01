import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Awards.css'


import Title from '../commen/Title';

export default function Awards(props) {

    const awardSettings = {
        dots: true, // Enable dots for navigation
        infinite: true, // Enable infinite looping
        speed: 500, // Transition speed in milliseconds
        slidesToShow: 4, // Default number of slides to show on large screens
        // slidesToScroll: 1, // Number of slides to scroll at once
        autoplay: true, // Enable auto-play
        autoplaySpeed: 5000, // Auto-play speed in milliseconds
        arrows: false, // Hide the next/previous arrows
        pauseOnHover: true, // Pause auto-play when hovering
        swipe: true, // Enable swipe on mobile
        draggable: true, // Allow dragging to slide
        responsive: [
            {
                breakpoint: 2000, // Screen width 600px and below
                settings: {
                    slidesToShow: 4, // Show 1 slide on small devices
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1400, // Screen width 600px and below
                settings: {
                    slidesToShow: 3, // Show 1 slide on small devices
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 992, // Screen width 1024px and below
                settings: {
                    slidesToShow: 2, // Show 2 slides on tablets
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // Screen width 600px and below
                settings: {
                    slidesToShow: 1, // Show 1 slide on small devices
                    slidesToScroll: 1,
                },
            }
        ],
    };

    return (
        <>
            <section className='awards'>
                <Title
                    title='Awards and Recognitions'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, debitis.'
                    path='home'
                ></Title>

                <div className='awards-content'>
                    <div className='item-list'>
                        <Slider {...awardSettings}>
                            {props.awardItems.map((item, index) => (
                                <div className='item' key={index}>
                                    <div className='item-content'>
                                        <div className='award-item'>
                                            <img src={item.imgSrc} alt="" />
                                            <div className='award-details'>
                                                <div>
                                                    <h1>{item.title}</h1>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}
