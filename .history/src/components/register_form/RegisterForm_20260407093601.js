import React from "react";
import "./RegisterForm.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const RegisterForm = () => {
  const emailAddressRegex = /^[a-z0-9A-Z_]+@gmail\.com$/;
  const phoneNumberRegex = /^0[0-9]{9}$/;

  const schema = yup.object({
    username: yup
      .string()
      .required("Please enter your username!")
      .min(8, "Must be at least 8 characters!")
      .max(12, "Must be at most 12 characters!"),
    password: yup
      .string()
      .required("Please enter your password!")
      .min(5, "Must be at least 5 characters!")
      .max(10, "Must be at most 10 characters!"),
    fullname: yup.string().required("Please enter your fullname!"),
    birthday: yup.date().required("Please select your birthday!"),
    gender: yup.string().required("Please select your gender!"),
    emailAddress: yup
      .string()
      .required("Please enter your email!")
      .matches(emailAddressRegex, "Invalid email address!"),
    phoneNumber: yup
      .string()
      .required("Please enter your phone number!")
      .matches(phoneNumberRegex, "Invalid phone number!"),
    address: yup.string().required("Please enter your address!"),
  });

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

  return (
    <form className="register-form">
      <h2 className="register-title">Register Form</h2>
      <div className="register-account">
        <h3>Account Information</h3>
        <div className="register-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            {...register("username")}
          />
          {errors.username && (
            <div className="register-error">{errors.username.message}</div>
          )}
        </div>
        <div className="register-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            {...register("password")}
          />
          {errors.password && (
            <div className="register-error">{errors.password.message}</div>
          )}
        </div>
      </div>
      <div className="register-infor">
        <h3>Customer Information</h3>
        <div className="register-wrapper">
          <label htmlFor="fullname">Fullname</label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            {...register("fullname")}
          />
          {errors.fullname && (
            <div className="register-error">{errors.fullname.message}</div>
          )}
        </div>
        <div className="register-wrapper">
          <label htmlFor="birthday">Birthday</label>
          <input
            type="date"
            name="birthday"
            id="birthday"
            {...register("birthday")}
          />
          {errors.birthday && (
            <div className="register-error">{errors.birthday.message}</div>
          )}
        </div>
        <div className="register-wrapper">
          <label htmlFor="gender">Gender</label>
          <select name="gender" id="gender" {...register("gender")}>
            <option value=""></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && (
            <div className="register-error">{errors.gender.message}</div>
          )}
        </div>
        <div className="register-wrapper">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            id="email"
            {...register("fullname")}
          />
          {errors.fullname && (
            <div className="register-error">{errors.fullname.message}</div>
          )}
        </div>
        <div className="register-wrapper">
          <label htmlFor="phone">Phone number</label>
          <input type="phone" name="phone" id="phone" />
        </div>
        <div className="register-wrapper">
          <label htmlFor="address">Address</label>
          <input type="text" name="address" id="address" />
        </div>
      </div>
      <div className="register-agree">
        <input type="checkbox" name="agree" id="agree" />
        <label htmlFor="agree">I agree to the terms and policy.</label>
      </div>
      <button className="register-button">Register</button>
    </form>
  );
};

export default RegisterForm;
