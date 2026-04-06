import React from "react";

const AdminProduct = () => {
  return (
    <div className="admin-product">
      <h2 className="admin-product-title">Product Management</h2>
      <button className="admin-product-add">Add Product</button>
      <table className="admin-product-table">
        <tr>
          <td>Product ID</td>
          <td>Product Name</td>
          <td>Product Brand</td>
          <td>Product Image</td>
          <td>Product Description</td>
          <td>Product Cost</td>
        </tr>
      </table>
    </div>
  );
};

export default AdminProduct;
