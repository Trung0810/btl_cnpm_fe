import React, { useEffect, useState } from "react";
import "./AdminUpdateProduct.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const AdminUpdateProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  console.log(data);

  return (
    <div className="admin-update-product">
      <h2 className="admin-update-title">Update Product</h2>
      {loading && <div className="loading"></div>}
      <form>
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
    </div>
  );
};

export default AdminUpdateProduct;
