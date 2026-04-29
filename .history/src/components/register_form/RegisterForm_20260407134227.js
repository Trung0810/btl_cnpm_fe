import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import "./RegisterForm.css";
import NoficationPopup from "../popup/NoficationPopup";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [status, setStatus] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [show, setShow] = useState(false);
  const nevigate = useNavigate();

  const emailRegex = /^[a-z0-9A-Z_]+@gmail\.com$/;
  const phoneRegex = /^0[0-9]{9}$/;

  const schema = yup.object({
    username: yup
      .string()
      .required("Please enter your username!")
      .min(8, "Must be at least 8 characters!")
      .max(12, "Must be at most 12 characters!"),
    password: yup.string().required("Please enter your password!"),
    fullname: yup.string().required("Please enter your fullname!"),
    birthday: yup
      .date()
      .required("Please select your birthday!")
      .max(
        new Date(new Date().setFullYear(new Date().getFullYear() - 16)),
        "You must be at least 16",
      ),
    gender: yup.string().required("Please select your gender!"),
    email: yup
      .string()
      .required("Please enter your email!")
      .matches(emailRegex, "Invalid email address!"),
    phone: yup
      .string()
      .required("Please enter your phone number!")
      .matches(phoneRegex, "Invalid phone number!"),
    address: yup.string().required("Please enter your address!"),
    agree: yup
      .boolean()
      .oneOf([true], "Please agree with our terms and policy!"),
  });

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:8888/v1/api/customers",
        data,
      );
      console.log("🚀 ~ onSubmit ~ res:", res);
      setStatus("success");
      setTitle("Create account successfully!");
      setDesc("Welcome to shoes store!");
      setShow(true);
    } catch (e) {
      console.log("🚀 ~ onSubmit ~ e:", e.message);
    }
  };

  const handleShow = () => {
    setShow(false);
    nevigate("/login");
  };

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit(onSubmit)}>
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
              onKeyDown={(e) => e.preventDefault()}
              onPaste={(e) => e.preventDefault()}
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
              {...register("email")}
            />
            {errors.email && (
              <div className="register-error">{errors.email.message}</div>
            )}
          </div>
          <div className="register-wrapper">
            <label htmlFor="phone">Phone number</label>
            <input
              type="phone"
              name="phone"
              id="phone"
              {...register("phone")}
            />
            {errors.phone && (
              <div className="register-error">{errors.phone.message}</div>
            )}
          </div>
          <div className="register-wrapper">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              {...register("address")}
            />
            {errors.address && (
              <div className="register-error">{errors.address.message}</div>
            )}
          </div>
        </div>
        <div className="register-agree">
          <input
            type="checkbox"
            name="agree"
            id="agree"
            style={{ cursor: "pointer" }}
            {...register("agree")}
          />
          <label htmlFor="agree">I agree to the terms and policy.</label>
        </div>
        {errors.agree && (
          <div className="register-error" style={{ marginTop: "-20px" }}>
            {errors.agree.message}
          </div>
        )}
        <button
          className="register-button"
          style={{ pointerEvents: isValid ? "" : "none" }}
        >
          Register
        </button>
      </form>
      {show && (
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

export default RegisterForm;
