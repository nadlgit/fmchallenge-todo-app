import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(false);
  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };
  // const toggleTheme = useCallback(() => {
  //   setIsLightMode((i) => !i);
  // }, []);
  return (
    <ThemeContext.Provider value={{ isLightMode, toggleTheme }}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error('Theme provider is required');
  }
  return theme;
};
