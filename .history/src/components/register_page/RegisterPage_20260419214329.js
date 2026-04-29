import React, { Fragment } from "react";
import RegisterForm from "../register_form/RegisterForm";
import BackHome from "../back/BackHome";

const RegisterPage = () => {
  return (
    <Fragment>
      <BackHome></BackHome>
      <RegisterForm></RegisterForm>
    </Fragment>
  );
};

export default RegisterPage;
