import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./AdminUpdateCustomer.css";

const AdminUpdateCustomer = () => {
  return (
    <div className="admin-update-customer">
      <h2 className="admin-update-title">Update Customer</h2>
      <form>
        <div className="admin-update-wrapper">
          <label htmlFor="id">Customer ID:</label>
          <input type="text" name="id" id="id" />
        </div>
        <div className="admin-update-wrapper">
          <label htmlFor="name">Customer Name:</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="admin-update-wrapper">
          <label htmlFor="address">Address:</label>
          <input type="text" name="address" id="address" />
        </div>
        <div className="admin-update-wrapper">
          <label htmlFor="phone">Phone Number:</label>
          <input name="phone" id="phone"></input>
        </div>
        <div className="admin-update-wrapper">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="admin-update-wrapper">
          <button>Update</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AdminUpdateCustomer;
