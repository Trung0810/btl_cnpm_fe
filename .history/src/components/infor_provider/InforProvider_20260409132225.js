import React, { createContext } from "react";

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
