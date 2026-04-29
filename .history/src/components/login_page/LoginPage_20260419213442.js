import React, { Fragment } from "react";
import LoginForm from "../login_form/LoginForm";
import BackHome from "../back_home/BackHome";

const LoginPage = () => {
  return (
    <Fragment>
      <BackHome></BackHome>
      <LoginForm></LoginForm>
    </Fragment>
  );
};

export default LoginPage;
