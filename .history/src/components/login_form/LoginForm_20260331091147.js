import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./LoginForm.css";

const LoginForm = () => {
  const schema = yup.object({
    username: yup
      .string()
      .required("Please enter your user name!")
      .min(8, "Must be at least 8 characters!")
      .max(16, "Must be at most 16 characters!"),
    password: yup.string().required(),
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
      <div className="login-form-wrapper">
        <label htmlFor="username">User name</label>
        <input
          type="text"
          id="username"
          className="login-form-input"
          placeholder="Enter your first name"
          {...register("username")}
        />
        {errors.username && (
          <div className="login-form-error">{errors.username.message}</div>
        )}
      </div>
      <div className="login-form-wrapper">
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          id="lastName"
          className="login-form-input"
          placeholder="Enter your last name"
          {...register("lastName")}
        />
        {errors.lastName && (
          <div className="login-form-error">{errors.lastName.message}</div>
        )}
      </div>
      <div className="login-form-wrapper">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          id="email"
          className="login-form-input"
          placeholder="Enter your email address"
          {...register("email")}
        />
        {errors.email && (
          <div className="login-form-error">{errors.email.message}</div>
        )}
      </div>
      <div className="login-form-wrapper">
        <label htmlFor="gender">Gender</label>
        <input
          type="radio"
          name="gender"
          id="gender"
          value="male"
          className="login-form radio"
          {...register("gender")}
        />
        Male
        <input
          type="radio"
          name="gender"
          id="gender"
          value="female"
          className="login-form-radio"
          {...register("gender")}
        />
        Female
        {errors.gender && (
          <div className="login-form-error">{errors.gender.message}</div>
        )}
      </div>
      <button
        type="submit"
        className="login-form-button"
        style={{ pointerEvents: isValid ? "" : "none" }}
      >
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
