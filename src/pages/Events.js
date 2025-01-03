import React from 'react'



import Nav from '../components/commen/Nav'
import Footer from '../components/commen/Footer'
import SubHeader from '../components/commen/SubHeader'
// import FilePath from '../components/commen/FilePath'
// import Title from '../components/commen/Title'
// import EventList from '../components/home/EventList.js';
import EventItem from '../components/commen/EventItem'

import Header from '../images/theme/background.jpg'

import hero1 from "../images/hero/image1.jpg";
import hero2 from "../images/hero/image2.jpg";
// import hero3 from "../images/hero/image3.jpg";

import './Events.css'
export default function Events() {

    const eventContent = [
        {
            id: 1,
            image: hero1,
            title: 'Lorem Ipsum is simply',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam sunt delectus cum molestiae. Deleniti dicta sit pariatur fugit asperiores praesentium!',
        },
        {
            id: 2,
            image: hero2,
            title: 'Lorem Ipsuggm is simply',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam sunt delectus cum molestiae. Deleniti dicta sit pariatur fugit asperiores praesentium!',
        },
        {
            id: 2,
            image: hero2,
            title: 'Lorem Ipsum is simply',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam sunt delectus cum molestiae. Deleniti dicta sit pariatur fugit asperiores praesentium!',
        },
        {
            id: 2,
            image: hero2,
            title: 'Lorem Ipsum is simply',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam sunt delectus cum molestiae. Deleniti dicta sit pariatur fugit asperiores praesentium!',
        },
        {
            id: 2,
            image: hero2,
            title: 'Lorem Ipsum is simply',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam sunt delectus cum molestiae. Deleniti dicta sit pariatur fugit asperiores praesentium!',
        },
        {
            id: 2,
            image: hero2,
            title: 'Lorem Ipsum is simply',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam sunt delectus cum molestiae. Deleniti dicta sit pariatur fugit asperiores praesentium!',
        },
        {
            id: 2,
            image: hero2,
            title: 'Lorem Ipsum is simply',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam sunt delectus cum molestiae. Deleniti dicta sit pariatur fugit asperiores praesentium!',
        },
        {
            id: 2,
            image: hero2,
            title: 'Lorem Ipsum is simply',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam sunt delectus cum molestiae. Deleniti dicta sit pariatur fugit asperiores praesentium!',
        },
        {
            id: 2,
            image: hero2,
            title: 'Lorem Ipsum is simply',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam sunt delectus cum molestiae. Deleniti dicta sit pariatur fugit asperiores praesentium!',
        },
    ];

    return (
        <>
            <Nav></Nav>
            <SubHeader title="Our Events" image={Header}></SubHeader>
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
                        <select name="" id="">
                            <option value="all-event">All Event</option>
                            <option value="upcoming-event">Upcoming Event</option>
                            <option value="old-event">Old Event</option>
                        </select>
                        <div className='file-path-filter-search'>
                            <input type="text" placeholder='Search' />
                            <button>
                                <i class="bi bi-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <section className='events-s1'>
                <div className='container'>
                    <div className="event-list">
                        <EventItem events={eventContent}></EventItem>
                    </div>
                </div>
            </section>
            <section className='events-s2'>
                <div className='container'>
                    <div className='events-pages'></div>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}
