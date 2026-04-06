import React from "react";
import "./AdminProduct.css";

const AdminProduct = () => {
  return (
    <div className="admin-product">
      <div className="admin-product-wrapper">
        <h2 className="admin-product-title">Product Management</h2>
        <button className="admin-product-add">Add Product</button>
        <table className="admin-product-table">
          <tr>
            <th className="admin-product-id">Product ID</th>
            <th className="admin-product-name">Product Name</th>
            <th className="admin-product-brand">Product Brand</th>
            <th className="admin-product-image">Product Image</th>
            <th className="admin-product-desc">Product Description</th>
            <th className="admin-product-cost">Product Cost</th>
            <th className="admin-product-action">Action</th>
          </tr>
          <tr>
            <td className="admin-product-id">SP01</td>
            <td className="admin-product-name">Nike1</td>
            <td className="admin-product-brand">Nike</td>
            <td className="admin-product-image">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="#"
                />
              </div>
            </td>
            <td className="admin-product-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              quaerat praesentium dignissimos cum nemo id sapiente distinctio
              quis harum maxime iste alias voluptatum ratione, reprehenderit
              dolore aperiam voluptas unde libero.
            </td>
            <td className="admin-product-cost">500000d</td>
            <td className="admin-product-action">
              <button className="admin-product-update">Update</button>
              <button className="admin-product-delete">Delete</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default AdminProduct;
