import React from "react";
import "./AdminProduct.css";

const AdminProduct = () => {
  return (
    <div className="admin-product">
      <h2 className="admin-product-title">Product Management</h2>
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
            quaerat praesentium dignissimos cum nemo id sapiente distinctio quis
            harum maxime iste alias voluptatum ratione, reprehenderit dolore
            aperiam voluptas unde libero.
          </td>
          <td>500000d</td>
          <td>
            <button className="admin-product-update">Update</button>
            <button className="admin-product-delete">Delete</button>
          </td>
        </tr>
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
            quaerat praesentium dignissimos cum nemo id sapiente distinctio quis
            harum maxime iste alias voluptatum ratione, reprehenderit dolore
            aperiam voluptas unde libero.
          </td>
          <td>500000d</td>
          <td>
            <button className="admin-product-update">Update</button>
            <button className="admin-product-delete">Delete</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default AdminProduct;
