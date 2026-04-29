import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = (props) => {
  const [cart, setCart] = useState(null);

  const handleAddToCart = () => {};

  return (
    <CartContext.Provider
      value={{ cart, setCart }}
      {...props}
    ></CartContext.Provider>
  );
};

export { CartContext, CartProvider };
