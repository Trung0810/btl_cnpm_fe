import React, { Fragment } from "react";
import RegisterForm from "../register_form/RegisterForm";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
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
        onClick={() => {
          navigate("/");
        }}
      >
        <i className="fa fa-arrow-left"></i> Homepage
      </button>
      <RegisterForm></RegisterForm>
    </Fragment>
  );
};

export default RegisterPage;
