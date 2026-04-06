import React from "react";
import "./AdminOrder.css";

const AdminOrder = () => {
  return (
    <div className="admin-order">
      <div className="admin-order-wrapper">
        <h2 className="admin-order-title">Order Management</h2>
        <div className="admin-order-box">
          <h3 className="admin-order-list">Order Lists</h3>
          <button className="admin-order-add">Add order</button>
        </div>
        <table className="admin-order-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Date</th>
              <th>Total</th>
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
                <div>
                  <button className="admin-order-update">Update</button>
                  <button className="admin-order-delete">Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOrder;
