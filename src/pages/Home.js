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

import { Building2, GraduationCap, School, Trophy, Users, UserCheck } from "lucide-react";


export default function Home() {


  const slideContent = [
    {
      image: hero1,
      h1: 'Continuous Improvement',
      p: 'Our mission is to make our students self-confident, enhance their thinking skills and make them into good human beings.'
    },
    {
      image: hero2,
      h1: 'Quality Education',
      p: 'We provide quality education to students from pre-primary to Advanced level with both local and international curricula.'
    },
    {
      image: hero3,
      h1: 'Global Role Model',
      p: 'Our vision is to become a global role model for teaching and learning.'
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
      icon: <Users className="w-12 h-12" />,
      count: 33,
      title: 'First Batch Students',
      description: 'Started with 33 dedicated students across three classrooms when we opened our doors in January 2017.',
    },
    {
      id: 2,
      icon: <Building2 className="w-12 h-12" />,
      count: 4,
      title: 'Campus Locations',
      description: 'Growing network of campuses in Negombo, Anuradhapura, Chilaw and Anamaduwa.',
    },
    {
      id: 3,
      icon: <GraduationCap className="w-12 h-12" />,
      count: 3,
      title: 'Curriculum Options',
      description: 'Offering Local, Edexcel and Cambridge syllabi to cater to diverse educational needs.',
    },
    {
      id: 4,
      icon: <School className="w-12 h-12" />,
      count: 2,
      title: 'Main Branches',
      description: 'Main college branches established in Bangadeniya (Chilaw) and Anamaduwa.',
    },
    {
      id: 5,
      icon: <Trophy className="w-12 h-12" />,
      count: 8,
      title: 'Years of Excellence',
      description: 'Providing quality education since 2017 under the leadership of Dr. B.A.K.R. Tharanga.',
    },
    {
      id: 6,
      icon: <UserCheck className="w-12 h-12" />,
      count: 80,
      title: 'Attendance Target',
      description: 'We maintain high standards with a minimum 80% attendance requirement for all students.',
    }
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
      name: 'Chilaw (Bangadeniya)',
      image: "/api/placeholder/400/300"
    },
    {
      name: 'Anamaduwa',
      image: "/api/placeholder/400/300"
    },
    {
      name: 'Negombo',
      image: "/api/placeholder/400/300"
    },
    {
      name: 'Anuradhapura',
      image: "/api/placeholder/400/300"
    }
  ];

  const successItems = [
    {
      title: 'Cambridge ESOL Partnership',
      description: 'Official partnership with Cambridge Assessments for ESOL examinations conducted on school premises.',
      imgSrc: "/api/placeholder/400/300",
      path: 'success'
    },
    {
      title: 'University Affiliations',
      description: 'Affiliated with Azteca University (UGC Recognized) and Open International University for Complementary Medicines.',
      imgSrc: "/api/placeholder/400/300",
      path: 'success'
    },
    {
      title: 'Competency Based Education',
      description: 'Implementation of modern competency-based education focusing on individual student mastery and progress.',
      imgSrc: "/api/placeholder/400/300",
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
      name: 'Dr. B.A.K.R. Tharanga',
      role: 'Director',
      profileImage: "/api/placeholder/100/100",
      rating: 5,
      description: 'Cambridge certified lecturer, Bachelor of Education Professional, and Honorary Doctor of Philosophy leading our institution since 2017.'
    },
    {
      name: 'Mrs. M.S.W. Fernando',
      role: 'Co-Founder and Group Principal',
      profileImage: "/api/placeholder/100/100",
      rating: 5,
      description: 'Trained teacher from ITTA and Cambridge certified Lecturer, dedicated to maintaining high educational standards.'
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
