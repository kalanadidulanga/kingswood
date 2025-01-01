import React, { useRef, useEffect, useState } from 'react'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import VanillaTilt from 'vanilla-tilt';

import './Review.css'

export default function Review(props) {

    const tiltRef = useRef(null);

    useEffect(() => {
        // Initialize Vanilla Tilt
        VanillaTilt.init(tiltRef.current, {
            max: 25, // Maximum tilt rotation (degrees)
            speed: 400, // Speed of the tilt effect
            scale: 1.1, // Scale on hover
            glare: true, // Enable glare effect
            "max-glare": 0.5 // Maximum glare opacity
        });

        return () => {
            // Cleanup: Destroy Vanilla Tilt instance
            if (tiltRef.current) {
                VanillaTilt.init(tiltRef.current, null);
            }
        };
    }, []);

    const reviewSettings = {
        dots: false, // Enable dots for navigation
        infinite: true, // Enable infinite looping
        speed: 500, // Transition speed in milliseconds
        slidesToShow: 1, // Default number of slides to show on large screens
        // slidesToScroll: 1, // Number of slides to scroll at once
        autoplay: true, // Enable auto-play
        autoplaySpeed: 5000, // Auto-play speed in milliseconds
        arrows: false, // Hide the next/previous arrows
        pauseOnHover: true, // Pause auto-play when hovering
        swipe: true, // Enable swipe on mobile
        draggable: true, // Allow dragging to slide
    };


    let [review, setReview] = useState(false);


    return (
        <>

            <div className={`review-add-bg ${review ? 'active' : ''} `} >
                <div className='review-add'>
                    <div className='review-close'>
                        <i class="bi bi-x" onClick={() => { setReview(false); console.log(review) }}></i>
                    </div>
                    <div className='review-c1'>
                        <div className='review-c1-image'>
                            <div className='review-c1-profile'>
                                <i class="bi bi-camera"></i>
                            </div>
                        </div>
                        <div className='review-c1-input'>
                            <ul>
                                <li>
                                    <i class="bi bi-star-fill active"></i>
                                </li>
                                <li>
                                    <i class="bi bi-star-fill active"></i>
                                </li>
                                <li>
                                    <i class="bi bi-star-fill active"></i>
                                </li>
                                <li>
                                    <i class="bi bi-star-fill"></i>
                                </li>
                                <li>
                                    <i class="bi bi-star-fill"></i>
                                </li>
                            </ul>
                            <input type="text" placeholder='Name' />
                        </div>
                    </div>
                    <div className='review-c2'>
                        <input type="text" placeholder='Name' />
                        <textarea placeholder='Comment'></textarea>
                    </div>
                    <div className='review-c3'>
                        <button>Add Review</button>
                    </div>
                </div>
            </div>

            <section className="review">
                <div className="container">
                    <div className="review-content">
                        <div className="review-content-1">
                            <div>
                                <p>See What We fasdf About</p>
                                <h1>Review And Rating</h1>
                                <span>
                                    Hear more about how we encourage our students to develop
                                    into bright upstanding citizens from our students' parents
                                </span>
                                {/* <div className="review-button">
                                    <button onClick={()=>{setReview(true); console.log(review)}}>Add Review</button>
                                </div> */}
                            </div>
                        </div>
                        <div className="review-content-2" ref={tiltRef}>
                            <div className="review-content-2-all">
                                <div className="item-list">
                                    <Slider {...reviewSettings}>
                                        {props.reviewItems.map((item, index) => (
                                            <div className="item" key={index}>
                                                <div className="item-content">
                                                    <div className="review-item">
                                                        <div className="review-details">
                                                            <div className="review-details-content-1">
                                                                <div className="review-details-profile">
                                                                    <img src={item.profileImage} alt="" />
                                                                </div>
                                                                <div className="review-name">
                                                                    <h1>{item.name}</h1>
                                                                    <p>{item.role}</p>
                                                                </div>
                                                            </div>
                                                            <div className="review-details-content-2">
                                                                <ul>
                                                                    {Array(5)
                                                                        .fill(0)
                                                                        .map((_, starIndex) => (
                                                                            <li
                                                                                className={
                                                                                    starIndex < item.rating
                                                                                        ? "active"
                                                                                        : ""
                                                                                }
                                                                                key={starIndex}
                                                                            >
                                                                                <i className="ri-star-fill"></i>
                                                                            </li>
                                                                        ))}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="review-content-2-description">
                                                            <p>{item.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
