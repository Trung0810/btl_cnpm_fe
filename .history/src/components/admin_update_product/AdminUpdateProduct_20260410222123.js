import React, { useState } from "react";
import "./AdminUpdateProduct.css";
import { useParams } from "react-router-dom";

const AdminUpdateProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  return (
    <div className="admin-update-product">
      <h2 className="admin-update-title">Update Product</h2>
      <form>
        <div className="admin-update-wrapper">
          <label htmlFor="id">Product ID:</label>
          <input type="text" name="id" id="id" />
        </div>
        <div className="admin-update-wrapper">
          <label htmlFor="name">Product Name:</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="admin-update-wrapper">
          <label htmlFor="brand">Brand</label>
          <select name="brand" id="brand">
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
