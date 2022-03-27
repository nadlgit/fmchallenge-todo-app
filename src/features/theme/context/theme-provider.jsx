import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children, initialTheme = 'dark' }) => {
  const [theme, setTheme] = useState(initialTheme);
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
