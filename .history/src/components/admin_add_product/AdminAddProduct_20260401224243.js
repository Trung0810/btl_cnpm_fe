import React from "react";

const AdminAddProduct = () => {
  return (
    <div className="admin-add-product">
      <h2 className="admin-add-title">Add New Product</h2>
      <form>
        <div className="admin-add-wrapper">
          <label htmlFor="product-id">Product ID:</label>
          <input type="text" name="product-id" id="product-id" />
        </div>
        <div className="admin-add-wrapper">
          <label htmlFor="product-id">Product ID:</label>
          <input type="text" name="product-id" id="product-id" />
        </div>
        <div className="register-form-wrapper">
          <label htmlFor="gender">Gender</label>
          <select name="gender" id="gender">
            <option value=""></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default AdminAddProduct;
