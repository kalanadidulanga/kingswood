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
            title: 'Pre-Primary Education',
            description: 'Nurturing young minds with Oxford Print syllabus and local competency activities',
            image: '/img/11.jpg'
        },
        {
            id: 2,
            title: 'Primary Education',
            description: 'Comprehensive primary education following Edexcel curriculum',
            image: '/img/22.jpeg'
        },
        {
            id: 3,
            title: 'Secondary Education',
            description: 'Advanced secondary education with both local and international syllabi',
            image: '/img/33.jpg'
        },
        {
            id: 4,
            title: 'Cambridge ESOL',
            description: 'Official Cambridge Assessment ESOL examination center',
            image: '/img/44.jpeg'
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
