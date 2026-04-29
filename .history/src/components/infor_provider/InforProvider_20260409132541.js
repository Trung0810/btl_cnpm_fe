import React, { createContext, useState } from "react";

const InforContext = createContext();

const InforProvider = () => {
  const [user, setUser] = useState(null);

  return (
    <InforContext.Provider
      value={{ user, setUser }}
      {...props}
    ></InforContext.Provider>
  );
};

export { InforContext, InforProvider };
