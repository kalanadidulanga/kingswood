import React from 'react'
import Title from '../commen/Title';

import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './EventList.css'
import { getImageUrl } from '../../utils/getImageUrl';

export default function UpcomingEventList(props) {

    const eventSettings = {
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
            <section className='event'>
                <Title
                    title='Upcoming Events'
                    //i want real description
                    description='Our Upcoming Events'
                    path='../events'
                ></Title>
                <div className='container'>
                    <div className='event-content'>
                        <div className='item-list'>
                            <Slider {...eventSettings}>
                                {props.eventItems.map((item) => (
                                    <Link to={`../event-view/${item.id}`} className='item' key={item.id}>
                                        <div className='item-content'>
                                            <div className='event-item'>
                                                <div className='event-background'>
                                                    <img src={getImageUrl(item.images[0].url)} alt={item.title} />
                                                </div>
                                                <div className='event-details'>
                                                    <h1>{item.title}</h1>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
