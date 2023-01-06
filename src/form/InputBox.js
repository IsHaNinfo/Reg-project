import React from "react";
import "./inputBox.css";
import Button from "./Button";

const InputBox = () => {
  return (
    <div className="formInput">
      <form action="#">
        <div className="inputBox">
          <div className="form-box">
            <label htmlFor="username">Name</label>
            <input type="text" className="form-control" placeholder="name" />
          </div>

          <div className="form-box">
            <label htmlFor="Email">Email</label>
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="form-box">
            <label htmlFor="FirstName"> First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="firstname"
            />
          </div>
          <div className="form-box">
            <label htmlFor="LastName">Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
            />
          </div>
          <div className="form-box">
            <label htmlFor="password">password</label>
            <input
              type="password"
              className="form-control"
              placeholder="password"
            />
          </div>

          <div className="form-box">
            <label htmlFor="confirm password">Confirm password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm_password"
            />
          </div>
          <div className="form-box">
            <label htmlFor="Company key">Company Key</label>
            <input
              type="text"
              className="form-control"
              placeholder="Company_key"
            />
          </div>
          <div className="form-box">
            <label htmlFor="Contact number">Contact number</label>
            <input
              type="phone"
              className="form-control"
              placeholder="Contact_number"
            />
          </div>
          <div className="form-box-disc">
            <label htmlFor="Description">Description about you</label>
            <input
              type="text"
              className="form-control"
              placeholder="Description"
            />
          </div>
        </div>
        <Button />
      </form>
    </div>
  );
};

export default InputBox;

//
