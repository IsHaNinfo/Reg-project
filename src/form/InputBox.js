import { useState, useEffect } from "react";
//state change
import classes from "./inputBox.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const InputBox = (props) => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    confirmPassword: "",
    companykey: "",
    contactnumber: "",
  };

  //4 when we write values it neeed to change state
  const [formValues, setFormValues] = useState(initialValues);

  //!add initial values to values(pass)
  //*link with use state change

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    //! arrow function
    //* e= event
    // if onchange work

    const { name, value } = e.target;
    //!
    setFormValues({ ...formValues, [name]: value });

    //?get the all the intial state values
    //
  };

  const handleSubmit = (e) => {
    //!see the all the values
    e.preventDefault();
    //prevented getting refresh
    setFormErrors(validate(formValues));
    //validate the values if errors are errors  are shown
    //out come is erroer if not validation
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    // validate the values
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const password_pattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[a-z])(?=.*[A-Z][a-zA-Z0-9])(?=.*[a-zA-Z0-9]){8,}$/;
    if (!values.username) {
      errors.username = "Username is Required";
    }

    if (!values.email) {
      errors.email = "Email is Required";
    } else if (regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }

    if (!values.password) {
      errors.password = "password is Required";
    } else if (values.password.length < 4) {
      errors.password = "password must be more tha   4 characters";
    } else if (values.password.length > 10) {
      errors.password = "password cannot exceed more than 10 characters";
    } else if (!password_pattern.test(values.password)) {
      errors.password =
        "password must contain at least one uppercase, one lowercase, one number and one special character";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "confirmPassword is Required";
    } else if (
      values.password === "" ||
      values.confirmPassword !== values.password
    ) {
      errors.confirmPassword = "password and confirmPassword must be same";
    }

    if (!values.firstname) {
      errors.firstname = "firstname is Required";
    }

    if (!values.lastname) {
      errors.lastname = "Lastname is Required";
    }

    if (!values.companykey) {
      errors.companykey = "companykey is Required";
    }

    if (!values.contactnumber) {
      errors.contactnumber = "contact number is Required";
    }

    return errors;
    // return errors to error object
  };
  //

  return (
    <div className={classes.formInput}>
      {props.children}
      <form onSubmit={handleSubmit}>
        <div className={classes.inputBox}>
          {props.children}
          <div className={classes.formbox}>
            {props.children}
            <label htmlFor="username">User name</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              value={formValues.username}
              //!bind to the value property input field
              onChange={handleChange}
              className="form-control"
            ></input>
          </div>
          <p>{formErrors.username}</p>

          <div className={classes.formbox}>
            {props.children}
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formValues.email}
              //!bind to the value property input field
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <p>{formErrors.email}</p>

          <div className={classes.formbox}>
            {props.children}
            <label htmlFor="FirstName"> First name</label>
            <input
              type="text"
              name="firstname"
              placeholder="First name"
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <p>{formErrors.firstname}</p>

          <div className={classes.formbox}>
            {props.children}
            <label htmlFor="LastName">Last name</label>
            <input
              type="text"
              placeholder="Last name"
              name="lastname"
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <p>{formErrors.lastname}</p>

          <div className={classes.formbox}>
            {props.children}
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={formValues.password}
              //!bind to the value property input field
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <p>{formErrors.password}</p>
          <div className={classes.formbox}>
            {props.children}
            <label htmlFor="confirm password">Confirm password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              //!bind to the value property input field}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <p>{formErrors.confirmPassword}</p>
          <div className={classes.formbox}>
            {props.children}
            <label htmlFor="Company key">Company key</label>
            <input
              type="text"
              placeholder="Company key"
              name="companykey"
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <p>{formErrors.companykey}</p>

          <div className={classes.formbox}>
            {props.children}
            <label htmlFor="Contact number">Contact number</label>
            <input
              type="phone"
              placeholder="Contact number"
              name="contactnumber"
              onChange={handleChange}
              className="form-control"
            />
            {props.children}
          </div>
          <p>{formErrors.contactnumber}</p>

          <div className={classes.formboxdisc}>
            {props.children}
            <label htmlFor="Description">Description about you</label>
            <input
              type="text"
              placeholder="Description"
              className="form-control"
            />
            {props.children}
          </div>
        </div>
        <div className={classes.formsubmitbtn}>
          <input type="submit" value="Save"></input>
        </div>
      </form>
    </div>
  );
};

export default InputBox;

//
