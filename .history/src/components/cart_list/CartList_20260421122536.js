import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import "./CartList.css";
import axios from "axios";

const CartList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:8888/v1/api/carts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("🚀 ~ fetchData ~ response:", response);

        setData(response.data.data);
      } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error.response.data.error);
        setTimeout(() => setLoading(false), 500);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="cart-list">
      <div className="cart-list-header">
        <span>Item</span>
        <span>Quantity</span>
        <span>Unit price</span>
      </div>
      <ul className="cart-list-item">
        {data?.items?.length > 0 &&
          data.items.map((item) => (
            <CartItem
              key={item.shoesId}
              image={item.image}
              name={item.name}
              color={item.color}
              size={item.size}
              quantity={item.quantity}
              price={item.price}
            ></CartItem>
          ))}
      </ul>
    </div>
  );
};

export default CartList;
