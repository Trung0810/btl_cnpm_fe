import React, { useEffect, useState } from "react";
import "./AdminProduct.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminProduct = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:8888/v1/api/shoes");
        console.log("🚀 ~ fetchData ~ response:", response);

        setData(response.data.data);
      } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error.response.data.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleDelete = () => {};

  return (
    <div className="admin-product">
      <div className="admin-product-wrapper">
        {loading && <div className="loading"></div>}
        <h2 className="admin-product-title">Product Management</h2>
        <button
          className="admin-product-add"
          onClick={() => navigate("/admin/add-product")}
        >
          Add new Product
        </button>
        <table className="admin-product-table">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Product Brand</th>
              <th>Product Image</th>
              <th>Product Description</th>
              <th>Product Cost</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.length > 0 &&
              data.map((item) => (
                <tr key={item._id}>
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  <td>{item.brand}</td>
                  <td>
                    <img src={item.image} alt="#" />
                  </td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>
                    <div>
                      <button
                        className="admin-product-update"
                        onClick={() =>
                          navigate(`/admin/update-product/${item._id}`)
                        }
                      >
                        Update
                      </button>
                      <button
                        className="admin-product-delete"
                        onClick={handleDelete(item._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProduct;
