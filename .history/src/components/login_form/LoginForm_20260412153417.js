import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import NoficationPopup from "../popup/NoficationPopup";
import { useNavigate } from "react-router-dom";
import { InforContext } from "../infor_provider/InforProvider";
import "./LoginForm.css";

const LoginForm = () => {
  const { customer, setCustomer, setAdmin } = useContext(InforContext);

  const [showPassword, setShowPassword] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [status, setStatus] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const navigate = useNavigate();

  const schema = yup.object({
    username: yup.string().required("Please enter your username!"),
    password: yup.string().required("Please enter your password!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const submit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8888/v1/api/login",
        data,
      );
      console.log("🚀 ~ submit ~ response:", response);
      const payload = response.data.data.payload;

      const { role } = payload;
      if (role === "customer") {
        setCustomer(payload);
      } else {
        setAdmin(payload);
      }
      localStorage.setItem("accessToken", response.data.data.accessToken);

      setStatus("success");
      setTitle(response.data.message);
      setDescription("Happy shopping!");
      setShowPopup(true);
    } catch (e) {
      console.log("🚀 ~ submit ~ e:", e);
      setStatus("failed");
      setTitle("Login failed!");
      setDescription(e.response.data.message);
      setShowPopup(true);
    }
  };

  const handleShow = () => {
    setShowPopup(false);
    if (status === "success") {
      if (customer) {
        navigate("/", { replace: true });
      } else {
        navigate("/admin", { replace: true });
      }
    }
  };

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit(submit)}>
        <h2 className="login-form-title">Login Form</h2>
        <h3 className="login-form-description">
          Welcome back, please login to your account!
        </h3>
        <div className="login-form-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" {...register("username")} />
          {errors.username && (
            <div className="login-form-error">{errors.username.message}</div>
          )}
        </div>
        <div className="login-form-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            {...register("password")}
          />
          <i
            className={showPassword ? "fa fa-eye-slash" : "fa fa-eye"}
            onClick={() => {
              setShowPassword((prev) => !prev);
            }}
          ></i>
          {errors.password && (
            <div className="login-form-error">{errors.password.message}</div>
          )}
        </div>
        <div className="login-form-option">
          <p>
            Don't have an account?{" "}
            <b
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </b>
          </p>
        </div>
        <button
          className="login-form-button"
          style={{ pointerEvents: isValid ? "" : "none" }}
        >
          Login
        </button>
      </form>
      {showPopup && (
        <NoficationPopup
          status={status}
          title={title}
          description={description}
          handleShow={handleShow}
        ></NoficationPopup>
      )}
    </div>
  );
};

export default LoginForm;
