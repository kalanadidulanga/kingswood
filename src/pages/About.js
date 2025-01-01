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
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, debitis.'
          path='home'
        ></Title>
        <div className='container'>
          <div className='about-s1-c'>
            <div className='about-s1-c1'>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis debitis nam corrupti, dolorum fugit ullam! Numquam minus fugit in inventore quisquam eaque sunt dolorem, nulla consequatur adipisci illum assumenda neque, commodi molestias cupiditate ratione nemo ex. Odio, iure ducimus facilis dicta est sed eos nemo dolor saepe excepturi modi magni quibusdam ipsam id nesciunt repellat reprehenderit repellendus error mollitia officiis reiciendis blanditiis vitae. Incidunt nemo temporibus consectetur magni nostrum ducimus minima asperiores
                <br /> <br />
                illum, natus eos sint vitae culpa veritatis debitis doloribus voluptatum fugiat quasi. Facere dolorum ea odit deserunt est illo eos soluta ipsa dolorem vitae! Sint dolor dicta rem.
                <br /><br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati blanditiis beatae at asperiores, odio dolorum nulla ipsum omnis magni ducimus tempora! Expedita architecto quidem quas, officiis eius, blanditiis ullam quae ducimus, velit obcaecati quam minima accusantium deleniti. Eligendi, perferendis totam? Non vero ducimus nesciunt minima facere vel numquam maxime aliquid.
              </p>
            </div>
            <div className='about-s1-c2'>
              <div className='about-s1-c2-photo'>
                <img src={headerImage} alt="" />
                <img src={headerImage} alt="" />
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
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, quaerat quidem, animi alias natus, deserunt itaque voluptate nihil dolore vel sint quos magnam explicabo. Cumque, fugiat incidunt non accusantium cum libero corporis magnam quis mollitia veritatis, quo nihil laudantium sapiente esse sequi est. Exercitationem deleniti vitae mollitia culpa, expedita error.</p>
            </div>
            <div className='about-s2-c2'>
              <h1>Our Mission</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, quaerat quidem, animi alias natus, deserunt itaque voluptate nihil dolore vel sint quos magnam explicabo. Cumque, fugiat incidunt non accusantium cum libero corporis magnam quis mollitia veritatis, quo nihil laudantium sapiente esse sequi est. Exercitationem deleniti vitae mollitia culpa, expedita error.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='about-s3'>
        <Title
          title='Our Story'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, debitis.'
          path='home'
        ></Title>
        <div className='container'>
          <div className='about-s3-c'>
            <img src={headerImage} alt="" />

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatem perferendis voluptas! Deserunt enim, sit quibusdam dicta officiis repudiandae ipsum eaque, eos alias quidem cum amet minima quae laudantium tenetur, voluptatibus accusamus odit deleniti veritatis! At facere modi, necessitatibus voluptas veniam eveniet corrupti hic itaque soluta ut alias rem porro, inventore nam. <br /><br /> Eveniet excepturi placeat aut incidunt eum praesentium maxime aspernatur. Reprehenderit mollitia molestiae aspernatur ullam, commodi atque placeat quos quidem, nobis, molestias maiores ipsa. Ea nesciunt facere voluptatem beatae ipsa similique cupiditate laborum totam fuga impedit. Quis nam nisi illum, pariatur saepe ducimus fugit aperiam. Ab dignissimos rerum voluptas praesentium magni rem accusantium alias eum hic. Itaque, repellat illo error voluptatum, maxime reiciendis officiis esse consectetur repellendus, est quam <br /><br /> assumenda tempore tempora architecto. Non, iste nam. Quia qui iure, facilis quaerat beatae nobis est magni quam perspiciatis. A esse quas saepe deleniti doloribus recusandae exercitationem repellat perspiciatis libero iusto. Dolorum veniam sit cupiditate. Minima cupiditate commodi ipsum eius optio odit dolorem harum! Ullam suscipit autem, quo nisi dignissimos sit nulla ducimus possimus ea velit vero vitae pariatur vel accusantium et illo iusto nemo, voluptate magni distinctio. Recusandae, nulla necessitatibus ea sit provident perferendis, aliquid architecto error, fugit dignissimos sunt.</p>

          </div>
        </div>
      </section>

      <Footer></Footer>

    </>
  )
}


