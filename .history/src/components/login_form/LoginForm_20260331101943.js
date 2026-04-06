import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./LoginForm.css";

const LoginForm = () => {
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

  const submit = (values) => {
    console.log(values);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit(submit)}>
      <h2 className="login-form-title">Login Form</h2>
      <h3 className="login-form-desc">
        Welcome back, please login to your account!
      </h3>
      <div className="login-form-wrapper">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          className="login-form-input"
          placeholder="Enter your username"
          {...register("username")}
        />
        {errors.username && (
          <div className="login-form-error">{errors.username.message}</div>
        )}
      </div>
      <div className="login-form-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          className="login-form-input"
          placeholder="Enter your password"
          {...register("password")}
        />
        <i className="fa fa-eyes"></i>
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
  );
};

export default LoginForm;
