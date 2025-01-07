import React from "react";
import { Link } from "react-router-dom";
import './FacilitiesItem.css'
import { getImageUrl } from "../../utils/getImageUrl";

export default function FacilitiesItem(props) {
  return (
    <>
      {props.facilitiesData.map((facility, index) => (
        <div className="item" key={index}>
          <div className="item-content">
            <Link to={`../facilities-view/${facility.id}`} className="facilities-item">
              {/* <Link to={`#`} className="facilities-item"> */}
              <div className="facilities-item-bg">
                <img src={getImageUrl(facility.images[0].url)} alt={facility.title} />
              </div>
              <div className="facilities-item-c">
                <h1>{facility.title}</h1>
                <p>{facility.description}</p>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
