import React from "react";
import { Link } from "react-router-dom";
import './FacilitiesItem.css'

export default function FacilitiesItem(props) {
  return (
    <>
      {props.facilitiesData.map((facility, index) => (
        <div className="item" key={index}>
          <div className="item-content">
            <Link to={`../facilities-view/${facility.id}`} className="facilities-item">
              <div className="facilities-item-bg">
                <img src={facility.image} alt={facility.title} />
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
