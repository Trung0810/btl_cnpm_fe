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
    name: yup.string().required("Please enter product name!"),
    brand: yup.string().required("Please select product brand!"),
    image: yup.string().required("Please enter product image url!"),
    description: yup.string().required("Please enter product description!"),
    price: yup
      .number()
      .required("Please enter product price!")
      .min(0, "Invalid price!"),
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
            defaultValue={(data && data._id) || ""}
            readOnly
          />
        </div>
        <div className="admin-update-wrapper">
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={(data && data.name) || ""}
            onChange={handleChange}
            {...register("name")}
          />
          {errors.name && <div className="error">{errors.name.message}</div>}
        </div>
        <div className="admin-update-wrapper">
          <label htmlFor="brand">Brand</label>
          <select
            name="brand"
            id="brand"
            defaultValue={(data && data.brand) || ""}
            onChange={handleChange}
            {...register("brand")}
          >
            <option value=""></option>
            <option value="Nike">Nike</option>
            <option value="Adidas">Adidas</option>
            <option value="Bitis">Bitis</option>
          </select>
          {errors.brand && <div className="error">{errors.brand.message}</div>}
        </div>
        <div className="admin-update-wrapper">
          <label htmlFor="image">Image (URL):</label>
          <input
            type="text"
            name="image"
            id="image"
            defaultValue={(data && data.image) || ""}
            onChange={handleChange}
            {...register("image")}
          />
          {errors.image && <div className="error">{errors.image.message}</div>}
        </div>
        <div className="admin-update-wrapper">
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            defaultValue={(data && data.description) || ""}
            onChange={handleChange}
            {...register("description")}
          ></textarea>
          {errors.description && (
            <div className="error">{errors.description.message}</div>
          )}
        </div>
        <div className="admin-update-wrapper">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            name="price"
            id="price"
            defaultValue={(data && data.price) || ""}
            onChange={handleChange}
            {...register("price")}
          />
          {errors.price && <div className="error">{errors.price.message}</div>}
        </div>
        <div className="admin-update-wrapper">
          <button style={{ pointerEvents: isValid ? "" : "none" }}>
            Update
          </button>
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
