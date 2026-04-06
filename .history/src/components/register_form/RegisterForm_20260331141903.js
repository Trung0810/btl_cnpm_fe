import React from "react";
import "./RegisterForm.css";

const RegisterForm = () => {
  return (
    <form className="register-form">
      <h2 className="register-title">Register Form</h2>
      <div className="register-account">
        <h3>Account Information</h3>
        <div className="register-form-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div className="register-form-wrapper">
          <label htmlFor="password">Password</label>
          <input type="text" name="password" id="password" />
        </div>
      </div>
      <div className="register-infor">
        <h3>Customer Information</h3>
        <div className="register-form-wrapper">
          <label htmlFor="fullname">Fullname</label>
          <input type="text" name="fullname" id="fullname" />
        </div>
        <div className="register-form-wrapper">
          <label htmlFor="gender">Gender</label>
          <select name="gender" id="gender">
            <option value=""></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="register-form-wrapper">
          <label htmlFor="date">Birthday</label>
          <input type="date" name="date" id="date" />
        </div>
        <div className="register-form-wrapper">
          <label htmlFor="email">Email address</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="register-form-wrapper">
          <label htmlFor="phone">Phone number</label>
          <input type="phone" name="phone" id="phone" />
        </div>
        <div className="register-form-wrapper">
          <label htmlFor="address">Address</label>
          <input type="text" name="address" id="address" />
        </div>
      </div>
      <div className="register-form-wrapper">
        <label htmlFor="agree">I agree to the terms and policy.</label>
        <input type="checkbox" name="agree" id="agree" />
      </div>
      <button className="register-button">Register</button>
    </form>
  );
};

export default RegisterForm;
