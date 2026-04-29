import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NoficationPopup from "../popup/NoficationPopup";
import "./AdminAddProduct.css";

const AdminAddProduct = () => {
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [status, setStatus] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const navigate = useNavigate();

  const schema = yup.object({
    name: yup.string().required("Please enter product name!"),
    brand: yup.string().required("Please select product brand!"),
    image: yup.string().required("Please enter product image url!"),
    type: yup.string().required("Please select product type!"),
    category: yup.string().required("Please select product category!"),
    description: yup.string().required("Please enter product description!"),
    price: yup
      .number()
      .typeError("Price must be a number!")
      .required("Please enter product price!")
      .min(0, "Invalid price!"),
  });

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const token = localStorage.getItem("accessToken");
    try {
      const response = await axios.post(
        "http://localhost:8888/v1/api/shoes",
        data,
        {
          header: {
            Authoriaztion: `Bearer ${token}`,
          },
        },
      );
      console.log("🚀 ~ onSubmit ~ response:", response);
      setStatus("success");
      setTitle(response.data.message);
      setDescription("");
      setShowPopup(true);
    } catch (error) {
      console.log("🚀 ~ onSubmit ~ error:", error.response.data.message);
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
    <div className="admin-add-product">
      <h2 className="admin-add-title">Add New Product</h2>
      {loading && <div className="loading"></div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="admin-add-wrapper">
          <label htmlFor="name">Product Name:</label>
          <input type="text" name="name" id="name" {...register("name")} />
          {errors.name && <div className="error">{errors.name.message}</div>}
        </div>
        <div className="admin-add-wrapper">
          <label htmlFor="brand">Brand:</label>
          <select name="brand" id="brand" {...register("brand")}>
            <option value=""></option>
            <option value="Nike">Nike</option>
            <option value="Adidas">Adidas</option>
            <option value="Puma">Puma</option>
            <option value="Gucci">Gucci</option>
          </select>
          {errors.brand && <div className="error">{errors.brand.message}</div>}
        </div>
        <div className="admin-add-wrapper">
          <label htmlFor="image">Image (URL):</label>
          <input type="text" name="image" id="image" {...register("image")} />
          {errors.image && <div className="error">{errors.image.message}</div>}
        </div>
        <div className="admin-add-wrapper">
          <label htmlFor="type">Type:</label>
          <select name="type" id="type" {...register("type")}>
            <option value=""></option>
            <option value="men">Men shoes</option>
            <option value="women">Woman shoes</option>
            <option value="unisex">Unisex</option>
          </select>
          {errors.type && <div className="error">{errors.type.message}</div>}
        </div>
        <div className="admin-add-wrapper">
          <label htmlFor="category">Category:</label>
          <select name="category" id="category" {...register("category")}>
            <option value=""></option>
            <option value="boots">Boots</option>
            <option value="running">Running shoes</option>
            <option value="sport">Sport shoes</option>
            <option value="sandal">Sandal</option>
          </select>
          {errors.category && (
            <div className="error">{errors.category.message}</div>
          )}
        </div>
        <div className="admin-add-wrapper">
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            {...register("description")}
          ></textarea>
          {errors.description && (
            <div className="error">{errors.description.message}</div>
          )}
        </div>
        <div className="admin-add-wrapper">
          <label htmlFor="price">Price:</label>
          <input type="number" name="price" id="price" {...register("price")} />
          {errors.price && <div className="error">{errors.price.message}</div>}
        </div>
        <div className="admin-add-wrapper">
          <button style={{ pointerEvents: isValid ? "" : "none" }}>Add</button>
          <button
            onClick={(event) => {
              event.preventDefault();
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
          description={description}
          handleShow={handleShow}
        ></NoficationPopup>
      )}
    </div>
  );
};

export default AdminAddProduct;
