import React from "react";
import "./Branch.css";

import Nav from "../components/commen/Nav";
import Title from "../components/commen/Title";
import Footer from "../components/commen/Footer";
import FilePath from "../components/commen/FilePath";
import SubHeader from "../components/commen/SubHeader";
import Gallery from "../components/commen/Gallery";
import FacilitiesList from "../components/home/FacilitiesList.js";

import Header from "../images/theme/background.jpg";
import Header2 from "../images/hero/image2.jpg";
import Header3 from "../images/branch/image2.jpg";
import Header4 from "../images/hero/image1.jpg";

import hero1 from "../images/hero/image1.jpg";
import hero2 from "../images/hero/image2.jpg";
import hero3 from "../images/hero/image3.jpg";

import headerImage from "../images/theme/background.jpg";

export default function Branch() {
  const images = [Header, Header2, Header3, Header4, Header];

  const FacilitiesContent = [
    {
      id: 1,
      title: "Maths Activity Room",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image: hero1,
    },
    {
      id: 2,
      title: "Science Lab",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image: hero2,
    },
    {
      id: 3,
      title: "Art Studio",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image: hero3,
    },
    {
      id: 4,
      title: "Dancing",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image: hero3,
    },
  ];

  return (
    <>
      <Nav></Nav>
      <div className="branch-header">
      <SubHeader title="Anuradhapura" image={headerImage}></SubHeader>
      </div>
      <FilePath text="Anuradhapura" path="anuradhapura"></FilePath>

      <section className="branch-s1">
        <Title
          title="About Kingswood British Collage"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, debitis."
          path="home"
        ></Title>
        <div className="container">
          <div className="branch-s1-c">
            <img src={headerImage} alt="" />

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
              voluptatem perferendis voluptas! Deserunt enim, sit quibusdam
              dicta officiis repudiandae ipsum eaque, eos alias quidem cum amet
              minima quae laudantium tenetur, voluptatibus accusamus odit
              deleniti veritatis! At facere modi, necessitatibus voluptas veniam
              eveniet corrupti hic itaque soluta ut alias rem porro, inventore
              nam.
              <br />
              <br />
              Eveniet excepturi placeat aut incidunt eum praesentium maxime
              aspernatur. Reprehenderit mollitia molestiae aspernatur ullam,
              commodi atque placeat quos quidem, nobis, molestias maiores ipsa.
              Ea nesciunt facere voluptatem beatae ipsa similique cupiditate
              laborum totam fuga impedit. Quis nam nisi illum, pariatur saepe
              ducimus fugit aperiam. Ab dignissimos rerum voluptas praesentium
              magni rem accusantium alias eum hic. Itaque, repellat illo error
              voluptatum, maxime reiciendis officiis esse consectetur
              repellendus, est quam
              <br />
              <br />
              assumenda tempore tempora architecto. Non, iste nam. Quia qui
              iure, facilis quaerat beatae nobis est magni quam perspiciatis. A
              esse quas saepe deleniti doloribus recusandae exercitationem
              repellat perspiciatis libero iusto. Dolorum veniam sit cupiditate.
              Minima cupiditate commodi ipsum eius optio odit dolorem harum!
              Ullam suscipit autem, quo nisi dignissimos sit nulla ducimus
              possimus ea velit vero vitae pariatur vel accusantium et illo
              iusto nemo, voluptate magni distinctio. Recusandae, nulla
              necessitatibus ea sit provident perferendis, aliquid architecto
              error, fugit dignissimos sunt.
            </p>
          </div>
        </div>
      </section>

      <section className="branch-s2">
        <div className="container">
          <div className="branch-s2-content">
            <Gallery images={images}></Gallery>
          </div>
        </div>
      </section>
      <div className="branch-s3">
        <div className="container">
          <FacilitiesList facilitiesData={FacilitiesContent}></FacilitiesList>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
