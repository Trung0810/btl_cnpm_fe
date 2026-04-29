import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { convertTime } from "../helper_function/ConvertTime";
import "./OrderList.css";
import { CartContext } from "../infor_provider/CartProvider";

const OrderList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { cart } = useContext(CartContext);

  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:8888/v1/api/orders/customers",
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
  }, [cart]);

  return (
    <div className="order-list">
      <table className="order-list-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product List</th>
            <th>Order Date</th>
            <th>Update Date</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.length > 0 &&
            data.map((item) => (
              <tr key={item._id}>
                <td>{item._id}</td>
                <td>
                  {item.items.map((element) => (
                    <div key={element.shoesId} className="order-list-items">
                      <p>{`${element.name}(${element.quantity})`}</p>
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
