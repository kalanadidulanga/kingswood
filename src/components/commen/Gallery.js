import React from "react";
import Masonry from "react-masonry-css";
import './Gallery.css'

export default function Gallery(props) {
  return (
    <>
      <Masonry
        breakpointCols={{
          default: 4,
          1100: 3,
          700: 2,
          500: 1,
        }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {props.images.map((src, index) => (
          <div key={index} className="image-container">
            <img src={src} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Masonry>
    </>
  );
}
