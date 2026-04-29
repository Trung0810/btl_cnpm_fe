import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./LoginForm.css";
import axios from "axios";
import NoficationPopup from "../popup/NoficationPopup";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [status, setStatus] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const schema = yup.object({
    username: yup
      .string()
      .required("Please enter your username!")
      .min(8, "Must be at least 8 characters!")
      .max(16, "Must be at most 16 characters!"),
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

      // setStatus("success");
      // setTitle(response.)
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit(submit)}>
        <h2 className="login-form-title">Login Form</h2>
        <h3 className="login-form-desc">
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
            Don't have an account? <a href="#">Register</a>
          </p>
        </div>
        <button
          type="submit"
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
          desc={desc}
          handleShow={handleShow}
        ></NoficationPopup>
      )}
    </div>
  );
};

export default LoginForm;
