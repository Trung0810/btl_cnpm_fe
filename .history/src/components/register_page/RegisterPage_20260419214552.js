import React, { Fragment } from "react";
import RegisterForm from "../register_form/RegisterForm";
import Back from "../back/Back";

const RegisterPage = () => {
  return (
    <Fragment>
      <Back page="home"></Back>
      <RegisterForm></RegisterForm>
    </Fragment>
  );
};

export default RegisterPage;
