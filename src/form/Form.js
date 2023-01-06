import React, { useState } from "react";
import "./form.css";
import InputBox from "./InputBox";

const Form = () => {
  return (
    <div className="auth-form-container">
      <div className="heading">
        <h1>Create your Account</h1>
      </div>
      <InputBox />
    </div>
  );
};

export default Form;
