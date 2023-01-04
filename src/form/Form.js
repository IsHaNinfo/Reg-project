import React, { useState } from "react";
import "./form.css";
import InputBox from "./InputBox";

const Form = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "username",
      errorMessage:
        "User name should be 3-16 characters and shouldn t include any special character !",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3-16}$",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "password",

      errorMessage:
        "password should be 8-20 characters and include at least 1 lett ",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);
  return (
    <div className="auth-form-container">
      <h2 className="loginname">LOGIN</h2>
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <InputBox
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
      </form>
      <div className="cont">
        <button className="log" type="submit">
          LOGIN
        </button>
      </div>

      <div className="sign">
        <h2>YOU ARE NEW?</h2>
        <h3>SIGN UP NOW</h3>
      </div>
    </div>
  );
};

export default Form;
