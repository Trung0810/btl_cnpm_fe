import React, { createContext, useState } from "react";

const InforContext = createContext();

const InforProvider = (props) => {
  const [user, setUser] = useState("trung");

  return (
    <InforContext.Provider
      value={{ user, setUser }}
      {...props}
    ></InforContext.Provider>
  );
};

export { InforContext, InforProvider };
