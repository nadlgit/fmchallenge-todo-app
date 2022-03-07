import { ThemeProvider } from './ThemeContext';

export const AppProviders = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export { useTheme } from './ThemeContext';
