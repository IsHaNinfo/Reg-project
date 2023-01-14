import React from "react";
import classes from "./Regmain.module.css";
import Shape from "../shape/Shape";
import Form from "../form/Form";

const Login = (props) => {
  return (
    <div className={classes.main}>
      {props.children}
      <Shape />
      <Form />
    </div>
  );
};

export default Login;
