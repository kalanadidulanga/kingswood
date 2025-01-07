import React, { useEffect, useState } from "react";
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
import toast from "react-hot-toast";
import useAxios from "../hooks/useAxios.js";
import { getImageUrl } from "../utils/getImageUrl.js";
import { Loader2 } from "lucide-react";

// const branches = [
//   {
//     id: 1,
//     name: "Bangadeniya",
//     description: "Our first branch established in 2017, located a few kilometers away from Chilaw. The branch started with just 33 students and 5 teachers, hosting two pre-primary classes and 1 grade one class. Today, it stands as our main campus providing comprehensive education from pre-primary to Advanced level.",
//     type: "Main Campus",
//     image: '/img/gg/6.jpg'
//   },
//   {
//     id: 2,
//     name: "Anamaduwa",
//     description: "One of our key branches providing quality education from pre-primary to Advanced level, following both local and international curricula including Edexcel and Cambridge syllabi.",
//     type: "Branch Campus",
//     image: '/img/gg/4.jpg'

//   },
//   {
//     id: 3,
//     name: "Negombo",
//     description: "Campus branch affiliated with University of Azteca, North America, offering higher education opportunities alongside our regular college programs.",
//     type: "Campus Branch",
//     image: '/img/gg/5.jpg'

//   },
//   {
//     id: 4,
//     name: "Anuradhapura",
//     description: "Campus branch offering both college and university programs in affiliation with University of Azteca, providing advanced education opportunities to students in the region.",
//     type: "Campus Branch",
//     image: '/img/gg/7.jpg'
//   }
// ];

// const FacilitiesContent = [
//   {
//     id: 1,
//     title: 'Pre-Primary Education',
//     description: 'Nurturing young minds with Oxford Print syllabus and local competency activities',
//     image: '/img/11.jpg'
//   },
//   {
//     id: 2,
//     title: 'Primary Education',
//     description: 'Comprehensive primary education following Edexcel curriculum',
//     image: '/img/22.jpeg'
//   },
//   {
//     id: 3,
//     title: 'Secondary Education',
//     description: 'Advanced secondary education with both local and international syllabi',
//     image: '/img/33.jpg'
//   },
//   {
//     id: 4,
//     title: 'Cambridge ESOL',
//     description: 'Official Cambridge Assessment ESOL examination center',
//     image: '/img/44.jpeg'
//   },
// ];

export default function Branch() {
  const { fetch } = useAxios();
  const [loading, setLoading] = useState(false);
  const [branches, setBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState({});
  const [facilitiesContent, setFacilitiesContent] = useState([]);
  const [branch, setBranch] = useState({});
  // const images = [Header, Header2, Header3, Header4, Header];

  const getBranches = async () => {
    try {
      setLoading(true);
      const { data } = await fetch({
        url: "/api/branches",
        method: "GET",
      });
      if (data.success) {
        // console.log(data.data.branches);
        setSelectedBranch(data.data.branches[0]);
        setBranches(data.data.branches);
      } else {
        throw new Error(data.message || "Failed to fetch school info");
      }
    } catch (error) {
      console.error("Error fetching school info:", error);
      toast.error("Failed to fetch school info. Please try again.");
    } finally {
      setLoading(false);
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
        setFacilitiesContent(response.data.data.facilities);
      }

    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }
  }

  const getBranchById = async (id) => {
    try {
      const { data } = await fetch({
        url: "/api/branches/" + id,
        method: "GET",
      });
      if (data.success) {
        console.log(data.data);
        setBranch(data.data);
      } else {
        throw new Error(data.message || "Failed to fetch school info");
      }
    } catch (error) {
      console.error("Error fetching school info:", error);
      toast.error("Failed to fetch school info. Please try again.");
    }
  }

  useEffect(() => {
    getBranches();
    getFacilities();
  }, []);

  useEffect(() => {
    if (selectedBranch.id) {
      getBranchById(selectedBranch.id);
    }
  }, [selectedBranch]);

  if (loading) {
    return (
      <>
        <Nav />
        <div className=" flex justify-center items-center w-full pt-16">
          <Loader2 className="animate-spin mr-3" />
          <p>Loading...</p>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Nav />
      <div className="branch-header">
        <SubHeader title={selectedBranch.title} image={headerImage} />
      </div>

      <div className="container mx-auto py-4">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {branches?.map((branch) => (
            <button
              key={branch.id}
              onClick={() => setSelectedBranch(branch)}
              className={`px-4 py-2 rounded-lg transition-colors ${selectedBranch.id === branch.id
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
                }`}
            >
              {branch.title}
            </button>
          ))}
        </div>
      </div>

      <FilePath text={selectedBranch.title} path={selectedBranch.title} />

      <section className="branch-s1">
        <Title
          title={`About Kingswood British College - ${selectedBranch.title}`}
          description="A Leading English Medium College Since 2017"
          path="branch"
        />
        <div className="container">
          <div className="branch-s1-c">
            <img src={getImageUrl(selectedBranch.imageUrl)} alt={`${selectedBranch.title} campus`} />
            <p className="mt-6">
              {selectedBranch.description}
            </p>
          </div>
        </div>
      </section>

      {branch && (
        <section className="branch-s2">
          <div className="container">
            <div className="branch-s2-content">
              <Gallery images={branch.images} />
            </div>
          </div>
        </section>
      )}
      <div className="branch-s3">
        <div className="container">
          <FacilitiesList facilitiesData={facilitiesContent} />
        </div>
      </div>
      <Footer />
    </>
  );
}