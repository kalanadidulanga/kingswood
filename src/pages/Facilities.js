import React from 'react'
import './Facilities.css'

import Nav from '../components/commen/Nav'
import Footer from '../components/commen/Footer'
import SubHeader from '../components/commen/SubHeader'
// import FilePath from '../components/commen/FilePath'
// import Title from '../components/commen/Title'
// import EventList from '../components/home/EventList.js';
import FacilitiesItem from '../components/commen/FacilitiesItem'

import Header from '../images/theme/background.jpg'

import hero1 from "../images/hero/image1.jpg";
import hero2 from "../images/hero/image2.jpg";
import hero3 from "../images/hero/image3.jpg";


export default function Events() {

    const FacilitiesContent = [
        {
            id: 1,
            title: 'Maths Activity Room',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            image: hero1
        },
        {
            id: 2,
            title: 'Science Lab',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            image: hero2
        },
        {
            id: 3,
            title: 'Art Studio',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            image: hero3
        },
        {
            id: 4,
            title: 'Dancing',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            image: hero3
        },
    ];

    return (
        <>
            <Nav></Nav>
            <SubHeader title="Our Facilities" image={Header}></SubHeader>
            <div className="file-path">
                <div className='file-path-c1'>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>/</li>
                        <li>Our Events</li>
                    </ul>
                </div>
                <div className='file-path-c2'>
                    <div className='file-path-filter'>
                        {/* <select name="" id="">
                            <option value="Event">Event</option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                        <div className='file-path-filter-search'>
                            <input type="text" placeholder='Search' />
                            <button>
                                <i class="bi bi-search"></i>
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>

            <section className='facilities-s1'>
                <div className='container'>
                    <div className="facilities-list">
                        <FacilitiesItem facilitiesData={FacilitiesContent}></FacilitiesItem>
                    </div>
                </div>
            </section>
            <section className='facilities-s2'>
                <div className='container'>
                    <div className='facilities-pages'></div>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}
