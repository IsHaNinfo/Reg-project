import { useState } from "react";
import "./inputBox.css";

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
            <input type="email" className="form-control" placeholder="email" />
          </div>
          <div className="form-box">
            <label htmlFor="FirstName"> firstname</label>
            <input
              type="text"
              className="form-control"
              placeholder="firstname"
            />
          </div>
          <div className="form-box">
            <label htmlFor="LastName">lastname</label>
            <input
              type="text"
              className="form-control"
              placeholder="lastname"
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
              placeholder="Confirm password"
            />
          </div>
          <div className="form-box">
            <label htmlFor="Company key">Company Key</label>
            <input
              type="text"
              className="form-control"
              placeholder="companykey"
            />
          </div>
          <div className="form-box">
            <label htmlFor="Contact number">Contact number</label>
            <input
              type="phone"
              className="form-control"
              placeholder="contact_number"
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
      </form>
    </div>
  );
};

export default InputBox;

//
