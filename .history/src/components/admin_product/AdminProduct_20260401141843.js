import React from "react";
import "./AdminProduct.css";

const AdminProduct = () => {
  return (
    <div className="admin-product">
      <div className="admin-product-wrapper">
        <h2 className="admin-product-title">Product Management</h2>
        <button className="admin-product-add">Add Product</button>
        <table className="admin-product-table">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Product Brand</th>
              <th>Product Image</th>
              <th>Product Description</th>
              <th>Product Cost</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SP01</td>
              <td>Nike1</td>
              <td>Nike</td>
              <td>
                <img
                  src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="#"
                />
              </td>
              <td>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                quo minus nostrum reiciendis assumenda, veniam facere laborum
                esse cupiditate deleniti labore illum, quis quos explicabo totam
                a quidem quod. Dolor!
              </td>
              <td>500000d</td>
              <td>
                {/* <div>
                  <button className="admin-product-update">Update</button>
                  <button className="admin-product-delete">Delete</button>
                </div> */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProduct;
