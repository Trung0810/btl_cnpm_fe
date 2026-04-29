import React, { createContext } from "react";

const CartContext = createContext();

const CartProvider = (props) => {
  return <CartContext.Provider value={{}} {}></CartContext.Provider>;
};

export default CartProvider;
