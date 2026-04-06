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
      <div className="register-infor"></div>
    </form>
  );
};

export default RegisterForm;
