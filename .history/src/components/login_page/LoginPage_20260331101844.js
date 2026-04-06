import React, { Fragment } from "react";
import LoginForm from "../login_form/LoginForm";

const LoginPage = () => {
  return (
    <Fragment>
      <button
        style={{
          backgroundColor: "#5C636A",
          color: "#fff",
          position: "absolute",
          top: "20px",
          left: "40px",
        }}
      >
        <i className="fa fa-arrow-left"></i> Homepage
      </button>
      <LoginForm></LoginForm>
    </Fragment>
  );
};

export default LoginPage;
