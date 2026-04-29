import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import "./AdminUpdateCustomer.css";
import axios from "axios";
import NoficationPopup from "../popup/NoficationPopup";
import standardization from "../helper_function/Standardization";
import { formatDate } from "../helper_function/ConvertTime";

const AdminUpdateCustomer = () => {
  const phoneRegex =
    /^(0|84)(2(0[3-9]|1[0-689]|2[0-25-9]|3[2-9]|4[0-9]|5[124-9]|6[0369]|7[0-7]|8[0-9]|9[012346789])|3[2-9]|5[25689]|7[06-9]|8[0-9]|9[012346789])([0-9]{7})$/gm;
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [status, setStatus] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const navigate = useNavigate();

  const schema = yup.object({
    fullname: yup.string().required("Please enter customer name!"),
    gender: yup.string().required("Please select customer gender!"),
    birthday: yup
      .date()
      .typeError("Invalid date!")
      .required("Please select your birthday!")
      .max(
        new Date(new Date().setFullYear(new Date().getFullYear() - 16)),
        "You must be at least 16!",
      )
      .min(
        new Date(new Date().setFullYear(new Date().getFullYear() - 80)),
        "Invalid date!",
      ),
    address: yup.string().required("Please enter customer address!"),
    phone: yup
      .string()
      .required("Please enter customer phone number!")
      .matches(phoneRegex, "Invalid phone number!"),
    email: yup.string().required("Please enter customer email!"),
  });

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:8888/v1/api/customers/${id}`,
        );
        console.log("🚀 ~ fetchData ~ response:", response);

        const data = response.data.data;
        reset({
          id: (data && data._id) || "",
          fullname: standardization(data && data.fullname) || "",
          gender: (data && data.gender) || "",
          birthday: formatDate(data && data.birthday) || "",
          address: standardization(data && data.address) || "",
          phone: (data && data.phone) || "",
          email: (data && data.email) || "",
        });
      } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error.response.data.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const onSubmit = async (data) => {
    const token = localStorage.getItem("accessToken");
    try {
      setLoading(true);
      const response = await axios.put(
        `http://localhost:8888/v1/api/customers/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log("🚀 ~ handleSubmit ~ response:", response);
      setStatus("success");
      setTitle(response.data.message);
      setDescription("");
      setShowPopup(true);
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error.response.data.message);
      setStatus("failed");
      setTitle("Update shoes failed!");
      setDescription(error.response.data.message);
      setShowPopup(true);
    } finally {
      setLoading(false);
    }
  };

  const handleShow = () => {
    setShowPopup(false);
    navigate("/admin/customer");
  };

  return (
    <div className="admin-update-customer">
      <h2 className="admin-update-title">Update Customer</h2>
      {loading && <div className="loading"></div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="admin-update-wrapper">
          <label htmlFor="id">Customer ID:</label>
          <input type="text" name="id" id="id" {...register("id")} readOnly />
        </div>
        <div className="admin-update-wrapper">
          <label htmlFor="fullname">Customer Name:</label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            {...register("fullname")}
          />
          {errors.fullname && (
            <div className="error">{errors.fullname.message}</div>
          )}
        </div>
        <div className="admin-update-wrapper">
          <label htmlFor="gender">Gender:</label>
          <select name="gender" id="gender" {...register("gender")}>
            <option value=""></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && (
            <div className="error">{errors.gender.message}</div>
          )}
        </div>
        <div className="admin-update-wrapper">
          <label htmlFor="birthday">Birthday</label>
          <input
            type="date"
            name="birthday"
            id="birthday"
            {...register("birthday")}
          />
          {errors.birthday && (
            <div className="error">{errors.birthday.message}</div>
          )}
        </div>
        <div className="admin-update-wrapper">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            id="address"
            {...register("address")}
          />
          {errors.address && (
            <div className="error">{errors.address.message}</div>
          )}
        </div>
        <div className="admin-update-wrapper">
          <label htmlFor="phone">Phone Number:</label>
          <input name="phone" id="phone" {...register("phone")} />
          {errors.phone && <div className="error">{errors.phone.message}</div>}
        </div>
        <div className="admin-update-wrapper">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" {...register("email")} />
          {errors.email && <div className="error">{errors.email.message}</div>}
        </div>
        <div className="admin-update-wrapper">
          <button style={{ pointerEvents: isValid ? "" : "none" }}>
            Update
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/admin/customer");
            }}
          >
            Cancel
          </button>
        </div>
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

export default AdminUpdateCustomer;
