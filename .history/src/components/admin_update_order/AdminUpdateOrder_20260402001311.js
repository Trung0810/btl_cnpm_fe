import React from "react";

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
        <div className="admin-update-wrapper"></div>
        <div className="admin-update-wrapper">
          <label htmlFor="date">Order Date:</label>
          <input type="date" name="date" id="date" />
        </div>
        <div className="admin-update-wrapper">
          <label htmlFor="desc">Description:</label>
          <textarea name="desc" id="desc"></textarea>
        </div>
        <div className="admin-update-wrapper">
          <label htmlFor="cost">Cost:</label>
          <input type="number" name="cost" id="cost" />
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
