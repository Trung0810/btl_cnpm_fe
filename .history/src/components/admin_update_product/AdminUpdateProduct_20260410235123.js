import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import NoficationPopup from "../popup/NoficationPopup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./AdminUpdateProduct.css";

const AdminUpdateProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [status, setStatus] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const navigate = useNavigate();

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:8888/v1/api/shoes/${id}`,
        );
        console.log("🚀 ~ fetchData ~ response:", response);

        setData(response.data.data);
      } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error.data.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  console.log(data);

  const onSubmit = async (event) => {
    event.preventDefault();
    const { name, brand, image, description, price } = event.target.value;

    const data = { name, brand, image, description, price };
    try {
      const response = axios.post(
        `http://localhost:8888/v1/api/shoes/${id}`,
        data,
      );
      console.log("🚀 ~ handleSubmit ~ response:", response);
      setStatus("success");
      setTitle(response.data.message);
      setDesc("");
      setShowPopup(true);
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
      setStatus("failed");
      setTitle("Update shoes failed!");
      setDesc(error.response.data.message);
      setShowPopup(true);
    }
  };

  const handleShow = () => {
    setShowPopup(false);
    document.body.style.overflow = "auto";
    navigate("/admin/product");
  };

  return (
    <div className="admin-update-product">
      <h2 className="admin-update-title">Update Product</h2>
      {loading && <div className="loading"></div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="admin-update-wrapper">
          <label htmlFor="id">Product ID:</label>
          <input
            type="text"
            name="id"
            id="id"
            value={(data && data._id) || ""}
            readOnly
          />
        </div>
        <div className="admin-update-wrapper">
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={(data && data.name) || ""}
            onChange={handleChange}
          />
        </div>
        <div className="admin-update-wrapper">
          <label htmlFor="brand">Brand</label>
          <select
            name="brand"
            id="brand"
            value={(data && data.brand) || ""}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="Nike">Nike</option>
            <option value="Adidas">Adidas</option>
            <option value="Bitis">Bitis</option>
          </select>
        </div>
        <div className="admin-update-wrapper">
          <label htmlFor="image">Image (URL):</label>
          <input
            type="text"
            name="image"
            id="image"
            value={(data && data.image) || ""}
            onChange={handleChange}
          />
        </div>
        <div className="admin-update-wrapper">
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            value={(data && data.description) || ""}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="admin-update-wrapper">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            name="price"
            id="price"
            value={(data && data.price) || ""}
            onChange={handleChange}
          />
        </div>
        <div className="admin-update-wrapper">
          <button>Update</button>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/admin/product");
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
          desc={desc}
          handleShow={handleShow}
        ></NoficationPopup>
      )}
    </div>
  );
};

export default AdminUpdateProduct;
