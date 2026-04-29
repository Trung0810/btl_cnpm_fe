import React, { createContext } from "react";

const CartContext = createContext();

const CartProvider = () => {
  return <CartContext.Provider></CartContext.Provider>;
};

export default CartProvider;
