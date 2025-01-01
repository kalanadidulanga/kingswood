import React from "react";

import Nav from '../components/commen/Nav';
// import Title from '../components/commen/Title';
import Slide from '../components/home/Slide.js';
import FacilitiesList from '../components/home/FacilitiesList.js';
import DetailsList from '../components/home/DetailsList.js';
import EventList from '../components/home/EventList.js';
import UpcomingEventList from '../components/home/UpcomingEventList.js';
import Branch from '../components/home/Branch.js';
import Success from '../components/home/Success.js';
import Awards from '../components/home/Awards.js';
import Review from '../components/home/Review.js';
import Footer from '../components/commen/Footer.js'


import hero1 from "../images/hero/image1.jpg";
import hero2 from "../images/hero/image2.jpg";
import hero3 from "../images/hero/image3.jpg";


import awordsIcon from '../images/theme/awords.png'
import enrollmentsIcon from '../images/theme/enrollments.png'
import schoolsIcon from '../images/theme/schools.png'
import serviceIcon from '../images/theme/service.png'
import studentIcon from '../images/theme/student.png'
import teachersIcon from '../images/theme/teachers.png'

import branch1 from '../images/branch/image1.jpg'
import branch2 from '../images/branch/image2.jpg'
import branch3 from '../images/branch/image3.jpg'

import award1 from '../images/Awards/1.png';
import award2 from '../images/Awards/2.png';
import award3 from '../images/Awards/3.png';
// import award4 from '../images/Awards/4.png';

// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Home() {


  const slideContent = [
    {
      image: hero1,
      h1: 'Education is the ',
      p: 'Our school is a place where students are encouraged to say, “I see it, I get it, I can do it.”'
    },
    {
      image: hero2,
      h1: 'Education is the key to success in life.',
      p: 'Our school is a place where students are encouraged to say, “I see it, I get it, I can do it.”'
    },
    {
      image: hero3,
      h1: 'Education is the key to asdasdasd',
      p: 'Our school is a place where students are encouraged to say, “I see itsdfsdfsf.”'
    }
  ];

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

  const details = [
    {
      id: 1,
      icon: studentIcon,
      count: 437,
      title: 'Current Students',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium dolore atque ad fuga similique minima reiciendis, quasi illo voluptate sequi!',
    },
    {
      id: 2,
      icon: awordsIcon,
      count: 250,
      title: 'Awords',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita nostrum delectus, temporibus suscipit magni omnis molestias!',
    },
    {
      id: 3,
      icon: teachersIcon,
      count: 233,
      title: 'Teachers',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi velit maxime similique tempore sunt exercitationem explicabo modi.',
    },
    {
      id: 4,
      icon: enrollmentsIcon,
      count: 2342,
      title: 'Annual Enrollments',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi velit maxime similique tempore sunt exercitationem explicabo modi.',
    },
    {
      id: 5,
      icon: serviceIcon,
      count: 4,
      title: 'years in service',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi velit maxime similique tempore sunt exercitationem explicabo modi.',
    },
    {
      id: 6,
      icon: schoolsIcon,
      count: 10,
      title: 'Schools Island wide',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi velit maxime similique tempore sunt exercitationem explicabo modi.',
    },
  ];


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
  ];

  const UpcomingEventContent = [
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
      id: 3,
      image: hero2,
      title: 'Lorem Ipsum is simply',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam sunt delectus cum molestiae. Deleniti dicta sit pariatur fugit asperiores praesentium!',
    },
  ];

  const branchesList = [
    {
      name: 'Chillaw',
      image: branch1
    },
    {
      name: 'Anuradhapura',
      image: branch2
    }
    ,
    {
      name: 'Kandy',
      image: branch3
    }
  ];

  const successItems = [
    {
      title: 'Lorem Ipsum is simply',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, nulla! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, nulla! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, nulla!',
      imgSrc: hero1,
      path: 'success'
    },
    {
      title: 'Lorem Ipsum is simply',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, nulla!',
      imgSrc: hero2,
      path: 'success'
    },
    {
      title: 'Lorem Ipsum is simply',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, nulla!',
      imgSrc: hero3,
      path: 'success'
    },
    {
      title: 'Lorem Ipsum is simply',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, nulla!',
      imgSrc: hero1,
      path: 'success'
    }
  ];

  const awardItems = [
    {
      imgSrc: award1,
      title: 'Awards and Recognitions',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In temporibus inventore tenetur consectetur rem odio, voluptas repellat accusantium, eum eius odit officia itaque vitae suscipit similique harum. Perferendis, esse autem.'
    },
    {
      imgSrc: award2,
      title: 'Awards and Recognitions',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In temporibus inventore tenetur consectetur rem odio, voluptas repellat accusantium, eum eius odit officia itaque vitae suscipit similique harum. Perferendis, esse autem.'
    },
    {
      imgSrc: award3,
      title: 'Awards and Recognitions',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In temporibus inventore tenetur consectetur rem odio, voluptas repellat accusantium, eum eius odit officia itaque vitae suscipit similique harum. Perferendis, esse autem.'
    }
  ];

  const reviewItems = [
    {
      name: 'Tharindu Kulasinghe',
      role: 'Father (Kingswood British Chillaw)',
      profileImage: hero1,
      rating: 4,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae id, officiis molestias nemo voluptatum excepturi sed expedita ducimus sunt, quia ipsum dolorum itaque doloremque. Dolorem libero voluptate amet quo aliquam.'
    },
    {
      name: 'Tharindu Kulasinghe',
      role: 'Father (Kingswood British Chillaw)',
      profileImage: hero1,
      rating: 4,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae id, officiis molestias nemo voluptatum excepturi sed expedita ducimus sunt, quia ipsum dolorum itaque doloremque. Dolorem libero voluptate amet quo aliquam.'
    }
  ];


  return (
    <>
      <Nav />
      <Slide content={slideContent} />
      <FacilitiesList facilitiesData={FacilitiesContent} />
      <DetailsList details={details} />

      {UpcomingEventContent.length >= 3 ? (
        <UpcomingEventList
          eventItems={UpcomingEventContent}
        />
      ) : (
        ""
      )}

      <EventList eventItems={eventContent}></EventList>
      <Branch branches={branchesList}></Branch>
      <Success successItems={successItems}></Success>
      <Awards awardItems={awardItems}></Awards>
      <Review reviewItems={reviewItems}></Review>
      <Footer />
    </>
  );
}
