/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const ToggleContext = createContext(null);

function UserProvider({ children }) {
  const [toggle, setToggle] = useState(true);
  return (
    <ToggleContext.Provider value={{ toggle, setToggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

export { UserProvider, ToggleContext };
