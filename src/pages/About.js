import React from 'react'
import './About.css';

import Nav from '../components/commen/Nav';
import Title from '../components/commen/Title';
import Footer from '../components/commen/Footer';
import FilePath from '../components/commen/FilePath';
import SubHeader from '../components/commen/SubHeader';

import headerImage from '../images/theme/background.jpg'

export default function About() {
  return (
    <>
      <Nav></Nav>

      <SubHeader title="About Kingswood British" image={headerImage}></SubHeader>

      <FilePath text="About" path="about"></FilePath>

      <section className='about-s1'>
        <Title
          title='About'
          description='Kingswood British College was founded on 5th January 2017. From humble beginnings with 33 students and three classrooms, it has grown into a leading English Medium College offering quality education.'
          path='home'
        ></Title>
        <div className='container'>
          <div className='about-s1-c'>
            <div className='about-s1-c1'>
              <p>
                Kingswood British International College, founded by Dr. B.A.K.R.Tharanga, is a legally incorporated private limited company under the Companies Act No 07 of 2007. The college operates in Chilaw and Anamaduwa, focusing on providing quality education from pre-primary to Advanced Level. It offers local, Edexcel, and Cambridge syllabi.
                <br /> <br />
                The institution is registered under the Human Resource Development Authority in the North Western Province and is affiliated with Azteca University (UGC Recognized) and the Open International University for Complementary Medicines. Additionally, the college facilitates Cambridge Assessments ESOL exams in partnership with the University of Cambridge, UK, through Amark Ebek.
                <br /><br />
                Kingswood nurtures pre-primary students with a foreign syllabus (Oxford Print) and competency-based activities aligned with local guidelines. Its mission is to foster self-confidence, enhance thinking skills, and develop well-rounded individuals ready to contribute to a better world.
              </p>
            </div>
            <div className='about-s1-c2'>
              <div className='about-s1-c2-photo'>
                <img src={"/img/1.jpg"} alt="" />
                <img src={"/img/2.jpeg"} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='about-s2'>
        <div className='container'>
          <div className='about-s2-c'>
            <div className='about-s2-c1'>
              <h1>Our Vision</h1>
              <p>Our vision is to become a global role model for teaching and learning.</p>
            </div>
            <div className='about-s2-c2'>
              <h1>Our Mission</h1>
              <p>Our mission is to make our students self-confident, enhance their thinking skills, and develop them into good human beings who make the world a better and happier place.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='about-s3'>
        <Title
          title='Our Story'
          description='The journey of Kingswood British College from its inception to its current success.'
          path='home'
        ></Title>
        <div className='container'>
          <div className='about-s3-c'>
            <img src={'/img/2.jpg'} alt="" />

            <p>
              Kingswood British College began as a vision of Dr. B.A.K.K. Tharanga in 2009. The college officially opened its doors on 5th January 2017 with 33 students and five teachers, starting with two pre-primary classes and one Grade 1 class. The first branch, established in Bangadeniya, has since expanded to serve a growing community of learners.
              <br /><br />
              Today, Kingswood continues to excel in providing comprehensive education, leveraging local and international affiliations to enrich the academic and personal growth of its students. The college's commitment to excellence is evident in its diverse curriculum and dedication to nurturing young minds.
            </p>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>


  )
}


