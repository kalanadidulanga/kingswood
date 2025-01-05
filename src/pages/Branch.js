import React, { useState } from "react";
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

const branches = [
  {
    id: 1,
    name: "Bangadeniya",
    description: "Our first branch established in 2017, located a few kilometers away from Chilaw. The branch started with just 33 students and 5 teachers, hosting two pre-primary classes and 1 grade one class. Today, it stands as our main campus providing comprehensive education from pre-primary to Advanced level.",
    type: "Main Campus",
    image: '/img/gg/6.jpg'
  },
  {
    id: 2,
    name: "Anamaduwa",
    description: "One of our key branches providing quality education from pre-primary to Advanced level, following both local and international curricula including Edexcel and Cambridge syllabi.",
    type: "Branch Campus",
    image: '/img/gg/4.jpg'

  },
  {
    id: 3,
    name: "Negombo",
    description: "Campus branch affiliated with University of Azteca, North America, offering higher education opportunities alongside our regular college programs.",
    type: "Campus Branch",
    image: '/img/gg/5.jpg'

  },
  {
    id: 4,
    name: "Anuradhapura",
    description: "Campus branch offering both college and university programs in affiliation with University of Azteca, providing advanced education opportunities to students in the region.",
    type: "Campus Branch",
    image: '/img/gg/7.jpg'
  }
];

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

export default function Branch() {
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);
  const images = [Header, Header2, Header3, Header4, Header];

  return (
    <>
      <Nav />
      <div className="branch-header">
        <SubHeader title={selectedBranch.name} image={headerImage} />
      </div>

      <div className="container mx-auto py-4">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {branches.map((branch) => (
            <button
              key={branch.id}
              onClick={() => setSelectedBranch(branch)}
              className={`px-4 py-2 rounded-lg transition-colors ${selectedBranch.id === branch.id
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
                }`}
            >
              {branch.name}
            </button>
          ))}
        </div>
      </div>

      <FilePath text={selectedBranch.name} path={selectedBranch.name.toLowerCase()} />

      <section className="branch-s1">
        <Title
          title={`About Kingswood British College - ${selectedBranch.name}`}
          description="A Leading English Medium College Since 2017"
          path="branch"
        />
        <div className="container">
          <div className="branch-s1-c">
            <img src={selectedBranch.image} alt={`${selectedBranch.name} campus`} />
            <p className="mt-6">
              {selectedBranch.description}
            </p>
            <p className="mt-4">
              Kingswood British College was founded by Dr. B.A.K.R. Tharanga on 5th January 2017. It has been a leading English Medium College that operates with a focus on providing quality education up to Advanced Level. The college is registered with the Human Resource Development Authority in North Western Province and is affiliated with Azteca University (UGC Recognized) and the Open International University for Complementary Medicines.
            </p>
            <p className="mt-4">
              We maintain affordable charges with admission fees ranging from LKR 50,000 for Pre-Primary to LKR 75,000 for Secondary levels. Our institution follows multiple curricula including local, Edexcel, and Cambridge syllabi to provide comprehensive education to our students.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="branch-s2">
        <div className="container">
          <div className="branch-s2-content">
            <Gallery images={images} />
          </div>
        </div>
      </section> */}

      <div className="branch-s3">
        <div className="container">
          <FacilitiesList facilitiesData={FacilitiesContent} />
        </div>
      </div>
      <Footer />
    </>
  );
}