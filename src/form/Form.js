import React from "react";
import "./form.css";
import InputBox from "./InputBox";
import Avatar from "./Avatar";

const Form = () => {
  return (
    <div className="auth-form-container">
      <div className="heading">
        <h1>Create your Account</h1>
      </div>
      <Avatar
        src="https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=740"
        alt="Avatar"
      />
      <InputBox />
    </div>
  );
};

export default Form;
