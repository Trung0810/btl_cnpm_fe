import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const InforContext = createContext();

const InforProvider = (props) => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("accessToken");
  };

  return (
    <InforContext.Provider
      value={{ user, setUser, handleLogout, admin, setAdmin }}
      {...props}
    ></InforContext.Provider>
  );
};

export { InforContext, InforProvider };
