import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const LoginForm = () => {
  const emailRegex = /^[a-z0-9A-Z_]+@gmail.com$/;
  const schema = yup.object({
    firstName: yup
      .string()
      .required("Please enter your first name!")
      .min(8, "Must be at least 8 characters!")
      .max(16, "Must be at most 16 characters!"),
    lastName: yup
      .string()
      .required("Please enter your last name!")
      .min(5, "Must be at least 5 characters!")
      .max(10, "Must be at most 10 characters!"),
    email: yup
      .string()
      .required("Please enter your email!")
      .matches(emailRegex, "Invalid email"),
    gender: yup.string().required("Please select your gender!"),
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
    <form className="login-form">
      <h2 className="login-form-title">Login Form</h2>
      <div>
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          id="firstName"
          className="login-form-input"
          placeholder="Enter your first name"
          {...register("firstName")}
        />
        {errors.firstName && (
          <div className="signup-error">{errors.firstName.message}</div>
        )}
      </div>
      <div>
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
      <div>
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
      <div>
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
