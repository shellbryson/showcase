import React, { useState, createContext, useContext } from 'react';

// Create the context
const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {

  const [isBackgroundFade, setBackgroundFade] = useState(false)

  return (
    <AppContext.Provider value={{ isBackgroundFade, setBackgroundFade }}>
      {children}
    </AppContext.Provider>
  );
};

// Finally creating the custom hook
export const useSetBackgroundFade = () => useContext(AppContext);