import React from "react";
import classes from "./Sentense.module.css";

const Sentense = (props) => {
  return (
    <div className={classes.Sent}>
      {props.children}
      <h1>Welcome to</h1>
      <h1>Software Project Management System</h1>
      <h1>Lenzz</h1>
    </div>
  );
};

export default Sentense;
