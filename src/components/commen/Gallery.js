import React from "react";
import Masonry from "react-masonry-css";
import './Gallery.css'
import { getImageUrl } from "../../utils/getImageUrl";

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
        {props.images?.map((img, index) => (
          <div key={index} className="image-container">
            <img src={getImageUrl(img.url)} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Masonry>
    </>
  );
}
