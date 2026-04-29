import React, { createContext, useState } from "react";

const InforContext = createContext();

const InforProvider = (props) => {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("accessToken");
  };

  return (
    <InforContext.Provider
      value={{ user, setUser, handleLogout }}
      {...props}
    ></InforContext.Provider>
  );
};

export { InforContext, InforProvider };
