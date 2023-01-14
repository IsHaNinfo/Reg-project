import React from "react";
import classes from "./Shape.module.css";
import Sentense from "./Sentense";
import Image from "./Image";

const Shape = (props) => {
  return (
    <div className={classes.Shape}>
      {props.children}
      <Image />

      <Sentense />
    </div>
  );
};
//logo
export default Shape;
