import React from 'react';
import './FacilitiesList.css';

import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Title from '../commen/Title';

export default function FacilitiesList(props) {

    const facilitiesSettings = {
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
            <section className='facilities'>
                <Title
                    title='Our Facilities'
                    // description=''
                    path='../facilities'
                ></Title>

                {/* facilities */}
                <div className='facilities-content'>
                    <div className='container'>
                        <div className='item-list'>
                            <Slider {...facilitiesSettings}>
                                {props.facilitiesData.map((facility, index) => (
                                    <div className='item' key={index}>
                                        <div className='item-content'>
                                            {/* <Link to={`../facilities-view/${facility.id}`} className='facilities-item'> */}
                                            <Link to={`#`} className='facilities-item'>
                                                <div className='facilities-item-bg'>
                                                    <img src={facility.image} alt={facility.title} />
                                                </div>
                                                <div className='facilities-item-c'>
                                                    <h1>{facility.title}</h1>
                                                    <p>{facility.description}</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
