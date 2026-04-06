import React from "react";

const AdminUpdateOrder = () => {
  return (
    <div className="admin-update-order">
      <h2 className="admin-update-title">Update New Order</h2>
      <form>
        <div className="admin-update-wrapper">
          <label htmlFor="id">order ID:</label>
          <input type="text" name="id" id="id" />
        </div>
        <div className="admin-update-wrapper">
          <label htmlFor="name">order Name:</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="admin-update-wrapper">
          <label htmlFor="brand">Brand</label>
          <select name="brand" id="brand">
            <option value=""></option>
            <option value="Nike">Nike</option>
            <option value="Adidas">Adidas</option>
            <option value="Bitis">Bitis</option>
          </select>
        </div>
        <div className="admin-update-wrapper">
          <label htmlFor="image">Image (URL):</label>
          <input type="text" name="image" id="image" />
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
