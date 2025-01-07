// import { useState } from 'react'


import './Contact.css'
import './FacilitiesView.css'

import Nav from '../components/commen/Nav'
import Footer from '../components/commen/Footer'
import SubHeader from '../components/commen/SubHeader'
import FilePath from '../components/commen/FilePath'
// import Title from '../components/commen/Title'
import Gallery from '../components/commen/Gallery'
import FacilitiesList from '../components/home/FacilitiesList.js';

import Header from '../images/theme/background.jpg'
import Header2 from '../images/hero/image2.jpg'
import Header3 from '../images/branch/image2.jpg'
import Header4 from '../images/hero/image1.jpg'

import hero1 from "../images/hero/image1.jpg";
import hero2 from "../images/hero/image2.jpg";
import hero3 from "../images/hero/image3.jpg";
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import useAxios from '../hooks/useAxios.js'
import { useParams } from 'react-router-dom'


export default function FacilitiesView() {
    const { id } = useParams();
    const [facilitiesContent, setFacilitiesContent] = useState({});
    const [facilities, setFacilities] = useState([]);
    const { fetch, loading } = useAxios();


    const getFacilitieById = async () => {
        try {

            const { data: response } = await fetch({
                method: "GET",
                url: "/api/facilities/" + id,
            });
            if (response.success) {
                // console.log(response.data.facility);
                setFacilitiesContent(response.data.facility);
            }

        } catch (error) {
            toast.error("Something went wrong");
            console.error(error);
        }
    }

    const getFacilities = async () => {
        try {
            const response = await fetch({
                method: "GET",
                url: "/api/facilities",
            });
            if (response.data.success) {
                // console.log(response.data.facilities);
                setFacilities(response.data.data.facilities);
            }

        } catch (error) {
            toast.error("Something went wrong");
            console.error(error);
        }
    }

    useEffect(() => {
        getFacilitieById();
        getFacilities();
    }, [id]);

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
            <SubHeader title={facilitiesContent.title} image={Header} ></SubHeader>
            <FilePath text={facilitiesContent.title} path={facilitiesContent.title}></FilePath>

            <section className='event-view-1'>
                <div className='container'>
                    <div className='event-view-content'>
                        <p>
                            {facilitiesContent.description}
                        </p>

                    </div>
                </div>
            </section>

            <section className='event-view-2'>
                <div className='container'>
                    <div className='event-view-2-content'>

                        <Gallery images={facilitiesContent.images}></Gallery>
                    </div>
                </div>
            </section>


            <div className='event-view-3'>
                <div className='container'>
                    <FacilitiesList facilitiesData={facilities}></FacilitiesList>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
