import React, { useEffect, useState } from "react";
import "./AdminUpdateProduct.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const AdminUpdateProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

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

  return (
    <div className="admin-update-product">
      <h2 className="admin-update-title">Update Product</h2>
      <form>
        <div className="admin-update-wrapper">
          <label htmlFor="id">Product ID:</label>
          <input type="text" name="id" id="id" value={data && data._id} />
        </div>
        <div className="admin-update-wrapper">
          <label htmlFor="name">Product Name:</label>
          <input type="text" name="name" id="name" value={data && data.name} />
        </div>
        <div className="admin-update-wrapper">
          <label htmlFor="brand">Brand</label>
          <select name="brand" id="brand" value={data && data._id}>
            <option value=""></option>
            <option value="Nike">Nike</option>
            <option value="Adidas">Adidas</option>
            <option value="Bitis">Bitis</option>
          </select>
        </div>
        <div className="admin-update-wrapper">
          <label htmlFor="image">Image (URL):</label>
          <input type="text" name="image" id="image" />
        </div>
        <div className="admin-update-wrapper">
          <label htmlFor="desc">Description:</label>
          <textarea name="desc" id="desc"></textarea>
        </div>
        <div className="admin-update-wrapper">
          <label htmlFor="cost">Cost:</label>
          <input type="number" name="cost" id="cost" />
        </div>
        <div className="admin-update-wrapper">
          <button>Update</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AdminUpdateProduct;
