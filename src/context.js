import React, { useState, useContext } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);

  const switchTheme = () => {
    setTheme(!theme);
  };

  return (
    <AppContext.Provider value={{ theme, switchTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
