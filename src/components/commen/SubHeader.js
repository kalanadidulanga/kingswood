import React from "react";
import './SubHeader.css'

export default function SubHeader(props) {
  return (
    <>
      <div className="sub-header">
        <div className="container">
          <div className="sub-header-content">
            <h1>{props.title}</h1>
          </div>
        </div>
        <div className="sub-header-bg">
          <img src={props.image} alt="" />
        </div>
      </div>
    </>
  );
}
