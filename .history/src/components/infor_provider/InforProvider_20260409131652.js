import { create } from "lodash";
import React, { createContext } from "react";

const InforProvider = () => {
  const InforContext = createContext();

  const [user, setUser] = useState(null);
  return (
    <InforContext.Provider value={{ user, setUser }}></InforContext.Provider>
  );
};

export default InforProvider;
