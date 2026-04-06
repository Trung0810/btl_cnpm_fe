import React from "react";

const AdminProducts = () => {
  return (
    <div className="admin-product">
      <div className="admin-product-box">
        <h2 className="admin-product-title">Products Management</h2>
        <button className="admin-product-add">Add Product</button>
        <table className="admin-product-table">
          <tr>
            <td>Product ID</td>
            <td>Product Name</td>
            <td>Product Brand</td>
            <td>Product Image</td>
            <td>Product Description</td>
            <td>Product Cost</td>
            <td>Action</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default AdminProducts;
