import React, { Fragment } from "react";
import RegisterForm from "../register_form/RegisterForm";
import Back from "../back/Back";

const RegisterPage = () => {
  return (
    <Fragment>
      <Back></Back>
      <RegisterForm></RegisterForm>
    </Fragment>
  );
};

export default RegisterPage;
