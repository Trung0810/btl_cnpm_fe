import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import NoficationPopup from "../popup/NoficationPopup";
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

  const handleSubmit = async (event) => {
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
      <form onSubmit={handleSubmit}>
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
