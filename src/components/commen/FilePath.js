import React from "react";
import './FilePath.css'

export default function FilePath(props) {
  return (
    <>
      <div className="file-path">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>/</li>
          <li>{props.text}</li>
        </ul>
      </div>
    </>
  );
}
