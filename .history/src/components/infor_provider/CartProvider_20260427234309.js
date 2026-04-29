import axios from "axios";
import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = (props) => {
  const [cart, setCart] = useState(null);
  const [ready, setReady] = useState(false);

  const token = localStorage.getItem("accessToken");

  const handleAddToCart = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8888/v1/api/carts/items",
        data,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      console.log("🚀 ~ handleAddToCart ~ response:", response);
    } catch (error) {
      console.log("🚀 ~ handleAddToCart ~ error:", error.response.data);
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, ready, setReady, handleAddToCart }}
      {...props}
    ></CartContext.Provider>
  );
};

export { CartContext, CartProvider };
