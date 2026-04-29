import React, { useEffect, useState } from "react";
import "./AdminOrder.css";
import { useNavigate } from "react-router-dom";
import convertTime from "../helper_function/ConvertTime";
import standardization from "../helper_function/Standardization";
import axios from "axios";

const AdminOrder = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("accessToken");
      try {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:8888/v1/api/orders",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        console.log("🚀 ~ fetchData ~ response:", response);

        setData(response.data.data);
      } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="admin-order">
      {loading && <div className="loading"></div>}
      <div className="admin-order-wrapper">
        <h2 className="admin-order-title">Order Management</h2>
        <div className="admin-order-box">
          <h3>Order Lists</h3>
          <div>
            Total Revenue:{" "}
            <span>
              {data && data.reduce((sum, current) => sum + current, 0)}
            </span>
          </div>
        </div>
        <table className="admin-order-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Product List</th>
              <th>Order Date</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.length > 0 &&
              data.map((item) => (
                <tr key={item._id}>
                  <td>{item._id}</td>
                  <td>{standardization(item.customerName)}</td>
                  <td>
                    {item.items.map((element) => (
                      <div key={element.shoesId} className="admin-order-list">
                        <p>{element.name}</p>
                        <p>Quantity: {element.quantity}</p>
                      </div>
                    ))}
                  </td>
                  <td>{convertTime(item.createdAt)}</td>
                  <td>{item.total}</td>
                  <td>
                    <div>
                      <button
                        className="admin-order-update"
                        onClick={() => navigate("/admin/update-order")}
                      >
                        Update
                      </button>
                      <button className="admin-order-delete">Delete</button>
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

export default AdminOrder;
