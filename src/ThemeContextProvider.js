import React, { useState, useContext } from "react";

 const createcontext = React.createContext();

export function Gettheme() {
  return useContext(createcontext);
}

export function ThemeContextProvider({ children }) {
  const [color, setColor] = useState(false);

  function handleClick() {
    setColor((preValue) => !preValue);
  }
  return (
    <createcontext.Provider value={{ color, handleClick }}>
      {children}
    </createcontext.Provider>
  );
}
