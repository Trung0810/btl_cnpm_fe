import React from "react";

const AdminProducts = () => {
  return (
    <div className="admin-product">
      <div className="admin-product-box">
        <h2 className="admin-product-title">Products Management</h2>
        <button className="admin-product-add">Add Product</button>
        <table className="admin-product-table">
          <tr>
            <td>Product ID</td>
            <td>Product Name</td>
            <td>Product Brand</td>
            <td>Product Image</td>
            <td>Product Description</td>
            <td>Product Cost</td>
            <td>Action</td>
          </tr>
          <tr>
            <td>Ma SP</td>
            <td>Ten SP</td>
            <td>Thuong Hieu</td>
            <td>
              <img
                src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="#"
              />
            </td>
            <td>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
              reiciendis praesentium placeat tenetur molestiae provident minima
              pariatur, quisquam exercitationem! Eaque recusandae architecto
              animi sed optio qui corrupti exercitationem placeat reiciendis.
            </td>
            <td>500000d</td>
            <td>
              <button className="admin-product-update"></button>
            </td>
            <td>
              <button className="admin-product-update"></button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default AdminProducts;
