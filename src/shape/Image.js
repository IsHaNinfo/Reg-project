import React from "react";
import "./image.css";
import img1 from "../images/sub-image1_home_new2.png";

const Image = () => {
  return (
    <div className="image">
      <img src={img1} alt="" />
    </div>
  );
};

export default Image;
