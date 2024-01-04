/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const ComposeContext = createContext(false);

function ComposeProvider({ children }) {
  const [isComposeEmail, setIsComposeEmail] = useState(false);
  const [isMax, setIsMax] = useState(false);
  return (
    <ComposeContext.Provider
      value={{ isComposeEmail, setIsComposeEmail, isMax, setIsMax }}
    >
      {children}
    </ComposeContext.Provider>
  );
}

export { ComposeProvider, ComposeContext };
