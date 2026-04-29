import React from "react";
import "./AdminAddProduct.css";

const AdminAddProduct = () => {
  return (
    <div className="admin-add-product">
      <h2 className="admin-add-title">Add New Product</h2>
      <form>
        <div className="admin-add-wrapper">
          <label htmlFor="id">Product ID:</label>
          <input type="text" name="id" id="id" />
        </div>
        <div className="admin-add-wrapper">
          <label htmlFor="name">Product Name:</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="admin-add-wrapper">
          <label htmlFor="brand">Brand</label>
          <select name="brand" id="brand">
            <option value=""></option>
            <option value="Nike">Nike</option>
            <option value="Adidas">Adidas</option>
            <option value="Bitis">Bitis</option>
          </select>
        </div>
        <div className="admin-add-wrapper">
          <label htmlFor="image">Image (URL):</label>
          <input type="text" name="image" id="image" />
        </div>
        <div className="admin-add-wrapper">
          <label htmlFor="">Feature:</label>
          <input type="checkbox" name="feature" id="feature" />
          <input type="checkbox" name="feature" id="feature" />
          <input type="checkbox" name="feature" id="feature" />
        </div>
        <div className="admin-add-wrapper">
          <label htmlFor="desc">Description:</label>
          <textarea name="desc" id="desc"></textarea>
        </div>
        <div className="admin-add-wrapper">
          <label htmlFor="cost">Cost:</label>
          <input type="number" name="cost" id="cost" />
        </div>
        <div className="admin-add-wrapper">
          <button>Add</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AdminAddProduct;
