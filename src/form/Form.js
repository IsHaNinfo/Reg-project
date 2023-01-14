import React from "react";
import classes from "./Form.module.css";
import InputBox from "./InputBox";
import "bootstrap/dist/css/bootstrap.min.css";
const Form = (props) => {
  return (
    <div className={classes.authformcontainer}>
      {props.children}
      <div className={classes.heading}>
        <h1>Create your Account</h1>
      </div>

      <InputBox />
    </div>
  );
};

export default Form;
