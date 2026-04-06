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
              <th>Customer ID</th>
              <th>Product List</th>
              <th>Date</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>OD01</td>
              <td>KH01</td>
              <td>
                <div>
                  <span>Nike</span>
                  <p>Quantity: 12</p>
                </div>
                <div>
                  <span>Nike</span>
                  <p>Quantity: 12</p>
                </div>
                <div>
                  <span>Nike</span>
                  <p>Quantity: 12</p>
                </div>
              </td>
              <td>01/04/1026</td>
              <td>1500000d</td>
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
