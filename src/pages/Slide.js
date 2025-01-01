import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
        >
            &#9664;
        </button>
    );
};

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
        >
            &#9654;
        </button>
    );
};

const Carousel = () => {
    const settings = {
        dots: true, // Enable dots for navigation
        infinite: true, // Enable infinite looping
        speed: 500, // Transition speed in milliseconds
        slidesToShow: 1, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll at once
        autoplay: true, // Enable auto-play
        autoplaySpeed: 3000, // Auto-play speed in milliseconds
        nextArrow: <NextArrow />, // Custom next arrow
        prevArrow: <PrevArrow />, // Custom previous arrow
    };

    return (
        <div className="carousel-container" style={{ maxWidth: "800px", margin: "0 auto", position: "relative" }}>
            <Slider {...settings}>
                <div className="carousel-item" style={{ backgroundColor: 'red', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h3>Slide 1</h3>
                </div>
                <div className="carousel-item" style={{ backgroundColor: 'blue', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h3>Slide 2</h3>
                </div>
                <div className="carousel-item" style={{ backgroundColor: 'green', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h3>Slide 3</h3>
                </div>
                <div className="carousel-item" style={{ backgroundColor: 'green', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h3>Slide 4</h3>
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;
