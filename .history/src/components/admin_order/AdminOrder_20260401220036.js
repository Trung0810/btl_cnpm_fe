import React from "react";
import "./AdminOrder.css";

const AdminOrder = () => {
  return (
    <div className="admin-order">
      <div className="admin-order-wrapper">
        <h2 className="admin-order-title">Order Management</h2>
        <div className="admin-order-box">
          <h3>Order Lists</h3>
          <div>
            Total Revenue: <span>10000000d</span>
          </div>
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
                <div className="admin-order-list">
                  <p>Shoes Name</p>
                  <p>Quantity: 12</p>
                </div>
                <div className="admin-order-list">
                  <p>Shoes Name</p>
                  <p>Quantity: 12</p>
                </div>
                <div className="admin-order-list">
                  <p>Shoes Name</p>
                  <p>Quantity: 12</p>
                </div>
              </td>
              <td>01/04/2026</td>
              <td>1500000d</td>
              <td>
                <div>
                  <button className="admin-order-update">Update</button>
                  <button className="admin-order-delete">Delete</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>OD01</td>
              <td>KH01</td>
              <td>
                <div className="admin-order-list">
                  <p>Shoes Name</p>
                  <p>Quantity: 12</p>
                </div>
                <div className="admin-order-list">
                  <p>Shoes Name</p>
                  <p>Quantity: 12</p>
                </div>
                <div className="admin-order-list">
                  <p>Shoes Name</p>
                  <p>Quantity: 12</p>
                </div>
              </td>
              <td>01/04/2026</td>
              <td>1500000d</td>
              <td>
                <div>
                  <button className="admin-order-update">Update</button>
                  <button className="admin-order-delete">Delete</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>OD01</td>
              <td>KH01</td>
              <td>
                <div className="admin-order-list">
                  <p>Shoes Name</p>
                  <p>Quantity: 12</p>
                </div>
                <div className="admin-order-list">
                  <p>Shoes Name</p>
                  <p>Quantity: 12</p>
                </div>
                <div className="admin-order-list">
                  <p>Shoes Name</p>
                  <p>Quantity: 12</p>
                </div>
              </td>
              <td>01/04/2026</td>
              <td>1500000d</td>
              <td>
                <div>
                  <button className="admin-order-update">Update</button>
                  <button className="admin-order-delete">Delete</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>OD01</td>
              <td>KH01</td>
              <td>
                <div className="admin-order-list">
                  <p>Shoes Name</p>
                  <p>Quantity: 12</p>
                </div>
                <div className="admin-order-list">
                  <p>Shoes Name</p>
                  <p>Quantity: 12</p>
                </div>
                <div className="admin-order-list">
                  <p>Shoes Name</p>
                  <p>Quantity: 12</p>
                </div>
              </td>
              <td>01/04/2026</td>
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
