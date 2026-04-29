import axios from "axios";
import React, { useEffect, useState } from "react";
import standardization from "../helper_function/Standardization";
import { convertTime } from "../helper_function/ConvertTime";

const OrderList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchData = async () => {
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
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <table className="admin-order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Product List</th>
            <th>Order Date</th>
            <th>Update Date</th>
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
                <td>{convertTime(item.updatedAt)}</td>
                <td>{item.total}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
