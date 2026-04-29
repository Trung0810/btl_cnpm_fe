import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import "./AdminUpdateCustomer.css";
import axios from "axios";

const AdminUpdateCustomer = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [status, setStatus] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const navigate = useNavigate();

  const schema = yup.object({
    fullname: yup.string().required("Please enter customer name!"),
    address: yup.string().required("Please select customer address!"),
    phone: yup.string().required("Please enter customer phone number!"),
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
          fullname: (data && data.fullname) || "",
          address: (data && data.address) || "",
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
        `http://localhost:8888/v1/api/shoes/${id}`,
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
    navigate("/admin/product");
  };

  return (
    <div className="admin-update-customer">
      <h2 className="admin-update-title">Update Customer</h2>
      <form>
        <div className="admin-update-wrapper">
          <label htmlFor="id">Customer ID:</label>
          <input type="text" name="id" id="id" readOnly />
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
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            id="address"
            {...register("fullname")}
          />
          {errors.fullname && (
            <div className="error">{errors.fullname.message}</div>
          )}
        </div>
        <div className="admin-update-wrapper">
          <label htmlFor="phone">Phone Number:</label>
          <input name="phone" id="phone"></input>
        </div>
        <div className="admin-update-wrapper">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="admin-update-wrapper">
          <button>Update</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AdminUpdateCustomer;
