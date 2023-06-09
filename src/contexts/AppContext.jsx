import React, { useState, createContext, useContext } from 'react';

// Extras
import packageJson from '../../package.json';

// Create the context
const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {

  const [isBackgroundFade, setBackgroundFade] = useState(false);
  const [isShowingChronology, setShowingChronology] = useState(false);
  const [chronology, setChronology] = useState([]);

  const appVersion = packageJson.version;

  return (
    <AppContext.Provider value={{
      appVersion,
      isBackgroundFade,
      setBackgroundFade,
      isShowingChronology,
      setShowingChronology,
      setChronology,
      chronology
    }}>
      {children}
    </AppContext.Provider>
  );
};

// Finally creating the custom hook
export const useApp = () => useContext(AppContext);