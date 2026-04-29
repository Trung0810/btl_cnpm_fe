import React, { Fragment } from "react";
import LoginForm from "../login_form/LoginForm";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
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
      <LoginForm></LoginForm>
    </Fragment>
  );
};

export default LoginPage;
