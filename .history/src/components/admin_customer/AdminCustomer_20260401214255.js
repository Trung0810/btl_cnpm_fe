import React from "react";

const AdminCustomer = () => {
  return (
    <div className="admin-order">
      <div className="admin-order-wrapper">
        <h2 className="admin-order-title">Order Management</h2>
        <h3 className="admin-order-desc">Order Lists</h3>
        <table className="admin-order-table">
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Customer Name</th>
              <th>Address</th>
              <th>Phone number</th>
              <th>Email</th>
              <th>Total Spending</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>KH01</td>
              <td>Nguyen Duc Trung</td>
              <td>Ha Noi</td>
              <td>0343645587</td>
              <td>nguyenductrung0810@gmail.com</td>
              <td>6000000d</td>
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

export default AdminCustomer;
