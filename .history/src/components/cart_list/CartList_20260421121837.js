import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import "./CartList.css";
import axios from "axios";

const CartList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8888/v1/api/carts");
      } catch (error) {}
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
        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
      </ul>
    </div>
  );
};

export default CartList;
