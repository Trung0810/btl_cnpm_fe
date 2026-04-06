import React, { Fragment } from "react";
import LoginForm from "../login_form/LoginForm";

const LoginPage = () => {
  return (
    <Fragment>
      <button
        style={{
          position: "absolute",
          top: "20px",
          left: "40px",
        }}
      >
        <i className="fa fa arrow-left" style={{ color: "#fff" }}></i> Back to
        Homepage
      </button>
      <LoginForm></LoginForm>
    </Fragment>
  );
};

export default LoginPage;
