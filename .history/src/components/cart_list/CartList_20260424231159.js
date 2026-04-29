import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import "./CartList.css";
import axios from "axios";

const CartList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState(null);

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
        setItems(response.data.data.items);
      } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error.response.data.error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="cart-list">
        <h2 className="cart-list-title">Cart List</h2>
        <div className="loading"></div>
      </div>
    );
  }

  return (
    <div className="cart-list">
      <h2 className="cart-list-title">Cart List</h2>
      <div className="cart-list-header">
        <span>Item</span>
        <span>Quantity</span>
        <span>Unit price</span>
      </div>
      <ul className="cart-list-item">
        {items && items.length > 0 ? (
          items.map((item) => (
            <CartItem
              key={item.shoesId}
              image={item.image}
              name={item.name}
              type={item.type}
              category={item.category}
              color={item.color}
              size={item.size}
              quantity={item.quantity}
              price={item.price}
            ></CartItem>
          ))
        ) : (
          <div
            style={{
              fontSize: "40px",
              fontWeight: "500",
              margin: "50px auto",
            }}
          >
            Your cart is empty. Start shopping now!
          </div>
        )}
      </ul>
    </div>
  );
};

export default CartList;
