import React, { Fragment } from "react";
import LoginForm from "../login_form/LoginForm";
import Back from "../back/Back";

const LoginPage = () => {
  return (
    <Fragment>
      <Back page=""></Back>
      <LoginForm></LoginForm>
    </Fragment>
  );
};

export default LoginPage;
