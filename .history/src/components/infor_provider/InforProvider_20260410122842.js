import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const InforContext = createContext();

const InforProvider = (props) => {
  const [customer, setCustomer] = useState(null);
  const [admin, setAdmin] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    setCustomer(null);
    setAdmin(null);
    localStorage.removeItem("accessToken");
    navigate("/", { replace: true });
    console.log("hehehe");
  };

  return (
    <InforContext.Provider
      value={{ customer, setCustomer, handleLogout, admin, setAdmin }}
      {...props}
    ></InforContext.Provider>
  );
};

export { InforContext, InforProvider };
