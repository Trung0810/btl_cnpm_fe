import React, { Fragment } from "react";
import RegisterForm from "../register_form/RegisterForm";

const RegisterPage = () => {
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
      <RegisterForm></RegisterForm>
    </Fragment>
  );
};

export default RegisterPage;
