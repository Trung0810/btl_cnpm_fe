import React, { Fragment } from "react";
import LoginForm from "../login_form/LoginForm";
import BackHome from "../back/BackHome";

const LoginPage = () => {
  return (
    <Fragment>
      <BackHome></BackHome>
      <LoginForm></LoginForm>
    </Fragment>
  );
};

export default LoginPage;
