// import { useState } from 'react'


import './Contact.css'
import './EventView.css'

import Nav from '../components/commen/Nav'
import Footer from '../components/commen/Footer'
import EventHeader from '../components/commen/EventHeader'
import FilePath from '../components/commen/FilePath'
// import Title from '../components/commen/Title'
import Gallery from '../components/commen/Gallery'
import EventList from '../components/home/EventList.js';


import Header from '../images/theme/background.jpg'
import Header2 from '../images/hero/image2.jpg'
import Header3 from '../images/branch/image2.jpg'
import Header4 from '../images/hero/image1.jpg'

import hero1 from "../images/hero/image1.jpg";
import hero2 from "../images/hero/image2.jpg";
// import hero3 from "../images/hero/image3.jpg";


export default function EventView() {

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

    const images = [
        Header,
        Header2,
        Header3,
        Header4,
        Header
    ];

    return (
        <>
            <Nav></Nav>
            <EventHeader title="BestWeb.lk 2024 International Schools wins gold award for second year in a row" image={Header} date="August 14, 2024"></EventHeader>
            <FilePath text="BestWeb.lk 2024 International Schools wins gold award for second year in a row" path="admissions"></FilePath>

            <section className='event-view-1'>
                <div className='container'>
                    <div className='event-view-content'>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            <br /><br />
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            <br /><br />
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>

                    </div>
                </div>
            </section>

            <section className='event-view-2'>
                <div className='container'>
                    <div className='event-view-2-content'>

                        <Gallery images={images}></Gallery>
                    </div>
                </div>
            </section>


            <div className='event-view-3'>
                <div className='container'>
                    <EventList eventItems={eventContent}></EventList>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
