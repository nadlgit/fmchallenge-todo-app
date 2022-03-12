import { ThemeProvider } from '../contexts/ThemeContext';

export const AppProviders = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export { useTheme } from '../contexts/ThemeContext';
