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
        Back to Homepage
      </button>
      <LoginForm></LoginForm>
    </Fragment>
  );
};

export default LoginPage;
