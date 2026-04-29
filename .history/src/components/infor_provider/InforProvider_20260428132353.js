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
  };

  return (
    <InforContext.Provider
      value={{
        customer,
        setCustomer,
        admin,
        setAdmin,
        handleLogout,
      }}
      {...props}
    ></InforContext.Provider>
  );
};

export { InforContext, InforProvider };
