import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Branch.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import map from '../../images/branch/map2.svg'
import branch1 from '../../images/branch/image1.jpg'
import branch2 from '../../images/branch/image2.jpg'
import { getImageUrl } from '../../utils/getImageUrl';


export default function Branch(props) {

    const sliderSettings = {
        dots: false, // Enable dots for navigation
        infinite: true, // Enable infinite looping
        speed: 500, // Transition speed in milliseconds
        slidesToShow: 1, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll at once
        autoplay: true, // Enable auto-play
        autoplaySpeed: 5000, // Auto-play speed in milliseconds
        pauseOnHover: false,
    };


    useEffect(() => {
        const handleMouseMove = (e) => {
            const element = document.querySelector('.map-image'); // Select the map image directly
            const { clientX, clientY } = e;
            const { left, top, width, height } = element.getBoundingClientRect();

            // Calculate position relative to the center of the image
            const x = ((clientX - left) / width - 0.5) * 30; // Adjust multiplier for shake intensity
            const y = ((clientY - top) / height - 0.5) * -30; // Adjust multiplier for shake intensity

            // Apply shake effect
            element.style.transform = `translate(${x}px, ${y}px)`;
        };

        const handleMouseLeave = () => {
            const element = document.querySelector('.map-image'); // Select the map image again
            element.style.transform = 'translate(0, 0)'; // Reset position
        };

        const contentElement = document.querySelector('.branch'); // Select the branch-content element
        contentElement.addEventListener('mousemove', handleMouseMove);
        contentElement.addEventListener('mouseleave', handleMouseLeave);

        // Clean up event listeners on component unmount
        return () => {
            contentElement.removeEventListener('mousemove', handleMouseMove);
            contentElement.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <>
            <section className='branch'>
                <div className='branch-background'>
                    <Slider {...sliderSettings}>
                        {props.branches.map((branch, index) => (
                            <div key={index} className='branch-list'>
                                <div className='branch-name'>
                                    <h1>{branch.title}</h1>
                                </div>
                                <div className='branch-image'>
                                    <img src={getImageUrl(branch.imageUrl)} alt={branch.name} />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className='branch-content '>
                    <div className='branch-map hidden lg:flex'>
                        <img src={map} alt="" className='map-image' />
                    </div>
                    <div className='branch-details'>
                        <div className='branch-details-content'>
                            <h1>Our Schools Network</h1>
                            <p>We have 4 branches of schools scattered all around Sri Lanka which provides us with the opportunity to deliver quality education to all parts of our motherland</p>
                            <div className='branch-button'>
                                <Link to="../admission">Apply Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
