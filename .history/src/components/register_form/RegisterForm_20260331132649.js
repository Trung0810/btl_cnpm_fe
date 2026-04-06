import React from "react";

const RegisterForm = () => {
  return (
    <form className="register-form">
      <h2 className="register-title">Register Form</h2>
      <div className="register-account">
        <h3>Account</h3>
        <div className="register-form-wrapper">
          <label htmlFor="username"></label>
          <input type="text" name="username" id="username" />
        </div>
        <div className="register-form-wrapper">
          <label htmlFor="password"></label>
          <input type="text" name="password" id="password" />
        </div>
      </div>
      <div className="register-infor">
        <h3>Customer Information</h3>
        <div className="register-form-wrapper">
          <label htmlFor="fullname"></label>
          <input type="text" name="fullname" id="fullname" />
        </div>
        <div className="register-form-wrapper">
          <label htmlFor="gender"></label>
          <select name="gender" id="gender">
            <option value=""></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="register-form-wrapper">
          <label htmlFor="date"></label>
          <input type="date" name="date" id="date" />
        </div>
        <div className="register-form-wrapper">
          <label htmlFor="address"></label>
          <input type="text" name="address" id="address" />
        </div>
        <div className="register-form-wrapper">
          <label htmlFor="phone"></label>
          <input type="phone" name="phone" id="phone" />
        </div>
        <div className="register-form-wrapper">
          <label htmlFor="email"></label>
          <input type="email" name="email" id="email" />
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
