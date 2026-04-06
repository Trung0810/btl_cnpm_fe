import React from "react";
import "./AdminUpdateOrder.css";

const AdminUpdateOrder = () => {
  return (
    <div className="admin-update-order">
      <h2 className="admin-update-title">Update New Order</h2>
      <form>
        <div className="admin-update-wrapper">
          <label htmlFor="o-id">Order ID:</label>
          <input type="text" name="o-id" id="o-id" />
        </div>
        <div className="admin-update-wrapper">
          <label htmlFor="c-id">Customer ID:</label>
          <input type="text" name="c-id" id="c-id" />
        </div>
        <div className="admin-update-table">
          <label>Order Item Lists:</label>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="text" name="id" />
                </td>
                <td>
                  <input type="number" name="quantity" />
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <button>Add new Product</button>
        </div>
        <div className="admin-update-wrapper">
          <label htmlFor="date">Order Date:</label>
          <input type="date" name="date" id="date" />
        </div>
        <div className="admin-update-wrapper">
          <button>Update</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AdminUpdateOrder;
