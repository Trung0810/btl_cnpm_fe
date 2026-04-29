import React, { createContext } from "react";

const CartContext = createContext();

const CartProvider = (props) => {
  return <CartContext.Provider value={{}} {props}></CartContext.Provider>;
};

export default CartProvider;
